# Desafio Vaga Front-End - SOGO Tecnologias

## Instações necessárias

É necessário ter instalado na máquina `Node`, `yarn` e `json-server`

Para instalar o `json-server` execute o seguinte comando: `npm install -g json-server`

## Para Executar o projeto:

Para instalação de pacotes: `yarn` 
Para execução do Front-End: `yarn start`

Para utilizar o mock da api de contratos: `json-server --watch api.json --port 8080`

## Observações sobre o Front-End

A largura limite do menu deve ser considerado a partir da barra de cor cinza na lateral esquerda

Para simular uma notificação de erro é importante seguir exatamente os seguintes passos:

1 - Seguir para qualquer um dos formulários, formulário de contratos é mais recomendavel pois possui menos campos;
2 - Preencher o campo CPF com um CPF existente na base de dados;
3 - Selecionar a data desejada;
4 - Antes de pressionar o botão de CADASTRAR é preciso interromper a execução do `json-server`;
5 - Depois é só acionar o botão de CADASTRAR e o erro aparecerá no canto superior direito em vermelho;

Ao tenter realizar um cadastro com campos vazios uma mensagem em amarelo aparecerá no canto superior direito

