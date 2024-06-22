import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome_screen1 from './screens/Welcome_screen1';
import Welcome_screen2 from './screens/Welcome_screen2';
import Welcome_screen3 from './screens/Welcome_screen3';
import Welcome_screen4 from './screens/Welcome_screen4';
// import CameraScreen1 from './screens/Camerascreen-1';
import HomePage from './screens/HomePage';
import Bottomnavigation from './navigation/Bottomnavigation'; // Import the bottom navigation component

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome1">
        <Stack.Screen name="Welcome1" component={Welcome_screen1} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome2" component={Welcome_screen2} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome3" component={Welcome_screen3} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome4" component={Welcome_screen4} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Bottomnavigation} options={{ headerShown: false }} />

        {/* <Stack.Screen name="Camera" component={CameraScreen1} options={{ headerShown: false }} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
AppRegistry.registerComponent('ecotunis', () => App);
