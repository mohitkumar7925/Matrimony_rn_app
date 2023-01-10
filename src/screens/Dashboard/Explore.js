import React, {createRef, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import {TT} from '../../components/TT';
import { BASE_URL_IMAGE } from '../../values/URL';
import fonts from '../../values/styles';

export const Explore = ({navigation, route}) => {
  const user = route.params.user;

  return (
    <Wrapper>
      <View>
        <Text
          style={{
            ...fonts.t_bo,
            fontSize: 16,
            marginTop: 10,
          }}>
          Personal Detail
        </Text>

        <Image
          source={user?.profile_pic != '' ? {uri : BASE_URL_IMAGE +  user?.profile_pic} :  require('../../../assets/profile.png')}
          style={{
            width: 100,
            height: 100,
            marginVertical:10,
          }}
          resizeMode="cover"
          />

        <TT label={'Name'} value={user.name} />
        <TT label={'Father Name'} value={user.father_name} />
        <TT label={'Mother Name'} value={user.mother_name} />
        <TT label={'DOB'} value={user.dob} />
        <TT label={'Mother Tongue'} value={user.mother_tongue} />
        <TT label={'Physical Status'} value={user.physical_status} />
        <TT
          label={'Address'}
          value={`${user.city}, ${user.state}, ${user.country} `}
        />

          <TT label={'Religious Value'} value={user.religious_value} />
          <TT label={'About Me'} value={user.about_me} />
        <Text
        style={{
          ...fonts.t_bo,
          fontSize: 16,
          marginTop: 15,
        }}>
        Family Detail
      </Text>



        <TT label={'Family Type'} value={user.family_type} />
        <TT label={'Family Status'} value={user.family_status} />
        <TT label={'Division'} value={user.division} />
        <TT label={'Denomination'} value={user.denomination} />


        <Text
        style={{
          ...fonts.t_bo,
          fontSize: 16,
          marginTop: 15,
        }}>
        Education & Occupation
      </Text>
        <TT label={'Education'} value={user.education} />
        <TT label={'Employed In'} value={user.employed_in} />
        <TT label={'Occupation'} value={user.occupation} />
      </View>
    </Wrapper>
  );
};
