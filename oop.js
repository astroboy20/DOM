//object literal 

// const book = {
//     title:'Book 1',
//     author:'John Doe',
//     year:new Date().getFullYear(),
//     getSummary: function(){
//         return `${this.title} was written by ${this.author}`
//     }
// }

// console.log(book.getSummary())



class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
        
    }
    
   getSummary(){
        return `${this.title} was written by ${this.author}` 
    }
}
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author}` 
}
Book.prototype.getSummary =  function(){
    const years = new Date().getFullYear - this.year
    return `${this.title} is ${years} years old`
}
const book1 = new Book('Book onw', 'John Doe','2013' )

console.log(book1  )

