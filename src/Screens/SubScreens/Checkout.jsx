

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   TextInput,
//   ScrollView,
//   Modal,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';

// const Checkout = ({ navigation }) => {
//   const [selectedPayment, setSelectedPayment] = useState('pay_on_collection');
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     cardHolderName: '',
//     expirationMonth: '',
//     expirationYear: '',
//     cvv: '',
//   });

//   const [walletDetails, setWalletDetails] = useState({
//     provider: '',
//     phoneOrEmail: '',
//   });

//   const [showProviderDropdown, setShowProviderDropdown] = useState(false);

//   const paymentOptions = [
//     {
//       id: 'pay_on_collection',
//       title: 'Pay on Collection',
//       icon: 'radio-button-on',
//       iconOff: 'radio-button-off',
//     },
//     {
//       id: 'credit_card',
//       title: 'Credit Card',
//       icon: 'radio-button-on',
//       iconOff: 'radio-button-off',
//     },
//     {
//       id: 'digital_wallet',
//       title: 'Digital Wallet',
//       icon: 'radio-button-on',
//       iconOff: 'radio-button-off',
//     },
//   ];

//   const walletProviders = [
//     'PayPal',
//     'Apple Pay',
//     'Google Pay',
//     'Samsung Pay',
//     'Venmo',
//     'Cash App',
//   ];

//   const handlePaymentSelection = (paymentId) => {
//     setSelectedPayment(paymentId);
//   };

//   const handlePayNow = () => {
//     // Handle payment processing based on selected payment method
//     console.log('Processing payment with:', selectedPayment);
    
