import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import ProductService from "../../services/ProductService"

type RootStackParamList = {
  ProductDetails: { product: any };
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

export default function ProductDetails() {
  const route = useRoute<ProductDetailsRouteProp>();
  const navigation = useNavigation<any>();
  const { product } = route.params;

  const handleRemoveProduct = () => {
    Alert.alert(
      "Remove Product",
      'Do you really want to remove the product?',
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            try {
              const productId = product.id_produto || product.id;
              const success = await ProductService.deleteProduct(productId);

              if (success) {
                Alert.alert("Sucesso", "Produto removido com sucesso!");
                navigation.goBack();
              } else {
                Alert.alert("Erro", "Erro ao remover produto");
              }
            } catch (error) {
              Alert.alert("Erro", "Não foi possível conectar ao servidor");
              console.error(error);
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
 
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => navigation.navigate('EditProduct', { product })}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Product details</Text>
      </View>

      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <View style={styles.details}>
        <Text style={styles.stock}>Stok: {product.stock}</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>Description: {product.description}</Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={handleRemoveProduct}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}