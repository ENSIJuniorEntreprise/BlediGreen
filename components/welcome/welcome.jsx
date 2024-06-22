import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import styles from './welcome.style.js'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
    return (
        <SafeAreaView style={styles.page} >
            <View style={styles.searchcontainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchicon} />
                </TouchableOpacity>
                <View style={styles.searchwrapper}>
                    <TextInput stlye={styles.searchinput} placeholder="Rechercher les meilleurs conseils" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome