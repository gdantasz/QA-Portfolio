# 🧪 SauceDemo — Projeto de Automação de Testes

Projeto de Quality Assurance desenvolvido para praticar planejamento, documentação e automação de testes utilizando a aplicação **SauceDemo**.

O projeto está sendo desenvolvido de forma incremental, começando pela documentação dos cenários e posteriormente realizando a implementação e execução dos testes automatizados com Cypress.

---

## 📌 Sobre o Projeto

O [SauceDemo](https://www.saucedemo.com/) é uma aplicação web que simula um e-commerce e disponibiliza funcionalidades como autenticação, catálogo de produtos, carrinho e checkout.

Este projeto tem como objetivo utilizar a aplicação para aplicar na prática conceitos de **Quality Assurance e Automação de Testes**.

---

## 🎯 Objetivo

Aplicar e demonstrar conhecimentos relacionados a:

- Planejamento de testes;
- Criação de casos de teste;
- Testes positivos e negativos;
- Testes funcionais;
- Testes End-to-End (E2E);
- Automação de testes com Cypress;
- Assertions;
- Seletores;
- Hooks;
- Documentação de testes;
- Registro de evidências;
- Versionamento com Git e GitHub.

---

## 🌐 Aplicação Testada

**Aplicação:** SauceDemo  
**URL:** https://www.saucedemo.com/

---

## 🛠️ Tecnologias e Ferramentas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub
- Visual Studio Code
- Codex

---

## 📂 Estrutura do Projeto

```text
SauceDemo/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── products.cy.js
│   │   ├── cart.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── fixtures/
│   └── support/
│
├── Docs/
│   ├── casos-de-teste.md
│   └── plano-de-testes.md
│
├── Evidencias/
│   └── Login/
│       └── login-testes-aprovados.png
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📚 Documentação

A documentação do projeto está disponível nos arquivos abaixo:

- 📋 [Casos de Teste](./Docs/casos-de-teste.md)
- 📑 [Plano de Testes](./Docs/plano-de-testes.md)
- 📸 [Evidências](./Evidencias/)

---

## 🔍 Funcionalidades Planejadas

O projeto será dividido nos seguintes módulos:

### 🔐 Login

Validação dos principais cenários relacionados à autenticação.

**Status:** ✅ Concluído

### 📦 Produtos

Validação da listagem e ordenação dos produtos.

**Status:** ⏳ Próxima etapa

### 🛒 Carrinho

Validação da adição, remoção e quantidade de produtos.

**Status:** ⏳ Planejado

### 💳 Checkout

Validação do processo de finalização da compra e campos obrigatórios.

**Status:** ⏳ Planejado

### 🔄 Fluxo End-to-End

Validação do fluxo completo de compra, desde a autenticação até a conclusão do pedido.

**Status:** ⏳ Planejado

---

## 🔐 Automação de Login

O primeiro módulo desenvolvido foi o fluxo de autenticação.

Foram implementados cinco casos de teste automatizados utilizando Cypress.

| ID | Cenário | Tipo | Resultado |
|---|---|---|---|
| CT-001 | Login com credenciais válidas | Positivo | ✅ Aprovado |
| CT-002 | Login com senha inválida | Negativo | ✅ Aprovado |
| CT-003 | Login sem informar usuário | Negativo | ✅ Aprovado |
| CT-004 | Login sem informar senha | Negativo | ✅ Aprovado |
| CT-005 | Login com usuário bloqueado | Negativo | ✅ Aprovado |

**Resultado da execução: 5/5 testes aprovados. ✅**

---

## 🔎 Validações Realizadas

Durante os testes de Login foram realizadas validações como:

- Autenticação com credenciais válidas;
- Redirecionamento para a página de produtos;
- Carregamento da lista de produtos após autenticação;
- Permanência na página de Login em tentativas inválidas;
- Validação de mensagens de erro;
- Validação de campos obrigatórios;
- Bloqueio de acesso para usuário bloqueado.

---

## ⚙️ Boas Práticas Aplicadas

Durante a implementação dos testes foram utilizadas algumas práticas para melhorar a organização e manutenção do código.

### `beforeEach()`

O acesso à página inicial é realizado através de um hook `beforeEach()`, evitando repetição entre os casos de teste.

```javascript
beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
})
```

### Seletores

Foram utilizados seletores baseados no atributo `data-test` disponibilizado pela aplicação.

Exemplo:

```javascript
cy.get('[data-test="username"]')
```

### Assertions

Os testes possuem assertions para validar o comportamento esperado da aplicação.

Exemplo:

```javascript
cy.get('[data-test="error"]')
  .should('be.visible')
  .and('contain.text', 'Password is required')
```

Também foram realizadas validações de URL, elementos visíveis e conteúdo apresentado ao usuário.

---

## 📸 Evidências

### 🔐 Execução dos Testes de Login

Foram executados os cinco cenários automatizados do módulo de Login.

**Resultado: 5 testes aprovados ✅**

![Execução dos testes de Login](./Evidencias/Login/login-testes-aprovados.png)

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

Para executar o projeto é necessário possuir:

- Node.js;
- npm;
- Git.

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar o diretório do projeto

```bash
cd "12 - Projetos/SauceDemo"
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Abrir o Cypress

```bash
npx cypress open
```

Selecione:

```text
E2E Testing
→ Chrome
→ login.cy.js
```

### 5. Executar pelo terminal

Também é possível executar os testes sem abrir a interface gráfica:

```bash
npx cypress run
```

---

## 📊 Status do Projeto

| Módulo | Documentação | Automação | Execução |
|---|---|---|---|
| 🔐 Login | ✅ | ✅ | ✅ 5/5 |
| 📦 Produtos | ⏳ | ⏳ | ⏳ |
| 🛒 Carrinho | ⏳ | ⏳ | ⏳ |
| 💳 Checkout | ⏳ | ⏳ | ⏳ |
| 🔄 E2E | ⏳ | ⏳ | ⏳ |

---

## 🤖 Uso de Inteligência Artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento das automações.

Os cenários de teste, objetivos, dados de teste, passos, resultados esperados e estratégia de testes foram definidos e documentados antes da implementação das automações.

A IA foi utilizada como ferramenta de apoio para:

- Implementação dos scripts Cypress;
- Refatoração de código;
- Redução de duplicações;
- Apoio na aplicação de boas práticas.

Os testes gerados foram revisados e executados para validar se o comportamento implementado correspondia aos casos de teste documentados.

---

## 📈 Próximas Etapas

- [x] Criar estrutura inicial do projeto;
- [x] Criar plano de testes;
- [x] Documentar casos de teste de Login;
- [x] Automatizar CT-001;
- [x] Automatizar CT-002;
- [x] Automatizar CT-003;
- [x] Automatizar CT-004;
- [x] Automatizar CT-005;
- [x] Refatorar os testes utilizando `beforeEach()`;
- [x] Executar os testes de Login;
- [x] Registrar evidência da execução;
- [ ] Documentar casos de teste de Produtos;
- [ ] Automatizar testes de Produtos;
- [ ] Documentar e automatizar testes do Carrinho;
- [ ] Documentar e automatizar testes de Checkout;
- [ ] Criar cenário completo End-to-End;
- [ ] Implementar relatórios de execução;
- [ ] Implementar CI/CD com GitHub Actions.

---

## 👤 Autor

**Gabriel Dantas**

Projeto desenvolvido para estudo, prática e construção de portfólio em **Quality Assurance e Automação de Testes**.