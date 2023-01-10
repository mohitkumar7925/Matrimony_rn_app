import React from 'react';
import {Text, View} from 'react-native';
import fonts from '../values/styles';

export const TT = ({label, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop:10
      }}>
      <Text style={{...fonts.t_r, width: '40%'}}>{label}</Text>
      <Text style={{...fonts.t_m, width: '60%'}}>{value}</Text>
    </View>
  );
};
