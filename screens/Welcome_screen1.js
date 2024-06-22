import React from 'react';
import { View, Image, Text, TouchableOpacity, navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Welcome_page_footer from '../components/welcome_page_footer'; 
import Welcome_message from '../components/welcome_message'; 

const Welcome_screen1 = ({ navigation }) => { 
  const icon = require('../assets/images/Homescreen1-2.png'); 
  const image = require('../assets/images/Homescreen1-1.png'); 
  const button = require('../assets/images/fleche_avant.png');

  const goToNextScreen = () => {
    navigation.navigate('Welcome2');
  };

  return (
    <View style={{ flex: 1 }}>
      <Welcome_message />
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: -30,
          }}
          source={image}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 17,
            textAlign: 'left',
            marginTop: 80,
            paddingLeft: 30,
            paddingRight: 30,
            lineHeight: 32
          }}>
          Prêts à sauver
          <Text style={{ fontWeight: 'bold' }}> ce beau pays </Text>{' '} ?
          {'\n\n'}


          Commencez dès maintenant en explorant nos fonctionnalités pour scanner,
          localiser et résoudre les problèmes de déchets dans votre région.
          {'\n\n'}


          <Text style={{ fontSize: 23, color: 'black', textAlign: 'center', marginTop: 20, paddingLeft: 30, paddingRight: 30, fontWeight: 'bold'  }}>
          مع Bledi<Text style={{ color: '#529C4F' }}>Green</Text> بلادنا تولي <Text style={{ color: '#529C4F' }}>خير ! </Text>
          </Text>

        </Text>
        <TouchableOpacity onPress={goToNextScreen}style={{ marginLeft: 300 }}>
          <Image
            style={{
              width: 25,
              height: 25,
              marginTop: 20,
            }}
            source={button}
          />
        </TouchableOpacity>
      </View>
      <Welcome_page_footer icon={icon} />
    </View>
  );
};

export default Welcome_screen1;


