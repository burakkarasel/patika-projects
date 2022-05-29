const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Creation of buttons

const btnContainer = document.querySelector(".btn-container")

const allBtn = document.createElement("button")

allBtn.innerHTML = "All"

const krBtn = document.createElement("button")

krBtn.innerHTML = "Korea"

const jpBtn = document.createElement("button")

jpBtn.innerHTML = "Japan"

const chBtn = document.createElement("button")

chBtn.innerHTML = "China"

const btnArray = [allBtn, krBtn, jpBtn, chBtn]

btnArray.forEach(item => {
  btnContainer.append(item)
  item.classList.add("btn-item")
})

// addition of food

const menuSection = document.querySelector(".section-center")

menu.forEach(item => {
  let menuItem =
   `
  <div class="menu-items ${item.category} col-5">
    <img src="${item.img}" alt="food" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4>${item.price}</h4>
      </div>
      <p>${item.desc}</p>
    </div>
  </div>
  `

  menuSection.innerHTML += menuItem
})

// button functions

// all

const wholeMenu = document.querySelectorAll(".menu-items")

const showAll = function(){
   wholeMenu.forEach(item => {
     item.style.display = "flex"
   })
}

allBtn.addEventListener("click", showAll)

// korean

const showKr = function(){
  wholeMenu.forEach(item => {
    if(!item.classList.contains("Korea")){
      item.style.display = "none"
    }else{
      item.style.display = "flex"
    }
  })
}

krBtn.addEventListener("click", showKr)

// japan

const showJp = function(){
  wholeMenu.forEach(item => {
    if(!item.classList.contains("Japan")){
      item.style.display = "none"
    }else{
      item.style.display = "flex"
    }
  })
}

jpBtn.addEventListener("click", showJp)

// china

const showCh = function(){
  wholeMenu.forEach(item => {
    if(!item.classList.contains("China")){
      item.style.display = "none"
    }else{
      item.style.display = "flex"
    }
  })
}

chBtn.addEventListener("click", showCh)