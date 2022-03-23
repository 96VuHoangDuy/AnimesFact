import {ParamListBase} from '@react-navigation/native';
import ROUTES from 'constants/routes';

export interface RootStackParamsList extends ParamListBase {
  [ROUTES.FACT_ANIME]: {
    animeName: string;
  };
}
