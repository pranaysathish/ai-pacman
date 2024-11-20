# pacmanAgents.py
# ---------------
# Licensing Information: Please do not distribute or publish solutions to this
# project. You are free to use and extend these projects for educational
# purposes. The Pacman AI projects were developed at UC Berkeley, primarily by
# John DeNero (denero@cs.berkeley.edu) and Dan Klein (klein@cs.berkeley.edu).
# For more info, see http://inst.eecs.berkeley.edu/~cs188/sp09/pacman.html

from pacman import Directions
from game import Agent
import random
import game
import util

class LeftTurnAgent(game.Agent):
  "An agent that turns left at every opportunity"
  
  def getAction(self, state):
    legal = state.getLegalPacmanActions()
    current = state.getPacmanState().configuration.direction
    if current == Directions.STOP: current = Directions.NORTH
    left = Directions.LEFT[current]
    if left in legal: return left
    if current in legal: return current
    if Directions.RIGHT[current] in legal: return Directions.RIGHT[current]
    if Directions.LEFT[left] in legal: return Directions.LEFT[left]
    return Directions.STOP

class GreedyAgent(Agent):
  def __init__(self, evalFn="scoreEvaluation"):
    self.evaluationFunction = util.lookup(evalFn, globals())
    assert self.evaluationFunction != None
        
  def getAction(self, state):
    # Generate candidate actions
    legal = state.getLegalPacmanActions()
    if Directions.STOP in legal: legal.remove(Directions.STOP)
      
    successors = [(state.generateSuccessor(0, action), action) for action in legal] 
    scored = [(self.evaluationFunction(state), action) for state, action in successors]
    bestScore = max(scored)[0]
    bestActions = [pair[1] for pair in scored if pair[0] == bestScore]
    return random.choice(bestActions)
  
def scoreEvaluation(state):
  return state.getScore()

class SmartPacmanAgent(Agent):
    """
    A smarter Pacman agent that uses a combination of strategies:
    1. Seeks food
    2. Avoids ghosts
    3. Targets power pellets when ghosts are nearby
    4. Uses BFS for pathfinding to closest objectives
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
            
            # Ghost score - further is better unless scared
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
            
            # Capsule score - prioritize when ghosts are nearby
            capsules = successor.getCapsules()
            if capsules:
                min_capsule_dist = min([util.manhattanDistance(next_pos, capsule) for capsule in capsules])
                # Increase capsule weight if ghosts are nearby
                ghost_distances = [util.manhattanDistance(next_pos, ghost.getPosition()) 
                                 for ghost in successor.getGhostStates()]
                if min(ghost_distances) < 5:  # If any ghost is within 5 spaces
                    score += self.weights['capsule'] * 2 / (min_capsule_dist + 1)
                else:
                    score += self.weights['capsule'] / (min_capsule_dist + 1)
            
            # Avoid being trapped
            if len(successor.getLegalPacmanActions()) < 2:  # If next position has limited moves
                score -= 50  # Penalize moves that could trap Pacman
            
            scored_moves.append((score, action))
        
        # Choose the best move
        best_score = max(scored_moves)[0]
        best_actions = [pair[1] for pair in scored_moves if pair[0] == best_score]
        
        # Randomly choose among the best actions to avoid getting stuck in loops
        chosen_action = random.choice(best_actions)
        
        # Avoid reversing direction unless necessary
        if len(best_actions) > 1:
            current_direction = state.getPacmanState().configuration.direction
            opposite = Directions.REVERSE[current_direction]
            if opposite in best_actions and len(best_actions) > 1:
                best_actions.remove(opposite)
                chosen_action = random.choice(best_actions)
        
        return chosen_action