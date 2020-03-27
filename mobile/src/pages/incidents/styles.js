// agora o styles é .js no mobile.
import { StyleSheet } from 'react-native';
// instale no terminal para usar ->expo install expo-constants
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1, // ocupar toda área
        paddingHorizontal: 24, // padding nas laterais
        paddingTop: Constants.statusBarHeight + 20, // 20px apos a barra superior.
    },

    header:{
        flexDirection: 'row', // no react por padrão a direção dos objetos são por colunas e estou alterando para linha.
        justifyContent: 'space-between', // distanciar e cria um espaço entre
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList:{
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 2,
        fontSize: 15,
        marginBottom: 16,
        color: '#737380',
    },

    
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 14,
        fontWeight: 'bold',
    }

});
