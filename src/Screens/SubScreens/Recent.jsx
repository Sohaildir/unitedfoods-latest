

// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// const Recent = () => {
//   const navigation = useNavigation();

//   const recentOrders = [
//     {
//       id: 1,
//       orderNumber: '#UF1023',
//       productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
//       price: '£64.99',
//       date: '18 Aug 2025',
//       orderDateTime: '18th August 2025, 2:15 PM',
//       status: 'pending',
//       statusLabel: 'Pending',
//       statusColor: '#0285FF',
//       image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' },
//       showQuantity: true,
//       quantity: '+1',
//       actionText: 'Cancel Order',
//       // Detailed order items
//       orderItems: [
//         {
//           id: 1,
//           name: 'Basmati Rice 20kg',
//           quantity: 2,
//           price: '£54.00',
//           unitPrice: '£27.00',
//           image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' }
//         },
//         {
//           id: 2,
//           name: 'Sunflower Oil 10L',
//           quantity: 1,
//           price: '£10.99',
//           unitPrice: '£10.99',
//           image: { uri: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800' }
//         }
//       ],
//       subtotal: '£64.99',
//       deliveryFee: '£0.00',
//       total: '£64.99',
//       paymentMethod: 'Saved Card (Visa •••• 4567)',
//       paymentStatus: 'Pending'
//     },
//     {
//       id: 2,
//       orderNumber: '#UF1022',
//       productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
//       price: '£27.50',
//       date: '16 Aug 2025',
//       orderDateTime: '16th August 2025, 11:30 AM',
//       status: 'completed',
//       statusLabel: 'Completed',
//       statusColor: '#648F00',
//       image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' },
//       showQuantity: true,
//       quantity: '+4',
//       actionText: 'View Order Details',
//       // Detailed order items
//       orderItems: [
//         {
//           id: 1,
//           name: 'Tandoori Masala 1kg',
//           quantity: 3,
//           price: '£18.00',
//           unitPrice: '£6.00',
//           image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' }
//         },
//         {
//           id: 2,
//           name: 'Frozen Paratha',
//           quantity: 2,
//           price: '£9.50',
//           unitPrice: '£4.75',
//           image: { uri: 'https://images.unsplash.com/photo-1574653853027-5900df014e90?w=800' }
//         }
//       ],
//       subtotal: '£27.50',
//       deliveryFee: '£0.00',
//       total: '£27.50',
//       paymentMethod: 'Saved Card (Visa •••• 4567)',
//       paymentStatus: 'Paid'
//     },
//     {
//       id: 3,
//       orderNumber: '#UF1021',
//       productName: 'Pepsi Case (24) x1, Chicken Breast 5kg x1',
//       price: '£42.00',
//       date: '14 Aug 2025',
//       orderDateTime: '14th August 2025, 4:45 PM',
//       status: 'cancelled',
//       statusLabel: 'Cancelled',
//       statusColor: '#FF3737',
//       image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' },
//       showQuantity: true,
//       quantity: '+2',
//       actionText: 'View Order Details',
//       // Detailed order items
//       orderItems: [
//         {
//           id: 1,
//           name: 'Pepsi Case (24)',
//           quantity: 1,
//           price: '£18.00',
//           unitPrice: '£18.00',
//           image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' }
//         },
//         {
//           id: 2,
//           name: 'Chicken Breast 5kg',
//           quantity: 1,
//           price: '£24.00',
//           unitPrice: '£24.00',
//           image: { uri: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800' }
//         }
//       ],
//       subtotal: '£42.00',
//       deliveryFee: '£0.00',
//       total: '£42.00',
//       paymentMethod: 'Saved Card (Visa •••• 4567)',
//       paymentStatus: 'Refunded'
//     },
//   ];

//   // Handler for navigating to order details with order data
//   const navigateToOrderDetails = (order) => {
//     navigation.navigate('Orderdetails', { orderData: order });
//   };

