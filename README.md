# Guia de Instalação e Uso

## Instalação

Siga os passos abaixo para instalar e rodar o projeto localmente:

1. **Clone o repositório**:
```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
```

Navegue até o diretório do projeto:

```bash
cd seu-repositorio
```

Instale as dependências
```bash
cd npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse o aplicativo no navegador:

Abra o navegador e vá para http://localhost:3000

Como o Site Funciona
Funcionalidades
Barra de Pesquisa: Permite ao usuário pesquisar gifs no banco de dados do Giphy via API.
Exibição de Resultados: Mostra os gifs em miniaturas organizadas em um layout de grade.
Paginação: Os resultados são paginados para melhorar a performance. O usuário pode carregar mais resultados usando os botões de paginação.
Limpar Pesquisa: Permite ao usuário limpar os resultados da pesquisa atual.
Uso
Pesquisar Gifs:

Digite uma palavra-chave na barra de pesquisa centralizada na página.
Clique no botão "Search" para buscar gifs relacionados.
Os resultados serão exibidos em um layout de grade abaixo da barra de pesquisa.
Navegar pelos Resultados:

Use os botões "Previous" e "Next" para navegar pelas páginas de resultados.
O botão "Previous" ficará desabilitado quando estiver na primeira página.
O botão "Next" ficará desabilitado quando não houver mais resultados para carregar.
Limpar Resultados:

Clique no botão "Clear Search" para limpar os resultados da pesquisa e resetar a barra de pesquisa.
Notas
Paginação: A aplicação carrega 50 gifs por página. Use os botões de paginação para navegar pelas páginas.
Manejo de Formulários: O envio do formulário não recarrega a página. Ele busca dados com base na entrada do usuário.
Performance: O layout em grade garante a renderização eficiente dos gifs. A paginação ajuda a gerenciar grandes conjuntos de dados de maneira eficiente.
Compatibilidade de Navegador: A aplicação foi desenvolvida e testada usando Chrome/Chromium para melhor performance e compatibilidade.
Tecnologias Utilizadas
Vue.js: Framework JavaScript para construir interfaces de usuário.
Pinia: Biblioteca de gerenciamento de estado para Vue.js.
Axios: Biblioteca para fazer requisições HTTP.
Giphy API: API utilizada para buscar gifs.
Contato
Para mais informações, entre em contato pelo email: andreaugustodossantos@gmail.com

