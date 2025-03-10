import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { style } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import api from '../../services/UserService';

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        setLoading(true);
        try {
            if (!email || !password) {
                Alert.alert('Atenção', 'Preencha todos os campos!');
                return;
            }
    
            console.log("Tentando login com:", { email:email, senha: password });
            const response = await api.post('/users/login', {
                email: email,
                senha: password

            });
    
            console.log('Resposta do servidor:', response.data); 
    
            if (response.status === 200) {
                navigation.navigate('BottomRoutes');
            }
        } catch (error: any) {
            console.error('Erro completo:', error); 
            if (error.response) {
                Alert.alert('Erro', error.response.data.error || 'Erro ao fazer login');
            } else {
                Alert.alert('Erro', 'Erro ao conectar com o servidor');
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <View style={style.container}>
                <Text style={style.title}>Login</Text>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="Email"
                    placeholder="Example@gmail.com"
                />
                <Input
                 value={password}
                 onChangeText={setPassword}
                 title="Password"
                 placeholder="Password"
                 secureTextEntry={showPassword}
                />
                <TouchableOpacity onPress={() => Alert.alert('Recuperação de senha')}>
                    <Text style={style.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <Button style={style.button}
                    text="Login"
                    loading={loading}
                    onPress={getLogin}
                />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={style.TextBotton}>Create new account? <Text style={style.TextBotton}>Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}