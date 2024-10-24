const eatProgress = document.querySelector(".progress-bar"); // Get the progress bar element
const eatBtns = document.getElementsByClassName("eat-btn"); // Correct: no dot before "eat-btn"

// Initial percentage value
let progress = 50;
let interval;

// Function to update the progress bar width and text
function updateProgressBar() {
    eatProgress.style.width = progress + '%';
    document.querySelector(".progress-number").textContent = progress + '%'; // Update the percentage display

    // Check if the progress reaches 0%
    if (progress <= 0) {
        clearInterval(interval); // Stop the countdown
        alert("You Lose!");
    }
}

// Function to start decreasing the progress bar every second
function startProgressDecrease() {
    interval = setInterval(() => {
        progress -= 1; // Decrease progress by 1% each second
        if (progress <= 0) {
            progress = 0; // Ensure the progress doesn't go below 0
        }
        updateProgressBar();
    }, 1000); // Decrease every second
}

// Loop over each button and add an event listener to increase progress by 20%
Array.from(eatBtns).forEach(btn => {
    btn.addEventListener('click', function() {
        progress = Math.min(progress + 20, 100); // Increase by 20%, max is 100%
        updateProgressBar();
    });
});

// Start decreasing the progress bar when the page loads
startProgressDecrease();