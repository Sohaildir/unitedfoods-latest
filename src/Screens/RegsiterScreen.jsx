// import React from 'react';
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
//             <Text style={styles.introTitle}>Let’s Set You Up</Text>
//             <Text style={styles.introDescription}>
//               Create your store account and enjoy exclusive offers, super-simple
//               ordering, and fast delivery for your shop.
//             </Text>
//           </View>
//         </View>
//         {/* Form Section */}
//         <View style={styles.form}>
//           <View style={[styles.inputWrapper, { borderColor: '#648F00' }]}>
//             <StoreFront width={20} height={20} />
//             <TextInput
//               style={styles.input}
//               placeholder="Shop Name"
//               placeholderTextColor="#999"
//             />
//           </View>

//           <View style={styles.inputWrapper}>
//             <Tag width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Shop Type"
//               placeholderTextColor="#999"
//             />
//             <CaretUp width={18} height={18} />
//           </View>

//           <View style={styles.inputWrapper}>
//             <MapPinLine width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Shop Address"
//               placeholderTextColor="#999"
//             />
//           </View>

//           <View style={styles.inputWrapper}>
//             <Envelope width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Email Address"
//               placeholderTextColor="#999"
//               keyboardType="email-address"
//             />
//           </View>

//           <View style={styles.inputWrapper}>
//             <Mobile width={20} height={22} />
//             <TextInput
//               style={styles.input}
//               placeholder="Phone Number"
//               placeholderTextColor="#999"
//               keyboardType="phone-pad"
//             />
//           </View>

//           <View style={styles.inputWrapper}>
//             <LockSimple width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Choose Password"
//               placeholderTextColor="#999"
//               secureTextEntry
//             />
//             <EyeClose width={18} height={18} />
//           </View>

//           <View style={styles.inputWrapper}>
//             <LockSimple width={24} height={24} />
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               placeholderTextColor="#999"
//               secureTextEntry
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
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
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
  // State to track which input is currently focused
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const getInputStyle = (inputName) => {
    return [
      styles.inputWrapper,
      focusedInput === inputName && styles.inputWrapperFocused
    ];
  };

  return (
    <>
      <View
        style={[
          styles.root,
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
          style={styles.header}
        >
          <View style={styles.logoContainer}>
            <UnitedFoodHeader width={180} height={37} />
          </View>
        </LinearGradient>

        <View style={styles.introContainer}>
          <View style={styles.introTextWrapper}>
            <Text style={styles.introTitle}>Let's Set You Up</Text>
            <Text style={styles.introDescription}>
              Create your store account and enjoy exclusive offers, super-simple
              ordering, and fast delivery for your shop.
            </Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.form}>
          <View style={getInputStyle('shopName')}>
            <StoreFront width={20} height={20} />
            <TextInput
              style={styles.input}
              placeholder="Shop Name"
              placeholderTextColor="#999"
              onFocus={() => handleFocus('shopName')}
              onBlur={handleBlur}
            />
          </View>

          <View style={getInputStyle('shopType')}>
            <Tag width={24} height={24} />
            <TextInput
              style={styles.input}
              placeholder="Shop Type"
              placeholderTextColor="#999"
              onFocus={() => handleFocus('shopType')}
              onBlur={handleBlur}
            />
            <CaretUp width={18} height={18} />
          </View>

          <View style={getInputStyle('shopAddress')}>
            <MapPinLine width={24} height={24} />
            <TextInput
              style={styles.input}
              placeholder="Shop Address"
              placeholderTextColor="#999"
              onFocus={() => handleFocus('shopAddress')}
              onBlur={handleBlur}
            />
          </View>

          <View style={getInputStyle('email')}>
            <Envelope width={24} height={24} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#999"
              keyboardType="email-address"
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
            />
          </View>

          <View style={getInputStyle('phone')}>
            <Mobile width={20} height={22} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
            />
          </View>

          <View style={getInputStyle('password')}>
            <LockSimple width={24} height={24} />
            <TextInput
              style={styles.input}
              placeholder="Choose Password"
              placeholderTextColor="#999"
              secureTextEntry
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
            />
            <EyeClose width={18} height={18} />
          </View>

          <View style={getInputStyle('confirmPassword')}>
            <LockSimple width={24} height={24} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={handleBlur}
            />
            <EyeClose width={18} height={18} />
          </View>

          <TouchableOpacity onPress={() => console.log('Register tapped')}>
            <LinearGradient
              colors={['#455625', '#97BC51']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.registerButton}
            >
              <View style={styles.registerButtonContent}>
                <Text style={styles.registerText}>Register</Text>
                <Arrow width={24} height={24} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already a member? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signInLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  registerTextIcon: {
    fontSize: 30,
    color: 'white',
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

export default RegisterScreen;