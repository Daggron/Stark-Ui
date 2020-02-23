import React from 'react'
import { View , StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

const Header = (props)=>{

    if(props.title){
        return(
            <View style={[style.conatiner , props.style ]}>
                <TouchableOpacity onPress={props.onPress}>
                    <Text>
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if(props.children){
        return(
            <View style={[style.conatiner , props.style ]}>
                {
                    props.children
                }
            </View>
        )
    }
    return(
        <View style={[style.conatiner , props.style ]}>
            <Text>
                Header
            </Text>
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