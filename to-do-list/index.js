const listDOM = document.querySelector('#list')
const taskDOM = document.querySelector('#task')
const toastDOM = document.querySelector('#liveToastBtn')


function newElement(){
    const liDOM = document.createElement('li')  // adding an item function
    let realTaskDOM = taskDOM.value
    if(realTaskDOM.trim() != ''){
        listDOM.appendChild(liDOM)
        liDOM.innerHTML = realTaskDOM.trim()
        liDOM.addEventListener('click', done)
        createButtonElement()
        $('.success').toast('show')  // bootstrap toast
    }
    else{
        $('.error').toast('show')
    }
    
}

function done(){
    if(this.classList.contains('checked')){
        this.classList.remove('checked')
        this.classList.add('checked::before')  // marking as checked
    }
    else{
        this.classList.add('checked')
    }
    
}

document.querySelectorAll('ul>li').forEach(item => item.addEventListener('click', done))


function deleteRow(){
    this.parentElement.remove()
}

function createButtonElement(){
    let Lis = document.querySelectorAll('li')
    for(let i = 0; i <Lis.length; i++ ){
        let span = document.createElement('span')
        Lis[i].appendChild(span)
        let button = document.createElement('button')
        button.textContent = '\u00D7'          // for adding a remove button
        Lis[i].appendChild(button)
        button.classList.add('close', 'close:hover')
        button.addEventListener('click', deleteRow)
    }
}

createButtonElement()
