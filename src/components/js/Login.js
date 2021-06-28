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

function VisibleLogin(){

   let ContainerLogin = document.getElementById("Login")
   let ContainerRegistrar = document.getElementById("Registrar")

   let See = ContainerLogin.style.visibility
   
    if(See == "hidden"){

        ContainerRegistrar.style.visibility = "hidden"
        ContainerLogin.style.visibility = "visible"
    }else{
        ContainerRegistrar.style.visibility = "visible"
        ContainerLogin.style.visibility = "hidden"
    }

}

function VerificarChapa(Chapa) {

    ipcRenderer.send("VerificaChapaPessoas", Chapa)
    ipcRenderer.send("VerificarChapaUsuarios", Chapa)
}

let EssaChapaExiste = ""
ipcRenderer.on("StatusChapaPessoas", (event, arg) => {
    if(arg == "Chapa Não Encontrada"){
        alert(arg)
        EssaChapaExiste = false
    }else{
        EssaChapaExiste = true    
    }


})

let UsuarioJaCadastrado = ""
ipcRenderer.on("StatusChapaUsuarios", (event, arg) => {
   
    if(arg == "Usuario Já Cadastrado"){
        alert(arg)
        UsuarioJaCadastrado = true
    }else{
        UsuarioJaCadastrado = false
    }


})

function RegistrarNovoUsuario() {
    let Chapa = document.getElementById("RChapa").value
    let Senha = document.getElementById("RPass").value
    let ConfSenha = document.getElementById("RPassConfirmar").value
    let Usuario = document.getElementById("RName").value
    let info = document.getElementById("RDivInfoErro")

    VerificarChapa(Chapa)

        if(EssaChapaExiste == true && UsuarioJaCadastrado == false){
            if (Senha == ConfSenha) {
                let User = {
                Nome: Usuario,
                Senha: Senha,
                Chapa: Chapa
                }
    
    
                ipcRenderer.send("RegistrarUsuario", User )
            } else {
                info.style.visibility = "Visible"
            }
        }

    }

