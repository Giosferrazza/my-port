const movingImage = document.getElementById('moving-image');

let posX = 50; // Initial X position in percentage

document.addEventListener('keydown', (event) => {
    // Move the image based on arrow keys
    if (event.key === 'ArrowLeft') {
        posX -= 2; // Move 5% to the left
    } else if (event.key === 'ArrowRight') {
        posX += 2; // Move 5% to the right
    }
    
    // Update the image position
    movingImage.style.left = posX + '%';
});


