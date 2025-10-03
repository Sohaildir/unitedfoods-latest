
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Platform,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Arrow from '../Assets/Images/Arrow.svg';
// import UnitedFoodHeader from '../Assets/Images/unitedFoodHeader.svg';
// import StoreFront from '../Assets/Images/Storefront.svg';
// import Tag from '../Assets/Images/Tag.svg';
// import MapPinLine from '../Assets/Images/MapPinLine.svg';
// import Envelope from '../Assets/Images/Envelope.svg';
// import Mobile from '../Assets/Images/mobile.svg';
// import LockSimple from '../Assets/Images/LockSimple.svg';
// import CaretUp from '../Assets/Images/CaretUp.svg';
// import EyeClose from '../Assets/Images/EyeClosed.svg';

// const RegisterScreen = ({ navigation }) => {
//   // State to track which input is currently focused
//   const [focusedInput, setFocusedInput] = useState(null);

//   const handleFocus = (inputName) => {
//     setFocusedInput(inputName);
//   };

//   const handleBlur = () => {
//     setFocusedInput(null);
//   };

//   const getInputStyle = (inputName) => {
//     return [
//       styles.inputWrapper,
//       focusedInput === inputName && styles.inputWrapperFocused
//     ];
//   };

//   return (
//     <>
//       <View
//         style={[
//           styles.root,
//           {
//             marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//           },
//         ]}
//       >
//         <StatusBar barStyle={'dark-content'} />
//         {/* Top Gradient Header */}
//         <LinearGradient
//           colors={['#B4D947', '#A7C257', '#A7C257', '#B4D947']}
//           locations={[0, 0.1, 0.9, 1]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.header}
//         >
//           <View style={styles.logoContainer}>
//             <UnitedFoodHeader width={180} height={37} />
//           </View>
//         </LinearGradient>

//         <View style={styles.introContainer}>
//           <View style={styles.introTextWrapper}>
//             <Text style={styles.introTitle}>Let's Set You Up</Text>
//             <Text style={styles.introDescription}>
//               Create your store account and enjoy exclusive offers, super-simple
//               ordering, and fast delivery for your shop.
//             </Text>
//           </View>
//         </View>

//         {/* Form Section */}
//         <View style={styles.form}>
//           <View style={getInputStyle('shopName')}>
//             <StoreFront width={20} height={20} />
//             <TextInput
//               style={styles.input}
//               placeholder="Shop Name"
//               placeholderTextColor="#999"
//               onFocus={() => handleFocus('shopName')}
//               onBlur={handleBlur}
//             />
//           </View>

//           <View style={getInputStyle('shopType')}>
//             <Tag width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Shop Type"
//               placeholderTextColor="#999"
//               onFocus={() => handleFocus('shopType')}
//               onBlur={handleBlur}
//             />
//             <CaretUp width={18} height={18} />
//           </View>

//           <View style={getInputStyle('shopAddress')}>
//             <MapPinLine width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Shop Address"
//               placeholderTextColor="#999"
//               onFocus={() => handleFocus('shopAddress')}
//               onBlur={handleBlur}
//             />
//           </View>

//           <View style={getInputStyle('email')}>
//             <Envelope width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Email Address"
//               placeholderTextColor="#999"
//               keyboardType="email-address"
//               onFocus={() => handleFocus('email')}
//               onBlur={handleBlur}
//             />
//           </View>

//           <View style={getInputStyle('phone')}>
//             <Mobile width={20} height={22} />
//             <TextInput
//               style={styles.input}
//               placeholder="Phone Number"
//               placeholderTextColor="#999"
//               keyboardType="phone-pad"
//               onFocus={() => handleFocus('phone')}
//               onBlur={handleBlur}
//             />
//           </View>

//           <View style={getInputStyle('password')}>
//             <LockSimple width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Choose Password"
//               placeholderTextColor="#999"
//               secureTextEntry
//               onFocus={() => handleFocus('password')}
//               onBlur={handleBlur}
//             />
//             <EyeClose width={18} height={18} />
//           </View>

