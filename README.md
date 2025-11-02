🐾 Instituto Pata Feliz - Plataforma Web


## 1. Visão Geral do Projeto

Este projeto é uma plataforma web completa e profissional desenvolvida para o Instituto Pata Feliz, uma ONG focada no resgate e adoção de cães e gatos. O objetivo é aplicar de forma integrada os conceitos de desenvolvimento front-end (HTML5, CSS3, JavaScript) para criar uma presença digital que ajude a organização a gerenciar atividades, divulgar projetos, captar recursos e engajar voluntários.



Este repositório corresponde ao desenvolvimento do projeto acadêmico XYZ, com foco na aplicação prática de tecnologias web em um contexto socialmente relevante.



🚀 Veja o projeto ao vivo: [Instituto Pata Feliz](https://magdielbeltrame.github.io/Instituto-pata-feliz/)



## 2. Contexto e Relevância

O terceiro setor brasileiro, que movimenta bilhões anualmente, carece de presença digital adequada. Muitas ONGs, como o Instituto Pata Feliz, não possuem recursos para desenvolver plataformas robustas. Este projeto visa suprir essa lacuna, oferecendo uma solução acessível e profissional.



## 3. Objetivos

**Geral:**  

Desenvolver uma plataforma web que permita ao Instituto Pata Feliz gerenciar suas atividades de resgate e adoção, captar doações e engajar a comunidade de voluntários e adotantes.



**Específicos (da Disciplina):**  

- Aplicar HTML5 para estruturas semânticas.  

- Implementar layouts responsivos com CSS3.  

- Desenvolver interatividade com JavaScript.  

- Integrar ferramentas de versionamento (Git/GitHub), acessibilidade (WCAG) e infraestrutura.  

- Simular um ambiente de desenvolvimento profissional.



## 4. Funcionalidades Chave Implementadas ✨

Esta entrega do projeto foca na estrutura e nas principais ferramentas de engajamento do usuário, com destaque para a interatividade e a gestão de dados na interface.



- **Navegação Semântica e Responsiva:** Menu principal `<nav>` com submenus e suporte mobile (ícone hambúrguer).  

- **Toggle de Dark Mode:** Alternância entre modo claro/escuro (WCAG AA) com persistência via localStorage.  

- **Formulário Interativo de Cadastro/Interesse:**  

  - Máscaras de Input (CPF, Telefone, CEP) em JavaScript.  

  - Validação em tempo real com checagem de CPF.  

- **Galeria de Adoção (SPA Básico):**  

  - Renderização dinâmica dos animais via JavaScript.  

  - Filtros por porte e idade.  

- **Seções de Engajamento:** Voluntariado e Doação com CTAs.



## 5. Tecnologias e Padrões

- **HTML5:** Estrutura semântica e acessibilidade.  

- **CSS3:** Estilo e layout com variáveis e Dark Mode.  

- **JavaScript (Vanilla):** Interatividade, máscaras e lógica de SPA.  

- **Responsividade:** Mobile-first com Flexbox e Media Queries.  

- **Versionamento:** Git e GitHub.



## 6. Personas e Casos de Uso

- **Administrador:** Gerencia animais, projetos e doações.  

- **Voluntário:** Busca oportunidades para ajudar.  

- **Doador/Apoiador:** Realiza e acompanha doações.  

- **Visitante/Adotante:** Conhece os animais e preenche formulário de interesse.



## 7. Requisitos Técnicos Gerais

- **Responsividade:** Mobile-first.  

- **Desempenho:** JavaScript puro e CSS eficiente.  

- **Acessibilidade:** Conformidade com WCAG 2.1 Nível AA.  

- **SEO:** Meta tags e semântica adequadas.



## 8. Estrutura do Repositório 📁

```

/ (Raiz)

├── index.html

├── projetos.html

├── cadastro.html

├── README.md

└── assets/

    ├── css/style.css

    ├── js/main.js

    └── img/

```



## 9. Como Executar (Acesso ao Projeto)

Você pode acessar o projeto online através do GitHub Pages:  

🔗 [https://magdielbeltrame.github.io/Instituto-pata-feliz/](https://magdielbeltrame.github.io/Instituto-pata-feliz/)



Ou rodar localmente:

1. Clone este repositório;

2. Abra o arquivo `index.html` no navegador.



---



## 🧱 Instruções de Build Profissional (npm)

Este projeto inclui scripts para minificação profissional usando ferramentas Node.js.



### Requisitos

- Node.js (v16+ recomendado) e npm instalados.



### Passos

1. Na raiz do projeto, rode:

   ```bash

   npm install

   ```

2. Para gerar os arquivos minificados (CSS/JS/HTML):

   ```bash

   npm run build

   ```

   Isso irá:

   - usar `postcss` + `cssnano` para minificar CSS em `dist/css/`

   - usar `terser` para minificar JS em `dist/js/bundle.min.js`

   - usar `html-minifier` para minificar HTML em `dist/`



3. Para testar localmente:

   ```bash

   npm run start

   ```

   Isso usará `serve` para servir o diretório local na porta 5000.



> Observação: as dependências estão listadas em `package.json`. Se preferir, instale apenas as necessárias (`terser`, `postcss-cli`, `cssnano`, `html-minifier`, `serve`).