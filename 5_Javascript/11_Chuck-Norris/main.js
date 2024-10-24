const phrase_input = document.getElementById("phrase-input");

function fetchPhrase(){
    fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()).then(json => (phrase_input.innerHTML = json.value));
}

fetchPhrase();