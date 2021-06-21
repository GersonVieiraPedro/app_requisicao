const SQLite = require('sqlite3').verbose();
const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
const path = require("path")
const NomeBanco = "LocalStorege.db"
const LocalStorage = path.resolve(__dirname,"components/Db/", NomeBanco)
const Email = require("nodemailer")
const { PageEmail } = require("../src/components/js/Email")


//Salva o requisição mo banco de dados
function SalvarBanco(Dado) {

    Obj = Dado

    if (Obj) {
        let i = 0
        let Tamanho = Obj.length
        while (i < Tamanho) {
            const Banco = new SQLite.Database(LocalJob);
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

//salva o Usuario que logou na tela de login
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

//Funcao para enviar email
function EnviarEmail(Lista, Destinatarios){

    //Configuraçoesd de email
    let Envair = Email.createTransport({
      host:"correio.jbs.com.br",
      port:587,
      secure: false,
      auth:{
        user:"Gerson.Pedro@swift.com.br",
        pass:"J}w3eZ9*T$"
      }
    })
  
    //Abre e determina o filtro do banco
    let Banco = new SQLite.Database(LocalJob)
    let SQL = `SELECT EmailGestor FROM Gestao WHERE Nome = ?`
    let Gestor = Destinatarios
    let EmailGes

    //Realiza o select
    Banco.all(SQL, [Gestor], (err, rows) => {
      if (err) {
        throw err;
      } else {
        rows.forEach((row) => {
         EmailGes = row.EmailGestor
        });
        console.log("Email :" + EmailGes)

        //Estrutura do email
        const EstrutaEmail = {
          from: "Gerson.Pedro@swift.com.br",
          to: `douglas.rodrigues@swift.com.br; gerson.pedro@swift.com.br, nikolas.martins@swift.com.br, eilson.costa@swift.com.br; ${EmailGes}`,
          subject: "Teste Requisição Almox",
          html: PageEmail(Lista)
        }
        //Envia o email
        Envair.sendMail(EstrutaEmail, function (err, info) {
          if (err) console.log("Erros " + err)
          else console.log("Informações " + info)
        })
      }
    });
    Banco.close()
  }

module.exports = {
    SalvarBanco,
    RegistrarUsuario,
    EnviarEmail
}