import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListProducts from '../pages/listProducts'
import RegisterProducts from '../pages/registerProducts';


const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Products List"
                component={ListProducts}
            />
            <Tab.Screen
                name="Register Products"
                component={RegisterProducts}
            />
            
        </Tab.Navigator>
    );
}