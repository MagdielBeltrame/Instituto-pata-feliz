🐾 Instituto Pata Feliz - Plataforma Web
1. Visão Geral do Projeto
Este projeto é uma plataforma web completa e profissional desenvolvida para o Instituto Pata Feliz, uma ONG focada no resgate e adoção de cães e gatos. O objetivo é aplicar de forma integrada os conceitos de desenvolvimento front-end (HTML5, CSS3, JavaScript) para criar uma presença digital que ajude a organização a gerenciar atividades, divulgar projetos, captar recursos e engajar voluntários.

Este repositório corresponde ao desenvolvimento do projeto acadêmico XYZ, com foco na aplicação prática de tecnologias web em um contexto socialmente relevante.

2. Contexto e Relevância
O terceiro setor brasileiro, que movimenta bilhões anualmente, carece de presença digital adequada. Muitas ONGs, como o Instituto Pata Feliz, não possuem recursos para desenvolver plataformas robustas. Este projeto visa suprir essa lacuna, oferecendo uma solução acessível e profissional.

3. Objetivos
Geral
Desenvolver uma plataforma web que permita ao Instituto Pata Feliz gerenciar suas atividades de resgate e adoção, captar doações e engajar a comunidade de voluntários e adotantes.

Específicos (da Disciplina)
Aplicar HTML5 para estruturas semânticas.

Implementar layouts responsivos com CSS3.

Desenvolver interatividade com JavaScript.

Integrar ferramentas de versionamento (Git/GitHub), acessibilidade (WCAG) e infraestrutura.

Simular um ambiente de desenvolvimento profissional.

4. Funcionalidades Chave Implementadas ✨
Esta entrega do projeto foca na estrutura e nas principais ferramentas de engajamento do usuário, com destaque para a interatividade e a gestão de dados na interface.

Navegação Semântica e Responsiva: Menu de navegação principal (<nav>) com submenus (dropdown) e adaptado para dispositivos móveis (menu-toggler / ícone hambúrguer).

Toggle de Dark Mode: Botão de acessibilidade (#theme-toggler) implementado em todas as páginas para alternar entre os modos Claro e Escuro (Alto Contraste), conforme requisitos WCAG, com persistência via localStorage.

Formulário Interativo de Cadastro/Interesse:

Máscaras de Input: Aplicação de máscaras em JavaScript (CPF, Telefone e CEP) para guiar o usuário na inserção dos dados.

Validação em Tempo Real: Validação robusta de campos obrigatórios e formato (incluindo a checagem dos dígitos verificadores do CPF).

Galeria de Adoção (SPA Básico):

Renderização dinâmica dos animais disponíveis via JavaScript Template, simulando um consumo de dados de uma API.

Funcionalidade de Filtros para organizar os pets por porte e idade.

Seções de Engajamento: Estrutura para Voluntariado e Doação com chamadas claras para ação (CTAs).

5. Tecnologias e Padrões
HTML5: Utilizado para a estrutura semântica das páginas (Header, Main, Section, Footer, Fieldset) e acessibilidade.

CSS3: Utilizado para o estilo e layout.

Variáveis CSS (Custom Properties): Implementação de um sistema de design básico e variáveis específicas para o Dark Mode.

Responsividade: Abordagem Mobile-First com Flexbox e Media Queries.

JavaScript (Vanilla JS): Utilizado para interatividade e lógica de negócios no Front-End.

Lógica de ativação e persistência do Dark Mode.

Máscaras e Funções de Validação de Dados (CPF, Telefone, CEP).

Implementação de Templates para renderização de conteúdo (SPA Básico).

Versionamento: Git e GitHub.

6. Personas e Casos de Uso
Administrador da ONG: Gerencia o cadastro de animais, atualiza projetos e acompanha doações.

Voluntário: Busca oportunidades para ajudar (ex: feiras de adoção, lares temporários).

Doador/Apoiador: Realiza doações (PIX, cartão) e acompanha a prestação de contas.

Visitante/Adotante: Conhece os animais disponíveis, preenche o formulário de interesse em adoção.

7. Requisitos Técnicos Gerais
Responsividade: Mobile-first.

Desempenho e Otimização: Alcançado através do uso de JavaScript Puro (Vanilla JS), evitando dependências pesadas, e da aplicação de uma estratégia Mobile-First com CSS eficiente. A otimização de imagens (redimensionamento e compressão) foi aplicada nos ativos visuais para garantir o carregamento rápido.

Acessibilidade: Conformidade com WCAG 2.1 Nível AA (especialmente via Dark Mode e semântica).

SEO: Meta tags e semântica adequadas.

8. Estrutura do Repositório 📁
A organização do projeto segue a estrutura padrão de desenvolvimento Front-End:

/ (Raiz):

Arquivos HTML principais (index.html, projetos.html, cadastro.html).

Documentação principal (README.md).

/assets/: Pasta para todos os recursos estáticos.

/assets/css/: Contém as folhas de estilo do projeto (style.css), centralizando o sistema de design e variáveis CSS.

/assets/js/: Contém o script JavaScript (main.js) para toda a interatividade, máscaras, validação e lógica do SPA.

/assets/img/: Armazena todos os ativos visuais (imagens de pets, logo e ícones).

9. Como Executar (Acesso ao Projeto)
Você pode acessar o projeto online através do GitHub Pages:

Link de Acesso: https://magdielbeltrame.github.io/Instituto-pata-feliz/