const SQLite = require('sqlite3').verbose();


// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const {ipcMain} = require('electron')



ipcMain.on ('Requsição', (event, args) => { 
  Obj = JSON.stringify(args)
console.log (Obj) 

event.sender.send ('asynchronous-reply', 'world')
})




function PageTabela () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
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
   mainWindow.webContents.openDevTools()
}

//const server = require('./components/js/Database.js')

app.whenReady().then(() => {
  PageTabela () 

  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) PageTabela () 
  
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


