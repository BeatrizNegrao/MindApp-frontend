import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator, RefreshControl, Image } from "react-native";
import { useNavigation, NavigationProp, useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";
import ProductService, { IProduct } from "../../services/ProductService";

interface ProductDisplay {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: any;
}

export default function ListProducts() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [products, setProducts] = useState<ProductDisplay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Função para formatar o preço para o formato brasileiro
  const formatPrice = (price: number | undefined): string => {
    if (price === undefined || price === null) {
      return "Preço não disponível";
    }
    try {
      return `R$ ${price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    } catch (error) {
      return "R$ 0,00";
    }
  };

  // Função para garantir que temos um valor numérico válido
  const ensureNumber = (value: any): number => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      const parsed = parseFloat(value);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Função para obter a imagem pelo ID do produto
  const getProductImage = (productId: string) => {
    if (!productId) return null;

    const images: { [key: string]: any } = {
      "5": require("../../img/iphone16.png"),
      "6": require("../../img/mouse.jpeg"),
      "7": require("../../img/notebook.png"),
      "8": require("../../img/tv.jpeg"),
      "9": require("../../img/teclado.png")
    };

    return images[productId] || null;
  };

  // Função para buscar produtos
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await ProductService.getAllProducts();

      const formattedProducts: ProductDisplay[] = data.map((item: IProduct) => {
        const productId = item.id_produto?.toString() || "";

        return {
          id: productId,
          name: item.nome || "Produto sem nome",
          description: item.descricao || "Sem descrição",
          price: formatPrice(ensureNumber(item.valor)),
          stock: ensureNumber(item.quantidade_atual),
          image: getProductImage(productId)
        };
      });

      setProducts(formattedProducts);
      setError(null);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
      setError("Não foi possível carregar os produtos.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
      return () => { };
    }, [])
  );

  const renderProducts = ({ item }: { item: ProductDisplay }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      {item.image ? (
        <Image source={item.image} style={styles.image} />
      ) : (
        <View style={[styles.image]}>
          <Text>Sem imagem</Text>
        </View>
      )}
      <View style={styles.productDetails}>
        <View style={styles.headerRow}>
          <Text style={styles.productName}>{item.name}</Text>
        </View>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.separator} />
        <View style={styles.footerRow}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.stockText}>x {item.stock}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Products</Text>
      </View>
      <TextInput placeholder="Search" style={styles.searchBar} />

      {loading && !refreshing ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : products.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum produto encontrado no banco de dados.</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderProducts}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      )}
    </View>
  );
}