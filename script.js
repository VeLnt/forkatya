document.getElementById('revealButton').addEventListener('click', function() {
    const button = document.getElementById('revealButton');
    button.classList.add('vanish');
    button.addEventListener('animationend', function() {
        document.getElementById('surpriseContent').classList.remove('hidden');
    });
});
