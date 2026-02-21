function openmenu(){
    let menubar = document.getElementById('menubar')
    if(menubar.style.top === '-100%'){
        menubar.style.top = '0'
        menubar.classList.add('openmenu')
    }
    else{
        menubar.style.top = '-100%'
    }
    
}