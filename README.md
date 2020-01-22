# react-native-hooks-blog

Create the React Native Project
npx expo-cli init blog
npm install
npm install react-navigation

React Navigation has changed a bit since their recent v.4.0.0 release:

https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0

We must now install three libraries separately. In your terminal run the following command:

npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack@1.10.3

Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

The data will be store at https://www.npmjs.com/package/json-server

Install npm install axios