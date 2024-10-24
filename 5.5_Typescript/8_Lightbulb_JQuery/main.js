const imageSwitch = document.getElementById("switch");
const lightbulbOn = document.getElementById("lightbulb-on");
const brightness = document.getElementById("bright-intensity");
const rotation = document.getElementById("rotation");
const scale = document.getElementById("scale");
const lightbulb_container = document.getElementById("lightbulb-container");

let global_brightness = 0;
let global_rotation = 0;
let global_scale = 20;


//Main switch
function turnLight() {
    if (imageSwitch.src.match("off")) {
        imageSwitch.src = "./assets/bon.jpg"; 
        lightbulbOn.style.visibility = "visible";
        checkBrightness();
    } else {
        imageSwitch.src = "./assets/boff.jpg"; 
        lightbulbOn.style.visibility = "hidden";
    }
}

//Bright intensity
brightness.addEventListener("input", checkBrightness);

function checkBrightness(){
    global_brightness = brightness.value / 8;

    if (imageSwitch.src.match("on")) {
        lightbulbOn.style.opacity = global_brightness; 
    }
}

//Rotation
rotation.addEventListener("input", function(){
    global_rotation = rotation.value;
    console.log(global_rotation);
    lightbulb_container.style.transform = new DOMMatrix(`rotate(${global_rotation}deg) scale(${global_scale / 20})`);
});

//Scale
scale.addEventListener("input", function(){
    global_scale = scale.value;
    console.log(global_scale);
    lightbulb_container.style.transform = new DOMMatrix(`rotate(${global_rotation}deg) scale(${global_scale / 20})`);
});