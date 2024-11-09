/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerGlobals} from 'voicebot-react-native-cli/rn';
AppRegistry.registerComponent(appName, () => App);
registerGlobals();