
// import React, { useRef, useEffect, useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { View, StyleSheet, Animated, Dimensions, TouchableOpacity, Text } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Svg, { Path } from 'react-native-svg';
// import { useCart } from '../Context/CartContext'; // Import the cart hook

// // Screens
// import Home from '../Screens/Home';
// import Browse from '../Screens/Browse';
// import Cart from '../Screens/Cart';
// import Favorite from '../Screens/Favorite';
// import Menu from '../Screens/Menu';

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   const slideAnimation = useRef(new Animated.Value(0)).current;
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  
//   const { width } = dimensions;
//   const tabWidth = width / 5;

//   // Listen for orientation changes
//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const animateToTab = (tabIndex) => {
//     Animated.timing(slideAnimation, {
//       toValue: tabIndex * tabWidth,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const CustomTabBar = ({ state, descriptors, navigation }) => {
//     const { getTotalItemCount } = useCart(); // Get cart count function
    
//     useEffect(() => {
//       animateToTab(state.index);
//     }, [state.index, tabWidth]); // Added tabWidth dependency

//     // Get current cart count
//     const cartCount = getTotalItemCount();

//     // Debug: Log cart count (remove in production)
//     console.log('Cart count in BottomTabs:', cartCount);

//     // Calculate the center position for the active tab cutout
//     const activeTabCenter = (state.index * tabWidth) + (tabWidth / 2);
//     const cutoutRadius = 35;

//     // Create SVG path with curved top and circular cutout for active tab
//     const createTabBarPath = () => {
//       const height = 85;
//       const curveHeight = 20;
      
//       return `
//         M 0,${curveHeight}
//         Q 0,0 20,0
//         L ${activeTabCenter - cutoutRadius - 10},0
//         Q ${activeTabCenter - cutoutRadius},0 ${activeTabCenter - cutoutRadius},10
//         Q ${activeTabCenter - cutoutRadius/2},${-cutoutRadius + 10} ${activeTabCenter},${-cutoutRadius + 10}
//         Q ${activeTabCenter + cutoutRadius/2},${-cutoutRadius + 10} ${activeTabCenter + cutoutRadius},10
//         Q ${activeTabCenter + cutoutRadius},0 ${activeTabCenter + cutoutRadius + 10},0
//         L ${width - 20},0
//         Q ${width},0 ${width},${curveHeight}
//         L ${width},${height}
//         L 0,${height}
//         Z
//       `;
//     };

//     // Cart Icon Component with Badge
//     const CartIconWithBadge = ({ iconName, isFocused, size = 22 }) => (
//       <View style={styles.cartIconContainer}>
//         <Icon
//           name={iconName}
//           size={size}
//           color={isFocused ? "#fff" : "#888"}
//         />
//         {cartCount > 0 && (
//           <View style={styles.cartBadge}>
//             <Text style={styles.cartBadgeText}>
//               {cartCount > 99 ? '99+' : cartCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );

//     return (
//       <View style={styles.tabBarContainer}>
//         {/* SVG Background with curved design and active tab cutout */}
//         <View style={styles.svgContainer}>
//           <Svg
//             width={width}
//             height="80"
//             viewBox={`0 0 ${width} 30`}
//             style={styles.svgBackground}
//           >
//             <Path
//               d={createTabBarPath()}
//               fill="fff"
//               stroke="none"
//             />
//           </Svg>
//         </View>
        
