const todoİnput=document.querySelector('input');
const todoList=document.querySelector('.todo-list');
const AddBtn=document.querySelector('.button2');
const delButton=document.querySelector('.del');
document.addEventListener('keyup',(event)=>{
    if(event.keyCode==13){
        if(todoİnput.value!==""&&todoİnput.value!==" "){
            event.preventDefault();
            let listElement=document.createElement('div')
            listElement.classList.add('.input-container')
            listElement.innerHTML=todoİnput.value

            todoList.append(listElement)
        }
    }
})
delButton.addEventListener('click',()=>{
    todoİnput.value=''
})

