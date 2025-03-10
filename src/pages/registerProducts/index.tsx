import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ProductService from '../../services/ProductService';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function RegisterProducts() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function handleRegisterProduct() {
    if (!name || !description || !price || !amount) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      await ProductService.createProduct({
        nome: name,
        descricao: description,
        valor: Number(price),
        quantidade_atual: Number(amount)
      });

      Alert.alert("Sucesso", "Produto registrado com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível registrar o produto");
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.boxTop}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Register Product</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Product Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Product name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Product description"
              value={description}
              onChangeText={setDescription}
              numberOfLines={4}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, styles.halfInput]}>
              <Text style={styles.inputLabel}>Price</Text>
              <TextInput
                style={styles.input}
                placeholder="0.00"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
              />
            </View>

            <View style={[styles.inputGroup, styles.halfInput]}>
              <Text style={styles.inputLabel}>Stock</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.registerProductButton}
          onPress={handleRegisterProduct}
        >
          <Text style={styles.registerProductButtonText}>Register Product</Text>
        </TouchableOpacity>
      </View>
  );
}