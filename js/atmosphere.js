const heartEl = document.getElementById('anniversaryHeart');

heartEl.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('flying-heart');
        heart.textContent = ['💖','💝','💗','💕','✨'][Math.floor(Math.random()*5)];
        document.body.appendChild(heart);

        const rect = heartEl.getBoundingClientRect();
        heart.style.left = `${rect.left + rect.width/2}px`;
        heart.style.top = `${rect.top + rect.height/2}px`;

        const angle = Math.random() * Math.PI * 2;
        const radius = 120 + Math.random() * 50;
        heart.style.setProperty('--x', `${Math.cos(angle)*radius}px`);
        heart.style.setProperty('--y', `${Math.sin(angle)*radius}px`);

        heart.addEventListener('animationend', () => heart.remove());
    }

    // Tiny pop effect on click
    heartEl.style.transform = 'scale(1.4)';
    setTimeout(() => heartEl.style.transform = 'scale(1.3)', 150); // return to hover scale
});