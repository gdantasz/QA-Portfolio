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

### CT-006 — Exibir lista de produtos após login

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que a lista de produtos é exibida corretamente após a autenticação do usuário.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário autenticado com credenciais válidas;
- Usuário na página de produtos.

#### Dados de Teste

**Usuário:** `standard_user`  
**Senha:** `secret_sauce`

#### Passos

1. Acessar a aplicação SauceDemo;
2. Realizar login com credenciais válidas;
3. Aguardar o carregamento da página de produtos;
4. Verificar a lista de produtos.

#### Resultado Esperado

A página de produtos deve ser exibida e a lista de produtos deve estar visível.

#### Status

✅ Aprovado

---

### CT-007 — Validar informações dos produtos

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que os produtos exibidos apresentam as informações necessárias.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos.

#### Passos

1. Acessar a página de produtos;
2. Verificar os produtos disponíveis;
3. Validar a existência do nome;
4. Validar a existência da descrição;
5. Validar a existência do preço.

#### Resultado Esperado

Os produtos devem apresentar nome, descrição e preço visíveis.

#### Status

✅ Aprovado

---

### CT-008 — Ordenar produtos por preço crescente

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar a ordenação dos produtos do menor para o maior preço.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos.

#### Passos

1. Acessar a página de produtos;
2. Abrir o seletor de ordenação;
3. Selecionar a opção de menor para maior preço;
4. Verificar a ordem dos preços apresentados.

#### Resultado Esperado

Os produtos devem ser exibidos em ordem crescente de preço.

#### Status

✅ Aprovado

---

### CT-009 — Ordenar produtos por preço decrescente

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar a ordenação dos produtos do maior para o menor preço.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos.

#### Passos

1. Acessar a página de produtos;
2. Abrir o seletor de ordenação;
3. Selecionar a opção de maior para menor preço;
4. Verificar a ordem dos preços apresentados.

#### Resultado Esperado

Os produtos devem ser exibidos em ordem decrescente de preço.

#### Status

✅ Aprovado

---

### CT-010 — Ordenar produtos por nome A → Z

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar a ordenação alfabética crescente dos produtos.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos.

#### Passos

1. Acessar a página de produtos;
2. Abrir o seletor de ordenação;
3. Selecionar a opção de ordenação de A para Z;
4. Verificar a ordem dos nomes apresentados.

#### Resultado Esperado

Os produtos devem ser exibidos em ordem alfabética crescente.

#### Status

✅ Aprovado

---

### CT-011 — Ordenar produtos por nome Z → A

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar a ordenação alfabética decrescente dos produtos.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos.

#### Passos

1. Acessar a página de produtos;
2. Abrir o seletor de ordenação;
3. Selecionar a opção de ordenação de Z para A;
4. Verificar a ordem dos nomes apresentados.

#### Resultado Esperado

Os produtos devem ser exibidos em ordem alfabética decrescente.

#### Status

✅ Aprovado

---

### CT-012 — Acessar detalhes de um produto

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que o usuário consegue acessar a página de detalhes de um produto.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos.

#### Passos

1. Acessar a página de produtos;
2. Selecionar um produto;
3. Acessar os detalhes do produto;
4. Verificar as informações apresentadas.

#### Resultado Esperado

A página de detalhes do produto deve ser exibida contendo nome, descrição e preço.

#### Status

✅ Aprovado

## 🔎 Observações Exploratórias — Produtos

Durante a exploração manual da página de produtos foram identificados textos incomuns em alguns itens.

### OBS-001 — Nome incomum de produto

Produto:
`Test.allTheThings() T-Shirt (Red)`

Observação:
O nome contém uma expressão semelhante a código ou texto utilizado em contexto de testes.

Status:
Em análise.

---

### OBS-002 — Descrição incomum de produto

Produto:
`Sauce Labs Backpack`

Descrição inicia com:
`carry.allTheThings()`

Observação:
O texto aparenta ser uma expressão de teste ou placeholder exibido na descrição do produto.

Status:
Em análise.

---

## 🛒 Carrinho

