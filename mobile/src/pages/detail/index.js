import React from 'react';
import { Feather } from '@expo/vector-icons';
// para navegação
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, View, Text, TouchableOpacity, Linking } from 'react-native';
// pegando tudo de email composer e colocando na variável MailComposer
import * as MailComposer from 'expo-mail-composer';

// destaforma ele já pega os 3 logos para se ajustar a resolução da tela. desde que deixe conforme digitado.
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();

    // pegar parâmetros que vem da rota. o incident.
    const route = useRoute();

    const incident = route.params.incident

    const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;

        // igual ao history no frontEnd
        function navigationBack() {
            // goBack é retroceder.
            navigation.goBack();
        }
        // função para enviar e-mail com: assunto, destino e assunto.
        function sendMail() {
            MailComposer.composeAsync({
                subject: `Herói do caso: ${incident.title}`,
                recipients: [incident.email],
                body: message,

            })
        }
        // deeplinkig p/ abrir apps no celular.
        function sendWhatsapp() {
            Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
        }
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL'
                  }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroTitleDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                    <Text  style={styles.actionsText}> Whatsapp </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={sendMail}>
                <Text  style={styles.actionsText}> E-mail </Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}