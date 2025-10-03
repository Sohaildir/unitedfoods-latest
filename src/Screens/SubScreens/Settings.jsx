



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import Spush from '../../Assets/Images/spush.svg';
// import Semail from '../../Assets/Images/semail.svg';
// import Ssms from '../../Assets/Images/ssms.svg';
// import Sorder from '../../Assets/Images/sorder.svg';
// import Spayment from '../../Assets/Images/spayment.svg';
// import Soffer from '../../Assets/Images/soffer.svg';
// import Senglish from '../../Assets/Images/senglish.svg';
// import Stwofactor from '../../Assets/Images/stwofactor.svg';
// import Slogin from '../../Assets/Images/slogin.svg';
// import Schange from '../../Assets/Images/schange.svg';
// import Supdate from '../../Assets/Images/supdate.svg';
// const Settings = ({ navigation }) => {
//   const [notifications, setNotifications] = useState({
//     pushNotification: false,
//     emailNotification: true,
//     smsNotification: false,
//     orderUpdates: true,
//     paymentAlerts: true,
//     offersPromotions: true,
//   });

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const toggleNotification = key => {
//     setNotifications(prev => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const handleSaveChanges = () => {
//     console.log('Saving changes:', notifications);
//   };

//   const handleLanguagePress = () => {
//     console.log('Language selection pressed');
//   };

//   const handleChangePassword = () => {
//     navigation.navigate('ChangePassword');
//   };

//   const handleUpdateNow = () => {
//     console.log('Update Now pressed');
//   };

//   // Custom Switch Component
//   const CustomSwitch = ({ value, onValueChange }) => (
//     <TouchableOpacity
//       style={[styles.customSwitch, value ? styles.switchOn : styles.switchOff]}
//       onPress={onValueChange}
//       activeOpacity={0.8}
//     >
//       <LinearGradient
//         colors={['#CACACA', '#FBFBFB']} // Top -> Bottom gradient
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 0.5, y: 1 }}
//         style={[styles.switchThumb, value ? styles.thumbOn : styles.thumbOff]}
//       />
//     </TouchableOpacity>
//   );

//   const NotificationItem = ({ icon, title, value, onToggle, customIcon }) => (
//     <View style={styles.notificationItem}>
//       <View style={styles.notificationLeft}>
//         {customIcon ? (
//           customIcon
//         ) : (
//           <Icon
//             name={icon}
//             size={20}
//             color="#8BC34A"
//             style={styles.notificationIcon}
//           />
//         )}
//         <Text style={styles.notificationText}>{title}</Text>
//       </View>
//       <CustomSwitch value={value} onValueChange={onToggle} />
//     </View>
//   );

//   const MenuItemWithArrow = ({ icon, title, onPress, customIcon }) => (
//     <TouchableOpacity style={styles.menuItem} onPress={onPress}>
//       <View style={styles.menuLeft}>
//         {customIcon ? (
//           customIcon
//         ) : (
//           <Icon name={icon} size={20} color="#8BC34A" style={styles.menuIcon} />
//         )}
//         <Text style={styles.menuText}>{title}</Text>
//       </View>
//       <Icon name="chevron-forward" size={20} color="#C4C4C4" />
//     </TouchableOpacity>
//   );
//   const VersionInfoItem = ({ title, value }) => (
//     <View style={styles.versionInfoItem}>
//       <Text style={styles.versionLabel}>{title}</Text>
//       <Text style={styles.versionValue}>{value}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
//           <Icon name="arrow-back" size={22} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Settings</Text>
//         <View style={styles.headerRight} />
//       </View>

//       <ScrollView
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Notifications Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Notifications</Text>
//           <View style={styles.sectionContent}>
//             <NotificationItem
//               title="Push Notification"
//               value={notifications.pushNotification}
//               onToggle={() => toggleNotification('pushNotification')}
//               customIcon={
//                 <Spush
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
           
