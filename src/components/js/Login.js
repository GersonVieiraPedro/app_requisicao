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
    let Senha = document.getElementById("Pwd")
    let info = document.getElementById("DivInfoErro")
    ipcRenderer.on("Chapa", (e, a) => {

        if (arg == Senha.value) {

            event.sender.send("Aprovado", a )
        }else{
            info.style.visibility = "Visible"
            Senha.style.borderColor = "Red"
        }
    })
})



function EsconderErro(){
    let Senha = document.getElementById("Pwd")
    let info = document.getElementById("DivInfoErro")

    if(Senha.style.borderColor == "red"){
        Senha.style.borderColor = ""
        info.style.visibility = "hidden"
        //Senha.style.borderStyle ="0.5px"

    }
}

function Email(){
ipcRenderer.send("Email", "Enviar")
}
//Envia mensagem para o main com o objetivo de fechar janela 
function CloseWindow() {

    ipcRenderer.send('CloseWindow', "Close")
}