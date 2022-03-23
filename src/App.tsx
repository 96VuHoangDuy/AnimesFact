import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './navigator/RootStack/RootStack';
import SetupAPI from 'api/api.config';

const App = () => {
  useEffect(() => {
    SetupAPI.init();
    SetupAPI.setBaseUrl();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
