Casos de Teste - Login

Informações
Módulo: Autenticação
Funcionalidade: Login
Aplicação: ServeRest Front
Tipo de Teste: Funcional

CT-001 - Login com credenciais válidas
Objetivo
Validar que um usuário cadastrado consiga acessar o sistema utilizando credenciais válidas.

Pré-condições
Usuário previamente cadastrado.
Aplicação disponível.

Dados de Teste
Campo	Valor
E-mail	testesportifolios@gmail.com
Senha	123456

Passos
Acessar a tela de login.
Informar e-mail válido.
Informar senha válida.
Clicar no botão Entrar.

Resultado Esperado
O usuário deve ser autenticado com sucesso.
O sistema deve redirecionar para a área principal.

Prioridade
Alta

Status
✅ Automatizado

CT-002 - Login com senha inválida
Objetivo
Validar que o sistema impeça o acesso quando a senha estiver incorreta.

Pré-condições
Usuário previamente cadastrado.

Dados de Teste
Campo	Valor
E-mail	testesportifolios@gmail.com
Senha	12345

Passos
Acessar a tela de login.
Informar e-mail válido.
Informar senha inválida.
Clicar em Entrar.

Resultado Esperado
O sistema deve exibir a mensagem:
Email e/ou senha inválidos
O usuário não deve conseguir acessar a aplicação.

Prioridade
Alta

Status
✅ Automatizado