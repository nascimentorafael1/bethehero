// agora o styles é .js no mobile.
import { StyleSheet } from 'react-native';
// instale no terminal para usar ->expo install expo-constants
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 15,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 2,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#13131a',
        lineHeight: 25,
    },

    heroTitleDescription: {
        fontSize: 14,
        color: '#737380',
        marginTop: 6,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionsText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})