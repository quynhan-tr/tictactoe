import React, { useState } from 'react';
import { styles } from '../components/TicTacToeStyle';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


const App = () => {
  const WINNING_LETTERS = ['T', 'U', 'Q'];
  const emptyBoard = Array(9).fill(null);
  const [gameStarted, setGameStarted] = useState(false);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line: winningLine } = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handlePress = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setXIsNext(true);
    setGameStarted(false);
  };

  const renderSquare = (index: number) => {
    const isWinningSquare = winningLine?.includes(index);
    let displayValue = board[index];

    if (winner && isWinningSquare) {
      const letterIndex = winningLine.indexOf(index);
      displayValue = WINNING_LETTERS[letterIndex];
    }

    return (
      <TouchableOpacity
        key={index}
        style={[styles.square, isWinningSquare && styles.winningSquare]}
        onPress={() => handlePress(index)}
      >
        <Text style={styles.symbol}>{displayValue}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {!gameStarted ? (
        <View style={styles.gameCard}>
          <Text style={styles.title}>Tic Tac Toe</Text>
          <TouchableOpacity style={styles.playButton} onPress={() => setGameStarted(true)}>
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.gameCard}>
          <Text style={styles.title}>Tic Tac Toe</Text>
          <Text style={styles.status}>
            {winner
              ? `Winner: ${winner}`
              : isDraw
              ? "It's a draw!"
              : `Turn: ${xIsNext ? 'X' : 'O'}`}
          </Text>
          <View style={styles.board}>
            {[0, 1, 2].map((row) => (
              <View key={row} style={styles.row}>
                {renderSquare(row * 3)}
                {renderSquare(row * 3 + 1)}
                {renderSquare(row * 3 + 2)}
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
            <Text style={styles.resetText}>
              {(winner || isDraw) ? 'Play Again' : 'Quit'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

function calculateWinner(squares: (string | null)[]): { winner: string | null; line: number[] | null } {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return { winner: null, line: null };
}

export default App;