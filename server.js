import { app } from "./src/App.js";
import { db } from "./dbConnect.js";
const port = process.env.PORT || 3001;

// Iniciando o servidor backend
app.listen(port, () =>
  console.log(`Servidor iniciado no: http://localhost:${port}`)
);

// Iniciando banco de dados
db.on('error', console.error.bind(console, 'Erro de conexão'));
db.once('open', () => console.log('Conexão com o Banco de Dados feito com sucesso'));
