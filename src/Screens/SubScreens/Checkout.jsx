// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Checkout = ({navigation}) => {
//   const [selectedPayment, setSelectedPayment] = useState('pay_on_collection');

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

//   const handlePaymentSelection = (paymentId) => {
//     setSelectedPayment(paymentId);
//   };

//   const handlePayNow = () => {
//     // Handle payment processing
//     console.log('Processing payment with:', selectedPayment);
//   };

//   const handleGoBack = () => {
//     navigation.goBack();
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

//       {/* Payment Options */}
//       <View style={styles.paymentSection}>
//         {paymentOptions.map((option) => (
//           <TouchableOpacity
//             key={option.id}
//             style={styles.paymentOption}
//             onPress={() => handlePaymentSelection(option.id)}
//             activeOpacity={0.7}
//           >
//             <Icon
//               name={selectedPayment === option.id ? option.icon : option.iconOff}
//               size={20}
//               color={selectedPayment === option.id ? '#8BC34A' : '#D0D0D0'}
//             />
//             <Text style={styles.paymentOptionText}>{option.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Spacer */}
//       <View style={styles.spacer} />

//       {/* Bottom Section */}
//       <View style={styles.bottomSection}>
//         <View style={styles.totalSection}>
//           <Text style={styles.totalLabel}>Total Amount:</Text>
//           <Text style={styles.totalAmount}>£209.99</Text>
//         </View>
        
//         <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
//           <Text style={styles.payNowButtonText}>Pay Now</Text>
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
//     marginRight: 40, // Compensate for back button width
//   },
//   headerRight: {
//     width: 40, // Placeholder to center the title
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
//     color: '#333',
//     marginLeft: 12,
//     fontWeight: '400',
//   },
//   spacer: {
//     flex: 1,
//   },
//   bottomSection: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
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
//     marginBottom: 20,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#333',
//   },
//   totalAmount: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   payNowButton: {
//     backgroundColor: '#8BC34A',
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   payNowButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default Checkout;
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Checkout = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState('pay_on_collection');

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

  const handlePaymentSelection = (paymentId) => {
    setSelectedPayment(paymentId);
  };

  const handlePayNow = () => {
    // Handle payment processing
    console.log('Processing payment with:', selectedPayment);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Payment Options */}
      <View style={styles.paymentSection}>
        {paymentOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.paymentOption}
            onPress={() => handlePaymentSelection(option.id)}
            activeOpacity={0.7}
          >
            <Icon
              name={selectedPayment === option.id ? option.icon : option.iconOff}
              size={20}
              color={selectedPayment === option.id ? '#8BC34A' : '#D0D0D0'}
            />
            <Text style={styles.paymentOptionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalAmount}>£209.99</Text>
        </View>
        
        <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
          <Text style={styles.payNowButtonText}>Pay Now</Text>
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
    marginRight: 40, // Compensate for back button width
  },
  headerRight: {
    width: 40, // Placeholder to center the title
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
    color: '#333',
    marginLeft: 12,
    fontWeight: '400',
  },
  creditCardForm: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
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
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
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
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  payNowButton: {
    backgroundColor: '#8BC34A',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  payNowButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Checkout;