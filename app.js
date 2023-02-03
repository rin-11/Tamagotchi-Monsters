// alert('js is working')


// create canvas and draw elements
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d')

canvas.width = 1000;
canvas.height = 500;


window.onload = function() {


// DEFINE VARIABlES
let decreaseIntervalHunger = setInterval(hungerBarDecr, 1200);
let decreaseIntervalEnergy = setInterval(energyBarDecr, 1400);
let decreaseInterval = 10;
let increaseInterval = 10;
let gameOver = false;
let hunger = 100;
let energy = 100;
let power = 10;
let hungerAlert = false;
let energyAlert = false;
let i = 1;

// DEFINE BUTTONS   
document.getElementById('eatButton').onclick = btnHunger;
document.getElementById('sleepButton').onclick = btnEnergy;
document.getElementById('trainButton').onclick = btnPower;
document.getElementById("power").value = power

// DECREASE INTERVALS FUNCTIONS && ALERTS

function hungerBarDecr(){
    if(hunger <= 20 && hungerAlert === false){
        alert("The monster is getting hungry!");
        hungerAlert = true;
    }
    else{
        hunger -= decreaseInterval;
        document.getElementById("hunger").value = hunger;
    }
}
function energyBarDecr(){
    if(energy <= 0 && energyAlert === false){
        alert("Even monsters need their rest!");
        energyAlert = true;
    }
    else{
        energy -= decreaseInterval;
        document.getElementById("energy").value = energy;
    }
}

function warriorDies () {
    if(hunger === 0 || energy === 0){
        alert("GAME OVER")
    }
}

// ------------------------------------------------------------
// BUTTON FUNCTIONS
function btnHunger(){
    if(hunger <= 99){
        hunger += increaseInterval
        return hunger
    }
};

function btnEnergy(){
    if(energy <= 99){
        energy += increaseInterval
        return energy
    }
};

function btnPower(){
    if(hunger >= 50 && energy >= 50){
        document.getElementById("power").value = power;
        power += increaseInterval
    }
};
// --------------------------------------------------------------

// MONSTER IMAGES   
// // empty image array for warrior monster images
const warrior1images = [];
warrior1images.length = 8; // number of images in sprite pack

const warrior2images = [];
warrior2images.length = 7; 

const warrior3images = [];
warrior3images.length = 8; 

const warrior4images = [];
warrior4images.length = 6;

// // push images into array logic with for loop
for(let i = 1; i < warrior1images.length ; i ++){
    warrior1images[i] = new Image();
    warrior1images[i].src = 'assets/Monster Warrior 1/walk0' + i.toString() + '.png';
}
for(let i = 1; i < warrior2images.length ; i ++){
    warrior2images[i] = new Image();
    warrior2images[i].src = 'assets/Monster Warrior 2/fly0' + i.toString() + '.png';
}
for(let i = 1; i < warrior3images.length ; i ++){
    warrior3images[i] = new Image();
    warrior3images[i].src = 'assets/Monster Warrior 3/idle0' + i.toString() + '.png';
}
for(let i = 1; i < warrior4images.length ; i ++){
    warrior4images[i] = new Image();
    warrior4images[i].src = 'assets/Monster Warrior 4/walk0' + i.toString() + '.png';
}

setInterval (function(){
    i++;
    if( i >= 8){
        i = 1; // start over after last image
    }
// clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw images  (x, y, width, height)
    context.drawImage(warrior1images[i], 300, 300, 120, 150); }, 100)}


// // declare i outside of for loop
// let i = 1;
// setInterval(function(){
//     i++;
//     if( i >= 8){
//         i = 1; // start over after last image
//     }
//     // clear the canvas each draw so the image does not drag
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // draw images  (x, y, width, height)
//     context.drawImage(warrior1images[i], 300, 300, 120, 150); }, 100) //draw image every 100 milliseconds


// context.drawImage(warrior2images[i], 400, 300, 150, 200); // (x, y, width, height)
// context.drawImage(warrior3images[i], 500, 300, 300, 300); // (x, y, width, height)
// context.drawImage(warrior4images[i], 700, 300, 400, 400); 
