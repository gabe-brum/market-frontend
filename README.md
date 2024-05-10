## Projeto desenvolvido nas aulas da trilha de ReactJS da Rocketseat.

### O frontend da aplicação visa trazer gráficos de pedidos e produtos destaques, assim como fazer a listagem e paginação dos pedidos feitos, tudo alimentado pelo backend (https://github.com/rocketseat-education/pizzashop-api).

Dashboard:
![image](https://github.com/gabe-brum/market-frontend/assets/52430344/c2c8707d-c61f-4c7c-9faa-c7c1bf6db91a)

Listagem de pedidos:
![image](https://github.com/gabe-brum/market-frontend/assets/52430344/3626d642-1214-4547-81b9-ac39a0004c31)

### Rodar frontend alimentado pelo backend
Considerando que a API está rodando, para rodar o frontend basta rodar `npm run dev` que a aplicação abrirá na prota 5173

### Rodar frontend utilizando mocks
Nesse projeto foram criados os mocks para que seja possível subir a aplicação frontend mesmo sem ter o backend rodando. Para isso, rode `npm run dev:test`.
A partir desses mocks, também é possível rodar os testes end-to-end também criados para esta aplicação. Para os testes e2e serem executados, rode `npx playwright test --ui` em seu terminal

### Rodar testes unitários
Rode `npm test` que o vitest será executado.