//             <NotificationItem
//               // icon="mail-outline"
//               title="Email Notification"
//               value={notifications.emailNotification}
//               onToggle={() => toggleNotification('emailNotification')}
//               customIcon={
//                 < Semail 
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               // icon="chatbubble-outline"
//               title="SMS Notification"
//               value={notifications.smsNotification}
//               onToggle={() => toggleNotification('smsNotification')}
//               customIcon={
//                 < Ssms 
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               icon="receipt-outline"
//               title="Order Updates"
//               value={notifications.orderUpdates}
//               onToggle={() => toggleNotification('orderUpdates')}
//               customIcon={
//                 < Sorder 
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               icon="card-outline"
//               title="Payment Alerts"
//               value={notifications.paymentAlerts}
//               onToggle={() => toggleNotification('paymentAlerts')}
//               customIcon={
//                 < Spayment
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               icon="pricetag-outline"
//               title="Offers & Promotions"
//               value={notifications.offersPromotions}
//               onToggle={() => toggleNotification('offersPromotions')}
//               customIcon={
//                 < Soffer 
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//           </View>
//         </View>

//         {/* Language Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Language</Text>
//           <View style={styles.sectionContent}>
//             <MenuItemWithArrow
//               icon="globe-outline"
//               title="English (UK)"
//               onPress={handleLanguagePress}
//               customIcon={
//                 < Senglish 
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//           </View>
//         </View>

//         {/* Privacy & Security Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Privacy & Security</Text>
//           <View style={styles.sectionContent}>
//             <MenuItemWithArrow
//               icon="shield-checkmark-outline"
//               title="2-Factor Authentication"
//               onPress={() => navigation.navigate('Authentication')}
//               customIcon={
//                 < Stwofactor 
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }

              
//             />
//             <MenuItemWithArrow
//               icon="phone-portrait-outline"
//               title="Login Sessions"
//               onPress={() => navigation.navigate('Logout')}
//               customIcon={
//                 < Slogin
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//             <MenuItemWithArrow
//               // icon="key-outline"
//               title="Change Password"
//               onPress={() => navigation.navigate('Changepassword')}
//               // onPress={handleChangePassword}
//               customIcon={
//                 < Schange
//                   width={20}
//                   height={20}
//                   fill="#8BC34A"
//                   style={styles.notificationIcon}
//                 />
//               }
//             />
//           </View>
//         </View>

//         {/* App Version & Updates Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>App Version & Updates</Text>
//           <View style={styles.sectionContent}>
//             <View style={styles.versionSection}>
//               <VersionInfoItem title="Current Version:" value="1.0.0" />
//               <VersionInfoItem title="Latest Version:" value="1.1.0" />
//               <View style={styles.divider} />
//               <MenuItemWithArrow
//   title="Update Now"
//   onPress={handleUpdateNow}
//   customIcon={
//     <Supdate
//       width={20}
//       height={20}
//       fill="#8BC34A"
//       style={styles.menuIcon}
//     />
//   }
// />
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Save Changes Button */}
//       <View style={styles.bottomSection}>
//         <TouchableOpacity
//           onPress={handleSaveChanges}
//           activeOpacity={0.8}
//           style={{ borderRadius: 8 }}
//         >
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.saveButton}
//           >
//             <Text style={styles.saveButtonText}>Save Changes</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F5F5' },
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
//     color: '#000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 32,
//   },
//   headerRight: { width: 32 },
//   scrollView: { flex: 1, backgroundColor: '#F5F5F5' },
//   section: { marginTop: 24 },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 12,
//     marginLeft: 16,
//   },
//   sectionContent: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     marginHorizontal: 16,
//     paddingVertical: 4,
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//   },
//   notificationLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   notificationIcon: { marginRight: 12, width: 20 },
//   notificationText: { fontSize: 16, fontWeight: '400', color: '#333', flex: 1 },

//   // Custom Switch
//   customSwitch: {
//     width: 50,
//     height: 24,
//     borderRadius: 6,
//     padding: 2,
//     justifyContent: 'center',
//   },
//   switchOn: { backgroundColor: '#A7C257' },
//   switchOff: { backgroundColor: '#E3E3E3' },
//   switchThumb: { width: 16, height: 16, borderRadius: 2 },
//   thumbOn: { alignSelf: 'flex-end' },
//   thumbOff: { alignSelf: 'flex-start' },

