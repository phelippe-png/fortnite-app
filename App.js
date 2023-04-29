import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import apiHttp from './API/api.js';

// const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    apiHttp.get().then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro | " + err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.teste}>
          <Text>APERTA AI</Text>
        </TouchableOpacity>

        <Text>{user?.data.date}</Text>
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
    height: 70,
    backgroundColor: '#ff2',
  }
});
