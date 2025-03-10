# Aplicação Frontend para Gerenciamento de Produtos

## Requisitos de Instalação

Antes de executar a aplicação, é necessário configurar a URL da API:

1. Localize o arquivo `AppMind-front/src/services/UserService.tsx`
2. Altere a propriedade `baseURL` para apontar para o endereço IP do seu servidor backend

### Como encontrar o endereço IP (Windows):
1. Abra o prompt de comando
2. Digite o comando `ipconfig`
3. Localize e use o valor do "Endereço IPv4"

### Exemplo de configuração:

```typescript
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.102:3333'
});

export default api;
```

## Executando a Aplicação

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie a aplicação:
   ```
   npx expo
   ```

