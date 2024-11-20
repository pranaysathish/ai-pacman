from flask import Flask, render_template, jsonify
import subprocess
import os
import signal
import sys

app = Flask(__name__)
game_process = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start-game/<mode>')
def start_game(mode):
    global game_process
    
    # Kill any existing game process
    if game_process:
        try:
            game_process.terminate()
        except:
            pass
    
    try:
        # Get the absolute path to the current directory
        current_dir = os.path.dirname(os.path.abspath(__file__))
        
        # Prepare the command based on game mode
        if mode == 'manual':
            cmd = [sys.executable, 'pacman.py', '-l', 'originalClassic', '--frameTime', '0.1']
        else:  # AI mode
            cmd = [sys.executable, 'pacman.py', '-p', 'SmartPacmanAgent', '-l', 'originalClassic', '--frameTime', '0.1']
        
        # Start the game process
        subprocess.run(
            cmd,
            cwd=current_dir,
            creationflags=subprocess.CREATE_NEW_CONSOLE  # Create new console window for Windows
        )
        
        return jsonify({'success': True})
    except Exception as e:
        print(f"Error starting game: {str(e)}")  # Debug print
        return jsonify({'success': False, 'error': str(e)})

@app.route('/game/<mode>')
def game(mode):
    return render_template('game.html', mode=mode)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
