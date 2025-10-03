
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
// import UnitedFoodHeader from '../Assets/Images/unitedFoodHeader.svg';
// import Envelope from '../Assets/Images/Envelope.svg';
// import LockSimple from '../Assets/Images/LockSimple.svg';
// import EyeClose from '../Assets/Images/EyeClosed.svg';
// import Arrow from '../Assets/Images/Arrow.svg';

// const SignIn = ({ navigation }) => {
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
//     <View
//       style={[
//         styles.root,
//         {
//           marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//         },
//       ]}
//     >
//       <StatusBar barStyle="dark-content" translucent={false} />

//       {/* Gradient Header with Logo */}
//       <LinearGradient
//         colors={['#B4D947', '#A7C257', '#A7C257', '#B4D947']}
//         locations={[0, 0.1, 0.9, 1]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={styles.header}
//       >
//         <View style={styles.logoContainer}>
//           <UnitedFoodHeader width={180} height={37} />
//         </View>
//       </LinearGradient>

//       <View
//         style={{
//           width: 299,
//           height: 102,
//           marginTop: 114,
//           marginHorizontal: 'auto',
//         }}
//       >
//         <Text style={{ fontWeight: 600, fontSize: 28, textAlign: 'center' }}>
//           Welcome Back
//         </Text>
//         <Text style={{ fontWeight: 400, textAlign: 'center' }}>
//           Sign in to your store account and keep shopping with exclusive offers
//           and super-simple ordering.
//         </Text>
//       </View>

//       {/* Email & Password Fields */}
//       <View style={styles.form}>
//         <View style={getInputStyle('email')}>
//           <Envelope width={24} height={24} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email Address"
//             placeholderTextColor="#999"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoCorrect={false}
//             onFocus={() => handleFocus('email')}
//             onBlur={handleBlur}
//           />
//         </View>

//         <View style={getInputStyle('password')}>
//           <LockSimple width={24} height={24} />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Password"
//             placeholderTextColor="#999"
//             secureTextEntry
//             onFocus={() => handleFocus('password')}
//             onBlur={handleBlur}
//           />
//           <EyeClose width={18} height={18} />
//         </View>

//         <View
//           style={{
//             justifyContent: 'flex-end',
//             alignItems: 'flex-end',
//             marginTop: -8,
//           }}
//         ><TouchableOpacity onPress={()=>navigation.navigate('Resetpassword')}>
//           <Text style={{ color: '#0285FF', fontWeight: '260', fontSize: 11 }}>
//             Forgot Password
//           </Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={{
//               height: 40,
//               width: '100%',
//               borderRadius: 13,
//               paddingHorizontal: 16,
//               justifyContent: 'center',
//               marginTop: 5,
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//             >
//               <Text style={styles.signIn}>Sign In</Text>
//               <Arrow width={24} height={24} />
//             </View>
//           </LinearGradient>
//         </TouchableOpacity>

//         {/* Sign In Button */}
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>Don't have an Account ? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//             <Text style={styles.signInLink}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
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
//   form: {
//     paddingHorizontal: 20,
//     paddingTop: 30,
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: -15,
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
//     fontWeight: '350',
//     color: '#333',
//   },
//   signIn: {
//     marginLeft: -10,
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingHorizontal: 20,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#666',
//     fontSize: 14,
//     fontWeight: '400',
//   },
//   signInLink: {
//     color: '#0285FF',
//     fontSize: 14,
//     fontWeight: 'medium',
//   },
// });

// export default SignIn;
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
import UnitedFoodHeader from '../Assets/Images/unitedFoodHeader.svg';
import Envelope from '../Assets/Images/Envelope.svg';
import LockSimple from '../Assets/Images/LockSimple.svg';
import EyeClose from '../Assets/Images/EyeClosed.svg';
import Arrow from '../Assets/Images/Arrow.svg';

const SignIn = ({ navigation }) => {
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
    <View
      style={[
        currentStyles.root,
        {
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <StatusBar barStyle="dark-content" translucent={false} />

      {/* Gradient Header with Logo */}
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
        <View style={currentStyles.welcomeContainer}>
          <Text style={currentStyles.welcomeTitle}>Welcome Back</Text>
          <Text style={currentStyles.welcomeDescription}>
            Sign in to your store account and keep shopping with exclusive offers
            and super-simple ordering.
          </Text>
        </View>

        {/* Email & Password Fields */}
        <View style={currentStyles.form}>
          <View style={getInputStyle('email')}>
            <Envelope width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
            <TextInput
              style={currentStyles.input}
              placeholder="Email Address"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
            />
          </View>

          <View style={getInputStyle('password')}>
            <LockSimple width={isTablet ? 28 : 24} height={isTablet ? 28 : 24} />
            <TextInput
              style={currentStyles.input}
              placeholder="Enter Password"
              placeholderTextColor="#999"
              secureTextEntry
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
            />
            <EyeClose width={isTablet ? 22 : 18} height={isTablet ? 22 : 18} />
          </View>

          <View style={currentStyles.forgotPasswordContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Resetpassword')}>
              <Text style={currentStyles.forgotPasswordText}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
            <LinearGradient
              colors={['#455625', '#97BC51']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={currentStyles.signInButton}
            >
              <View style={currentStyles.signInButtonContent}>
                <Text style={currentStyles.signInText}>Sign In</Text>
                <Arrow width={isTablet ? 30 : 24} height={isTablet ? 30 : 24} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Footer */}
          <View style={currentStyles.footer}>
            <Text style={currentStyles.footerText}>Don't have an Account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={currentStyles.signInLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
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
  welcomeContainer: {
    width: 299,
    height: 102,
    marginTop: 114,
    marginHorizontal: 'auto',
  },
  welcomeTitle: {
    fontWeight: '600',
    fontSize: 28,
    textAlign: 'center',
  },
  welcomeDescription: {
    fontWeight: '400',
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 30,
    width: '90%',
    alignSelf: 'center',
    marginTop: -15,
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
    fontWeight: '350',
    color: '#333',
  },
  forgotPasswordContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -8,
  },
  forgotPasswordText: {
    color: '#0285FF',
    fontWeight: '260',
    fontSize: 11,
  },
  signInButton: {
    height: 40,
    width: '100%',
    borderRadius: 13,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginTop: 5,
  },
  signInButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInText: {
    marginLeft: -10,
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
    color: '#666',
    fontSize: 14,
    fontWeight: '400',
  },
  signInLink: {
    color: '#0285FF',
    fontSize: 14,
    fontWeight: 'medium',
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
    paddingVertical: 50,
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
  welcomeContainer: {
    width: '80%',
    maxWidth: 600,
    marginTop: 60,
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  welcomeTitle: {
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  welcomeDescription: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    color: '#666',
  },
  form: {
    paddingHorizontal: 40,
    paddingTop: 40,
    width: '80%',
    maxWidth: 600,
    alignSelf: 'center',
    marginTop: 20,
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
  forgotPasswordContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -8,
    marginBottom: 5,
  },
  forgotPasswordText: {
    color: '#0285FF',
    fontWeight: '500',
    fontSize: 16,
  },
  signInButton: {
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
  signInButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInText: {
    marginLeft: -10,
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
    color: '#666',
    fontSize: 18,
    fontWeight: '400',
  },
  signInLink: {
    color: '#0285FF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SignIn;