

function escrevendoLetra(){
    
    function efeitoDigita(elemento) {
        const arrText = elemento.innerHTML.split('')
        elemento.innerHTML = ''
        arrText.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i)
        })
    }
    
    const titulo = document.querySelector('.digitando')
    efeitoDigita(titulo)
}

escrevendoLetra()

function MenuMobol(){
    const ativaMenu = document.querySelector('.fa-bars')
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}


function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experiencia-content div')
    const liExperiencia = document.querySelectorAll('.experiencia-content ul li')
    const divEducacao = document.querySelectorAll('.education-content div')
    const liEducacao = document.querySelectorAll('.education-content ul li')

    divExperiencia[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')

    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo')
        })
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo')
        })
        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
    }

    function slideShow2(index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo')
        })
        liEducacao.forEach((botao)=>{
            botao.classList.remove('ativo')
        })
        divEducacao[index].classList.add('ativo')
        liEducacao[index].classList.add('ativo')
    }


    liExperiencia.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        })
    })

    liEducacao.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })

}

sobreMim()


const listaAll = document.querySelector('.projetos-armazenamento ul li')
const buttonGeral = document.querySelector('.projetos-modelos ul li')
const buttonAll = document.querySelector('.projetos-modelos .all')

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo')
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo')
    })
    if(buttom == 'design') {
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }
    if(buttom == 'graphic') {
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
    }
    if(buttom == 'website') {
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
    }
    if(buttom == 'all') {
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{   
        let currentButton = e.target
        if(currentButton.classList.contains('all')){
            showLista(listaAll)
        }
        if(currentButton.classList.contains('design')){
            showLista(listaAll, "design")
        }
        if(currentButton.classList.contains('graphic')){
            showLista(listaAll, "graphic")
        }
        if(currentButton.classList.contains('website')){
            showLista(listaAll, "website")
        }
        if(currentButton.classList.contains('all')){
            showLista(listaAll, "all")
        }
    })
})