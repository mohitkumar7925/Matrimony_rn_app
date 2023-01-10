import React from 'react';
import {AsyncStorage, Image, Text, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button} from '../../components/Button';
import {Wrapper} from '../../components/Wrapper';
import fonts from '../../values/styles';
import {BASE_URL, BASE_URL_IMAGE} from '../../values/URL';

export const Profile = ({navigation, route}) => {
  const submit = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.6,
    });

    if (result.didCancel) {
    } else {
      console.log(result);

      let formData = new FormData();

      let localUri = result.assets[0].uri;
      let filename = localUri.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let uploadfile = {
        uri: localUri,
        name: filename,
        type: type,
      }
      console.log('upload file ',uploadfile);
      formData.append('uploadfile', uploadfile);

      formData.append('mobile', route.params.user.mobile);
      formData.append('password', route.params.user.password);
      // formData.append('uploadfile[0]',result.assets[0]);
      console.log(formData);
      fetch(BASE_URL + 'update_profile.php', {
        method: 'post',
        body: formData,
      })
        .then(res => res.json())
        .then(res => {
          if(res?.status){
            AsyncStorage.setItem('data',JSON.stringify(res?.data))
            navigation.pop()
          }
          else{
            alert(res?.message || 'Something went wrong')
          }
          console.log(res);
        })
        .catch(err => {
          alert('Something went wrong')
          console.log(err);
        });
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
        Add a profile photo
      </Text>

      <Image
        source={route?.params?.user?.profile_pic != ''  ? {uri : BASE_URL_IMAGE +  route.params?.user?.profile_pic } : require('../../../assets/profile.png')}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: '20%',
        }}
        resizeMode="cover"
      />

      <Button
        onPress={() => {
          submit();
        }}
        text={'Upload profile picture'}
        style={{
          marginTop: '10%',
        }}
      />
    </Wrapper>
  );
};
