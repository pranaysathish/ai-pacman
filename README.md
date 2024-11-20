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
- Python 3.x (Download from [python.org](https://www.python.org/downloads/))
- pip (Python package installer, comes with Python)
- Git (Download from [git-scm.com](https://git-scm.com/downloads))

### Step-by-Step Setup

1. **Open Terminal/Command Prompt**
   - Windows: Press `Win + R`, type `cmd`, and press Enter
   - Mac: Open Terminal from Applications/Utilities
   - Linux: Use your preferred terminal

2. **Clone the Repository**
```bash
git clone https://github.com/yourusername/ai-pacman.git
cd ai-pacman
```

3. **Set Up Python Environment**

   Windows:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   ```

   Mac/Linux:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

   Note: If you get a "python not found" error, try using `python3` instead of `python`

4. **Verify Installation**
   - Make sure all dependencies are installed:
   ```bash
   pip list
   ```
   - You should see Flask and other required packages listed

## 🎮 Running the Game

1. **Start the Server**
   ```bash
   # Make sure you're in the ai-pacman directory
   python app.py
   ```

2. **Access the Game**
   - Open your web browser
   - Go to `http://localhost:5000`
   - You should see the game interface

3. **Choose Game Mode**
   - Click "PLAY MANUAL" for keyboard controls
   - Click "PLAY WITH AI" to watch the AI play

### Game Controls (Manual Mode)
- **↑** or **W**: Move Up
- **↓** or **S**: Move Down
- **←** or **A**: Move Left
- **→** or **D**: Move Right
- **ESC** or **Back Button**: Return to Menu

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

## 🔧 Troubleshooting

### Common Issues:

1. **Port Already in Use**
   ```bash
   # Try running on a different port
   python app.py --port 5001
   ```

2. **Python/pip Not Found**
   - Ensure Python is added to your system's PATH
   - Try using `python3` and `pip3` instead

3. **Module Not Found Errors**
   - Make sure you're in the virtual environment (you should see `(venv)` in your terminal)
   - Try reinstalling dependencies:
   ```bash
   pip install -r requirements.txt --force-reinstall
   ```

4. **Browser Shows Blank Page**
   - Clear your browser cache
   - Try a different browser
   - Check if the server is running (you should see Flask output in the terminal)

## 📝 Requirements

See `requirements.txt` for a complete list of dependencies.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.