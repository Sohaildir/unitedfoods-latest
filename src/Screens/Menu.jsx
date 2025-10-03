

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MenuLogo from '../Assets/Images/MenuLogo.png';
// import Mbrandlogo from '../Assets/Images/mbrandlogo.svg';
// import Moffer from '../Assets/Images/moffer.svg';
// import Maccount from '../Assets/Images/maccount.svg';
// import Mfavourite from '../Assets/Images/mfavourite';
// import Mrecent from '../Assets/Images/mrecent';
// import Mstocklist from '../Assets/Images/mstocklist';
// import Msetting from '../Assets/Images/msetting';
// import Mlogout from '../Assets/Images/mlogout';
// import Mhelp from '../Assets/Images/mhelp';
// import Mcategories from '../Assets/Images/mcategories';

// const Menu = ({ navigation }) => {
//   const handleMenuItemPress = itemId => {
//     console.log('Menu item pressed:', itemId);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <LinearGradient
//         colors={['#455625', '#97BC51']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         style={styles.header}
//       >
//         <View style={styles.profileSection}>
//           <View style={styles.profileImageContainer}>
//             <View style={styles.logoContainer}>
//               <Image
//                 source={MenuLogo}
//                 style={{
//                   width: 73,
//                   height: 73,
//                   borderRadius: 50,
//                   backgroundColor: 'white',
//                 }}
//                 resizeMode="contain"
//               />
//             </View>
//           </View>
//           <View style={styles.profileInfo}>
//             <Text style={styles.storeName}>Spice & Grill</Text>
//             <Text style={styles.storeEmail}>spicegrill@example.com</Text>
//           </View>
//         </View>
//       </LinearGradient>

//       {/* Menu Content with ScrollView */}
//       <ScrollView
//         style={styles.content}
//         contentContainerStyle={{ paddingBottom: 80 }}
//         showsVerticalScrollIndicator={false} >
//         {/* SHOP BY Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>SHOP BY</Text>
 
//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Categories')}
//           >
//             <Mcategories
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Categories</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Brands')}
//           >
//             <Mbrandlogo
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Brands</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Offers')}
//           >
//             <Moffer
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Offers</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Browse')}
//           >
//             <Icon
//               name="sparkles-outline"
//               size={18}
//               color="#333"
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>New Arrivals</Text>
//           </TouchableOpacity>
//         </View>

//         {/* ACCOUNT Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>ACCOUNT</Text>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Account')}
//           >
//             <Maccount
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Account Details</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Favourite')}
//           >
//             <Mfavourite
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Favourites</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Recent')}
//           >
//             <Mrecent
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Recent Orders</Text>
//             <View style={styles.redDot} />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Stock')}
//           >
//             <Mstocklist
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Stock CheckList</Text>
//           </TouchableOpacity>
//         </View>

//         {/* HELP CENTRE Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>HELP CENTRE</Text>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Settings')}
//           >
//             <Msetting
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Settings</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Support')}
//           >
//             <Mhelp
//               width={20}
//               height={20}
//               fill="#648F00"
//               style={{ marginRight: 13 }}
//             />
//             <Text style={styles.menuItemText}>Help & Support</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Logout')}
//           >
//             <Mlogout
//               width={100}
//               height={20}
//               fill="#648F00"
//               style={{ paddingRight: -1 }}
//             />
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     backgroundColor: '#8BC34A',
//     paddingHorizontal: 20,
//     paddingTop: 15,
//     paddingBottom: 15,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileImageContainer: {
//     marginRight: 15,
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   storeName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 2,
//   },
//   storeEmail: {
//     fontSize: 13,
//     color: 'rgba(255, 255, 255, 0.9)',
//   },
//   content: {
//     marginTop: 10,
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   section: {
//     paddingHorizontal: 25,
//     marginTop: 15,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   sectionTitle: {
//     color: '#648F00',
//     fontWeight: '700',
//     fontSize: 12,
//     lineHeight: 18,
//     textTransform: 'uppercase',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     position: 'relative',
//     width: '100%',
//   },
//   menuIcon: {
//     marginRight: 15,
//     color: '#000000',
//     fontWeight: '500',
//   },
//   menuItemText: {
//     fontSize: 16,
//     color: '#000000',
//     fontWeight: '500',
//     flex: 1,
//   },
//   logoutSection: {
//     paddingHorizontal: 25,
//     paddingTop: 8,
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingBottom: 90,
//   },
//   logoutItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//   },
//   logoutText: {
//     fontSize: 16,
//     color: '#FF4444',
//     fontWeight: '400',
//   },
// });

// export default Menu;


// the above is for mobile only 


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MenuLogo from '../Assets/Images/MenuLogo.png';
// import Mbrandlogo from '../Assets/Images/mbrandlogo.svg';
// import Moffer from '../Assets/Images/moffer.svg';
// import Maccount from '../Assets/Images/maccount.svg';
// import Mfavourite from '../Assets/Images/mfavourite';
// import Mrecent from '../Assets/Images/mrecent';
// import Mstocklist from '../Assets/Images/mstocklist';
// import Msetting from '../Assets/Images/msetting';
// import Mlogout from '../Assets/Images/mlogout';
// import Mhelp from '../Assets/Images/mhelp';
// import Mcategories from '../Assets/Images/mcategories';

// const Menu = ({ navigation }) => {
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));

