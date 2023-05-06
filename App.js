
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import apiHttp from './API/api.js';
import { useFonts, Dangrek_400Regular } from '@expo-google-fonts/dangrek';
import ScrollViewItems from './src/ScrollViewItems.js';

export default function App() {
  const [apiItems, setApiItems] = useState();
  const [items, setItems] = useState();
  const [fontLoaded] = useFonts({
    Dangrek_400Regular,
  });

  useEffect(() => {
    apiHttp.get().then((response) => setApiItems(response.data))
      .catch((err) => {
        console.error("Erro: " + err);
      });
  }, []);

  if (!apiItems) {
    return null;
  }

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <View style={styles.panelTop}>
        <Text style={{ fontSize: 50, fontWeight: '600', color: 'white', fontFamily: 'Dangrek_400Regular', }}>Loja Fortnite</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonsTop} onPress={() => { setItems(apiItems?.data.featured) }}>
            <Text style={styles.textButtons}>DESTAQUES</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.buttonsTop} onPress={() => { setItems(apiItems?.data.daily) }}>
            <Text style={styles.textButtons}>DIARIA</Text>
          </TouchableOpacity >
        </View>
      </View>

      {!items ? (<ScrollViewItems items={apiItems?.data.featured}></ScrollViewItems>) :
                (<ScrollViewItems items={items}></ScrollViewItems>)
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3031',
    height: '100%',
  },

  panelTop: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 165,
  },

  buttonsTop: {
    backgroundColor: '#6FC1E5',
    width: 140,
    padding: 7,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  textButtons: {
    fontFamily: 'Dangrek_400Regular',
    fontSize: 23,
    textAlign: 'center',
  },

  containerItems: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  items: {
    width: 100,
    height: 180,
    margin: 9,
    marginBottom: 20,
  },

  textItems: {
    fontFamily: 'Dangrek_400Regular',
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  }
});
