import React from 'react';
import {Text, View} from 'react-native';
import {Chip} from 'react-native-paper';
import Colors from '../values/Colors';
import fonts from '../values/styles';

export const Option = ({selected, text, onPress, children, style}) => {
  return (
    <>
      <Chip
        style={{
          borderRadius: 20,
          marginRight: 10,
          marginBottom:10,
          borderColor: Colors.button ,
          borderWidth: selected ? 1 : 0,
        
          ...style
        }}
        textStyle={{
            ...fonts.t_m
        }}
        selected={selected}
        onPress={onPress}
        // elevation={1}
        >
        {text}
      </Chip>
    </>
  );
};
