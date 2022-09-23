module.exports= class productsApi {

    constructor () {
        this.products = []
        this.id = 0
    }
    
    showItem (id) {
        const prod = this.products.find ((prod) => prod.id == id);
        return prod || {error: "producto no encontrado"};
    }

    showAll () {
        return [...this.products];
    }

    save(prod) {
        const newProd = {...prod, id: ++this.id};
        this.products.push (newProd);
        return newProd;
    }

    update (prod, id) {
        const newProd = {id: Number (id), ...prod};
        const index = this.products.findIndex ((p) => p.id == id );
        if (index !== -1) {
            this.products [index] = newProd;
            return newProd;
        }
    }

    delete (id) {
        if (this.products.find ((prod) => prod.id == id)){
            const deleteId = this.products.find ((prod) => prod.id !== id);
            return deleteId;
        }else{
            console.log ('el id no existe')
        }
    } 
}
