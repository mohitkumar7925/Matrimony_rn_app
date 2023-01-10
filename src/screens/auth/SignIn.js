import React, {createRef, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert, AsyncStorage, Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {Chip, TextInput} from 'react-native-paper';
import {Button} from '../../components/Button';
import {Option} from '../../components/Option';
import {InputBox} from '../../components/InputBox';
import {Section} from '../../components/Section';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import Images from '../../values/Images';
import fonts from '../../values/styles';
import {useForm} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import DropdownComponent from '../../components/Dropdown';
import {Denomination_data} from '../../values/Static_data';
import {BASE_URL} from '../../values/URL';

export const SignIn = ({navigation}) => {
  const [user, setUser] = useState({
    mobile: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false)
 
  

  const submit = async () => {
    // navigation.navigate('Residence')
    console.log(user);
    let {mobile, password} = user;
    let fcm = await AsyncStorage.getItem('fcm')
    console.log('saved fcm',fcm);
    if (mobile != '' && password != '') {
      if (mobile.length > 9) {
        fetch(BASE_URL + 'login.php', {
          method: 'post',
          body: JSON.stringify({mobile, password,fcm:fcm}),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            setIsLoading(false);
            if (res.status) {
              AsyncStorage.setItem('data',JSON.stringify(res.data))
              Alert.alert('Welcome Back', 'Successfully Login', [
                {
                  text: 'Ok',
                  onPress: () =>
                    navigation.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'Main',
                        },
                      ],
                    }),
                    
                },
              ],
              {
                cancelable:false,
  
              }
              );
            } else {
              alert(res.message || 'Something went wrong');
            }
          })
          .catch(err => {
            console.log('error', err);
          });

        // navigation.navigate('Residence', {data: user});
      } else {
        alert('Please enter valid mobile number');
      }
    } else {
      alert('Please enter all the details');
    }
  };

  return (
    <Wrapper>
      <Text
        style={{
          ...fonts.t_m,
          fontSize: 16,
          marginTop: 10,
        }}>
        Let's Create your profile first
      </Text>

      <InputBox
        // ref={refs['mobile']}
        // onSubmitEditing={() => nextFocus('password')}
        value={user.mobile}
        onChange={val =>
          setUser(prev => {
            return {...prev, mobile: val};
          })
        }
        keyboardType="number-pad"
        maxLength={10}
        name={'mobile'}
        placeholder={'Mobile Number'}
      />
      <InputBox
        // ref={refs['password']}
        // onSubmitEditing={()=>nextFocus('division')}
        value={user.password}
        onChange={val =>
          setUser(prev => {
            return {...prev, password: val};
          })
        }
        secureTextEntry={true}
        name={'password'}
        placeholder={'Password'}
      />

      <Button
        onPress={() => submit()}
        text={'Continue'}
        style={{marginTop: '10%'}}
      />
        {isLoading && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#0008',
            width: Dimensions.get('screen').width,
            height: Dimensions.get('window').height,
            top: 0,
            left: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}>
          <ActivityIndicator animating size={30} />
        </View>
      )}
    </Wrapper>
  );
};
