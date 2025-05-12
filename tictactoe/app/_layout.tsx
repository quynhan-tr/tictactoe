import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Slot /> {/* This renders the currently active screen */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fdfdfd',
  },
});
