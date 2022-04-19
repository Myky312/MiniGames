
// document.querySelector("button").addEventListener("click", handleClick);
//we dont add() at the end because it will make it run immediatly
//if we wanted to run that thing immediatly then we would write function()

//By that way we are allowed to call function when evenListenes listens to
//to the property we have specified
//That is the main difference betweeen these things!
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    }
    );
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
// function handleClick() {


//     alert("Hello");
//     // var audio = new Audio("sounds/tom-1.mp3");
//     // audio.play();
//     // we can do it with anonymous function
// }

// OOP with JavaScript
// function HouseKeeper(yearsOfExperience, name, cleaningRepeitore) {
//     this.name = name;
//     this.yearsOfExperience = yearsOfExperience;
//     this.cleaningRepeitore = cleaningRepeitore;
//     this.clean = function(){
//     alert("Ckeaning is progress...");
//}
// }
// var HouseKeeperk1 = new HouseKeeper(12, "Myktybek", "bedroom");
// console.log(HouseKeeperk1.name);
