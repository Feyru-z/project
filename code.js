let btn__add = document.querySelector('.add')
let container = document.querySelector('div')
let todo = document.querySelector('ul')
let input = document.querySelector('input')
let template = document.querySelector('#element').content
let btn__rem = document.querySelector('.rem')

const create__list = () => {
    let clone = template.cloneNode(true)  
    let li = clone.querySelector('.item')
    li.textContent = li
    li.textContent = input.value
    todo.append(li)
    input.value = ''
    localST('', li)
}

const remove__list = (n, item) => {
    localStorage.removeItem(n, item)
}

btn__add.addEventListener('click', create__list)
btn__rem.addEventListener('click', remove__list)

function localST(n, item) {
    localStorage.setItem(n, JSON.stringify(item));
}