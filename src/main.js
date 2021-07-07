
const SQLite = require('sqlite3').verbose();
const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
const {app, BrowserWindow} = require('electron')
const path = require('path')
const {ipcMain} = require('electron');
const {SalvarBanco, RegistrarUsuario, EnviarEmail, RegistrarNovoUsuario} = require('./Banco');
const Email = require("nodemailer");
const { ListaDeRequisicoes } = require('./components/js/Classe');
const { Upload } = require('./Upload');
const nameBanco = 'DB_RequisicaoAlmox.db'
const LocalApp = path.resolve(__dirname, "components/Db/", nameBanco)


const XLSX = require('xlsx');
//const fs = require('fs')




let DD = LocalApp

// Tras a data atual formadata "00/00/0000"
function FormatData(Data) {
  let DataA = Data
  return `${adicionaZero(DataA.getDate().toString())}/${adicionaZero(DataA.getMonth() + 1).toString()}/${DataA.getFullYear()}`
}

//Adiona 0 na Frente se o numero for menor que 10 
function adicionaZero(numero) {
  if (numero <= 9)
      return "0" + numero;
  else
      return numero;
}

function DateUTP8(DataSting){
  return new Date(`${DataSting.substring(6,10)}-${DataSting.substring(3,5)}-${DataSting.substring(0,2)} `)
}
function DateUTP8Format(DataSting){
  return (`${DataSting.substring(6,10)}-${DataSting.substring(3,5)}-${DataSting.substring(0,2)}`)
}



//enviar o email e salva a requisiçao
ipcMain.on('Requsição', (event, args) => {
  //Obj = JSON.stringify(args)

  let Msg = SalvarBanco(args)

  EnviarEmail(args, args[0].Gestor, "Requisição")

  event.sender.send('Mensagem', Msg)

})

ipcMain.on('Verificar', (event, arg) => {


  let Lista = new Array()

  Obj = arg

  if (Obj) {
    let i = 0
    let Tamanho = Obj.length
    while (i < Tamanho) {
      let Time = Obj[i].Time
      let Data = Obj[i].Data

      Data = DateUTP8(Data)
      Data = new Date(Data.setDate(Data.getDate() - (Time * 2)))
      Data = FormatData(Data)
      Data = DateUTP8Format(Data)

      let SQL = `SELECT Data, Chapa, Material FROM RequsicaoAlmox WHERE ID = ? AND Data > ?`
      let Banco = new SQLite.Database(DD)

      //console.log(`ID: ${Obj[i].Chapa}${Obj[i].Material}` + "  &  Data Where: "+ Data)

      Banco.all(SQL, [`${Obj[i].Chapa}${Obj[i].Material}`, Data], (err, rows) => {

        if (err) {
          throw err;
        } else {

          let TData = ''
          let ID = ''

          rows.forEach((row) => {
            TData = row.Data
            ID = `${row.Chapa}${row.Material}`
          })

          if(ID == ""){
            ID = "@"
          }

          let busca = new Object()

          Lista.push(
            busca = {
              Data: TData,
              ID: ID
            }
          )

          if (Lista.length == Tamanho) {
            event.sender.send("Verificado", Lista)
          }

        }
      })

      Banco.close()
      i = i + 1
    }


  }
})

ipcMain.on("Usuario", (event, arg) => {

  ValidarUsuario(arg)

  function ValidarUsuario(User) {

    let Banco = new SQLite.Database(DD, (err) => {
      if (err) {
        console.error(`Erro ao conectar :${err.message}`);
        throw err
      } else {
        console.log('Conectado ao banco de dados.');
      }
    });

    let SQL = `SELECT Senha, Chapa, Grupo FROM Usuarios WHERE Username = "${User}" AND Situacao = "TRUE"`
    Banco.all(SQL, [], (err, rows) => {
      rows.forEach((row) => {

        event.sender.send("Senha", row.Senha)
        event.sender.send("Chapa", [row.Chapa, User , row.Grupo])


      });

    });

    Banco.close((err) => {
      if (err) {
        console.error(`Erro ao fecha o banco :${err.message}`);
      }
      console.log('Banco de dados fechado.');

    });


  }

  // event.sender.send("Senha", "Validar")

})