//         {/* Animated sliding background with elevated effect */}
//         <Animated.View
//           style={[
//             styles.animatedBackground,
//             {
//               transform: [{ translateX: slideAnimation }],
//               width: tabWidth,
//             },
//           ]}
//         >
//           <View style={styles.activeTabContainer}>
//             {/* Gradient border wrapper */}
//             <LinearGradient
//               colors={["#648F00", "#BBE53F"]}
//               start={{ x: 0.5, y: 0 }}
//               end={{ x: 0.5, y: 1 }}
//               style={styles.gradientBorder}
//             >
//               {/* Original gradient background */}
//               <LinearGradient
//                 colors={['#648F00', '#A7C257']}
//                 start={{ x: 0.5, y: 1 }}
//                 end={{ x: 0.5, y: 0 }}
//                 style={styles.activeTab}
//               />
//             </LinearGradient>
//           </View>
//         </Animated.View>

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
//             <TouchableOpacity key={route.key} style={styles.tabItem} onPress={onPress}>
//               <View style={[styles.iconWrapper, isFocused && styles.activeIconWrapper]}>
//                 {isFocused ? (
//                   // Active tab icon - positioned in the center of the elevated circle
//                   <View style={styles.activeIconContainer}>
//                     {route.name === 'Cart' ? (
//                       <CartIconWithBadge 
//                         iconName={iconName} 
//                         isFocused={isFocused} 
//                         size={22} 
//                       />
//                     ) : (
//                       <Icon
//                         name={iconName}
//                         size={22}
//                         color="#fff"
//                       />
//                     )}
//                   </View>
//                 ) : (
//                   // Inactive tab icon - normal positioning
//                   <>
//                     {route.name === 'Cart' ? (
//                       <CartIconWithBadge 
//                         iconName={iconName} 
//                         isFocused={isFocused} 
//                         size={22} 
//                       />
//                     ) : (
//                       <Icon
//                         name={iconName}
//                         size={22}
//                         color="#888"
//                       />
//                     )}
//                   </>
//                 )}
//               </View>
//               <View style={styles.labelContainer}>
//                 <Animated.Text
//                   style={[
//                     styles.labelText,
//                     { color: isFocused ? '#333' : '#888' },
//                   ]}
//                 >
//                   {label}
//                 </Animated.Text>
//               </View>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <CustomTabBar {...props} />}
//     >
//       <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'HOME' }} />
//       <Tab.Screen name="Browse" component={Browse} options={{ tabBarLabel: 'BROWSE' }} />
//       <Tab.Screen name="Cart" component={Cart} options={{ tabBarLabel: 'CART' }} />
//       <Tab.Screen name="Favourite" component={Favorite} options={{ tabBarLabel: 'FAVOURITES' }} />
//       <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'MENU' }} />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     height: 85,
//     paddingBottom: 20,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     borderRadius: 15,
//     backgroundColor: '#fff',
//   },
//   svgContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 10,
//     borderRadius: 25,

//   },
//   svgBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#fff',
//   },
//   animatedBackground: {
//     position: 'absolute',
//     top: -35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   activeTabContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // Gradient border style (like SignIn component)
//   gradientBorder: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     padding: 3, // Border thickness
//     top: 20,
//   },
//   activeTab: {
//     flex: 1,
//     borderRadius: 27,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeIconContainer: {
//     position: 'absolute',
//     top: -24,
//     width: 70,
//     height: 70,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 5,
//     zIndex: 3,
//   },
//   iconWrapper: {
//     width: 40,
//     height: 40,
//     borderRadius: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 1,
//   },
//   activeIconWrapper: {
//     marginTop: -25,
//   },
//   labelContainer: {
//     marginTop: 1,
//   },
//   labelText: {
//     fontSize: 10,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//   },
  
//   // Cart Badge Styles
//   cartIconContainer: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -8,
//     right: -10,
//     backgroundColor: '#FF4444',
//     borderRadius: 10,
//     minWidth: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//     zIndex: 5,
//   },
//   cartBadgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default BottomTabs;


// the above code is for mobile only

// import React, { useRef, useEffect, useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { View, StyleSheet, Animated, Dimensions, TouchableOpacity, Text } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Svg, { Path } from 'react-native-svg';
// import { useCart } from '../Context/CartContext';

