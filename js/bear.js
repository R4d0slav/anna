document.addEventListener('DOMContentLoaded', () => {
    const eyes = document.querySelectorAll('.eye');
    const bear = document.querySelector('.teddy-container article');

    // Blink eyes randomly
    function blink() {
        eyes.forEach(eye => eye.style.height = '0%');
        setTimeout(() => {
            eyes.forEach(eye => eye.style.height = '100%');
        }, 200);
        setTimeout(blink, Math.random() * 3000 + 3000);
    }
    blink();

    // Gentle bounce
    function bounceBear() {
        bear.style.transform = 'translate(-50%, -2%)';
        setTimeout(() => bear.style.transform = 'translate(-50%, 0)', 500);
        setTimeout(bounceBear, 3000);
    }
    bounceBear();
});