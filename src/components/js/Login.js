const {ipcRenderer} = require("electron");

function Logar() {
    let Pwd = document.getElementById("Pwd").value
    let Nome = document.getElementById("Name").value

    if (Pwd == null || Pwd == undefined || Pwd =="" || Nome == null || Nome == undefined || Nome == "" ) {
        return
    } else {
        let Username = document.getElementById("Name").value
        Username = Username.toUpperCase()
        ipcRenderer.send("Usuario", Username)
    }
}

ipcRenderer.on("Senha", (event, arg) => {
    let Senha = document.getElementById("Pwd").value

    ipcRenderer.on("Chapa", (e, a) => {

        if (arg == Senha) {

            event.sender.send("Aprovado", a )
        }
    })
})

function Email(){
ipcRenderer.send("Email", "Enviar")
}
//Envia mensagem para o main com o objetivo de fechar janela 
function CloseWindow() {

    ipcRenderer.send('CloseWindow', "Close")
}