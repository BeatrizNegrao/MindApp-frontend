import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    button: {
        width: 230,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6f7475',
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
})