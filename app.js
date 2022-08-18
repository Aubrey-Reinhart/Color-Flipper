const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//This is how we listen for the button click then execute the function within
btn.addEventListener("click", function () {
    // get random number between 0 - 3 colors 
    //randomNumber will be created from the getRandomNumber function
    const randomNumber = getRandomNumber();
    // we will see what number is called with the getRandomNumber function
    console.log(randomNumber);
    //targeting the background color to change it to the randomNumber generated by getRandomNumber and the color that corrolates with that in the colors array
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}