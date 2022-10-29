import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../values/Colors';

export const Wrapper = ({children}) => {
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: Colors.background}}
      contentContainerStyle={{
        padding:15
      }}
      >
      {children}
    </KeyboardAwareScrollView>
  );
};
