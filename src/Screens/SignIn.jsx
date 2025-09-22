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
// import UnitedFoodHeader from '../Assets/Images/unitedFoodHeader.svg';
// import Envelope from '../Assets/Images/Envelope.svg';
// import LockSimple from '../Assets/Images/LockSimple.svg';
// import EyeClose from '../Assets/Images/EyeClosed.svg';
// import Arrow from '../Assets/Images/Arrow.svg';

// const SignIn = ({ navigation }) => {
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
//         <View style={[styles.inputWrapper, { borderColor: '#BBE53F' }]}>
//           <Envelope width={24} height={24} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email Address"
//             placeholderTextColor="#999"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//         </View>

//         <View style={styles.inputWrapper}>
//           <LockSimple width={24} height={24} />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Password"
//             placeholderTextColor="#999"
//             secureTextEntry
//           />
//           <EyeClose width={18} height={18} />
//         </View>
//         <View
//           style={{
//             justifyContent: 'flex-end',
//             alignItems: 'flex-end',
//             marginTop: -8,
//           }}
//         >
//           <Text style={{ color: '#0285FF', fontWeight: '260', fontSize: 11 }}>
//             Forgot Password
//           </Text>
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
import UnitedFoodHeader from '../Assets/Images/unitedFoodHeader.svg';
import Envelope from '../Assets/Images/Envelope.svg';
import LockSimple from '../Assets/Images/LockSimple.svg';
import EyeClose from '../Assets/Images/EyeClosed.svg';
import Arrow from '../Assets/Images/Arrow.svg';

const SignIn = ({ navigation }) => {
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
    <View
      style={[
        styles.root,
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
        style={styles.header}
      >
        <View style={styles.logoContainer}>
          <UnitedFoodHeader width={180} height={37} />
        </View>
      </LinearGradient>

      <View
        style={{
          width: 299,
          height: 102,
          marginTop: 114,
          marginHorizontal: 'auto',
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 28, textAlign: 'center' }}>
          Welcome Back
        </Text>
        <Text style={{ fontWeight: 400, textAlign: 'center' }}>
          Sign in to your store account and keep shopping with exclusive offers
          and super-simple ordering.
        </Text>
      </View>

      {/* Email & Password Fields */}
      <View style={styles.form}>
        <View style={getInputStyle('email')}>
          <Envelope width={24} height={24} />
          <TextInput
            style={styles.input}
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
          <LockSimple width={24} height={24} />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#999"
            secureTextEntry
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
          />
          <EyeClose width={18} height={18} />
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: -8,
          }}
        ><TouchableOpacity onPress={()=>navigation.navigate('Resetpassword')}>
          <Text style={{ color: '#0285FF', fontWeight: '260', fontSize: 11 }}>
            Forgot Password
          </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 40,
              width: '100%',
              borderRadius: 13,
              paddingHorizontal: 16,
              justifyContent: 'center',
              marginTop: 5,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.signIn}>Sign In</Text>
              <Arrow width={24} height={24} />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Sign In Button */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an Account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signInLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  signIn: {
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

export default SignIn;
