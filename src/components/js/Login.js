const { ipcRenderer } = require("electron");

function OLHO() {
var Olho = window.document.getElementById("ImgOlho")
var OlhoOff = window.document.getElementById("ImgOlhoOff")
var TxPass = window.document.getElementById("TxtSenha")

if(TxPass.getAttribute('type') == 'password'){
    TxPass.setAttribute('type', 'Text');
    Olho.style.opacity = "0";
    OlhoOff.style.opacity = "1";

}else{
    TxPass.setAttribute('type', 'password');
    Olho.style.opacity = "1";
    OlhoOff.style.opacity = "0";
}
}


function Logar(){
    let Username = document.getElementById("TxtNome").value
    let Senha = document.getElementById("TxtSenha").value

    ipcRenderer.send("Usuario", Username)
   
    ipcRenderer.on("Senha",(event, arg)=>{
        console.log(arg)
        if(arg == Senha ){

            event.sender.send("Aprovado", "Liberado")
        }

    })
}

