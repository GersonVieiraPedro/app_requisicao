
const SQLite = require('sqlite3').verbose();
const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
const {app, BrowserWindow} = require('electron')
const path = require('path')
const {ipcMain} = require('electron');
const {SalvarBanco, RegistrarUsuario, EnviarEmail} = require('./Banco');
const Email = require("nodemailer")


// Tras a data atual formadata "00/00/0000"
function DataTime(Data) {
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




//enviar o email e salva a requisiçao
ipcMain.on('Requsição', (event, args) => {
  //Obj = JSON.stringify(args)

  let Msg = SalvarBanco(args)

  EnviarEmail(args, args[0].Gestor)

  event.sender.send('Mensagem', Msg)

})

ipcMain.on('Verificar', (event, arg)=>{

  
  let Lista = new Array()

  Obj = arg

  if (Obj) {
      let i = 0
      let Tamanho = Obj.length
      while (i < Tamanho) {
        let Time = Obj[i].Time
        let Data = Obj[i].Data
        Data = Date.parse(Data)
        Data = Data - Time
        Data = DataTime(Data)
        
        
        let SQL = `SELECT Data FROM RequisicaoAlmox WHERE ID LIKE = ? AND Data > ?`
        let Banco = new SQLite.Database("LocalJob")
        Banco.all(SQL, [`%${Obj[i].Chapa}${Obj[i].Material}%`, Data], (err,rows)=>{

          if (err) {
            throw err;
          } else {

            rows.forEach((row) => {
              let TData = row.Data
            })

            let busca = new Object()
            Lista.push(
             busca = {
             DATA : TData,
             ID : Obj[i].ID
            }
            )
          }
       })
      }
      event.sender.send("Verificado", Lista)
  }
})

ipcMain.on("Usuario", (event, arg) => {

  ValidarUsuario(arg)

  function ValidarUsuario(User) {

    let Banco = new SQLite.Database(LocalJob, (err) => {
      if (err) {
        console.error(`Erro ao conectar :${err.message}`);
        throw err
      } else {
        console.log('Conectado ao banco de dados.');
      }
    });

    let SQL = `SELECT Senha, Chapa FROM Usuarios WHERE Username = "${User}"`
    Banco.all(SQL, [], (err, rows) => {
      rows.forEach((row) => {

        event.sender.send("Senha", row.Senha)
        event.sender.send("Chapa", [row.Chapa, User])

        
      });

    });

    Banco.close()


  }

  // event.sender.send("Senha", "Validar")

})


/*
ipcMain.on("Email", (event, arg)=>{
  console.log("Enviando Email...")
  EnviarEmail
  
})

*/



function Pages() {
  // Create the browser window.
  const winLogin = new BrowserWindow({
    width: 1300,
    height: 700,
    frame: false,
    title: "Login",
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
  
  winLogin.webContents.openDevTools()
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