import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import {Chip} from 'react-native-paper';
import {Button} from '../../components/Button';
import {Option} from '../../components/Option';
import {InputBox} from '../../components/InputBox';
import {Section} from '../../components/Section';
import {Wrapper} from '../../components/Wrapper';
import fonts from '../../values/styles';
import {BASE_URL} from '../../values/URL';

export const About = ({navigation, route}) => {
  // console.log(route.params);
  const physical_status_values = ['Normal', 'Physically Challenged'];
  const family_status_values = [
    'Rich',
    'Middle Class',
    'Upper Middle Class',
    'Lower Class',
  ];
  const family_type_values = ['Nuclear Family', 'Joint Family'];
  const employedIn_values = [
    'Govt Job',
    'Private Job',
    'Self Employed',
    'Not Employed',
  ];
  const height_values = [
    '3ft6in - 4ft',
    '4ft - 4ft6in',
    '4ft6in - 5ft',
    '5ft - 5ft6in',
    '5ft6in - 6ft',
    '6ft - 6ft6in',
    '6ft6in - 7ft',
  ];

  const [isLoading, setIsLoading] = useState(false);

  const profile = route.params?.profile
  
  const [about_data, setAbout_data] = useState({
    family_type: profile?.family_type || family_type_values[0],
    physical_status: profile?.physical_status || physical_status_values[0],
    family_status: profile?.family_status || family_status_values[0],
    education: profile?.education || '',
    employed_in: profile?.employed_in || employedIn_values[0],
    occupation: profile?.occupation || '',
    salary: profile?.salary || '',
    height: profile?.height || height_values[0],
    religious_value: profile?.religious_value || '',
    about_me: profile?.about_me || '',
  });

  const register = async () => {
    let {
      education,
      employed_in,
      occupation,
      salary,
      height,
      religious_value,
      about_me,
    } = about_data;

    if (
      education != '' &&
      employed_in != '' &&
      occupation != '' &&
      salary != '' &&
      height != '' &&
      religious_value != '' &&
      about_me != ''
    ) {
      setIsLoading(true);
      let fcm = await AsyncStorage.getItem('fcm');
      let data = {
        ...about_data,
        ...route.params.data,
        fcm:fcm,
        update:route.params?.update,
        profile:route.params?.profile
      };
      console.log(data);

      fetch(BASE_URL + 'save.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setIsLoading(false);
          if (res?.status) {
            console.log('STATUS TRUE ...');
            AsyncStorage.setItem('data',JSON.stringify(res.data))
            Alert.alert('Great',route?.params?.update ? 'Your profile has been updated.':res?.message || 'Your Account has been created',[{
              text:'Okay',
              onPress:()=>navigation.reset({
                index:0,
                routes:[{
                  name:'Main'
                }]
              })
            }],{cancelable:false})

            
            
          } else {
            alert(res.message || 'Something went wrong');
          }
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    } else {
      alert('Please enter all the details');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Wrapper>
        <Text
          style={{
            ...fonts.t_m,
            fontSize: 16,
            marginTop: 10,
          }}>
          Let us know about you
        </Text>

        <InputBox
          placeholder={'Education'}
          onChange={value => {
            setAbout_data(prev => {
              return {...prev, education: value};
            });
          }}
          value={about_data?.education}
        />
        {/* <InputBox
        placeholder={'Employed In'}
        onChange={value => {
          setAbout_data(prev => {
            return {...prev, employed_in: value};
          });
        }}
        
      /> */}

        <Section title={'Employed In'} style={{flexDirection: 'row'}}>
          {employedIn_values.map((item, index) => {
            return (
              <Option
                text={item}
                onPress={() =>
                  setAbout_data(prev => {
                    return {...prev, employed_in: item};
                  })
                }
                selected={about_data.employed_in == item}
              />
            );
          })}
        </Section>

        <InputBox
          placeholder={'Occupation'}
          onChange={value => {
            setAbout_data(prev => {
              return {...prev, occupation: value};
            });
          }}
          value={about_data?.occupation}
        />
        <InputBox
          placeholder={'Salary ( per month )'}
          label="Salary"
          keyboardType='numeric'
          value={about_data?.salary}
          onChange={value => {
            setAbout_data(prev => {
              return {...prev, salary: value};
            });
          }}
        />

        <Section title={'Height'} style={{flexDirection: 'row'}}>
          {height_values.map((item, index) => {
            return (
              <Option
                text={item}
                onPress={() =>
                  setAbout_data(prev => {
                    return {...prev, height: item};
                  })
                }
                selected={about_data.height == item}
              />
            );
          })}
        </Section>

        <Section title={'Family Type'} style={{flexDirection: 'row'}}>
          {family_type_values.map((item, index) => {
            return (
              <Option
                key={item}
                text={item}
                onPress={() =>
                  setAbout_data({...about_data, family_type: item})
                }
                selected={about_data.family_type == item}
              />
            );
          })}
        </Section>
        <Section title={'Family Status'} style={{flexDirection: 'row'}}>
          {family_status_values.map((item, index) => {
            return (
              <Option
                key={item}
                text={item}
                onPress={() =>
                  setAbout_data({...about_data, family_status: item})
                }
                selected={about_data.family_status == item}
              />
            );
          })}
        </Section>
        <Section title={'Physical Status'} style={{flexDirection: 'row'}}>
          {physical_status_values.map((item, index) => {
            return (
              <Option
                key={item}
                text={item}
                onPress={() =>
                  setAbout_data({...about_data, physical_status: item})
                }
                selected={about_data.physical_status == item}
              />
            );
          })}
        </Section>
        <InputBox
          placeholder={'Religious Values'}
          value={about_data?.occupation}
          onChange={value => {
            setAbout_data(prev => {
              return {...prev, religious_value: value};
            });
          }}
        />
        <InputBox
          placeholder={'About Me'}
          value={about_data?.about_me}
          onChange={value => {
            setAbout_data(prev => {
              return {...prev, about_me: value};
            });
          }}
        />

        <Button
          text={'Continue'}
          // onPress={() => navigation.navigate('Profile')}
          onPress={() => register()}
          style={{marginTop: '10%'}}
        />
      </Wrapper>
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
    </View>
  );
};
