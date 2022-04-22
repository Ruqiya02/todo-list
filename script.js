const input=document.querySelector('input');
const list=document.querySelector('ul')
const button=document.querySelector('.buttons')
button.addEventListener('keyup',(event)=>{
    event.preventDefault();
    if(event.keyCode===13 && input.value!=='' && input.value!==' '){
        let listElement=document.createElement('li')
        listElement.innerText=input.value
        list.appendChild(listElement)
        console.log(listElement)
    }
})

