// Importando o idioma pt-BR na biblioteca de idiomas.
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes';

// view para div e text para texto na construção do app
// para estilos no projeto, declato a stule e crio uma constante com as propriedades do estilo. StyleSheet para criar o estilo (create)
// No estilo do React ñ tem herança, cada objeto precisa ter seu style.

export default function App() {
  return (
    <Routes />
  );
}
