
const fs = require('fs')

class Container {

  constructor (fileRoute) {
    this.fileRoute = fileRoute
  }

  async #readArchive (){ // es privado porque se usa internamente
    try{
      const content = await fs.promises.readFile(this.fileRoute, 'utf-8')
      const parseContent = JSON.parse (content)
      return parseContent
    }catch (error){
      console.log (error)
    }
  }

    async save (obj) { //guardar un objeto en el arichivo y le asigna un id
      const fileContent = await this.#readArchive()

      if (fileContent.length !== 0) {
        console.log (fileContent)
        await fs.promises.writeFile (this.fileRoute, JSON.stringify ([...fileContent, {...obj, id:fileContent[fileContent.length - 1].id + 1}], null, 2), 'utf-8')
      }else{
        await fs.promises.writeFile (this.fileRoute, JSON.stringify ([{...obj, id: 1}]), 'utf-8')
      }
    }
    
    async getById(id){ // busca por id y devuelve el objeto encontrado
      const fileContent = await this.#readArchive()
      let item = fileContent.filter (obj => obj.id === id)

      if (fileContent.filter (obj => obj.id === id)) {
        console.log (item)
      }else{
        console.log ('el id no existe')
      }

    }

    async getAll(){ // devuelve un array con los objetos presentes en el archivo
        const fileContent =  await this.#readArchive()
        console.log(fileContent)
    }

    async deleteById (id) { //borrar por id
      const fileContent = await this.#readArchive()
      
      if (fileContent.filter (obj => obj.id === id)){
        const deleteId = fileContent.filter (obj => obj.id !== id)
        await fs.promises.writeFile (this.fileRoute, JSON.stringify (deleteId), 'utf-8')
      
      }else{
        console.log ('el id no existe')
      }
    }

    async deleteAll () { //borrar todo
      const fileContent = await this.#readArchive()
      await fs.promises.writeFile (this.fileRoute, JSON.stringify ([]), 'utf-8')

  }


}

const container = new Container ('./items.txt')

//container.save ({name:'producto', price:100})
//container.getAll ()
//container.getById(3)
//container.deleteById (2)
container.deleteAll()