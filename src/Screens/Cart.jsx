
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TextInput,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import { useCart } from '../Context/CartContext'; // Import the cart hook
// import { SafeAreaView } from 'react-native-safe-area-context'; // ✅ Use safe-area-context

// const Cart = ({ navigation }) => {
//   // Use Cart Context instead of local state
//   const { cartItems, totalPrice, incrementItem, decrementItem, removeItem } = useCart();
//   const [orderNotes, setOrderNotes] = useState('');

//   const renderCartItem = item => (
//     <View style={styles.cartItem}>
//       <Image source={item.image} style={styles.productImage} />

//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//         <Text style={styles.itemPrice}>£{item.price.toFixed(2)}</Text>
//       </View>

//       <View style={styles.quantitySection}>
//         <View style={styles.quantityControls}>
//           {/* Left Button Logic */}
//           {item.quantity > 1 ? (
//             <TouchableOpacity
//               style={styles.quantityButton}
//               onPress={() => decrementItem(item.id)}
//             >
//               <Text style={styles.quantityButtonText}>-</Text>
//             </TouchableOpacity>
//           ) : item.quantity === 1 ? (
//             <TouchableOpacity
//               style={[styles.quantityButton, styles.deleteButton]}
//               onPress={() => removeItem(item.id)}
//             >
//               <Icon name="trash-outline" size={14} color="#666" />
//             </TouchableOpacity>
//           ) : null}

//           {/* Quantity Display */}
//           {item.quantity > 0 && (
//             <View style={styles.quantityDisplay}>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//             </View>
//           )}

//           {/* Plus Button */}
//           <TouchableOpacity
//             style={styles.quantityButton}
//             onPress={() => incrementItem(item.id)}
//           >
//             <Text style={styles.quantityButtonText}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Page Title */}
//       <View style={styles.titleContainer}>
//         <Text style={styles.headerTitle}>Cart</Text>
//       </View>

//       {/* Collection Slot */}
//       <View style={styles.collectionSlot}>
//         <TouchableOpacity style={styles.timeSlot}>
//           <Text style={styles.timeSlotText}>Collection Slot</Text>

//           {/* Background around time only */}
//           <View style={styles.timeContainer}>
//             <Text style={styles.timeText}>11:00AM - 12:00PM</Text>
//             <Icon name="chevron-down" size={16} color="#666" />
//           </View>
//         </TouchableOpacity>
//       </View>

//       <ScrollView
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Cart Items */}
//         <View style={styles.cartItemsContainer}>
//           {cartItems.length > 0 ? (
//             cartItems
//               .filter(item => item.quantity > 0) // Only show items with quantity > 0
//               .map(item => (
//                 <React.Fragment key={item.id}>
//                   {renderCartItem(item)}
//                 </React.Fragment>
//               ))
//           ) : (
//             <View style={styles.emptyCartContainer}>
//               <Text style={styles.emptyCartText}>Your cart is empty</Text>
//             </View>
//           )}
//         </View>
//       </ScrollView>

//       {/* Bottom Section - Order Notes moved here */}
//       <View style={styles.bottomSection}>
//         {/* Order Notes - Now positioned above Grand Total */}
//         <View style={styles.orderNotesContainer}>
//           <TextInput
//             style={styles.orderNotesInput}
//             placeholder="Order Notes..."
//             placeholderTextColor="#999"
//             value={orderNotes}
//             onChangeText={setOrderNotes}
//             multiline
//             numberOfLines={3}
//           />
//         </View>

//         <View style={styles.totalSection}>
//           <Text style={styles.grandTotalLabel}>Grand Total</Text>
//           <Text style={styles.grandTotalAmount}>
//             £{totalPrice.toFixed(2)}
//           </Text>
//         </View>

//         <TouchableOpacity
//           onPress={() => navigation.navigate('Checkout')}
//           activeOpacity={0.8}
//           style={{ borderRadius: 12 }}
//           disabled={cartItems.length === 0}
//         >
//           <LinearGradient
//             colors={cartItems.length > 0 ? ['#455625', '#97BC51'] : ['#ccc', '#999']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={[styles.checkoutButton, cartItems.length === 0 && styles.disabledButton]}
//           >
//             <Text style={styles.checkoutButtonText}>Checkout</Text>
//             <Icon name="chevron-forward" size={20} color="#FFFFFF" />
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
//   titleContainer: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
 
//   collectionSlot: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 60,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//   },
//   timeSlot: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   timeSlotText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#D2D2D2',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginLeft:3
   
//   },
//   timeText: {
//     fontSize: 14,
//     color: '#000',
//    paddingLeft:3,
//     paddingLeft:2

