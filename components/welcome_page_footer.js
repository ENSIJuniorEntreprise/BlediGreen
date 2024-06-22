import * as React from 'react';
import { View, Image } from 'react-native';

const Welcome_page_footer = ({ icon }) => {
  return (
    <View
             style={{
               position: 'absolute',
               bottom: 20,
               left: 0,
               right: 0,
               justifyContent: 'center',
               alignItems: 'center',
             }}
           >
             <Image source={icon} style={{ marginLeft:300}} />
           </View>
  );
};
export default Welcome_page_footer;