ipcMain.on("VerificarChapaUsuarios", (event, arg) => {

  let Chapa = Number.parseInt(arg)


  let SQL2 = "SELECT Chapa FROM Usuarios WHERE Chapa = ? "
  let BancoBD = new SQLite.Database(DD, (err) => {
    if (err) {
      console.error(`Erro ao conectar :${err.message}`);
      throw err
    } else {
      console.log('BancoBD Conectado ao banco de dados.');
    }
  });

  BancoBD.all(SQL2, [Chapa], (err, rows) => {

    if (err) {
      event.sender.send("StatusChapaUsuarios", "ERRO")
      console.log("Menssagem De Erro : Ao Procurar a Chapa,  " + err)
    } else {
      let Ch = ""
      rows.forEach((row) => {
        Ch = row.Chapa
      })
      if(Ch == null || Ch == "" || Ch == undefined){
        event.sender.send("StatusChapaUsuarios", "Usuario Não Cadastrado")
      }else{
        event.sender.send("StatusChapaUsuarios", "Usuario Já Cadastrado")
      }
      console.log("Ch: " + `"${Ch}"`)
    }
  })

  BancoBD.close((err) => {
    if (err) {
      console.error(`Erro ao fecha o banco :${err.message}`);
    }
    console.log(' BancoBD Banco de dados fechado.');

  });

})



ipcMain.on("ListaDeUsuarios", (event, arg) =>{


  let Banco = new SQLite.Database(DD)

  let SQL = "SELECT * FROM Usuarios"
  let Arr = new Array()
  let Users = new Object()
  Banco.all(SQL,[], (err, rows) => {


    if (err) {
      throw err;
    } else {

      rows.forEach((row) => {
        Arr.push(
          Users = {
            Chapa: row.Chapa,
            Username: row.Username,
            Grupo: row.Grupo,
            Situacao: row.Situacao
          }
          
        )
      })

      event.sender.send("ArrayDeUsuarios", Arr)
    }

  })

  Banco.close()


})



ipcMain.on("VerificaChapaPessoas", (event, arg) => {


  let Chapas = Number.parseInt(arg)
  let DB = new SQLite.Database(DD, (err) => {
    if (err) {
      console.error(`Erro ao conectar :${err.message}`);
      throw err
    } else {
      console.log('DB Conectado ao banco de dados.');
    }
  });

  let SQL = `SELECT Chapa FROM Pessoas WHERE Chapa = ? AND Situacao = ?`
  DB.all(SQL, [Chapas , "ATIVO"], (err, rows) => {

    if (err) {
      event.sender.send("StatusChapaPessoas", "Chapa Não Encontrada")
      console.log("Menssagem De Erro : Ao Procurar a Chapa,  " + err)
    } else {
      let Cp = ""
      rows.forEach((row) => {
        Cp = row.Chapa
      });
      if(Cp == null || Cp == "" || Cp == undefined){
        event.sender.send("StatusChapaPessoas", "Chapa Não Encontrada")
       
      }else{
        event.sender.send("StatusChapaPessoas", Cp)
      }
      console.log("CP: " + `"${Cp}"`)
      
    }

  })


  DB.close((err) => {
    if (err) {
      console.error(`Erro ao fecha o banco :${err.message}`);
    }
    console.log(' DB Banco de dados fechado.');

  });

})

ipcMain.on("RegistrarUsuario", (event, arg)=>{

  RegistrarNovoUsuario(arg)

  let Msg = "Usuario Criado Com Sucesso, /n aguarde o desenvolvedor aprovar o usuario "
    event.sender.send("MsgNovoUsuario", Msg)
    arg.Menssagem = Msg
    EnviarEmail(arg,"","NovoUsuario")
 
})


ipcMain.on("ListaDeRequisicoes", (event, arg)=>{
  
  let Data = arg

  Data = DateUTP8(Data)
  Data = new Date(Data.setDate(Data.getDate() - 60))
  Data = FormatData(Data)
  Data = DateUTP8Format(Data)

  let Banco = new SQLite.Database(DD)

  let SQL = "SELECT Pedido, Material, Descricao, Qtd, Data, Nome FROM RequsicaoAlmox WHERE Status = ?"
  let Arr = new Array()
  let ObjLista = new ListaDeRequisicoes()
  Banco.all(SQL,['NOVO'], (err, rows) => {


    if (err) {
      throw err;
    } else {

      rows.forEach((row) => {
        Arr.push(ObjLista.Add(row.Pedido, row.Material, row.Descricao, row.Qtd, row.Nome, row.Data))
      })

      event.sender.send("ArrayDeRequisicoes", Arr)
    }

  })

  Banco.close()

})


