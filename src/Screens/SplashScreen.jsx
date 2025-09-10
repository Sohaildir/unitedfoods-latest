import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Register'); // Use 'replace' to prevent going back to splash
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#A7C257' }}>
      <StatusBar hidden={true} />
    </View>
  );
};

export default SplashScreen;
