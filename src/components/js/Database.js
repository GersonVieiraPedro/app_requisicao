const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const nameBanco = 'DB_RequisicaoAlmox.db'
const banco = path.resolve(__dirname, nameBanco)
const caminho = 'C:/Projetos/Rep/src/components/Db/DB_RequisicaoAlmox.db'


const caminho2 = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'




  //Abre o banco de dados 
  let db = new sqlite3.Database(caminho, (err) => {
    if (err) {
      console.error(`Erro ao conectar :${err.message}`);
    }
    console.log('Conectado ao banco de dados.');
  });
 
  let SQL = `SELECT Nome FROM Pessoas`

  //modulo de select (abre e fecha o banco)
module.exports.ListaArray= function (CodeSQL) {

  //Abre o Banco
  let db = new sqlite3.Database(caminho, (err) => {
    if (err) {
      console.error(`Erro ao conectar :${err.message}`);
    }
    console.log('Conectado ao banco de dados.');
  });
 

  //Select
  let SQL = CodeSQL
  db.all(SQL, [], (err, rows) => {

    let Lista = [];

    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.Nome)
      Lista.push(row.Nome)
    });
    return Lista
  });

    //Fecha o Banco
  db.close((err) => {
    if (err) {
      console.error(`Erro ao fecha o banco :${err.message}`);
    }
    console.log('Banco de dados fechado.');
  });
  

}


