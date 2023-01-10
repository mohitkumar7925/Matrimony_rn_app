import React, {useEffect, useState} from 'react';
import {AsyncStorage, Dimensions, Image, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {InputBox} from '../../components/InputBox';
import {Wrapper} from '../../components/Wrapper';
import Images from '../../values/Images';
import fonts from '../../values/styles';

export const Login = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem('data')
    .then(res=>{
      console.log(res);
      if(res){
        setTimeout(() => {
          
          navigation.reset({
            index:0,
            routes:[{
              name:'Main'
            }]
          })
        }, 1000);
      }
      else{
        setIsLogin(false)
      }
    })
    .catch(err=>{
      setIsLogin(false)
      console.log(err);
    })
  }, []);

  return (
    <Wrapper>
      <View style={{alignItems: 'center', marginTop: '20%'}}>
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
     {
      !isLogin &&
      <View style={{marginTop: '25%'}}>
        <Button text={'Login'} onPress={() => navigation.navigate('SignIn')} />
        <Text
          style={{
            ...fonts.t_r,
            marginTop: 15,
          alignSelf: 'center',
            fontSize: 12,
          }}>
          OR
        </Text>
        <Button
          text={'Signup'}
          onPress={() => navigation.navigate('Signup')}
          outline
        />
      </View>}
    </Wrapper>
  );
};
