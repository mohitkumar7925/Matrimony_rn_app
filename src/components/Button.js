import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Colors from '../values/Colors'
import fonts from '../values/styles'

export const Button = ({text , onPress , style, outline}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
        borderRadius:28,
        height:55,
        width:'100%',
        borderWidth:1,
        borderColor:Colors.button,
        backgroundColor:outline ? Colors.background : Colors.button,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        ...style
    }}
    >
        <Text style={{
            ...fonts.t_m,
            color:outline ? Colors.button :  '#fff',
            fontSize:18

        }}>
            {text}
            </Text>
    </TouchableOpacity>
  )
}
