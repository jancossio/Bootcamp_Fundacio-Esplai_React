const all_emoji_array = ["😀","🍕","👸","🎅","👷‍♂️","🎈","🎉","✨","🎃","🎄","🎁","🎪","🦺","⚾","🧸","🎹","🤔","😗","🫤"];

let emoji_container = document.getElementById("emoji-array");
let simple_array = [];

let insert_number = document.getElementById("insert-selector");
let remove_number = document.getElementById("remove-selector");

//-------------------------------------------------------------

function getRandomEmoji(){
    return all_emoji_array[Math.floor(Math.random() * all_emoji_array.length)];
}

function updatePageArray(){
    emoji_container.textContent = simple_array.join(', ');
}

function push(){
    simple_array.push(getRandomEmoji());
    updatePageArray();
}

function unshift(){
    simple_array.unshift(getRandomEmoji());
    updatePageArray();
}

function insert(){
    if(insert_number.value <= simple_array.length){
        simple_array.splice(insert_number.value, 0, getRandomEmoji());
        updatePageArray();
    }else{
        alert("Careful! The index introduced is larger than the array!");
    }
}

function pop(){
    simple_array.pop();
    updatePageArray();
}

function shift(){
    simple_array.shift();
    updatePageArray();
}

function remove(){
    if(remove_number.value <= simple_array.length){
        simple_array.splice(remove_number.value, 1);
        updatePageArray();
    }else{
        alert("Careful! The index introduced is larger than the array!");
    }
}