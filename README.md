# Enhanced AI Pacman Game 🎮

<div align="center">

[![Python](https://img.shields.io/badge/Python-3.x-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.0.2-green.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

*A modern implementation of the classic Pacman game with advanced AI capabilities and a retro-themed web interface*

[Features](#features) • [Installation](#installation) • [How to Play](#how-to-play) • [AI Strategy](#ai-strategy)

</div>

## 🌟 Features

### Modern Web Interface
- **Retro-themed Design**: Classic arcade feel with modern polish
- **3D Effects**: Dynamic animations and depth
- **CRT Screen Effect**: Authentic arcade experience
- **Responsive Layout**: Works on different screen sizes

### Game Modes
- 🎮 **Manual Play**: Classic Pacman gameplay with keyboard controls
- 🤖 **AI Play**: Watch our sophisticated AI agent navigate the maze
- Multiple difficulty levels and maze layouts

### Advanced AI Implementation
- Intelligent pathfinding algorithms
- Strategic ghost avoidance
- Smart power pellet utilization
- Adaptive gameplay strategies

## 🚀 Installation

### Prerequisites
- Python 3.x
- pip (Python package installer)

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ai-pacman
```

2. **Create a virtual environment (recommended)**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

## 🎮 How to Run

1. **Start the Web Interface**
```bash
python app.py
```

2. **Access the Game**
- Open your web browser
- Go to `http://localhost:5000`
- Choose your game mode:
  - "PLAY MANUAL" for keyboard controls
  - "PLAY WITH AI" to watch the AI play

### Game Controls (Manual Mode)
- **↑**: Move Up
- **↓**: Move Down
- **←**: Move Left
- **→**: Move Right
- **ESC**: Return to Menu

## 🤖 AI Strategy

Our SmartPacmanAgent employs sophisticated strategies:

### 1. Intelligent Navigation
- Dynamic pathfinding to collect pellets efficiently
- Real-time route optimization
- Trap avoidance mechanisms

### 2. Ghost Management
- Advanced ghost tracking
- Risk assessment algorithms
- Strategic escape route planning

### 3. Power Pellet Strategy
- Optimal power pellet timing
- Aggressive ghost hunting when powered
- Safe distance maintenance from ghosts

## 🔧 Project Structure
```
ai-pacman/
│
├── app.py              # Flask web server
├── pacman.py           # Main game logic
├── game.py             # Core game mechanics
├── smartAgent.py       # AI implementation
│
├── static/
│   ├── css/
│   │   └── style.css   # Retro-themed styles
│   └── js/
│       └── main.js     # Frontend interactions
│
├── templates/
│   ├── index.html      # Main menu interface
│   └── game.html       # Game window template
│
└── requirements.txt    # Project dependencies
```

## 🐛 Troubleshooting

### Common Issues

1. **Game doesn't start**
   - Ensure Python 3.x is installed and in PATH
   - Check if all dependencies are installed
   - Try running with administrator privileges

2. **Web interface not loading**
   - Verify Flask server is running
   - Check if port 5000 is available
   - Clear browser cache

3. **AI mode not working**
   - Ensure SmartAgent.py is present
   - Check Python environment activation
   - Verify all game dependencies

## 📝 Notes

- The game will open in a new window when launched
- Close the game window to return to the menu
- The web interface uses port 5000 by default

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.