### CT-013 — Adicionar um produto ao carrinho

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que o usuário consegue adicionar um produto ao carrinho com sucesso.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário autenticado com credenciais válidas;
- Usuário na página de produtos.

#### Dados de Teste

**Usuário:** `standard_user`  
**Senha:** `secret_sauce`  
**Produto:** `Sauce Labs Backpack`

#### Passos

1. Acessar a aplicação SauceDemo;
2. Realizar login com credenciais válidas;
3. Localizar o produto `Sauce Labs Backpack`;
4. Clicar no botão `Add to cart`;
5. Acessar o carrinho;
6. Verificar se o produto foi adicionado.

#### Resultado Esperado

O produto `Sauce Labs Backpack` deve ser exibido dentro do carrinho.

#### Status

✅ Aprovado

---

### CT-014 — Validar badge do carrinho após adicionar produto

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que o contador exibido no ícone do carrinho é atualizado corretamente após a adição de um produto.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário autenticado;
- Usuário na página de produtos;
- Carrinho inicialmente sem produtos.

#### Dados de Teste

**Produto:** `Sauce Labs Backpack`

#### Passos

1. Acessar a página de produtos;
2. Localizar o produto `Sauce Labs Backpack`;
3. Clicar no botão `Add to cart`;
4. Observar o badge exibido no ícone do carrinho.

#### Resultado Esperado

O badge do carrinho deve ser exibido com o valor `1`.

#### Status

✅ Aprovado

---

### CT-015 — Adicionar múltiplos produtos diferentes ao carrinho

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que o usuário consegue adicionar múltiplos produtos diferentes ao carrinho.

#### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário autenticado;
- Usuário na página de produtos;
- Carrinho inicialmente vazio.

#### Dados de Teste

Produtos:

- `Sauce Labs Backpack`;
- `Sauce Labs Bike Light`;
- `Sauce Labs Bolt T-Shirt`.

#### Passos

1. Acessar a página de produtos;
2. Adicionar `Sauce Labs Backpack` ao carrinho;
3. Adicionar `Sauce Labs Bike Light` ao carrinho;
4. Adicionar `Sauce Labs Bolt T-Shirt` ao carrinho;
5. Verificar o badge do carrinho;
6. Acessar o carrinho.

#### Resultado Esperado

O badge do carrinho deve apresentar o valor `3` e os três produtos adicionados devem estar presentes no carrinho.

#### Status

✅ Aprovado

---

### CT-016 — Validar produtos adicionados dentro do carrinho

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que os produtos adicionados na página de Products são exibidos corretamente dentro do carrinho.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos;
- Carrinho inicialmente vazio.

#### Dados de Teste

Produtos:

- `Sauce Labs Backpack`;
- `Sauce Labs Bike Light`.

#### Passos

1. Adicionar `Sauce Labs Backpack` ao carrinho;
2. Adicionar `Sauce Labs Bike Light` ao carrinho;
3. Acessar o carrinho;
4. Localizar os produtos adicionados;
5. Verificar os nomes apresentados;
6. Verificar os preços apresentados.

#### Resultado Esperado

Os produtos adicionados devem ser exibidos no carrinho com os mesmos nomes e preços apresentados na página de produtos.

#### Status

✅ Aprovado

---

### CT-017 — Remover produto pelo carrinho

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que o usuário consegue remover um produto diretamente da página do carrinho.

#### Pré-condições

- Usuário autenticado;
- Carrinho contendo pelo menos um produto.

#### Dados de Teste

**Produto:** `Sauce Labs Backpack`

#### Passos

1. Adicionar `Sauce Labs Backpack` ao carrinho;
2. Acessar o carrinho;
3. Verificar que o produto está presente;
4. Clicar no botão `Remove`;
5. Verificar o conteúdo do carrinho;
6. Verificar o badge do carrinho.

#### Resultado Esperado

O produto deve ser removido do carrinho e não deve mais ser exibido na lista.

Caso o carrinho fique vazio, o badge do carrinho não deve mais ser exibido.

#### Status

✅ Aprovado

---

