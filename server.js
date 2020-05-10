const Pool = require('pg').Pool;

// 1- Abrir conexão
// 2- Executar comando SQL
// 3- Fechar a conexão

const pool = new Pool({
    user: 'mwdjwugnlerish',
    password: 'd4cb70cfcb644791928e2f5a590da4e69ba1fd6a138d49a9030900a120b7899a',
    host: 'ec2-52-87-135-240.compute-1.amazonaws.com',
    database: 'dbr99e9b5i24q9',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

server.get('/tarefa', async function(request, response) {
    const result = await pool.query('SELECT * FROM tarefas');
    return response.json(result.rows);
})

server.listen(process.env.PORT || 3000);