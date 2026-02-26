function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const btn = document.querySelector('.music-control');
    const icon = document.getElementById('music-icon');
    if (audio.paused) {
        audio.play();
        btn.classList.add('playing');
        icon.innerHTML = '🎶';
    } else {
        audio.pause();
        btn.classList.remove('playing');
        icon.innerHTML = '🎵';
    }
}