//   const { width: screenWidth } = dimensions;
//   const isTablet = screenWidth >= 768;

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const handleMenuItemPress = itemId => {
//     console.log('Menu item pressed:', itemId);
//   };

//   const currentStyles = isTablet ? tabletStyles : styles;

//   return (
//     <SafeAreaView style={currentStyles.container}>
//       <LinearGradient
//         colors={['#455625', '#97BC51']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         style={currentStyles.header}
//       >
//         <View style={currentStyles.profileSection}>
//           <View style={currentStyles.profileImageContainer}>
//             <View style={currentStyles.logoContainer}>
//               <Image
//                 source={MenuLogo}
//                 style={isTablet ? tabletStyles.profileImage : {
//                   width: 73,
//                   height: 73,
//                   borderRadius: 50,
//                   backgroundColor: 'white',
//                 }}
//                 resizeMode="contain"
//               />
//             </View>
//           </View>
//           <View style={currentStyles.profileInfo}>
//             <Text style={currentStyles.storeName}>Spice & Grill</Text>
//             <Text style={currentStyles.storeEmail}>spicegrill@example.com</Text>
//           </View>
//         </View>
//       </LinearGradient>

//       <ScrollView
//         style={currentStyles.content}
//         contentContainerStyle={isTablet ? tabletStyles.scrollContent : { paddingBottom: 80 }}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>SHOP BY</Text>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Categories')}
//           >
//             <Mcategories
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Categories</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Brands')}
//           >
//             <Mbrandlogo
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Brands</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Offers')}
//           >
//             <Moffer
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Offers</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Browse')}
//           >
//             <Icon
//               name="sparkles-outline"
//               size={isTablet ? 24 : 18}
//               color="#333"
//               style={currentStyles.menuIcon}
//             />
//             <Text style={currentStyles.menuItemText}>New Arrivals</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>ACCOUNT</Text>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Account')}
//           >
//             <Maccount
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Account Details</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Favourite')}
//           >
//             <Mfavourite
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Favourites</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Recent')}
//           >
//             <Mrecent
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Recent Orders</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Stock')}
//           >
//             <Mstocklist
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Stock CheckList</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>HELP CENTRE</Text>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Settings')}
//           >
//             <Msetting
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Settings</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Support')}
//           >
//             <Mhelp
//               width={isTablet ? 26 : 20}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ marginRight: isTablet ? 18 : 13 }}
//             />
//             <Text style={currentStyles.menuItemText}>Help & Support</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={currentStyles.menuItem}
//             onPress={() => navigation.navigate('Logout')}
//           >
//             <Mlogout
//               width={isTablet ? 130 : 100}
//               height={isTablet ? 26 : 20}
//               fill="#648F00"
//               style={{ paddingRight: -1 }}
//             />
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // ==========================================
// // MOBILE STYLES (Original - Unchanged)
// // ==========================================
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     backgroundColor: '#8BC34A',
//     paddingHorizontal: 20,
//     paddingTop: 15,
//     paddingBottom: 15,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileImageContainer: {
//     marginRight: 15,
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   storeName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 2,
//   },
//   storeEmail: {
//     fontSize: 13,
//     color: 'rgba(255, 255, 255, 0.9)',
//   },
//   content: {
//     marginTop: 10,
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   section: {
//     paddingHorizontal: 25,
//     marginTop: 15,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   sectionTitle: {
//     color: '#648F00',
//     fontWeight: '700',
//     fontSize: 12,
//     lineHeight: 18,
//     textTransform: 'uppercase',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     position: 'relative',
//     width: '100%',
//   },
//   menuIcon: {
//     marginRight: 15,
//     color: '#000000',
//     fontWeight: '500',
//   },
//   menuItemText: {
//     fontSize: 16,
//     color: '#000000',
//     fontWeight: '500',
//     flex: 1,
//   },
//   redDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#FF4444',
//     position: 'absolute',
//     right: 10,
//   },
//   logoutSection: {
//     paddingHorizontal: 25,
//     paddingTop: 8,
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingBottom: 90,
//   },
//   logoutItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//   },
//   logoutText: {
//     fontSize: 16,
//     color: '#FF4444',
//     fontWeight: '400',
//   },
// });

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     backgroundColor: '#8BC34A',
//     paddingHorizontal: 40,
//     paddingTop: 25,
//     paddingBottom: 35,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     maxWidth: 800,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   profileImageContainer: {
//     marginRight: 25,
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'white',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   storeName: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   storeEmail: {
//     fontSize: 18,
//     color: 'rgba(255, 255, 255, 0.9)',
//   },
//   content: {
//     marginTop: 20,
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContent: {
//     paddingBottom: 100,
//     alignItems: 'center',
//   },
//   section: {
//     paddingHorizontal: 40,
//     marginTop: 25,
//     marginLeft: 0,
//     marginRight: 0,
//     width: '100%',
//     maxWidth: 800,
//   },
//   sectionTitle: {
//     color: '#648F00',
//     fontWeight: '700',
//     fontSize: 25,
//     lineHeight: 30,
//     textTransform: 'uppercase',
//     marginBottom: 3,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 21,
//     position: 'relative',
//     width: '100%',
//     paddingHorizontal: 15,
//     borderRadius: 10,
//   },
//   menuIcon: {
//     marginRight: 20,
//     color: '#000000',
//     fontWeight: '500',
//   },
//   menuItemText: {
//     fontSize: 23,
//     color: '#000000',
//     fontWeight: '500',
//     flex: 1,
//   },

//   logoutSection: {
//     paddingHorizontal: 40,
//     paddingTop: 15,
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingBottom: 120,
//     maxWidth: 800,
//     width: '100%',
//   },
//   logoutItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 16,
//   },
//   logoutText: {
//     fontSize: 20,
//     color: '#FF4444',
//     fontWeight: '400',
//   },
// });

// export default Menu;
// the above is for tablet and mobile only 



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuLogo from '../Assets/Images/MenuLogo.png';
import Mbrandlogo from '../Assets/Images/mbrandlogo.svg';
import Moffer from '../Assets/Images/moffer.svg';
import Maccount from '../Assets/Images/maccount.svg';
import Mfavourite from '../Assets/Images/mfavourite';
import Mrecent from '../Assets/Images/mrecent';
import Mstocklist from '../Assets/Images/mstocklist';
import Msetting from '../Assets/Images/msetting';
import Mlogout from '../Assets/Images/mlogout';
import Mhelp from '../Assets/Images/mhelp';
import Mcategories from '../Assets/Images/mcategories';

const Menu = ({ navigation }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth, height: screenHeight } = dimensions;
  const isTablet = screenWidth >= 768;
  const isLandscape = screenWidth > screenHeight;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const handleMenuItemPress = itemId => {
    console.log('Menu item pressed:', itemId);
  };

  // Use landscape styles if tablet is in landscape, otherwise use regular tablet or mobile styles
  const currentStyles = isTablet 
    ? (isLandscape ? landscapeStyles : tabletStyles) 
    : styles;

  return (
    <SafeAreaView style={currentStyles.container}>
      <LinearGradient
        colors={['#455625', '#97BC51']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={currentStyles.header}
      >
        <View style={currentStyles.profileSection}>
          <View style={currentStyles.profileImageContainer}>
            <View style={currentStyles.logoContainer}>
              <Image
                source={MenuLogo}
                style={isTablet ? {
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: 'white',
                } : {
                  width: 73,
                  height: 73,
                  borderRadius: 50,
                  backgroundColor: 'white',
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={currentStyles.profileInfo}>
            <Text style={currentStyles.storeName}>Spice & Grill</Text>
            <Text style={currentStyles.storeEmail}>spicegrill@example.com</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        style={currentStyles.content}
        contentContainerStyle={isTablet ? currentStyles.scrollContent : { paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>SHOP BY</Text>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Categories')}
          >
            <Mcategories
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Brands')}
          >
            <Mbrandlogo
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Brands</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Offers')}
          >
            <Moffer
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Offers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Browse')}
          >
            <Icon
              name="sparkles-outline"
              size={isTablet ? 24 : 18}
              color="#333"
              style={currentStyles.menuIcon}
            />
            <Text style={currentStyles.menuItemText}>New Arrivals</Text>
          </TouchableOpacity>
        </View>

        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>ACCOUNT</Text>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Account')}
          >
            <Maccount
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Account Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Favourite')}
          >
            <Mfavourite
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Recent')}
          >
            <Mrecent
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Recent Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Stock')}
          >
            <Mstocklist
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Stock CheckList</Text>
          </TouchableOpacity>
        </View>

        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>HELP CENTRE</Text>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Settings')}
          >
            <Msetting
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Support')}
          >
            <Mhelp
              width={isTablet ? 26 : 20}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ marginRight: isTablet ? 18 : 13 }}
            />
            <Text style={currentStyles.menuItemText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={currentStyles.menuItem}
            onPress={() => navigation.navigate('Logout')}
          >
            <Mlogout
              width={isTablet ? 130 : 100}
              height={isTablet ? 26 : 20}
              fill="#648F00"
              style={{ paddingRight: -1 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#8BC34A',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginRight: 15,
  },
  logoContainer: {
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  storeEmail: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 25,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  sectionTitle: {
    color: '#648F00',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    width: '100%',
  },
  menuIcon: {
    marginRight: 15,
    color: '#000000',
    fontWeight: '500',
  },
  menuItemText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    flex: 1,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4444',
    position: 'absolute',
    right: 10,
  },
  logoutSection: {
    paddingHorizontal: 25,
    paddingTop: 8,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 90,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF4444',
    fontWeight: '400',
  },
});

// ==========================================
// TABLET STYLES (Portrait - Unchanged)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#8BC34A',
    paddingHorizontal: 40,
    paddingTop: 25,
    paddingBottom: 35,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  profileImageContainer: {
    marginRight: 25,
  },
  logoContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  profileInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  storeEmail: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 100,
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 40,
    marginTop: 25,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    maxWidth: 800,
  },
  sectionTitle: {
    color: '#648F00',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 21,
    position: 'relative',
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  menuIcon: {
    marginRight: 20,
    color: '#000000',
    fontWeight: '500',
  },
  menuItemText: {
    fontSize: 23,
    color: '#000000',
    fontWeight: '500',
    flex: 1,
  },
  logoutSection: {
    paddingHorizontal: 40,
    paddingTop: 15,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 120,
    maxWidth: 800,
    width: '100%',
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 20,
    color: '#FF4444',
    fontWeight: '400',
  },
});

// ==========================================
// LANDSCAPE STYLES (New - Tablet Landscape Only)
// ==========================================
const landscapeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#8BC34A',
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 1000,
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: 20,
  },
  profileImageContainer: {
    marginRight: 25,
  },
  logoContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'white',
  },
  profileInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  storeEmail: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    marginTop: 15,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 80,
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  section: {
    paddingHorizontal: 40,
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    maxWidth: 1000,
  },
  sectionTitle: {
    color: '#648F00',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    position: 'relative',
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  menuIcon: {
    marginRight: 20,
    color: '#000000',
    fontWeight: '500',
  },
  menuItemText: {
    fontSize: 21,
    color: '#000000',
    fontWeight: '500',
    flex: 1,
  },
  logoutSection: {
    paddingHorizontal: 40,
    paddingTop: 12,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 100,
    maxWidth: 1000,
    width: '100%',
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  logoutText: {
    fontSize: 19,
    color: '#FF4444',
    fontWeight: '400',
  },
});

export default Menu;