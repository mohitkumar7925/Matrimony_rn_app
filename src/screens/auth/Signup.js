import React, {createRef, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
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

export const Signup = ({navigation, route}) => {
  let profile = route?.params?.profile;
  const width = Dimensions.get('window').width;
  const married_values = ['Unmarried', 'Widower', 'Separated', 'Divorced'];
  const gender_values = ['Male', 'Female'];
  const [date_modal, setDate_modal] = useState(false);
  const [s_date, setS_date] = useState('');
  // let refs = {
  //   name:createRef(),
  //   father_name:createRef(),
  //   mother_name:createRef(),
  //   email:createRef(),
  //   password:createRef(),
  //   mobile:createRef(),
  //   division:createRef()
  // };

  // const nextFocus = value => {
  //   refs[value].current.focus();
  // };

  const [user, setUser] = useState({
    marital: profile?.marital_status || married_values[0],
    gender: profile?.gender || gender_values[0],
    name: profile?.name || '',
    dob: profile?.dob || '',
    age: profile?.age || '',
    email: profile?.email || '',
    mobile: profile?.mobile || '',
    password: profile?.password || '',
    division: profile?.division || '',
    denomination: profile?.denomination || '',
    father_name: profile?.father_name || '',
    mother_name: profile?.mother_name || '',
  });

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const submit = () => {
    // navigation.navigate('Residence')
    console.log(user);
    let {
      denomination,
      dob,
      division,
      email,
      gender,
      marital,
      age,
      mobile,
      name,
      password,
      father_name,
      mother_name,
    } = user;

    if (
      (denomination != '' &&
        dob != '' &&
        division != '' &&
        email != '' &&
        age != '') ||
      (age != '0' &&
        mobile != '' &&
        name != '' &&
        password != '' &&
        father_name != '' &&
        mother_name != '')
    ) {
      if (mobile.length > 9) {
        if (validateEmail(email)) {
          // alert('done')
          navigation.navigate('Residence', {...route.params, data: user});
        } else {
          alert('Please enter valid email ID');
        }
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
        {route?.params?.update
          ? "Let's update your profile"
          : "Let's Create your profile first"}
      </Text>

      <Section title={'Gender'} style={{flexDirection: 'row'}}>
        {gender_values.map((item, index) => {
          return (
            <Option
              text={item}
              onPress={() => setUser({...user, gender: item})}
              selected={user.gender == item}
            />
          );
        })}
      </Section>

      <Section title={'Marital Status'} style={{flexDirection: 'row'}}>
        {married_values.map((item, index) => {
          return (
            <Option
              text={item}
              onPress={() => setUser({...user, marital: item})}
              selected={user.marital == item}
            />
          );
        })}
      </Section>

      <InputBox
        // onSubmitEditing={() => nextFocus('father_name')}
        value={user.name}
        onChange={val =>
          setUser(prev => {
            return {...prev, name: val};
          })
        }
        name={'name'}
        placeholder={'Name'}
      />
      <InputBox
        // ref={refs['father_name']}
        // onSubmitEditing={() => nextFocus('mother_name')}
        value={user.father_name}
        onChange={val =>
          setUser(prev => {
            return {...prev, father_name: val};
          })
        }
        name={'father name'}
        placeholder={'Father Name'}
      />
      <InputBox
        // ref={refs['mother_name']}
        // onSubmitEditing={()=>setDate_modal(true)}
        blurOnSubmit={false}
        value={user.mother_name}
        onChange={val =>
          setUser(prev => {
            return {...prev, mother_name: val};
          })
        }
        name={'name'}
        placeholder={'Mother Name'}
      />

      <TouchableOpacity onPress={() => setDate_modal(true)}>
        <TextInput
          value={user?.dob?.toString()}
          editable={false}
          mode="outlined"
          style={{
            marginTop: 20,
          }}
          placeholder="Date of Birth"
          label={'Date of birth'}
        />
      </TouchableOpacity>
      <InputBox
        label={'Age'}
        value={user.age}
        placeholder={'eg.25'}
        maxLength={2}
        keyboardType="numeric"
        onChange={val =>
          setUser(prev => {
            return {...prev, age: val};
          })
        }
      />
      <InputBox
        value={user.email}
        // ref={refs['email']}
        // onSubmitEditing={() => nextFocus('mobile')}
        onChange={val =>
          setUser(prev => {
            return {...prev, email: val};
          })
        }
        name={'email'}
        placeholder={'Email ID'}
      />
      {!route?.params?.update && (
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
      )}
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
      <InputBox
        // ref={refs['division']}
        value={user.division}
        onChange={val =>
          setUser(prev => {
            return {...prev, division: val};
          })
        }
        name={'division'}
        placeholder={'Division'}
      />
      <DropdownComponent
        onValueChange={item =>
          setUser(prev => {
            return {...prev, denomination: item.value};
          })
        }
        data={Denomination_data}
        placeholder="Denomination"
      />
      {/* <InputBox
        control={control}
        errors={errors}
        values={married_values}
        name={'denomination'}
        placeholder={'Denomination'}
      /> */}

      <Button
        onPress={() => submit()}
        text={'Continue'}
        style={{marginTop: '10%'}}
      />
      <DatePicker
        modal
        open={date_modal}
        mode="date"
        date={new Date()}
        maximumDate={new Date()}
        onConfirm={date => {
          setDate_modal(false);
          console.log(
            date.getFullYear() +
              '-' +
              (date.getMonth() + 1) +
              '-' +
              date.getDate(),
          );
          setUser(prev => {
            return {
              ...prev,
              dob:
                date.getFullYear() +
                '-' +
                (date.getMonth() + 1) +
                '-' +
                date.getDate(),
            };
          });
          // nextFocus('email')
          // setS_date(date.toLocaleDateString());
        }}
        onCancel={() => {
          setDate_modal(false);
        }}
      />
    </Wrapper>
  );
};
