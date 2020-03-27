import React from 'react';
// importa para vir por volta das rotas (lebra Browser no frontEnd)
import {NavigationContainer} from '@react-navigation/native';
// docs.expo.io (procurar por routing) => Guia para navegação => reactnavigation.org  => Getting started (npm install @react-navigation/native)
import {createStackNavigator} from '@react-navigation/stack';
// criada navegação por botões no app. Agora iremos criar as rotas.
// screenOptions={{ headerShown: false}} para ocultar o título.
const AppStack = createStackNavigator();

// AppStack.Screen é o recebe a rota como um componente, e neste cenário eu importo as páginas abaixo

import Incidents from './pages/incidents';
import Detail from './pages/detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>

    )
}