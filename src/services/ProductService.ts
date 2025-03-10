import api from './UserService';
import { AxiosError } from 'axios';

export interface IProduct {
    id_produto?: number;
    nome: string;
    descricao: string;
    valor: number;
    quantidade_atual: number;
}

const ProductService = {
    async getAllProducts() {
        try {
            const response = await api.get('/product');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            throw error;
        }
    },
   
    async getProductById(id: number) {
        try {
            // Usando backticks (`) em vez de aspas simples (')
            const response = await api.get(`/product/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            throw error;
        }
    },
   
    async createProduct(productData: Omit<IProduct, 'id_produto'>) {
        try {
            const response = await api.post('/product', productData);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            throw error;
        }
    },
   
    async updateProduct(id: number, productData: Omit<IProduct, 'id_produto'>) {
        try {
            // Usando backticks (`) em vez de aspas simples (')
            console.log(`Enviando PUT para /product/${id} com dados:`, productData);
            const response = await api.put(`/product/${id}`, productData);
            return response.data;
        } catch (error: unknown) {
            // Usando backticks (`) em vez de aspas simples (')
            console.error(`Erro ao atualizar produto ID ${id}:`, error);
            // Exibir mais detalhes do erro se disponíveis
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error('Resposta de erro:', {
                    status: axiosError.response.status,
                    data: axiosError.response.data
                });
            }
            throw error;
        }
    },
   
    async deleteProduct(id: number) {
        try {
            // Usando backticks (`) em vez de aspas simples (')
            await api.delete(`/product/${id}`);
            return true;
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            throw error;
        }
    }
};

export default ProductService;