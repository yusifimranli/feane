let cardList = document.getElementById('cardList')
let sebet = []

function opencart() {
    let modal = document.getElementById('modal')
    modal.style.display === 'none' ? modal.style.display = 'block' : modal.style.display = 'none'
}

function addbasket(id) {
    sebet.push(id)
    showsebet()
} 

function showsebet(){
    cardList.innerHTML = "";
    cardList.innerHTML = sebet.map((id,item) => {
        const menu2 = AllMenu.find(m=> m.id === id)

        return `
        <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
                  <div class="col-span-2 flex items-center gap-6">
                    <div class="w-20 h-20 shrink-0">
                      <img src='${menu2.img}' class="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 class="text-[15px] font-semibold text-slate-900">${menu2.title}</h3>
                      
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <h4 class="text-[15px] font-semibold text-slate-900">${menu2.price}</h4>
                    <svg onclick = "removeBasket(${item})" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-red-500 ml-auto" viewBox="0 0 320.591 320.591">
                      <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                      <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
                    </svg>
                  </div>
                </div> `
    })
    .join("")
}

function removeBasket(item){
    let modal = document.getElementById('modal') 
    sebet.splice(item,1)
    sebet.length == 0 ? modal.style.display = 'none' :modal.style.display = 'block'
    showsebet()
}

let fixdesktop = document.getElementById('fixdesktop')
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        fixdesktop.classList.add('fixedheader')}
        else{
            fixdesktop.classList.remove('fixedheader')
        }
    }
)

