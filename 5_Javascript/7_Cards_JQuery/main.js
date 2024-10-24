const card_containers = document.querySelectorAll(".card-container");

// All card containers are queried and Event listeners are added for when the mouse enters and leaves
card_containers.forEach(container => {
    const card = container.querySelector(".card");

    container.addEventListener('mouseenter', () => {
        card.classList.add('flipCard');
    });

    container.addEventListener('mouseleave', () => {
        card.classList.remove('flipCard');
    });
});