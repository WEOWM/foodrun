import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomNextButton from '../../components/customnextbutton/CustomNextButton';

const ThirdSplash  = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 2,
          backgroundColor: '',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assetes/Pattern.png')}
          style={{ bottom: 152, }}
        />
        <Image
          source={require('../../assetes/441.png')}
          style={{
            width: 400,
            height: 320,
            position: 'absolute',
          }}
        />
        <Image
          source={require('../../assetes/md.png')}
          style={{
            position: 'absolute',
            top: 130,
            left: 68,
            width: 165,
            height: 210,
          }}
        />
        <Image
          source={require('../../assetes/san.png')}
          style={{ position: 'absolute', top: 354 }}
        />
        <Image
          source={require('../../assetes/e7.png')}
          style={{ position: 'absolute', top: 344, right: 168 }}
        />
        <Image
          source={require('../../assetes/Ee5.png')}
          style={{ position: 'absolute', top: 350, right: 240 }}
        />
        <Image
          source={require('../../assetes/3.png')}
          style={{ position: 'absolute', top: 370, left: 80 }}
        />
        <Image
          source={require('../../assetes/bugger.png')}
          style={{ position: 'absolute', top: 270, right: 55 }}
        />
        <Image
          source={require('../../assetes/e8.png')}
          style={{ position: 'absolute', top: 250, right: 145 }}
        />
        <Image
          source={require('../../assetes/se4.png')}
          style={{ position: 'absolute', bottom: 140, right: 110 }}
        />
        <Image
          source={require('../../assetes/20.png')}
          style={{ position: 'absolute', top: 150, right: 100 }}
        />

        <Image
          source={require('../../assetes/12.png')}
          style={{ position: 'absolute', right: 4, bottom: 74 }}
        />
        <Image
          source={require('../../assetes/11.png')}
          style={{ position: 'absolute', left: 2, top: 74 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ width: 180, textAlign: 'center', fontSize: 22 }}>
          Good food at a cheap price
        </Text>
        <Text
          style={{
            width: 190,
            textAlign: 'center',
            fontSize: 14,
            paddingTop: 12,
          }}
        >
          You can eat at expensive
        </Text>
        <Text
          style={{
            width: 120,
            textAlign: 'center',
            fontSize: 14,
            paddingHorizontal: 12,
          }}
        >
          restaurants with affordable price
        </Text>

        <View style={{ marginTop: 12 }}>
        <CustomNextButton onPress={() => navigation.replace('Home')} />

        </View>
      </View>
    </View>
  );
};

export default ThirdSplash ;

const styles = StyleSheet.create({});