






// -----------------------



fetch("https://639caf3c16d1763ab1516c20.mockapi.io/products")
.then((res)=>{
return res.json()
})
.then((acturalData)=>{
    fetchedData = acturalData;
    displayData(acturalData)
})
let AUDIO2 = document.getElementById("AUDIO2");
let filter = document.getElementById("filter");

let fetchedData = []
filter.addEventListener("change",()=>{
   let filtered = fetchedData.filter((element)=>{
     if(element.brand === filter.value){
        return true;
     }else {
        return false;
     }
   })
   displayData(filtered)
})



function displayData(data){
    AUDIO2.innerHTML = null;
    data.forEach(element => {

        let card = document.createElement("div");
        card.className = "card";

        let cardImg = document.createElement("div");
        cardImg.className = "cardImg";

        let image = document.createElement("img");
        image.setAttribute("src",element.image)
        
        let name = document.createElement("h3");
        name.innerText = element.name;

        let description = document.createElement("p");
        description.className = "description"
        description.innerText = element.description;

        let price = document.createElement("p");
        price.className = "price"
        price.innerText =  element.price;

        let Add = document.createElement("button");
        Add.innerText = "Add To Card";
        Add.className = "Add"

        Add.addEventListener("click",()=>{
            let AddData = JSON.parse(localStorage.getItem("buy"));
            if(AddData === null) AddData = [];

            let IsAllready = false;
            for(let i=0 ; i<AddData.length;i++){
                if(AddData[i].id === element.id){
                    IsAllready = true;
                    break;
                }
            };
            if( IsAllready === true){
                swal("Already in Favourites!", "Add Something else!", "warning")
            }else{
                AddData.push(element);
                localStorage.setItem("buy",JSON.stringify(AddData));
                swal("Successfully Added to Favourite!", "See More!", "success")
            }
        })

        cardImg.append(image)
        card.append(cardImg,name,description,price,Add)
        AUDIO2.append(card)
    });

}

let img=document.getElementById("animation")

setInterval(()=>{
    if( img.style.display=="none"){
        img.style.display="block"
        img.style.transition="0.3s"
    }
    else{
        img.style.display="none"
        img.style.transition="0.3s"
    }
},3000)


window.onscroll = function() {myFunction()}

var navbar = document.getElementById("top-nav");
var sticky = navbar.offsetTop;
function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}
