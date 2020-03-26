import React from 'react';

//Propriedade: Utilizando o props no Header[ default function Header(props) ]. Dentro do <header> posso colocar desta forma <h1> { props.title } </h1>. E no arquivo App.js deixo desta forma: <Header title='Título Page' />
// Não Usa no projeto. somente para estudo.

export default function Header({ children }) {
    return (
        <header>
            <h1> { children } </h1>
        </header>
    );
}