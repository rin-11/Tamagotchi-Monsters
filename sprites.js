let i = 1;
const warrior1images = [];
warrior1images.length = 8; // number of images in sprite pack

for(let i = 1; i < warrior1images.length ; i ++){
    warrior1images[i] = new Image();
    warrior1images[i].src = 'assets/Monster Warrior 1/walk0' + i.toString() + '.png';

setInterval (function(){
    i++;
    if( i >= 8){
        i = 1;}
   // start over after last image
        
    // clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // draw images  (x, y, width, height)
    context.drawImage(warrior1images[i], 300, 200, 200, 250)}, 100)

    }
}
const warrior2images = [];
warrior2images.length = 7; 

const warrior3images = [];
warrior3images.length = 8; 

const warrior4images = [];
warrior4images.length = 6;

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


        
}else if(power >= 25 && power < 50){
    setInterval (function(){
            i++;
            if( i >= 7){
                i = 1;} // start over after last image
            
        // clear the canvas each draw so the image does not drag
            context.clearRect(0, 0, canvas.width, canvas.height);
        
            // draw images  (x, y, width, height)
            context.drawImage(warrior2images[i], 300, 300, 120, 150)}, 100)    
        
} else if(power >= 50 && power < 75){
    setInterval (function(){
            i++;
            if( i >= 8){
                i = 1;} // start over after last image
            
        // clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height)    
    context.drawImage(warrior3images[i], 300, 300, 120, 150)}, 100)


} else if(power >= 75){
    setInterval (function(){
                i++;
                if( i >= 8){
                    i = 1;} // start over after last image
                
            // clear the canvas each draw so the image does not drag
    context.clearRect(0, 0, canvas.width, canvas.height);
            
            // draw images  (x, y, width, height)
    context.drawImage(warrior4images[i], 300, 300, 120, 150)}, 100)}
    }