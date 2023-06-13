
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Pressable, ActivityIndicator } from 'react-native';
import apiHttp from './API/api.js';
import { useFonts, Dangrek_400Regular } from '@expo-google-fonts/dangrek';
import DescriptionItem from './src/DescriptionItem.js';
import Ionicons from "react-native-vector-icons/Ionicons";
import FilterItems from './src/FilterItems.js';
import GetItemRarity from './functions/GetItemRarity.js';
import { Button } from 'react-native-web';

export default function App() {
  const [apiItems, setApiItems] = useState();
  const [items, setItems] = useState();
  const [stateDescriptionItem, setStateDescriptionItem] = useState(false);
  const [filterItems, setFilterItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchApi, setSearchApi] = useState(true);
  const [arrayRarity, setArrayRarity] = useState([]);
  const [fontLoaded] = useFonts({
    Dangrek_400Regular,
  });

  const buscarAPI = () => {
    apiHttp.get().then((response) => {
      setApiItems(response.data);
      setItems(response.data?.data.featured);
      setLoading(false);
      setSearchApi(true);
    }).catch((err) => {
      setSearchApi(false)
    });
  }

  useEffect(() => {
    buscarAPI()
  }, []);

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
            {props.items?.filter((item) => arrayRarity.length == 0 ? item : arrayRarity.includes(item.rarity)).map((item) => (
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
      {!filterItems ? (
        <View>
          {!stateDescriptionItem ? (
            <View style={{height: '100%',}}>
              <View style={styles.panelTop}>
                <Text style={{ fontSize: 50, fontWeight: '600', color: 'white', fontFamily: 'Dangrek_400Regular', }}>Loja Fortnite</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.buttonsTop} onPress={() => { setItems(apiItems?.data.featured); loadItems() }}>
                    <Text style={styles.textButtons}>DESTAQUES</Text>
                  </TouchableOpacity >
                  <TouchableOpacity style={styles.buttonsTop} onPress={() => { setItems(apiItems?.data.daily); loadItems()}}>
                    <Text style={styles.textButtons}>DIARIA</Text>
                  </TouchableOpacity >
                </View>
              </View>

              {!searchApi ? (
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={[styles.textItems, {fontSize: 27}]}>Sem conexão com a internet</Text>
                  <TouchableOpacity 
                    style={[styles.buttonsTop, {width: 60, height: 60, borderRadius: 50}]}
                    onPress={buscarAPI()}
                  >
                    <Text style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Ionicons name='reload' size={47} style={{}}></Ionicons>
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : 
                <View style={{flex: 1}}>
                  <ScrollViewItems items={items}></ScrollViewItems>

                  <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => {setFilterItems(true)}} >
                      <Ionicons name='filter' size={40} color={'black'}></Ionicons>
                    </TouchableOpacity>
                  </View>

                </View>
              }
            </View> 
          ) : <DescriptionItem item={selectedItem} close={setStateDescriptionItem}></DescriptionItem>}
        </View> 
      ) : <FilterItems setRaritys={setArrayRarity} raritys={arrayRarity} close={setFilterItems}></FilterItems>}
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
    elevation: 9
  },

  textButtons: {
    fontFamily: 'Dangrek_400Regular',
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
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
  },

  filterButton: {
    width: 75, 
    height: 75, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6FC1E5', 
    position: 'absolute',
    borderRadius: 50,
    bottom: 30,
    right: 30,
    elevation: 9
  }
});
