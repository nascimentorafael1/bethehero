import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import '../../services/api';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {
    //usando state para trabalhar com os dados no formulário. informo inclusive q ela é vazia.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    //para retornar a tela inicial, apos cadastro
    const history = useHistory();
    
   // função responsavel pelo cadastro de usuários. async para aguardar a resposta com ID da ONG
    async function handleRegister(e) {    
        // para não atulizar o formulário no envio
        e.preventDefault();
        
        // variável para pegar os dados dos campos
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            //sempre usar o async na função junto com await para aguardar a resposta.
            //uso a api. Informo o método(rota, dados que irei enviar). Axios já envia em JSON.
            const response = await api.post('ongs', data);
            // mensagem com ID de acesso. uso ` para colocar um objeto java e no response.data busco o id que retorna do backend
            alert(`Seu ID de acesso: ${response.data.id}`);
            // retorna a tela inicial, apos cadastro.
            history.push('/');
        }
        // em caso de erro, retorna a mensagem abaixo.
        catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt='Be The Hero' />
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da Ong"
                        value={name} //variável do State 
                        onChange={e => setName(e.target.value)} //Ouvir as mudanças no Input. No evento(e) de mudança realizo a função para pegar o valor do input. Desta forma colocando o valor no State name pela função setName.
                    />
                    <input type="email" 
                        placeholder="E-mail" 
                        value={email}  
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp} 
                        onChange={e => setWhatsapp(e.target.value)} 
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city} //variável do State 
                            onChange={e => setCity(e.target.value)} 
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf} //variável do State 
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}