import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '../../components/Button';
import {Wrapper} from '../../components/Wrapper';
import Colors from '../../values/Colors';
import fonts from '../../values/styles';
import {BASE_URL, BASE_URL_IMAGE} from '../../values/URL';
let DEFAULT_IMAGE = require('../../../assets/profile.png')
export const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldLoading , setShouldLoading] = useState(true)
  const getData = async () => {
    try {
      setIsLoading(true);
      let user = JSON.parse(await AsyncStorage.getItem('data'));
      console.log(user);
      let res = await fetch(BASE_URL + 'fetch_all.php', {
        method: 'post',
        body: JSON.stringify({
          user_id: user.user_id,
          mobile: user.mobile,
          password: user.password,
        }),
      });

      let response = await res.json();
      console.log(response); 
      if (response.status) {
        setList(response.data);
        setShouldLoading(false)
        await AsyncStorage.setItem('data' , JSON.stringify(response.user));
        if( response?.user?.profile_pic == '' ){
            
            navigation.navigate('Profile',{user : response?.user})
          
        }
      } else {
        setShouldLoading(true)
        setList([]);
      }
      setIsLoading(false);
      // console.log(response);
    } catch (error) {
      console.log(error);
      setShouldLoading(true)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData()
  
  }, [])
  
  // useFocusEffect(
  //   useCallback(() => {
  //     getData();
  //   }, []),
  // );


  return (
    <View style={{flex: 1}}>
      <Wrapper>
        <Text
          style={{
            ...fonts.t_m,
            fontSize: 16,
            marginTop: 10,
          }}>
          Welcome, we have some matches for you
        </Text>

        {list.map((item, index) => {
          return (
            <View
            key={item.user_id}
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
                source={item?.profile_pic != '' ? {uri : BASE_URL_IMAGE +  item?.profile_pic} : DEFAULT_IMAGE}
                style={{
                  width: 70,
                  height: 70,
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  flex: 1,
                  paddingLeft: 10,
                }}>
                <Text style={{...fonts.t_m}}>{item.name}</Text>

                <Text style={{...fonts.t_m, fontSize: 12}}>
                  {item.age} yrs , {item.height} , {item.city}, {item.state},{' '}
                  {item.country},{item.education}, {item.occupation}
                </Text>

                <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Explore',{user:item})
                }}
                >
                  <Text
                    style={{
                      ...fonts.t_m,
                      fontSize: 12,
                      color: Colors.primary,
                      marginTop: 5,
                    }}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </Wrapper>
      {isLoading && shouldLoading && (
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
    </View>
  );
};
