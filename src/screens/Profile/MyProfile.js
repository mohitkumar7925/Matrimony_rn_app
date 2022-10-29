import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../../components/Button';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import fonts from '../../values/styles';

export const MyProfile = () => {
  return (
    <Wrapper>
      <Text
        style={{
          ...fonts.t_m,
          fontSize: 16,
          marginTop: 10,
        }}>
        Your profile is ready
      </Text>

      <View
        style={{
          borderRadius: 10,
          backgroundColor: Colors.background,
          padding: 10,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/profile.png')}
          style={{
            width: 70,
            height: 70,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
          }}>
          <Text style={{...fonts.t_m}}>K. Suma Sharon</Text>

          <Text style={{...fonts.t_m, fontSize: 12}}>
            24yrs , 5ft 3in , vishakhapatnam, Andra Pradesh, India, Working, MBA
          </Text>

          <Text
            style={{
              ...fonts.t_m,
              fontSize: 12,
              color: Colors.primary,
              marginTop: 5,
            }}>
            Chat Now
          </Text>
        </View>
      </View>
    </Wrapper>
  );
};
