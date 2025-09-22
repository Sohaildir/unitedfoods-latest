

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   TextInput,
//   Switch,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';

// const TwoFactorAuthentication = ({ navigation }) => {
//   const [isEnabled, setIsEnabled] = useState(true);
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const handleToggle = (value) => {
//     setIsEnabled(value);
//     if (!value) {
//       setPhoneNumber('');
//     }
//   };

//   const handleSendCode = () => {
//     if (!isEnabled) {
//       Alert.alert('Error', 'Please enable Two-Factor Authentication first');
//       return;
//     }
    
//     if (!phoneNumber.trim()) {
//       Alert.alert('Error', 'Please enter a valid phone number');
//       return;
//     }

//     // Here you would send the verification code
//     console.log('Sending code to:', phoneNumber);
//     Alert.alert('Code Sent', `Verification code sent to ${phoneNumber}`, [
//       { text: 'OK', onPress: () => navigation.navigate('OTPVerification', { phoneNumber }) }
//     ]);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
//           <Icon name="arrow-back" size={22} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Two-Factor Authentication</Text>
//         <View style={styles.headerRight} />
//       </View>

//       {/* Content */}
//       <View style={styles.content}>
//         {/* Toggle Section */}
//         <View style={styles.toggleSection}>
//           <Text style={styles.toggleTitle}>Two-Factor Authentication</Text>
//           <Switch
//             value={isEnabled}
//             onValueChange={handleToggle}
//             trackColor={{ false: '#FFFFFF', true: '#A7C257' }}
//             thumbColor={isEnabled ? '#FFFFFF' : '#F0F0F0'}
//             ios_backgroundColor="#FFFFFF"
//             style={styles.switch}
//           />
//         </View>

//         {/* Description */}
//         <Text style={styles.description}>
//           Add your phone number so we can send you a verification code each time you log in.
//         </Text>

//         {/* Phone Number Input */}
//         <View style={styles.inputSection}>
//           <Text style={styles.inputLabel}>Enter a Phone Number</Text>
//           <TextInput
//             style={[
//               styles.textInput,
//               !isEnabled && styles.textInputDisabled
//             ]}
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//             placeholder=""
//             placeholderTextColor="#999"
//             keyboardType="phone-pad"
//             editable={isEnabled}
//           />
//         </View>
//       </View>

//       {/* Send Code Button */}
//       <View style={styles.bottomSection}>
//         <TouchableOpacity 
//           onPress={handleSendCode} 
//           activeOpacity={0.8} 
//           style={{ borderRadius: 8 }}
//           disabled={!isEnabled}
//         >
//           <LinearGradient
//             colors={isEnabled ? ['#455625', '#97BC51'] : ['#E8E8E8', '#E8E8E8']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.sendButton}
//           >
//             <Text style={[
//               styles.sendButtonText,
//               !isEnabled && styles.sendButtonTextDisabled
//             ]}>
//               Send Code
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   backButton: {
//     width: 32,
//     height: 32,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 32,
//   },
//   headerRight: {
//     width: 32,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 24,
//   },
//   toggleSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   toggleTitle: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#000000',
//     flex: 1,
//   },
//   switch: {
//     transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
//   },
//   description: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#666666',
//     lineHeight: 20,
//     marginBottom: 32,
//   },
//   inputSection: {
//     marginBottom: 24,
//   },
//   inputLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 8,
//   },
//   textInput: {
//     backgroundColor: '#E8E8E8',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     fontSize: 16,
//     color: '#333333',
//     borderWidth: 0,
//     height: 50,
//   },
//   textInputDisabled: {
//     backgroundColor: '#F0F0F0',
//     color: '#999999',
//   },
//   bottomSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     paddingBottom: 40,
//   },
//   sendButton: {
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   sendButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   sendButtonTextDisabled: {
//     color: '#999999',
//   },
// });

// export default TwoFactorAuthentication;


import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const TwoFactorAuthentication = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      setPhoneNumber('');
    }
  };

  const handleSendCode = () => {
    if (!isEnabled) {
      Alert.alert('Error', 'Please enable Two-Factor Authentication first');
      return;
    }
    
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }

    // Here you would send the verification code
    console.log('Sending code to:', phoneNumber);
    Alert.alert('Code Sent', `Verification code sent to ${phoneNumber}`, [
      { text: 'OK', onPress: () => navigation.navigate('OTPVerification', { phoneNumber }) }
    ]);
  };

  // Custom Switch Component (same as Settings screen)
  const CustomSwitch = ({ value, onValueChange }) => (
    <TouchableOpacity
      style={[styles.customSwitch, value ? styles.switchOn : styles.switchOff]}
      onPress={onValueChange}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#CACACA', '#FBFBFB']} // Top -> Bottom gradient
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.switchThumb, value ? styles.thumbOn : styles.thumbOff]}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Two-Factor Authentication</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Toggle Section */}
        <View style={styles.toggleSection}>
          <Text style={styles.toggleTitle}>Two-Factor Authentication</Text>
          <CustomSwitch value={isEnabled} onValueChange={handleToggle} />
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Add your phone number so we can send you a verification code each time you log in.
        </Text>

        {/* Phone Number Input */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Enter a Phone Number</Text>
          <TextInput
            style={[
              styles.textInput,
              !isEnabled && styles.textInputDisabled
            ]}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder=""
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            editable={isEnabled}
          />
        </View>
      </View>

      {/* Send Code Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity 
          onPress={handleSendCode} 
          activeOpacity={0.8} 
          style={{ borderRadius: 8 }}
          disabled={!isEnabled}
        >
          <LinearGradient
            colors={isEnabled ? ['#455625', '#97BC51'] : ['#E8E8E8', '#E8E8E8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.sendButton}
          >
            <Text style={[
              styles.sendButtonText,
              !isEnabled && styles.sendButtonTextDisabled
            ]}>
              Send Code
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  headerRight: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
    marginBottom: 32,
  },
  inputSection: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333333',
    borderWidth: 0,
    height: 50,
  },
  textInputDisabled: {
    backgroundColor: '#F0F0F0',
    color: '#999999',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  sendButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  sendButtonTextDisabled: {
    color: '#999999',
  },

  // Custom Switch Styles (from Settings screen)
  customSwitch: {
    width: 50,
    height: 24,
    borderRadius: 6,
    padding: 2,
    justifyContent: 'center',
  },
  switchOn: { 
    backgroundColor: '#A7C257' 
  },
  switchOff: { 
    backgroundColor: '#E3E3E3' 
  },
  switchThumb: { 
    width: 16, 
    height: 16, 
    borderRadius: 2 
  },
  thumbOn: { 
    alignSelf: 'flex-end' 
  },
  thumbOff: { 
    alignSelf: 'flex-start' 
  },
});

export default TwoFactorAuthentication;
