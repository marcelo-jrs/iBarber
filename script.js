const search = document.querySelector('#filtro');
const container = document.querySelector('.container');
const subcontainer = document.querySelectorAll('.subcontainer');

const hide = (subcontainers, inputValue) => {
    subcontainers
    .filter(subcontainer => !subcontainer.id.includes(inputValue))
    .forEach(subcontainer => {
        subcontainer.classList.add('hidden')
    })
}

const show = (subcontainers, inputValue) => {
    subcontainers
    .filter(subcontainer => subcontainer.id.includes(inputValue))
    .forEach(subcontainer => {
        subcontainer.classList.remove('hidden')
    })
}

search.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase();
    const subcontainers = Array.from(container.children);
    
    hide(subcontainers, inputValue)
    
    show(subcontainers, inputValue)
    
})

