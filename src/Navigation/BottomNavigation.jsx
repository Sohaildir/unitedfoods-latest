


import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Screens
import Home from '../Screens/Home';
import Browse from '../Screens/Browse';
import Cart from '../Screens/Cart';
import Favorite from '../Screens/Favorite';
import Menu from '../Screens/Menu';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const BottomTabs = () => {
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const tabWidth = width / 5;

  const animateToTab = (tabIndex) => {
    Animated.timing(slideAnimation, {
      toValue: tabIndex * tabWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    useEffect(() => {
      animateToTab(state.index);
    }, [state.index]);

    return (
      <View style={styles.tabBarContainer}>
        {/* Animated sliding background */}
        <Animated.View
          style={[
            styles.animatedBackground,
            {
              transform: [{ translateX: slideAnimation }],
              width: tabWidth,
            },
          ]}
        >
          <View style={styles.activeTabContainer}>
            <LinearGradient
              colors={['#648F00', '#A7C257']}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
              style={styles.activeTab}
            />
          </View>
        </Animated.View>

        {/* Tab buttons */}
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || route.name;
          const isFocused = state.index === index;

          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = isFocused ? 'home' : 'home-outline';
              break;
            case 'Browse':
              iconName = isFocused ? 'grid' : 'grid-outline';
              break;
            case 'Cart':
              iconName = isFocused ? 'cart' : 'cart-outline';
              break;
            case 'Favourite':
              iconName = isFocused ? 'bookmark' : 'bookmark-outline';
              break;
            case 'Menu':
              iconName = isFocused ? 'menu' : 'menu-outline';
              break;
            default:
              iconName = 'home-outline';
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={index} style={styles.tabItem}>
              <View style={styles.iconWrapper} onTouchEnd={onPress}>
                <Icon
                  name={iconName}
                  size={22}
                  color={isFocused ? '#fff' : '#666'}
                />
              </View>
              <View style={styles.labelContainer}>
                <Animated.Text
                  style={[
                    styles.labelText,
                    { color: isFocused ? '#333' : '#666' },
                  ]}
                >
                  {label}
                </Animated.Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'HOME' }} />
      <Tab.Screen name="Browse" component={Browse} options={{ tabBarLabel: 'BROWSE' }} />
      <Tab.Screen name="Cart" component={Cart} options={{ tabBarLabel: 'CART' }} />
      <Tab.Screen name="Favourite" component={Favorite} options={{ tabBarLabel: 'FAVOURITES' }} />
      <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'MENU' }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    height: 75,
    paddingTop: 10,
    paddingBottom: 13,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderTopWidth: 0,
  },
  animatedBackground: {
    position: 'absolute',
    top: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -8 }], // lift the active tab upward
  },
  
  activeTab: {
  
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8BC34A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  
   
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,   // reduced from 5 → 2
  },
  labelContainer: {
    marginTop: 4,      // reduced from 18 → 4
  },
  labelText: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom:5
  },
});


export default BottomTabs;

// import React, { useRef, useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { View, StyleSheet, Animated, Dimensions, TouchableOpacity, Text } from 'react-native';
// import Svg, { Path } from 'react-native-svg';
 
// // Screens
// import Home from '../Screens/Home';
// import Browse from '../Screens/Browse';
// import Cart from '../Screens/Cart';
// import Favorite from '../Screens/Favorite';
// import Menu from '../Screens/Menu';
 
// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');
 
// const BottomTabs = () => {
//   const slideAnimation = useRef(new Animated.Value(0)).current;
//   const tabWidth = width / 5;
 
//   const animateToTab = (tabIndex) => {
//     Animated.timing(slideAnimation, {
//       toValue: tabIndex * tabWidth,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };
 
//   const CustomTabBar = ({ state, descriptors, navigation }) => {
//     useEffect(() => {
//       animateToTab(state.index);
//     }, [state.index]);
 
//     return (
// <View style={styles.tabBarContainer}>
//         {/* SVG curve background */}
// <Animated.View
//           style={{
//             position: 'absolute',
//             left: 0,
//             bottom: 0,
//             transform: [{ translateX: slideAnimation }],
//           }}
// >
// <Svg width={tabWidth} height={75} viewBox={`0 0 ${tabWidth} 75`}>
//             {/*
//               Adjust the curve here:
//               - The `Q${tabWidth / 2} -30` part controls how high the curve goes upward.
//               - Change `-30` to a smaller (e.g. -20) or larger value (e.g. -50) to make the curve shallower or deeper.
//               - You can also experiment with the width scaling by modifying the Q control point.
//             */}
// <Path
//               d={`M0 0 Q${tabWidth / 2} -30 ${tabWidth} 0 L${tabWidth} 75 L0 75 Z`}
//               fill="#ffffff"
//               stroke="#ddd"
//               strokeWidth={1}
//             />
// </Svg>
// </Animated.View>
 
//         {/* Tab buttons */}
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label = options.tabBarLabel || route.name;
//           const isFocused = state.index === index;
 
//           let iconName;
//           switch (route.name) {
//             case 'Home':
//               iconName = isFocused ? 'home' : 'home-outline';
//               break;
//             case 'Browse':
//               iconName = isFocused ? 'grid' : 'grid-outline';
//               break;
//             case 'Cart':
//               iconName = isFocused ? 'cart' : 'cart-outline';
//               break;
//             case 'Favourite':
//               iconName = isFocused ? 'bookmark' : 'bookmark-outline';
//               break;
//             case 'Menu':
//               iconName = isFocused ? 'menu' : 'menu-outline';
//               break;
//             default:
//               iconName = 'home-outline';
//           }
 
//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });
 
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };
 
//           return (
// <TouchableOpacity
//               key={index}
//               accessibilityRole="button"
//               accessibilityState={isFocused ? { selected: true } : {}}
//               onPress={onPress}
//               style={styles.tabItem}
//               activeOpacity={0.7}
// >
// <View style={[styles.iconWrapper, isFocused && styles.activeIconWrapper]}>
// <Icon name={iconName} size={22} color={isFocused ? '#648F00' : '#666'} />
// </View>
// <Text style={[styles.labelText, { color: isFocused ? '#333' : '#666' }]}>
//                 {label}
// </Text>
// </TouchableOpacity>
//           );
//         })}
// </View>
//     );
//   };
 
//   return (
// <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <CustomTabBar {...props} />}
// >
// <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'HOME' }} />
// <Tab.Screen name="Browse" component={Browse} options={{ tabBarLabel: 'BROWSE' }} />
// <Tab.Screen name="Cart" component={Cart} options={{ tabBarLabel: 'CART' }} />
// <Tab.Screen name="Favourite" component={Favorite} options={{ tabBarLabel: 'FAVOURITES' }} />
// <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'MENU' }} />
// </Tab.Navigator>
//   );
// };
 
// const styles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     height: 75,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconWrapper: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 2,
//   },
//   activeIconWrapper: {
//     backgroundColor: '#E6F0D1',
//   },
//   labelText: {
//     fontSize: 10,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//   },
// });
 
// export default BottomTabs;
