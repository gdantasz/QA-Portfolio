# 🧪 QA Portfolio

Bem-vindo ao meu portfólio de **Quality Assurance (QA)**.

Este repositório reúne meus estudos, projetos e documentações desenvolvidos durante minha jornada de aprendizado em Testes de Software.

O objetivo é demonstrar, através de exemplos práticos, meus conhecimentos em **testes manuais, documentação, testes de API, SQL, automação de testes e boas práticas de Quality Assurance**.

---

## 🎯 Objetivos

- Demonstrar minha evolução na área de Quality Assurance;
- Aplicar na prática os conceitos estudados;
- Desenvolver projetos práticos de testes de software;
- Construir um portfólio profissional para processos seletivos;
- Documentar minha evolução de forma organizada;
- Aplicar boas práticas de testes e automação.

---

## 🛠️ Competências

### 🧪 Testes de Software

- Testes Funcionais
- Testes Não Funcionais
- Testes Exploratórios
- Testes Positivos e Negativos
- Testes End-to-End (E2E)
- Casos de Teste
- Planos de Teste
- Checklists
- Relatórios de Bugs
- Evidências de Teste

### 🔌 Testes de API

- Postman
- REST API

### 🗄️ Banco de Dados

- SQL

### 🤖 Automação de Testes

- Cypress
- JavaScript
- Playwright

### 🔄 Versionamento

- Git
- GitHub

### 📋 Gestão

- Jira

---

## 📂 Estrutura do Portfólio

| Pasta | Conteúdo |
|---|---|
| [📋 01 - Casos de Teste](./01%20-%20Casos%20de%20Teste/) | Documentação de cenários e casos de teste |
| [🐞 02 - Bug Reports](./02%20-%20Bug%20Reports/) | Relatórios e documentação de bugs |
| [📑 03 - Planos de Teste](./03%20-%20Planos%20de%20Teste/) | Planejamento e estratégia de testes |
| [✅ 04 - Checklists](./04%20-%20Checklists/) | Checklists utilizados durante os testes |
| [🔌 05 - API Testing](./05%20-%20API%20Testing/) | Testes de APIs e coleções |
| [🗄️ 06 - SQL](./06%20-%20SQL/) | Consultas e exercícios de banco de dados |
| [🤖 07 - Automação](./07%20-%20Automação/) | Estudos e exemplos de automação |
| [⚡ 08 - Performance](./08%20-%20Performance/) | Estudos e testes de performance |
| [📸 09 - Evidências](./09%20-%20Evidências/) | Evidências de execuções de testes |
| [🎓 10 - Certificados](./10%20-%20Certificados/) | Certificados e cursos concluídos |
| [📚 11 - Estudos](./11%20-%20Estudos/) | Anotações e materiais de estudo |
| [🚀 12 - Projetos](./12%20-%20Projetos/) | Projetos completos de Quality Assurance |

---

# 🚀 Projetos

Esta seção reúne projetos nos quais aplico os conhecimentos de QA de forma integrada, passando pelo **planejamento, documentação, automação, execução e registro de evidências**.

## 🛒 SauceDemo — Automação E2E com Cypress

[📂 Acessar Projeto SauceDemo](./12%20-%20Projetos/SauceDemo/)

Projeto de testes desenvolvido utilizando a aplicação **SauceDemo**, que simula funcionalidades de um e-commerce.

O projeto está sendo desenvolvido de forma incremental, iniciando pela exploração e análise das funcionalidades, seguida pela documentação dos casos de teste, implementação das automações, execução e registro das evidências.

### 🛠️ Tecnologias

- Cypress
- JavaScript
- Node.js
- npm
- Git
- GitHub
- Visual Studio Code

### 🧪 Testes Automatizados

Atualmente o projeto possui **12 testes automatizados executados com sucesso**.

| Módulo | Casos | Resultado |
|---|---:|---|
| 🔐 Login | 5 | ✅ 5/5 |
| 📦 Produtos | 7 | ✅ 7/7 |
| **Total** | **12** | **✅ 12/12** |

### 🔐 Módulo de Login

O primeiro módulo automatizado contempla os seguintes cenários:

- CT-001 — Login com credenciais válidas;
- CT-002 — Login com senha inválida;
- CT-003 — Login sem informar usuário;
- CT-004 — Login sem informar senha;
- CT-005 — Login com usuário bloqueado.

**Resultado: 5/5 testes automatizados aprovados. ✅**

### 📦 Módulo de Produtos

O segundo módulo automatizado contempla cenários relacionados à exibição, integridade das informações, ordenação e detalhes dos produtos:

