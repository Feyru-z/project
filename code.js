let btn__add = document.querySelector('.add')
let container = document.querySelector('div')
let todo = document.querySelector('ul')
let input = document.querySelector('input')
let template = document.querySelector('#element').content


const create__list = () => {
    let clone = template.cloneNode(true)  
    let li = clone.querySelector('.item')
    let btn__rem = clone.querySelector('.rem')
    li.textContent = input.value
    todo.append(clone)
    input.value = ''
    localST('todo', li.textContent)
}

const remove__LS = (n, item) => {
    localStorage.removeItem(n, item)
}

const remove__list = (item) => {
    item.remove()
}

btn__add.addEventListener('click', create__list)
btn__rem.addEventListener('click', (e) => {
    console.log(e.currentTarget)
})

function localST(n, item) {
    localStorage.setItem(n, JSON.stringify(item));
}