// import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Acamera from '../../Assets/Images/acamera'
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TextInput, 
//   TouchableOpacity, 
//   Image,
//   ScrollView
// } from 'react-native';

// const Account = () => {
//   const [formData, setFormData] = useState({
//     shopName: 'Spice & Grill',
//     shopType: 'Restaurant & Takeaway',
//     address: '45 High Street, Bradford, West Yorkshire...',
//     email: 'spicegrilluk@example.com',
//     phone: '+44 7456 123456',
//     password: '••••••••'
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSaveChanges = () => {
//     console.log('Saving changes:', formData);
//     // Add your save logic here
//   };

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* Profile Picture Section */}
//       <View style={styles.profileSection}>
//         <View style={styles.profileImageContainer}>
//           <Image
//             source={{ uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop' }}
//             style={styles.profileImage}
//           />
//           <TouchableOpacity style={styles.cameraButton}>
//             <Acamera/>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Form Fields */}
//       <View style={styles.formContainer}>
//         {/* Shop Name */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Shop Name</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.shopName}
//             onChangeText={(text) => handleInputChange('shopName', text)}
//             placeholder="Enter shop name"
//           />
//         </View>

//         {/* Shop Type */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Shop Type</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.shopType}
//             onChangeText={(text) => handleInputChange('shopType', text)}
//             placeholder="Enter shop type"
//           />
//         </View>

//         {/* Address */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Address</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.address}
//             onChangeText={(text) => handleInputChange('address', text)}
//             placeholder="Enter address"
//             multiline={true}
//           />
//         </View>

//         {/* Email */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.email}
//             onChangeText={(text) => handleInputChange('email', text)}
//             placeholder="Enter email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         {/* Phone */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Phone</Text>
//           <TextInput
//             style={styles.input}
//             value={formData.phone}
//             onChangeText={(text) => handleInputChange('phone', text)}
//             placeholder="Enter phone number"
//             keyboardType="phone-pad"
//           />
//         </View>

//         {/* Password */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.passwordInput}
//               value={formData.password}
//               onChangeText={(text) => handleInputChange('password', text)}
//               placeholder="Enter password"
//               secureTextEntry={!showPassword}
//             />
//             {/* <TouchableOpacity 
//               style={styles.eyeButton}
//               onPress={() => setShowPassword(!showPassword)}
//             >
//               <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
//             </TouchableOpacity> */}
//             <TouchableOpacity 
//   style={styles.eyeButton}
//   onPress={() => setShowPassword(!showPassword)}
// >
//   <Ionicons 
//     name={showPassword ? "eye-off" : "eye"}  // 👁️ open vs closed
//     size={22}
//     color="#666"
//     style={styles.eyeIcon}
//   />
// </TouchableOpacity>
//           </View>
//         </View>

//         <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.saveButton} // Use same style for button container
//             >
//             <TouchableOpacity onPress={handleSaveChanges} style={styles.touchable}>
//                 <Text style={styles.saveButtonText}>Save Changes</Text>
//             </TouchableOpacity>
            
//             </LinearGradient>

//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   profileSection: {
//     alignItems: 'center',
//     paddingVertical: 2,
//     backgroundColor: '#f5f5f5',
//     marginTop:12,
//   },
//   profileImageContainer: {
//     position: 'relative',
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#e0e0e0',
//     borderWidth: 4,
//     borderColor: '#fff',
//   },
//   cameraButton: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: '#D9D9D9',
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
   
   
//   },

//   formContainer: {
//     paddingHorizontal: 20,
//     // backgroundColor:"black",
   
