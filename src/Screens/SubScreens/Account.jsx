import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  ScrollView
} from 'react-native';

const Account = () => {
  const [formData, setFormData] = useState({
    shopName: 'Spice & Grill',
    shopType: 'Restaurant & Takeaway',
    address: '45 High Street, Bradford, West Yorkshire...',
    email: 'spicegrilluk@example.com',
    phone: '+44 7456 123456',
    password: '••••••••'
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
    // Add your save logic here
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {/* Shop Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Shop Name</Text>
          <TextInput
            style={styles.input}
            value={formData.shopName}
            onChangeText={(text) => handleInputChange('shopName', text)}
            placeholder="Enter shop name"
          />
        </View>

        {/* Shop Type */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Shop Type</Text>
          <TextInput
            style={styles.input}
            value={formData.shopType}
            onChangeText={(text) => handleInputChange('shopType', text)}
            placeholder="Enter shop type"
          />
        </View>

        {/* Address */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
            placeholder="Enter address"
            multiline={true}
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Phone */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={formData.password}
              onChangeText={(text) => handleInputChange('password', text)}
              placeholder="Enter password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.saveButton} // Use same style for button container
            >
            <TouchableOpacity onPress={handleSaveChanges} style={styles.touchable}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            
            </LinearGradient>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: '#f5f5f5',
    marginTop:12,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    borderWidth: 4,
    borderColor: '#fff',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#666',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  cameraIcon: {
    fontSize: 16,
  },
  formContainer: {
    paddingHorizontal: 20,
    // backgroundColor:"black",
   
  },
  inputGroup: {
    marginBottom: 5,
  },
  label: {
    marginBottom: 2 ,
    fontWeight: 400,
    fontsize: 10,
    lineheight: '100%',
    letterspacing: '0%',
    color:'#000000',
    marginLeft:6,
  },
   input: {
    width: 342,
    height: 40,
    opacity: 1,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#E8E8E8',
    color:'#616161',
    fontWeight:400,
    fontSize:14,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
   
  },
  passwordInput: {
    width: 342,
    height: 40,
    opacity: 1,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#E8E8E8',
  },
  eyeButton: {
    marginLeft:-30,
    paddingVertical: 14,
  },
  eyeIcon: {
    fontSize: 16,
  },
  saveButton: {
    width: 342,
    height: 40,
    justifyContent: 'space-between', 
    opacity: 1, 
   marginTop:10,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 12,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign:'center',
  },
});

export default Account;