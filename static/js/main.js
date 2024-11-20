document.addEventListener('DOMContentLoaded', function() {
    // Create floating dots
    createFloatingDots();

    // Add click handlers for buttons
    document.getElementById('playManual').addEventListener('click', () => startGame('manual'));
    document.getElementById('playAI').addEventListener('click', () => startGame('ai'));
    document.getElementById('backBtn').addEventListener('click', goBack);
});

function createFloatingDots() {
    const dotsContainer = document.querySelector('.dots');
    const numDots = 20;

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 2}s`;
        dotsContainer.appendChild(dot);
    }
}

function startGame(mode) {
    const menu = document.querySelector('.menu-container');
    const gameFrame = document.querySelector('.game-frame');
    const backBtn = document.querySelector('.back-btn');
    
    // Hide menu and show game frame
    menu.style.display = 'none';
    gameFrame.style.display = 'block';
    backBtn.style.display = 'block';

    // Make API call to start the game
    fetch(`/start-game/${mode}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                gameFrame.src = `/game/${mode}`;
            } else {
                alert('Failed to start game. Please try again.');
                goBack();
            }
        })
        .catch(error => {
            console.error('Error starting game:', error);
            alert('Failed to start game. Please try again.');
            goBack();
        });
}

function goBack() {
    const menu = document.querySelector('.menu-container');
    const gameFrame = document.querySelector('.game-frame');
    const backBtn = document.querySelector('.back-btn');

    menu.style.display = 'block';
    gameFrame.style.display = 'none';
    backBtn.style.display = 'none';
    gameFrame.src = '';
}
