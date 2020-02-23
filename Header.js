import React from 'react'
import { View , StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

const Header = (props)=>{

    if(props.title){
        return(
            <View style={[style.conatiner , props.style ]}>
                <Text>
                    {props.title}
                </Text>
            </View>
        )
    }
    return(
        <View style={[style.conatiner , props.style ]}>
            {
                props.children
            }
        </View>
    )
}

const style = StyleSheet.create({
    conatiner : {
        height : "auto",
        padding : 20,
        width : Dimensions.get('window').width,
        elevation : 3,
        backgroundColor : "#e6891d"
    }
})


export default Header;