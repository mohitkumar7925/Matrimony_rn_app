import React, {useState} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {Chip} from 'react-native-paper';
import {Button} from '../../components/Button';
import {Option} from '../../components/Option';
import {InputBox} from '../../components/InputBox';
import {Section} from '../../components/Section';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import Images from '../../values/Images';
import fonts from '../../values/styles';

export const Residence = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const married_values = ['Unmarried', 'Widower', 'Separated', 'Divorced'];
  const gender_values = ['Male', 'Female'];

  const [user, setUser] = useState({
    marital: married_values[0],
    gender: gender_values[0],
  });

  return (
    <Wrapper>
      <Text
        style={{
          ...fonts.t_m,
          fontSize: 16,
          marginTop: 10,
        }}>
        Where are you from ?
      </Text>

      <InputBox placeholder={'Citizenship'} />
      <InputBox placeholder={'Country'} />
      <InputBox placeholder={'State'} />
      <InputBox placeholder={'City'} />

      <Button text={'Continue'} 
      onPress={()=>navigation.navigate('About')}
      style={{marginTop: '10%'}} />
    </Wrapper>
  );
};
