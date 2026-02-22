// Calculate days together (set your anniversary date)
const anniversaryDate = new Date('2024-01-15'); // Change this to your actual date
const today = new Date();
const diffTime = Math.abs(today - anniversaryDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById('daysCount').textContent = diffDays;

// Add floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animation = 'float 4s linear infinite';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);

// Add floating animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Console love message
console.log('%c Happy 1 Month Anniversary! ❤️', 'color: #764ba2; font-size: 20px; font-weight: bold;');
console.log('%c I love you!', 'color: #667eea; font-size: 16px;');