//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//   },
//   menuLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   menuIcon: { marginRight: 12, width: 20 },
//   menuText: { fontSize: 16, fontWeight: '400', color: '#333', flex: 1 },

//   versionSection: { paddingVertical: 8 },
//   versionInfoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   versionLabel: { fontSize: 16, fontWeight: '400', color: '#333' },
//   versionValue: { fontSize: 16, fontWeight: '500', color: '#666' },
//   divider: {
//     height: 0.5,
//     backgroundColor: '#F5F5F5',
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },

//   bottomSection: {
//     backgroundColor: '#FFF',
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     paddingBottom: 32,
//   },
//   saveButton: {
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   saveButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });

// export default Settings;



// the above code is for mobile only 

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import Spush from '../../Assets/Images/spush.svg';
// import Semail from '../../Assets/Images/semail.svg';
// import Ssms from '../../Assets/Images/ssms.svg';
// import Sorder from '../../Assets/Images/sorder.svg';
// import Spayment from '../../Assets/Images/spayment.svg';
// import Soffer from '../../Assets/Images/soffer.svg';
// import Senglish from '../../Assets/Images/senglish.svg';
// import Stwofactor from '../../Assets/Images/stwofactor.svg';
// import Slogin from '../../Assets/Images/slogin.svg';
// import Schange from '../../Assets/Images/schange.svg';
// import Supdate from '../../Assets/Images/supdate.svg';

// const Settings = ({ navigation }) => {
//   const [notifications, setNotifications] = useState({
//     pushNotification: false,
//     emailNotification: true,
//     smsNotification: false,
//     orderUpdates: true,
//     paymentAlerts: true,
//     offersPromotions: true,
//   });

//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));

