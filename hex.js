const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function () {
    // set up a loop to pick hex color at random   
    let hexColor = '#';
    //set up a loop that runs 6 times for the hex value because it has 6 values
    for(let i = 0; i < 6; i++){
        //+= generates the string for the hex. if you just have the = value will just equal the last thing
        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
    }
    //targets the text content and makes it the hexColor
    color.textContent = hexColor;
    //targets the background color and makes it the hexColor
    document.body.style.backgroundColor = hexColor; 
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}