//           <View style={getInputStyle('confirmPassword')}>
//             <LockSimple width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               placeholderTextColor="#999"
//               secureTextEntry
//               onFocus={() => handleFocus('confirmPassword')}
//               onBlur={handleBlur}
//             />
//             <EyeClose width={18} height={18} />
//           </View>

//           <TouchableOpacity onPress={() => console.log('Register tapped')}>
//             <LinearGradient
//               colors={['#455625', '#97BC51']}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 0 }}
//               style={styles.registerButton}
//             >
//               <View style={styles.registerButtonContent}>
//                 <Text style={styles.registerText}>Register</Text>
//                 <Arrow width={24} height={24} />
//               </View>
//             </LinearGradient>
//           </TouchableOpacity>

//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Already a member? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//               <Text style={styles.signInLink}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     height: 100,
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   logoContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   introContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     height: 102,
//     marginTop: 20,
//   },
//   introTextWrapper: {
//     width: '100%',
//   },
//   introTitle: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 25,
//   },
//   introDescription: {
//     width: '85%',
//     marginHorizontal: 'auto',
//     textAlign: 'center',
//     marginTop: 10,
//     fontWeight: '300',
//   },
//   form: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 15,
//     marginBottom: 12,
//     gap: 6,
//     paddingHorizontal: 10,
//     backgroundColor: '#E8E8E8',
//   },
//   inputWrapperFocused: {
//     borderColor: '#648F00',
//     borderWidth: 1,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#333',
//   },
//   registerButton: {
//     height: 40,
//     width: '100%',
//     borderRadius: 13,
//     paddingHorizontal: 16,
//     justifyContent: 'center',
//   },
//   registerButtonContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   registerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingHorizontal: 20,
//   },
//   registerTextIcon: {
//     fontSize: 30,
//     color: 'white',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: 'black',
//     fontSize: 14,
//     fontWeight: '400',
//   },
//   signInLink: {
//     color: '#0285FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// export default RegisterScreen;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from '../Assets/Images/Arrow.svg';
import UnitedFoodHeader from '../Assets/Images/unitedFoodHeader.svg';
import StoreFront from '../Assets/Images/Storefront.svg';
import Tag from '../Assets/Images/Tag.svg';
import MapPinLine from '../Assets/Images/MapPinLine.svg';
import Envelope from '../Assets/Images/Envelope.svg';
import Mobile from '../Assets/Images/mobile.svg';
import LockSimple from '../Assets/Images/LockSimple.svg';
import CaretUp from '../Assets/Images/CaretUp.svg';
import EyeClose from '../Assets/Images/EyeClosed.svg';

const RegisterScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  // Listen for orientation changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const getInputStyle = (inputName) => {
    const baseStyles = isTablet ? tabletStyles : styles;
    return [
      baseStyles.inputWrapper,
      focusedInput === inputName && baseStyles.inputWrapperFocused
    ];
  };

  const currentStyles = isTablet ? tabletStyles : styles;

  return (
    <>
      <View
        style={[
          currentStyles.root,
          {
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          },
        ]}
      >
        <StatusBar barStyle={'dark-content'} />
        
        {/* Top Gradient Header */}
        <LinearGradient
          colors={['#B4D947', '#A7C257', '#A7C257', '#B4D947']}
          locations={[0, 0.1, 0.9, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={currentStyles.header}
        >
          <View style={currentStyles.logoContainer}>
            <UnitedFoodHeader width={isTablet ? 240 : 180} height={isTablet ? 50 : 37} />
          </View>
        </LinearGradient>

        <ScrollView 
          contentContainerStyle={currentStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={currentStyles.introContainer}>
            <View style={currentStyles.introTextWrapper}>
              <Text style={currentStyles.introTitle}>Let's Set You Up</Text>
              <Text style={currentStyles.introDescription}>
                Create your store account and enjoy exclusive offers, super-simple
                ordering, and fast delivery for your shop.
              </Text>
            </View>
          </View>

          {/* Form Section */}
          <View style={currentStyles.form}>
            <View style={getInputStyle('shopName')}>
              <StoreFront width={isTablet ? 26 : 20} height={isTablet ? 26 : 20} />
              <TextInput
                style={currentStyles.input}
                placeholder="Shop Name"
                placeholderTextColor="#999"
                onFocus={() => handleFocus('shopName')}
                onBlur={handleBlur}
              />
            </View>

            <View style={getInputStyle('shopType')}>
              <Tag width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
              <TextInput
                style={currentStyles.input}
                placeholder="Shop Type"
                placeholderTextColor="#999"
                onFocus={() => handleFocus('shopType')}
                onBlur={handleBlur}
              />
              <CaretUp width={isTablet ? 22 : 18} height={isTablet ? 22 : 18} />
            </View>

            <View style={getInputStyle('shopAddress')}>
              <MapPinLine width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
              <TextInput
                style={currentStyles.input}
                placeholder="Shop Address"
                placeholderTextColor="#999"
                onFocus={() => handleFocus('shopAddress')}
                onBlur={handleBlur}
              />
            </View>

            <View style={getInputStyle('email')}>
              <Envelope width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
              <TextInput
                style={currentStyles.input}
                placeholder="Email Address"
                placeholderTextColor="#999"
                keyboardType="email-address"
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
              />
            </View>

            <View style={getInputStyle('phone')}>
              <Mobile width={isTablet ? 26 : 20} height={isTablet ? 28 : 22} />
              <TextInput
                style={currentStyles.input}
                placeholder="Phone Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
              />
            </View>

            <View style={getInputStyle('password')}>
              <LockSimple width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
              <TextInput
                style={currentStyles.input}
                placeholder="Choose Password"
                placeholderTextColor="#999"
                secureTextEntry
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
              />
              <EyeClose width={isTablet ? 22 : 18} height={isTablet ? 22 : 18} />
            </View>

            <View style={getInputStyle('confirmPassword')}>
              <LockSimple width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
              <TextInput
                style={currentStyles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry
                onFocus={() => handleFocus('confirmPassword')}
                onBlur={handleBlur}
              />
              <EyeClose width={isTablet ? 22 : 18} height={isTablet ? 22 : 18} />
            </View>

            <TouchableOpacity onPress={() => console.log('Register tapped')}>
              <LinearGradient
                colors={['#455625', '#97BC51']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={currentStyles.registerButton}
              >
                <View style={currentStyles.registerButtonContent}>
                  <Text style={currentStyles.registerText}>Register</Text>
                  <Arrow width={isTablet ? 30 : 24} height={isTablet ? 30 : 24} />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <View style={currentStyles.footer}>
              <Text style={currentStyles.footerText}>Already a member? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={currentStyles.signInLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  introContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 102,
    marginTop: 20,
  },
  introTextWrapper: {
    width: '100%',
  },
  introTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  introDescription: {
    width: '85%',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '300',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 12,
    gap: 6,
    paddingHorizontal: 10,
    backgroundColor: '#E8E8E8',
  },
  inputWrapperFocused: {
    borderColor: '#648F00',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
  },
  registerButton: {
    height: 40,
    width: '100%',
    borderRadius: 13,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  registerButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  signInLink: {
    color: '#0285FF',
    fontSize: 14,
    fontWeight: '500',
  },
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  header: {
    height: 140,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  introContainer: {
    width: '80%',
    maxWidth: 600,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  introTextWrapper: {
    width: '100%',
  },
  introTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: '#333',
  },
  introDescription: {
    width: '90%',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 26,
    color: '#666',
  },
  form: {
    paddingHorizontal: 40,
    paddingTop: 30,
    width: '80%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1.5,
    borderRadius: 20,
    marginBottom: 18,
    gap: 10,
    paddingHorizontal: 18,
    backgroundColor: '#E8E8E8',
    height: 60,
  },
  inputWrapperFocused: {
    borderColor: '#648F00',
    borderWidth: 2,
    backgroundColor: '#F5F5F5',
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
  registerButton: {
    height: 60,
    width: '100%',
    borderRadius: 18,
    paddingHorizontal: 25,
    justifyContent: 'center',
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  registerButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 25,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  signInLink: {
    color: '#0285FF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default RegisterScreen;