// alert('js is working')

















let popup = document.getElementById('popup')

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

// create canvas and draw elements
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 500;



            
// DEFINE VARIABlES
let decreaseHunger = setInterval(hungerStat, 500);
let decreaseEnergy = setInterval(energyStat, 500);
let increasePower = setInterval(powerStat, 1000);

let decreaseInterval = 10;
let increaseInterval = 10;

let gameOver = false;

let hunger = 100;
let energy = 100;
let power = 0;

// let hungerAlert = false;
// let energyAlert = false;



// DEFINE BUTTONS   
document.getElementById('eatButton').onclick = incrHunger;
document.getElementById('sleepButton').onclick = incrEnergy;

document.getElementById("hunger").value = hunger;
document.getElementById("energy").value = energy;
document.getElementById("power").value = power;

// MONSTER IMAGES   

// // empty image array for warrior monster images
let i = 1;
const warrior1images = [];
warrior1images.length = 8; // number of images in sprite pack
const warrior2images = [];
warrior2images.length = 7; 

const warrior3images = [];
warrior3images.length = 8; 

const warrior4images = [];
warrior4images.length = 6;

// push images into array logic with for loop
for(let i = 1; i < warrior1images.length ; i ++){
    warrior1images[i] = new Image();
    warrior1images[i].src = 'assets/Monster Warrior 1/walk0' + i.toString() + '.png';
}

setInterval (function(monsterPhase1){
    i++;
    if( i >= 6){
        i = 1;}
   // start over after last image

    // clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw images  (x, y, width, height)
    context.drawImage(warrior1images[i], 300, 200, 200, 250)}, 100)






// for(let i = 1; i < warrior2images.length ; i ++){
//     warrior2images[i] = new Image();
//     warrior2images[i].src = 'assets/Monster Warrior 2/fly0' + i.toString() + '.png';
// }
// for(let i = 1; i < warrior3images.length ; i ++){
//     warrior3images[i] = new Image();
//     warrior3images[i].src = 'assets/Monster Warrior 3/idle0' + i.toString() + '.png';
// }
// for(let i = 1; i < warrior4images.length ; i ++){
//     warrior4images[i] = new Image();
//     warrior4images[i].src = 'assets/Monster Warrior 4/walk0' + i.toString() + '.png';
// }

// --------------------------------------------------------------



// WARRIOR PHASES

// function power increase
    function powerStat(){
        if(hunger >= 50 && energy >= 50){
        power++;
        document.getElementById("power").value = power;
        console.log(power)
        }
        if(power > 5)
        clearInterval(monsterPhase1)
    }

    function gameovercheck(){
        if(hunger == 0 || energy == 0){
            alert("GAME OVER");
            gameover= true;

        }
        else{
        }
    }

// ------------------------------------------------------------
// BUTTON FUNCTIONS
function incrHunger(){
    if( hunger <= 99 && hunger != 0){
        hunger += 5;
    }
    else if( hunger == 0){
        hunger += 0;
    }
}

function incrEnergy(){
    if( energy <= 99 && energy != 0){
        energy += 5;
    }
    else if( energy == 0){
       energy+=0;
    }
}


// DECREASE INTERVALS FUNCTIONS && ALERTS

function hungerStat(){
    if(hunger == 0){
        clearInterval(decreaseHunger);
        gameovercheck();
    }
    else{
        hunger-=5;
        document.getElementById("hunger").value = hunger;
    }
}

function energyStat(){
    if(energy == 0){
        clearInterval(decreaseEnergy);
        gameovercheck();
    }
    else{
        energy-=5;
        document.getElementById("energy").value = energy;
    }
}

})


// class Monster {
//     constructor(){


//     }
// }













