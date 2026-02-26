document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower-item');
    const letter = document.querySelector('.letter-item');
    const modal = document.getElementById("letterModal");
    const closeBtn = document.querySelector(".close-btn");
    const bear = document.querySelector('.bear-image');
    const heartEl = document.getElementById('anniversaryHeart');
    const musicControl = document.querySelector('.music-control');

    if (!flower || !letter || !modal || !closeBtn || !bear || !heartEl || !musicControl) return;

    // --- Hover support ---
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (hasHover) {
        flower.addEventListener('mouseenter', () => flower.classList.add('hover'));
        flower.addEventListener('mouseleave', () => flower.classList.remove('hover'));
        letter.addEventListener('mouseenter', () => letter.classList.add('hover'));
        letter.addEventListener('mouseleave', () => letter.classList.remove('hover'));
    }

    // --- Remove hover class on touch devices ---
    function removeHoverAndBlur(element) {
        element.classList.remove('hover');
        element.blur();
    }
    ['touchstart','touchend','touchcancel'].forEach(ev => {
        flower.addEventListener(ev, () => removeHoverAndBlur(flower));
        letter.addEventListener(ev, () => removeHoverAndBlur(letter));
    });

    // --- Flower petals effect (click) ---
    function triggerFlowerPetals() {
        removeHoverAndBlur(flower);
        const petalCount = 18;
        const petalEmojis = ['🌸', '💮', '🌺', '✨'];
        const rect = flower.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
            petal.style.left = startX + 'px';
            petal.style.top = startY + 'px';
            petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
            document.body.appendChild(petal);

            const destinationX = (Math.random() - 0.5) * 400;
            const destinationY = Math.random() * 400 + 200;
            const rotation = Math.random() * 720 - 360;

            const animation = petal.animate([
                { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
                { transform: `translate(${destinationX}px,${destinationY}px) rotate(${rotation}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25,0.46,0.45,0.94)',
                fill: 'forwards'
            });
            animation.onfinish = () => petal.remove();
        }
    }

    flower.addEventListener('click', triggerFlowerPetals);

    // --- Heart effect (click) ---
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
    });

    // --- Letter modal ---
    letter.addEventListener('click', () => {
        removeHoverAndBlur(letter);
        modal.style.display = "block";
        modal.classList.remove("show-out");
        modal.classList.add("show-in");
    });

    function closeModal() {
        modal.classList.remove("show-in");
        modal.classList.add("show-out");
        setTimeout(() => { modal.style.display = "none"; }, 400);
    }
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => { if(event.target == modal) closeModal(); });

    // --- Bear triple-click toggleable easter egg ---
    let clickCount = 0;
    let clickTimer;
    let easterEggActive = false;
    let interval;

    bear.addEventListener('click', (e) => {
        clickCount++;
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 600);

        if (clickCount === 3) {
            clickCount = 0;

            if (!easterEggActive) {
                // Start easter egg
                easterEggActive = true;

                // Trigger music once at start
                musicControl.click();

                interval = setInterval(() => {
                    // Call the existing click handlers
                    heartEl.click();
                    flower.click();
                }, 200); // every 200ms

            } else {
                // Stop easter egg immediately
                easterEggActive = false;
                clearInterval(interval);
                musicControl.click(); // toggle music off
            }
        }
    });
});