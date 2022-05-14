
var tiles = document.querySelectorAll(".tiles");
tiles = Array.from(tiles);
console.log(tiles);
var inGameMusic1= new Audio("Bane_of_Ambitions_(getmp3.pro).mp3");
var inGameMusic2= new Audio("Drops_of_Time_(getmp3.pro).mp3");
var inGameMusic3= new Audio("Genshin_Impact_22_Theme_-_Ruus_So_(getmp3.pro).mp3");
var inGameMusic4= new Audio("Inazuma.mp3");
var inGameMusic5= new Audio("Sink_into_Oblivion_Genshin_Impact_(getmp3.pro).mp3");
var inGameMusic6= new Audio("Thunderings_of_the_Merciless_(getmp3.pro).mp3");
var inGameMusic7= new Audio("Undersea_Encounters_(getmp3.pro).mp3");
var inGameMusic8= new Audio("The_Almighty_Violet_Thunder_(getmp3.pro).mp3");
var inGameMusic9= new Audio("No_Turning_Back_(getmp3.pro).mp3");
var clickSound = new Audio("RXQV97C-dj-record-scratch-2.mp3");
var gameOver = new Audio("Candy_Crush_Soda_Saga_OST_-_Game_Ov_(getmp3.pro).mp3")
var combinations= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var ms=true;
function music(){
    
    switch (getRndInteger(1,10))
    {
        case 1: inGameMusic1.play()
            
            break;
        case 2: inGameMusic2.play()
            
            break;
        case 3: inGameMusic3.play()
            
            break;
        case 4: inGameMusic4.play()
            
            break;
        case 5: inGameMusic5.play()
            
            break;
        case 6: inGameMusic6.play()
            
            break;
        case 7: inGameMusic8.play()
            
            break;
        case 8: inGameMusic7.play()
            
            break;
       
        
        default:  inGameMusic9.play()
            break;
    }
}



for(i=0;i<tiles.length;i++){
    tiles[i].addEventListener('click',clicked);
}





var player = "X"
// document.getElementsByName("pc").checked.value() After jquery i can do this
function clicked(){
if(ms){
    music();
    ms=false
}
clickSound.play()

if(this.innerText==""){
    
    this.innerText = player;
    if( player=="X"){
    player="0"
    }else{
        player="X"
    }
    winner()
}

}

function winner(){

    for(j=0;j<combinations.length;j++){

        if(tiles[(combinations[j])[0]].innerHTML==tiles[(combinations[j])[1]].innerHTML && tiles[(combinations[j])[1]].innerHTML == tiles[(combinations[j])[2]].innerHTML && tiles[(combinations[j])[0]].innerHTML!==""){
         
            reset.value=tiles[(combinations[j])[0]].innerHTML + " " + "won"+" "+"Reset?"

            gameOver.play()
        };

    }
        

    
    

 }

 var reset = document.getElementById("rst");
 reset.addEventListener('click',rst);
 function rst(){
    for(i=0;i<tiles.length;i++){
        tiles[i].innerHTML=""
    }
    reset.value="Reset"
 }
