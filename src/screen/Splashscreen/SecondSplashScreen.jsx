import { View, Text, Image } from 'react-native';
import { COLORS } from '../../utils/constants';
import CustomNextButton from '../../components/customnextbutton/CustomNextButton';



const SecondSplashScreen = ({ navigation }) => {

   
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assetes/Pattern.png')}
          style={{ width: '100%', height: '100%', bottom: 152 }}
          resizeMode="cover"
        />
        <Image
          source={require('../../assetes/440.png')}
          style={{
            width: 350,
            height: 350,
            position: 'absolute',
          }}
        />
        <Image
          source={require('../../assetes/12.png')}
          style={{ position: 'absolute', right: 0, bottom: 74 }}
        />
        <Image
          source={require('../../assetes/11.png')}
          style={{ position: 'absolute', right: 0, top: 74 }}
        />
        <Image
          source={require('../../assetes/637.png')}
          style={{ position: 'absolute', right: 40, top: 184 }}
        />
        <Image
          source={require('../../assetes/4.png')}
          style={{ position: 'absolute', right: 163, top: 230 }}
        />
        <Image
          source={require('../../assetes/14.png')}
          style={{ position: 'absolute', right: 120, top: 90 }}
        />
        <Image
          source={require('../../assetes/639.png')}
          style={{ position: 'absolute', right: 100, bottom: 130 }}
        />
        <Image
          source={require('../../assetes/5.png')}
          style={{ position: 'absolute', right: 224, bottom: 210 }}
        />
        <Image
          source={require('../../assetes/E5.png')}
          style={{ position: 'absolute', right: 210, bottom: 270 }}
        />
        <Image
          source={require('../../assetes/638.png')}
          style={{ position: 'absolute', right: 240, bottom: 180 }}
        />
        <Image
          source={require('../../assetes/641.png')}
          style={{ position: 'absolute', top: 150, left: 80 }}
        />
        <Image
          source={require('../../assetes/8.png')}
          style={{ position: 'absolute', top: 270, left: 120 }}
        />
        <Image
          source={require('../../assetes/2.png')}
          style={{ position: 'absolute', top: 210, left: 20 }}
        />
        <Image
          source={require('../../assetes/3.png')}
          style={{ position: 'absolute', left: 120, bottom: 110 }}
        />
        <Image
          source={require('../../assetes/13.png')}
          style={{ position: 'absolute', left: -8, bottom: 150 }}
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
        <Text style={{ width: 170, textAlign: 'center', fontSize: 22 }}>
          Select the Favorities Menu
        </Text>
        <Text
          style={{
            width: 190,
            textAlign: 'center',
            fontSize: 12,
            paddingTop: 12,
          }}
        >
          Now eat well, don't leave the house,You 
        </Text>
        <Text
          style={{
            width: 190,
            textAlign: 'center',
            fontSize: 12,
            paddingHorizontal: 12
          }}
        >
         can choose your favorite food
          only with one click
        </Text>

        <View style={{marginTop: 12}}>
          <CustomNextButton  onPress={() => navigation.replace('ThirdSplash')} />
        </View>

      </View>
    </View>
  );
};

export default SecondSplashScreen;
