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

// Parallax Background Effect
class ParallaxBackground {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'parallax-background';
        document.body.appendChild(this.container);

        this.layers = [];
        this.elements = [];
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
        this.bindEvents();
    }

    init() {
        // Create three layers
        for (let i = 1; i <= 3; i++) {
            const layer = document.createElement('div');
            layer.className = `parallax-layer layer-${i}`;
            this.container.appendChild(layer);
            this.layers.push(layer);

            // Add elements to each layer
            this.addElementsToLayer(layer, i);
        }
    }

    addElementsToLayer(layer, layerNum) {
        const numElements = 15 - (layerNum * 3); // Fewer elements in back layers
        const symbols = {
            ghosts: ['👻'],
            dots: ['•', '∙', '○'],
            pacman: ['ᗧ']
        };

        for (let i = 0; i < numElements; i++) {
            const element = document.createElement('div');
            element.className = 'parallax-element';

            // Randomly choose element type
            const type = Math.random() < 0.3 ? 'ghosts' : 'dots';
            const symbolArray = symbols[type];
            const symbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];

            element.textContent = symbol;
            element.style.left = `${Math.random() * 100}%`;
            element.style.top = `${Math.random() * 100}%`;

            if (type === 'ghosts') {
                element.classList.add('ghost-element');
                const ghostColors = ['', 'pink', 'cyan', 'orange'];
                const colorClass = ghostColors[Math.floor(Math.random() * ghostColors.length)];
                if (colorClass) element.classList.add(colorClass);
            } else {
                element.classList.add('dot-element');
            }

            layer.appendChild(element);
            this.elements.push({
                element,
                x: parseFloat(element.style.left),
                y: parseFloat(element.style.top),
                speed: (4 - layerNum) * 0.1
            });
        }
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;

            this.elements.forEach(({ element, x: baseX, y: baseY, speed }) => {
                const offsetX = x * 50 * speed;
                const offsetY = y * 50 * speed;
                
                element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });

        // Reset positions when mouse leaves
        document.addEventListener('mouseleave', () => {
            this.elements.forEach(({ element }) => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxBackground();
});

// Ghost Trail Effect
class GhostTrailEffect {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'ghost-container';
        document.body.appendChild(this.container);
        
        this.ghostColors = ['red', 'pink', 'cyan', 'orange'];
        this.isCreatingTrail = false;
        
        this.init();
    }
    
    init() {
        // Start creating ghosts periodically
        setInterval(() => this.createGhost(), 4000);
    }
    
    createGhost() {
        const ghost = document.createElement('div');
        const color = this.ghostColors[Math.floor(Math.random() * this.ghostColors.length)];
        const startY = Math.random() * (window.innerHeight - 100);
        
        ghost.className = `floating-ghost ghost-${color}`;
        ghost.innerHTML = '👻';
        ghost.style.top = `${startY}px`;
        
        this.container.appendChild(ghost);
        
        // Create trails while the ghost is visible
        let trailInterval = setInterval(() => {
            if (ghost.style.opacity > 0) {
                this.createTrail(ghost, color);
            }
        }, 50);
        
        // Cleanup after animation
        ghost.addEventListener('animationend', () => {
            clearInterval(trailInterval);
            ghost.remove();
        });
    }
    
    createTrail(ghost, color) {
        const trail = document.createElement('div');
        const rect = ghost.getBoundingClientRect();
        
        trail.className = `ghost-trail ghost-${color}`;
        trail.style.left = `${rect.left + rect.width/2 - 15}px`;
        trail.style.top = `${rect.top + rect.height/2 - 15}px`;
        
        this.container.appendChild(trail);
        
        // Animate trail
        trail.style.animation = 'fadeTrail 1s ease-out forwards';
        
        // Remove trail after animation
        trail.addEventListener('animationend', () => {
            trail.remove();
        });
    }
}

// Initialize ghost trail effect
document.addEventListener('DOMContentLoaded', () => {
    new GhostTrailEffect();
});

// Animated Background Ghosts
class AnimatedGhostBackground {
    constructor() {
        this.ghosts = [];
        this.ghostTypes = ['blinky', 'pinky', 'inky', 'clyde'];
        this.init();
    }

    init() {
        // Create container for background ghosts
        const container = document.createElement('div');
        container.className = 'ghost-bg-container';
        container.style.position = 'fixed';
        container.style.inset = '0';
        container.style.zIndex = '-1';
        container.style.overflow = 'hidden';
        document.body.appendChild(container);
        this.container = container;

        // Create multiple ghosts
        this.createGhosts(15); // Create 15 ghosts
        this.startRandomMovements();
    }

    createGhosts(count) {
        for (let i = 0; i < count; i++) {
            const ghost = document.createElement('div');
            const type = this.ghostTypes[Math.floor(Math.random() * this.ghostTypes.length)];
            
            ghost.className = `ghost-bg ${type}`;
            ghost.style.left = `${Math.random() * 100}vw`;
            ghost.style.top = `${Math.random() * 100}vh`;
            
            // Add random animation classes
            if (Math.random() > 0.5) {
                ghost.classList.add('animated');
            } else {
                ghost.classList.add('wiggle');
            }
            
            // Random animation delay
            ghost.style.animationDelay = `${Math.random() * 2}s`;
            
            this.container.appendChild(ghost);
            this.ghosts.push({
                element: ghost,
                x: parseFloat(ghost.style.left),
                y: parseFloat(ghost.style.top),
                speedX: (Math.random() - 0.5) * 0.1,
                speedY: (Math.random() - 0.5) * 0.1
            });
        }
    }

    startRandomMovements() {
        setInterval(() => {
            this.ghosts.forEach(ghost => {
                // Update position
                ghost.x += ghost.speedX;
                ghost.y += ghost.speedY;

                // Bounce off edges
                if (ghost.x < 0 || ghost.x > 100) ghost.speedX *= -1;
                if (ghost.y < 0 || ghost.y > 100) ghost.speedY *= -1;

                // Apply new position
                ghost.element.style.left = `${ghost.x}vw`;
                ghost.element.style.top = `${ghost.y}vh`;

                // Randomly change animation
                if (Math.random() < 0.01) { // 1% chance each frame
                    ghost.element.classList.toggle('animated');
                    ghost.element.classList.toggle('wiggle');
                }
            });
        }, 50); // Update every 50ms

        // Occasionally add glowing effect
        setInterval(() => {
            const randomGhost = this.ghosts[Math.floor(Math.random() * this.ghosts.length)];
            const originalFilter = randomGhost.element.style.filter;
            
            randomGhost.element.style.filter = 'brightness(2)';
            randomGhost.element.style.opacity = '0.7';
            
            setTimeout(() => {
                randomGhost.element.style.filter = originalFilter;
                randomGhost.element.style.opacity = '0.4';
            }, 500);
        }, 2000);
    }
}

// Initialize ghost background
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedGhostBackground();
});
