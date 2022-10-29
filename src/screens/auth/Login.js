import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {InputBox} from '../../components/InputBox';
import {Wrapper} from '../../components/Wrapper';
import Images from '../../values/Images';
import fonts from '../../values/styles';

export const Login = ({navigation}) => {
  const width = Dimensions.get('window').width;


  return (
    <Wrapper>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Image
          source={Images.flower}
          style={{width: width / 4, height: 100}}
          resizeMode="contain"
        />
        <Text
          style={{
            ...fonts.t_m,
            fontSize: 22,
            marginTop: 10,
          }}>
          Matrimony
        </Text>
      </View>

      {/* <InputBox placeholder={'Mobile / Email ID'} />
      <InputBox placeholder={'Password'} /> */}

      <Button text={'Login'} style={{marginTop: '10%'}} />
      <Text style={{
        ...fonts.t_r,
        marginTop:15,
        alignSelf:'center',
        fontSize:12
      }} >OR</Text>
      <Button text={'Signup'} 
      onPress={()=>navigation.navigate('Signup')}
      outline/>
    </Wrapper>
  );
};
