import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import GetItemRarity from "../functions/GetItemRarity";

let arrayRaritys = [];

const FilterItems = (props) => {
  const [buttonRarityColor, setButtonRarityColor] = useState({});

  useEffect(() => {
    props.raritys.map((item) => {
      AddRarityIntoArray(item)
    })
  }, [])

  const AddRarityIntoArray = (rarity) => {
    arrayRaritys.find((item) => item == rarity)
      ? arrayRaritys.splice(arrayRaritys.indexOf(rarity), 1)
      : arrayRaritys.push(rarity);
      
    setButtonRarityColor(item => ({
      ...item,
      [rarity]: arrayRaritys.find((itemRarity) => itemRarity == rarity) ? GetItemRarity(rarity).color : "transparent" 
    }))

    console.log(arrayRaritys);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity>
          <Ionicons
            name="close"
            size={70}
            color={"white"}
            onPress={() => {props.close(false); arrayRaritys = []}}
          ></Ionicons>
        </TouchableOpacity>
        <Text style={styles.textTitle}>SELECIONE OS FILTROS DE RARIDADES</Text>
      </View>

      <View style={styles.containerButtonsRarity}>
        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.common }]}
          onPress={() => AddRarityIntoArray("common")}
        >
          <Text style={styles.textButtonsRarity}>COMUM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.uncommon }]}
          onPress={() => AddRarityIntoArray("uncommon")}
        >
          <Text style={styles.textButtonsRarity}>INCOMUM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.rare }]}
          onPress={() => AddRarityIntoArray("rare")}
        >
          <Text style={styles.textButtonsRarity}>RARO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.epic }]}
          onPress={() => AddRarityIntoArray("epic")}
        >
          <Text style={styles.textButtonsRarity}>EPICO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.legendary }]}
          onPress={() => AddRarityIntoArray("legendary")}
        >
          <Text style={styles.textButtonsRarity}>LENDARIO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.mythic }]}
          onPress={() => AddRarityIntoArray("mythic")}
        >
          <Text style={styles.textButtonsRarity}>MITICO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.exotic }]}
          onPress={() => AddRarityIntoArray("exotic")}
        >
          <Text style={styles.textButtonsRarity}>EXOTICO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonsRarity, { backgroundColor: buttonRarityColor.marvel }]}
          onPress={() => AddRarityIntoArray("marvel")}
        >
          <Text style={styles.textButtonsRarity}>MARVEL</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", flex: 0.2, flexDirection: "row" }}>
        <TouchableOpacity style={[styles.buttonsActions, { backgroundColor: "#6FC1E5", }]}
          onPress={() => {props.setRaritys(arrayRaritys); props.close(false); arrayRaritys = []}}
        >
          <Text style={[styles.textButtonsRarity, {color: 'black', fontSize: 17}]}>CONFIRMAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonsActions, { backgroundColor: "#D82F0B",}]}
          onPress={() => {arrayRaritys = []; setButtonRarityColor({})}}
        >
          <Text style={[styles.textButtonsRarity, {color: 'black', fontSize: 17}]}>LIMPAR FILTROS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2D3031",
  },

  containerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 20,
  },

  containerButtonsRarity: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  buttonsRarity: {
    width: 150,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    // elevation: 9
  },

  buttonsActions: {
    width: 170,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    elevation: 9
  },

  textTitle: {
    fontFamily: "Dangrek_400Regular",
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginLeft: 10,
  },

  textButtonsRarity: {
    fontFamily: "Dangrek_400Regular",
    color: "white",
    fontSize: 22,
  },
});

export default FilterItems;
