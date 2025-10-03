// import React, { useState, useEffect } from 'react';
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
// import PlusIcon from '../Assets/Images/PlusIcon.svg';
// import Delete from '../Assets/Images/Delete.svg';
// import Minusicon from '../Assets/Images/minusicon.svg';

// const Cart = ({ navigation }) => {
//   // Use Cart Context instead of local state
//   const { cartItems, totalPrice, incrementItem, decrementItem, removeItem } = useCart();
//   const [orderNotes, setOrderNotes] = useState('');
//   const [collectionTime, setCollectionTime] = useState('');

//   // Function to format time in 12-hour format
//   const formatTime = (date) => {
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const displayHours = hours % 12 || 12;
//     const displayMinutes = minutes.toString().padStart(2, '0');
//     return `${displayHours}:${displayMinutes}${ampm}`;
//   };

//   // Function to calculate collection time (current time + 2 hours)
//   const calculateCollectionTime = () => {
//     const now = new Date();
//     const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours
//     const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour to start time

//     const startTimeStr = formatTime(startTime);
//     const endTimeStr = formatTime(endTime);

//     return `${startTimeStr} - ${endTimeStr}`;
//   };

//   // Update collection time when component mounts
//   useEffect(() => {
//     setCollectionTime(calculateCollectionTime());

//     // Optional: Update time every minute to keep it current
//     const interval = setInterval(() => {
//       setCollectionTime(calculateCollectionTime());
//     }, 60000); // Update every minute

//     return () => clearInterval(interval);
//   }, []);

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
//               <Text style={styles.quantityButtonText}>
//                 {/* - */}
//                 <Minusicon/>
//                 </Text>
//             </TouchableOpacity>
//           ) : item.quantity === 1 ? (
//             <TouchableOpacity
//               style={[styles.quantityButton, styles.deleteButton]}
//               onPress={() => removeItem(item.id)}
//             >
//               {/* <Icon name="trash-outline" size={14} color="#666" /> */}
//               <Delete/>
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
//             <Text style={styles.quantityButtonText}>
//               {/* + */}
//               <PlusIcon/>
//               </Text>
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

//       {/* Collection Slot - Updated with dynamic time */}
//       <View style={styles.collectionSlot}>
//         <TouchableOpacity
//           style={styles.timeSlot}
//           onPress={() => {
//             // Recalculate time when pressed (optional)
//             setCollectionTime(calculateCollectionTime());
//           }}
//         >
//           <Text style={styles.timeSlotText}>Collection Slot</Text>

//           {/* Background around time only */}
//           <View style={styles.timeContainer}>
//             <Text style={styles.timeText}>{collectionTime}</Text>
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
//     paddingVertical: 3,
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
//     paddingVertical: 4,
//     marginLeft: 8,
//     alignItems: 'center',
//   },
//   timeText: {
//     fontSize: 14,
//     color: '#000',
//     paddingRight: 8,
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
//     marginTop: 45,
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//     borderRadius:4
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
//     marginBottom: 65,
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
//     marginBottom: 12,
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
//     marginTop:5,
//     paddingVertical: 10,
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



// the above is for mobile 

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TextInput,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import { useCart } from '../Context/CartContext';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import PlusIcon from '../Assets/Images/PlusIcon.svg';
// import Delete from '../Assets/Images/Delete.svg';
// import Minusicon from '../Assets/Images/minusicon.svg';

// const Cart = ({ navigation }) => {
//   const { cartItems, totalPrice, incrementItem, decrementItem, removeItem } =
//     useCart();
//   const [orderNotes, setOrderNotes] = useState('');
//   const [collectionTime, setCollectionTime] = useState('');
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));

//   const { width: screenWidth } = dimensions;
//   const isTablet = screenWidth >= 768;

//   // Listen for orientation changes
//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const formatTime = date => {
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const displayHours = hours % 12 || 12;
//     const displayMinutes = minutes.toString().padStart(2, '0');
//     return `${displayHours}:${displayMinutes}${ampm}`;
//   };

//   const calculateCollectionTime = () => {
//     const now = new Date();
//     const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
//     const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

//     const startTimeStr = formatTime(startTime);
//     const endTimeStr = formatTime(endTime);

//     return `${startTimeStr} - ${endTimeStr}`;
//   };

//   useEffect(() => {
//     setCollectionTime(calculateCollectionTime());

