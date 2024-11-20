from pacman import Directions
from game import Agent
import random
import game
import util

class SmartPacmanAgent(Agent):
    """
    A smarter Pacman agent that uses a combination of strategies:
    1. Seeks food
    2. Avoids ghosts
    3. Targets power pellets when ghosts are nearby
    """
    def __init__(self):
        self.lastMove = Directions.STOP
        self.weights = {'food': 10.0, 'ghost': -20.0, 'scared_ghost': 100.0, 'capsule': 15.0}

    def getAction(self, state):
        # Get legal moves
        legal = state.getLegalPacmanActions()
        if Directions.STOP in legal:
            legal.remove(Directions.STOP)

        # If no legal moves, return STOP
        if not legal:
            return Directions.STOP

        # Score all possible moves
        scored_moves = []
        pacman_pos = state.getPacmanPosition()
        
        for action in legal:
            score = 0
            successor = state.generateSuccessor(0, action)
            next_pos = successor.getPacmanPosition()
            
            # Food score - closer is better
            food_list = successor.getFood().asList()
            if food_list:
                min_food_dist = min([util.manhattanDistance(next_pos, food) for food in food_list])
                score += self.weights['food'] / (min_food_dist + 1)
            
            # Ghost score - further is better
            for ghost_state in successor.getGhostStates():
                ghost_dist = util.manhattanDistance(next_pos, ghost_state.getPosition())
                
                if ghost_state.scaredTimer > 0:
                    # Chase scared ghosts
                    score += self.weights['scared_ghost'] / (ghost_dist + 1)
                else:
                    # Avoid normal ghosts
                    if ghost_dist < 2:
                        score += self.weights['ghost'] * 10  # Strong avoidance when very close
                    else:
                        score += self.weights['ghost'] / (ghost_dist + 1)
            
            # Capsule score
            capsules = successor.getCapsules()
            if capsules:
                min_capsule_dist = min([util.manhattanDistance(next_pos, capsule) for capsule in capsules])
                score += self.weights['capsule'] / (min_capsule_dist + 1)
            
            scored_moves.append((score, action))
        
        # Choose the best move
        best_score = max(scored_moves)[0]
        best_actions = [pair[1] for pair in scored_moves if pair[0] == best_score]
        
        # Randomly choose among the best actions
        return random.choice(best_actions)
