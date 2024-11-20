# Playing Pac-Man game

![Pac-Man game](pacman_game.gif)

The Pac-Man projects were developed for [UC Berkeley's introductory artificial intelligence course, CS 188](http://ai.berkeley.edu/project_overview.html). They apply an array of AI techniques to playing Pac-Man. However, these projects don't focus on building AI for video games. Instead, they teach foundational AI concepts, such as informed state-space search, probabilistic inference, and reinforcement learning. These concepts underly real-world application areas such as natural language processing, computer vision, and robotics.

# Features
- Classic Pac-Man gameplay with retro-themed graphics
- Modern menu interface with easy game mode selection
- Two play modes:
  - Manual Play: Control Pac-Man using arrow keys
  - AI Play: Watch a smart AI agent play the game
- Enhanced AI agent with advanced strategies:
  - Intelligent food collection
  - Smart ghost avoidance
  - Strategic power pellet usage
  - Adaptive decision making
  - Trap avoidance

# Install
- This project runs on **Python 3.x**
- Install required packages by running:
```
pip install -r requirements.txt
```

# How to Play
1. Start the game menu:
```
python menu.py
```

2. Choose your play mode:
   - **Play Manual**: Control Pac-Man yourself using arrow keys
   - **Play with AI**: Watch the smart AI agent play the game
   - **Quit**: Exit the game

3. For advanced options:
```
python pacman.py -h
```

# Game Controls
- **Manual Mode**:
  - Use arrow keys to move Pac-Man
  - Press ESC to return to menu
- **AI Mode**:
  - Watch the AI play automatically
  - Press ESC to return to menu

# AI Strategy
The SmartPacmanAgent uses sophisticated strategies:
1. Food Collection:
   - Efficiently navigates to nearby food pellets
   - Considers path safety when choosing routes
2. Ghost Avoidance:
   - Maintains safe distance from dangerous ghosts
   - Evaluates multiple escape routes
3. Power Pellet Usage:
   - Times power pellet collection strategically
   - Hunts vulnerable ghosts when powered up
4. Adaptive Behavior:
   - Avoids getting trapped in corners
   - Changes strategy based on game state

# Using Pac-Man in your AI Course
You are welcome to use the Pac-Man projects and infrastructure for any educational or personal use. We ask only that you:

1. Please do not distribute or post solutions to any of the projects.
2. Please retain the attribution text at the top of each Python file.
3. Talk to us before re-releasing, repacking, or extending the projects.

Additionally, if you have any questions, feedback, or bug reports about our projects, there are two ways of getting them addressed. (1) An public instructor forum through Piazza, in which you will need to contact us to get an access code to join, and (2) a private form linked here (preferably for bug reports). For more information, see the [Contact](http://ai.berkeley.edu/contact.html) section.

# Contact Information

## Course Materials

The lecture slides, homework and exams were developed primarily by [Dan Klein](http://www.eecs.berkeley.edu/~klein) and [Pieter Abbeel](http://www.eecs.berkeley.edu/~pabbeel).

The artwork was drawn by [Ketrina Yim](http://www.ketrinayim.com/).

## The Pacman Projects

The Pac-Man projects were developed primarily by [John DeNero](http://www.denero.org/) and [Dan Klein](http://www.eecs.berkeley.edu/~klein).

The autograder development was headed up by Nick Hay, Brad Miller, [Dan Klein](http://www.eecs.berkeley.edu/~klein), and [Pieter Abbeel](http://www.eecs.berkeley.edu/~pabbeel).

Many others have contributed to the projects, including Nimar Arora, David Burkett, Jeremy Cowles, Jeff Donahue, Dan Gillick, Aria Haghighi, Judy Hoffman, Ed Karuna, Jonathan Long, Jeremy Maitin-Shepard, Barak Michener, Aditi Muralidharan, Adam Pauls, Arjun Singh, and Daniel Urieli.