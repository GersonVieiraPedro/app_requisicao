// Variaveis constantes 
    const SQLite = require('sqlite3').verbose();
    const path = require('path')
    const nameBanco = 'DB_RequisicaoAlmox.db'
    const LocalApp = path.resolve(__dirname, "components/Db/", nameBanco)
    const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
    const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
    const LocalHost = "//bbrdskadm13/host/05-Bancos De Dados/DB_RequisicaoAlmox.db"
    const {Produto, Colaborador} = require( "./components/js/Classe.js")

//


let Produtos = new Produto()
let Colaboradores = new Colaborador()




function GetComputerName() {
    try {
        var network = new ActiveXObject('WScript.Network');
        // Show a pop up if it works
        alert(network.computerName);
        console.log(network.computerName)
    }
    catch (e) { }
}

/* Conecta e consulta no banco um lista de nomes e salva no Front
   para que possa executar as informações de carregamento. */
document.addEventListener('DOMContentLoaded', () => {

    

    //Abre o Banco
    let db = new SQLite.Database(LocalHome, (err) => {
        if (err) {
            console.error(`Erro ao conectar :${err.message}`);
            throw err
        }else{
        console.log('Conectado ao banco de dados.');
        }
    });

    //Comando que extrai e armazena em um elemento no HTML
    let SQL = `SELECT * FROM Pessoas WHERE Cd = "CDA"`
    db.all(SQL, [], (err, rows) => {

        let ListaPessoas = new Array()

        if (err) {
            throw err;
        } else {
            rows.forEach((row) => {
                ListaPessoas.push(Colaboradores.Add(row.Chapa, row.Nome, row.Gestor, row.Setor, row.Cd))
            });
            
            //Armazena o Array criando no elemento Hidder la no HTML
            document.getElementById('ListaDeNomes').Value = ''
            document.getElementById('ListaDeNomes').Value = ListaPessoas
            console.log(ListaPessoas)
        }
    });


    //Comando que extrai e armazena em um elemento no HTML
    let SQL2 = `SELECT * FROM Produtos WHERE Status = "ATIVO"`
    db.all(SQL2, [], (err, rows) => {

        let ListaProdutos = new Array()

        if (err) {
            throw err;
        } else {
            rows.forEach((row) => {
                ListaProdutos.push(Produtos.Add(row.Material, row.Descricao, row.PrecoUn))
            }); 
            
            //Armazena o Array criando no elemento Hidder la no HTML
            document.getElementById('ListaDeProdutos').Value = ''
            document.getElementById('ListaDeProdutos').Value = ListaProdutos
            console.log(ListaProdutos)
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