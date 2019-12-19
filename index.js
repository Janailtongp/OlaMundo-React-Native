import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './src/App';
import Menu from './src/Menu';
if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
//registerRootComponent(Menu);