//   const renderOrderItem = (order) => (
//     <View key={order.id} style={styles.orderCard}>
//       {/* Product Row */}
//       <View style={styles.productRow}>
//         <View style={styles.imageContainer}>
//           <Image 
//             source={order.image} 
//             style={styles.productImage}
//             resizeMode="cover"
//           />
//           {order.showQuantity && (
//             <View style={styles.centerQuantity}>
//               <Text style={styles.quantityText}>{order.quantity}</Text>
//             </View>
//           )}
//         </View>

//         <View style={styles.productInfo}>
//           {/* Order number + status */}
//           <View style={styles.orderHeaderRow}>
//             <Text style={styles.orderNumber}>{order.orderNumber}</Text>
//             <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
//               <Text style={styles.statusText}>{order.statusLabel}</Text>
//             </View>
//           </View>

//           <Text style={styles.productName}>{order.productName}</Text>

//           {/* Price and Date in one row */}
//           <View style={styles.priceDateRow}>
//             <Text style={styles.price}>{order.price}</Text>
//             <Text style={styles.date}>{order.date}</Text>
//           </View>
//         </View>
//       </View>

//       {/* Buttons - Pass order data to navigation */}
//       {order.status !== 'cancelled' && (
//         <TouchableOpacity 
//           onPress={() => navigateToOrderDetails(order)}
//           style={{ borderRadius: 8 }}
//           activeOpacity={0.8}
//         >
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.downloadButton}
//           >
//             <Text style={styles.downloadButtonText}>Download Invoice</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       )}

