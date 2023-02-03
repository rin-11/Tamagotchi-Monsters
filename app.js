// alert('js is working')



// let popup = document.getElementById('popup')

// function openPopup(){
//     popup.classList.add("open-popup");
// }
// function closePopup(){
//     popup.classList.remove("open-popup");
// }

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
let phases = document.querySelectorAll("#phases").img;
// let phase1 = document.getElementById('monster1').img;
// let phase2 = document.getElementById('monster2').img;
// let phase3 = document.getElementById('monster3').img;
// let phase4 = document.getElementById('monster4').img;
// let hungerAlert = false;
// let energyAlert = false;



// DEFINE BUTTONS   
document.getElementById('eatButton').onclick = incrHunger;
document.getElementById('sleepButton').onclick = incrEnergy;

// document.getElementById("hunger").value = hunger;
// document.getElementById("energy").value = energy;
// document.getElementById("power").value = power;

// // MONSTER IMAGES   

function monsterPhases(power){
    if(power < 25){
        phase1[0].children[0].style.display = "block"
        phase1[0].children[1].style.display = "none"
        phase1[0].children[2].style.display = "none"
        phase1[0].children[3].style.display = "none"
    } else if(power >= 25 && power < 50){
        phase1[0].children[0].style.display = "none"
        phase1[0].children[1].style.display = "none"
        phase1[0].children[2].style.display = "block"
        phase1[0].children[3].style.display = "none"
    }else if(power >= 50 && power < 75){
        phase1[0].children[0].style.display = "none"
        phase1[0].children[1].style.display = "none"
        phase1[0].children[2].style.display = "block"
        phase1[0].children[3].style.display = "none"
    } else {
        phase1[0].children[0].style.display = "none"
        phase1[0].children[1].style.display = "none"
        phase1[0].children[2].style.display = "none"
        phase1[0].children[3].style.display = "block"
    }
    console.log(monsterPhases)
}

// // // empty image array for warrior monster images
// let i = 1;
// const warrior1images = [];
// warrior1images.length = 8; // number of images in sprite pack
// const warrior2images = [];
// warrior2images.length = 7; 

// const warrior3images = [];
// warrior3images.length = 8; 

// const warrior4images = [];
// warrior4images.length = 6;

// // push images into array logic with for loop
// for(let i = 1; i < warrior1images.length ; i ++){
//     warrior1images[i] = new Image();
//     warrior1images[i].src = 'assets/Monster Warrior 1/walk0' + i.toString() + '.png';
// }

// setInterval (function(monsterPhase1){
//     i++;
//     if( i >= 6){
//         i = 1;}
//    // start over after last image

//     // clear the canvas each draw so the image does not drag
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // draw images  (x, y, width, height)
//     context.drawImage(warrior1images[i], 300, 200, 200, 250)}, 100)






// // for(let i = 1; i < warrior2images.length ; i ++){
// //     warrior2images[i] = new Image();
// //     warrior2images[i].src = 'assets/Monster Warrior 2/fly0' + i.toString() + '.png';
// // }
// // for(let i = 1; i < warrior3images.length ; i ++){
// //     warrior3images[i] = new Image();
// //     warrior3images[i].src = 'assets/Monster Warrior 3/idle0' + i.toString() + '.png';
// // }
// // for(let i = 1; i < warrior4images.length ; i ++){
// //     warrior4images[i] = new Image();
// //     warrior4images[i].src = 'assets/Monster Warrior 4/walk0' + i.toString() + '.png';
// // }

// // --------------------------------------------------------------



// WARRIOR PHASES

