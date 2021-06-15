
const SQLite = require('sqlite3').verbose();
const LocalJob = 'C:/Users/gvieira-sbj/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db'
const LocalHome = "C:/Users/Gerson Viera Pedro/Documents/GitHub/app_requisicao/src/components/Db/DB_RequisicaoAlmox.db"
const {app, BrowserWindow} = require('electron')
const path = require('path')
const {ipcMain} = require('electron');
const {SalvarBanco} = require('./Banco');




ipcMain.on('Requsição', (event, args) => {
  //Obj = JSON.stringify(args)

  let Msg = SalvarBanco(args)

  event.sender.send('Mensagem', Msg)
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

    let SQL = `SELECT Senha FROM Usuarios WHERE Username = "${User}"`
    Banco.all(SQL, [], (err, rows) => {
      rows.forEach((row) => {

        event.sender.send("Senha", row.Senha)
      });

    });

    Banco.close()


  }

  // event.sender.send("Senha", "Validar")


})



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
    if (arg == "Liberado") {
      winTabela.setMenu(null)
      winTabela.loadFile('./src/pages/Tabela.html')
      winTabela.maximize()
      winTabela.webContents.openDevTools()
      //winTabela.once("ready-to-show", () => {
        winTabela.show(true)
     // })

      winLogin.close()
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