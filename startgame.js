


let popup = document.getElementById('popup')

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}



window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 500;






// MONSTER IMAGES   

// empty image array for warrior
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


// declare i outside of for loop
let i = 1;
setInterval(function(){
    i++;
    if( i >= 6){
        i = 1; // start over after last image
    }
    // clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw images 
    context.drawImage(warrior1images[i], 100, 100, 250, 250); // (x, y, width, height)
    context.drawImage(warrior2images[i], 350, 120, 200, 200); // (x, y, width, height)
    context.drawImage(warrior3images[i], 550, 40, 400, 400); // (x, y, width, height)
    context.drawImage(warrior4images[i], 850, 50, 400, 400); // (x, y, width, height)
}, 100) //draw image every 100 milliseconds



})



































// let popup = document.getElementById('popup')

// function openPopup(){
//     popup.classList.add("open-popup");
// }
// popup.addEventListener('click', openPopup);

// function closePopup(){
//     popup.classList.remove("open-popup");
// }
// popup.addEventListener('click', closePopup);

// // Defining Variables
// let startButton= document.querySelector('#start')
// let incrHunger= document.querySelector('#eatButton')
// let incrEnergy= document.querySelector('#sleepButton')

// let hunger= document.getElementById("hunger").value
// let energy= document.getElementById("energy").value
// let power= document.getElementById("power").value

// // let hungerStat = document.querySelector('.HungerBar')
// // let energyStat = document.querySelector('.EnergyBar')
// // let powerStat = document.querySelector('.PowerBar')


// // let decreaseHunger = setInterval(document.querySelector('.HungerBar'), 500);
// // let decreaseEnergy = setInterval(document.querySelector('.EnergyBar'), 500);
// // let increasePower = setInterval(document.querySelector('.PowerBar'), 1000);

// // let hunger = 100;
// // let energy = 100;
// // let power = 0;

// // create event listener to wait for JS to load
// window.addEventListener('load', function(){
//     //canvas set up -- canvas stores the reference to the canvas element
//     const canvas = this.document.getElementById('canvas');
//     // built in object that allows animation/draw function
//     const context = canvas.getContext('2d'); // 2d is a context type
//     canvas.width = 1500;
//     canvas.height = 500;


// class Monster {
//     constructor(){
//         this.hunger = document.getElementById('hunger')
//         this.energy = document.getElementById('energy')
//         this.power = document.getElementById('power')
//         this.i=1;
//         this.warrior1images = [];
//         this.warrior1images.length = 8 
        
//     }

//     hungerBar(){
//         return this.hunger.value
//     }
//     energyBar(){
//         return this.energy.value
//     }
//     powerBar(){
//         return this.power.value
//     }

//     feedMethod(){
//         this.hunger.value += 5
//     }
//     sleepMethod(){
//         this.energy.value += 5
//     }

//     monsterPhase(){
        
//         if(this.power.innerHTML < 25)
//         setInterval (function(monsterPhase1){
//             i++;
//             if( i >= 6){
//                 i = 1;}
//            // start over after last image
        
//             // clear the canvas each draw so the image does not drag
//             context.clearRect(0, 0, canvas.width, canvas.height);
        
//             // draw images  (x, y, width, height)
//             context.drawImage(warrior1images[i], 300, 200, 200, 250)}, 100)
          
//     }

//     gameOver(){
//         if ((this.hunger === 0) || (this.energy === 0))
//         alert('GAME OVER')
//     }


// }

// function startGame(){
//     const newMonster = new Monster()
    

// incrHunger.addEventListener('click', function(){
//     newMonster.feedMethod()})

// incrEnergy.addEventListener('click', function(){
//     newMonster.sleepMethod()})

 


// let interval = setInterval(function(){
//     newMonster.decreaseHH()
//     newMonster.increasePower()
//     newMonster.monsterPhase()
//     newMonster.gameOver()

// }, 3000);

// }  






// })