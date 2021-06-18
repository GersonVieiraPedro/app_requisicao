const SQLite = require('sqlite3').verbose();
const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
const path = require("path")
const NomeBanco = "LocalStorege.db"
const LocalStorage = path.resolve(__dirname,"components/Db/", NomeBanco)

function SalvarBanco(Dado) {

    Obj = Dado

    if (Obj) {
        let i = 0
        let Tamanho = Obj.length
        while (i < Tamanho) {
            const Banco = new SQLite.Database(LocalHome);
            Banco.run(`INSERT INTO RequsicaoAlmox(Pedido, ID, Material, Descricao, Quantidade, PrecoUn, Valor, Data, Hora, Chapa, Nome, Gestor, Setor, Vistoria, Username, Motivo) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [Obj[i].Pedido,
                    Obj[i].ID,
                    Obj[i].Material,
                    Obj[i].Desc,
                    Obj[i].Quantidade,
                    Obj[i].PrecoUn,
                    Obj[i].Valor,
                    Obj[i].Data,
                    Obj[i].Hora,
                    Obj[i].Chapa,
                    Obj[i].Nome,
                    Obj[i].Gestor,
                    Obj[i].Setor,
                    Obj[i].Vistoria,
                    Obj[i].Username,
                    Obj[i].Motivo
                ],
                function (err) {
                    if (err) {
                        return console.log(`Erro ao realisar o insert, ${err.message}`),
                            "Erro ao Salvar No Banco De Dados"
                    } else {
                        return `Uma Nova Linha Foi Adicionada com Sucesso, ID : ${this.Pedido}`
                    }
                });
            Banco.close();
            i = i + 1
        }
        return "Pedido Foi Salvo Com Sucesso !"
    } else {
        return "Pedido Não Foi Salvo !"
    }
}


function RegistrarUsuario(Dado){

    let Banco = new SQLite.Database(LocalStorage)
    let Update = [Dado,"UsuarioLogado"]
    let SQL = "UPDATE Local SET Valor = ? WHERE Categoria = ?"

    Banco.run(SQL, Update, function(err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Linha(s) Atualizada: ${this.changes}`);
    });
    Banco.close();
}

module.exports = {
    SalvarBanco,
    RegistrarUsuario
}