//       <TouchableOpacity 
//         style={styles.secondaryButton}
//         onPress={() => navigateToOrderDetails(order)}
//         activeOpacity={0.8}
//       >
//         <Text style={styles.secondaryButtonText}>{order.actionText}</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
//       <ScrollView 
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {recentOrders.map(renderOrderItem)}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//   },
//   orderCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginBottom: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   productRow: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   imageContainer: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     marginRight: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   productImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 6,
//   },
//   centerQuantity: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     borderRadius: 8,
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   productInfo: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   orderHeaderRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   orderNumber: {
//     fontSize: 12,
//     fontWeight: '400',
//     fontFamily: 'General Sans',
//     color: '#333333',
//     marginRight: 8,
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 8,
//     height: 17,
//   },
//   statusText: {
//     fontSize: 9,
//     fontWeight: '500',
//     color: '#FFFFFF',
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333333',
//     lineHeight: 18,
//     marginBottom: 8,
//   },
//   priceDateRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   date: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#616161',
//   },
//   downloadButton: {
//     paddingVertical: 10,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   downloadButtonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     paddingVertical: 8,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#455625',
//   },
//   secondaryButtonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#666666',
//   },
// });

// export default Recent;

// the above code is for mobile only 


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   Platform
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// // Import web styles only for web platform
// // if (Platform.OS === 'web') {
// //   require('./RecentWeb.css');
// // }

// const Recent = () => {
//   const navigation = useNavigation();
//   const [dimensions, setDimensions] = useState(Dimensions.get('window'));

//   const { width: screenWidth } = dimensions;
//   const isTablet = screenWidth >= 768;

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', ({ window }) => {
//       setDimensions(window);
//     });
//     return () => subscription?.remove();
//   }, []);

//   const recentOrders = [
//     {
//       id: 1,
//       orderNumber: '#UF1023',
//       productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
//       price: '£64.99',
//       date: '18 Aug 2025',
//       orderDateTime: '18th August 2025, 2:15 PM',
//       status: 'pending',
//       statusLabel: 'Pending',
//       statusColor: '#0285FF',
//       image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' },
//       showQuantity: true,
//       quantity: '+1',
//       actionText: 'Cancel Order',
//       orderItems: [
//         {
//           id: 1,
//           name: 'Basmati Rice 20kg',
//           quantity: 2,
//           price: '£54.00',
//           unitPrice: '£27.00',
//           image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' }
//         },
//         {
//           id: 2,
//           name: 'Sunflower Oil 10L',
//           quantity: 1,
//           price: '£10.99',
//           unitPrice: '£10.99',
//           image: { uri: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800' }
//         }
//       ],
//       subtotal: '£64.99',
//       deliveryFee: '£0.00',
//       total: '£64.99',
//       paymentMethod: 'Saved Card (Visa •••• 4567)',
//       paymentStatus: 'Pending'
//     },
//     {
//       id: 2,
//       orderNumber: '#UF1022',
//       productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
//       price: '£27.50',
//       date: '16 Aug 2025',
//       orderDateTime: '16th August 2025, 11:30 AM',
//       status: 'completed',
//       statusLabel: 'Completed',
//       statusColor: '#648F00',
//       image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' },
//       showQuantity: true,
//       quantity: '+4',
//       actionText: 'View Order Details',
//       orderItems: [
//         {
//           id: 1,
//           name: 'Tandoori Masala 1kg',
//           quantity: 3,
//           price: '£18.00',
//           unitPrice: '£6.00',
//           image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' }
//         },
//         {
//           id: 2,
//           name: 'Frozen Paratha',
//           quantity: 2,
//           price: '£9.50',
//           unitPrice: '£4.75',
//           image: { uri: 'https://images.unsplash.com/photo-1574653853027-5900df014e90?w=800' }
//         }
//       ],
//       subtotal: '£27.50',
//       deliveryFee: '£0.00',
//       total: '£27.50',
//       paymentMethod: 'Saved Card (Visa •••• 4567)',
//       paymentStatus: 'Paid'
//     },
//     {
//       id: 3,
//       orderNumber: '#UF1021',
//       productName: 'Pepsi Case (24) x1, Chicken Breast 5kg x1',
//       price: '£42.00',
//       date: '14 Aug 2025',
//       orderDateTime: '14th August 2025, 4:45 PM',
//       status: 'cancelled',
//       statusLabel: 'Cancelled',
//       statusColor: '#FF3737',
//       image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' },
//       showQuantity: true,
//       quantity: '+2',
//       actionText: 'View Order Details',
//       orderItems: [
//         {
//           id: 1,
//           name: 'Pepsi Case (24)',
//           quantity: 1,
//           price: '£18.00',
//           unitPrice: '£18.00',
//           image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' }
//         },
//         {
//           id: 2,
//           name: 'Chicken Breast 5kg',
//           quantity: 1,
//           price: '£24.00',
//           unitPrice: '£24.00',
//           image: { uri: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800' }
//         }
//       ],
//       subtotal: '£42.00',
//       deliveryFee: '£0.00',
//       total: '£42.00',
//       paymentMethod: 'Saved Card (Visa •••• 4567)',
//       paymentStatus: 'Refunded'
//     },
//   ];

//   const navigateToOrderDetails = (order) => {
//     navigation.navigate('Orderdetails', { orderData: order });
//   };

//   const currentStyles = isTablet ? tabletStyles : styles;

//   const renderOrderItem = (order) => (
//     <View 
//       key={order.id} 
//       style={currentStyles.orderCard}
//       className={Platform.OS === 'web' ? 'order-card' : ''}
//     >
//       <View 
//         style={currentStyles.productRow}
//         className={Platform.OS === 'web' ? 'product-row' : ''}
//       >
//         <View 
//           style={currentStyles.imageContainer}
//           className={Platform.OS === 'web' ? 'image-container' : ''}
//         >
//           <Image 
//             source={order.image} 
//             style={currentStyles.productImage}
//             className={Platform.OS === 'web' ? 'product-image' : ''}
//             resizeMode="cover"
//           />
//           {order.showQuantity && (
//             <View 
//               style={currentStyles.centerQuantity}
//               className={Platform.OS === 'web' ? 'center-quantity' : ''}
//             >
//               <Text 
//                 style={currentStyles.quantityText}
//                 className={Platform.OS === 'web' ? 'quantity-text' : ''}
//               >
//                 {order.quantity}
//               </Text>
//             </View>
//           )}
//         </View>

//         <View 
//           style={currentStyles.productInfo}
//           className={Platform.OS === 'web' ? 'product-info' : ''}
//         >
//           <View style={currentStyles.orderHeaderRow}>
//             <Text style={currentStyles.orderNumber}>{order.orderNumber}</Text>
//             <View style={[currentStyles.statusBadge, { backgroundColor: order.statusColor }]}>
//               <Text style={currentStyles.statusText}>{order.statusLabel}</Text>
//             </View>
//           </View>

//           <Text style={currentStyles.productName}>{order.productName}</Text>

//           <View style={currentStyles.priceDateRow}>
//             <Text style={currentStyles.price}>{order.price}</Text>
//             <Text style={currentStyles.date}>{order.date}</Text>
//           </View>
//         </View>
//       </View>

//       {order.status !== 'cancelled' && (
//         <TouchableOpacity 
//           onPress={() => navigateToOrderDetails(order)}
//           style={{ borderRadius: 8 }}
//           activeOpacity={0.8}
//         >
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={currentStyles.downloadButton}
//             className={Platform.OS === 'web' ? 'download-button' : ''}
//           >
//             <Text 
//               style={currentStyles.downloadButtonText}
//               className={Platform.OS === 'web' ? 'download-button-text' : ''}
//             >
//               Download Invoice
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       )}