### CT-018 — Remover produto pela página de Produtos

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que um produto adicionado ao carrinho pode ser removido diretamente pela página de produtos.

#### Pré-condições

- Usuário autenticado;
- Usuário na página de produtos;
- Carrinho inicialmente vazio.

#### Dados de Teste

**Produto:** `Sauce Labs Backpack`

#### Passos

1. Localizar `Sauce Labs Backpack`;
2. Clicar em `Add to cart`;
3. Verificar que o botão do produto foi alterado para `Remove`;
4. Verificar que o badge do carrinho apresenta o valor `1`;
5. Clicar no botão `Remove`;
6. Verificar novamente o botão do produto;
7. Verificar o badge do carrinho.

#### Resultado Esperado

O produto deve ser removido do carrinho.

O botão deve voltar a apresentar `Add to cart` e o badge do carrinho deve desaparecer quando não houver outros produtos adicionados.

#### Status

✅ Aprovado

---

### CT-019 — Continuar comprando a partir do carrinho

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar o funcionamento da opção `Continue Shopping` disponível na página do carrinho.

#### Pré-condições

- Usuário autenticado;
- Usuário na página do carrinho.

#### Passos

1. Adicionar um produto ao carrinho;
2. Acessar o carrinho;
3. Clicar no botão `Continue Shopping`;
4. Verificar a página apresentada.

#### Resultado Esperado

O usuário deve ser redirecionado para a página de produtos.

A URL deve corresponder à página `inventory.html` e a lista de produtos deve estar disponível.

#### Status

✅ Aprovado

---

### CT-020 — Acessar o Checkout a partir do carrinho

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

#### Objetivo

Validar que o usuário consegue iniciar o processo de checkout através da página do carrinho.

#### Pré-condições

- Usuário autenticado;
- Carrinho contendo pelo menos um produto;
- Usuário na página do carrinho.

#### Dados de Teste

**Produto:** `Sauce Labs Backpack`

#### Passos

1. Adicionar `Sauce Labs Backpack` ao carrinho;
2. Acessar o carrinho;
3. Verificar que o produto está presente;
4. Clicar no botão `Checkout`;
5. Verificar a página apresentada.

#### Resultado Esperado

O usuário deve ser redirecionado para a primeira etapa do checkout.

A página deve apresentar os seguintes campos:

- First Name;
- Last Name;
- Zip/Postal Code.

O preenchimento e validação desses campos serão tratados nos casos de teste do módulo de Checkout.

#### Status

✅ Aprovado

---

# 💳 Checkout

## CT-021 — Avançar no checkout com dados válidos

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

### Objetivo

Validar que o usuário consegue preencher corretamente os dados obrigatórios do Checkout e avançar para a página de resumo da compra.

### Pré-condições

- Aplicação SauceDemo disponível;
- Usuário autenticado com credenciais válidas;
- Carrinho contendo pelo menos um produto;
- Usuário na primeira etapa do Checkout.

### Dados de Teste

**Usuário:** `standard_user`  
**Senha:** `secret_sauce`  
**Produto:** `Sauce Labs Backpack`  
**First Name:** `Gabriel`  
**Last Name:** `Dantas`  
**Zip/Postal Code:** `12345`

### Passos

1. Acessar a aplicação SauceDemo;
2. Realizar login com credenciais válidas;
3. Adicionar `Sauce Labs Backpack` ao carrinho;
4. Acessar o carrinho;
5. Clicar em `Checkout`;
6. Preencher `First Name` com `Gabriel`;
7. Preencher `Last Name` com `Dantas`;
8. Preencher `Zip/Postal Code` com `12345`;
9. Clicar em `Continue`.

### Resultado Esperado

O usuário deve avançar para a página `Checkout: Overview`.

### Status

✅ Aprovado

---

## CT-022 — Validar obrigatoriedade do First Name

**Prioridade:** Alta  
**Tipo:** Negativo  
**Automatizado:** Sim

### Objetivo

Validar que o campo `First Name` é obrigatório para avançar no Checkout.

### Pré-condições

- Usuário autenticado;
- Carrinho contendo pelo menos um produto;
- Usuário na primeira etapa do Checkout.

