import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.teste}>
          <Text>APERTA AI</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  statusbar:{
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "#000"
  },

  teste: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 20,
    backgroundColor: '#ff2',
  }
});
