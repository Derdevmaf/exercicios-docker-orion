const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

// Configuração de conexão usando variáveis de ambiente
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Rota /health (Requisito 1)
app.get('/health', (req, res) => {
  // Simplesmente retorna um status OK para indicar que a API está rodando
  res.json({ status: 'ok', service: 'api' });
});

// Rota principal que testa a conexão com o DB
app.get('/', async (req, res) => {
  try {
    await client.connect();
    const result = await client.query('SELECT NOW() as now');
    await client.end();
    res.send(`Conexão com o banco de dados bem-sucedida! Hora atual do DB: ${result.rows[0].now}`);
  } catch (err) {
    // Se houver erro, a API retorna 500 e a mensagem de erro
    res.status(500).send(`Erro ao conectar ou consultar o banco de dados: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});