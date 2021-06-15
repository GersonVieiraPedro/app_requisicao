const { ipcRenderer } = require("electron");

function Logar(){
    let Username = document.getElementById("Name").value
    Username.toUpperCase()

    ipcRenderer.send("Usuario", Username)
 
}

ipcRenderer.on("Senha",(event, arg)=>{
    let Senha = document.getElementById("Pwd").value
    
    if(arg == Senha ){

        event.sender.send("Aprovado", "Liberado")
    }
   
})