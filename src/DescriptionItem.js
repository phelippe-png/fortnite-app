import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import GetItemRarity from "../functions/GetItemRarity";

const DescriptionItem = props => {
    return(
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity>
                    <Ionicons
                        name="close"
                        size={70}
                        color={"white"}
                        onPress={() => {props.close(false)}}
                    ></Ionicons>
                </TouchableOpacity>
                <Text style={styles.textTitle}>DETALHES</Text>
            </View>
            <View style={styles.itemDescription}>
                <Image source={{uri: props.item.images.icon}} style={{width: 200, height: 200,}}/>
                <Text style={[styles.textStyle, {fontSize: 35}]}>{props.item.name}</Text>
                <Text style={[styles.textStyle, {fontSize: 20}]}>"{props.item.description}"</Text>
                <View style={[styles.itemRarity, {backgroundColor: GetItemRarity(props.item.rarity).color}]}>
                    <Text style={styles.itemRarityText}>{GetItemRarity(props.item.rarity).rarity}</Text>
                </View>
                <View style={{alignItems:"center", justifyContent: "center", flexDirection: "row"}}>
                    <Image source={{ uri: 'https://image.fnbr.co/price/icon_vbucks.png' }} style={{ width: 30, height: 30 }} />
                    <Text style={[styles.textStyle, {fontSize: 25}]}>{props.item.price}</Text>
                </View>
            </View>

            <View style={styles.footerItem}>
                <Text style={[styles.textStyle, {fontSize: 20}]}>Visto pela última vez: {moment(props.item.history.lastSeen).format("DD/MM/YYYY")}</Text>
                <Text style={[styles.textStyle, {fontSize: 20}]}>Data de lançamento: {moment(props.item.history.firstSeen).format("DD/MM/YYYY")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        backgroundColor: '#2D3031',
    },

    containerTop: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 20,
    },

    textTitle: {
        fontFamily: "Dangrek_400Regular",
        color: "white",
        fontSize: 17,
        textAlign: "center",
        marginLeft: 10,
    },

    itemDescription: {
        justifyContent: "center",
        alignItems: "center",
        flex: 2
    },

    textStyle: {
        fontFamily: 'Dangrek_400Regular',
        color: 'white',
        textAlign: "center",
    },

    itemRarity: {
        margin: 10,
        width: 120, 
        height: 40, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    itemRarityText: {
        fontFamily: "Dangrek_400Regular",
        fontSize: 20,
        color: 'white',
        textTransform: "uppercase"
    },

    footerItem: {
        alignItems: "center", 
        justifyContent: "flex-end", 
        flex: 1,
        marginBottom: 20
    }
});

export default DescriptionItem