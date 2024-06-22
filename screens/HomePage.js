import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Welcome from '../components/welcome/welcome'
import Advicecards from '../components/advicecard/Advicecards'

const HomePage = () => {
    return (

        <ScrollView>
            <Welcome />
            <Advicecards />
        </ScrollView>

    );
}

export default HomePage




































