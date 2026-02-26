

document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower-item');
    flower.addEventListener('click', (e) => {
        const petalCount = 18;
        const petalEmojis = ['🌸', '💮', '🌺', '✨'];
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.innerHTML = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
            const startX = e.clientX;
            const startY = e.clientY;
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
    });


    (function() {
        const modal = document.getElementById("letterModal");
        const letter = document.querySelector(".letter-item");
        const closeBtn = document.querySelector(".close-btn");

        letter.onclick = function() {
            modal.style.display = "block";
            modal.classList.remove("show-out");
            modal.classList.add("show-in");
        }

        function closeModal() {
            modal.classList.remove("show-in");
            modal.classList.add("show-out");
            setTimeout(() => {
                modal.style.display = "none";
            }, 400);
        }

        closeBtn.onclick = closeModal;

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }
    })();
});