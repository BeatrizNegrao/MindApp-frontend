import React, { useState } from "react";

import {
    Text,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { style } from "./styles"
import { Input } from "../../components/input"
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import api from '../../services/UserService';

export default function Cadastro() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    async function getCadastro() {
        setLoading(true);
        try {
            if (!name || !email || !password || !confirmPassword) {
                Alert.alert('Atenção', 'Preencha todos os campos!');
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('Atenção', 'As senhas não coincidem!');
                return;
            }

            console.log('Enviando requisição para /users', { nome: name, email, senha: password });
            
            const response = await api.post('/users', {
                nome: name,
                email,
                senha: password
            });

            if (response.status === 201) {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                navigation.navigate('Login');
            }
        } catch (error: any) {
            if (error.response) {
                Alert.alert('Erro', error.response.data.error || 'Erro ao realizar cadastro');
            } else {
                Alert.alert('Erro', 'Erro ao conectar com o servidor');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}> 
                    <Text style={style.backButtonText}>←</Text>
                </TouchableOpacity>
            <Text style={style.title}>Register</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={name}
                    onChangeText={setName}
                    title="Name"
                    placeholder="Username"
                />
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
                    placeholder="Create your password"
                    secureTextEntry={showPassword}
                />
                <Input
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    title="Confirm password"
                    placeholder="Confirm your password"
                    secureTextEntry={showPassword}
                />
                
            </View>
            <Button style={style.button}
                    text="Create An Account"
                    loading={loading}
                    onPress={getCadastro}
                />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={style.TextBotton}>Have an account? Sing In</Text>
            </TouchableOpacity>
        </View>
    );
}
