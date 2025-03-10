import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20
    },
    backButton: {
        position:'absolute',
        alignSelf:'flex-start',
        top: 0,
        padding: 2
    },
    backButtonText: {
        fontSize:24,
        color:'black',
        fontWeight:'bold'
    },
    boxTop: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#333',
        marginTop: 30,
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
        marginTop: 15,
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        elevation: 5
    },
    input: {
        flex:1,
        height: '100%',
        fontSize: 16
    },
    button: {
        width: '90%',
        height: 50,
        marginTop: 70,
        color: 'white',
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
        marginTop: 100, 
        fontWeight: 'bold'
    },
});
