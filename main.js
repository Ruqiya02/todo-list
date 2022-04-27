const inputContainer = document.querySelector('.input-container')
const input = document.querySelector('input')
const todoList = document.querySelector('.listClass')
const listElements = document.querySelectorAll(".item");
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        if (input.value !== '' && input.value !== ' ') {
            event.preventDefault()
            let newElement = document.createElement('li')
            newElement.classList.add('item')
            newElement.innerHTML = input.value
            newElement.setAttribute('draggable', true);
            todoList.append(newElement)
            let removebttn = document.createElement('button')
            removebttn.classList.add('delete2')
            newElement.append(removebttn)
            input.value = '';
            inputContainer.style.display = 'none'
            todoList.style.borderBottom = '0.1em solid #C4C4C4'
            todoList.style.borderRadius = '1vw'
            todoList.style.display = "block";
            todoList.scrollTop=todoList.scrollHeight

            deleteX()

        }
    }
})
const addBttn = document.querySelector('.button2')
addBttn.addEventListener('click', () => {
    inputContainer.style.display = "flex"
    inputContainer.style.borderTop = 'none';
    inputContainer.style.borderRadius = "0 0 1vw 1vw"
    todoList.style.borderBottom = 'none'
    todoList.style.borderRadius = "1vw 1vw 0 0"
})
const removebttn1 = document.querySelector(".del")
removebttn1.addEventListener('click', () => {
    input.value = ""
})

function deleteX() {
    const deleteBtn = document.querySelectorAll('.delete2');
    deleteBtn.forEach(item => {
        item.addEventListener('click', forRemove);
    });
}

function forRemove() {
    this.parentNode.remove(this.parentNode);

    if (todoList.childElementCount == 0) {
        todoList.style.display = "none"
        inputContainer.style.display = "flex";
        inputContainer.style.borderRadius = "1vw"
        inputContainer.style.border = "0.1em solid #c4c4c4"
    }
}

const drag = document.querySelector('.wrapper')
new Sortable(drag, {
    animation: 250
})

function forSortingUp() {
    let arrUp = [];
    const items = document.querySelectorAll('.item')
    items.forEach(item => {
        arrUp.push(item.innerHTML);
    })
    arrUp.sort()
    sortbttn1.style.display = 'none'
    sortbttn2.style.display = 'block'
    items.forEach((item, index) => {
        item.innerHTML = arrUp[index]
    })
    deleteX();
}

function forSortingDown() {
    let arrDown = []
    const items = document.querySelectorAll('.item')
    items.forEach(item => {
        arrDown.push(item.innerHTML)
        console.log(arrDown)
    })
    sortbttn2.style.display = 'none'
    sortbttn1.style.display = 'block'
    arrDown.sort().reverse()
    items.forEach((item, index) => {
        item.innerHTML = arrDown[index]
    })
    deleteX();

}

const sortbttn1 = document.querySelector('.sort1')
const sortbttn2 = document.querySelector('.sort2')
sortbttn1.addEventListener('click', forSortingUp)
sortbttn2.addEventListener('click', forSortingDown)
sortbttn1.addEventListener('mouseover', (event) => {
    event.target.setAttribute('src', 'photo/sortimgDown2.svg');
})
sortbttn1.addEventListener('mouseout', (event) => {
    event.target.setAttribute('src', 'photo/sortimgDown.svg');
});
sortbttn2.addEventListener('mouseover', (event) => {
    event.target.setAttribute('src', 'photo/sortimgUp2.svg')
})
sortbttn2.addEventListener('mouseout', (event) => {
    event.target.setAttribute('src', 'photo/sortimgUp.svg')
})