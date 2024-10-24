let audio1 = new Audio("./assets/sounds/Darbuka_06_76_SP.mp3");
let audio2 = new Audio("./assets/sounds/Darbuka_105_76_SP.mp3");
let audio3 = new Audio("./assets/sounds/Darbuka_118_76_SP.mp3");
let audio4 = new Audio("./assets/sounds/Darbuka_130_76_SP.mp33");
let audio5 = new Audio("./assets/sounds/Darbuka_159_76_SP.mp3");
let audio6 = new Audio("./assets/sounds/Darbuka_18_76_SP.mp3");
let audio7 = new Audio("./assets/sounds/Darbuka_42_76_SP.mp3");
let audio8 = new Audio("./assets/sounds/Darbuka_48_76_SP.mp3");
let audio9 = new Audio("./assets/sounds/Darbuka_66_76_SP.mp3");

let audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9];

function playAudio(audioNumber){
    audioArray[audioNumber].play();
}
