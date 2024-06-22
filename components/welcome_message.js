import * as React from 'react';
import { View, Text } from 'react-native';

export default function Welcome_message() {
  return (
           <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 32, color: 'black', fontFamily: 'Montserrat-Bold', padding: 40, fontWeight: 'bold', textAlign: 'center',
                        }} numberOfLines={2}>
                      Bienvenue dans    EcoTunis
                    </Text>
           </View>
  );
}