//     if (selectedPayment === 'pay_on_collection') {
//       // Navigate directly to Thanks page for Pay on Collection
//       navigation.navigate('Thanks');
//     } else if (selectedPayment === 'credit_card') {
//       // Navigate to Verify page for Credit Card payment
//       console.log('Card details:', cardDetails);
//       navigation.navigate('Verify');
//     } else if (selectedPayment === 'digital_wallet') {
//       // Navigate to Verify page for Digital Wallet payment
//       console.log('Wallet details:', walletDetails);
//       navigation.navigate('Verify');
//     }
//   };

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const updateCardDetails = (field, value) => {
//     setCardDetails(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const updateWalletDetails = (field, value) => {
//     setWalletDetails(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const selectProvider = (provider) => {
//     updateWalletDetails('provider', provider);
//     setShowProviderDropdown(false);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Checkout</Text>
//         <View style={styles.headerRight} />
//       </View>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Payment Options */}
//         <View style={styles.paymentSection}>
//           {paymentOptions.map((option) => (
//             <TouchableOpacity
//               key={option.id}
//               style={styles.paymentOption}
//               onPress={() => handlePaymentSelection(option.id)}
//               activeOpacity={0.7}
//             >
//               <Icon
//                 name={selectedPayment === option.id ? option.icon : option.iconOff}
//                 size={25}
//                 color={selectedPayment === option.id ? '#455625' : '#E3E3E3'}
//               />
//               <Text style={styles.paymentOptionText}>{option.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Credit Card Form - Show only when Credit Card is selected */}
//         {selectedPayment === 'credit_card' && (
//           <View style={styles.creditCardForm}>
//             <Text style={styles.formTitle}>Add New Card</Text>
            
//             {/* Card Number */}
//             <View style={styles.inputGroup}>
//               <Text style={styles.inputLabel}>Card Number</Text>
//               <TextInput
//                 style={styles.textInput}
//                 value={cardDetails.cardNumber}
//                 onChangeText={(text) => updateCardDetails('cardNumber', text)}
//                 placeholder="1234 5678 9012 3456"
//                 placeholderTextColor="#999"
//                 keyboardType="numeric"
//                 maxLength={19}
//               />
//             </View>

//             {/* Card Holder Name */}
//             <View style={styles.inputGroup}>
//               <Text style={styles.inputLabel}>Card Holder Name</Text>
//               <TextInput
//                 style={styles.textInput}
//                 value={cardDetails.cardHolderName}
//                 onChangeText={(text) => updateCardDetails('cardHolderName', text)}
//                 placeholder="John Doe"
//                 placeholderTextColor="#999"
//               />
//             </View>

//             {/* Expiration Date and CVV */}
//             <View style={styles.rowInputs}>
//               <View style={styles.halfInput}>
//                 <Text style={styles.inputLabel}>Expiration Date</Text>
//                 <View style={styles.expirationRow}>
//                   <TextInput
//                     style={[styles.textInput, styles.monthInput]}
//                     value={cardDetails.expirationMonth}
//                     onChangeText={(text) => updateCardDetails('expirationMonth', text)}
//                     placeholder="MM"
//                     placeholderTextColor="#999"
//                     keyboardType="numeric"
//                     maxLength={2}
//                   />
//                   <TextInput
//                     style={[styles.textInput, styles.yearInput]}
//                     value={cardDetails.expirationYear}
//                     onChangeText={(text) => updateCardDetails('expirationYear', text)}
//                     placeholder="YYYY"
//                     placeholderTextColor="#999"
//                     keyboardType="numeric"
//                     maxLength={4}
//                   />
//                 </View>
//               </View>
              
//               <View style={styles.halfInput}>
//                 <Text style={styles.inputLabel}>Code</Text>
//                 <TextInput
//                   style={[styles.textInput, styles.cvvInput]}
//                   value={cardDetails.cvv}
//                   onChangeText={(text) => updateCardDetails('cvv', text)}
//                   placeholder="123"
//                   placeholderTextColor="#999"
//                   keyboardType="numeric"
//                   maxLength={4}
//                   secureTextEntry
//                 />
//               </View>
//             </View>
//           </View>
//         )}

//         {/* Digital Wallet Form - Show only when Digital Wallet is selected */}
//         {selectedPayment === 'digital_wallet' && (
//           <View style={styles.digitalWalletForm}>
//             <Text style={styles.formTitle}>Add New Wallet</Text>
            
//             {/* Wallet Provider */}
//             <View style={styles.inputGroup}>
//               <Text style={styles.inputLabel}>Wallet Provider</Text>
//               <TouchableOpacity 
//                 style={styles.dropdown}
//                 onPress={() => setShowProviderDropdown(true)}
//               >
//                 <Text style={styles.dropdownText}>
//                   {walletDetails.provider || 'Select A Provider'}
//                 </Text>
//                 <Icon name="chevron-down" size={16} color="#666" />
//               </TouchableOpacity>
//             </View>

//             {/* Linked Phone or Email */}
//             <View style={styles.inputGroup}>
//               <Text style={styles.inputLabel}>Linked Phone or Email</Text>
//               <TextInput
//                 style={styles.textInput}
//                 value={walletDetails.phoneOrEmail}
//                 onChangeText={(text) => updateWalletDetails('phoneOrEmail', text)}
//                 placeholder="Enter phone number or email"
//                 placeholderTextColor="#999"
//                 keyboardType="email-address"
//               />
//             </View>
//           </View>
//         )}

//         {/* Spacer */}
//         <View style={styles.spacer} />
//       </ScrollView>

//       {/* Provider Selection Modal */}
//       <Modal
//         visible={showProviderDropdown}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowProviderDropdown(false)}
//       >
//         <TouchableOpacity 
//           style={styles.modalOverlay}
//           onPress={() => setShowProviderDropdown(false)}
//         >
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Wallet Provider</Text>
//             {walletProviders.map((provider, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.providerOption}
//                 onPress={() => selectProvider(provider)}
//               >
//                 <Text style={styles.providerOptionText}>{provider}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </TouchableOpacity>
//       </Modal>

//       {/* Bottom Section */}
//       <View style={styles.bottomSection}>
//         <View style={styles.totalSection}>
//           <Text style={styles.totalLabel}>Total Amount:</Text>
//           <Text style={styles.totalAmount}>£209.99</Text>
//         </View>
        
//         <TouchableOpacity onPress={handlePayNow} activeOpacity={0.8} style={{ borderRadius: 12 }}>
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.payNowButton}
//           >
//             <Text style={styles.payNowButtonText}>Pay Now</Text>
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
//     backgroundColor: '#F5F5F5',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 40,
//   },
//   headerRight: {
//     width: 40,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   paymentSection: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 0,
//     paddingVertical: 8,
//   },
//   paymentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#E8E8E8',
//   },
//   paymentOptionText: {
//     fontSize: 16,
//     color: 'black',
//     marginLeft: 12,
//     fontWeight: '600',
//   },
//   creditCardForm: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   digitalWalletForm: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   formTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: 'black',
//     marginBottom: 20,
//   },
//   inputGroup: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 14,
//     color: 'black',
//     fontWeight: '500',
//     marginBottom: 8,
//   },
//   textInput: {
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     fontSize: 14,
//     color: '#333',
//     borderWidth: 0,
//   },
//   dropdown: {
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   dropdownText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   rowInputs: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   halfInput: {
//     flex: 0.48,
//   },
//   expirationRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   monthInput: {
//     flex: 0.45,
//   },
//   yearInput: {
//     flex: 0.5,
//   },
//   cvvInput: {
//     width: '100%',
//   },
//   spacer: {
//     flex: 1,
//     minHeight: 20,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 20,
//     width: '80%',
//     maxHeight: '60%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   providerOption: {
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   providerOptionText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   bottomSection: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     height: 120,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   totalSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'black',
//   },
//   totalAmount: {
//     fontSize: 18,
//     fontWeight: '900',
//     color: 'black',
//   },
//   payNowButton: {
//     paddingVertical: 7,
//     borderRadius: 12,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   payNowButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default Checkout;


// the above code is for mobile only 

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   TextInput,
//   ScrollView,
//   Modal,
//   Dimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';

// const Checkout = ({ navigation }) => {
//   const [selectedPayment, setSelectedPayment] = useState('pay_on_collection');
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     cardHolderName: '',
//     expirationMonth: '',
//     expirationYear: '',
//     cvv: '',
//   });

//   const [walletDetails, setWalletDetails] = useState({
//     provider: '',
//     phoneOrEmail: '',
//   });

//   const [showProviderDropdown, setShowProviderDropdown] = useState(false);
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));