//   },
//   inputGroup: {
//     marginBottom: 5,
//   },
//   label: {
//     marginBottom: 2 ,
//     fontWeight: 500,
//     fontsize: 10,
//     lineheight: '100%',
//     letterspacing: '0%',
//     color:'#000000',
//     marginLeft:6,
//   },
//    input: {
//     width: 342,
//     height: 40,
//     opacity: 1,
//     paddingTop: 8,
//     paddingRight: 12,
//     paddingBottom: 8,
//     paddingLeft: 12,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#DDDDDD',
//     backgroundColor: '#E8E8E8',
//     color:'#616161',
//     fontWeight:400,
//     fontSize:14,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
   
   
//   },
//   passwordInput: {
//     width: 342,
//     height: 40,
//     opacity: 1,
//     paddingTop: 8,
//     paddingRight: 12,
//     paddingBottom: 8,
//     paddingLeft: 12,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#DDDDDD',
//     backgroundColor: '#E8E8E8',
//   },
//   eyeButton: {
//     marginLeft:-30,
//     paddingVertical: 14,
//   },
//   eyeIcon: {
//     fontSize: 16,
//   },
//   saveButton: {
//     width: 342,
//     height: 40,
//     justifyContent: 'space-between', 
//     opacity: 1, 
//    marginTop:10,
//     paddingTop: 8,
//     paddingRight: 16,
//     paddingBottom: 8,
//     paddingLeft: 16,
//     borderRadius: 12,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     textAlign:'center',
//   },
// });

// export default Account;

import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";
import Acamera from '../../Assets/Images/acamera';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';

