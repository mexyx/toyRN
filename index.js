/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootNavigator from '@app/navigator/AppNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootNavigator);