//   const { width: screenWidth } = dimensions;
//   const isTablet = screenWidth >= 768;

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const toggleNotification = key => {
//     setNotifications(prev => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const handleSaveChanges = () => {
//     console.log('Saving changes:', notifications);
//   };

//   const handleLanguagePress = () => {
//     console.log('Language selection pressed');
//   };

//   const handleChangePassword = () => {
//     navigation.navigate('ChangePassword');
//   };

//   const handleUpdateNow = () => {
//     console.log('Update Now pressed');
//   };

//   const currentStyles = isTablet ? tabletStyles : styles;
//   const iconSize = isTablet ? 28 : 20;

//   const CustomSwitch = ({ value, onValueChange }) => (
//     <TouchableOpacity
//       style={[currentStyles.customSwitch, value ? currentStyles.switchOn : currentStyles.switchOff]}
//       onPress={onValueChange}
//       activeOpacity={0.8}
//     >
//       <LinearGradient
//         colors={['#CACACA', '#FBFBFB']}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 0.5, y: 1 }}
//         style={[currentStyles.switchThumb, value ? currentStyles.thumbOn : currentStyles.thumbOff]}
//       />
//     </TouchableOpacity>
//   );

//   const NotificationItem = ({ icon, title, value, onToggle, customIcon }) => (
//     <View style={currentStyles.notificationItem}>
//       <View style={currentStyles.notificationLeft}>
//         {customIcon ? (
//           customIcon
//         ) : (
//           <Icon
//             name={icon}
//             size={iconSize}
//             color="#8BC34A"
//             style={currentStyles.notificationIcon}
//           />
//         )}
//         <Text style={currentStyles.notificationText}>{title}</Text>
//       </View>
//       <CustomSwitch value={value} onValueChange={onToggle} />
//     </View>
//   );

//   const MenuItemWithArrow = ({ icon, title, onPress, customIcon }) => (
//     <TouchableOpacity style={currentStyles.menuItem} onPress={onPress}>
//       <View style={currentStyles.menuLeft}>
//         {customIcon ? (
//           customIcon
//         ) : (
//           <Icon name={icon} size={iconSize} color="#8BC34A" style={currentStyles.menuIcon} />
//         )}
//         <Text style={currentStyles.menuText}>{title}</Text>
//       </View>
//       <Icon name="chevron-forward" size={iconSize} color="#C4C4C4" />
//     </TouchableOpacity>
//   );

//   const VersionInfoItem = ({ title, value }) => (
//     <View style={currentStyles.versionInfoItem}>
//       <Text style={currentStyles.versionLabel}>{title}</Text>
//       <Text style={currentStyles.versionValue}>{value}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={currentStyles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       <View style={currentStyles.header}>
//         <TouchableOpacity style={currentStyles.backButton} onPress={handleGoBack}>
//           <Icon name="arrow-back" size={isTablet ? 28 : 22} color="#333" />
//         </TouchableOpacity>
//         <Text style={currentStyles.headerTitle}>Settings</Text>
//         <View style={currentStyles.headerRight} />
//       </View>

//       <ScrollView
//         style={currentStyles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>Notifications</Text>
//           <View style={currentStyles.sectionContent}>
//             <NotificationItem
//               title="Push Notification"
//               value={notifications.pushNotification}
//               onToggle={() => toggleNotification('pushNotification')}
//               customIcon={
//                 <Spush
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               title="Email Notification"
//               value={notifications.emailNotification}
//               onToggle={() => toggleNotification('emailNotification')}
//               customIcon={
//                 <Semail 
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               title="SMS Notification"
//               value={notifications.smsNotification}
//               onToggle={() => toggleNotification('smsNotification')}
//               customIcon={
//                 <Ssms 
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               icon="receipt-outline"
//               title="Order Updates"
//               value={notifications.orderUpdates}
//               onToggle={() => toggleNotification('orderUpdates')}
//               customIcon={
//                 <Sorder 
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               icon="card-outline"
//               title="Payment Alerts"
//               value={notifications.paymentAlerts}
//               onToggle={() => toggleNotification('paymentAlerts')}
//               customIcon={
//                 <Spayment
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <NotificationItem
//               icon="pricetag-outline"
//               title="Offers & Promotions"
//               value={notifications.offersPromotions}
//               onToggle={() => toggleNotification('offersPromotions')}
//               customIcon={
//                 <Soffer 
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//           </View>
//         </View>

//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>Language</Text>
//           <View style={currentStyles.sectionContent}>
//             <MenuItemWithArrow
//               icon="globe-outline"
//               title="English (UK)"
//               onPress={handleLanguagePress}
//               customIcon={
//                 <Senglish 
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//           </View>
//         </View>

//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>Privacy & Security</Text>
//           <View style={currentStyles.sectionContent}>
//             <MenuItemWithArrow
//               icon="shield-checkmark-outline"
//               title="2-Factor Authentication"
//               onPress={() => navigation.navigate('Authentication')}
//               customIcon={
//                 <Stwofactor 
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <MenuItemWithArrow
//               icon="phone-portrait-outline"
//               title="Login Sessions"
//               onPress={() => navigation.navigate('Logout')}
//               customIcon={
//                 <Slogin
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//             <MenuItemWithArrow
//               title="Change Password"
//               onPress={() => navigation.navigate('Changepassword')}
//               customIcon={
//                 <Schange
//                   width={iconSize}
//                   height={iconSize}
//                   fill="#8BC34A"
//                   style={currentStyles.notificationIcon}
//                 />
//               }
//             />
//           </View>
//         </View>

//         <View style={currentStyles.section}>
//           <Text style={currentStyles.sectionTitle}>App Version & Updates</Text>
//           <View style={currentStyles.sectionContent}>
//             <View style={currentStyles.versionSection}>
//               <VersionInfoItem title="Current Version:" value="1.0.0" />
//               <VersionInfoItem title="Latest Version:" value="1.1.0" />
//               <View style={currentStyles.divider} />
//               <MenuItemWithArrow
//                 title="Update Now"
//                 onPress={handleUpdateNow}
//                 customIcon={
//                   <Supdate
//                     width={iconSize}
//                     height={iconSize}
//                     fill="#8BC34A"
//                     style={currentStyles.menuIcon}
//                   />
//                 }
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       <View style={currentStyles.bottomSection}>
//         <TouchableOpacity
//           onPress={handleSaveChanges}
//           activeOpacity={0.8}
//           style={{ borderRadius: 8 }}
//         >
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={currentStyles.saveButton}
//           >
//             <Text style={currentStyles.saveButtonText}>Save Changes</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// // ==========================================
// // MOBILE STYLES (Original - Unchanged)
// // ==========================================
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F5F5' },
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
//     color: '#000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 32,
//   },
//   headerRight: { width: 32 },
//   scrollView: { flex: 1, backgroundColor: '#F5F5F5' },
//   section: { marginTop: 24 },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 12,
//     marginLeft: 16,
//   },
//   sectionContent: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     marginHorizontal: 16,
//     paddingVertical: 4,
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//   },
//   notificationLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   notificationIcon: { marginRight: 12, width: 20 },
//   notificationText: { fontSize: 16, fontWeight: '400', color: '#333', flex: 1 },
//   customSwitch: {
//     width: 50,
//     height: 24,
//     borderRadius: 6,
//     padding: 2,
//     justifyContent: 'center',
//   },
//   switchOn: { backgroundColor: '#A7C257' },
//   switchOff: { backgroundColor: '#E3E3E3' },
//   switchThumb: { width: 16, height: 16, borderRadius: 2 },
//   thumbOn: { alignSelf: 'flex-end' },
//   thumbOff: { alignSelf: 'flex-start' },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//   },
//   menuLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   menuIcon: { marginRight: 12, width: 20 },
//   menuText: { fontSize: 16, fontWeight: '400', color: '#333', flex: 1 },
//   versionSection: { paddingVertical: 8 },
//   versionInfoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   versionLabel: { fontSize: 16, fontWeight: '400', color: '#333' },
//   versionValue: { fontSize: 16, fontWeight: '500', color: '#666' },
//   divider: {
//     height: 0.5,
//     backgroundColor: '#F5F5F5',
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },
//   bottomSection: {
//     backgroundColor: '#FFF',
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     paddingBottom: 32,
//   },
//   saveButton: {
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   saveButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F5F5' },
//   header: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 24,
//     paddingHorizontal: 40,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   backButton: {
//     width: 44,
//     height: 44,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 44,
//   },
//   headerRight: { width: 44 },
//   scrollView: { 
//     flex: 1, 
//     backgroundColor: '#F5F5F5',
//     maxWidth: 1000,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   section: { marginTop: 32 },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#000',
//     marginBottom: 16,
//     marginLeft: 40,
//   },
//   sectionContent: {
//     backgroundColor: '#FFF',
//     borderRadius: 16,
//     marginHorizontal: 40,
//     paddingVertical: 8,
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 24,
//   },
//   notificationLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   notificationIcon: { marginRight: 18, width: 28 },
//   notificationText: { fontSize: 20, fontWeight: '500', color: '#333', flex: 1 },
//   customSwitch: {
//     width: 70,
//     height: 34,
//     borderRadius: 8,
//     padding: 3,
//     justifyContent: 'center',
//   },
//   switchOn: { backgroundColor: '#A7C257' },
//   switchOff: { backgroundColor: '#E3E3E3' },
//   switchThumb: { width: 24, height: 24, borderRadius: 3 },
//   thumbOn: { alignSelf: 'flex-end' },
//   thumbOff: { alignSelf: 'flex-start' },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 24,
//   },
//   menuLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   menuIcon: { marginRight: 18, width: 28 },
//   menuText: { fontSize: 20, fontWeight: '500', color: '#333', flex: 1 },
//   versionSection: { paddingVertical: 12 },
//   versionInfoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//   },
//   versionLabel: { fontSize: 20, fontWeight: '500', color: '#333' },
//   versionValue: { fontSize: 20, fontWeight: '600', color: '#666' },
//   divider: {
//     height: 1,
//     backgroundColor: '#F5F5F5',
//     marginHorizontal: 24,
//     marginVertical: 12,
//   },
//   bottomSection: {
//     backgroundColor: '#FFF',
//     paddingHorizontal: 40,
//     paddingVertical: 24,
//     paddingBottom: 40,
//   },
//   saveButton: {
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     maxWidth: 1000,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   saveButtonText: {
//     color: '#FFF',
//     fontSize: 22,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
// });

// export default Settings;




// the above is for mobile and tablet 


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Spush from '../../Assets/Images/spush.svg';
import Semail from '../../Assets/Images/semail.svg';
import Ssms from '../../Assets/Images/ssms.svg';
import Sorder from '../../Assets/Images/sorder.svg';
import Spayment from '../../Assets/Images/spayment.svg';
import Soffer from '../../Assets/Images/soffer.svg';
import Senglish from '../../Assets/Images/senglish.svg';
import Stwofactor from '../../Assets/Images/stwofactor.svg';
import Slogin from '../../Assets/Images/slogin.svg';
import Schange from '../../Assets/Images/schange.svg';
import Supdate from '../../Assets/Images/supdate.svg';

const Settings = ({ navigation }) => {
  const [notifications, setNotifications] = useState({
    pushNotification: false,
    emailNotification: true,
    smsNotification: false,
    orderUpdates: true,
    paymentAlerts: true,
    offersPromotions: true,
  });

  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth, height: screenHeight } = dimensions;
  const isTablet = screenWidth >= 768;
  const isLandscape = screenWidth > screenHeight;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleNotification = key => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', notifications);
  };

  const handleLanguagePress = () => {
    console.log('Language selection pressed');
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const handleUpdateNow = () => {
    console.log('Update Now pressed');
  };

  // Select appropriate styles based on device and orientation
  const currentStyles = isTablet && isLandscape ? landscapeTabletStyles : isTablet ? tabletStyles : styles;
  const iconSize = isTablet ? 28 : 20;

  const CustomSwitch = ({ value, onValueChange }) => (
    <TouchableOpacity
      style={[currentStyles.customSwitch, value ? currentStyles.switchOn : currentStyles.switchOff]}
      onPress={onValueChange}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#CACACA', '#FBFBFB']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[currentStyles.switchThumb, value ? currentStyles.thumbOn : currentStyles.thumbOff]}
      />
    </TouchableOpacity>
  );

  const NotificationItem = ({ icon, title, value, onToggle, customIcon }) => (
    <View style={currentStyles.notificationItem}>
      <View style={currentStyles.notificationLeft}>
        {customIcon ? (
          customIcon
        ) : (
          <Icon
            name={icon}
            size={iconSize}
            color="#8BC34A"
            style={currentStyles.notificationIcon}
          />
        )}
        <Text style={currentStyles.notificationText}>{title}</Text>
      </View>
      <CustomSwitch value={value} onValueChange={onToggle} />
    </View>
  );

  const MenuItemWithArrow = ({ icon, title, onPress, customIcon }) => (
    <TouchableOpacity style={currentStyles.menuItem} onPress={onPress}>
      <View style={currentStyles.menuLeft}>
        {customIcon ? (
          customIcon
        ) : (
          <Icon name={icon} size={iconSize} color="#8BC34A" style={currentStyles.menuIcon} />
        )}
        <Text style={currentStyles.menuText}>{title}</Text>
      </View>
      <Icon name="chevron-forward" size={iconSize} color="#C4C4C4" />
    </TouchableOpacity>
  );

  const VersionInfoItem = ({ title, value }) => (
    <View style={currentStyles.versionInfoItem}>
      <Text style={currentStyles.versionLabel}>{title}</Text>
      <Text style={currentStyles.versionValue}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={currentStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={currentStyles.header}>
        <TouchableOpacity style={currentStyles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-back" size={isTablet ? 28 : 22} color="#333" />
        </TouchableOpacity>
        <Text style={currentStyles.headerTitle}>Settings</Text>
        <View style={currentStyles.headerRight} />
      </View>

      <ScrollView
        style={currentStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>Notifications</Text>
          <View style={currentStyles.sectionContent}>
            <NotificationItem
              title="Push Notification"
              value={notifications.pushNotification}
              onToggle={() => toggleNotification('pushNotification')}
              customIcon={
                <Spush
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <NotificationItem
              title="Email Notification"
              value={notifications.emailNotification}
              onToggle={() => toggleNotification('emailNotification')}
              customIcon={
                <Semail 
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <NotificationItem
              title="SMS Notification"
              value={notifications.smsNotification}
              onToggle={() => toggleNotification('smsNotification')}
              customIcon={
                <Ssms 
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <NotificationItem
              icon="receipt-outline"
              title="Order Updates"
              value={notifications.orderUpdates}
              onToggle={() => toggleNotification('orderUpdates')}
              customIcon={
                <Sorder 
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <NotificationItem
              icon="card-outline"
              title="Payment Alerts"
              value={notifications.paymentAlerts}
              onToggle={() => toggleNotification('paymentAlerts')}
              customIcon={
                <Spayment
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <NotificationItem
              icon="pricetag-outline"
              title="Offers & Promotions"
              value={notifications.offersPromotions}
              onToggle={() => toggleNotification('offersPromotions')}
              customIcon={
                <Soffer 
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
          </View>
        </View>

        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>Language</Text>
          <View style={currentStyles.sectionContent}>
            <MenuItemWithArrow
              icon="globe-outline"
              title="English (UK)"
              onPress={handleLanguagePress}
              customIcon={
                <Senglish 
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
          </View>
        </View>

        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>Privacy & Security</Text>
          <View style={currentStyles.sectionContent}>
            <MenuItemWithArrow
              icon="shield-checkmark-outline"
              title="2-Factor Authentication"
              onPress={() => navigation.navigate('Authentication')}
              customIcon={
                <Stwofactor 
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <MenuItemWithArrow
              icon="phone-portrait-outline"
              title="Login Sessions"
              onPress={() => navigation.navigate('Logout')}
              customIcon={
                <Slogin
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
            <MenuItemWithArrow
              title="Change Password"
              onPress={() => navigation.navigate('Changepassword')}
              customIcon={
                <Schange
                  width={iconSize}
                  height={iconSize}
                  fill="#8BC34A"
                  style={currentStyles.notificationIcon}
                />
              }
            />
          </View>
        </View>

        <View style={currentStyles.section}>
          <Text style={currentStyles.sectionTitle}>App Version & Updates</Text>
          <View style={currentStyles.sectionContent}>
            <View style={currentStyles.versionSection}>
              <VersionInfoItem title="Current Version:" value="1.0.0" />
              <VersionInfoItem title="Latest Version:" value="1.1.0" />
              <View style={currentStyles.divider} />
              <MenuItemWithArrow
                title="Update Now"
                onPress={handleUpdateNow}
                customIcon={
                  <Supdate
                    width={iconSize}
                    height={iconSize}
                    fill="#8BC34A"
                    style={currentStyles.menuIcon}
                  />
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={currentStyles.bottomSection}>
        <TouchableOpacity
          onPress={handleSaveChanges}
          activeOpacity={0.8}
          style={{ borderRadius: 8 }}
        >
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={currentStyles.saveButton}
          >
            <Text style={currentStyles.saveButtonText}>Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
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
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  headerRight: { width: 32 },
  scrollView: { flex: 1, backgroundColor: '#F5F5F5' },
  section: { marginTop: 24 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    marginLeft: 16,
  },
  sectionContent: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 4,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  notificationLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  notificationIcon: { marginRight: 12, width: 20 },
  notificationText: { fontSize: 16, fontWeight: '400', color: '#333', flex: 1 },
  customSwitch: {
    width: 50,
    height: 24,
    borderRadius: 6,
    padding: 2,
    justifyContent: 'center',
  },
  switchOn: { backgroundColor: '#A7C257' },
  switchOff: { backgroundColor: '#E3E3E3' },
  switchThumb: { width: 16, height: 16, borderRadius: 2 },
  thumbOn: { alignSelf: 'flex-end' },
  thumbOff: { alignSelf: 'flex-start' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  menuIcon: { marginRight: 12, width: 20 },
  menuText: { fontSize: 16, fontWeight: '400', color: '#333', flex: 1 },
  versionSection: { paddingVertical: 8 },
  versionInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  versionLabel: { fontSize: 16, fontWeight: '400', color: '#333' },
  versionValue: { fontSize: 16, fontWeight: '500', color: '#666' },
  divider: {
    height: 0.5,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  bottomSection: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 32,
  },
  saveButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

// ==========================================
// TABLET PORTRAIT STYLES
// ==========================================
const tabletStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 44,
  },
  headerRight: { width: 44 },
  scrollView: { 
    flex: 1, 
    backgroundColor: '#F5F5F5',
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  section: { marginTop: 32 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    marginLeft: 40,
  },
  sectionContent: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginHorizontal: 40,
    paddingVertical: 8,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  notificationLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  notificationIcon: { marginRight: 18, width: 28 },
  notificationText: { fontSize: 20, fontWeight: '500', color: '#333', flex: 1 },
  customSwitch: {
    width: 70,
    height: 34,
    borderRadius: 8,
    padding: 3,
    justifyContent: 'center',
  },
  switchOn: { backgroundColor: '#A7C257' },
  switchOff: { backgroundColor: '#E3E3E3' },
  switchThumb: { width: 24, height: 24, borderRadius: 3 },
  thumbOn: { alignSelf: 'flex-end' },
  thumbOff: { alignSelf: 'flex-start' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  menuIcon: { marginRight: 18, width: 28 },
  menuText: { fontSize: 20, fontWeight: '500', color: '#333', flex: 1 },
  versionSection: { paddingVertical: 12 },
  versionInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  versionLabel: { fontSize: 20, fontWeight: '500', color: '#333' },
  versionValue: { fontSize: 20, fontWeight: '600', color: '#666' },
  divider: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 24,
    marginVertical: 12,
  },
  bottomSection: {
    backgroundColor: '#FFF',
    paddingHorizontal: 40,
    paddingVertical: 24,
    paddingBottom: 40,
  },
  saveButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
});

// ==========================================
// TABLET LANDSCAPE STYLES (New)
// ==========================================
const landscapeTabletStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 44,
  },
  headerRight: { width: 44 },
  scrollView: { 
    flex: 1, 
    backgroundColor: '#F5F5F5',
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  section: { marginTop: 24 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 14,
    marginLeft: 60,
  },
  sectionContent: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginHorizontal: 60,
    paddingVertical: 6,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  notificationLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  notificationIcon: { marginRight: 16, width: 28 },
  notificationText: { fontSize: 18, fontWeight: '500', color: '#333', flex: 1 },
  customSwitch: {
    width: 65,
    height: 32,
    borderRadius: 7,
    padding: 3,
    justifyContent: 'center',
  },
  switchOn: { backgroundColor: '#A7C257' },
  switchOff: { backgroundColor: '#E3E3E3' },
  switchThumb: { width: 22, height: 22, borderRadius: 3 },
  thumbOn: { alignSelf: 'flex-end' },
  thumbOff: { alignSelf: 'flex-start' },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  menuIcon: { marginRight: 16, width: 28 },
  menuText: { fontSize: 18, fontWeight: '500', color: '#333', flex: 1 },
  versionSection: { paddingVertical: 10 },
  versionInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  versionLabel: { fontSize: 18, fontWeight: '500', color: '#333' },
  versionValue: { fontSize: 18, fontWeight: '600', color: '#666' },
  divider: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  bottomSection: {
    backgroundColor: '#FFF',
    paddingHorizontal: 60,
    paddingVertical: 20,
    paddingBottom: 32,
  },
  saveButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Settings;