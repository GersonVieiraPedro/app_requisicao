const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const nameBanco = 'DB_RequisicaoAlmox.db'
const banco = path.resolve(__dirname, nameBanco)
const caminho = 'C:/Users/Gerson Viera Pedro/Desktop/req/src/components/banco/DB_RequisicaoAlmox.db'


// open the database
function OnBanco(Local) {
  caminho = Local
  let db = new sqlite3.Database(caminho, (err) => {
    if (err) {
      console.error(`Erro ao conectar :${err.message}`);
    }
    console.log('Conectado ao banco de dados.');
  });
}
/*
db.serialize(() => {
  db.all(`SELECT Nome FROM Pessoas ;`, (err, row) => { 
    if (err) {
      console.error(`Erro ao realizar o comando :${err.message}`);
    }
    console.log(row.id + "\t" + row.name);
  });
});
*/
function OffBanco(){
  db.close((err) => {
    if (err) {
      console.error(`Erro ao fecha o banco :${err.message}`);
    }
    console.log('Banco de dados fechado.');
  });
  }
  

let SQL = `SELECT Nome FROM Pessoas`
//let Nick = Nome;


// first row only
function ListaArray(CodeSQL) {
  OnBanco()
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
  OffBanco()
}

let ar = ListaArray(SQL)
console.log(ar)




/* let sql = `SELECT Nick, Senha
            FROM Login
            WHERE Nick  = ?`;
 */

module.exports = ListaArray;