import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

export default function Card(props) {
    return (
       <View style={[style.card , props.style]}>
           {
               props.children
           }
       </View>
    )
}

const style = StyleSheet.create({
    card : {
        height : "auto",
        width : Dimensions.get('window').width-20,
        margin : 10,
        padding : 10,
        elevation : 2,
        backgroundColor : "#e1e1e1",
        borderRadius : 5
    }
})