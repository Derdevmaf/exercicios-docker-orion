const express = require('express');
// Importe o Pool em vez do Client
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Configuração do Pool usando variáveis de ambiente
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Rota /health (Para o Desafio Extra)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api' });
});

// Rota principal que testa a conexão com o DB
app.get('/', async (req, res) => {
  let client; // Variável para armazenar a conexão do pool
  try {
    // Pega uma conexão emprestada do pool
    client = await pool.connect();
    
    // Executa a consulta
    const result = await client.query('SELECT NOW() as now');
    
    // Envia a resposta
    res.send(`Teste rodando com sucesso! Hora atual do DB: ${result.rows[0].now}`);
  } catch (err) {
    // Se houver erro, envia a mensagem de erro
    res.status(500).send(`Erro ao conectar ou consultar o banco de dados: ${err.message}`);
  } finally {
    // MUITO IMPORTANTE: Libera a conexão de volta para o pool
    if (client) {
      client.release();
    }
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}` );
});