// function power increase
    function powerStat(){
        if(hunger >= 50 && energy >= 50){
        power++;
        document.getElementById("power").value = power;
        console.log(power)
        }
    }


    function gameovercheck(){
        if(hunger == 0 || energy == 0 && gameOver == true ){
            alert("GAME OVER");
            gameOver= true;
            alert("Let's head back to the home screen so you can give it another shot")
            window.location.href = "/Users/erinkates/Desktop/sei-dahlia/projects/Tamagatchi-Mini-Project-Warrior-Builder/startpage.html";
        }
        else if(power == 100){
            alert("YOU DID IT");
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


// class Monster {
//     constructor(){


//     }
// }



















// // let incrHunger= document.querySelector('#eatButton')
// // let incrEnergy= document.querySelector('#sleepButton')
    
// let hunger= document.getElementById("hunger").value
// let energy= document.getElementById("energy").value
// let power= document.getElementById("power").value
 
// document.getElementById('eatButton').onclick = incrHunger;
// document.getElementById('sleepButton').onclick = incrEnergy;


// // document.getElementById("hunger").value = hunger;
// // document.getElementById("energy").value = energy;
// // document.getElementById("power").value = power;
  
            
// // DEFINE VARIABlES
 
// let decreaseHunger = setInterval(hungerStat, 500);
// let decreaseEnergy = setInterval(energyStat, 500);
// let increasePower = setInterval(powerStat, 1000);
    

// let gameOver = false;
// let playGame = false;

// // let hunger = 100;
// // let energy = 100;
// // let power = 0;

// // let hungerAlert = false;
// // let energyAlert = false;
// // let start =  document.getElementById('start')
// //   start.addEventListener('click', playGame=true)

// //   function startGame(){



// // DEFINE BUTTONS   
// // document.getElementById('eatButton').onclick = incrHunger;
// // document.getElementById('sleepButton').onclick = incrEnergy;


// // document.getElementById("hunger").value = hunger;
// // document.getElementById("energy").value = energy;
// // document.getElementById("power").value = power;

// // MONSTER IMAGES   

// // // empty image array for warrior monster images
// let i = 1;
// const warrior1images = [];;
// warrior1images.length = 8 // number of images in sprite pack
// const warrior2images = [];
// warrior2images.length = 7; 

// const warrior3images = [];
// warrior3images.length = 8; 

// const warrior4images = [];
// warrior4images.length = 6;

// // push images into array logic with for loop
// for(let i = 1; i < warrior1images.length ; i ++){
//     warrior1images[i] = new Image();
//     warrior1images[i].src = 'assets/Monster Warrior 1/walk0' + i.toString() + '.png';
// }

// setInterval (function(monsterPhase1){
//     i++;
//     if( i >= 6){
//         i = 1;}
//    // start over after last image

//     // clear the canvas each draw so the image does not drag
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // draw images  (x, y, width, height)
//     context.drawImage(warrior1images[i], 300, 200, 200, 250)}, 100)






// // for(let i = 1; i < warrior2images.length ; i ++){
// //     warrior2images[i] = new Image();
// //     warrior2images[i].src = 'assets/Monster Warrior 2/fly0' + i.toString() + '.png';
// // }
// // for(let i = 1; i < warrior3images.length ; i ++){
// //     warrior3images[i] = new Image();
// //     warrior3images[i].src = 'assets/Monster Warrior 3/idle0' + i.toString() + '.png';
// // }
// // for(let i = 1; i < warrior4images.length ; i ++){
// //     warrior4images[i] = new Image();
// //     warrior4images[i].src = 'assets/Monster Warrior 4/walk0' + i.toString() + '.png';
// // }

// // --------------------------------------------------------------



// // WARRIOR PHASES

// // function power increase
//     function powerStat(){
//         if(hunger >= 50 && energy >= 50 && playGame === true){
//         power++;
//         document.getElementById("power").value = power;
//         console.log(power)
//         }
//         if(power > 5)
//         clearInterval(monsterPhase1)
//     }

//     function gameovercheck(){
//         if(hunger == 0 || energy == 0){
//             alert("GAME OVER");
//             gameOver= true;

//         }
//         else{
//         }
//     }

// // ------------------------------------------------------------
// // BUTTON FUNCTIONS
// function incrHunger(){
//     if( hunger <= 99 && hunger != 0 && playGame === true){
//         hunger += 5;
//     }
//     else if( hunger == 0){
//         hunger += 0;
//     }
// }

// function incrEnergy(){
//     if( energy <= 99 && energy != 0 && playGame === true){
//         energy += 5;
//     }
//     else if( energy == 0){
//        energy+=0;
//     }
// }


// // DECREASE INTERVALS FUNCTIONS && ALERTS

// function hungerStat(){
//     if(hunger == 0){
//         clearInterval(decreaseHunger);
//         gameovercheck();
//     }
//     else{
//         hunger-=5;
//         document.getElementById("hunger").value = hunger;
//     }
// }

// function energyStat(){
//     if(energy == 0){
//         clearInterval(decreaseEnergy);
//         gameovercheck();
//     }
//     else{
//         energy-=5;
//         document.getElementById("energy").value = energy;
//     }
// }

// }, 3000)


// // class Monster {
// //     constructor(){


// //     }
// // }

















// // 
// // let decreaseHunger = setInterval(hungerStat, 500);
// //     // let decreaseEnergy = setInterval(energyStat, 500);
// //     // let increasePower = setInterval(powerStat, 1000);


// //     // button pressing will be stored in input handler
// //     // class Metrics {
// //     //     constructor(game){
// //     //         this.game = game;
// //     //         this.hunger= document.getElementById("hunger")
// //     //         this.energy= document.getElementById("energy")
// //     //         this.power= document.getElementById("power")
// //     //     }
// //     //         hungerValue(){
// //     //             return this.hunger.value
// //     //         }
//     //         energyValue(){
//     //             return this.hunger.value
//     //         }
//     //         powerValue(){
//     //             return this.hunger.value
//     //         }
//     // }

//     // animation to sprite sheet will be stored in player class
//     // class Monster {
//     //     constructor(game){
//     //         this.game = game;
//     //         this.x = 40
//     //         this.y = 100;
//     //         this.speedX = 1;
//     //     }
//     //     update(){
//     //         this.draw.x += this.speedX;
//     //     }
//     //     draw(){

//     //     }
//     // }
   
//     // store background images in layer class
//     class Layer {
//         constructor(game, image, speedModifier){
//             this.game = game;
//             this. image = image;
//             this.speedModifier = speedModifier;
//             this.width = 1700;
//             this.height = 500;
//             this.x = 0;
//             this.y = 0;
//         }
//         update(){
//             if(this.x <= -this.width) this.x=0;
//             else this.x -= this.speedModifier;
//         }
//         draw(context){
//             context.drawImage(this.image, this.x, this.y, this.width, this.height);
//     }
// } 
//     // animated parallex
//     class Background {
//         constructor(game){
//             this.game = game;
//             this.image1 = document.getElementById('layer1');
//             this.image2 = document.getElementById('layer2');
//             this.image3 = document.getElementById('layer3');
//             this.image4 = document.getElementById('layer4');
//             this.layer1 = new Layer (this.game, this.image1, 0.2);
//             this.layer2 = new Layer (this.game, this.image2, 0.4);
//             this.layer3 = new Layer (this.game, this.image3, 0.6);
//             this.layer4 = new Layer (this.game, this.image4, 0.3);
//             this.layers = [this.layer1, this.layer2, this.layer3, this.layer4];
//         }
//         update(){
//             this.layers.forEach(layer => layer.update());
//         }
//         draw(context){
//             this.layers.forEach(layer => layer.draw(context))
//         }
//     }
    
//     // metrics/timer
//     // class UI{
//     //     constructor(game){
//     //         this.game = game;
//     //         this.fontSize = 25;
//     //         this.fontFamily = 'Kontemporary';

//     //     }
//     //     draw(context){
//     //         context.fillStyle = this.color;
//     //         context.font = this.fontSize + 'px' + this.fontFamily;
//     //         context.fillText('Hunger: ' + this.game.hunger, 20, 40);
//     //         context.fillText('Energy: ' + this.game.energy, 20, 100)
//     //     }
//     // }

//     // all logic will be passed through game class
//     class Game {
//         constructor(width, height){
//             this.width = width;
//             this.height = height;
//             this.hunger = 100;
//             this.energy = 100;
//             this.power = 0;
//             // this.monster = new Monster(this);
//             // this.metrics = new Metrics(this);
//             // this.ui = new UI (this);
//             this.layers = new Layer(this);
//             this.background = new Background(this);
//         }
        
//         update(){
//             this.layers.update();
//             this.background.update();
//             }

//         draw(context){
//             // this.monster.draw(context);
//             // this.ui.draw = draw(context);
//             this.layers.draw(context);
//             this.background.draw(context);
//          }

//     }

//     // trigger game to begin
//     const game = new Game(canvas.width, canvas.height);


//     //animation loop

//         // clear all canvas drawings between frames so images do not drag
//         context.clearRect(0, 0, canvas.width, canvas.height)
//         game.update();
//         game.draw(canvas);
//         requestAnimationFrame(animate);
//             // tells the browser to call function to animate function 60 frames per second
//             function animate(){
//         }
    
//     animate();

// });



















