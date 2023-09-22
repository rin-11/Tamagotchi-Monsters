
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

// let hunger = 100;
// let energy = 100;
// let power = 0;
let hunger = document.getElementById("hunger").value;
let energy = document.getElementById("energy").value;
let power = document.getElementById("power").value;
// let phases = document.querySelectorAll("#phases").img;
let phase1 = document.getElementById('monster1').src;
let phase2 = document.getElementById('monster2').src;
let phase3 = document.getElementById('monster3').src;
let phase4 = document.getElementById('monster4').src;
// let hungerAlert = false;
// let energyAlert = false;



// DEFINE BUTTONS   
document.getElementById('eatButton').onclick = incrHunger;
document.getElementById('sleepButton').onclick = incrEnergy;


// // MONSTER IMAGES   

const warrior1images = [];
warrior1images.length = 8; 
for(let i = 1; i < warrior1images.length ; i ++){
    warrior1images[i] = new Image();
    warrior1images[i].src = 'assets/Monster Warrior 1/walk0' + i.toString() + '.png';
}
let i = 1;
setInterval(function(){
    i++;
    if( i >= 6){
        i = 1; // start over after last image
    }
    // clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw images 
    context.drawImage(warrior1images[i], 100, 100, 250, 250);},100)


function powerStat(){
    if(hunger >= 50 && energy >= 50 && power < 100){
    power+=5;
    document.getElementById("power").value = power;
    console.log(power)
    // }
    // if(power > 5)
    // clearInterval(monsterPhase1)
    }
}
    function gameovercheck(){
        if(hunger == 0 || energy == 0 && gameOver == true ){
            alert("GAME OVER");
            gameOver= true;
            alert("Let's head back to the home screen so you can give it another shot")
            window.location.href = "/Users/erinkates/Desktop/sei-dahlia/projects/Tamagatchi-Mini-Project-Warrior-Builder/index.html";
        }
        else if(power == 100){
            alert("YOU DID IT");
            alert("Let's head back to the home screen so you can give it another shot and see if you can beat your time!")
            window.location.href = "/Users/erinkates/Desktop/sei-dahlia/projects/Tamagatchi-Mini-Project-Warrior-Builder/index.html";
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

// MONSTER PHASES


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

