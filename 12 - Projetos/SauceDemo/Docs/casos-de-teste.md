# 📋 Casos de Teste — SauceDemo

## 📌 Informações

Este documento contém os casos de teste elaborados para validar as principais funcionalidades da aplicação SauceDemo.

Os casos estão organizados por funcionalidade e serão utilizados como referência para o desenvolvimento dos testes automatizados com Cypress.

---

## 🔐 Login

### CT-001 — Login com credenciais válidas

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que um usuário com credenciais válidas consegue acessar a aplicação.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário deve estar na página de login.

#### Dados de Teste

**Usuário:** `standard_user`  
**Senha:** `secret_sauce`

#### Passos

1. Acessar a aplicação SauceDemo;
2. Informar `standard_user` no campo Username;
3. Informar `secret_sauce` no campo Password;
4. Clicar no botão Login.

#### Resultado Esperado

O usuário deve ser autenticado e redirecionado para a página de produtos.

#### Status

✅ Aprovado

---

### CT-002 — Login com senha inválida

**Prioridade:** Alta  
**Tipo:** Negativo  
**Automatizado:** Sim

#### Objetivo

Validar o comportamento da aplicação ao tentar realizar login utilizando uma senha inválida.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário deve estar na página de login.

#### Dados de Teste

**Usuário:** `standard_user`  
**Senha:** `senha_invalida`

#### Passos

1. Acessar a aplicação SauceDemo;
2. Informar `standard_user` no campo Username;
3. Informar uma senha inválida;
4. Clicar no botão Login.

#### Resultado Esperado

O acesso não deve ser permitido e a aplicação deve apresentar uma mensagem de erro informando que o usuário e/ou senha são inválidos.

#### Status

✅ Aprovado

---

### CT-003 — Login sem informar usuário

**Prioridade:** Média  
**Tipo:** Negativo  
**Automatizado:** Sim

#### Objetivo

Validar a obrigatoriedade do campo Username.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário deve estar na página de login.

#### Dados de Teste

**Usuário:** Vazio  
**Senha:** `secret_sauce`

#### Passos

1. Acessar a aplicação SauceDemo;
2. Manter o campo Username vazio;
3. Informar `secret_sauce` no campo Password;
4. Clicar no botão Login.

#### Resultado Esperado

O login não deve ser realizado e a aplicação deve apresentar uma mensagem informando que o campo Username é obrigatório.

#### Status

✅ Aprovado

---

### CT-004 — Login sem informar senha

**Prioridade:** Média  
**Tipo:** Negativo  
**Automatizado:** Sim

#### Objetivo

Validar a obrigatoriedade do campo Password.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário deve estar na página de login.

#### Dados de Teste

**Usuário:** `standard_user`  
**Senha:** Vazio

#### Passos

1. Acessar a aplicação SauceDemo;
2. Informar `standard_user` no campo Username;
3. Manter o campo Password vazio;
4. Clicar no botão Login.

#### Resultado Esperado

O login não deve ser realizado e a aplicação deve apresentar uma mensagem informando que o campo Password é obrigatório.

#### Status

✅ Aprovado

---

### CT-005 — Login com usuário bloqueado

**Prioridade:** Alta  
**Tipo:** Negativo  
**Automatizado:** Sim

#### Objetivo

Validar que um usuário bloqueado não consegue acessar a aplicação.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário deve estar na página de login.

#### Dados de Teste

**Usuário:** `locked_out_user`  
**Senha:** `secret_sauce`

#### Passos

1. Acessar a aplicação SauceDemo;
2. Informar `locked_out_user` no campo Username;
3. Informar `secret_sauce` no campo Password;
4. Clicar no botão Login.

#### Resultado Esperado

O acesso deve ser negado e a aplicação deve apresentar uma mensagem informando que o usuário está bloqueado.

#### Status

✅ Aprovado

---

## 📦 Produtos

Os casos de teste relacionados aos produtos serão adicionados durante a próxima etapa do projeto.

---

## 🛒 Carrinho

Os casos de teste relacionados ao carrinho serão adicionados durante a próxima etapa do projeto.

---

## 💳 Checkout

Os casos de teste relacionados ao checkout serão adicionados durante a próxima etapa do projeto.

---

## 🔄 End-to-End

O cenário completo de compra será documentado após a implementação dos fluxos individuais.