
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Pressable, ActivityIndicator } from 'react-native';
import apiHttp from './API/api.js';
import { useFonts, Dangrek_400Regular } from '@expo-google-fonts/dangrek';
import DescriptionItem from './src/DescriptionItem.js';

export default function App() {
  const [apiItems, setApiItems] = useState();
  const [items, setItems] = useState();
  const [stateDescriptionItem, setStateDescriptionItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [fontLoaded] = useFonts({
    Dangrek_400Regular,
  });

  useEffect(() => {
    apiHttp.get().then((response) => {
      setApiItems(response.data);
      setLoading(false);
    }).catch((err) => {
      console.error("Erro: " + err);
    });
  }, []);

  if (!apiItems) {
    return null;
  }

  if (!fontLoaded) {
    return null;
  }

  const loadItems = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }

  const ScrollViewItems = props => {
    return (
      <ScrollView>
        {loading ?
          <ActivityIndicator size={90} color={'#6FC1E5'} animating={true} style={styles.loadIndicator} /> :
          <View style={styles.containerItems}>
            {props.items?.map((item) => (
              <Pressable key={item.id} style={styles.items} onPress={() => { setStateDescriptionItem(true); setSelectedItem(item) }}>
                <Image source={{ uri: item.images.icon }} style={{ width: 100, height: 110, }} />
                <Text style={styles.textItems}>{item.name}</Text>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                  <Image source={{ uri: 'https://image.fnbr.co/price/icon_vbucks.png' }} style={{ width: 20, height: 20 }} />
                  <Text style={styles.textItems}>{item.price}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        }
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      {!stateDescriptionItem ? (
        <View style={{height: '100%'}}>
          <View style={styles.panelTop}>
            <Text style={{ fontSize: 50, fontWeight: '600', color: 'white', fontFamily: 'Dangrek_400Regular', }}>Loja Fortnite</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.buttonsTop} onPress={() => { setItems(apiItems?.data.featured); loadItems() }}>
                <Text style={styles.textButtons}>DESTAQUES</Text>
              </TouchableOpacity >
             <TouchableOpacity style={styles.buttonsTop} onPress={() => { setItems(apiItems?.data.daily); loadItems() }}>
                <Text style={styles.textButtons}>DIARIA</Text>
              </TouchableOpacity >
            </View>
          </View>

          {!items ? (<ScrollViewItems items={apiItems?.data.featured}></ScrollViewItems>) :
            (<ScrollViewItems items={items}></ScrollViewItems>)
          }
        </View>
      ) : <DescriptionItem item={selectedItem} close={setStateDescriptionItem}></DescriptionItem>}

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
  },

  loadIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
