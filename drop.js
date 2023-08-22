var blockSize = 70;
var rows = 7;
var cols = 5;
var number = 2;
var boxX = blockSize * 2;
var boxY = blockSize * 0;
var speed = 20 ;
var velocityX = 0;
var velocityY = 0;
var updateSpeed;
var clickedCol =2;
var borderWidth ;
var fboxX;
var fboxY;
var returningBoxHitTop = false;
var alerts =0;
var f =0;
var gameEnd= false;
var column = [ [] ,[] ,[] ,[] ,[]];
var score =0;
var maxscore =0;



window.onload = function () {
    board = document.getElementById('board');
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    //var startTime = Date.now();

    board.addEventListener('click',handleCanvasClick);


 updateSpeed=setInterval(update, 1000 /speed);
};


function update() {
  var scoreid= document.getElementById('score');
  scoreid.textContent="Score   :"+score;
  var maxscoreid=document.getElementById('maxscore')
    maxscoreid.textContent="Top Score   :"+maxscore;

  
        var alertid = document.getElementById('life');
        
        if(score > maxscore){
          maxscore = score;
        }
    
    for ( f ; f < alerts; f++) {
      alertid.innerText += '🔴';
    
    }
  if (alerts == 4 || column[clickedCol].length ==6) {
    gameEnd =true;
  velocityY = 0;
  const customAlert = document.getElementById("customAlert");
  const alertText = document.getElementById("alertText");
  const closeAlert = document.getElementById("restart");

  alertText.textContent = "Game Over";
  customAlert.style.display = "block";

  closeAlert.addEventListener("click", () => {
    restart();
    customAlert.style.display = "none";
    alertid.innerText = "";
  });
}

    box();
    fixBox();
if (velocityY == -1 && boxY <=0) {
    returningBoxHitTop = true;

    //board.classList.add("shadow");
  

             }else {
   // board.classList.remove("shadow");
  }
if (returningBoxHitTop) {
      alerts += 1;
      returningBoxHitTop = false; 
       board.classList.add("shadow");

      
      randomNumber();
      boxX = blockSize * clickedCol;
      boxY = blockSize * 0;
      velocityY = 1;
      clearInterval(updateSpeed);
      speed = 20;
      updateSpeed = setInterval(update, 1000 / speed);
    }
    
    boxX += velocityX;
    boxY += velocityY;
        
for( var c =0; c<= 4; c++ ){
      
  for(var v=0 ; v <5; v++){
        column[v]= filterZero(v);
      }
  
      if( c == clickedCol){
        
      var e=6 - column[c].length;
     if( boxY >= e*blockSize){
       w=column[c].length;
         if (column[c].length >= 0 && !gameEnd){
           if (column[c][column[c].length-1] === number) {
             e= e+1;
             
             
             number = column[c][column[c].length-1] *2;
               score += number;
             column[c][column[c].length-1] = 0;
             
               velocityY =-1;
               console.log(boxY);
            
             
             


             
           }else{
            column[c].push(number);
            randomNumber();
            boxX = blockSize * clickedCol;
            boxY = blockSize * 0;
            velocityY =1;
            clearInterval(updateSpeed);
            speed = 20;
            updateSpeed = setInterval(update, 1000 / speed);
           }
         }
         
         else{
           column[c].push(number);
           //score += number;
            randomNumber();
            boxX = blockSize * clickedCol;
            boxY = blockSize * 0;
            velocityY =1;
            clearInterval(updateSpeed);
            speed = 20;
            updateSpeed = setInterval(update, 1000 / speed);
         }
     
        
     }
      }
    }
    
 
}
    
    
function restart(){
  gameEnd = false;
 number = 2;
 boxX = blockSize * 2;
 boxY = blockSize * 0;
 speed = 20 ;
 velocityX = 0;
 velocityY = 0;
 clickedCol =3;
 returningBoxHitTop = false;
 alerts =0;
 f =0;
 score=0;
 column = [ [] ,[] ,[] ,[] ,[]];
}

