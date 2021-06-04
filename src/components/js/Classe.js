function Produto() {

    this.Add = (Material = Number, Descricao = String , PrecoUnitatio = Number) => {

        let Prod = new Object()
         Prod = {
            Material: Material,
            Prod: Descricao,
            PrecoUnitatio: PrecoUnitatio
        }
        return (Prod)
    }

}

/*
let Produtos = new Produto()

console.log(Produtos.Add(10,"File Manga",14.75))
*/
module.exports ={
    Produto
}