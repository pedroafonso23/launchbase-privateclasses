const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')

// Adiciona ou remove a classe 'active' dos links
link1.addEventListener('click', function () {
    link1.classList.add('active')
    link2.classList.remove('active')
})

link2.addEventListener('click', function () {
    link2.classList.add('active')
    link1.classList.remove('active')
})

