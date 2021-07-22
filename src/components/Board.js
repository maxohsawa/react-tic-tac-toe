import {useState} from 'react';
import Square from './Square.js';

const Board = () => {
    const [player, setPlayer] = useState(1);
    const [state, setState] = useState(Array(9).fill(null));
  
    const xo = ['O','X'];
  
    let status = `Player ${xo[player]}`;
    let winner = checkWinner(state);
    if(winner != null) {
      status = `Player ${winner} wins!`;
    }
  
    function checkWinner(doot) {
      const winConditions = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ]
  
      for(let i = 0; i < winConditions.length; i++){
        let [a,b,c] = winConditions[i];
        if(state[a] == state[b] && state[b] == state[c]){
          return state[a];
        }
      }
  
      return null;
    }
  
    const newState = (id) => {
  
      const currentPlayer = player;
  
      state[id] = player;
      setState(state);
      setPlayer((player + 1) % 2);
  
      return currentPlayer;
    }
  
    
    
    function renderSquare(i) {
      return <Square id={i} player={player} newState={newState}></Square>
    }
      
    return (
      <div
        className="game-board"
        onClick={(e) => {
          setPlayer((player + 1) % 2);
          status = `Player ${player}`;
        }}
      >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
        <div id="info">
          <h1>{status}</h1>
        </div>
      </div>
    );
  };

  export default Board;