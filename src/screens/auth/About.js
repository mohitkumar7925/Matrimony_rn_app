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

export const About = ({navigation}) => {
  const physical_status_values = ['Normal', 'Physically Challenged'];
  const family_status_values = [
    'Rich',
    'Middle Class',
    'Upper Middle Class',
    'Lower Class',
  ];
  const family_type_values = ['Nuclear Family', 'Joint Family'];

  const [about_data, setAbout_data] = useState({
    family_type: family_type_values[0],
    physical_status: physical_status_values[0],
    family_status: family_status_values[0],
  });

  return (
    <Wrapper>
      <Text
        style={{
          ...fonts.t_m,
          fontSize: 16,
          marginTop: 10,
        }}>
        Let us know about you
      </Text>

      <InputBox placeholder={'Education'} />
      <InputBox placeholder={'Employed In'} />
      <InputBox placeholder={'Occupation'} />
      <InputBox placeholder={'Income'} />
      <InputBox placeholder={'Height'} />

      <Section title={'Family Type'} style={{flexDirection: 'row'}}>
        {family_type_values.map((item, index) => {
          return (
            <Option
              key={item}
              text={item}
              onPress={() => setAbout_data({...about_data, family_type: item})}
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
      <InputBox placeholder={'Religious Values'} />
      <InputBox placeholder={'About Me'} />

      <Button
        text={'Continue'}
        onPress={() => navigation.navigate('Profile')}
        style={{marginTop: '10%'}}
      />
    </Wrapper>
  );
};
