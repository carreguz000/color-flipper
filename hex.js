const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let hexColor = "#";
    //starting point i = 0 - until i = 6 nad i++ increment by 1
    for(let i = 0; i < 6; i++){
        hexColor += hex[randomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log(hexColor);
   })

function randomNumber (){
    return Math.floor(Math.random() * hex.length);
}