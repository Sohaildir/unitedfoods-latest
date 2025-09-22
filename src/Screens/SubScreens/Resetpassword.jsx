import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  const handleSendResetLink = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      Alert.alert(
        'Reset Link Sent',
        `A password reset link has been sent to ${email}. Please check your email and follow the instructions to reset your password.`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Navigate back to sign in or clear the email field
              setEmail('');
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSignIn = () => {
    if (navigation) {
      navigation.navigate('SignIn');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
   

      {/* Content */}
      <View style={styles.content}>
        {/* Description */}
        <Text style={styles.description}>
          Enter the email linked to your account and we'll send you a secure link to reset your password.
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
            <TextInput
              style={styles.emailInput}
              value={email}
              onChangeText={setEmail}
              placeholder="Email Address"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>
        </View>

        {/* Send Reset Link Button */}
        <TouchableOpacity 
          onPress={handleSendResetLink}
          activeOpacity={0.8}
          style={styles.buttonWrapper}
          disabled={isLoading}
        >
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.sendButton, isLoading && styles.disabledButton]}
          >
            <Text style={styles.sendButtonText}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Back to Sign In Button */}
        <TouchableOpacity 
          onPress={handleBackToSignIn}
          style={styles.backToSignInButton}
          disabled={isLoading}
        >
          <Text style={styles.backToSignInText}>Back to Sign In</Text>
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
    paddingTop: 32,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
    marginBottom: 32,
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingHorizontal: 16,
    height: 50,
  },
  inputIcon: {
    marginRight: 12,
    width: 20,
  },
  emailInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    paddingVertical: 0,
  },
  buttonWrapper: {
    marginBottom: 16,
    borderRadius: 12,
  },
  sendButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  disabledButton: {
    opacity: 0.7,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  backToSignInButton: {
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backToSignInText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ResetPassword;