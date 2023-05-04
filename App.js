
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import apiHttp from './API/api.js';
import { useFonts, Dangrek_400Regular } from '@expo-google-fonts/dangrek';

export default function App() {
  const [apiItems, setApiItems] = useState();
  const [clickedTypeButton, setClickedTypeButton] = useState(false);
  const [items, setItems] = useState([{}]);
  const [fontLoaded] = useFonts({
    Dangrek_400Regular,
  });

  useEffect(() => {
    apiHttp.get().then((response) => setApiItems(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro | " + err);
      });
  }, []);
  if(!apiItems){
    return null;
  }

  if (!fontLoaded){
    return null;
  }

  var executeSetFeatured = () => {
    setClickedTypeButton(true);
    setItems(apiItems?.data.featured); 
  };
  var executeSetDaily = () => {
    setClickedTypeButton(true);
    setItems(apiItems?.data.daily);
  }

  return (
    <View style={styles.container}>

      <View style={styles.panelTop}>
        <Text style={{ fontSize: 50, fontWeight: '600', color: 'white', fontFamily: 'Dangrek_400Regular',}}>Loja Fortnite</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttonsTop} onPress={executeSetFeatured}>
            <Text style={styles.textButtons}>DESTAQUES</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.buttonsTop} onPress={executeSetDaily}>
            <Text style={styles.textButtons}>DIARIA</Text>
          </TouchableOpacity >
        </View>
      </View>

      {clickedTypeButton &&
        <ScrollView>
          <View style={styles.containerItems}>
              {items.map((item, index) => (
                <View key={index} style={styles.items}>
                  <Image source={{uri: item.images.icon}} style={{width: 100, height: 110,}}/>
                  <Text style={styles.textItems}>{item.name}</Text>

                  <View style={{justifyContent: 'center', flexDirection: 'row'}}>  
                    <Image source={{uri: 'https://image.fnbr.co/price/icon_vbucks.png'}} style={{width: 20, height: 20}}/>
                    <Text style={styles.textItems}>{item.price}</Text>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
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
