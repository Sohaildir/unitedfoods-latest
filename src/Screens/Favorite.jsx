
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const Favorite = () => {
//   const navigation = useNavigation();

//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1505253213348-cd54c92b37be?w=200&h=200&fit=crop',
//       quantity: 2,
//     },
//     {
//       id: 3,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 4,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop',
//       quantity: 0,
//     },
//   ]);

//   const handleIncrease = (itemId) => {
//     setCartItems(
//       cartItems.map(item =>
//         item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecrease = (itemId) => {
//     setCartItems(
//       cartItems.map(item =>
//         item.id === itemId && item.quantity > 0
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const handleDelete = (itemId) => {
//     setCartItems(
//       cartItems.map(item =>
//         item.id === itemId ? { ...item, quantity: 0 } : item
//       )
//     );
//   };

//   const handleGoBack = () => {
//     if (navigation.canGoBack()) {
//       navigation.navigate('Menu');
//     }
//   };

//   const renderCartItem = ({ item }) => (
//     <View style={styles.itemCard}>
//       <Image source={{ uri: item.image }} style={styles.productImage} />

//       <View style={styles.productInfo}>
//         <Text style={styles.productName}>{item.name}</Text>

//         <View style={styles.tagsContainer}>
//           <View style={styles.tag}>
//             <Text style={styles.tagText}>{item.brand}</Text>
//           </View>
//           <View style={styles.tag}>
//             <Text style={styles.tagText}>{item.category}</Text>
//           </View>
//         </View>

//         <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//         <Text style={styles.price}>£{item.price.toFixed(2)}</Text>
//       </View>

//       <View style={styles.buttonContainer}>
//         <View style={styles.counterContainer}>
//           {item.quantity === 0 ? (
//             <>
//               {/* Invisible placeholders for layout consistency */}
//               <View style={[styles.decreaseButton, { opacity: 0 }]} />
//               <Text style={[styles.counterText, { opacity: 0 }]}>0</Text>
//               <TouchableOpacity
//                 onPress={() => handleIncrease(item.id)}
//                 style={styles.singleAddButton}
//               >
//                 <Text style={styles.addButtonText}>+</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {item.quantity === 1 ? (
//                 <TouchableOpacity
//                   onPress={() => handleDelete(item.id)}
//                   style={styles.deleteButton}
//                 >
//                   <Icon name="trash-outline" size={18} color="#666" />
//                 </TouchableOpacity>
//               ) : (
//                 <TouchableOpacity
//                   onPress={() => handleDecrease(item.id)}
//                   style={styles.decreaseButton}
//                 >
//                   <Text style={styles.counterButtonText}>-</Text>
//                 </TouchableOpacity>
//               )}
//               <Text style={styles.counterText}>{item.quantity}</Text>
//               <TouchableOpacity
//                 onPress={() => handleIncrease(item.id)}
//                 style={styles.singleAddButton}
//               >
//                 <Text style={styles.addButtonText}>+</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </View>
//       </View>
//     </View>
//   );

//   const EmptyCart = () => (
//     <View style={styles.emptyContainer}>
//       <Text style={styles.emptyTitle}>Your Favourites is Empty</Text>
//       <Text style={styles.emptyMessage}>
//         Add some delicious items to your favourites to get started!
//       </Text>
//     </View>
//   );

//   const displayItems = cartItems; // keep all items

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Favourites</Text>
//         <View style={styles.headerRight} />
//       </View>

//       {displayItems.length === 0 ? (
//         <EmptyCart />
//       ) : (
//         <FlatList
//           data={displayItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: '#FFFFFF',
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
//     color: '#000000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 32,
//   },
//   headerRight: {
//     width: 32,
//   },
//   listContainer: {
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//   },
//   itemCard: {
//     width: 366,
//     height: 114,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     padding: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   productImage: {
//     width: 98,
//     height: 98,
//     borderRadius: 8,
//     backgroundColor: '#F0F0F0',
//     marginRight: 12,
//   },
//   productInfo: {
//     flex: 1,
//     paddingRight: 8,
//     justifyContent: 'space-between',
//     height: 98,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 4,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   tag: {
//     backgroundColor: '#E8F4E8',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 12,
//     marginRight: 6,
//   },
//   tagText: {
//     fontSize: 11,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   packSize: {
//     fontSize: 12,
//     color: '#666666',
//     fontWeight: '400',
//     marginBottom: 6,
//   },
//   price: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingLeft: 8,
//     height: 98,
//     width: 100,
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   singleAddButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   addButtonText: {
//     color: '#000000',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   decreaseButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#F5F5F5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   deleteButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#F5F5F5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   counterButtonText: {
//     color: '#333333',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   counterText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333333',
//     minWidth: 20,
//     textAlign: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   emptyTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   emptyMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
// });

// export default Favorite;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { useCart } from '../Context/CartContext'; // Import the cart hook

// const Favorite = () => {
//   const navigation = useNavigation();

//   // Use Cart Context instead of local state
//   const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();

//   // Favorite items - sample data
//   const [favoriteItems] = useState([
//     {
//       id: '1',
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: '£9.49',
//       image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop',
//     },
//     {
//       id: '2',
//       name: 'Garam Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: '£8.99',
//       image: 'https://images.unsplash.com/photo-1505253213348-cd54c92b37be?w=200&h=200&fit=crop',
//     },
//     {
//       id: '3',
//       name: 'Biryani Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: '£7.49',
//       image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
//     },
//     {
//       id: '4',
//       name: 'Curry Powder',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: '£6.99',
//       image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop',
//     },
//   ]);

//   // Handlers using Cart Context
//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const handleIncrease = (productId) => {
//     incrementItem(productId);
//   };

//   const handleDecrease = (productId) => {
//     decrementItem(productId);
//   };

//   const handleDelete = (productId) => {
//     removeItem(productId);
//   };

//   const handleGoBack = () => {
//     if (navigation.canGoBack()) {
//       navigation.navigate('Menu');
//     }
//   };

//   const renderCartItem = ({ item }) => {
//     const quantity = getItemQuantity(item.id);

//     return (
//       <View style={styles.itemCard}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('SingleProduct', { product: item })}
//         >
//           <Image source={{ uri: item.image }} style={styles.productImage} />
//         </TouchableOpacity>

//         <View style={styles.productInfo}>
//           <Text style={styles.productName}>{item.name}</Text>

//           <View style={styles.tagsContainer}>
//             <View style={styles.tag}>
//               <Text style={styles.tagText}>{item.brand}</Text>
//             </View>
//             <View style={styles.tag}>
//               <Text style={styles.tagText}>{item.category}</Text>
//             </View>
//           </View>

//           <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//           <Text style={styles.price}>{item.price}</Text>
//         </View>

//         <View style={styles.buttonContainer}>
//   <View
//     style={[
//       styles.counterContainer,
//       quantity > 0 && styles.counterContainerActive,
//     ]}
//   >
//     {quantity === 0 ? (
//       // Empty space for minus + counter text (to preserve layout)
//       <>
//         <View style={{ width: 30 }} /> 
//         <Text style={{ width: 20, textAlign: 'center' }} />
//         <TouchableOpacity
//           onPress={() => handleAddToCart(item)}
//           style={styles.singleAddButton}
//         >
//           <Text style={styles.addButtonText}>+</Text>
//         </TouchableOpacity>
//       </>
//     ) : (
//       <>
//         {quantity === 1 ? (
//           <TouchableOpacity
//             onPress={() => handleDelete(item.id)}
//             style={styles.deleteButton}
//           >
//             <Icon name="trash-outline" size={18} color="#666" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             onPress={() => handleDecrease(item.id)}
//             style={styles.decreaseButton}
//           >
//             <Text style={styles.counterButtonText}>-</Text>
//           </TouchableOpacity>
//         )}
//         <Text style={styles.counterText}>{quantity}</Text>
//         <TouchableOpacity
//           onPress={() => handleIncrease(item.id)}
//           style={styles.singleAddButton}
//         >
//           <Text style={styles.addButtonText}>+</Text>
//         </TouchableOpacity>
//       </>
//     )}
//   </View>
// </View>

//       </View>
//     );
//   };

//   const EmptyCart = () => (
//     <View style={styles.emptyContainer}>
//       <Text style={styles.emptyTitle}>Your Favourites is Empty</Text>
//       <Text style={styles.emptyMessage}>
//         Add some delicious items to your favourites to get started!
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Favourites</Text>
//         <View style={styles.headerRight} />
//       </View>

//       {favoriteItems.length === 0 ? (
//         <EmptyCart />
//       ) : (
//         <FlatList
//           data={favoriteItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: '#FFFFFF',
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
//     color: '#000000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 32,
//   },
//   headerRight: {
//     width: 32,
//   },
//   listContainer: {
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//   },
//   itemCard: {
//     width: 366,
//     height: 114,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     padding: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   productImage: {
//     width: 98,
//     height: 98,
//     borderRadius: 8,
//     backgroundColor: '#F0F0F0',
//     marginRight: 12,
//   },
//   productInfo: {
//     flex: 1,
//     paddingRight: 8,
//     justifyContent: 'space-between',
//     height: 98,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 4,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   tag: {
//     backgroundColor: 'white',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 4,
//     marginRight: 6,
//     borderWidth: 1,
//   },
//   tagText: {
//     fontSize: 11,
//     color: 'black',
//     fontWeight: '500',
//   },
//   packSize: {
//     fontSize: 12,
//     color: '#666666',
//     fontWeight: '400',
//     marginBottom: 6,
//   },
//   price: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingLeft: 5,
//     height: 98,
//     width: 100,
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     borderRadius: 6,
//   },
//   counterContainerActive: {
//     backgroundColor: '#D9D9D9',
//     paddingHorizontal: 1,
//     borderRadius:4,
//     paddingVertical: 1,
//   },
//   singleAddButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   addButtonText: {
//     color: '#455625',
//     fontSize: 17,
//     fontWeight: '400',
//   },
//   decreaseButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   deleteButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#D9D9D9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   counterButtonText: {
//     color: '#333333',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   counterText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333333',
//     minWidth: 20,
//     textAlign: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   emptyTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   emptyMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
// });

// export default Favorite;
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { useCart } from '../Context/CartContext'; // Import the cart hook
// import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook

// const Favorite = () => {
//   const navigation = useNavigation();

//   // Use Cart Context
//   const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  
//   // Use Favorites Context
//   const { favorites, removeFromFavorites } = useFavorites();

//   // Handlers using Cart Context
//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const handleIncrease = (productId) => {
//     incrementItem(productId);
//   };

//   const handleDecrease = (productId) => {
//     decrementItem(productId);
//   };

//   const handleDeleteFromCart = (productId) => {
//     removeItem(productId);
//   };

//   const handleRemoveFromFavorites = (productId) => {
//     removeFromFavorites(productId);
//   };

//   const handleGoBack = () => {
//     if (navigation.canGoBack()) {
//       navigation.goBack();
//     }
//   };

//   // Function to get image source properly
//   const getImageSource = (imageData) => {
//     if (typeof imageData === 'string') {
//       return { uri: imageData };
//     } else if (imageData && imageData.uri) {
//       return imageData;
//     }
//     // Fallback image
//     return { uri: 'https://via.placeholder.com/100x100?text=No+Image' };
//   };

//   const renderFavoriteItem = ({ item }) => {
//     const quantity = getItemQuantity(item.id);

//     return (
//       <View style={styles.itemCard}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('SingleProduct', { product: item })}
//         >
//           <Image 
//             source={getImageSource(item.image)} 
//             style={styles.productImage} 
//           />
//         </TouchableOpacity>

//         <View style={styles.productInfo}>
//           <Text style={styles.productName} numberOfLines={2}>
//             {item.name}
//           </Text>

//           <View style={styles.tagsContainer}>
//             {item.brand && (
//               <View style={styles.tag}>
//                 <Text style={styles.tagText}>{item.brand}</Text>
//               </View>
//             )}
//             {item.category && (
//               <View style={styles.tag}>
//                 <Text style={styles.tagText}>{item.category}</Text>
//               </View>
//             )}
//           </View>

//           {item.packSize && (
//             <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//           )}
//           <Text style={styles.price}>{item.price}</Text>
//         </View>

//         <View style={styles.actionsContainer}>
//           {/* Remove from Favorites Button */}
//           <TouchableOpacity
//             onPress={() => handleRemoveFromFavorites(item.id)}
//             style={styles.removeFromFavoritesButton}
//           >
//             <Icon name="heart" size={20} color="#FF6B6B" />
//           </TouchableOpacity>

//           {/* Cart Controls */}
//           <View style={styles.buttonContainer}>
//             <View
//               style={[
//                 styles.counterContainer,
//                 quantity > 0 && styles.counterContainerActive,
//               ]}
//             >
//               {quantity === 0 ? (
//                 // Empty space for minus + counter text (to preserve layout)
//                 <>
//                   <View style={{ width: 30 }} /> 
//                   <Text style={{ width: 20, textAlign: 'center' }} />
//                   <TouchableOpacity
//                     onPress={() => handleAddToCart(item)}
//                     style={styles.singleAddButton}
//                   >
//                     <Text style={styles.addButtonText}>+</Text>
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   {quantity === 1 ? (
//                     <TouchableOpacity
//                       onPress={() => handleDeleteFromCart(item.id)}
//                       style={styles.deleteButton}
//                     >
//                       <Icon name="trash-outline" size={18} color="#666" />
//                     </TouchableOpacity>
//                   ) : (
//                     <TouchableOpacity
//                       onPress={() => handleDecrease(item.id)}
//                       style={styles.decreaseButton}
//                     >
//                       <Text style={styles.counterButtonText}>-</Text>
//                     </TouchableOpacity>
//                   )}
//                   <Text style={styles.counterText}>{quantity}</Text>
//                   <TouchableOpacity
//                     onPress={() => handleIncrease(item.id)}
//                     style={styles.singleAddButton}
//                   >
//                     <Text style={styles.addButtonText}>+</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const EmptyFavorites = () => (
//     <View style={styles.emptyContainer}>
//       <Icon name="heart-outline" size={80} color="#ccc" style={styles.emptyIcon} />
//       <Text style={styles.emptyTitle}>Your Favourites is Empty</Text>
//       <Text style={styles.emptyMessage}>
//         Add some delicious items to your favourites to get started!
//       </Text>
//       <TouchableOpacity
//         style={styles.browseButton}
//         onPress={() => navigation.navigate('Browse')}
//       >
//         <Text style={styles.browseButtonText}>Start Browsing</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>
//           Favourites {favorites.length > 0 && `(${favorites.length})`}
//         </Text>
//         <View style={styles.headerRight} />
//       </View>

//       {favorites.length === 0 ? (
//         <EmptyFavorites />
//       ) : (
//         <FlatList
//           data={favorites}
//           renderItem={renderFavoriteItem}
//           keyExtractor={(item) => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: '#FFFFFF',
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
//     color: '#000000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 32,
//   },
//   headerRight: {
//     width: 32,
//   },
//   listContainer: {
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//   },
//   itemCard: {
//     width: 366,
//     height: 114,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#D9D9D9',
//     padding: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   productImage: {
//     width: 98,
//     height: 98,
//     borderRadius: 8,
//     backgroundColor: '#F0F0F0',
//     marginRight: 12,
//   },
//   productInfo: {
//     flex: 1,
//     paddingRight: 8,
//     justifyContent: 'space-between',
//     height: 98,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 4,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   tag: {
//     backgroundColor: 'white',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 4,
//     marginRight: 6,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   tagText: {
//     fontSize: 11,
//     color: 'black',
//     fontWeight: '500',
//   },
//   packSize: {
//     fontSize: 12,
//     color: '#666666',
//     fontWeight: '400',
//     marginBottom: 6,
//   },
//   price: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   actionsContainer: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingLeft: 5,
//     height: 98,
//     width: 100,
//   },
//   removeFromFavoritesButton: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     paddingLeft:12
   
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     borderRadius: 6,
//   },
//   counterContainerActive: {
//     backgroundColor: '#D9D9D9',
//     paddingHorizontal: 1,
//     borderRadius:4,
//     paddingVertical: 1,
//   },
//   singleAddButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.25,
//     shadowRadius: 1,
//     elevation: 2,
//   },
//   addButtonText: {
//     color: '#455625',
//     fontSize: 17,
//     fontWeight: '400',
//   },
//   decreaseButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   deleteButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     backgroundColor: '#D9D9D9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   counterButtonText: {
//     color: '#333333',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   counterText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333333',
//     minWidth: 20,
//     textAlign: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   emptyIcon: {
//     marginBottom: 20,
//   },
//   emptyTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   emptyMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//     marginBottom: 30,
//   },
//   browseButton: {
//     backgroundColor: '#A7C257',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   browseButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default Favorite;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../Context/CartContext'; // Import the cart hook
import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook

const Favorite = () => {
  const navigation = useNavigation();

  // Use Cart Context
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  
  // Use Favorites Context
  const { favorites, removeFromFavorites } = useFavorites();

  // Handlers using Cart Context
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleIncrease = (productId) => {
    incrementItem(productId);
  };

  const handleDecrease = (productId) => {
    decrementItem(productId);
  };

  const handleDeleteFromCart = (productId) => {
    removeItem(productId);
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
  };

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // Enhanced function to get image source properly with better debugging
  const getImageSource = (imageData) => {
    // Debug: Log the image data to see what we're working with
    console.log('Image data received:', imageData);
    
    // If imageData is a string (URL)
    if (typeof imageData === 'string') {
      console.log('Image is string URL:', imageData);
      return { uri: imageData };
    } 
    // If imageData is an object with uri property
    else if (imageData && typeof imageData === 'object' && imageData.uri) {
      console.log('Image is object with uri:', imageData.uri);
      return imageData;
    }
    // If imageData is a require() statement (local image)
    else if (typeof imageData === 'number') {
      console.log('Image is local require:', imageData);
      return imageData;
    }
    // Fallback to a working placeholder image
    else {
      console.log('Using fallback image for:', imageData);
      return { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop' };
    }
  };

  // Handle image load errors
  const handleImageError = (error, item) => {
    console.log('Image failed to load for item:', item.name, 'Error:', error.nativeEvent.error);
  };

  const handleImageLoad = (item) => {
    console.log('Image loaded successfully for:', item.name);
  };

  const renderFavoriteItem = ({ item }) => {
    const quantity = getItemQuantity(item.id);
    const imageSource = getImageSource(item.image);

    return (
      <View style={styles.itemCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SingleProduct', { product: item })}
        >
          <Image 
            source={imageSource}
            style={styles.productImage} 
            onError={(error) => handleImageError(error, item)}
            onLoad={() => handleImageLoad(item)}
            onLoadStart={() => console.log('Image load started for:', item.name)}
            // Add default props for better image handling
            resizeMode="cover"
            // Add a fallback in case of network issues
            defaultSource={{ uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop' }}
          />
          
          {/* Debug overlay - remove this in production */}
          {__DEV__ && (
            <View style={styles.debugOverlay}>
              <Text style={styles.debugText}>
                {typeof item.image === 'string' ? 'URL' : typeof item.image === 'object' ? 'OBJ' : 'OTHER'}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.productInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>

          <View style={styles.tagsContainer}>
            {item.brand && (
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.brand}</Text>
              </View>
            )}
            {item.category && (
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.category}</Text>
              </View>
            )}
          </View>

          {item.packSize && (
            <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
          )}
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={styles.actionsContainer}>
          {/* Remove from Favorites Button */}
          <TouchableOpacity
            onPress={() => handleRemoveFromFavorites(item.id)}
            style={styles.removeFromFavoritesButton}
          >
            <Icon name="heart" size={20} color="#FF6B6B" />
          </TouchableOpacity>

          {/* Cart Controls */}
          <View style={styles.buttonContainer}>
            <View
              style={[
                styles.counterContainer,
                quantity > 0 && styles.counterContainerActive,
              ]}
            >
              {quantity === 0 ? (
                // Empty space for minus + counter text (to preserve layout)
                <>
                  <View style={{ width: 30 }} /> 
                  <Text style={{ width: 20, textAlign: 'center' }} />
                  <TouchableOpacity
                    onPress={() => handleAddToCart(item)}
                    style={styles.singleAddButton}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  {quantity === 1 ? (
                    <TouchableOpacity
                      onPress={() => handleDeleteFromCart(item.id)}
                      style={styles.deleteButton}
                    >
                      <Icon name="trash-outline" size={18} color="#666" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => handleDecrease(item.id)}
                      style={styles.decreaseButton}
                    >
                      <Text style={styles.counterButtonText}>-</Text>
                    </TouchableOpacity>
                  )}
                  <Text style={styles.counterText}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleIncrease(item.id)}
                    style={styles.singleAddButton}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  const EmptyFavorites = () => (
    <View style={styles.emptyContainer}>
      <Icon name="heart-outline" size={80} color="#ccc" style={styles.emptyIcon} />
      <Text style={styles.emptyTitle}>Your Favourites is Empty</Text>
      <Text style={styles.emptyMessage}>
        Add some delicious items to your favourites to get started!
      </Text>
      <TouchableOpacity
        style={styles.browseButton}
        onPress={() => navigation.navigate('Browse')}
      >
        <Text style={styles.browseButtonText}>Start Browsing</Text>
      </TouchableOpacity>
    </View>
  );

  // Debug: Log favorites data
  console.log('Favorites data:', favorites);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Favourites {favorites.length > 0 && `(${favorites.length})`}
        </Text>
        <View style={styles.headerRight} />
      </View>

      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
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
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  itemCard: {
    width: 366,
    height: 114,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
  productImage: {
    width: 98,
    height: 98,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    paddingRight: 8,
    justifyContent: 'space-between',
    height: 98,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  tagText: {
    fontSize: 11,
    color: 'black',
    fontWeight: '500',
  },
  packSize: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '400',
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  actionsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    height: 98,
    width: 100,
  },
  removeFromFavoritesButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    paddingLeft: 12
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 6,
  },
  counterContainerActive: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 1,
    borderRadius: 4,
    paddingVertical: 1,
  },
  singleAddButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#A7C257',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
  addButtonText: {
    color: '#455625',
    fontSize: 17,
    fontWeight: '400',
  },
  decreaseButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#A7C257',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  counterButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    minWidth: 20,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  browseButton: {
    backgroundColor: '#A7C257',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Debug styles - remove in production
  debugOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    padding: 2,
    borderRadius: 4,
  },
  debugText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default Favorite;
