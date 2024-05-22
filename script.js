function showFireworks(event) {
    event.preventDefault();
    const fireworks = document.getElementById('fireworks');
    fireworks.style.display = 'flex';
    setTimeout(() => {
        fireworks.style.display = 'none';
        window.location.href = event.target.href; // Redirect after showing fireworks
    }, 3000); // Display fireworks for 3 seconds
}
