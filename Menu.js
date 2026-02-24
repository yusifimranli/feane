    let menuList = document.getElementById('menuList')

    class Menu{
        constructor (id,img,ad,price){
            this.id = id;
            this.img = img;
            this.title = ad;
            this.price = price
        }
    }

    let AllMenu = [
        new Menu(
            1,
            "https://themewagon.github.io/feane/images/f1.png",
            "Delicious Pizza",
            "$20"
        ),
        new Menu(
            2,
            "https://themewagon.github.io/feane/images/f2.png",
            "Delicious Burger",
            "$15"
        ),
        new Menu(
            3,
            "https://themewagon.github.io/feane/images/f3.png",
            "Delicious Pizza",
            "$17"
        ),
        new Menu(
            4,
            "https://themewagon.github.io/feane/images/f4.png",
            "Delicious Pasta",
            "$18"
        ),
        new Menu(
            5,
            "https://themewagon.github.io/feane/images/f5.png",
            "French Fries",
            "$10"
        ),
        new Menu(
            6,
            "https://themewagon.github.io/feane/images/f7.png",
            "Delicious Pizza",
            "$15"
        ),
        new Menu(
            7,
            "https://themewagon.github.io/feane/images/f6.png",
            "Tasty Burger",
            "$12"
        ),
        new Menu(
            8,
            "https://themewagon.github.io/feane/images/f8.png",
            "Tasty Burger",
            "$14"
        ),
        new Menu(
            9,
            "https://themewagon.github.io/feane/images/f9.png",
            "Delicious Pasta",
            "$10"
        ),
        
    ]


    
    for (const key of AllMenu) {
        let menu = key
        menuList.innerHTML += `
        <div class="bg-[#222831] sm:w-1/4 mt-30 text-white rounded-xl">
            <div class="bg-gray-100 rounded-xl h-60  flex items-center justify-center">
            <img class="w-32 h-32 mx-auto " src="${menu.img}" alt="">
            </div>
            <h1 class="p-4 font-medium text-2xl">${menu.title}</h1>
            <h2 class="px-4 text-[17px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique cumque hic nemo corrupti dolorum.</h2>
            <div class="flex items-center justify-between px-4 text-xl my-6">
            <p>${menu.price}</p>
            <button onclick="addbasket(${menu.id})" class="bg-[#FFBE33] rounded-full text-white w-10 h-10 border-amber-500"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
       
        `
    }


    
