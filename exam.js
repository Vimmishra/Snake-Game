//game constants & variables:
let inputDir= {x:0,y:0};
const foodsound = new Audio('gamemusic.mp3')
const gameoversound = new Audio('gamemusic.mp3')
const movesound = new Audio('gamemusic.mp3')
 const musicsound = new Audio('gamemusic.mp3')
let speed = 2;
let score = 0;
lastpainttime= 0;
let snakearr=[
  {x:13,y:15}
]
food = {x:6,y:7};


//game functions :
 function main (currtime) {
  window.requestAnimationFrame(main);
  if((currtime - lastpainttime)/1000 <1/speed){
    return;
  }
lastpainttime= currtime;
gameengine();
 }
 


 function isCollide(sarr) {
  return false;
 }

function gameengine(){
  //part1:updating snake array.
  if(isCollide(snakearr)){
    gameoversound.play();
    musicsound.pause();
    inputDir = {x:0,y:0};
    alert("game Over Press Any Key To Continue");
    snakearr =   {x:13,y:15};
    musicsound.play();
    score = 0;
  }


//if snake have eaten the food ,increment te score an regenrate food.:
if(snakearr[0].y === food.y && snakearr[0].x ===food.x){
  snakearr.unshift({x:snakearr[0].x + inputDir.x , y:snakearr[0].y + inputDir.y  })

  let a = 2;
  let b = 16;
  food = {x: Math.round(a +(b-a) * Math.random()), y: Math.round(a +(b-a) * Math.random())}
}

// moving snake.
for (let i = snakearr.length-2; i >= 0; i--) {
  const element = array[i];
  snakearr[i+1] = {...snakearr[i]};
  
}

snakearr[0].x += inputDir.x;
snakearr[0].y += inputDir.y;




  //part2 : display the snake.
board.innerHTML = "";
snakearr.forEach((e,index)=>{
  snakeelement = document.createElement('div');
  snakeelement.style.gridRowStart = e.y;
  snakeelement.style.gridColumnStart =e.x;

  if(index === 0 ){
    snakeelement.classList.add('head');
  }
  else{
    snakeelement.classList.add('snake');
  }

  board.appendChild(snakeelement);


});

//display food.:

foodelement = document.createElement('div');
foodelement.style.gridRowStart = food.y;
foodelement.style.gridColumnStart =food.x;
foodelement.classList.add('food');
board.appendChild(foodelement);

}




//main logic starts here:
window.requestAnimationFrame(main);
window.addEventListener("keydown",e =>{
  inputDir = {x:0, y:1}  //start the game.
  movesound.play(); //play sound when game starts.
  switch (e.key) {
    case "ArrowUp":
      console.log("arrowup")
      inputDir.x = 0;
      inputDir.x = -1;
       break;

       case "ArrowDown":
      console.log("arrowdown")
      inputDir.x = 0;
      inputDir.x = 1;
       break;

       case "ArrowLeft":
      console.log("arrowleft")
      inputDir.x = -1 ;
      inputDir.x = 0 ;
       break;

       case "ArrowRight":
      console.log("arrowright")
      inputDir.x = 1;
      inputDir.x = 0;
       break;
  
    default:
      break;
  }
})
