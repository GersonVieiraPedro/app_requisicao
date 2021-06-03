function Produto() {

    this.Add = (Material, Descricao, PrecoUnitatio) => {

        let Prod = new Object()
         Prod = {
            Material: Material,
            Prod: Descricao,
            PrecoUnitatio: PrecoUnitatio
        }
        return (Prod)
    }

}

