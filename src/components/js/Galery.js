let Time = setInterval(Galery,5000)


function Galery() {
    
let Banner = window.document.getElementById('Imagebanner')
let GaleriaFotos = [
    'banner-mobile-frte249-cta.jpg',
    'banner-mobile-iberico-cta.jpg',
    'banner-mobile-kits-exclusivos-cta.jpg',
]

let Foto = Banner.attributes[1].value
Foto = Foto.substring(28)
let Tamanho =  GaleriaFotos.length -1
let Indice = GaleriaFotos.indexOf(Foto)

if(Indice == Tamanho){
    Indice = 0
}else{
    Indice = Indice + 1
}
//console.log(Banner) 
//Banner.setAttribute('src', `../image/${GaleriaFotos[Indice]}`)
Banner.style.animation = ""
setTimeout(()=> Banner.style.animation ="entrarimg 0.8s , FadeOut 1.5s reverse")
Banner.setAttribute('src',  `../components/Imagem/Banner/${GaleriaFotos[Indice]}`)

//Banner.style.animation = ""
//setTimeout(()=> Banner.style.animation ="sairimg 1s, FadeOut 1s")

}
