// useEffect: disparar alguma função em um determinado momento.
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

import './styles.css';


export default function Profile() {
    // visto q são várias informações, retorna como vetor no useState
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    // useEffect(Qual função?, Quando executar? (Array de dependecias). Exemplo: se colocar o ongName e alterar o valor da const a função é executada. Agora se deixar vazio a função é executada uma vez somente )
    useEffect(() => {
        //pegar a rota com os incidentes no backend, e passar o parâmetro (como objeto {}) de Header (veja insomnia) que foi configurado no backend
        // then para pegar as respostas usando o useState
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then( response => {
            // Veja no insomnia (profile -> preview) que a resposta é um array com os dados
            setIncidents(response.data);
        })

    } , [ongId] );

    async function handleDeleteIncident(id) {
        try {
            // método para excluir (veja a crase para colocar a rota com java objeto)
            await api.delete(`incidents/${id}`, {
            // enviar o header com a ong p/ deletar, veja no insomnia o header
                headers: {
                    Authorization: ongId,
                }
            });

            // usando o State para atualizar a tela, pego todos os incidentes, faço um filtro p/ retornar todos, menos o que eu deletei
            setIncidents(incidents.filter(incident => incident.id !== id));

        }
        catch (err) {
            alert('Erro ao deletar caso, tente novamente!');
        }
    } 

    // para logout
    function handleLogout() {
         // limpo o localStorage
         localStorage.clear();
         // uso o useHistory p/ retornar a para tela de login
         history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt='Be The Hero' />
                <span>Bem vinda, { ongName }</span>
                <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1> Casos Cadastrados </h1>

            <ul>
               {
                   // map para realizar o mapeamento dos dados e retornar os resultados
                   // parenteses na função para ñ colocar return e trazer diretamente o resultado.
                   // veja abaixo que retorno cada campo do vetor em um local do html
                   // colocar o key no primeiro elemento com id para manipulação
                   // Para deixar em formato de moeda: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) ESTUDAR ISSO.
                   // Cuidado: no onClick do botão é importante passar uma função nova, senão ele executa no momento do carregamento e exclui todos os registros
                   incidents.map(incident => (
                    <li key={ incident.id }>
                    <strong>CASO:</strong>
                    <p>{ incident.title }</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{ incident.description }</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }</p>
                    
                    
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                   ))
               }
            </ul>
        </div>
    );
}
