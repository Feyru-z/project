let btn__add = document.querySelector('.add')
let container = document.querySelector('div')
let todo = document.querySelector('ul')
let input = document.querySelector('input')
let template = document.querySelector('#element').content

const create__list = () => {
    let clone = template.cloneNode(true)  
    let li = clone.querySelector('.item')
    li.textContent = li
    li.textContent = input.value
    todo.append(li)
    input.value = ''
}

btn__add.addEventListener('click', create__list)

