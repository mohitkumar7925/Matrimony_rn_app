import React from 'react';
import {Text, View} from 'react-native';
import Colors from '../values/Colors';
import fonts from '../values/styles';

export const Section = ({title, children , style}) => {
  return (
    <>
      <Text
        style={{
          ...fonts.t_bo,
          marginTop: 15,
          fontSize:16
        }}>
        {title}
      </Text>
      <View style={{marginTop:10, flexWrap:'wrap' , ...style}}>{children}</View>
    </>
  );
};
