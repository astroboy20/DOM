var form =  document.getElementById('my-form')
var listItems = document.getElementById('items')
var filter = document.getElementById('filter')
const addItem =(e)=>{
    e.preventDefault()
    //new item
    var newItem = document.getElementById('item').value
    var li =  document.createElement('li')
    li.className = 'flex'
    li.appendChild(document.createTextNode(newItem))

    //delete button
    var delButton = document.createElement('button')
    delButton.className = 'delbutton'
    delButton.appendChild(document.createTextNode('X'))

    li.appendChild(delButton)
    listItems.appendChild(li)
    

    console.log(newItem, `this is the button element ${delButton}`)
}


const remove =(e)=>{
    if(e.target.classList.contains('delbutton')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement
            listItems.removeChild(li)
        }
    }
}

const filterItems = (e)=>{
    var text = e.target.value.toLowerCase()
    var items = listItems.getElementsByClassName('flex')
    Array.from(items).forEach((item)=>{
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex'
        }else{
            item.style.display ='none'
        }
    })
}

form.addEventListener('submit',addItem)
listItems.addEventListener('click', remove)
filter.addEventListener('keyup', filterItems)