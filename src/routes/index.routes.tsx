import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./button.routes";
import EditProduct from "../pages/editProducts";
import Cadastro from "../pages/cadastro";
import ProductDetails from "../pages/productsDetails";

export default function Routes() { //Rotas de navegação
    
    
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:"#FFF"
                }
            }}
            >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="EditProduct"
                component={EditProduct}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
            />
        </Stack.Navigator>
    )
}
