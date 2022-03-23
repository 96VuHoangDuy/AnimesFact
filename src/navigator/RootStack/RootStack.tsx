import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FactAnime from 'screens/AnimeFact/AnimeFact';
import ROUTES from 'constants/routes';
import AnimeList from 'screens/AnimeList/AnimeList';
import {SAFE_AREA_EDGES, SCREEN_OPTIONS} from 'navigator/config';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonStyles from 'theme/CommonStyles';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <SafeAreaView
      style={CommonStyles.flex1}
      mode="margin"
      edges={SAFE_AREA_EDGES}>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.ANIME_LIST_SCREEN}
          options={SCREEN_OPTIONS[ROUTES.ANIME_LIST_SCREEN]}
          component={AnimeList}
        />
        <Stack.Screen
          name={ROUTES.FACT_ANIME}
          options={SCREEN_OPTIONS[ROUTES.FACT_ANIME]}
          component={FactAnime}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default RootStack;