//       <TouchableOpacity 
//         style={currentStyles.secondaryButton}
//         className={Platform.OS === 'web' ? 'secondary-button' : ''}
//         onPress={() => navigateToOrderDetails(order)}
//         activeOpacity={0.8}
//       >
//         <Text 
//           style={currentStyles.secondaryButtonText}
//           className={Platform.OS === 'web' ? 'secondary-button-text' : ''}
//         >
//           {order.actionText}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView 
//       style={currentStyles.container}
//       className={Platform.OS === 'web' ? 'recent-container' : ''}
//     >
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
//       <ScrollView 
//         style={currentStyles.scrollView}
//         contentContainerStyle={currentStyles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         className={Platform.OS === 'web' ? 'scroll-view' : ''}
//       >
//         {recentOrders.map(renderOrderItem)}
//       </ScrollView>
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
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//   },
//   orderCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginBottom: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   productRow: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   imageContainer: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     marginRight: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   productImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 6,
//   },
//   centerQuantity: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     borderRadius: 8,
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   productInfo: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   orderHeaderRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   orderNumber: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#333333',
//     marginRight: 8,
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 8,
//     height: 17,
//   },
//   statusText: {
//     fontSize: 9,
//     fontWeight: '500',
//     color: '#FFFFFF',
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333333',
//     lineHeight: 18,
//     marginBottom: 8,
//   },
//   priceDateRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   date: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#616161',
//   },
//   downloadButton: {
//     paddingVertical: 10,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   downloadButtonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     paddingVertical: 8,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#455625',
//   },
//   secondaryButtonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#666666',
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
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingHorizontal: 40,
//     paddingVertical: 30,
//     maxWidth: 1200,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   orderCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     marginBottom: 24,
//     paddingHorizontal: 24,
//     paddingVertical: 24,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.12,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   productRow: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   imageContainer: {
//     width: 140,
//     height: 140,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 12,
//     marginRight: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   productImage: {
//     width: 90,
//     height: 90,
//     borderRadius: 10,
//   },
//   centerQuantity: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     borderRadius: 12,
//   },
//   quantityText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   productInfo: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   orderHeaderRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   orderNumber: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333333',
//     marginRight: 12,
//   },
//   statusBadge: {
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 10,
//     height: 26,
//   },
//   statusText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   productName: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333333',
//     lineHeight: 26,
//     marginBottom: 12,
//   },
//   priceDateRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#000000',
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#616161',
//   },
//   downloadButton: {
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   downloadButtonText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#455625',
//   },
//   secondaryButtonText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#666666',
//   },
// });

