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

## 🛠️ Requirements

### Minimum System Requirements
- Operating System: Windows 10/11, macOS 10.14+, or Linux
- Processor: 1.6 GHz or faster
- RAM: 4 GB
- Storage: 100 MB free space
- Web Browser: Chrome 80+, Firefox 75+, or Edge 80+
- Internet Connection: Required for initial setup

### Software Dependencies
- Python 3.8 or higher
- Flask 3.0.2
- Numpy
- Pygame
- Other dependencies listed in requirements.txt

## 🔧 Troubleshooting

### Common Issues

1. **Port 5000 Already in Use**
   ```bash
   # Error: Address already in use
   # Solution: Kill the process using port 5000
   # Windows:
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Mac/Linux:
   lsof -i :5000
   kill -9 <PID>
   ```

2. **Python Virtual Environment Issues**
   ```bash
   # If venv activation fails, try:
   # Windows:
   python -m pip install --user virtualenv
   # Mac/Linux:
   python3 -m pip install --user virtualenv
   ```

3. **Package Installation Errors**
   ```bash
   # If pip install fails, try:
   pip install --upgrade pip
   pip install -r requirements.txt --no-cache-dir
   ```

## 🎮 Game Features

### Visual Effects
- Retro CRT screen simulation
- Dynamic ghost trails
- Particle effects
- 3D perspective maze
- Animated background elements

### Sound Effects
- Classic Pacman sounds
- Background music
- Power pellet effects
- Ghost sounds
- Victory/defeat jingles

### AI Features
- Multiple AI difficulty levels
- Pathfinding visualization
- Strategy explanation overlay
- Performance metrics display

## 🔄 Updates and Maintenance

### Updating the Game
```bash
# Pull latest changes
git pull origin main

# Update dependencies
pip install -r requirements.txt --upgrade
```

### Clearing Game Data
```bash
# Remove cached files
rm -rf __pycache__
rm -rf .pytest_cache
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Pacman game by Namco
- Flask framework developers
- Open source community
- All contributors and testers