import Square from './components/Square.js';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {

  const [player, setPlayer] = useState('Player one');
  const [moves, setMoves] = useState(0);
  const [win, setWin] = useState('');
  const [winnerBtns, setWinnerBtns] = useState('');
  const [clear, setClear] = useState(false);
  const [counterGames, setCounterGames] = useState(0);

  const [playerOneMoves, setPlayerOneMoves] = useState([]);
  const [playerTwoMoves, setPlayerTwoMoves] = useState([]);
  
  const btns = [1,2,3,4,5,6,7,8,9];

  const winnerCombinations = [  
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];

  useEffect(() => {

    for (let i of winnerCombinations ) {
      let winner = 0;
      
      for(let j of i ) {
        if(playerOneMoves.includes(j)) {
          winner ++;
        }
      }

      if (winner === 3) {
        setWin('Player one');
        setWinnerBtns(i);
      }
    }

  }, [playerOneMoves]);

  useEffect(() => {
    
    for (let i of winnerCombinations ) {
      let winner = 0;
      
      for(let j of i ) {
        if(playerTwoMoves.includes(j)) {
          winner ++;
        }
      }

      if (winner === 3) {
        setWin('Player two');
        setWinnerBtns(i);
      }
    }

  }, [playerTwoMoves]);

  const reset = () => {
    setPlayer('Player one');
    setMoves(0);
    setWin('');
    setWinnerBtns('');
    setPlayerOneMoves([]);
    setPlayerTwoMoves([]);
    setClear(true);
    setCounterGames( counterGames + 1 )
  }


  return (
    <>
      <h1>Tic tac toe</h1>
      <div className="container">

        {btns.map(x => (
          <Square 
            key={x} 
            itemNum={x} 
            player={player} 
            setPlayer={setPlayer} 
            moves={moves} 
            setMoves={setMoves}
            setPlayerOneMoves = {setPlayerOneMoves}
            setPlayerTwoMoves = {setPlayerTwoMoves}
            playerOneMoves = {playerOneMoves}
            playerTwoMoves = {playerTwoMoves}
            winnerCombinations={winnerCombinations}
            winnerBtns={winnerBtns}
            win={win}
            clear={clear}
            setClear={setClear}
          />
        ))}

      </div>

      <button className='reset' onClick={ reset }>Reset</button>

      <p>Games: { counterGames }</p>
      <p>Moves to win: { win !== '' ? moves : 0}</p>
    </>
  );
}

export default App;