// export default Recent;


// the above code is for tablet and mobile 



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Recent = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const recentOrders = [
    {
      id: 1,
      orderNumber: '#UF1023',
      productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
      price: '£64.99',
      date: '18 Aug 2025',
      orderDateTime: '18th August 2025, 2:15 PM',
      status: 'pending',
      statusLabel: 'Pending',
      statusColor: '#0285FF',
      image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' },
      showQuantity: true,
      quantity: '+1',
      actionText: 'Cancel Order',
      orderItems: [
        {
          id: 1,
          name: 'Basmati Rice 20kg',
          quantity: 2,
          price: '£54.00',
          unitPrice: '£27.00',
          image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' }
        },
        {
          id: 2,
          name: 'Sunflower Oil 10L',
          quantity: 1,
          price: '£10.99',
          unitPrice: '£10.99',
          image: { uri: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800' }
        }
      ],
      subtotal: '£64.99',
      deliveryFee: '£0.00',
      total: '£64.99',
      paymentMethod: 'Saved Card (Visa •••• 4567)',
      paymentStatus: 'Pending'
    },
    {
      id: 2,
      orderNumber: '#UF1022',
      productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
      price: '£27.50',
      date: '16 Aug 2025',
      orderDateTime: '16th August 2025, 11:30 AM',
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: '#648F00',
      image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' },
      showQuantity: true,
      quantity: '+4',
      actionText: 'View Order Details',
      orderItems: [
        {
          id: 1,
          name: 'Tandoori Masala 1kg',
          quantity: 3,
          price: '£18.00',
          unitPrice: '£6.00',
          image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' }
        },
        {
          id: 2,
          name: 'Frozen Paratha',
          quantity: 2,
          price: '£9.50',
          unitPrice: '£4.75',
          image: { uri: 'https://images.unsplash.com/photo-1574653853027-5900df014e90?w=800' }
        }
      ],
      subtotal: '£27.50',
      deliveryFee: '£0.00',
      total: '£27.50',
      paymentMethod: 'Saved Card (Visa •••• 4567)',
      paymentStatus: 'Paid'
    },
    {
      id: 3,
      orderNumber: '#UF1021',
      productName: 'Pepsi Case (24) x1, Chicken Breast 5kg x1',
      price: '£42.00',
      date: '14 Aug 2025',
      orderDateTime: '14th August 2025, 4:45 PM',
      status: 'cancelled',
      statusLabel: 'Cancelled',
      statusColor: '#FF3737',
      image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' },
      showQuantity: true,
      quantity: '+2',
      actionText: 'View Order Details',
      orderItems: [
        {
          id: 1,
          name: 'Pepsi Case (24)',
          quantity: 1,
          price: '£18.00',
          unitPrice: '£18.00',
          image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' }
        },
        {
          id: 2,
          name: 'Chicken Breast 5kg',
          quantity: 1,
          price: '£24.00',
          unitPrice: '£24.00',
          image: { uri: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800' }
        }
      ],
      subtotal: '£42.00',
      deliveryFee: '£0.00',
      total: '£42.00',
      paymentMethod: 'Saved Card (Visa •••• 4567)',
      paymentStatus: 'Refunded'
    },
  ];

  const navigateToOrderDetails = (order) => {
    navigation.navigate('Orderdetails', { orderData: order });
  };

  const currentStyles = isTablet ? tabletStyles : styles;

  const renderOrderItem = ({ item: order }) => (
    <View 
      style={[
        currentStyles.orderCard,
        isTablet && { width: (screenWidth - 100) / 2 }
      ]}
      className={Platform.OS === 'web' ? 'order-card' : ''}
    >
      <View 
        style={currentStyles.productRow}
        className={Platform.OS === 'web' ? 'product-row' : ''}
      >
        <View 
          style={currentStyles.imageContainer}
          className={Platform.OS === 'web' ? 'image-container' : ''}
        >
          <Image 
            source={order.image} 
            style={currentStyles.productImage}
            className={Platform.OS === 'web' ? 'product-image' : ''}
            resizeMode="cover"
          />
          {order.showQuantity && (
            <View 
              style={currentStyles.centerQuantity}
              className={Platform.OS === 'web' ? 'center-quantity' : ''}
            >
              <Text 
                style={currentStyles.quantityText}
                className={Platform.OS === 'web' ? 'quantity-text' : ''}
              >
                {order.quantity}
              </Text>
            </View>
          )}
        </View>

        <View 
          style={currentStyles.productInfo}
          className={Platform.OS === 'web' ? 'product-info' : ''}
        >
          <View style={currentStyles.orderHeaderRow}>
            <Text style={currentStyles.orderNumber}>{order.orderNumber}</Text>
            <View style={[currentStyles.statusBadge, { backgroundColor: order.statusColor }]}>
              <Text style={currentStyles.statusText}>{order.statusLabel}</Text>
            </View>
          </View>

          <Text style={currentStyles.productName}>{order.productName}</Text>

          <View style={currentStyles.priceDateRow}>
            <Text style={currentStyles.price}>{order.price}</Text>
            <Text style={currentStyles.date}>{order.date}</Text>
          </View>
        </View>
      </View>

      {order.status !== 'cancelled' && (
        <TouchableOpacity 
          onPress={() => navigateToOrderDetails(order)}
          style={{ borderRadius: 8 }}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={currentStyles.downloadButton}
            className={Platform.OS === 'web' ? 'download-button' : ''}
          >
            <Text 
              style={currentStyles.downloadButtonText}
              className={Platform.OS === 'web' ? 'download-button-text' : ''}
            >
              Download Invoice
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}

      <TouchableOpacity 
        style={currentStyles.secondaryButton}
        className={Platform.OS === 'web' ? 'secondary-button' : ''}
        onPress={() => navigateToOrderDetails(order)}
        activeOpacity={0.8}
      >
        <Text 
          style={currentStyles.secondaryButtonText}
          className={Platform.OS === 'web' ? 'secondary-button-text' : ''}
        >
          {order.actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView 
      style={currentStyles.container}
      className={Platform.OS === 'web' ? 'recent-container' : ''}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {isTablet ? (
        <FlatList
          data={recentOrders}
          renderItem={renderOrderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={currentStyles.scrollContent}
          columnWrapperStyle={currentStyles.columnWrapper}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ScrollView 
          style={currentStyles.scrollView}
          contentContainerStyle={currentStyles.scrollContent}
          showsVerticalScrollIndicator={false}
          className={Platform.OS === 'web' ? 'scroll-view' : ''}
        >
          {recentOrders.map(order => (
            <View key={order.id}>
              {renderOrderItem({ item: order })}
            </View>
          ))}
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  centerQuantity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  orderNumber: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333333',
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    height: 17,
  },
  statusText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    lineHeight: 18,
    marginBottom: 8,
  },
  priceDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#616161',
  },
  downloadButton: {
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#455625',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
});

// ==========================================
// TABLET STYLES (Updated for Two Columns)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    
    paddingVertical: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    paddingHorizontal: 20,
    marginHorizontal:8,
    paddingVertical: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imageContainer: {
    width: 110,
    height: 110,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  centerQuantity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 12,
  },
  quantityText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    height: 24,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    lineHeight: 22,
    marginBottom: 10,
  },
  priceDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: '#616161',
  },
  downloadButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  downloadButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#455625',
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
  },
});

export default Recent;