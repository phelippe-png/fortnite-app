import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const DescriptionItem = props => {
    return(
        <View style={styles.container}>
            <Ionicons name='close' size={60} color={'white'} style={{padding: 20}} onPress={() => props.close(false)}></Ionicons>
            <View style={styles.itemDescription}>
                <Image source={{uri: props.item.images.icon}} style={{width: 150, height: 150,}}></Image>
                <Text style={[styles.textStyle, {fontSize: 35}]}>{props.item.name}</Text>
                <Text style={[styles.textStyle, {fontSize: 20}]}>"{props.item.description}"</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        backgroundColor: '#2D3031'
    },

    itemDescription: {
        justifyContent: "center",
        alignItems: "center",
    },

    textStyle: {
        fontFamily: 'Dangrek_400Regular',
        color: 'white',
    }
});

export default DescriptionItem