ipcMain.on("Pedidos", (event, arg)=>{

  lista = arg
  Tamanho = lista.length
  i = 0
  let Msg = ""
  while(i < Tamanho){

  let Banco = new SQLite.Database(DD)
  let Update = [lista[i].Separador, lista[i].Atendido, lista[i].Motivo, lista[i].NumSAP, lista[i].DateTime, lista[i].Pedidos, lista[i].Material, lista[i].Solicitante]
    //console.log(Update)
  let SQL = "UPDATE RequsicaoAlmox SET Separador = ?, Status = ? , MotivoSeparador = ?, NumReqSAP = ?, DataDeSeparacao = ? WHERE Pedido = ? AND Material = ? AND Nome = ?"

  Banco.run(SQL, Update, function (err) {
    if (err) {
      return event.sender.send("ERRO", err.message);
    }

    //console.log(`Linha(s) Atualizada: ${this.changes}`);
  });

  Banco.close();

  i++
 }

})


ipcMain.on("AlteracoesTbUsuarios", (event, arg)=>{

  lista = arg
  Tamanho = lista.length
  i = 0
  let Msg = ""
  while(i < Tamanho){

  let Banco = new SQLite.Database(DD)
  let Update = [lista[i].Grupo , lista[i].Acesso, lista[i].Chapa]
    //console.log(Update)
  let SQL = "UPDATE Usuarios SET Grupo = ?, Situacao = ? WHERE Chapa = ?"

  Banco.run(SQL, Update, function (err) {
    if (err) {
      return event.sender.send("ERRO", err.message);
    }

    //console.log(`Linha(s) Atualizada: ${this.changes}`);
    //return event.sender.send("ERRO", this.changes );
  });

  Banco.close();

  i++
 }

})


/*
ipcMain.on("Email", (event, arg)=>{
  console.log("Enviando Email...")
  EnviarEmail
  
})
*/
ipcMain.on("ATUALIZARR", (event, arg)=>{

  AtuzalizarTabela(arg)

  console.log(arg)

})





function AtuzalizarTabela(list) {

  file = list
    
  file.arrayBuffer().then((res) =>{

    let data = new Uint8Array(res)
    let workbook = XLSX.read(data, {type:"array"})
    let SheetName = workbook.SheetNames[0]

    console.log(SheetName)

  })


    /*
    const outputFilename = "‪C:/Users/gvieira-sbj/Desktop/Text/File.csv"
    const workBook = XLSX.readFile(list.path);
    console.log(workBook)
    XLSX.writeFile(workBook, outputFilename, { bookType: "csv" });
    console.log(list)
     */

}




function Pages() {
  // Create the browser window.
  const winLogin = new BrowserWindow({
    width: 1300,
    height: 700,
    frame: false,
    title: "Login",
    icon:"./src/components/icons/logo_swift.ico",
    transparent: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //preload: "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/js/Database"
      //preload: path.join(__dirname, 'preload.js')
    }
  })
 

  const winTabela = new BrowserWindow({
    width: 1300,
    height: 700,
    title: "Requisição",
    frame: false,
    transparent: true,
    show: false,
    icon:"./src/components/icons/logo_swift.ico",
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //preload: "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/js/Database"
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  ipcMain.on("Aprovado", (event, arg) => {
    if (arg != "") {
      winTabela.setMenu(null)
      winTabela.loadFile('./src/pages/Tabela.html')
      winTabela.maximize()
      winTabela.webContents.openDevTools()
      winTabela.show(true)
      winLogin.close()
      RegistrarUsuario(arg)
    }else {
      winLogin.setMenu(null)
      winLogin.loadFile('./src/pages/Login.html')
      winLogin.maximize()
      winLogin.once("ready-to-show", () => {
        winLogin.show()
      })
      winTabela.show(false)
    }
    
  })
   
  
  winLogin.loadFile('./src/pages/Login.html')

  //mazimiza a pafina 
  winLogin.maximize();
  // Open the DevTools.
  winLogin.once("ready-to-show", () => {
    winLogin.show()
  })
  
  //winLogin.webContents.openDevTools()
  ipcMain.on("print", (event, arg) => {
    winTabela.webContents.print({
      pageSize:"A4"

    })
  })
}


app.whenReady().then(() => {
  Pages()
  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) Pages()

  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('CloseWindow', (event, arg)=>{
    if(arg == "Close"){
      app.quit()
    }
})