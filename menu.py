import tkinter as tk
from tkinter import font
import subprocess
import sys
import os

class PacmanMenu:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Pacman Game")
        
        # Set window size
        window_width = 600
        window_height = 400
        screen_width = self.root.winfo_screenwidth()
        screen_height = self.root.winfo_screenheight()
        x = (screen_width - window_width) // 2
        y = (screen_height - window_height) // 2
        self.root.geometry(f"{window_width}x{window_height}+{x}+{y}")
        
        # Set background color
        self.root.configure(bg='black')
        
        # Create custom font
        title_font = font.Font(family="Arial", size=36, weight="bold")
        button_font = font.Font(family="Arial", size=14, weight="bold")
        
        # Title
        title = tk.Label(self.root, text="PACMAN", font=title_font, fg='yellow', bg='black')
        title.pack(pady=40)
        
        # Buttons
        button_style = {'font': button_font, 'fg': 'yellow', 'bg': 'black',
                       'activeforeground': 'red', 'activebackground': 'black',
                       'width': 20, 'bd': 0}
        
        play_manual = tk.Button(self.root, text="Play Manual", 
                              command=self.play_manual, **button_style)
        play_manual.pack(pady=10)
        
        play_ai = tk.Button(self.root, text="Play with AI",
                           command=self.play_ai, **button_style)
        play_ai.pack(pady=10)
        
        quit_button = tk.Button(self.root, text="Quit",
                              command=self.root.quit, **button_style)
        quit_button.pack(pady=10)
        
        # Bind hover events
        for button in (play_manual, play_ai, quit_button):
            button.bind('<Enter>', lambda e, b=button: b.configure(fg='red'))
            button.bind('<Leave>', lambda e, b=button: b.configure(fg='yellow'))

    def play_manual(self):
        self.root.withdraw()  # Hide the menu
        subprocess.run([sys.executable, 'pacman.py', '-l', 'originalClassic', '--frameTime', '0.1'])
        self.root.deiconify()  # Show the menu again

    def play_ai(self):
        self.root.withdraw()  # Hide the menu
        subprocess.run([sys.executable, 'pacman.py', '-p', 'SmartPacmanAgent', '-l', 'originalClassic', '--frameTime', '0.1'])
        self.root.deiconify()  # Show the menu again

    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    menu = PacmanMenu()
    menu.run()
