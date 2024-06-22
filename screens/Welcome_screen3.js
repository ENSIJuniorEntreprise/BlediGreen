import React from 'react';
import { View, Image, Text,ImageBackground, TouchableOpacity } from 'react-native';
import Welcome_page_footer from '../components/welcome_page_footer.js';
const Welcome_screen3 = ({ navigation }) => {
  const image2 = require('../assets/images/Homescreen3-1.png');
  const backgroundImage = require('../assets/images/Homescreen2-1.png');
  const image3 = require('../assets/images/Homescreen3-2.png');
  const button = require('../assets/images/fleche_avant.png');

  const goToNextScreen = () => {
    navigation.navigate('Welcome4'); 
  };
return (
  <ImageBackground
      style={{

        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 400, // Adjust as needed
      }}
      resizeMode="cover"
      source={backgroundImage}
    >
      <View style={{ position: 'absolute', top: 100, left: 0, right: 0, bottom: 0 }}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{
              width: 220,
              height: 270,
              alignSelf: 'center',
            }}
            source={image2}
          />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', textAlign: 'center', padding: 40 }}>
              REDUCE
            </Text>
            <Text style={{ fontSize: 40, color: 'black', textAlign: 'center', marginTop: 20, paddingLeft: 30, paddingRight: 30 }}>
           <Text style={{ color: '#529C4F' }}>قلل</Text> و دلل !
          </Text>
          </View>
        </View>
             <TouchableOpacity onPress={goToNextScreen} style={{ marginLeft: 345, marginBottom :98 }}>
                 <Image
                   style={{
                     width: 25,
                     height: 25,
                     marginTop: 50,
                   }}
                   source={button}
                 />
               </TouchableOpacity>

      </View>
      <Welcome_page_footer icon={image3} />
    </ImageBackground>
);
};

export default Welcome_screen3;

