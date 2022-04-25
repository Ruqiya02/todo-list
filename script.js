const inputContainer=document.querySelector('.input-container')
const input=document.querySelector('input')
const todoList=document.querySelector('.listClass')
document.addEventListener('keyup',(event)=>{
    if(event.keyCode==13){
        if(input.value!==''&&input.value!==' '){
            event.preventDefault()
           let newElement=document.createElement('li')
           newElement.classList.add('item')
           newElement.innerHTML=input.value
           todoList.append(newElement)
           let removebttn=document.createElement('button')
            removebttn.classList.add('delete2')
            newElement.append(removebttn)
            input.value='';
            inputContainer.style.display='none'
            todoList.style.borderBottom='0.1em solid #C4C4C4'
            todoList.style.borderRadius='0.9vw'
    }
})
const addBttn=document.querySelector('.button2')
addBttn.addEventListener('click',()=>{
    inputContainer.style.display=""
    todoList.style.borderBottom='none'
    todoList.style.borderRadius="0.9vw 0.9vw 0 0"
})
const removebttn1=document.querySelector(".del")
removebttn1.addEventListener('click',()=>{
    input.value=""
})



