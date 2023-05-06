import { StyleSheet, View, Text, ScrollView, Image } from "react-native"

const ScrollViewItems = props =>{  
    return(
    <ScrollView>
        <View style={styles.containerItems}>
            {props.items?.map((item, index) => (
                <View key={index} style={styles.items} onPress={{}}>
                <Image source={{uri: item.images.icon}} style={{width: 100, height: 110,}}/>
                <Text style={styles.textItems}>{item.name}</Text>

                <View style={{justifyContent: 'center', flexDirection: 'row'}}>  
                    <Image source={{uri: 'https://image.fnbr.co/price/icon_vbucks.png'}} style={{width: 20, height: 20}}/>
                    <Text style={styles.textItems}>{item.price}</Text>
                </View>
                </View>
                ))
            }
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
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
})

export default ScrollViewItems