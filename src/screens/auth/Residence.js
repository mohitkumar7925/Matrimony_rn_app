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

export const Residence = ({navigation , route}) => {
  
  const profile = route.params?.profile
  
  const [res, setres] = useState({
    citizenship:profile?.citizenship || '',
    country: profile?.country || '',
    state: profile?.state || '',
    city: profile?.city ||  '',
    ...route.params.data
  });

  const submit = () =>{
    console.log(res);
    let { citizenship , city, state, country } = res;

    // navigation.navigate('About')
    if(citizenship !='' && city != '' && state !='' && country!=''){

      navigation.navigate('About',{...route.params,data:res})

    }
    else{
      alert('Please enter all the detail')
    }


  }




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

      <InputBox
        onChange={value => {
          setres(prev => {
            return {...prev, citizenship: value};
          });
        }}
        value={res?.citizenship}
        placeholder={'Citizenship'}
      />
      <InputBox
        onChange={value => {
          setres(prev => {
            return {...prev, country: value};
          });
        }}
        value={res?.country}
        placeholder={'Country'}
      />
      <InputBox
        onChange={value => {
          setres(prev => {
            return {...prev, state: value};
          });
        }}
        value={res?.state}
        placeholder={'State'}
      />
      <InputBox
        onChange={value => {
          setres(prev => {
            return {...prev, city: value};
          });
        }}
        value={res?.city}
        placeholder={'City'}
      />

      <Button
        text={'Continue'}
        onPress={() => submit()}
        style={{marginTop: '10%'}}
      />
    </Wrapper>
  );
};
