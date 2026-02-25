// main.js - fully corrected for cute animations

// Function to check password
function checkPassword() {
    const passwordInput = document.getElementById('password');
    const container = document.querySelector('.container');
    const error = document.getElementById('error');
    const button = document.getElementById('openBtn');

    const correctPassword = '26.01.2026'; // your special date

    if(passwordInput.value === correctPassword) {
        // Correct password animations
        error.style.display = 'none';
        passwordInput.disabled = true;
        button.disabled = true;
        button.textContent = 'Yay! Opening for you... 💕';
        container.classList.add('happy-bounce', 'blush', 'sparkle');

        // Create multiple floating hearts
        for(let i = 0; i < 20; i++){
            setTimeout(createCuteHeart, i * 100);
        }

        // Redirect to home page after a short delay
        setTimeout(() => {
            window.location.href = 'pages/home.html';
        }, 1500);

    } else {
        // Wrong password feedback
        container.classList.add('cute-shake');
        error.style.display = 'block';
        passwordInput.style.borderColor = '#ffb6c1';
        createSadHeart();

        // Reset shake animation after it's done
        setTimeout(() => {
            container.classList.remove('cute-shake');
        }, 400);

        // Fun placeholder for wrong password
        passwordInput.placeholder = "Oops! Try again 🌸";
        setTimeout(() => {
            passwordInput.placeholder = "dd.mm.yyyy";
        }, 1200);
    }
}

// Create cute floating hearts (for success only)
function createCuteHeart() {
    const heart = document.createElement('div');
    const hearts = ['❤️','🧡','💛','💚','💙','💜','💖','💗','💓','💕'];
    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
    heart.style.position = 'absolute';
    heart.style.left = Math.random()*100+'%';
    heart.style.top = Math.random()*100+'%';
    heart.style.fontSize = (Math.random()*30 + 20) + 'px';
    heart.style.animation = 'cutePop ' + (Math.random()*1 + 0.5) + 's ease-out forwards';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.filter = 'drop-shadow(0 0 5px pink)';
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 1000);
}

// Create sad heart for wrong password
function createSadHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💔';
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.fontSize = '50px';
    heart.style.transform = 'translate(-50%, -50%)';
    heart.style.animation = 'sadFloat 1s ease-out forwards';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 1000);
}

// Allow Enter key to trigger password check
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const button = document.getElementById('openBtn');

    // Press Enter to submit
    passwordInput.addEventListener('keypress', function(e){
        if(e.key === 'Enter') {
            checkPassword();
        }
    });

    // Remove error styling when typing
    passwordInput.addEventListener('input', function(){
        this.style.borderColor = '#ffb6c1';
        this.style.backgroundColor = '#fff0f5';
        document.getElementById('error').style.display = 'none';
        // Removed hearts here → hearts now only show on success
    });

    // Cute focus/blur animation
    passwordInput.addEventListener('focus', function(){
        this.style.transform = 'scale(1.02)';
    });
    passwordInput.addEventListener('blur', function(){
        this.style.transform = 'scale(1)';
    });

    // Button click triggers password check
    button.addEventListener('click', checkPassword);
});

// Optional: floating hearts for home page (home.html only)
function createHomeHeart() {
    if(window.location.href.includes('home.html')) {
        const heart = document.createElement('div');
        const hearts = ['❤️','💕','💖','💗'];
        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random()*100+'%';
        heart.style.bottom = '0';
        heart.style.fontSize = Math.random()*20 + 10 + 'px';
        heart.style.opacity = '0.5';
        heart.style.animation = 'cuteFloat ' + (Math.random()*3 + 4) + 's linear forwards';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '0';
        document.body.appendChild(heart);

        setTimeout(() => { heart.remove(); }, 10000);
    }
}

// Keep generating hearts on home page
setInterval(createHomeHeart, 500);