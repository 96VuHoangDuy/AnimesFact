import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import ROUTES from 'constants/routes';
import {Edge} from 'react-native-safe-area-context';
import Platform from 'utils/platform';

export const SAFE_AREA_EDGES: Edge[] = Platform.isAndroid
  ? ['top', 'bottom']
  : ['left', 'right', 'top', 'bottom'];

export const SCREEN_OPTIONS: {
  [key: string]:
    | NativeStackNavigationOptions
    | ((props: any) => NativeStackNavigationOptions)
    | undefined;
} = {
  [ROUTES.ANIME_LIST_SCREEN]: {
    headerShown: false,
  },
  [ROUTES.FACT_ANIME]: {
    headerShown: false,
    presentation: 'formSheet',
  },
};
