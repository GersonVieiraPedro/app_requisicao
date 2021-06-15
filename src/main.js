
// Modules to control application life and create native browser window
const {app,BrowserWindow} = require('electron')
const path = require('path')
const {ipcMain} = require('electron');
const { SalvarBanco, ValidarUsuario } = require('./Banco');




ipcMain.on('Requsição', (event, args) => {
 //Obj = JSON.stringify(args)
 
 let Msg = SalvarBanco(args)

  event.sender.send('Mensagem', Msg)
})

ipcMain.on("Usuario", (event, arg)=>{
  console.log(arg)
  
   ValidarUsuario(arg)
   function RetornarSenha(Valor){
    console.log(Valor)
    event.sender.send("Senha", Valor)
    
  }
  
})






function PageTabela() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
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
  mainWindow.setMenu(null)

  // and load the index.html of the app.
  mainWindow.loadFile('./src/pages/Tabela.html')
  //mazimiza a pafina 
  mainWindow.maximize();
  // Open the DevTools.
  mainWindow.once("ready-to-show",()=>{
    mainWindow.show()
  })
  mainWindow.webContents.openDevTools()


}

function PageLogin() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
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
  mainWindow.setMenu(null)
  

  // and load the index.html of the app.
  mainWindow.loadFile('./src/pages/Login.html')
  //mazimiza a pafina 
  mainWindow.maximize();
  // Open the DevTools.
  mainWindow.once("ready-to-show",()=>{
    mainWindow.show()
  })
  mainWindow.webContents.openDevTools()
}

//const server = require('./components/js/Database.js')

ipcMain.on("Aprovado", (event, arg)=>{
  console.log(arg)
  if(arg == "Liberado"){
    PageLogin.show(false)
    PageTabela.show(true)
  }else{
    PageLogin.show(true)
    PageTabela.show(false)

  }

})


app.whenReady().then(() => {
  PageLogin()

  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) PageLogin()

  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


module.exports ={
  RetornarSenha
}