const todos = [

    {
        id:1,
        text:'see the dentist',
        completed:false
    },
    {
        id:2,
        text:'take out the trash',
        completed:true
    },
    {
        id:3,
        text:'sleep with the dentist',
        completed:true
    },
]

for (let todo of todos){
    console.log(todo.text)
}

todos.forEach(function(todo){
    console.log(todo.text)
})

todos.forEach((todo)=>(
   console.log(todo.text)
))

const todoText = todos.map((todo)=>{
    return todo.text
})

const todoFilter = todos.filter((todo)=>{
    return todo.completed ===true
}).map((todo)=>(
    todo.text
))

console.log(todoFilter)

const x= 11
const color = x >10 ? 'red' : 'blue'

switch (color) {
    case 'red':
        console.log('color is red')
        break;

    case 'blue':
        console.log('color is blue')
        break;

    default:
        console.log('color is not red or blue')
        break;
}


function Person(firstName,lastName,dob){
    this.firstName =firstName
    this.lastName =lastName
    this.dob= new Date(dob)
    this.getFullNmae = function (){
        return `${this.first} ${this.lastName}`
    }
}
class Person {
    constructor(firstName, lastName,dob){
        this.firstName =firstName
        this.lastName =lastName
    }
    getFullNmae(){
        return 
    }

}

const person1=new Person ('john', 'doe', '4-5-2023')
console.log(person1.dob.getFullYear())
console.log(person1.getFullNmae( ))


//object literal 

const book = {
    title:'Book 1',
    author:'John Doe',
    year:new Date().getFullYear()
}