//   const { width: screenWidth } = dimensions;
//   const isTablet = screenWidth >= 768;

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const paymentOptions = [
//     {
//       id: 'pay_on_collection',
//       title: 'Pay on Collection',
//       icon: 'radio-button-on',
//       iconOff: 'radio-button-off',
//     },
//     {
//       id: 'credit_card',
//       title: 'Credit Card',
//       icon: 'radio-button-on',
//       iconOff: 'radio-button-off',
//     },
//     {
//       id: 'digital_wallet',
//       title: 'Digital Wallet',
//       icon: 'radio-button-on',
//       iconOff: 'radio-button-off',
//     },
//   ];

//   const walletProviders = [
//     'PayPal',
//     'Apple Pay',
//     'Google Pay',
//     'Samsung Pay',
//     'Venmo',
//     'Cash App',
//   ];

//   const handlePaymentSelection = (paymentId) => {
//     setSelectedPayment(paymentId);
//   };

//   const handlePayNow = () => {
//     // Handle payment processing based on selected payment method
//     console.log('Processing payment with:', selectedPayment);
    
//     if (selectedPayment === 'pay_on_collection') {
//       // Navigate directly to Thanks page for Pay on Collection
//       navigation.navigate('Thanks');
//     } else if (selectedPayment === 'credit_card') {
//       // Navigate to Verify page for Credit Card payment
//       console.log('Card details:', cardDetails);
//       navigation.navigate('Verify');
//     } else if (selectedPayment === 'digital_wallet') {
//       // Navigate to Verify page for Digital Wallet payment
//       console.log('Wallet details:', walletDetails);
//       navigation.navigate('Verify');
//     }
//   };

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const updateCardDetails = (field, value) => {
//     setCardDetails(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const updateWalletDetails = (field, value) => {
//     setWalletDetails(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const selectProvider = (provider) => {
//     updateWalletDetails('provider', provider);
//     setShowProviderDropdown(false);
//   };

//   const currentStyles = isTablet ? tabletStyles : styles;

//   return (
//     <SafeAreaView style={currentStyles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
//       {/* Header */}
//       <View style={currentStyles.header}>
//         <TouchableOpacity style={currentStyles.backButton} onPress={handleGoBack}>
//           <Icon name="arrow-back" size={isTablet ? 28 : 24} color="#333" />
//         </TouchableOpacity>
//         <Text style={currentStyles.headerTitle}>Checkout</Text>
//         <View style={currentStyles.headerRight} />
//       </View>

//       <ScrollView style={currentStyles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Payment Options */}
//         <View style={currentStyles.paymentSection}>
//           {paymentOptions.map((option) => (
//             <TouchableOpacity
//               key={option.id}
//               style={currentStyles.paymentOption}
//               onPress={() => handlePaymentSelection(option.id)}
//               activeOpacity={0.7}
//             >
//               <Icon
//                 name={selectedPayment === option.id ? option.icon : option.iconOff}
//                 size={isTablet ? 30 : 25}
//                 color={selectedPayment === option.id ? '#455625' : '#E3E3E3'}
//               />
//               <Text style={currentStyles.paymentOptionText}>{option.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Credit Card Form - Show only when Credit Card is selected */}
//         {selectedPayment === 'credit_card' && (
//           <View style={currentStyles.creditCardForm}>
//             <Text style={currentStyles.formTitle}>Add New Card</Text>
            
//             {/* Card Number */}
//             <View style={currentStyles.inputGroup}>
//               <Text style={currentStyles.inputLabel}>Card Number</Text>
//               <TextInput
//                 style={currentStyles.textInput}
//                 value={cardDetails.cardNumber}
//                 onChangeText={(text) => updateCardDetails('cardNumber', text)}
//                 placeholder="1234 5678 9012 3456"
//                 placeholderTextColor="#999"
//                 keyboardType="numeric"
//                 maxLength={19}
//               />
//             </View>

//             {/* Card Holder Name */}
//             <View style={currentStyles.inputGroup}>
//               <Text style={currentStyles.inputLabel}>Card Holder Name</Text>
//               <TextInput
//                 style={currentStyles.textInput}
//                 value={cardDetails.cardHolderName}
//                 onChangeText={(text) => updateCardDetails('cardHolderName', text)}
//                 placeholder="John Doe"
//                 placeholderTextColor="#999"
//               />
//             </View>

//             {/* Expiration Date and CVV */}
//             <View style={currentStyles.rowInputs}>
//               <View style={currentStyles.halfInput}>
//                 <Text style={currentStyles.inputLabel}>Expiration Date</Text>
//                 <View style={currentStyles.expirationRow}>
//                   <TextInput
//                     style={[currentStyles.textInput, currentStyles.monthInput]}
//                     value={cardDetails.expirationMonth}
//                     onChangeText={(text) => updateCardDetails('expirationMonth', text)}
//                     placeholder="MM"
//                     placeholderTextColor="#999"
//                     keyboardType="numeric"
//                     maxLength={2}
//                   />
//                   <TextInput
//                     style={[currentStyles.textInput, currentStyles.yearInput]}
//                     value={cardDetails.expirationYear}
//                     onChangeText={(text) => updateCardDetails('expirationYear', text)}
//                     placeholder="YYYY"
//                     placeholderTextColor="#999"
//                     keyboardType="numeric"
//                     maxLength={4}
//                   />
//                 </View>
//               </View>
              
//               <View style={currentStyles.halfInput}>
//                 <Text style={currentStyles.inputLabel}>Code</Text>
//                 <TextInput
//                   style={[currentStyles.textInput, currentStyles.cvvInput]}
//                   value={cardDetails.cvv}
//                   onChangeText={(text) => updateCardDetails('cvv', text)}
//                   placeholder="123"
//                   placeholderTextColor="#999"
//                   keyboardType="numeric"
//                   maxLength={4}
//                   secureTextEntry
//                 />
//               </View>
//             </View>
//           </View>
//         )}

//         {/* Digital Wallet Form - Show only when Digital Wallet is selected */}
//         {selectedPayment === 'digital_wallet' && (
//           <View style={currentStyles.digitalWalletForm}>
//             <Text style={currentStyles.formTitle}>Add New Wallet</Text>
            
//             {/* Wallet Provider */}
//             <View style={currentStyles.inputGroup}>
//               <Text style={currentStyles.inputLabel}>Wallet Provider</Text>
//               <TouchableOpacity 
//                 style={currentStyles.dropdown}
//                 onPress={() => setShowProviderDropdown(true)}
//               >
//                 <Text style={currentStyles.dropdownText}>
//                   {walletDetails.provider || 'Select A Provider'}
//                 </Text>
//                 <Icon name="chevron-down" size={isTablet ? 20 : 16} color="#666" />
//               </TouchableOpacity>
//             </View>

//             {/* Linked Phone or Email */}
//             <View style={currentStyles.inputGroup}>
//               <Text style={currentStyles.inputLabel}>Linked Phone or Email</Text>
//               <TextInput
//                 style={currentStyles.textInput}
//                 value={walletDetails.phoneOrEmail}
//                 onChangeText={(text) => updateWalletDetails('phoneOrEmail', text)}
//                 placeholder="Enter phone number or email"
//                 placeholderTextColor="#999"
//                 keyboardType="email-address"
//               />
//             </View>
//           </View>
//         )}

//         {/* Spacer */}
//         <View style={currentStyles.spacer} />
//       </ScrollView>

//       {/* Provider Selection Modal */}
//       <Modal
//         visible={showProviderDropdown}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowProviderDropdown(false)}
//       >
//         <TouchableOpacity 
//           style={currentStyles.modalOverlay}
//           onPress={() => setShowProviderDropdown(false)}
//         >
//           <View style={currentStyles.modalContent}>
//             <Text style={currentStyles.modalTitle}>Select Wallet Provider</Text>
//             {walletProviders.map((provider, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={currentStyles.providerOption}
//                 onPress={() => selectProvider(provider)}
//               >
//                 <Text style={currentStyles.providerOptionText}>{provider}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </TouchableOpacity>
//       </Modal>

//       {/* Bottom Section */}
//       <View style={currentStyles.bottomSection}>
//         <View style={currentStyles.totalSection}>
//           <Text style={currentStyles.totalLabel}>Total Amount:</Text>
//           <Text style={currentStyles.totalAmount}>£209.99</Text>
//         </View>
        
//         <TouchableOpacity onPress={handlePayNow} activeOpacity={0.8} style={{ borderRadius: isTablet ? 16 : 12 }}>
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={currentStyles.payNowButton}
//           >
//             <Text style={currentStyles.payNowButtonText}>Pay Now</Text>
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
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     backgroundColor: '#F5F5F5',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 40,
//   },
//   headerRight: {
//     width: 40,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   paymentSection: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 0,
//     paddingVertical: 8,
//   },
//   paymentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#E8E8E8',
//   },
//   paymentOptionText: {
//     fontSize: 16,
//     color: 'black',
//     marginLeft: 12,
//     fontWeight: '600',
//   },
//   creditCardForm: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   digitalWalletForm: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   formTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: 'black',
//     marginBottom: 20,
//   },
//   inputGroup: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 14,
//     color: 'black',
//     fontWeight: '500',
//     marginBottom: 8,
//   },
//   textInput: {
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     fontSize: 14,
//     color: '#333',
//     borderWidth: 0,
//   },
//   dropdown: {
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   dropdownText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   rowInputs: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   halfInput: {
//     flex: 0.48,
//   },
//   expirationRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   monthInput: {
//     flex: 0.45,
//   },
//   yearInput: {
//     flex: 0.5,
//   },
//   cvvInput: {
//     width: '100%',
//   },
//   spacer: {
//     flex: 1,
//     minHeight: 20,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 20,
//     width: '80%',
//     maxHeight: '60%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   providerOption: {
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   providerOptionText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   bottomSection: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     height: 120,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   totalSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'black',
//   },
//   totalAmount: {
//     fontSize: 18,
//     fontWeight: '900',
//     color: 'black',
//   },
//   payNowButton: {
//     paddingVertical: 7,
//     borderRadius: 12,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   payNowButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     backgroundColor: '#F5F5F5',
//     paddingVertical: 24,
//     paddingHorizontal: 40,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   backButton: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#333',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 50,
//   },
//   headerRight: {
//     width: 50,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   paymentSection: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 0,
//     paddingVertical: 12,
//     maxWidth: 900,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   paymentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//     paddingVertical: 24,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#E8E8E8',
//   },
//   paymentOptionText: {
//     fontSize: 22,
//     color: 'black',
//     marginLeft: 16,
//     fontWeight: '600',
//   },
//   creditCardForm: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 1,
//     paddingHorizontal: 40,
//     paddingVertical: 32,
//     maxWidth: 900,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   digitalWalletForm: {
//     backgroundColor: '#FFFFFF',
//     marginTop: 1,
//     paddingHorizontal: 40,
//     paddingVertical: 32,
//     maxWidth: 900,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   formTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: 'black',
//     marginBottom: 28,
//   },
//   inputGroup: {
//     marginBottom: 24,
//   },
//   inputLabel: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   textInput: {
//     backgroundColor: '#F0F0F0',
//     borderRadius: 12,
//     paddingHorizontal: 20,
//     paddingVertical: 18,
//     fontSize: 18,
//     color: '#333',
//     borderWidth: 0,
//     height: 60,
//   },
//   dropdown: {
//     backgroundColor: '#F0F0F0',
//     borderRadius: 12,
//     paddingHorizontal: 20,
//     paddingVertical: 18,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: 60,
//   },
//   dropdownText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   rowInputs: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   halfInput: {
//     flex: 0.48,
//   },
//   expirationRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   monthInput: {
//     flex: 0.45,
//   },
//   yearInput: {
//     flex: 0.5,
//   },
//   cvvInput: {
//     width: '100%',
//   },
//   spacer: {
//     flex: 1,
//     minHeight: 30,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     padding: 32,
//     width: '70%',
//     maxWidth: 600,
//     maxHeight: '70%',
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 28,
//     textAlign: 'center',
//   },
//   providerOption: {
//     paddingVertical: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   providerOptionText: {
//     fontSize: 20,
//     color: '#333',
//   },
//   bottomSection: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 40,
//     paddingVertical: 28,
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     height: 150,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     maxWidth: 900,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   totalSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   totalLabel: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: 'black',
//   },
//   totalAmount: {
//     fontSize: 26,
//     fontWeight: '900',
//     color: 'black',
//   },
//   payNowButton: {
//     paddingVertical: 10,
//     borderRadius: 16,
//     height: 56,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//   },
//   payNowButtonText: {
//     color: '#FFFFFF',
//     fontSize: 24,
//     fontWeight: '700',
//   },
// });

// export default Checkout;



// the above is for mobile and tablet 



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Checkout = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState('pay_on_collection');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
  });

  const [walletDetails, setWalletDetails] = useState({
    provider: '',
    phoneOrEmail: '',
  });

  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
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

  const paymentOptions = [
    {
      id: 'pay_on_collection',
      title: 'Pay on Collection',
      icon: 'radio-button-on',
      iconOff: 'radio-button-off',
    },
    {
      id: 'credit_card',
      title: 'Credit Card',
      icon: 'radio-button-on',
      iconOff: 'radio-button-off',
    },
    {
      id: 'digital_wallet',
      title: 'Digital Wallet',
      icon: 'radio-button-on',
      iconOff: 'radio-button-off',
    },
  ];

  const walletProviders = [
    'PayPal',
    'Apple Pay',
    'Google Pay',
    'Samsung Pay',
    'Venmo',
    'Cash App',
  ];

  const handlePaymentSelection = (paymentId) => {
    setSelectedPayment(paymentId);
  };

  const handlePayNow = () => {
    console.log('Processing payment with:', selectedPayment);
    
    if (selectedPayment === 'pay_on_collection') {
      navigation.navigate('Thanks');
    } else if (selectedPayment === 'credit_card') {
      console.log('Card details:', cardDetails);
      navigation.navigate('Verify');
    } else if (selectedPayment === 'digital_wallet') {
      console.log('Wallet details:', walletDetails);
      navigation.navigate('Verify');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const updateCardDetails = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateWalletDetails = (field, value) => {
    setWalletDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selectProvider = (provider) => {
    updateWalletDetails('provider', provider);
    setShowProviderDropdown(false);
  };

  const currentStyles = isTablet && isLandscape ? landscapeTabletStyles : isTablet ? tabletStyles : styles;

  // Payment Summary Component (for landscape right side)
  const PaymentSummary = () => (
    <View style={currentStyles.paymentSummaryContainer}>
      <View style={currentStyles.summaryCard}>
        {/* <Text style={currentStyles.summaryTitle}>Payment Summary</Text> */}
        <View style={currentStyles.summaryDivider} />
        <View style={currentStyles.totalSection}>
          <Text style={currentStyles.totalLabel}>Total Amount:</Text>
          <Text style={currentStyles.totalAmount}>£209.99</Text>
        </View>
        
        <TouchableOpacity onPress={handlePayNow} activeOpacity={0.8} style={{ borderRadius: isTablet ? 16 : 12 }}>
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={currentStyles.payNowButton}
          >
            <Text style={currentStyles.payNowButtonText}>Pay Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={currentStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      <View style={currentStyles.header}>
        <TouchableOpacity style={currentStyles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-back" size={isTablet ? 28 : 24} color="#333" />
        </TouchableOpacity>
        <Text style={currentStyles.headerTitle}>Checkout</Text>
        <View style={currentStyles.headerRight} />
      </View>

      {isTablet && isLandscape ? (
        // Landscape Layout: Content Left, Summary Right
        <View style={currentStyles.landscapeContent}>
          <ScrollView 
            style={currentStyles.leftScrollView} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={currentStyles.leftScrollContent}
          >
            {/* Payment Options */}
            <View style={currentStyles.paymentSection}>
              {paymentOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={currentStyles.paymentOption}
                  onPress={() => handlePaymentSelection(option.id)}
                  activeOpacity={0.7}
                >
                  <Icon
                    name={selectedPayment === option.id ? option.icon : option.iconOff}
                    size={isTablet ? 30 : 25}
                    color={selectedPayment === option.id ? '#455625' : '#E3E3E3'}
                  />
                  <Text style={currentStyles.paymentOptionText}>{option.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Credit Card Form */}
            {selectedPayment === 'credit_card' && (
              <View style={currentStyles.creditCardForm}>
                <Text style={currentStyles.formTitle}>Add New Card</Text>
                
                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Card Number</Text>
                  <TextInput
                    style={currentStyles.textInput}
                    value={cardDetails.cardNumber}
                    onChangeText={(text) => updateCardDetails('cardNumber', text)}
                    placeholder="1234 5678 9012 3456"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    maxLength={19}
                  />
                </View>

                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Card Holder Name</Text>
                  <TextInput
                    style={currentStyles.textInput}
                    value={cardDetails.cardHolderName}
                    onChangeText={(text) => updateCardDetails('cardHolderName', text)}
                    placeholder="John Doe"
                    placeholderTextColor="#999"
                  />
                </View>

                <View style={currentStyles.rowInputs}>
                  <View style={currentStyles.halfInput}>
                    <Text style={currentStyles.inputLabel}>Expiration Date</Text>
                    <View style={currentStyles.expirationRow}>
                      <TextInput
                        style={[currentStyles.textInput, currentStyles.monthInput]}
                        value={cardDetails.expirationMonth}
                        onChangeText={(text) => updateCardDetails('expirationMonth', text)}
                        placeholder="MM"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        maxLength={2}
                      />
                      <TextInput
                        style={[currentStyles.textInput, currentStyles.yearInput]}
                        value={cardDetails.expirationYear}
                        onChangeText={(text) => updateCardDetails('expirationYear', text)}
                        placeholder="YYYY"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        maxLength={4}
                      />
                    </View>
                  </View>
                  
                  <View style={currentStyles.halfInput}>
                    <Text style={currentStyles.inputLabel}>Code</Text>
                    <TextInput
                      style={[currentStyles.textInput, currentStyles.cvvInput]}
                      value={cardDetails.cvv}
                      onChangeText={(text) => updateCardDetails('cvv', text)}
                      placeholder="123"
                      placeholderTextColor="#999"
                      keyboardType="numeric"
                      maxLength={4}
                      secureTextEntry
                    />
                  </View>
                </View>
              </View>
            )}

            {/* Digital Wallet Form */}
            {selectedPayment === 'digital_wallet' && (
              <View style={currentStyles.digitalWalletForm}>
                <Text style={currentStyles.formTitle}>Add New Wallet</Text>
                
                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Wallet Provider</Text>
                  <TouchableOpacity 
                    style={currentStyles.dropdown}
                    onPress={() => setShowProviderDropdown(true)}
                  >
                    <Text style={currentStyles.dropdownText}>
                      {walletDetails.provider || 'Select A Provider'}
                    </Text>
                    <Icon name="chevron-down" size={isTablet ? 20 : 16} color="#666" />
                  </TouchableOpacity>
                </View>

                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Linked Phone or Email</Text>
                  <TextInput
                    style={currentStyles.textInput}
                    value={walletDetails.phoneOrEmail}
                    onChangeText={(text) => updateWalletDetails('phoneOrEmail', text)}
                    placeholder="Enter phone number or email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                  />
                </View>
              </View>
            )}

            <View style={currentStyles.spacer} />
          </ScrollView>

          {/* Right Side Payment Summary */}
          <PaymentSummary />
        </View>
      ) : (
        // Portrait/Mobile Layout: Normal vertical scroll
        <>
          <ScrollView style={currentStyles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Payment Options */}
            <View style={currentStyles.paymentSection}>
              {paymentOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={currentStyles.paymentOption}
                  onPress={() => handlePaymentSelection(option.id)}
                  activeOpacity={0.7}
                >
                  <Icon
                    name={selectedPayment === option.id ? option.icon : option.iconOff}
                    size={isTablet ? 30 : 25}
                    color={selectedPayment === option.id ? '#455625' : '#E3E3E3'}
                  />
                  <Text style={currentStyles.paymentOptionText}>{option.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Credit Card Form */}
            {selectedPayment === 'credit_card' && (
              <View style={currentStyles.creditCardForm}>
                <Text style={currentStyles.formTitle}>Add New Card</Text>
                
                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Card Number</Text>
                  <TextInput
                    style={currentStyles.textInput}
                    value={cardDetails.cardNumber}
                    onChangeText={(text) => updateCardDetails('cardNumber', text)}
                    placeholder="1234 5678 9012 3456"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    maxLength={19}
                  />
                </View>

                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Card Holder Name</Text>
                  <TextInput
                    style={currentStyles.textInput}
                    value={cardDetails.cardHolderName}
                    onChangeText={(text) => updateCardDetails('cardHolderName', text)}
                    placeholder="John Doe"
                    placeholderTextColor="#999"
                  />
                </View>

                <View style={currentStyles.rowInputs}>
                  <View style={currentStyles.halfInput}>
                    <Text style={currentStyles.inputLabel}>Expiration Date</Text>
                    <View style={currentStyles.expirationRow}>
                      <TextInput
                        style={[currentStyles.textInput, currentStyles.monthInput]}
                        value={cardDetails.expirationMonth}
                        onChangeText={(text) => updateCardDetails('expirationMonth', text)}
                        placeholder="MM"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        maxLength={2}
                      />
                      <TextInput
                        style={[currentStyles.textInput, currentStyles.yearInput]}
                        value={cardDetails.expirationYear}
                        onChangeText={(text) => updateCardDetails('expirationYear', text)}
                        placeholder="YYYY"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        maxLength={4}
                      />
                    </View>
                  </View>
                  
                  <View style={currentStyles.halfInput}>
                    <Text style={currentStyles.inputLabel}>Code</Text>
                    <TextInput
                      style={[currentStyles.textInput, currentStyles.cvvInput]}
                      value={cardDetails.cvv}
                      onChangeText={(text) => updateCardDetails('cvv', text)}
                      placeholder="123"
                      placeholderTextColor="#999"
                      keyboardType="numeric"
                      maxLength={4}
                      secureTextEntry
                    />
                  </View>
                </View>
              </View>
            )}

            {/* Digital Wallet Form */}
            {selectedPayment === 'digital_wallet' && (
              <View style={currentStyles.digitalWalletForm}>
                <Text style={currentStyles.formTitle}>Add New Wallet</Text>
                
                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Wallet Provider</Text>
                  <TouchableOpacity 
                    style={currentStyles.dropdown}
                    onPress={() => setShowProviderDropdown(true)}
                  >
                    <Text style={currentStyles.dropdownText}>
                      {walletDetails.provider || 'Select A Provider'}
                    </Text>
                    <Icon name="chevron-down" size={isTablet ? 20 : 16} color="#666" />
                  </TouchableOpacity>
                </View>

                <View style={currentStyles.inputGroup}>
                  <Text style={currentStyles.inputLabel}>Linked Phone or Email</Text>
                  <TextInput
                    style={currentStyles.textInput}
                    value={walletDetails.phoneOrEmail}
                    onChangeText={(text) => updateWalletDetails('phoneOrEmail', text)}
                    placeholder="Enter phone number or email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                  />
                </View>
              </View>
            )}

            <View style={currentStyles.spacer} />
          </ScrollView>

          {/* Bottom Section */}
          <View style={currentStyles.bottomSection}>
            <View style={currentStyles.totalSection}>
              <Text style={currentStyles.totalLabel}>Total Amount:</Text>
              <Text style={currentStyles.totalAmount}>£209.99</Text>
            </View>
            
            <TouchableOpacity onPress={handlePayNow} activeOpacity={0.8} style={{ borderRadius: isTablet ? 16 : 12 }}>
              <LinearGradient
                colors={['#455625', '#97BC51']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={currentStyles.payNowButton}
              >
                <Text style={currentStyles.payNowButtonText}>Pay Now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* Provider Selection Modal */}
      <Modal
        visible={showProviderDropdown}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowProviderDropdown(false)}
      >
        <TouchableOpacity 
          style={currentStyles.modalOverlay}
          onPress={() => setShowProviderDropdown(false)}
        >
          <View style={currentStyles.modalContent}>
            <Text style={currentStyles.modalTitle}>Select Wallet Provider</Text>
            {walletProviders.map((provider, index) => (
              <TouchableOpacity
                key={index}
                style={currentStyles.providerOption}
                onPress={() => selectProvider(provider)}
              >
                <Text style={currentStyles.providerOptionText}>{provider}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  scrollView: {
    flex: 1,
  },
  paymentSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    paddingVertical: 8,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8E8E8',
  },
  paymentOptionText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
    fontWeight: '600',
  },
  creditCardForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  digitalWalletForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    borderWidth: 0,
  },
  dropdown: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  expirationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthInput: {
    flex: 0.45,
  },
  yearInput: {
    flex: 0.5,
  },
  cvvInput: {
    width: '100%',
  },
  spacer: {
    flex: 1,
    minHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  providerOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  providerOptionText: {
    fontSize: 16,
    color: '#333',
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 120,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
  payNowButton: {
    paddingVertical: 7,
    borderRadius: 12,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  payNowButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

// ==========================================
// TABLET PORTRAIT STYLES
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 24,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginRight: 50,
  },
  headerRight: {
    width: 50,
  },
  scrollView: {
    flex: 1,
  },
  paymentSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    paddingVertical: 12,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8E8E8',
  },
  paymentOptionText: {
    fontSize: 22,
    color: 'black',
    marginLeft: 16,
    fontWeight: '600',
  },
  creditCardForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 40,
    paddingVertical: 32,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  digitalWalletForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 40,
    paddingVertical: 32,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    marginBottom: 28,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 18,
    color: '#333',
    borderWidth: 0,
    height: 60,
  },
  dropdown: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  dropdownText: {
    fontSize: 18,
    color: '#333',
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  expirationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthInput: {
    flex: 0.45,
  },
  yearInput: {
    flex: 0.5,
  },
  cvvInput: {
    width: '100%',
  },
  spacer: {
    flex: 1,
    minHeight: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    width: '70%',
    maxWidth: 600,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 28,
    textAlign: 'center',
  },
  providerOption: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  providerOptionText: {
    fontSize: 20,
    color: '#333',
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    paddingVertical: 28,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 150,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
  totalAmount: {
    fontSize: 26,
    fontWeight: '900',
    color: 'black',
  },
  payNowButton: {
    paddingVertical: 10,
    borderRadius: 16,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  payNowButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
});

// ==========================================
// TABLET LANDSCAPE STYLES (New)
// ==========================================
const landscapeTabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginRight: 50,
  },
  headerRight: {
    width: 50,
  },
  landscapeContent: {
    flex: 1,
    flexDirection: 'row',
  },
  leftScrollView: {
    flex: 1,
  },
  leftScrollContent: {
    paddingBottom: 20,
  },
  paymentSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    paddingVertical: 10,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E8E8E8',
  },
  paymentOptionText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 14,
    fontWeight: '600',
  },
  creditCardForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  digitalWalletForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginBottom: 22,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    borderWidth: 0,
    height: 50,
  },
  dropdown: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  expirationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthInput: {
    flex: 0.45,
  },
  yearInput: {
    flex: 0.5,
  },
  cvvInput: {
    width: '100%',
  },
  spacer: {
    minHeight: 20,
  },
  // Right side payment summary
  paymentSummaryContainer: {
    width: 520,
    padding: 30,
  marginTop:400
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },


  totalSection: {
    marginBottom: 20,
  flexDirection: "row",
  justifyContent: "space-between", // 👈 puts space between children
  alignItems: "center",
   
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
  },
  payNowButton: {
    paddingVertical: 16,
    borderRadius: 16,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  payNowButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    width: '60%',
    maxWidth: 500,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  providerOption: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  providerOptionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Checkout;