function randomNumber() {
    var randomIndex = Math.floor(Math.random() * 6);
    var randomNumber = [2, 4, 8, 16, 32, 64][randomIndex];
    number = randomNumber;
    
}
function box(){
  
context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
    
    context.fillStyle = "black";
    context.fillRect(0, 0, blockSize*7, blockSize);
    
    if (!gameEnd){
      context.strokeStyle='darkslategrey'
    }
    
    setInterval(blinkStroke, 500);
context.lineWidth = 4;
context.beginPath();
context.moveTo(0, blockSize);
context.lineTo(blockSize * 7, blockSize);
context.stroke();

    
    if(number == 2){
      context.fillStyle = "deeppink";
    context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-2.5);
    }else if(number == 4){
      context.fillStyle = "deepskyblue";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    } else if(number == 8){
      context.fillStyle = "orange";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if(number == 16){
      context.fillStyle = "tomato";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if(number == 32){
      context.fillStyle = "dodgerblue";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 64) {
      context.fillStyle = "mediumvioletred";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 128) {
      context.fillStyle = "peru";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 256) {
      context.fillStyle = "royalblue";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 512) {
      context.fillStyle = "oldlace";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 1028) {
      context.fillStyle = "";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 2048) {
      context.fillStyle = "rebeccapurple";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 4096) {
      context.fillStyle = "lightseagreen";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }else if (number == 8192) {
      context.fillStyle = "red";
      context.fillRect(boxX+2.5, boxY, blockSize-5, blockSize-5);
    }
    
    
    

    context.fillStyle = "white"; // Text color
    context.font = "bold 35px Arial"; // Font settings
    context.textAlign = "center"; // Text alignment
    context.textBaseline = "middle"; // Text baseline
    context.fillText(number.toString(), boxX + blockSize / 2, boxY + blockSize / 2);

    //context.strokeStyle = "black";
  //  context.lineWidth = 5;
   // context.strokeRect(boxX, boxY, blockSize, blockSize);
}

function handleCanvasClick(event) {
    var rect = board.getBoundingClientRect();
    var clickX = event.clientX - rect.left;
    var clickY = event.clientY - rect.top;

    // Calculate the row and column indices of the clicked block
    //var clickedRow = Math.floor(clickY / blockSize);
     if(!gameEnd){
       clickedCol = Math.floor(clickX / blockSize);
    boxX = blockSize * clickedCol;
    ;
     }
    
    clearInterval(updateSpeed);
    speed=100;
 updateSpeed=setInterval(update, 100 /speed);
velocityY = 15;

    console.log( " Column " + clickedCol);
}
function filterZero(j){
        return column[j].filter(num => num !=0);
    
    }

function blinkStroke() {
      if (gameEnd) {
        context.strokeStyle = (context.strokeStyle === "#81749b") ? "red" : "#81749b";
      }
    }

function fixBox(){
 
  for (var col =0; col <= 4 ; col++){
    for(var row=0 , z=6; row <= column[col].length-1 && z
     >= 0; row++ , z--){
      
      fboxX = blockSize * col;
      fboxY = blockSize * z;
        var num= column[col][row];
      boxcan(num , fboxX ,fboxY);
    }
    
    
  }
  
function boxcan(num , x, y){
  


    if (num == 2) {
      context.fillStyle = "deeppink";
      context.fillRect(x, y, blockSize, blockSize);
      
    } else if (num == 4) {
      context.fillStyle = "deepskyblue";
      context.fillRect(x, y, blockSize, blockSize);
    } else if (num == 8) {
      context.fillStyle = "orange";
      context.fillRect(x, y, blockSize, blockSize);
    } else if (num == 16) {
      context.fillStyle = "tomato";
      context.fillRect(x, y, blockSize, blockSize);
    }else if(num == 32){
      context.fillStyle = "dodgerblue";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 64) {
      context.fillStyle = "mediumvioletred";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 128) {
      context.fillStyle = "peru";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 256) {
      context.fillStyle = "royalblue";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 512) {
      context.fillStyle = "oldlace";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 1028) {
      context.fillStyle = "";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 2048) {
      context.fillStyle = "rebeccapurple";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 4096) {
      context.fillStyle = "lightseagreen";
      context.fillRect(x, y, blockSize, blockSize);
    }else if (num == 8192) {
      context.fillStyle = "red";
      context.fillRect(x, y, blockSize, blockSize);
    }

    context.fillStyle = "white"; // Text color
    context.font = "bold 35px Arial"; // Font settings
    
    context.textAlign = "center"; // Text alignment
    context.textBaseline = "middle"; // Text baseline
    context.fillText(num.toString(), x + blockSize / 2, y + blockSize / 2);

    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.strokeRect(x, y, blockSize, blockSize);
}

}


                              
