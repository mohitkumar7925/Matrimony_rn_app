import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import { Button } from '../../components/Button';
import {Wrapper} from '../../components/Wrapper';
import fonts from '../../values/styles';

export const Profile = ({navigation}) => {
  return (
    <Wrapper>
      <Text
        style={{
          ...fonts.t_m,
          fontSize: 16,
          marginTop: 10,
        }}>
        Add a profile photo
      </Text>

        <Image
          source={require('../../../assets/profile.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf:'center',
            marginTop:'20%'
            
          }}
          resizeMode="contain"
        />

      <Button
      onPress={()=>navigation.reset({
        index:0,
        routes:[{
          name:'Main'
        }]
      })}
      text={'Upload profile picture'}
      style={{
        marginTop:'10%'
      }}
      />





    </Wrapper>
  );
};
