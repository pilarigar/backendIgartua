
//realizo la clase usuario
class user {
    constructor (name, lastName, books=[], pets=[]){

        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;

    }

    //métodos
    GetFullName () {
        return `${this.name} ${this.lastName}`
    }

    AddPets (pets) {
        this.pets.push (pets)
    }
    
    CountPets () {
      return this.pets.length
    }

    AddBook (title, author){
        this.books.push ({title: title, author: author})
    }

    GetBooksNames () {
        return this.books.map ((books)=>books.title)
    }

}

//prueba usuario
const user1= new user ( 
    "William",
    "Turner",
    [
    {title:"Fahrenheit 451", author:"Ray Bradbury"},
    {title:"Brave New World", author:"Aldous Huxley"}
    ],
    ["Nina", "Zac", "Flash"]
)

//mostrar
console.log (user1.GetFullName ())
console.log(user1.CountPets ())
console.log(user1.GetBooksNames ())

