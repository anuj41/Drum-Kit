
function click(){
  var audio= new Audio('sounds/tom-1.mp3')
  audio.play();

}
function makeSound(event){
  if(event.keyCode=="119"){
    var audio= new Audio('sounds/tom-1.mp3')
    audio.play();

  }
  else if(event.keyCode="97"){
    var audio= new Audio('sounds/tom-2.mp3')
    audio.play();

  }
}

document.querySelectorAll(".drum")[0].addEventListener("click",click);
document.addEventListener("keypress", makeSound);



function click1(){
  var audio= new Audio('sounds/tom-2.mp3')
  audio.play();
}
document.querySelectorAll(".drum")[1].addEventListener("click",click1);
