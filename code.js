btn__add = document.querySelector('.add')
container = document.querySelector('div')
input = document.querySelector('input')

const create__list = () => {
    let p = document.createElement('p') // заменить на template
    p.classList.add('item')
    p.textContent = input.value
    container.appendChild(p)
}

btn__add.addEventListener('click', create__list)

