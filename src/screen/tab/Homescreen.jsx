import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Search from '../../components/search/Search';
import SliceBanner from '../../components/banner/SliceBanner';
import BrandBanner from '../../components/banner/Brandbanner/BrandBanner';
import ProductCard from '../../components/card/Productcard/ProductCard';
import PopularCard from '../../components/card/popularcard/PopularCard';



const Homescreen = () => {
  const data = [{ key: 'content' }]; 

  const renderItem = () => (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          padding: 9,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assetes/Group3119-31-iPhone13mini-1.png')}
          style={{ width: 15, height: 15 }}
        />
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Image source={require('../../assetes/Frame-31-iPhone13mini-1.png')} />
          <Text>kerala</Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
            }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Search />
      </View>

      <View>
        <SliceBanner />
      </View>

      <View style={{ paddingTop: 22 }}>
        <BrandBanner />
      </View>

      <View style={{ paddingTop: 32 }}>
        <ProductCard />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 9 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Meal Menu</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }}>See All</Text>
      </View>

      <View style={{ paddingTop: 8 }}>
        <PopularCard />
      </View>

    
      

      
      
    </View>
  );

  return (
     <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={{ paddingBottom: 60 }} 
      />
      {/* <View style={styles.bottomTab}>
        <AuthTabs />
      </View> */}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({

   bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // optional: add shadow & background
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
});
