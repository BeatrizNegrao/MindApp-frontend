import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import ProductService from "../../services/ProductService";

type RootStackParamList = {
    EditProduct: { product: any };
};

type EditProductRouteProp = RouteProp<RootStackParamList, "EditProduct">;

export default function EditProduct() {
    const route = useRoute<EditProductRouteProp>();
    const navigation = useNavigation();
    const { product } = route.params;

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const [productId, setProductId] = useState<number | null>(null);

    const parseFormattedPrice = (formattedPrice: string): number => {
        if (!formattedPrice) return 0;
        
        return parseFloat(
            formattedPrice
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
        );
    };

    useEffect(() => {
        console.log("Produto recebido da rota:", product);
        
        if (product) {
            // Set product ID
            const id = product.id_produto || parseInt(product.id);
            setProductId(id);
            
            setName(product.nome || product.name || "");
            setDescription(product.descricao || product.description || "");
            
            if (typeof product.valor !== 'undefined') {
                setPrice(String(product.valor).replace('.', ','));
            } else if (typeof product.price === 'string' && product.price.includes('R$')) {
                const numericPrice = parseFormattedPrice(product.price);
                setPrice(String(numericPrice).replace('.', ','));
            } else if (product.price) {
                setPrice(String(product.price).replace('.', ','));
            }
            
            if (typeof product.quantidade_atual !== 'undefined') {
                setStock(String(product.quantidade_atual));
            } else if (typeof product.stock !== 'undefined') {
                setStock(String(product.stock));
            }
            
            setLoading(false);
        } else {
            Alert.alert("Erro", "Dados do produto não encontrados");
            navigation.goBack();
        }
    }, [route.params]);

    async function handleSave() {
        if (!name || !description || !price || !stock) {
            Alert.alert("Atenção", "Preencha todos os campos!");
            return;
        }
        
        if (!productId) {
            Alert.alert("Erro", "ID do produto não encontrado!");
            return;
        }
        
        // Verificar se o preço é um número válido
        const priceNumber = parseFloat(price.replace(',', '.'));
        if (isNaN(priceNumber)) {
            Alert.alert("Atenção", "O preço informado não é válido!");
            return;
        }
        
        const stockNumber = parseInt(stock);
        if (isNaN(stockNumber)) {
            Alert.alert("Atenção", "O estoque informado não é válido!");
            return;
        }
        
        try {
            const productData = {
                nome: name,
                descricao: description,
                valor: priceNumber,
                quantidade_atual: stockNumber
            };
            
            console.log("Dados a serem enviados:", productData);
            console.log("ID do produto:", productId);
            
            // atualiza o produto usando o ID
            await ProductService.updateProduct(productId, productData);
            
            Alert.alert("Sucesso", "Produto atualizado com sucesso!");
            navigation.goBack();
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            Alert.alert("Erro", "Falha ao salvar alterações.");
        }
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Edit Product</Text>
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
                        multiline={true}
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.halfInput]}>
                        <Text style={styles.inputLabel}>Price</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0,00"
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
                            value={stock}
                            onChangeText={setStock}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.editProductButton} onPress={handleSave}>
                <Text style={styles.editProductButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
}