// // Screens
// import Home from '../Screens/Home';
// import Browse from '../Screens/Browse';
// import Cart from '../Screens/Cart';
// import Favorite from '../Screens/Favorite';
// import Menu from '../Screens/Menu';

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   const slideAnimation = useRef(new Animated.Value(0)).current;
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  
//   const { width } = dimensions;
//   const isTablet = width >= 768;
//   const tabWidth = width / 5;

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const animateToTab = (tabIndex) => {
//     Animated.timing(slideAnimation, {
//       toValue: tabIndex * tabWidth,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const CustomTabBar = ({ state, descriptors, navigation }) => {
//     const { getTotalItemCount } = useCart();
    
//     useEffect(() => {
//       animateToTab(state.index);
//     }, [state.index, tabWidth]);

//     const cartCount = getTotalItemCount();

//     console.log('Cart count in BottomTabs:', cartCount);

//     const activeTabCenter = (state.index * tabWidth) + (tabWidth / 2);
//     const cutoutRadius = isTablet ? 45 : 35;

//     const createTabBarPath = () => {
//       const height = isTablet ? 100 : 85;
//       const curveHeight = isTablet ? 25 : 20;
      
//       return `
//         M 0,${curveHeight}
//         Q 0,0 20,0
//         L ${activeTabCenter - cutoutRadius - 10},0
//         Q ${activeTabCenter - cutoutRadius},0 ${activeTabCenter - cutoutRadius},10
//         Q ${activeTabCenter - cutoutRadius/2},${-cutoutRadius + 10} ${activeTabCenter},${-cutoutRadius + 10}
//         Q ${activeTabCenter + cutoutRadius/2},${-cutoutRadius + 10} ${activeTabCenter + cutoutRadius},10
//         Q ${activeTabCenter + cutoutRadius},0 ${activeTabCenter + cutoutRadius + 10},0
//         L ${width - 20},0
//         Q ${width},0 ${width},${curveHeight}
//         L ${width},${height}
//         L 0,${height}
//         Z
//       `;
//     };

//     const CartIconWithBadge = ({ iconName, isFocused, size }) => (
//       <View style={isTablet ? tabletStyles.cartIconContainer : styles.cartIconContainer}>
//         <Icon
//           name={iconName}
//           size={size}
//           color={isFocused ? "#fff" : "#888"}
//         />
//         {cartCount > 0 && (
//           <View style={isTablet ? tabletStyles.cartBadge : styles.cartBadge}>
//             <Text style={isTablet ? tabletStyles.cartBadgeText : styles.cartBadgeText}>
//               {cartCount > 99 ? '99+' : cartCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );

//     const currentStyles = isTablet ? tabletStyles : styles;
//     const iconSize = isTablet ? 30 : 22;

//     return (
//       <View style={currentStyles.tabBarContainer}>
//         <View style={currentStyles.svgContainer}>
//           <Svg
//             width={width}
//             height={isTablet ? "100" : "80"}
//             viewBox={`0 0 ${width} 30`}
//             style={currentStyles.svgBackground}
//           >
//             <Path
//               d={createTabBarPath()}
//               fill="fff"
//               stroke="none"
//             />
//           </Svg>
//         </View>
        
//         <Animated.View
//           style={[
//             currentStyles.animatedBackground,
//             {
//               transform: [{ translateX: slideAnimation }],
//               width: tabWidth,
//             },
//           ]}
//         >
//           <View style={currentStyles.activeTabContainer}>
//             <LinearGradient
//               colors={["#648F00", "#BBE53F"]}
//               start={{ x: 0.5, y: 0 }}
//               end={{ x: 0.5, y: 1 }}
//               style={currentStyles.gradientBorder}
//             >
//               <LinearGradient
//                 colors={['#648F00', '#A7C257']}
//                 start={{ x: 0.5, y: 1 }}
//                 end={{ x: 0.5, y: 0 }}
//                 style={currentStyles.activeTab}
//               />
//             </LinearGradient>
//           </View>
//         </Animated.View>

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
//             <TouchableOpacity key={route.key} style={currentStyles.tabItem} onPress={onPress}>
//               <View style={[currentStyles.iconWrapper, isFocused && currentStyles.activeIconWrapper]}>
//                 {isFocused ? (
//                   <View style={currentStyles.activeIconContainer}>
//                     {route.name === 'Cart' ? (
//                       <CartIconWithBadge 
//                         iconName={iconName} 
//                         isFocused={isFocused} 
//                         size={iconSize} 
//                       />
//                     ) : (
//                       <Icon
//                         name={iconName}
//                         size={iconSize}
//                         color="#fff"
//                       />
//                     )}
//                   </View>
//                 ) : (
//                   <>
//                     {route.name === 'Cart' ? (
//                       <CartIconWithBadge 
//                         iconName={iconName} 
//                         isFocused={isFocused} 
//                         size={iconSize} 
//                       />
//                     ) : (
//                       <Icon
//                         name={iconName}
//                         size={iconSize}
//                         color="#888"
//                       />
//                     )}
//                   </>
//                 )}
//               </View>
//               <View style={currentStyles.labelContainer}>
//                 <Animated.Text
//                   style={[
//                     currentStyles.labelText,
//                     { color: isFocused ? '#333' : '#888' },
//                   ]}
//                 >
//                   {label}
//                 </Animated.Text>
//               </View>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <CustomTabBar {...props} />}
//     >
//       <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'HOME' }} />
//       <Tab.Screen name="Browse" component={Browse} options={{ tabBarLabel: 'BROWSE' }} />
//       <Tab.Screen name="Cart" component={Cart} options={{ tabBarLabel: 'CART' }} />
//       <Tab.Screen name="Favourite" component={Favorite} options={{ tabBarLabel: 'FAVOURITES' }} />
//       <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'MENU' }} />
//     </Tab.Navigator>
//   );
// };

// // ==========================================
// // MOBILE STYLES (Original - Unchanged)
// // ==========================================
// const styles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     height: 85,
//     paddingBottom: 20,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     borderRadius: 15,
//     backgroundColor: '#fff',
//   },
//   svgContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 10,
//     borderRadius: 25,
//   },
//   svgBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#fff',
//   },
//   animatedBackground: {
//     position: 'absolute',
//     top: -35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   activeTabContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradientBorder: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     padding: 3,
//     top: 20,
//   },
//   activeTab: {
//     flex: 1,
//     borderRadius: 27,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeIconContainer: {
//     position: 'absolute',
//     top: -24,
//     width: 70,
//     height: 70,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 5,
//     zIndex: 3,
//   },
//   iconWrapper: {
//     width: 40,
//     height: 40,
//     borderRadius: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 1,
//   },
//   activeIconWrapper: {
//     marginTop: -25,
//   },
//   labelContainer: {
//     marginTop: 1,
//   },
//   labelText: {
//     fontSize: 10,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//   },
//   cartIconContainer: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -8,
//     right: -10,
//     backgroundColor: '#FF4444',
//     borderRadius: 10,
//     minWidth: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//     zIndex: 5,
//   },
//   cartBadgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     height: 120,
//     paddingBottom: 30,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     borderRadius: 20,
//     backgroundColor: '#fff',
//   },
//   svgContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.35,
//     shadowRadius: 12,
//     elevation: 12,
//     borderRadius: 30,
//   },
//   svgBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#fff',
//   },
//   animatedBackground: {
//     position: 'absolute',
//     top: -60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   activeTabContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradientBorder: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     padding: 4,
//     top: 25,
//   },
//   activeTab: {
//     flex: 1,
//     borderRadius: 36,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeIconContainer: {
//     position: 'absolute',
//     top: -43,
//     width: 90,
//     height: 90,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 8,
//     zIndex: 3,
//   },
//   iconWrapper: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 2,
//   },
//   activeIconWrapper: {
//     marginTop: -35,
//   },
//   labelContainer: {
//     marginTop: 2,
//   },
//   labelText: {
//     fontSize: 18,
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//   },
//   cartIconContainer: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -10,
//     right: -12,
//     backgroundColor: '#FF4444',
//     borderRadius: 12,
//     minWidth: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//     zIndex: 5,
//   },
//   cartBadgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default BottomTabs;



// the above code for tablet and mobile

// import React, { useRef, useEffect, useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { View, StyleSheet, Animated, Dimensions, TouchableOpacity, Text } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Svg, { Path } from 'react-native-svg';
// import { useCart } from '../Context/CartContext';

// // ✅ Custom SVGs
// import HomeIcon from '../Assets/Images/home.svg';
// import HomeActiveIcon from '../Assets/Images/Homeactive.svg';
// import MenuIcon from '../Assets/Images/menu.svg';
// import MenuOutlineIcon from '../Assets/Images/menu_outline.svg';

// // Screens
// import Home from '../Screens/Home';
// import Browse from '../Screens/Browse';
// import Cart from '../Screens/Cart';
// import Favorite from '../Screens/Favorite';
// import Menu from '../Screens/Menu';

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   const slideAnimation = useRef(new Animated.Value(0)).current;
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  
//   const { width } = dimensions;
//   const isTablet = width >= 768;
//   const tabWidth = width / 5;

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const animateToTab = (tabIndex) => {
//     Animated.timing(slideAnimation, {
//       toValue: tabIndex * tabWidth,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const CustomTabBar = ({ state, descriptors, navigation }) => {
//     const { getTotalItemCount } = useCart();
    
//     useEffect(() => {
//       animateToTab(state.index);
//     }, [state.index, tabWidth]);

//     const cartCount = getTotalItemCount();
//     const activeTabCenter = (state.index * tabWidth) + (tabWidth / 2);
//     const cutoutRadius = isTablet ? 45 : 35;

//     const createTabBarPath = () => {
//       const height = isTablet ? 100 : 85;
//       const curveHeight = isTablet ? 25 : 20;
      
//       return `
//         M 0,${curveHeight}
//         Q 0,0 20,0
//         L ${activeTabCenter - cutoutRadius - 10},0
//         Q ${activeTabCenter - cutoutRadius},0 ${activeTabCenter - cutoutRadius},10
//         Q ${activeTabCenter - cutoutRadius/2},${-cutoutRadius + 10} ${activeTabCenter},${-cutoutRadius + 10}
//         Q ${activeTabCenter + cutoutRadius/2},${-cutoutRadius + 10} ${activeTabCenter + cutoutRadius},10
//         Q ${activeTabCenter + cutoutRadius},0 ${activeTabCenter + cutoutRadius + 10},0
//         L ${width - 20},0
//         Q ${width},0 ${width},${curveHeight}
//         L ${width},${height}
//         L 0,${height}
//         Z
//       `;
//     };

//     const CartIconWithBadge = ({ iconName, isFocused, size }) => (
//       <View style={isTablet ? tabletStyles.cartIconContainer : styles.cartIconContainer}>
//         <Icon
//           name={iconName}
//           size={size}
//           color={isFocused ? "#fff" : "#888"}
//         />
//         {cartCount > 0 && (
//           <View style={isTablet ? tabletStyles.cartBadge : styles.cartBadge}>
//             <Text style={isTablet ? tabletStyles.cartBadgeText : styles.cartBadgeText}>
//               {cartCount > 99 ? '99+' : cartCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );

//     const currentStyles = isTablet ? tabletStyles : styles;
//     const iconSize = isTablet ? 30 : 22;

//     return (
//       <View style={currentStyles.tabBarContainer}>
//         <View style={currentStyles.svgContainer}>
//           <Svg
//             width={width}
//             height={isTablet ? "100" : "80"}
//             viewBox={`0 0 ${width} 30`}
//             style={currentStyles.svgBackground}
//           >
//             <Path d={createTabBarPath()} fill="fff" stroke="none" />
//           </Svg>
//         </View>
        
//         <Animated.View
//           style={[
//             currentStyles.animatedBackground,
//             { transform: [{ translateX: slideAnimation }], width: tabWidth },
//           ]}
//         >
//           <View style={currentStyles.activeTabContainer}>
//             <LinearGradient
//               colors={["#648F00", "#BBE53F"]}
//               start={{ x: 0.5, y: 0 }}
//               end={{ x: 0.5, y: 1 }}
//               style={currentStyles.gradientBorder}
//             >
//               <LinearGradient
//                 colors={['#648F00', '#A7C257']}
//                 start={{ x: 0.5, y: 1 }}
//                 end={{ x: 0.5, y: 0 }}
//                 style={currentStyles.activeTab}
//               />
//             </LinearGradient>
//           </View>
//         </Animated.View>

//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label = options.tabBarLabel || route.name;
//           const isFocused = state.index === index;

//           let iconName;
//           switch (route.name) {
//             case 'Home':
//               break; // handled with custom SVG
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
//               break; // handled with custom SVG
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
//             <TouchableOpacity key={route.key} style={currentStyles.tabItem} onPress={onPress}>
//               <View style={[currentStyles.iconWrapper, isFocused && currentStyles.activeIconWrapper]}>
//                 {isFocused ? (
//                   <View style={currentStyles.activeIconContainer}>
//                     {route.name === 'Home' ? (
//                       <HomeActiveIcon width={iconSize} height={iconSize} />
//                     ) : route.name === 'Cart' ? (
//                       <CartIconWithBadge iconName={iconName} isFocused={isFocused} size={iconSize} />
//                     ) : route.name === 'Menu' ? (

//                       <MenuOutlineIcon width={iconSize} height={iconSize} />

//                     ) : (
//                       <Icon name={iconName} size={iconSize} color="#fff" />
//                     )}
//                   </View>
//                 ) : (
//                   <>
//                     {route.name === 'Home' ? (
//                       <HomeIcon width={iconSize} height={iconSize} />
//                     ) : route.name === 'Cart' ? (
//                       <CartIconWithBadge iconName={iconName} isFocused={isFocused} size={iconSize} />
//                     ) : route.name === 'Menu' ? (

                     
//                       <MenuIcon width={iconSize} height={iconSize} />

//                     ) : (
//                       <Icon name={iconName} size={iconSize} color="#888" />
//                     )}
//                   </>
//                 )}
//               </View>
//               <View style={currentStyles.labelContainer}>
//                 <Animated.Text
//                   style={[
//                     currentStyles.labelText,
//                     { color: isFocused ? '#333' : '#888' },
//                   ]}
//                 >
//                   {label}
//                 </Animated.Text>
//               </View>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
//       <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'HOME' }} />
//       <Tab.Screen name="Browse" component={Browse} options={{ tabBarLabel: 'BROWSE' }} />
//       <Tab.Screen name="Cart" component={Cart} options={{ tabBarLabel: 'CART' }} />
//       <Tab.Screen name="Favourite" component={Favorite} options={{ tabBarLabel: 'FAVOURITES' }} />
//       <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'MENU' }} />
//     </Tab.Navigator>
//   );
// };

// // keep your styles (same as you pasted)...
// const styles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     height: 85,
//     paddingBottom: 20,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     borderRadius: 15,
//     backgroundColor: '#fff',
//   },
//   svgContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 10,
//     borderRadius: 25,
//   },
//   svgBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     // backgroundColor: '#fff',
//   },
//   animatedBackground: {
//     position: 'absolute',
//     top: -35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   activeTabContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradientBorder: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     padding: 3,
//     top: 20,
//   },
//   activeTab: {
//     flex: 1,
//     borderRadius: 27,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeIconContainer: {
//     position: 'absolute',
//     top: -24,
//     width: 70,
//     height: 70,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 5,
//     zIndex: 3,
//   },
//   iconWrapper: {
//     width: 40,
//     height: 40,
//     borderRadius: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 1,
//   },
//   activeIconWrapper: {
//     marginTop: -25,
//   },
//   labelContainer: {
//     marginTop: 1,
//   },
//   labelText: {
//     fontSize: 10,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//   },
//   cartIconContainer: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -8,
//     right: -10,
//     backgroundColor: '#FF4444',
//     borderRadius: 10,
//     minWidth: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//     zIndex: 5,
//   },
//   cartBadgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   tabBarContainer: {
//     flexDirection: 'row',
//     height: 120,
//     paddingBottom: 30,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     borderRadius: 20,
//     backgroundColor: '#fff',
//   },
//   svgContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.35,
//     shadowRadius: 12,
//     elevation: 12,
//     borderRadius: 30,
//   },
//   svgBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#fff',
//   },
//   animatedBackground: {
//     position: 'absolute',
//     top: -60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   activeTabContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradientBorder: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     padding: 4,
//     top: 25,
//   },
//   activeTab: {
//     flex: 1,
//     borderRadius: 36,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   activeIconContainer: {
//     position: 'absolute',
//     top: -43,
//     width: 90,
//     height: 90,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: 8,
//     zIndex: 3,
//   },
//   iconWrapper: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 2,
//   },
//   activeIconWrapper: {
//     marginTop: -35,
//   },
//   labelContainer: {
//     marginTop: 2,
//   },
//   labelText: {
//     fontSize: 18,
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     textAlign: 'center',
//   },
//   cartIconContainer: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -10,
//     right: -12,
//     backgroundColor: '#FF4444',
//     borderRadius: 12,
//     minWidth: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//     zIndex: 5,
//   },
//   cartBadgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
// export default BottomTabs;





import React, { useRef, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Animated, Dimensions, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { useCart } from '../Context/CartContext';

// ✅ Custom SVGs
import HomeIcon from '../Assets/Images/home.svg';
import HomeActiveIcon from '../Assets/Images/Homeactive.svg';
import MenuIcon from '../Assets/Images/menu.svg';
import MenuOutlineIcon from '../Assets/Images/menu_outline.svg';

// Screens
import Home from '../Screens/Home';
import Browse from '../Screens/Browse';
import Cart from '../Screens/Cart';
import Favorite from '../Screens/Favorite';
import Menu from '../Screens/Menu';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  
  const { width } = dimensions;
  const isTablet = width >= 768;
  const tabWidth = width / 5;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const animateToTab = (tabIndex) => {
    Animated.timing(slideAnimation, {
      toValue: tabIndex * tabWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { getTotalItemCount } = useCart();
    
    useEffect(() => {
      animateToTab(state.index);
    }, [state.index, tabWidth]);

    const cartCount = getTotalItemCount();
    
    // Calculate wave for single tab width
    const tabCenter = tabWidth / 2;
    const cutoutRadius = isTablet ? 50 : 40;

    const createTabWavePath = () => {
      const height = isTablet ? 100 : 85;
      const waveDepth = isTablet ? 12 : 10;
      
      return `
        M 0,${waveDepth}
        L ${tabCenter - cutoutRadius - 25},${waveDepth}
        Q ${tabCenter - cutoutRadius - 10},${waveDepth} ${tabCenter - cutoutRadius},${waveDepth + 15}
        Q ${tabCenter},${-cutoutRadius + 25} ${tabCenter + cutoutRadius},${waveDepth + 15}
        Q ${tabCenter + cutoutRadius + 10},${waveDepth} ${tabCenter + cutoutRadius + 25},${waveDepth}
        L ${tabWidth},${waveDepth}
        L ${tabWidth},${height}
        L 0,${height}
        Z
      `;
    };

    const CartIconWithBadge = ({ iconName, isFocused, size }) => (
      <View style={isTablet ? tabletStyles.cartIconContainer : styles.cartIconContainer}>
        <Icon
          name={iconName}
          size={size}
          color={isFocused ? "#fff" : "#888"}
        />
        {cartCount > 0 && (
          <View style={isTablet ? tabletStyles.cartBadge : styles.cartBadge}>
            <Text style={isTablet ? tabletStyles.cartBadgeText : styles.cartBadgeText}>
              {cartCount > 99 ? '99+' : cartCount}
            </Text>
          </View>
        )}
      </View>
    );

    const currentStyles = isTablet ? tabletStyles : styles;
    const iconSize = isTablet ? 30 : 22;

    return (
      <View style={currentStyles.tabBarContainer}>
        {/* Animated white background that moves with active tab */}
        <Animated.View
          style={[
            currentStyles.movingBackground,
            {
              transform: [{ translateX: slideAnimation }],
            },
          ]}
        >
          <Svg
            width={tabWidth}
            height={isTablet ? 100 : 85}
          >
            <Path d={createTabWavePath()} fill="#FFFFFF" />
          </Svg>
        </Animated.View>
        
        <Animated.View
          style={[
            currentStyles.animatedBackground,
            { transform: [{ translateX: slideAnimation }], width: tabWidth },
          ]}
        >
          <View style={currentStyles.activeTabContainer}>
            <LinearGradient
              colors={["#648F00", "#BBE53F"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={currentStyles.gradientBorder}
            >
              <LinearGradient
                colors={['#648F00', '#A7C257']}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
                style={currentStyles.activeTab}
              />
            </LinearGradient>
          </View>
        </Animated.View>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || route.name;
          const isFocused = state.index === index;

          let iconName;
          switch (route.name) {
            case 'Home':
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
            <TouchableOpacity key={route.key} style={currentStyles.tabItem} onPress={onPress}>
              <View style={[currentStyles.iconWrapper, isFocused && currentStyles.activeIconWrapper]}>
                {isFocused ? (
                  <View style={currentStyles.activeIconContainer}>
                    {route.name === 'Home' ? (
                      <HomeActiveIcon width={iconSize} height={iconSize} />
                    ) : route.name === 'Cart' ? (
                      <CartIconWithBadge iconName={iconName} isFocused={isFocused} size={iconSize} />
                    ) : route.name === 'Menu' ? (
                      <MenuOutlineIcon width={iconSize} height={iconSize} />
                    ) : (
                      <Icon name={iconName} size={iconSize} color="#fff" />
                    )}
                  </View>
                ) : (
                  <>
                    {route.name === 'Home' ? (
                      <HomeIcon width={iconSize} height={iconSize} />
                    ) : route.name === 'Cart' ? (
                      <CartIconWithBadge iconName={iconName} isFocused={isFocused} size={iconSize} />
                    ) : route.name === 'Menu' ? (
                      <MenuIcon width={iconSize} height={iconSize} />
                    ) : (
                      <Icon name={iconName} size={iconSize} color="#888" />
                    )}
                  </>
                )}
              </View>
              <View style={currentStyles.labelContainer}>
                <Animated.Text
                  style={[
                    currentStyles.labelText,
                    { color: isFocused ? '#333' : '#888', fontWeight: isFocused ? '700' : '600' },
                  ]}
                >
                  {label}
                </Animated.Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
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
    height: 85,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  movingBackground: {
    position: 'absolute',
    top: 0,
    height: 85,
    zIndex: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  animatedBackground: {
    position: 'absolute',
    top: -35,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  activeTabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 3,
    top: 20,
  },
  activeTab: {
    flex: 1,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    position: 'absolute',
    top: -24,
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    zIndex: 3,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
  },
  activeIconWrapper: {
    marginTop: -25,
  },
  labelContainer: {
    marginTop: 1,
  },
  labelText: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -10,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    zIndex: 5,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const tabletStyles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 120,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  movingBackground: {
    position: 'absolute',
    top: 0,
    height: 100,
    zIndex: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 12,
  },
  animatedBackground: {
    position: 'absolute',
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  activeTabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBorder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 4,
    top: 25,
  },
  activeTab: {
    flex: 1,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    position: 'absolute',
    top: -43,
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    zIndex: 3,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  activeIconWrapper: {
    marginTop: -35,
  },
  labelContainer: {
    marginTop: 2,
  },
  labelText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -10,
    right: -12,
    backgroundColor: '#FF4444',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    zIndex: 5,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BottomTabs;