import React, {useEffect} from 'react';
import {Alert, AsyncStorage} from 'react-native';
import {configureFonts, DefaultTheme, Provider} from 'react-native-paper';
import Router from './Router';
import messaging from '@react-native-firebase/messaging';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Montserrat-Thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }

    messaging()
      .getToken()
      .then(fcm => {
        console.log('fcm token :::::: ', fcm);
        AsyncStorage.setItem('fcm', fcm);
      })
      .catch(err => {
        console.log('error in getToken ', err);
      });
  }

  useEffect(() => {
    requestUserPermission();

    let subscribe = messaging().onMessage(msg => {
      console.log(msg);
      Alert.alert(msg.notification.title, msg.notification.body, [
        {
          text: 'Okay',
        },
      ]);
    });

    return subscribe;
  }, []);

  return (
    // <SafeAreaView >
    <Provider
      theme={{
        ...DefaultTheme,
        fonts: {
          ...DefaultTheme.fonts,
          ...fontConfig.default,
          bodyMedium: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            fontWeight: 'normal',
            letterSpacing: 0,
            lineHeight: 40,
          },
          bodyLarge: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            fontWeight: 'normal',
            letterSpacing: 0,
            lineHeight: 40,
          },
          bodySmall: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            fontWeight: 'normal',
            letterSpacing: 0,
            lineHeight: 40,
          },
        },
      }}>
      <Router />
    </Provider>

    // </SafeAreaView>
  );
};

export default App;
