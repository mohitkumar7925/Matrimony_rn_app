import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, View, DatePicker} from 'react-native';
import {TextInput} from 'react-native-paper';
import fonts from '../values/styles';
import {useForm, Controller} from 'react-hook-form';
const _fontConfig = {
  regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
  },
  medium: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 'normal',
  },
  light: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 'normal',
  },
  thin: {
      fontFamily: 'Montserrat-Thin',
      fontWeight: 'normal',
  },
};
export const InputBox = React.forwardRef(
  (
    {
      placeholder,
      label,
      maxLength,
      pattern,
      minLength,
      keyboardType,
      value,
      onChange,
      blurOnSubmit = false,
      onSubmitEditing,
      secureTextEntry
    },
    ref,
  ) => {
    return (
      <View
        style={{
          marginTop: 20,
        }}>
        <>
          <TextInput
            ref={ref}
            placeholder={placeholder}
            value={value}
            // blurOnSubmit={blurOnSubmit}
            // onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            label={label || placeholder}
            mode="outlined"
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            // theme={{}}
            
            // theme={{ fonts: { regular: 'Apple Color Emoji' } }}
            onChangeText={onChange}
          />
        </>
      </View>
    );
  },
);