//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 12,
//     paddingTop: 12,
//   },
//   cartItemsContainer: {
//     gap: 12,
//   },
//   emptyCartContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 50,
//   },
//   emptyCartText: {
//     fontSize: 16,
//     color: '#666',
//     fontWeight: '500',
//   },
//   cartItem: {
//     width: 366,
//     height: 89,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     padding: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   productImage: {
//     width: 92,
//     height: 73,
//     resizeMode: 'contain',
//     marginRight: 12,
//   },
//   itemDetails: {
//     flex: 1,
//     paddingRight: 12,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 2,
//   },
//   packSize: {
//     fontSize: 11,
//     color: '#666',
//     marginBottom: 4,
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   quantitySection: {
//     marginTop:45,
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//   },
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 4,
//     backgroundColor: '#A7C257',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   deleteButton: {
//     backgroundColor: '#D9D9D9',
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//   },
//   quantityButtonText: {
//     color: '#455625',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   quantityDisplay: {
//     minWidth: 30,
//     height: 20,
//     marginHorizontal: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//     borderRadius: 3,
//   },
//   quantityText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'black',
//   },
//   bottomSection: {
//     paddingHorizontal: 20,
//     marginBottom: 50,
//     paddingTop: 16,
//     paddingBottom: 40,
//   },
//   orderNotesContainer: {
//     backgroundColor: '#D9D9D9',
//     marginBottom: 16,
//     borderRadius: 8,
//     padding: 12,
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   orderNotesInput: {
//     fontSize: 14,
//     color: '#333',
//     textAlignVertical: 'top',
//     minHeight: 60,
//     padding: 0,
//   },
//   totalSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   grandTotalLabel: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   grandTotalAmount: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   checkoutButton: {
//     backgroundColor: '#8BC34A',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   checkoutButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default Cart;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useCart } from '../Context/CartContext'; // Import the cart hook
import { SafeAreaView } from 'react-native-safe-area-context'; // ✅ Use safe-area-context

const Cart = ({ navigation }) => {
  // Use Cart Context instead of local state
  const { cartItems, totalPrice, incrementItem, decrementItem, removeItem } = useCart();
  const [orderNotes, setOrderNotes] = useState('');
  const [collectionTime, setCollectionTime] = useState('');

  // Function to format time in 12-hour format
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes}${ampm}`;
  };

  // Function to calculate collection time (current time + 2 hours)
  const calculateCollectionTime = () => {
    const now = new Date();
    const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour to start time
    
    const startTimeStr = formatTime(startTime);
    const endTimeStr = formatTime(endTime);
    
    return `${startTimeStr} - ${endTimeStr}`;
  };

  // Update collection time when component mounts
  useEffect(() => {
    setCollectionTime(calculateCollectionTime());
    
    // Optional: Update time every minute to keep it current
    const interval = setInterval(() => {
      setCollectionTime(calculateCollectionTime());
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const renderCartItem = item => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
        <Text style={styles.itemPrice}>£{item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.quantitySection}>
        <View style={styles.quantityControls}>
          {/* Left Button Logic */}
          {item.quantity > 1 ? (
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => decrementItem(item.id)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
          ) : item.quantity === 1 ? (
            <TouchableOpacity
              style={[styles.quantityButton, styles.deleteButton]}
              onPress={() => removeItem(item.id)}
            >
              <Icon name="trash-outline" size={14} color="#666" />
            </TouchableOpacity>
          ) : null}

          {/* Quantity Display */}
          {item.quantity > 0 && (
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>{item.quantity}</Text>
            </View>
          )}

          {/* Plus Button */}
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => incrementItem(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Page Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      {/* Collection Slot - Updated with dynamic time */}
      <View style={styles.collectionSlot}>
        <TouchableOpacity 
          style={styles.timeSlot}
          onPress={() => {
            // Recalculate time when pressed (optional)
            setCollectionTime(calculateCollectionTime());
          }}
        >
          <Text style={styles.timeSlotText}>Collection Slot</Text>

          {/* Background around time only */}
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{collectionTime}</Text>
            <Icon name="chevron-down" size={16} color="#666" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Cart Items */}
        <View style={styles.cartItemsContainer}>
          {cartItems.length > 0 ? (
            cartItems
              .filter(item => item.quantity > 0) // Only show items with quantity > 0
              .map(item => (
                <React.Fragment key={item.id}>
                  {renderCartItem(item)}
                </React.Fragment>
              ))
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartText}>Your cart is empty</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Section - Order Notes moved here */}
      <View style={styles.bottomSection}>
        {/* Order Notes - Now positioned above Grand Total */}
        <View style={styles.orderNotesContainer}>
          <TextInput
            style={styles.orderNotesInput}
            placeholder="Order Notes..."
            placeholderTextColor="#999"
            value={orderNotes}
            onChangeText={setOrderNotes}
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.grandTotalLabel}>Grand Total</Text>
          <Text style={styles.grandTotalAmount}>
            £{totalPrice.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Checkout')}
          activeOpacity={0.8}
          style={{ borderRadius: 12 }}
          disabled={cartItems.length === 0}
        >
          <LinearGradient
            colors={cartItems.length > 0 ? ['#455625', '#97BC51'] : ['#ccc', '#999']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.checkoutButton, cartItems.length === 0 && styles.disabledButton]}
          >
            <Text style={styles.checkoutButtonText}>Checkout</Text>
            <Icon name="chevron-forward" size={20} color="#FFFFFF" />
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
  titleContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 3,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
 
  collectionSlot: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#000',
  },
  timeContainer: {
    flexDirection: 'row',
    backgroundColor: '#D2D2D2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#000',
    paddingRight: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  cartItemsContainer: {
    gap: 12,
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyCartText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  cartItem: {
    width: 366,
    height: 89,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  productImage: {
    width: 92,
    height: 73,
    resizeMode: 'contain',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    paddingRight: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  packSize: {
    fontSize: 11,
    color: '#666',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  quantitySection: {
    marginTop: 45,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#A7C257',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  quantityButtonText: {
    color: '#455625',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityDisplay: {
    minWidth: 30,
    height: 20,
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  bottomSection: {
    paddingHorizontal: 20,
    marginBottom: 50,
    paddingTop: 16,
    paddingBottom: 40,
  },
  orderNotesContainer: {
    backgroundColor: '#D9D9D9',
    marginBottom: 16,
    borderRadius: 8,
    padding: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  orderNotesInput: {
    fontSize: 14,
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 60,
    padding: 0,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  grandTotalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#8BC34A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Cart;
