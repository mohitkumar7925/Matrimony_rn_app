import { useFocusEffect } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '../../components/Button';
import {InputBox} from '../../components/InputBox';
import {TT} from '../../components/TT';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import fonts from '../../values/styles';
import {BASE_URL_IMAGE} from '../../values/URL';

export const MyProfile = ({navigation}) => {
  const [user, setUser] = useState({});




  useFocusEffect(useCallback(
    () => {
      
    AsyncStorage.getItem('data').then(res => {
      console.log('res', res);
      setUser(JSON.parse(res));
    });
    },
    [],
  )
  )
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
          padding: 10,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {user})}>
          <Image
            source={
              user?.profile_pic != ''
                ? {uri: BASE_URL_IMAGE + user?.profile_pic}
                : require('../../../assets/profile.png')
            }
            style={{
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={{...fonts.t_m, fontSize: 18, paddingLeft: 10}}>
          {user?.name}
        </Text>
      </View>
      <TT label={'Name'} value={user?.name} />
      <TT label={'Mobile'} value={user?.mobile} />
      <TT label={'Father Name'} value={user?.father_name} />
      <TT label={'Mother Name'} value={user?.mother_name} />
      <TT label={'DOB'} value={user?.dob} />
      <TT label={'Mother Tongue'} value={user?.mother_tongue} />
      <TT label={'Physical Status'} value={user?.physical_status} />
      <TT
        label={'Address'}
        value={`${user?.city}, ${user?.state}, ${user?.country} `}
      />

      <TT label={'Religious Value'} value={user?.religious_value} />
      <TT label={'About Me'} value={user?.about_me} />
      <Text
        style={{
          ...fonts.t_bo,
          fontSize: 16,
          marginTop: 15,
        }}>
        Family Detail
      </Text>

      <TT label={'Family Type'} value={user?.family_type} />
      <TT label={'Family Status'} value={user?.family_status} />
      <TT label={'Division'} value={user?.division} />
      <TT label={'Denomination'} value={user?.denomination} />

      <Text
        style={{
          ...fonts.t_bo,
          fontSize: 16,
          marginTop: 15,
        }}>
        Education & Occupation
      </Text>
      <TT label={'Education'} value={user?.education} />
      <TT label={'Employed In'} value={user?.employed_in} />
      <TT label={'Occupation'} value={user?.occupation} />
      <TT label={'Salary'} value={user?.salary} />
      <Button  outline={true} text='Edit Profile'
      onPress={()=>navigation.navigate('Signup',{update:true , profile:user})}
      style={{marginTop:20}}/>
      <Button
        text={'Logout'}
        onPress={() =>
          Alert.alert('Logout', 'Are you sure want to logout ? ', [
            {
              text: 'No',
            },
            {
              text: 'Yes',
              onPress: () =>
                AsyncStorage.clear().then(res =>
                  navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'SignIn',
                      },
                    ],
                  }),
                ),
            },
          ])
        }
        style={{marginTop: 30}}
      />
    </Wrapper>
  );
};