//     const interval = setInterval(() => {
//       setCollectionTime(calculateCollectionTime());
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentStyles = isTablet ? tabletStyles : styles;

//   const renderCartItem = item => (
//     <View style={currentStyles.cartItem}>
//       <Image source={item.image} style={currentStyles.productImage} />

//       <View style={currentStyles.itemDetails}>
//         <Text style={currentStyles.itemName}>{item.name}</Text>
//         <Text style={currentStyles.packSize}>Pack Size: {item.packSize}</Text>
//         <Text style={currentStyles.itemPrice}>£{item.price.toFixed(2)}</Text>
//       </View>

//       <View style={currentStyles.quantitySection}>
//         <View style={currentStyles.quantityControls}>
//           {item.quantity > 1 ? (
//             <TouchableOpacity
//               style={currentStyles.quantityButton}
//               onPress={() => decrementItem(item.id)}
//             >
//             <Minusicon 
//   width={isTablet ? 30 : 20} 
//   height={isTablet ? 30 : 20} 
// />
//             </TouchableOpacity>
//           ) : item.quantity === 1 ? (
//             <TouchableOpacity
//               style={[currentStyles.quantityButton, currentStyles.deleteButton]}
//               onPress={() => removeItem(item.id)}
//             >
//               <Delete width={isTablet ? 30 : 20} height={isTablet ? 30 : 20} />
//             </TouchableOpacity>
//           ) : null}

//           {item.quantity > 0 && (
//             <View style={currentStyles.quantityDisplay}>
//               <Text style={currentStyles.quantityText}>{item.quantity}</Text>
//             </View>
//           )}

//           <TouchableOpacity
//             style={currentStyles.quantityButton}
//             onPress={() => incrementItem(item.id)}
//           >
//             <PlusIcon width={isTablet ? 30 : 20} height={isTablet ? 30 : 20} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView
//       style={currentStyles.container}
//       edges={['top', 'left', 'right']}
//     >
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       <View style={currentStyles.titleContainer}>
//         <Text style={currentStyles.headerTitle}>Cart</Text>
//       </View>

//       <View style={currentStyles.collectionSlot}>
//         <TouchableOpacity
//           style={currentStyles.timeSlot}
//           onPress={() => {
//             setCollectionTime(calculateCollectionTime());
//           }}
//         >
//           <Text style={currentStyles.timeSlotText}>Collection Slot</Text>

//           <View style={currentStyles.timeContainer}>
//             <Text style={currentStyles.timeText}>{collectionTime}</Text>
//             <Icon name="chevron-down" size={isTablet ? 20 : 16} color="#666" />
//           </View>
//         </TouchableOpacity>
//       </View>

//       <ScrollView
//         style={currentStyles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={currentStyles.cartItemsContainer}>
//           {cartItems.length > 0 ? (
//             cartItems
//               .filter(item => item.quantity > 0)
//               .map(item => (
//                 <React.Fragment key={item.id}>
//                   {renderCartItem(item)}
//                 </React.Fragment>
//               ))
//           ) : (
//             <View style={currentStyles.emptyCartContainer}>
//               <Text style={currentStyles.emptyCartText}>
//                 Your cart is empty
//               </Text>
//             </View>
//           )}
//         </View>
//       </ScrollView>

//       <View style={currentStyles.bottomSection}>
//         <View style={currentStyles.orderNotesContainer}>
//           <TextInput
//             style={currentStyles.orderNotesInput}
//             placeholder="Order Notes..."
//             placeholderTextColor="#999"
//             value={orderNotes}
//             onChangeText={setOrderNotes}
//             multiline
//             numberOfLines={3}
//           />
//         </View>

//         <View style={currentStyles.totalSection}>
//           <Text style={currentStyles.grandTotalLabel}>Grand Total</Text>
//           <Text style={currentStyles.grandTotalAmount}>
//             £{totalPrice.toFixed(2)}
//           </Text>
//         </View>

