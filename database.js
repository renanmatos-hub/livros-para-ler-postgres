// yarn add pg

const Pool = require('pg').Pool;

// 1- Abrir conexão
// 2- Executar comando SQL
// 3- Fechar a conexão

const pool = new Pool({
    user: 'gjjgdoxfennltc',
    password: '87322e5f3845d28706d48c92189230fa9d0c496276cedfc2e692d744463be860',
    host: 'ec2-52-22-216-69.compute-1.amazonaws.com',
    database: 'dfcbtfgfhm8nlk',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

//Create Table
/* const sql = `
    CREATE TABLE IF NOT EXISTS livros(
        id serial primary key,
        autor varchar (50),
        titulo varchar (50),
        anopublic varchar (4),
        genero varchar (15),
        lido boolean
    )
`;
pool.query(sql, function (erro, resultado) {
    if (erro)
        throw erro

    console.log('Tabela criada com sucesso!');
});
 */
//INSERT
const sql = `
    INSERT INTO livros (autor, titulo, anopublic, genero, lido)
        VALUES
            ('Julio Verne', 'Volta ao Mundo em 80 Dias', '1800', 'Ficção', true),
            ('Julio Verne', 'Viagem ao Centro da Terra', '1800', 'Ficção', true),
            ('Julio Verne', '20 Mil Léguas Submarinas', '1800', 'Ficção', true)
`;
pool.query(sql, function(erro, resultado) {
    if (erro)
        throw erro

    console.log('Inserido com sucesso');
});

// SELECT no arquivo server.js