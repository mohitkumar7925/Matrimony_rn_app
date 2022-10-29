import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../../components/Button';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import fonts from '../../values/styles';

export const Chat = () => {
  return (
    <Wrapper>
      <Text
        style={{
          ...fonts.t_m,
          fontSize: 16,
          marginTop: 10,
        }}>
        All your chat will be shown here
      </Text>

      {[0, 1, 2, 3].map((item, index) => {
        return (
          <View
            style={{
              borderRadius: 10,
              elevation: 4,
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
                width: 50,
                height: 50,
                
                
              }}
              resizeMode="contain"
            />
            <View style={{
                flex:1,
                paddingLeft:10
            }}>
                
                <Text style={{...fonts.t_m}}>
                    K. Suma Sharon
                </Text>

                <Text style={{...fonts.t_m, fontSize:12}}>
                  message
                </Text>

                <Text style={{...fonts.t_m, fontSize:12 , color:Colors.primary, marginTop:5}}>
                1 day ago
                </Text>
                
            </View>
          </View>
        );
      })}
    </Wrapper>
  );
};
