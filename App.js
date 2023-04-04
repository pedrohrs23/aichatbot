import { StyleSheet, View } from 'react-native';
import aiChatGpt from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <aiChatGpt/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
