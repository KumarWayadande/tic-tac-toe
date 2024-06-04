



const GameBoad = ({onSelectSquare, board}) => {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard(prevGameBoard => {
    //         let updatedBoard = [...prevGameBoard.map(row => [...row])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelectSquare();
    // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            {
              <ol>
                {row.map((playerSymbol, colIndex) => {
                  return <button key={colIndex} onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                })}
              </ol>
            }
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoad;
