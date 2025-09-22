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

const ChangePassword = ({ navigation }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleGoBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSaveChanges = () => {
    // Basic validation
    if (!formData.oldPassword) {
      Alert.alert('Error', 'Please enter your old password');
      return;
    }
    
    if (!formData.newPassword) {
      Alert.alert('Error', 'Please enter a new password');
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      Alert.alert('Error', 'New passwords do not match');
      return;
    }
    
    if (formData.newPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    // Here you would typically make an API call to change the password
    console.log('Changing password:', formData);
    Alert.alert('Success', 'Password changed successfully!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  const PasswordInput = ({ 
    label, 
    value, 
    onChangeText, 
    showPassword, 
    onTogglePassword, 
    placeholder 
  }) => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity 
          style={styles.eyeButton}
          onPress={onTogglePassword}
        >
          <Text style={styles.eyeIcon}>
            {showPassword ? '👁️' : '🙈'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Password</Text>
        <View style={styles.headerRight} />
      </View> */}

      {/* Content */}
      <View style={styles.content}>
        {/* Old Password */}
        <PasswordInput
          label="Old Password"
          value={formData.oldPassword}
          onChangeText={(text) => handleInputChange('oldPassword', text)}
          showPassword={showPasswords.old}
          onTogglePassword={() => togglePasswordVisibility('old')}
          placeholder="Enter your current password"
        />

        {/* New Password */}
        <PasswordInput
          label="New Password"
          value={formData.newPassword}
          onChangeText={(text) => handleInputChange('newPassword', text)}
          showPassword={showPasswords.new}
          onTogglePassword={() => togglePasswordVisibility('new')}
          placeholder="Enter your new password"
        />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm Password"
          value={formData.confirmPassword}
          onChangeText={(text) => handleInputChange('confirmPassword', text)}
          showPassword={showPasswords.confirm}
          onTogglePassword={() => togglePasswordVisibility('confirm')}
          placeholder="Confirm your new password"
        />

        {/* Save Changes Button */}
        <TouchableOpacity 
          onPress={handleSaveChanges}
          activeOpacity={0.8}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
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
    paddingTop: 32,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
    marginLeft: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 50,
    paddingRight: 50, // Space for eye icon
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
    fontSize: 16,
  },
  buttonWrapper: {
    marginTop: 16,
    borderRadius: 12,
  },
  saveButton: {
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
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ChangePassword;