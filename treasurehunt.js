var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var chest = numbers[Math.floor(Math.random() * numbers.length)]
var bomb = numbers[Math.floor(Math.random() * numbers.length)]

if(chest === bomb) {
  bomb = numbers[Math.floor(Math.random() * number.length)]
}


const treasure = (numbers) => {
  if(numbers === chest) {
    document.getElementById(chest).innerHTML = "&#x1f308"
    alert("You found the treasure!")
    location.reload()
  } else if(numbers === bomb) {
    document.getElementById(numbers).innerHTML = "&#x2620"
    alert("KA-BOOOOM")
    location.reload()
  } else if(numbers != chest) {
    document.getElementById(numbers).innerHTML = "&#x1f332"
    alert("Hmm, nothing there")
  }
}


//let counterDisplayElem = document.querySelector(".counter-display");
//let counterPlusElem = document.querySelector(".counter-plus");
//let count = 0;

//updateDisplay()

//function updateDisplay(){
//  counterDisplayElem.innerHTML = count;
//})

//counterPlusElem.addEventListener("click",(treasure)) => {
  //counter++;
  //updateDisplay();
//})
//
