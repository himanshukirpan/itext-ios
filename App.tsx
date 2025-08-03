
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import BottomBar from './src/stack/BottomBar';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
