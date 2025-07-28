import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { bannerData } from '../../utils/dummyData';

const SliceBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const screenWidth = Dimensions.get('window').width;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={typeof item.img === 'string' ? { uri: item.img } : item.img}
        style={{ width: screenWidth, height: 220}}
        resizeMode="stretch"
      />
    </View>
  );

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  // ✅ Auto move every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= bannerData.length) {
        nextIndex = 0;
      }
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderDotIndicator = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
      {bannerData.map((dot, index) => (
        <View
          key={index}
          style={{
            backgroundColor: activeIndex === index ? '#FF0000' : '#E2E2E2',
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 4,
          }}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}  
        data={bannerData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16} // smoother scroll updates
      />
      {renderDotIndicator()}
    </View>
  );
};

export default SliceBanner;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding:0
  },
  itemContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});