//         <TouchableOpacity
//           onPress={() => navigation.navigate('Checkout')}
//           activeOpacity={0.8}
//           style={{ borderRadius: isTablet ? 15 : 12 }}
//           disabled={cartItems.length === 0}
//         >
//           <LinearGradient
//             colors={
//               cartItems.length > 0 ? ['#455625', '#97BC51'] : ['#ccc', '#999']
//             }
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={[
//               currentStyles.checkoutButton,
//               cartItems.length === 0 && currentStyles.disabledButton,
//             ]}
//           >
//             <Text style={currentStyles.checkoutButtonText}>Checkout</Text>
//             <Icon
//               name="chevron-forward"
//               size={isTablet ? 26 : 20}
//               color="#FFFFFF"
//             />
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
//   titleContainer: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 3,
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
//     paddingVertical: 4,
//     marginLeft: 8,
//     alignItems: 'center',
//   },
//   timeText: {
//     fontSize: 14,
//     color: '#000',
//     paddingRight: 8,
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
//     marginTop: 45,
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//     borderRadius: 4,
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
//     marginBottom: 65,
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
//     marginBottom: 12,
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
//     marginTop: 5,
//     paddingVertical: 10,
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

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   titleContainer: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '600',
//     color: '#333',
//   },
//   collectionSlot: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 80,
//     paddingVertical: 22,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//   },
//   timeSlot: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timeSlotText: {
//     fontSize: 22,
//     color: '#000',
//     fontWeight: '500',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#D2D2D2',
//     borderRadius: 12,
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     marginLeft: 15,
//     alignItems: 'center',
//   },
//   timeText: {
//     fontSize: 22,
//     color: '#000',
//     paddingRight: 12,
//     fontWeight: '500',
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 40,
//     paddingTop: 20,
//   },
//   cartItemsContainer: {
//     gap: 20,
//     alignItems: 'center',
//   },
//   emptyCartContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 80,
//   },
//   emptyCartText: {
//     fontSize: 22,
//     color: '#666',
//     fontWeight: '500',
//   },
//   cartItem: {
//     width: '100%',
//     maxWidth: 700,
//     height: 130,
//     borderRadius: 15,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1.5,
//     borderColor: '#D9D9D9',
//     padding: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   productImage: {
//     width: 130,
//     height: 100,
//     resizeMode: 'contain',
//     marginRight: 20,
//   },
//   itemDetails: {
//     flex: 1,
//     paddingRight: 20,
//   },
//   itemName: {
//     fontSize: 23,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//   },
//   packSize: {
//     fontSize: 19,
//     color: '#666',
//     marginBottom: 8,
//   },
//   itemPrice: {
//     fontSize: 25,
//     fontWeight: '600',
//     color: '#333',
//   },
//   quantitySection: {
//     marginTop: 60,
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//     borderRadius: 6,
//   },
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 6,
//     backgroundColor: '#A7C257',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color:"#455625"
//   },
//   deleteButton: {
//     backgroundColor: '#D9D9D9',
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//   },
//   quantityDisplay: {
//     minWidth: 40,
//     height: 28,
//     marginHorizontal: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//     borderRadius: 4,
//   },
//   quantityText: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: 'black',
//   },
//   bottomSection: {
//     paddingHorizontal: 40,
//     marginBottom: 80,
//     paddingTop: 25,
//     paddingBottom: 50,
//     maxWidth: 700,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   orderNotesContainer: {
//     backgroundColor: '#D9D9D9',
//     marginBottom: 25,
//     borderRadius: 12,
//     padding: 18,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   orderNotesInput: {
//     fontSize: 22,
//     color: '#333',
//     textAlignVertical: 'top',
//     minHeight: 90,
//     padding: 0,
//   },
//   totalSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   grandTotalLabel: {
//     fontSize: 25,
//     fontWeight: '600',
//     color: '#333',
//   },
//   grandTotalAmount: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   checkoutButton: {
//     backgroundColor: '#8BC34A',
//     marginTop: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 30,
//     borderRadius: 15,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   checkoutButtonText: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: '600',
//   },
// });

// export default Cart;


// the above is for mobile and tablet 


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
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useCart } from '../Context/CartContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlusIcon from '../Assets/Images/PlusIcon.svg';
import Delete from '../Assets/Images/Delete.svg';
import Minusicon from '../Assets/Images/minusicon.svg';

const Cart = ({ navigation }) => {
  const { cartItems, totalPrice, incrementItem, decrementItem, removeItem } =
    useCart();
  const [orderNotes, setOrderNotes] = useState('');
  const [collectionTime, setCollectionTime] = useState('');
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth, height: screenHeight } = dimensions;
  const isTablet = screenWidth >= 768;
  const isLandscape = screenWidth > screenHeight;

  // Listen for orientation changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const formatTime = date => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes}${ampm}`;
  };

  const calculateCollectionTime = () => {
    const now = new Date();
    const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const startTimeStr = formatTime(startTime);
    const endTimeStr = formatTime(endTime);

    return `${startTimeStr} - ${endTimeStr}`;
  };

  useEffect(() => {
    setCollectionTime(calculateCollectionTime());

    const interval = setInterval(() => {
      setCollectionTime(calculateCollectionTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const currentStyles = isTablet ? tabletStyles : styles;

  const renderCartItem = (item, isInRow = false) => {
    const itemWidth = isTablet && isLandscape && isInRow 
      ? (screenWidth - 120) / 2 - 10 
      : undefined;

    return (
      <View style={[
        currentStyles.cartItem, 
        itemWidth && { width: itemWidth }
      ]}>
        <Image source={item.image} style={currentStyles.productImage} />

        <View style={currentStyles.itemDetails}>
          <Text style={currentStyles.itemName}>{item.name}</Text>
          <Text style={currentStyles.packSize}>Pack Size: {item.packSize}</Text>
          <Text style={currentStyles.itemPrice}>£{item.price.toFixed(2)}</Text>
        </View>

        <View style={currentStyles.quantitySection}>
          <View style={currentStyles.quantityControls}>
            {item.quantity > 1 ? (
              <TouchableOpacity
                style={currentStyles.quantityButton}
                onPress={() => decrementItem(item.id)}
              >
                <Minusicon 
                  width={isTablet ? 30 : 15} 
                  height={isTablet ? 30 :15} 
                />
              </TouchableOpacity>
            ) : item.quantity === 1 ? (
              <TouchableOpacity
                style={[currentStyles.quantityButton, currentStyles.deleteButton]}
                onPress={() => removeItem(item.id)}
              >
                <Delete width={isTablet ? 30 : 20} height={isTablet ? 30 : 20} />
              </TouchableOpacity>
            ) : null}

            {item.quantity > 0 && (
              <View style={currentStyles.quantityDisplay}>
                <Text style={currentStyles.quantityText}>{item.quantity}</Text>
              </View>
            )}

            <TouchableOpacity
              style={currentStyles.quantityButton}
              onPress={() => incrementItem(item.id)}
            >
              <PlusIcon width={isTablet ? 30 : 15} height={isTablet ? 30 : 15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // Render cart items in rows for landscape
  const renderCartItems = () => {
    const filteredItems = cartItems.filter(item => item.quantity > 0);
    
    if (filteredItems.length === 0) {
      return (
        <View style={currentStyles.emptyCartContainer}>
          <Text style={currentStyles.emptyCartText}>Your cart is empty</Text>
        </View>
      );
    }

    // For tablet landscape: 2 items per row
    if (isTablet && isLandscape) {
      const rows = [];
      for (let i = 0; i < filteredItems.length; i += 2) {
        const item1 = filteredItems[i];
        const item2 = filteredItems[i + 1];
        
        rows.push(
          <View key={`row-${i}`} style={currentStyles.cartItemRow}>
            {renderCartItem(item1, true)}
            {item2 && renderCartItem(item2, true)}
          </View>
        );
      }
      return rows;
    }

    // For mobile and tablet portrait: 1 item per row
    return filteredItems.map(item => (
      <React.Fragment key={item.id}>
        {renderCartItem(item)}
      </React.Fragment>
    ));
  };

  return (
    <SafeAreaView
      style={currentStyles.container}
      edges={['top', 'left', 'right']}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={currentStyles.titleContainer}>
        <Text style={currentStyles.headerTitle}>Cart</Text>
      </View>

      <View style={currentStyles.collectionSlot}>
        <TouchableOpacity
          style={currentStyles.timeSlot}
          onPress={() => {
            setCollectionTime(calculateCollectionTime());
          }}
        >
          <Text style={currentStyles.timeSlotText}>Collection Slot</Text>

          <View style={currentStyles.timeContainer}>
            <Text style={currentStyles.timeText}>{collectionTime}</Text>
            <Icon name="chevron-down" size={isTablet ? 20 : 16} color="#666" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={currentStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={currentStyles.cartItemsContainer}>
          {renderCartItems()}
        </View>
      </ScrollView>

      {/* Bottom Section - Different layout for landscape */}
      {isTablet && isLandscape ? (
        // LANDSCAPE LAYOUT: Order notes left, Total + Button right
        <View style={currentStyles.bottomSectionLandscape}>
          <View style={currentStyles.orderNotesContainerLandscape}>
            <TextInput
              style={currentStyles.orderNotesInput}
              placeholder="Order Notes..."
              placeholderTextColor="#999"
              value={orderNotes}
              onChangeText={setOrderNotes}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={currentStyles.rightColumnLandscape}>
            <View style={currentStyles.totalSectionLandscape}>
              <Text style={currentStyles.grandTotalLabel}>Grand Total</Text>
              <Text style={currentStyles.grandTotalAmount}>
                £{totalPrice.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Checkout')}
              activeOpacity={0.8}
              style={{ borderRadius: 15 }}
              disabled={cartItems.length === 0}
            >
              <LinearGradient
                colors={
                  cartItems.length > 0 ? ['#455625', '#97BC51'] : ['#ccc', '#999']
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[
                  currentStyles.checkoutButton,
                  cartItems.length === 0 && currentStyles.disabledButton,
                ]}
              >
                <Text style={currentStyles.checkoutButtonText}>Checkout</Text>
                <Icon name="chevron-forward" size={26} color="#FFFFFF" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // PORTRAIT/MOBILE LAYOUT: Original stacked
        <View style={currentStyles.bottomSection}>
          <View style={currentStyles.orderNotesContainer}>
            <TextInput
              style={currentStyles.orderNotesInput}
              placeholder="Order Notes..."
              placeholderTextColor="#999"
              value={orderNotes}
              onChangeText={setOrderNotes}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={currentStyles.totalSection}>
            <Text style={currentStyles.grandTotalLabel}>Grand Total</Text>
            <Text style={currentStyles.grandTotalAmount}>
              £{totalPrice.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Checkout')}
            activeOpacity={0.8}
            style={{ borderRadius: isTablet ? 15 : 12 }}
            disabled={cartItems.length === 0}
          >
            <LinearGradient
              colors={
                cartItems.length > 0 ? ['#455625', '#97BC51'] : ['#ccc', '#999']
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                currentStyles.checkoutButton,
                cartItems.length === 0 && currentStyles.disabledButton,
              ]}
            >
              <Text style={currentStyles.checkoutButtonText}>Checkout</Text>
              <Icon
                name="chevron-forward"
                size={isTablet ? 26 : 20}
                color="#FFFFFF"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
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
    borderRadius: 4,
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
    marginBottom: 65,
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
    marginBottom: 12,
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
    marginTop: 5,
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

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  titleContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  collectionSlot: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 80,
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeSlotText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
  },
  timeContainer: {
    flexDirection: 'row',
    backgroundColor: '#D2D2D2',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginLeft: 15,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 22,
    color: '#000',
    paddingRight: 12,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  cartItemsContainer: {
    gap: 20,
    alignItems: 'center',
  },
  cartItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyCartText: {
    fontSize: 22,
    color: '#666',
    fontWeight: '500',
  },
  cartItem: {
    width: '100%',
    maxWidth: 700,
    height: 130,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  productImage: {
    width: 130,
    height: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
    paddingRight: 20,
  },
  itemName: {
    fontSize: 23,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  packSize: {
    fontSize: 19,
    color: '#666',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
  },
  quantitySection: {
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 6,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#A7C257',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  quantityDisplay: {
    minWidth: 40,
    height: 28,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  
  // PORTRAIT LAYOUT (Original)
  bottomSection: {
    paddingHorizontal: 40,
    marginBottom: 50,
    paddingTop: 25,
    paddingBottom: 50,
    maxWidth: 700,
    alignSelf: 'center',
    width: '100%',
  },
  orderNotesContainer: {
    backgroundColor: '#D9D9D9',
    marginBottom: 25,
    borderRadius: 12,
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  // LANDSCAPE LAYOUT (New)
  bottomSectionLandscape: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginBottom: 50,
    paddingTop: 25,
    paddingBottom: 50,
    gap: 30,
    alignItems: 'flex-start',
    
  },
  orderNotesContainerLandscape: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minHeight: 180,
  },
  rightColumnLandscape: {
    flex: 1,
    justifyContent: 'flex-start',
   
  },
  totalSectionLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 50,
    marginTop:40
  
  },
  
  // SHARED STYLES
  orderNotesInput: {
    fontSize: 22,
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 90,
    padding: 0,
  },
  grandTotalLabel: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
  },
  grandTotalAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#8BC34A',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  disabledButton: {
    opacity: 0.5,
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Cart;