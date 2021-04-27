# Informações
## App AgroQuiz.

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

O aplicativo permite adicionar itens de tarefas, marcá-los como concluídos e excluir itens concluídos. 
Os recursos `SQLite` usados ​​incluem a criação e abertura de bancos de dados, criação de tabelas, 
inserir itens, consultar e exibir resultados, usando instruções preparadas.

![Simulator Example](https://raw.githubusercontent.com/victorborges97/victorborges97.github.io/master/src/assets/projets/APPTODO.png)

## 🚀 Para usar basta somente roda os seguintes comando a baixo.

* Primeiro instalar as dependencias: 
  $ `yarn` or `npm install`
- Logo após, instalar essas duas bibliotecas.
  $ `npm install -g expo-cli`
  $ `npm install -g json-server`

* Segundo Rodar o server-json (Servidor fake para apresentação do APP):
- Lembre-se de colocar o seu IP local no lugar do meu a baixo.
  $ `json-server --watch src/services/data.json --host 21.0.214.178  --port 3333`

* Terceiro Rodar o expo para visualizar o app rodando:
  $ [`expo start`](https://docs.expo.io/versions/latest/workflow/expo-cli/), Experimente.

