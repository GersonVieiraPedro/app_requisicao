// Variaveis constantes 
    const SQLite = require('sqlite3').verbose();
    const path = require('path')
    const nameBanco = 'DB_RequisicaoAlmox.db'
    const LocalApp = path.resolve(__dirname, "components/Db/", nameBanco)
    const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
    const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
    const LocalHost = "//bbrdskadm13/host/05-Bancos De Dados/DB_RequisicaoAlmox.db"
    const {Produto} = require( "./components/js/Classe.js")

//


let Produtos = new Produto()




/* Conecta e consulta no banco um lista de nomes e salva no Front
   para que possa executar as informações de carregamento. */
document.addEventListener('DOMContentLoaded', () => {
    //Abre o Banco
    let db = new SQLite.Database(LocalApp, (err) => {
        if (err) {
            console.error(`Erro ao conectar :${err.message}`);
        }
        console.log('Conectado ao banco de dados.');

    });

    let SQL = `SELECT Nome FROM Pessoas WHERE Cd = "CDA"`

    db.all(SQL, [], (err, rows) => {

        let ListaA = new Array()

        if (err) {
            throw err;
        } else {
            rows.forEach((row) => {
                // console.log(row.Nome)
                ListaA.push(row.Nome)
            });
            
            //Armazena o Array criando no elemento Hidder la no HTML
            document.getElementById('ListaDeNomes').Value = ''
            document.getElementById('ListaDeNomes').Value = ListaA
            //console.log(ListaA)
        }
    });

    //Fecha o Banco
    db.close((err) => {
        if (err) {
            console.error(`Erro ao fecha o banco :${err.message}`);
        }
            console.log('Banco de dados fechado.');

    });

})