// Import web styles only for web platform
// if (Platform.OS === 'web') {
//   require('./AccountWeb.css');
// }

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
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

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

  const currentStyles = isTablet ? tabletStyles : styles;

  return (
    <ScrollView 
      style={currentStyles.container} 
      showsVerticalScrollIndicator={false}
      className={Platform.OS === 'web' ? 'account-container' : ''}
    >
      {/* Profile Picture Section */}
      <View 
        style={currentStyles.profileSection}
        className={Platform.OS === 'web' ? 'profile-section' : ''}
      >
        <View 
          style={currentStyles.profileImageContainer}
          className={Platform.OS === 'web' ? 'profile-image-container' : ''}
        >
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop' }}
            style={currentStyles.profileImage}
            className={Platform.OS === 'web' ? 'profile-image' : ''}
          />
          <TouchableOpacity 
            style={currentStyles.cameraButton}
            className={Platform.OS === 'web' ? 'camera-button' : ''}
          >
            <Acamera/>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <View 
        style={currentStyles.formContainer}
        className={Platform.OS === 'web' ? 'form-container' : ''}
      >
        {/* Shop Name */}
        <View 
          style={currentStyles.inputGroup}
          className={Platform.OS === 'web' ? 'input-group' : ''}
        >
          <Text 
            style={currentStyles.label}
            className={Platform.OS === 'web' ? 'label' : ''}
          >
            Shop Name
          </Text>
          <TextInput
            style={currentStyles.input}
            className={Platform.OS === 'web' ? 'input' : ''}
            value={formData.shopName}
            onChangeText={(text) => handleInputChange('shopName', text)}
            placeholder="Enter shop name"
          />
        </View>

        {/* Shop Type */}
        <View 
          style={currentStyles.inputGroup}
          className={Platform.OS === 'web' ? 'input-group' : ''}
        >
          <Text 
            style={currentStyles.label}
            className={Platform.OS === 'web' ? 'label' : ''}
          >
            Shop Type
          </Text>
          <TextInput
            style={currentStyles.input}
            className={Platform.OS === 'web' ? 'input' : ''}
            value={formData.shopType}
            onChangeText={(text) => handleInputChange('shopType', text)}
            placeholder="Enter shop type"
          />
        </View>

        {/* Address */}
        <View 
          style={currentStyles.inputGroup}
          className={Platform.OS === 'web' ? 'input-group' : ''}
        >
          <Text 
            style={currentStyles.label}
            className={Platform.OS === 'web' ? 'label' : ''}
          >
            Address
          </Text>
          <TextInput
            style={currentStyles.input}
            className={Platform.OS === 'web' ? 'input' : ''}
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
            placeholder="Enter address"
            multiline={true}
          />
        </View>

        {/* Email */}
        <View 
          style={currentStyles.inputGroup}
          className={Platform.OS === 'web' ? 'input-group' : ''}
        >
          <Text 
            style={currentStyles.label}
            className={Platform.OS === 'web' ? 'label' : ''}
          >
            Email
          </Text>
          <TextInput
            style={currentStyles.input}
            className={Platform.OS === 'web' ? 'input' : ''}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Phone */}
        <View 
          style={currentStyles.inputGroup}
          className={Platform.OS === 'web' ? 'input-group' : ''}
        >
          <Text 
            style={currentStyles.label}
            className={Platform.OS === 'web' ? 'label' : ''}
          >
            Phone
          </Text>
          <TextInput
            style={currentStyles.input}
            className={Platform.OS === 'web' ? 'input' : ''}
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
        </View>

        {/* Password */}
        <View 
          style={currentStyles.inputGroup}
          className={Platform.OS === 'web' ? 'input-group' : ''}
        >
          <Text 
            style={currentStyles.label}
            className={Platform.OS === 'web' ? 'label' : ''}
          >
            Password
          </Text>
          <View 
            style={currentStyles.passwordContainer}
            className={Platform.OS === 'web' ? 'password-container' : ''}
          >
            <TextInput
              style={currentStyles.passwordInput}
              className={Platform.OS === 'web' ? 'password-input' : ''}
              value={formData.password}
              onChangeText={(text) => handleInputChange('password', text)}
              placeholder="Enter password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={currentStyles.eyeButton}
              className={Platform.OS === 'web' ? 'eye-button' : ''}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"}
                size={isTablet ? 28 : 22}
                color="#666"
                style={currentStyles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <LinearGradient
          colors={['#455625', '#97BC51']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={currentStyles.saveButton}
          className={Platform.OS === 'web' ? 'save-button' : ''}
        >
          <TouchableOpacity 
            onPress={handleSaveChanges} 
            style={currentStyles.touchable}
            className={Platform.OS === 'web' ? 'touchable' : ''}
          >
            <Text 
              style={currentStyles.saveButtonText}
              className={Platform.OS === 'web' ? 'save-button-text' : ''}
            >
              Save Changes
            </Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    </ScrollView>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: '#f5f5f5',
    marginTop: 12,
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
    backgroundColor: '#D9D9D9',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 5,
  },
  label: {
    marginBottom: 2,
    fontWeight: '500',
    fontSize: 10,
    color: '#000000',
    marginLeft: 6,
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
    color: '#616161',
    fontWeight: '400',
    fontSize: 14,
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
    marginLeft: -30,
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
    marginTop: 10,
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
    textAlign: 'center',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: '#e0e0e0',
   
    borderColor: '#fff',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#D9D9D9',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 60,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontWeight: '600',
    fontSize: 25,
    color: '#000000',
    marginLeft: 8,
  },
  input: {
    width: '100%',
    height: 56,
    opacity: 1,
    paddingTop: 14,
    paddingRight: 18,
    paddingBottom: 14,
    paddingLeft: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#E8E8E8',
    color: '#616161',
    fontWeight: '400',
    fontSize: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    width: '100%',
    height: 56,
    opacity: 1,
    paddingTop: 14,
    paddingRight: 60,
    paddingBottom: 14,
    paddingLeft: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#E8E8E8',
    color: '#616161',
    fontWeight: '400',
    fontSize: 18,
  },
  eyeButton: {
    position: 'absolute',
    right: 20,
    paddingVertical: 18,
  },
  eyeIcon: {
    fontSize: 24,
  },
  saveButton: {
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    marginTop: 30,
    paddingTop: 14,
    paddingRight: 24,
    paddingBottom: 14,
    paddingLeft: 24,
    borderRadius: 12,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Account;