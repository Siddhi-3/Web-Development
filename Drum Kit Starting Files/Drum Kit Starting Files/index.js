// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I go clicked!");
// }      OR
//button press
for(var i=0; i<26;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
var buttonInnerHTML =this.innerHTML;
      makeSound(buttonInnerHTML) ;
        buttonAnimation(buttonInnerHTML);
    });


    // key press
document.addEventListener("keypress", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case"a":
        var crash = new Audio("sounds/crash.mp3");
         crash.play();  
        break;

        case"b":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();  
       break;

       case"c":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  
       break;

       case"d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();  
       break;

       case"e":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();  
       break;

       case"f":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();  
       break;

       case"g":
        var crash = new Audio("sounds/crash.mp3");
         crash.play();  
        break;

        case"h":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();  
       break;

       case"i":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  
       break;

       case"j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();  
       break;

       case"k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();  
       break;

       case"l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();  
       break;

       case"m":
        var crash = new Audio("sounds/crash.mp3");
         crash.play();  
        break;

        case"n":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();  
       break;

       case"o":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  
       break;

       case"p":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();  
       break;

       case"q":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();  
       break;

       case"r":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();  
       break;

       case"s":
        var crash = new Audio("sounds/crash.mp3");
         crash.play();  
        break;

        case"t":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();  
       break;

       case"u":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  
       break;

       case"v":
        var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();  
       break;

       case"w":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();  
       break;

       case"x":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();  
       break;

       case"y":
        var crash = new Audio("sounds/crash.mp3");
         crash.play();  
        break;

        case"z":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();  
       break;

      default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

}
// for(var i=0; i<document.querySelectorAll(".drum").length; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I go clicked!");
//     });

// }


