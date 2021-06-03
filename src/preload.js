"use strict"
const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const nameBanco = 'DB_RequisicaoAlmox.db'
const banco = path.resolve(__dirname, "components/Db/", nameBanco)
const caminho = 'C:/Projetos/Rep/src/components/Db/DB_RequisicaoAlmox.db'
const caminho2 = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
const caminho3 = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"


document.addEventListener('DOMContentLoaded', () => {
    //Abre o Banco
    let db = new sqlite3.Database(banco, (err) => {
        if (err) {
            console.error(`Erro ao conectar :${err.message}`);
        }
        console.log('Conectado ao banco de dados.');

    });

    let SQL = `SELECT Nome FROM Pessoas`

    db.all(SQL, [], (err, rows) => {

        let ListaA = new Array()

        if (err) {
            throw err;
        } else {
            rows.forEach((row) => {
                // console.log(row.Nome)
                ListaA.push(row.Nome)
            });
            
            //Armazena o Array criano no elemento Hidder la no HTML
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