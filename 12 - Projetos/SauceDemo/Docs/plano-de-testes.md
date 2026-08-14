# 📑 Plano de Testes — SauceDemo

## 1. Introdução

Este documento apresenta o planejamento dos testes realizados na aplicação SauceDemo, uma aplicação web que simula funcionalidades básicas de um e-commerce.

O projeto tem como objetivo aplicar conceitos de Quality Assurance por meio da elaboração, execução e automação de testes utilizando Cypress.

---

## 2. Objetivo

Validar as principais funcionalidades da aplicação SauceDemo, garantindo que os fluxos críticos funcionem conforme o comportamento esperado.

Também fazem parte dos objetivos:

- Praticar planejamento de testes;
- Elaborar casos de teste;
- Executar testes funcionais;
- Criar cenários positivos e negativos;
- Automatizar testes utilizando Cypress;
- Registrar evidências das execuções;
- Aplicar boas práticas de automação.

---

## 3. Escopo

As seguintes funcionalidades fazem parte do escopo deste projeto:

### 🔐 Login

- Login com credenciais válidas;
- Login com credenciais inválidas;
- Validação de campos obrigatórios;
- Login com usuário bloqueado.

### 📦 Produtos

- Exibição da lista de produtos;
- Ordenação dos produtos;
- Visualização das informações dos produtos.

### 🛒 Carrinho

- Adição de produtos;
- Remoção de produtos;
- Validação da quantidade de itens;
- Visualização dos produtos adicionados.

### 💳 Checkout

- Preenchimento dos dados do cliente;
- Validação de campos obrigatórios;
- Visualização do resumo da compra;
- Finalização da compra.

### 🔄 Fluxo E2E

- Validação do fluxo completo desde o login até a conclusão da compra.

---

## 4. Fora do Escopo

Não fazem parte do escopo inicial deste projeto:

- Testes de API;
- Testes de banco de dados;
- Testes de performance;
- Testes de segurança;
- Testes de acessibilidade;
- Testes em dispositivos móveis reais.

Esses testes poderão ser adicionados futuramente conforme a evolução do projeto.

---

## 5. Estratégia de Testes

Os testes serão realizados principalmente por meio de automação utilizando Cypress.

Serão utilizados:

- Testes funcionais;
- Testes positivos;
- Testes negativos;
- Testes End-to-End (E2E);
- Testes de regressão.

Os cenários serão documentados antes da implementação da automação.

---

## 6. Ambiente de Testes

**Aplicação:** SauceDemo  
**URL:** https://www.saucedemo.com/

**Framework de automação:** Cypress

**Linguagem:** JavaScript

**Ambiente:** Web

**Navegador principal:** Google Chrome

---

## 7. Critérios de Entrada

Para iniciar os testes:

- A aplicação deve estar disponível;
- O ambiente de testes deve estar acessível;
- As credenciais de teste devem estar disponíveis;
- O Cypress deve estar configurado corretamente;
- Os casos de teste devem estar definidos.

---

## 8. Critérios de Saída

O ciclo de testes será considerado concluído quando:

- Todos os casos planejados forem executados;
- Os principais fluxos estiverem automatizados;
- Os resultados das execuções estiverem registrados;
- As falhas encontradas estiverem documentadas;
- As evidências relevantes estiverem armazenadas.

---

## 9. Ferramentas Utilizadas

| Ferramenta | Utilização |
|---|---|
| Cypress | Automação dos testes |
| JavaScript | Desenvolvimento das automações |
| Node.js | Ambiente de execução |
| Git | Controle de versão |
| GitHub | Armazenamento do projeto |
| VS Code | Desenvolvimento |
| Codex | Apoio no desenvolvimento das automações |

---

## 10. Riscos

Alguns riscos considerados durante o projeto:

- Indisponibilidade da aplicação SauceDemo;
- Alterações na interface que possam afetar os seletores;
- Dependência do ambiente externo;
- Falhas na configuração do ambiente de automação.

---

## 11. Entregáveis

Ao final do projeto serão disponibilizados:

- Plano de testes;
- Casos de teste;
- Scripts de automação Cypress;
- Evidências das execuções;
- Registro de bugs, caso sejam encontrados;
- README com informações gerais do projeto.