### Dados de Teste

**First Name:** vazio  
**Last Name:** `Dantas`  
**Zip/Postal Code:** `12345`

### Passos

1. Acessar a primeira etapa do Checkout;
2. Manter `First Name` vazio;
3. Preencher `Last Name`;
4. Preencher `Zip/Postal Code`;
5. Clicar em `Continue`.

### Resultado Esperado

O usuário não deve avançar para o Overview e a aplicação deve informar que `First Name` é obrigatório.

Mensagem esperada:

`Error: First Name is required`

### Status

✅ Aprovado

---

## CT-023 — Validar obrigatoriedade do Last Name

**Prioridade:** Alta  
**Tipo:** Negativo  
**Automatizado:** Sim

### Objetivo

Validar que o campo `Last Name` é obrigatório para avançar no Checkout.

### Pré-condições

- Usuário autenticado;
- Carrinho contendo pelo menos um produto;
- Usuário na primeira etapa do Checkout.

### Dados de Teste

**First Name:** `Gabriel`  
**Last Name:** vazio  
**Zip/Postal Code:** `12345`

### Passos

1. Acessar a primeira etapa do Checkout;
2. Preencher `First Name`;
3. Manter `Last Name` vazio;
4. Preencher `Zip/Postal Code`;
5. Clicar em `Continue`.

### Resultado Esperado

O usuário não deve avançar para o Overview e a aplicação deve informar que `Last Name` é obrigatório.

Mensagem esperada:

`Error: Last Name is required`

### Status

✅ Aprovado

---

## CT-024 — Validar obrigatoriedade do Postal Code

**Prioridade:** Alta  
**Tipo:** Negativo  
**Automatizado:** Sim

### Objetivo

Validar que o campo `Zip/Postal Code` é obrigatório para avançar no Checkout.

### Pré-condições

- Usuário autenticado;
- Carrinho contendo pelo menos um produto;
- Usuário na primeira etapa do Checkout.

### Dados de Teste

**First Name:** `Gabriel`  
**Last Name:** `Dantas`  
**Zip/Postal Code:** vazio

### Passos

1. Acessar a primeira etapa do Checkout;
2. Preencher `First Name`;
3. Preencher `Last Name`;
4. Manter `Zip/Postal Code` vazio;
5. Clicar em `Continue`.

### Resultado Esperado

O usuário não deve avançar para o Overview e a aplicação deve informar que `Postal Code` é obrigatório.

Mensagem esperada:

`Error: Postal Code is required`

### Status

✅ Aprovado

---

## CT-025 — Validar informações do produto no Checkout Overview

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

### Objetivo

Validar que as informações do produto adicionado ao carrinho são mantidas corretamente na página de resumo do Checkout.

### Pré-condições

- Usuário autenticado;
- Produto adicionado ao carrinho;
- Dados obrigatórios do Checkout preenchidos corretamente;
- Usuário na página `Checkout: Overview`.

### Dados de Teste

**Produto:** `Sauce Labs Backpack`

### Passos

1. Localizar `Sauce Labs Backpack` na página de produtos;
2. Registrar nome e preço apresentados;
3. Adicionar o produto ao carrinho;
4. Iniciar o Checkout;
5. Preencher os dados obrigatórios;
6. Avançar para `Checkout: Overview`;
7. Localizar o produto no resumo;
8. Comparar nome e preço.

### Resultado Esperado

O nome e o preço apresentados no Checkout Overview devem corresponder às informações apresentadas anteriormente para o produto.

### Status

✅ Aprovado

---

## CT-026 — Validar subtotal da compra

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

### Objetivo

Validar que o `Item total` apresentado no Checkout corresponde à soma dos preços dos produtos da compra.

### Pré-condições

- Usuário autenticado;
- Múltiplos produtos adicionados ao carrinho;
- Usuário na página `Checkout: Overview`.

### Dados de Teste

Produtos:

- `Sauce Labs Backpack`;
- `Sauce Labs Bike Light`.

### Passos

