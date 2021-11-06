# desafio-sharenergy-front-end

## Rotas:
- Possui a LandingPage com local apropriado para trocar o nome de usuário no banco de dados; FALHA => meramente estético;
- Possui a AddClientPage com local para adicionar um novo cliente; FALHA => não possui quaisquer restrições;
- Possui a DeleteClientPage com local para deletar um cliente; FALHA => não possui quaisquer restrições, podendo acusar "falsos positivos";
- Possui a ModifyClientPage com local para modificar um cliente; FALHA => não possui quaisquer restrições, podendo acusar "falsos positivos", além disso, a API não está filtrando o campo "novasUsinas", modificando campo existente para null;
- Possui a GraphicPage para observar um dado em determinado intervalo temporal; FALHA => não possui filtro para falha no fetch da API;
- Possui ProfitPage para cálculo de lucro diário e outras informações;

### Outras informações:
- Feito a maior parte com Material Ui;
- API deployada em Heroku + Mongo Atlas (link para o repositório https://github.com/JRGCast/desafio-sharenergy-back-end);
- Deploy feito em https://jrgcast.github.io/desafio-sharenergy-front-end/
- Devido a imprevistos, não foi possível consertar os tantos bugs e falhas;
