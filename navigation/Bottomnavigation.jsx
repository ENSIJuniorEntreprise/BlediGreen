import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Map from '../screens/mapscreen/Map';
import CameraScreen1 from '../screens/Camerascreen-1';  // Ensure this path is correct

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70,
    }
}

const Bottomnavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../assets/images/home 1.png')}
                                name={focused ? "home" : "home-outline"}
                                size={24}
                            />
                        );
                    }
                }} />
            <Tab.Screen
                name="Scan"
                component={CameraScreen1}  // Use the correct component name
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../assets/images/Group 5.png')}
                                name={focused ? "home" : "home-outline"}
                                size={24}
                            />
                        );
                    }
                }} />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={require('../assets/images/location 1.png')}
                                name={focused ? "home" : "home-outline"}
                                size={24}
                            />
                        );
                    }
                }} />
        </Tab.Navigator>
    )
}

export default Bottomnavigation;
