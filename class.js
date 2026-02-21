let mealList = document.getElementById('mealList')

class Meal {
    constructor (img,ad,faiz){
        this.img = img;
        this.title = ad;
        this.faiz = faiz;

    }
}

let AllMeal = [
    new Meal (
        "https://themewagon.github.io/feane/images/o1.jpg",
        "Tasty Thursday",
        "20% Off"
    ),
    new Meal (
        "https://themewagon.github.io/feane/images/o2.jpg",
        "Pizza Days",
        "15% Off"
    )
];

//  for (let i = 0; i < AllMeal.length; i++) {
//  }

for (const key of AllMeal) {
    let data = key
    mealList.innerHTML += `
        <div class="sm:w-[45%] bg-[#222831] mt-20 rounded-sm text-white text-center mx-auto">
        <div class = "sm:flex items-center px-5">
        <div class="pt-6">
        <img src="${data.img}" alt="" class="mx-auto  w-40 h-40 rounded-full border-4 border-amber-300">
        </div>
        <div>
        <h2 class="text-2xl py-4">${data.title}</h2>
        <h1 class="text-3xl">${data.faiz}</h1>
        <button class="bg-[#FFBE33] p-2 w-36 rounded-3xl my-4">Order-Now</button>
        </div>
        </div>
        </div>
        `
}
