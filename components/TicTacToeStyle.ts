// TicTacToeStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#ff5c5c',
    borderRadius: 6,
  },
  resetText: {
    color: 'white',
    fontSize: 18,
  },
  playButton: {
    paddingVertical: 12,
    paddingHorizontal: 36,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  playText: {
    color: 'white',
    fontSize: 18,
  },
  winningSquare: {
    backgroundColor: '#d1ffd6',
    borderColor: '#4CAF50',
  },
  gameCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10, // for Android
    alignItems: 'center',
  },
});
