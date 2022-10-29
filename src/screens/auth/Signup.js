import React, {useState} from 'react';
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

export const Signup = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const married_values = ['Unmarried', 'Widower', 'Separated', 'Divorced'];
  const gender_values = ['Male', 'Female'];
  const [date_modal, setDate_modal] = useState(false);
  const [s_date, setS_date] = useState('');

  const [user, setUser] = useState({
    marital: married_values[0],
    gender: gender_values[0],
    name: '',
    dob: '',
    email: '',
    mobile: '',
    password: '',
    division: '',
    denomation: '',
  });

  let dmy =
    '(((0[1-9])|([12][0-9])|(3[01]))-((0[0-9])|(1[012]))-((20[012]d|19dd)|(1d|2[0123])))';

  const submit = () => {
    let {
      denomation,
      dob,
      division,
      email,
      gender,
      marital,
      mobile,
      name,
      password,
    } = user;

    if(
      denomation != '' &&
      dob != '' &&
      division != '' &&
      email != '' &&
      gender != '' &&
      marital != '' &&
      mobile != '' &&
      name != '' &&
      password != '' 
      
    ){










    }
    else{
      alert('Please enter all the details')

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
        value={user.name}
        onChange={val =>
          setUser(prev => {
            return {...prev, name: val};
          })
        }
        name={'name'}
        placeholder={'Name'}
      />

      <TouchableOpacity onPress={() => setDate_modal(true)}>
        <TextInput
          value={s_date?.toString()}
          editable={false}
          mode="outlined"
          style={{
            marginTop: 20,
          }}
          placeholder="Date of Birth"
          label={'Date of birth'}
        />
      </TouchableOpacity>
      {/* <InputBox
        control={control}
        errors={errors}
        keyboardType="numeric"
        pattern={dmy}
        label="Date Of Birth"
        name={'dob'}
        placeholder={'DD-MM-YYYY'}
      /> */}
      <InputBox
        value={user.email}
        onChange={val =>
          setUser(prev => {
            return {...prev, email: val};
          })
        }
        name={'email'}
        placeholder={'Email ID'}
      />
      <InputBox
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
        value={user.password}
        onChange={val =>
          setUser(prev => {
            return {...prev, password: val};
          })
        }
        name={'password'}
        placeholder={'Password'}
      />
      <InputBox
        value={user.division}
        onChange={val =>
          setUser(prev => {
            return {...prev, division: val};
          })
        }
        name={'division'}
        placeholder={'Division'}
      />
      <DropdownComponent data={Denomination_data} placeholder="Denomination" />
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
          setS_date(date.toLocaleDateString());
        }}
        onCancel={() => {
          setDate_modal(false);
        }}
      />
    </Wrapper>
  );
};
