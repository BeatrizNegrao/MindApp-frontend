import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#333',
        paddingVertical: 20,
        alignSelf: 'flex-start'
    },
    boxMid: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    boxInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        elevation: 3
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16 
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        color: 'black',
        fontSize: 14,
        marginTop: 20,
    },
    button: {
        width: '90%',
        height: 50,
        marginTop: 40,
        color:'white',
        backgroundColor: '#007BFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    showPasswordButton: {
        marginTop: 10,
        alignSelf: 'flex-end'
    },
    TextBotton: {
        fontSize: 16,
        color: 'black',
        marginTop: 280,
        fontWeight: 'bold'
    }
});
