import React, { useState, useRef, useEffect } from 'react';
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

const Verify = ({ navigation, route }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [isTimerActive, setIsTimerActive] = useState(true);
  
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  // Phone number from previous screen (you can pass this via navigation params)
  const phoneNumber = route?.params?.phoneNumber || '+44******24';

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // Auto-verify when all 4 digits are entered
    if (newOtp.every(digit => digit !== '') && index === 3) {
      handleVerifyOTP(newOtp.join(''));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerifyOTP = (otpCode = null) => {
    const code = otpCode || otp.join('');
    if (code.length !== 4) {
      Alert.alert('Error', 'Please enter complete OTP code');
      return;
    }
    
    // Here you would typically verify the OTP with your backend
    console.log('Verifying OTP:', code);
    
    // For demo purposes, accept any 4-digit code
    Alert.alert('Success', 'OTP verified successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  const handleResendCode = () => {
    if (!isTimerActive) {
      // Reset timer and resend code
      setTimer(59);
      setIsTimerActive(true);
      setOtp(['', '', '', '']);
      inputRefs[0].current?.focus();
      
      // Here you would call your resend OTP API
      console.log('Resending OTP to:', phoneNumber);
      Alert.alert('Code Sent', 'A new verification code has been sent to your phone.');
    }
  };

  const formatTimer = (seconds) => {
    return seconds < 10 ? `0${seconds}s` : `${seconds}s`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <View style={styles.backButtonCircle}>
            <Icon name="arrow-back" size={20} color="#333" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>OTP code verification</Text>
        
        <Text style={styles.subtitle}>
          We have sent an OTP code to your phone {phoneNumber}. Enter OTP code below to verify
        </Text>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={[
                styles.otpInput,
                digit ? styles.otpInputFilled : styles.otpInputEmpty
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(value.replace(/[^0-9]/g, ''), index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Resend Section */}
        <View style={styles.resendSection}>
          <Text style={styles.resendText}>Didn't receive code?</Text>
          <TouchableOpacity 
            onPress={handleResendCode} 
            disabled={isTimerActive}
            style={styles.resendButton}
          >
            <Text style={[
              styles.resendButtonText,
              isTimerActive ? styles.resendDisabled : styles.resendEnabled
            ]}>
              You can resend code in {formatTimer(timer)}
            </Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonCircle: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  otpInputEmpty: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#333',
  },
  otpInputFilled: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#455625',
    color: '#333',
  },
  resendSection: {
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  resendButton: {
    paddingVertical: 5,
  },
  resendButtonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  resendDisabled: {
    color: '#999',
  },
  resendEnabled: {
    color: '#455625',
    fontWeight: '600',
  },
});

export default Verify;