1. Adicionar os dois produtos ao carrinho;
2. Iniciar o Checkout;
3. Preencher os dados obrigatórios;
4. Avançar para `Checkout: Overview`;
5. Capturar os preços dos produtos;
6. Somar os valores;
7. Capturar o valor apresentado em `Item total`;
8. Comparar os valores.

### Resultado Esperado

O valor de `Item total` deve ser igual à soma dos preços de todos os produtos presentes na compra.

### Status

✅ Aprovado

---

## CT-027 — Validar cálculo do total da compra

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

### Objetivo

Validar que o valor total da compra é calculado corretamente considerando o subtotal dos produtos e o valor da taxa.

### Pré-condições

- Usuário autenticado;
- Produto(s) adicionado(s) ao carrinho;
- Usuário na página `Checkout: Overview`.

### Passos

1. Realizar o fluxo necessário até `Checkout: Overview`;
2. Capturar o valor apresentado em `Item total`;
3. Capturar o valor apresentado em `Tax`;
4. Capturar o valor apresentado em `Total`;
5. Converter os valores para números;
6. Somar `Item total` e `Tax`;
7. Comparar o resultado calculado com o `Total` apresentado.

### Resultado Esperado

O valor apresentado em `Total` deve corresponder a:

`Item total + Tax = Total`

### Status

✅ Aprovado

---

## CT-028 — Cancelar o Checkout

**Prioridade:** Média  
**Tipo:** Positivo  
**Automatizado:** Sim

### Objetivo

Validar o funcionamento da opção `Cancel` durante o processo de Checkout.

### Pré-condições

- Usuário autenticado;
- Produto adicionado ao carrinho;
- Usuário no processo de Checkout.

### Passos

1. Adicionar um produto ao carrinho;
2. Iniciar o Checkout;
3. Preencher os dados obrigatórios;
4. Avançar para `Checkout: Overview`;
5. Verificar a presença do botão `Cancel`;
6. Clicar em `Cancel`;
7. Verificar a página apresentada.

### Resultado Esperado

O Checkout deve ser cancelado e o usuário deve retornar para a página de produtos.

### Status

✅ Aprovado

---

## CT-029 — Finalizar compra com sucesso

**Prioridade:** Alta  
**Tipo:** Positivo  
**Automatizado:** Sim

### Objetivo

Validar que o usuário consegue concluir uma compra com sucesso.

### Pré-condições

- Usuário autenticado;
- Produto adicionado ao carrinho;
- Dados obrigatórios do Checkout preenchidos corretamente;
- Usuário na página `Checkout: Overview`.

### Dados de Teste

**Produto:** `Sauce Labs Backpack`  
**First Name:** `Gabriel`  
**Last Name:** `Dantas`  
**Zip/Postal Code:** `12345`

### Passos

1. Adicionar `Sauce Labs Backpack` ao carrinho;
2. Acessar o carrinho;
3. Iniciar o Checkout;
4. Preencher os dados obrigatórios;
5. Avançar para `Checkout: Overview`;
6. Verificar que o produto está presente;
7. Clicar em `Finish`;
8. Verificar a página de confirmação.

### Resultado Esperado

A compra deve ser concluída com sucesso e a aplicação deve apresentar a página de confirmação da compra.

### Status

✅ Aprovado

---

## 🔎 Observações Exploratórias — Checkout

Durante a exploração manual da primeira etapa do Checkout foi observado que o campo `Zip/Postal Code` permite avançar utilizando diferentes formatos de valor, incluindo valores curtos e caracteres alfabéticos.

O comportamento não foi classificado como defeito, pois não há requisito disponível especificando:

- formato obrigatório;
- quantidade mínima ou máxima de caracteres;
- aceitação exclusiva de caracteres numéricos;
- padrão postal ou país utilizado.

Também foi observado um comportamento inesperado durante uma execução manual envolvendo o campo `First Name`. Entretanto, o comportamento não foi reproduzido de forma consistente nas verificações posteriores e, portanto, não foi registrado como defeito confirmado.

---

## 🔄 End-to-End

O cenário completo de compra será documentado após a implementação dos fluxos individuais.