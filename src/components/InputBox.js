import React, {useState} from 'react';
import {Text, TouchableOpacity, View , DatePicker  } from 'react-native';
import {TextInput} from 'react-native-paper';
import fonts from '../values/styles';
import {useForm, Controller} from 'react-hook-form';

export const InputBox = ({
  placeholder,
  label,
  maxLength,
  pattern,
  minLength,
  keyboardType,
  value,
  onChange
  
}) => {


  return (
    <View
      style={{
        marginTop: 20,
      }}>
       <>
              <TextInput
                placeholder={placeholder}
                value={value}
                keyboardType={keyboardType}
                label={label || placeholder}
                mode="outlined"
                maxLength={maxLength}
                style={{
                  //   padding: 0,
                  ...fonts.t_m,
                  //   backgroundColor:'transparent'
                }}
                onChangeText={onChange}
              />
             
            </>
    </View>
  );
};
