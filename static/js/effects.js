// Create particle container
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles';
document.body.appendChild(particlesContainer);

// Particle creation function
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--x', Math.random() * 100 - 50 + 'px');
    particlesContainer.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Create particles on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // Reduce particle creation rate
        createParticle(e.clientX, e.clientY);
    }
});

// Button hover effects
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('mouseover', (e) => {
        // Create glitch effect
        const glitchInterval = setInterval(() => {
            button.style.transform = `translateZ(30px) scale(1.05) translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                button.style.transform = 'translateZ(30px) scale(1.05)';
            }, 50);
        }, 200);

        button.addEventListener('mouseout', () => {
            clearInterval(glitchInterval);
            button.style.transform = '';
        }, { once: true });
    });
});

// Title glitch effect
const title = document.querySelector('.title');
setInterval(() => {
    if (Math.random() > 0.95) {
        title.style.textShadow = `${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #ff0000,
                                 ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #00ffff`;
        setTimeout(() => {
            title.style.textShadow = '';
        }, 50);
    }
}, 100);

// Add Pacman chomp effect on button hover
function createChomp(x, y) {
    const chomp = document.createElement('div');
    chomp.className = 'chomp';
    chomp.style.left = x + 'px';
    chomp.style.top = y + 'px';
    document.body.appendChild(chomp);
    
    setTimeout(() => {
        chomp.remove();
    }, 500);
}

document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) {
            createChomp(e.clientX, e.clientY);
        }
    });
});
