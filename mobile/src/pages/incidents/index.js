import React,{ useState, useEffect } from 'react';
// nome do ícone nadeclaração do objeto.
import { Feather } from '@expo/vector-icons';
// para navegação
import { useNavigation } from '@react-navigation/native';
// TouchableOpacity = torna clicavel o objeto com efeito de opacidade
// FlatList = para criar scroll naaplicação.
import { FlatList, Text, Image, View, TouchableOpacity } from 'react-native';

import api from '../../services/api';

// destaforma ele já pega os 3 logos para se ajustar a resolução da tela. desde que deixe conforme digitado.
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);

    const [total, setTotal] = useState(0);

    // para paginação infinita, precisa iniciar na página 1. Loading para carregar uma pagina por vez.
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const navigation = useNavigation();

    // igual ao history no frontEnd, consigo passar um parametro p/ especificar o incidente.
    function navigationToDetail(incident) {
        // nome da rota
        navigation.navigate('Detail', { incident });
    }

    async function loadIncident() {
        // se o loading for true é para retornar, senão o sistema fara mais requisições enquanto está aguardando.
        if (loading) {
            return;
        }
         // se tiver mais de 1 incidente e o tamanho dos incidentes for = ao total, não carregar mais
         if ( total > 0 && incidents.length === total) {
            return;
        }
       
        // informa que está carregando
        setLoading(true);
        // informa a pagina para a rota
        const response = await api.get('incidents', {
            params: { page }
        });
        // crio um vetor pegando tudo que recebi (...incidents) e tudo que vem do response (...response.data), desta forma anexo 2 vetores e um vetor.
        setIncidents([ ...incidents, ...response.data]);

        setTotal(response.headers['x-total-count']);
        // incrementa para chamar próxima página
        setPage( page + 1)
        // retorna o loading para o false.
        setLoading(false);
    }

    useEffect(() => {
        loadIncident()
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{ total } casos </Text>.
                </Text>
            </View>

            <Text style={styles.title}> Bem-vindo! </Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia. </Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                // essa função é igual ao map no frontEnd, e precisa passar o valor como string.
                keyExtractor={incident => String(incident.id)}
                // ocultar barra de scroll 
                showsVerticalScrollIndicator={true}
                //recebe uma função quando chega no final da lista
                onEndReached={loadIncident}
                // nesta função o sistema  analisa de 0.0 a 1 qual o % para carregar a lista
                onEndReachedThreshold={0.2}
                // o render item recebe vários parâmetros, mas iremos usar só os dados recebidos que é item
                // precisa importar no arquivo geral app.js a biblioteca de idiomas
                renderItem={({ item: incident }) => (
                    
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                      {Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL'
                      }).format(incident.value)}
                    </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        // sempre colocar uma arrow function quando preciso passar parametro.
                        onPress={() => navigationToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>

                )}
            />
        </View>
    );
}