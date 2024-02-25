let btn__add = document.querySelector('.add')
let container = document.querySelector('div')
let input = document.querySelector('input')
let template = document.querySelector('#element').content

const create__list = () => {
    let clone = template.cloneNode(true)  
    let p = clone.querySelector('.item')
    p.textContent = p
    p.textContent = input.value
    container.append(p)
    input.value = ''
}

btn__add.addEventListener('click', create__list)

