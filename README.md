# Viva Hospedagem App

Este é o repositório do aplicativo **Viva Hospedagem**, desenvolvido em React Native para gerenciar e cadastrar clientes de forma fácil e prática. O projeto utiliza uma interface interativa e acessível, integrando com uma base de dados SQLite para armazenamento local.

## Funcionalidades

- **Cadastro de Clientes**: Permite inserir e salvar novos clientes com nome e telefone.
- **Atualização de Dados**: Facilita a atualização dos dados de um cliente já cadastrado.
- **Pesquisa de Clientes**: Possibilita a busca de clientes pelo nome.
- **Remoção de Clientes**: Dá a opção de excluir um cliente do sistema.
- **Navegação para Detalhes**: Componente de navegação para ver mais informações de cada cliente.

## Tecnologias Utilizadas

- **React Native**: Estrutura principal do projeto.
- **Expo Router**: Gerenciamento de rotas de navegação.
- **SQLite**: Banco de dados para armazenamento local.
- **TypeScript**: Tipagem para um código mais seguro e manutenção facilitada.

## Instalação

Siga os passos abaixo para instalar e executar o projeto em seu ambiente local.

1. Clone o repositório:

   ```bash
   git clone https://github.com/PedroAvilaPaiDaManu/AppReactVivaHospedagem.git

Navegue até a pasta do projeto:

bash
Copiar código
cd VivaHospedagemApp/app
Instale as dependências:

bash
Copiar código
npm install
Inicie o aplicativo:

bash
Copiar código
npx expo start
Estrutura de Arquivo
Index.tsx: Arquivo principal que contém a lógica e interface do cadastro e listagem de clientes.
components/Input.tsx: Componente para entrada de dados no aplicativo.
components/Product.tsx: Componente para exibição de informações e operações (detalhes, excluir) sobre os clientes.
database/useProductDatabase.ts: Implementação da interface com o banco de dados SQLite para operações CRUD.
Uso
Cadastro de Clientes:

Insira o nome e o telefone do cliente e pressione Salvar.
Atualização de Dados:

Clique em um cliente existente para carregar os dados, faça as modificações e pressione Salvar.
Pesquisa:

Digite um nome no campo de pesquisa para filtrar a lista de clientes.
Exclusão de Clientes:

Pressione o botão de exclusão em um cliente para removê-lo.
Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/NovaFuncionalidade).
Commit as mudanças (git commit -m 'Adiciona nova funcionalidade').
Dê push na branch (git push origin feature/NovaFuncionalidade).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a MIT License.

csharp
Copiar código

Este formato Markdown está pronto para ser usado como README no GitHub e inclui todas as seções essenciai
