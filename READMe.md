# 🍻 Cardápio da Taverna Medieval

## 💻 Sobre o Projeto
Uma aplicação front-end interativa e temática, desenvolvida em React, que simula o cardápio digital de uma taverna medieval. O projeto foca em componentização, gerenciamento de estado dinâmico e consumo de uma API local, apresentando uma interface responsiva construída com a técnica de Glassmorphism.

## ✨ Funcionalidades
* **Consumo de API Local:** Requisições assíncronas (via `fetch`) para buscar os dados dos pratos e bebidas em um servidor Express rodando simultaneamente.
* **Filtros Dinâmicos Multi-camadas:** * Filtragem por **categorias** (Almoço, Janta, etc.) utilizando botões de rápido acesso.
  * Busca instantânea por **texto** na barra de pesquisa, renderizando os resultados em tempo real.
* **Gerenciamento de Estado de UI:** Tratamento visual para os estados de `Loading` (carregamento da API) e `Error` (falha na requisição), melhorando a experiência do usuário.
* **Design Reativo e Glassmorphism:** Interface responsiva construída com Flexbox. Os cards dos pratos utilizam a técnica de *Glassmorphism* (através de `backdrop-filter: blur` e fundos translúcidos) para um visual moderno e perfeitamente integrado ao tema da Taverna.
* **Boas Práticas de Arquitetura:** Separação lógica de estados (`data` vs `filtro`) para garantir a imutabilidade do cardápio base, componentização focada em manter o código limpo (DRY) e uso de `PropTypes` para a proteção dos dados.

## 🛠️ Tecnologias Utilizadas
* **[React](https://react.dev/)**
* **[Vite](https://vitejs.dev/)**
* **[Styled-Components](https://styled-components.com/)** (Arquitetura de CSS-in-JS e estilos globais)
* **[Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)** (Servidor backend local simulando uma API RESTful)

## 🚀 Como executar o projeto

### Pré-requisitos
É necessário ter o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/) instalados na sua máquina.

### Passo a Passo

1. Clone este repositório:

```bash
git clone https://github.com/VitorOnRails/taverna.git
```

2. Acesse a pasta do projeto:

```bash
cd projeto-taverna
```

3. Acesse a pasta do servidor:

```bash
cd server
```

4. Instale as dependências do back-end:

```bash
npm install
```

5. Execute o servidor:

```bash
npm run dev
```

(Deixe este terminal aberto para que a API continue rodando na porta 9000).

6. Abra um **novo terminal** e acesse a pasta da aplicação front-end:

```bash
cd projeto-taverna/app
```

7. Instale as dependências do front-end:

```bash
npm install
```

8. Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

9. O aplicativo será aberto no seu navegador padrão ou você pode acessar o endereço abaixo para pedir um Hidromel!

http://localhost:5173