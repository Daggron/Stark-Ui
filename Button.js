import React from 'react'
import { TouchableOpacity, StyleSheet , Text, View } from 'react-native'

const Button = (props)=>{
    
    const [color , setColor ] = React.useState(props.color);

    React.useEffect(()=>{
        switch(props.color){
            case "primary":
                return setColor("#1b1b");
            case "secondary":
                return setColor("#750D37");
            case "dark":
                return setColor("#210124");
            case "pine":
                return  setColor('#B3DEC1')
            case "sky":
                return setColor("#E5FCF5")
            default :
                return setColor("#e1e1e1");
        }
    },[props.color])

    if(props.title){
        return(
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[style.button, {backgroundColor : color },props.style ]}>
                    {props.title}
                </Text>
         </TouchableOpacity>
        )
    }
    else if(props.children){
        return(
            <TouchableOpacity onPress={props.onPress}>
            <View style={[style.button , {backgroundColor : color } , props.style]}>
                {props.children}
            </View>
            </TouchableOpacity>
        )
    }else{
        return <React.Fragment />
    }
}

const style= StyleSheet.create({
    button : {
        padding : 20,
        backgroundColor : "#e1e1e1",
        borderRadius : 10,
    }
})


export default Button;