- CT-006 — Exibir lista de produtos após login;
- CT-007 — Validar informações dos produtos;
- CT-008 — Ordenar produtos por preço crescente;
- CT-009 — Ordenar produtos por preço decrescente;
- CT-010 — Ordenar produtos por nome A → Z;
- CT-011 — Ordenar produtos por nome Z → A;
- CT-012 — Acessar detalhes de um produto.

**Resultado: 7/7 testes automatizados aprovados. ✅**

Durante este módulo foram aplicadas validações envolvendo:

- Listas de elementos;
- Nome, descrição e preço dos produtos;
- Conversão e comparação de valores numéricos;
- Ordenação crescente e decrescente;
- Ordenação alfabética;
- Comparação de arrays;
- Navegação entre páginas;
- Consistência de informações entre listagem e detalhes.

### 📚 Documentação do Projeto

- [📋 Casos de Teste](./12%20-%20Projetos/SauceDemo/Docs/casos-de-teste.md)
- [📑 Plano de Testes](./12%20-%20Projetos/SauceDemo/Docs/plano-de-testes.md)
- [📸 Evidências](./12%20-%20Projetos/SauceDemo/Evidencias/)
- [🤖 Código Cypress](./12%20-%20Projetos/SauceDemo/cypress/e2e/)
- [🔐 Automação de Login](./12%20-%20Projetos/SauceDemo/cypress/e2e/login.cy.js)
- [📦 Automação de Produtos](./12%20-%20Projetos/SauceDemo/cypress/e2e/products.cy.js)

### 📸 Evidências

As evidências das execuções realizadas estão organizadas por funcionalidade:

- [🔐 Evidência — Login](./12%20-%20Projetos/SauceDemo/Evidencias/Login/login-testes-aprovados.png)
- [📦 Evidência — Produtos](./12%20-%20Projetos/SauceDemo/Evidencias/Produtos/produtos-testes-aprovados.png)

### 📊 Progresso

| Módulo | Status |
|---|---|
| 🔐 Login | ✅ Concluído — 5/5 |
| 📦 Produtos | ✅ Concluído — 7/7 |
| 🛒 Carrinho | 🔄 Próxima etapa |
| 💳 Checkout | ⏳ Planejado |
| 🔄 Fluxo E2E | ⏳ Planejado |

➡️ [Ver documentação completa do projeto](./12%20-%20Projetos/SauceDemo/README.md)

---

## 📌 Sobre este Portfólio

Este portfólio é atualizado conforme avanço nos estudos e desenvolvo novos projetos relacionados a Quality Assurance.

Além de exemplos individuais de documentação e testes, a pasta **Projetos** reúne aplicações nas quais diferentes conhecimentos de QA são utilizados em conjunto.

O objetivo é demonstrar não apenas conhecimento sobre ferramentas, mas também o processo utilizado para:

**Explorar → Analisar → Planejar → Documentar → Testar → Automatizar → Executar → Evidenciar**

---

## 📈 Em Desenvolvimento

Atualmente estou evoluindo meus conhecimentos principalmente em:

- Automação Web com Cypress;
- JavaScript aplicado à automação;
- Testes End-to-End;
- Boas práticas de automação;
- Assertions e validações;
- Manipulação e comparação de dados em testes;
- Organização e manutenção de suítes de testes;
- Refatoração de testes automatizados.

---

## 🚀 Próximos Passos

- [x] Criar casos de teste;
- [x] Criar planos de teste;
- [x] Trabalhar com Git e GitHub;
- [x] Iniciar automação Web com Cypress;
- [x] Automatizar módulo de Login;
- [x] Automatizar módulo de Produtos;
- [x] Registrar evidências das execuções;
- [x] Aplicar refatoração e boas práticas básicas nos testes;
- [ ] Automatizar módulo de Carrinho;
- [ ] Automatizar módulo de Checkout;
- [ ] Criar fluxo completo End-to-End;
- [ ] Expandir automação com Cypress;
- [ ] Aprofundar testes de API;
- [ ] Desenvolver automações com Playwright;
- [ ] Realizar testes de Performance;
- [ ] Implementar relatórios automatizados;
- [ ] Trabalhar com branches e Pull Requests;
- [ ] Implementar Integração Contínua (CI/CD);
- [ ] Executar testes Cypress automaticamente em pipeline;
- [ ] Desenvolver novos projetos completos de QA.

---

## 📫 Contato

**LinkedIn:** [Gabriel Dantas](https://www.linkedin.com/in/gdantasdenandrade/)

**E-mail:** gadantasdeandrade@gmail.com

---

Obrigado por visitar meu portfólio! 🚀