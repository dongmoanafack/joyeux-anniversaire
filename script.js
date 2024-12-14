// Ajoute des flocons de neige animés
function addSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowflakesContainer.appendChild(snowflake);
    }
}

addSnowflakes();

// Ajoute des événements pour les décorations de Noël
document.addEventListener('DOMContentLoaded', () => {
    const tree = document.querySelector('.christmas-tree');
    const snowman = document.querySelector('.snowman');
    const gifts = document.querySelector('.gifts');

    tree.addEventListener('mouseover', () => {
        tree.style.transform = 'translateX(-50%) scale(1.1)';
    });

    tree.addEventListener('mouseout', () => {
        tree.style.transform = 'translateX(-50%)';
    });

    snowman.addEventListener('mouseover', () => {
        snowman.style.transform = 'translateY(-10px)';
    });

    snowman.addEventListener('mouseout', () => {
        snowman.style.transform = 'translateY(0)';
    });

    gifts.addEventListener('mouseover', () => {
        gifts.style.transform = 'scale(1.1)';
    });

    gifts.addEventListener('mouseout', () => {
        gifts.style.transform = 'scale(1)';
    });
});
