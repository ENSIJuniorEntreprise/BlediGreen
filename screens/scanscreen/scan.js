import { View, Text } from 'react-native'
import React from 'react'

const scan = () => {
    return (
        <View>
            <Text>scan</Text>
        </View>
    )
}





import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import CameraScreen1 from '../screens/Camerascreen-1.js';
import HomePage from '../screens/HomePage';
import Map from '../screens/mapscreen/Map';


const Tab = createBottomTabNavigator();

const screenOptions = {
    TabBarShowLabel: false,
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
                            component={CameraScreen1}
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

export {Bottomnavigation, scan}
