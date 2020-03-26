// importo o State do React para que seja possível manipular os objetos no HTML usando React. Regra importação: import React, { useState } from 'react';
import React from 'react';
// importando css global
import './global.css';

// não precisa colocar index, pois ele sempre procura por esta pasta.
import Router from './router';

// JSX (Java Script XML)

function App() {
  return (
   <Router />
  );
}

export default App;






/**
 * Usando o State do React para incrimentar um valor (Toda vez q for necessário armazenar uma variável usaremos um estado)
 * function App() {
 *
 * const [counter, setConter] = useState(0)
 * // o useState retorna um Array [Valor_Variavel, Função_atualização_Atualizar_Variável]
 *function increment() {
 *  setConter(counter + 1);
 * }
 *
 *return (
 *  // colocando componente Header no App
 *  // utilize '{}' para colocar uma variável no html
 *    <div>
 *        <Header> Contador: { counter } </Header>
 *        <button onClick={increment}>Incrementar</button>
 *    </div>
 *  
 *);
 *}
 */

// Importando componente Header (Somente para estudo)
// import Header from './Header'