# Visualizador de Perfil do GitHub

Este é um projeto desenvolvido para praticar o consumo de APIs externas, manipulação do DOM e design responsivo. A aplicação permite buscar por um usuário do GitHub e visualizar suas principais informações e repositórios recentes.

## 📋 Funcionalidades

- **Busca de Usuário:** Pesquise por qualquer nome de usuário válido do GitHub.
- **Perfil Detalhado:** Exibe foto de perfil, nome, biografia, número de seguidores e pessoas que está seguindo.
- **Listagem de Repositórios:** Mostra os 10 repositórios mais recentes, incluindo:
  - Nome do repositório (com link direto para o GitHub).
  - Quantidade de Estrelas (Stars).
  - Quantidade de Forks.
  - Quantidade de Observadores (Watchers).
  - Linguagem principal utilizada.
- **Responsividade:** Layout adaptável para dispositivos móveis, tablets e desktops.
- **Tratamento de Erros:** Mensagens amigáveis caso o usuário não seja encontrado ou o campo de busca esteja vazio.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização com uso de Variáveis CSS, Flexbox e Grid Layout.
- **JavaScript (ES6+):**
  - **Fetch API:** Para requisições assíncronas à API do GitHub.
  - **ES Modules:** Organização do código em módulos (`index.js`, `services.js`, `screen.js`) para melhor manutenção.
  - **Async/Await:** Sintaxe moderna para lidar com promessas.

## 📂 Estrutura do Projeto

```text
buscar-usuario/
│
├── index.html          # Arquivo principal
├── README.md           # Documentação do projeto
└── src/
    ├── css/
    │   ├── styles.css      # Estilos globais e variáveis
    │   └── responsive.css  # Ajustes para responsividade
    │
    └── js/
        ├── index.js        # Lógica principal e eventos
        ├── services.js     # Comunicação com a API do GitHub
        └── screen.js       # Renderização e manipulação do HTML
```

## 🔧 Como Executar

1. Faça o download ou clone este repositório.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador de preferência.

---
Desenvolvido para fins de estudo e portfólio.