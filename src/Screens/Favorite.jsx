// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StatusBar,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { useCart } from '../Context/CartContext'; // Import the cart hook
// import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook
// import PlusIcon from '../Assets/Images/PlusIcon.svg';
// import Delete from '../Assets/Images/Delete.svg';
// import Minusicon from '../Assets/Images/minusicon.svg';
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

//   // Enhanced function to get image source properly with better debugging
//   const getImageSource = (imageData) => {
//     // Debug: Log the image data to see what we're working with
//     console.log('Image data received:', imageData);

//     // If imageData is a string (URL)
//     if (typeof imageData === 'string') {
//       console.log('Image is string URL:', imageData);
//       return { uri: imageData };
//     }
//     // If imageData is an object with uri property
//     else if (imageData && typeof imageData === 'object' && imageData.uri) {
//       console.log('Image is object with uri:', imageData.uri);
//       return imageData;
//     }
//     // If imageData is a require() statement (local image)
//     else if (typeof imageData === 'number') {
//       console.log('Image is local require:', imageData);
//       return imageData;
//     }
//     // Fallback to a working placeholder image
//     else {
//       console.log('Using fallback image for:', imageData);
//       return { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop' };
//     }
//   };

//   // Handle image load errors
//   const handleImageError = (error, item) => {
//     console.log('Image failed to load for item:', item.name, 'Error:', error.nativeEvent.error);
//   };

//   const handleImageLoad = (item) => {
//     console.log('Image loaded successfully for:', item.name);
//   };

//   const renderFavoriteItem = ({ item }) => {
//     const quantity = getItemQuantity(item.id);
//     const imageSource = getImageSource(item.image);

//     return (
//       <View style={styles.itemCard}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('SingleProduct', { product: item })}
//         >
//           <Image
//             source={imageSource}
//             style={styles.productImage}
//             onError={(error) => handleImageError(error, item)}
//             onLoad={() => handleImageLoad(item)}
//             onLoadStart={() => console.log('Image load started for:', item.name)}
//             // Add default props for better image handling
//             resizeMode="cover"
//             // Add a fallback in case of network issues
//             defaultSource={{ uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop' }}
//           />

//           {/* Debug overlay - remove this in production */}
//           {__DEV__ && (
//             <View style={styles.debugOverlay}>
//               <Text style={styles.debugText}>
//                 {typeof item.image === 'string' ? 'URL' : typeof item.image === 'object' ? 'OBJ' : 'OTHER'}
//               </Text>
//             </View>
//           )}
//         </TouchableOpacity>

//         <View style={styles.productInfo}>
//           <Text style={styles.productName} numberOfLines={1}>
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
// {/*
//                 <Text style={styles.tagText}>{item.subcategory}</Text>
//                 <Text style={styles.tagText}>{item.origin}</Text> */}
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
//                     <Text style={styles.addButtonText}>
//                       {/* + */}
//                       <PlusIcon/>
//                       </Text>
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   {quantity === 1 ? (
//                     <TouchableOpacity
//                       onPress={() => handleDeleteFromCart(item.id)}
//                       style={styles.deleteButton}
//                     >
//                       {/* <Icon name="trash-outline" size={18} color="#666" /> */}
//                       <Delete/>
//                     </TouchableOpacity>
//                   ) : (
//                     <TouchableOpacity
//                       onPress={() => handleDecrease(item.id)}
//                       style={styles.decreaseButton}
//                     >
//                       <Text style={styles.counterButtonText}>
//                         {/* - */}
//                         <Minusicon/>
//                         </Text>
//                     </TouchableOpacity>
//                   )}
//                   <Text style={styles.counterText}>{quantity}</Text>
//                   <TouchableOpacity
//                     onPress={() => handleIncrease(item.id)}
//                     style={styles.singleAddButton}
//                   >
//                     <Text style={styles.addButtonText}>
//                       {/* + */}
//                       <PlusIcon/>
//                       </Text>
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

//   // Debug: Log favorites data
//   console.log('Favorites data:', favorites);

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
//     paddingLeft: 12
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
//     borderRadius: 4,
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

//   // Debug styles - remove in production
//   debugOverlay: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 0, 0, 0.7)',
//     padding: 2,
//     borderRadius: 4,
//   },
//   debugText: {
//     color: 'white',
//     fontSize: 8,
//     fontWeight: 'bold',
//   },
// });

// export default Favorite;

// the above  is for mobile only

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { useCart } from '../Context/CartContext';
// import { useFavorites } from '../Context/FavoritesContext';
// import PlusIcon from '../Assets/Images/PlusIcon.svg';
// import Delete from '../Assets/Images/Delete.svg';
// import Minusicon from '../Assets/Images/minusicon.svg';

// const Favorite = () => {
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

//   const {
//     addToCart,
//     incrementItem,
//     decrementItem,
//     removeItem,
//     getItemQuantity,
//   } = useCart();
//   const { favorites, removeFromFavorites } = useFavorites();

//   const handleAddToCart = product => {
//     addToCart(product);
//   };

//   const handleIncrease = productId => {
//     incrementItem(productId);
//   };

//   const handleDecrease = productId => {
//     decrementItem(productId);
//   };

//   const handleDeleteFromCart = productId => {
//     removeItem(productId);
//   };

//   const handleRemoveFromFavorites = productId => {
//     removeFromFavorites(productId);
//   };

//   const handleGoBack = () => {
//     if (navigation.canGoBack()) {
//       navigation.goBack();
//     }
//   };

//   const getImageSource = imageData => {
//     if (typeof imageData === 'string') {
//       return { uri: imageData };
//     } else if (imageData && typeof imageData === 'object' && imageData.uri) {
//       return imageData;
//     } else if (typeof imageData === 'number') {
//       return imageData;
//     } else {
//       return {
//         uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop',
//       };
//     }
//   };

//   const currentStyles = isTablet ? tabletStyles : styles;

//   const renderFavoriteItem = ({ item }) => {
//     const quantity = getItemQuantity(item.id);
//     const imageSource = getImageSource(item.image);

//     return (
//       <View style={currentStyles.itemCard}>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('SingleProduct', { product: item })
//           }
//         >
//           <Image
//             source={imageSource}
//             style={currentStyles.productImage}
//             resizeMode="cover"
//           />
//         </TouchableOpacity>

//         <View style={currentStyles.productInfo}>
//           <Text style={currentStyles.productName} numberOfLines={1}>
//             {item.name}
//           </Text>

//           <View style={currentStyles.tagsContainer}>
//             {item.brand && (
//               <View style={currentStyles.tag}>
//                 <Text style={currentStyles.tagText}>{item.brand}</Text>
//               </View>
//             )}
//             {item.category && (
//               <View style={currentStyles.tag}>
//                 <Text style={currentStyles.tagText}>{item.category}</Text>
//               </View>
//             )}
//           </View>

//           {item.packSize && (
//             <Text style={currentStyles.packSize}>
//               Pack Size: {item.packSize}
//             </Text>
//           )}
//           <Text style={currentStyles.price}>{item.price}</Text>
//         </View>

//         <View style={currentStyles.actionsContainer}>
//           <TouchableOpacity
//             onPress={() => handleRemoveFromFavorites(item.id)}
//             style={currentStyles.removeFromFavoritesButton}
//           >
//             <Icon name="heart" size={isTablet ? 28 : 20} color="#FF6B6B" />
//           </TouchableOpacity>

//           <View style={currentStyles.buttonContainer}>
//             <View
//               style={[
//                 currentStyles.counterContainer,
//                 quantity > 0 && currentStyles.counterContainerActive,
//               ]}
//             >
//               {quantity === 0 ? (
//                 <>
//                   <View style={{ width: isTablet ? 40 : 30 }} />
//                   <Text
//                     style={{ width: isTablet ? 30 : 20, textAlign: 'center' }}
//                   />
//                   <TouchableOpacity
//                     onPress={() => handleAddToCart(item)}
//                     style={currentStyles.singleAddButton}
//                   >
//                     <PlusIcon
//                       width={isTablet ? 30 : 20}
//                       height={isTablet ? 30 : 20}
//                     />
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   {quantity === 1 ? (
//                     <TouchableOpacity
//                       onPress={() => handleDeleteFromCart(item.id)}
//                       style={currentStyles.deleteButton}
//                     >
//                       <Delete
//                         width={isTablet ? 30 : 20}
//                         height={isTablet ? 30 : 20}
//                       />
//                     </TouchableOpacity>
//                   ) : (
//                     <TouchableOpacity
//                       onPress={() => handleDecrease(item.id)}
//                       style={currentStyles.decreaseButton}
//                     >
//                       <Minusicon
//                         width={isTablet ? 30 : 20}
//                         height={isTablet ? 30 : 20}
//                       />
//                     </TouchableOpacity>
//                   )}
//                   <Text style={currentStyles.counterText}>{quantity}</Text>
//                   <TouchableOpacity
//                     onPress={() => handleIncrease(item.id)}
//                     style={currentStyles.singleAddButton}
//                   >
//                     <PlusIcon
//                       width={isTablet ? 30 : 20}
//                       height={isTablet ? 30 : 20}
//                     />
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
//     <View style={currentStyles.emptyContainer}>
//       <Icon
//         name="heart-outline"
//         size={isTablet ? 120 : 80}
//         color="#ccc"
//         style={currentStyles.emptyIcon}
//       />
//       <Text style={currentStyles.emptyTitle}>Your Favourites is Empty</Text>
//       <Text style={currentStyles.emptyMessage}>
//         Add some delicious items to your favourites to get started!
//       </Text>
//       <TouchableOpacity
//         style={currentStyles.browseButton}
//         onPress={() => navigation.navigate('Browse')}
//       >
//         <Text style={currentStyles.browseButtonText}>Start Browsing</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={currentStyles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       <View style={currentStyles.header}>
//         <TouchableOpacity
//           onPress={handleGoBack}
//           style={currentStyles.backButton}
//         >
//           <Icon name="arrow-back" size={isTablet ? 32 : 24} color="#333" />
//         </TouchableOpacity>
//         <Text style={currentStyles.headerTitle}>
//           Favourites {favorites.length > 0 && `(${favorites.length})`}
//         </Text>
//         <View style={currentStyles.headerRight} />
//       </View>

//       {favorites.length === 0 ? (
//         <EmptyFavorites />
//       ) : (
//         <FlatList
//           data={favorites}
//           renderItem={renderFavoriteItem}
//           keyExtractor={item => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={currentStyles.listContainer}
//         />
//       )}
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
//     paddingLeft: 12,
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
//     borderRadius: 4,
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

// // ==========================================
// // TABLET STYLES (Separate - New)
// // ==========================================
// const tabletStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 40,
//     paddingVertical: 25,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   backButton: {
//     width: 45,
//     height: 45,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '600',
//     color: '#000000',
//     flex: 1,
//     textAlign: 'center',
//     marginRight: 45,
//   },
//   headerRight: {
//     width: 45,
//   },
//   listContainer: {
//     paddingVertical: 25,
//     paddingHorizontal: 40,
//     alignItems: 'center',
//   },
//   itemCard: {
//     width: '100%',
//     maxWidth: 700,
//     height: 160,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     borderWidth: 1.5,
//     borderColor: '#D9D9D9',
//     padding: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   productImage: {
//     width: 140,
//     height: 130,
//     marginRight: 20,
//     borderRadius: 8,
//   },
//   productInfo: {
//     flex: 1,
//     paddingRight: 15,
//     justifyContent: 'space-between',
//     height: 130,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333333',
//     marginBottom: 8,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     marginBottom: 7,
//   },
//   tag: {
//     backgroundColor: 'white',
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 6,
//     marginRight: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   tagText: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: '500',
//   },
//   packSize: {
//     fontSize: 18,
//     color: '#666666',
//     fontWeight: '400',
//     marginBottom: 0,
//   },
//   price: {
//     fontSize: 26,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   actionsContainer: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingLeft: 10,
//     height: 130,
//     width: 130,
//   },
//   removeFromFavoritesButton: {
//     width: 45,
//     height: 45,
//     borderRadius: 22,
//     paddingLeft: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//     borderRadius: 8,
//   },
//   counterContainerActive: {
//     backgroundColor: '#D9D9D9',
//     paddingHorizontal: 2,
//     borderRadius: 6,
//     paddingVertical: 2,
//   },
//   singleAddButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 6,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   decreaseButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 6,
//     backgroundColor: '#A7C257',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   deleteButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 6,
//     backgroundColor: '#D9D9D9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   counterText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#333333',
//     minWidth: 30,
//     textAlign: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 60,
//   },
//   emptyIcon: {
//     marginBottom: 30,
//   },
//   emptyTitle: {
//     fontSize: 32,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//   },
//   emptyMessage: {
//     fontSize: 20,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 30,
//     marginBottom: 40,
//   },
//   browseButton: {
//     backgroundColor: '#A7C257',
//     paddingHorizontal: 35,
//     paddingVertical: 18,
//     borderRadius: 12,
//   },
//   browseButtonText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '600',
//   },
// });

// export default Favorite;



// the above is for mobile and tablet only



import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../Context/CartContext';
import { useFavorites } from '../Context/FavoritesContext';
import PlusIcon from '../Assets/Images/PlusIcon.svg';
import Delete from '../Assets/Images/Delete.svg';
import Minusicon from '../Assets/Images/minusicon.svg';

const Favorite = () => {
  const navigation = useNavigation();
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

  const {
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
    getItemQuantity,
  } = useCart();
  const { favorites, removeFromFavorites } = useFavorites();

  const handleAddToCart = product => {
    addToCart(product);
  };

  const handleIncrease = productId => {
    incrementItem(productId);
  };

  const handleDecrease = productId => {
    decrementItem(productId);
  };

  const handleDeleteFromCart = productId => {
    removeItem(productId);
  };

  const handleRemoveFromFavorites = productId => {
    removeFromFavorites(productId);
  };

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const getImageSource = imageData => {
    if (typeof imageData === 'string') {
      return { uri: imageData };
    } else if (imageData && typeof imageData === 'object' && imageData.uri) {
      return imageData;
    } else if (typeof imageData === 'number') {
      return imageData;
    } else {
      return {
        uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop',
      };
    }
  };

  const currentStyles = isTablet ? tabletStyles : styles;

  const renderFavoriteItem = ({ item, isInRow = false }) => {
    const quantity = getItemQuantity(item.id);
    const imageSource = getImageSource(item.image);
    
    const itemWidth = isTablet && isLandscape && isInRow 
      ? (screenWidth - 120) / 2 - 10 
      : undefined;

    return (
      <View style={[
        currentStyles.itemCard,
        itemWidth && { width: itemWidth }
      ]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SingleProduct', { product: item })
          }
        >
          <Image
            source={imageSource}
            style={currentStyles.productImage}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={currentStyles.productInfo}>
          <Text style={currentStyles.productName} numberOfLines={1}>
            {item.name}
          </Text>

          <View style={currentStyles.tagsContainer}>
            {item.brand && (
              <View style={currentStyles.tag}>
                <Text style={currentStyles.tagText}>{item.brand}</Text>
              </View>
            )}
            {item.category && (
              <View style={currentStyles.tag}>
                <Text style={currentStyles.tagText}>{item.category}</Text>
              </View>
            )}
          </View>

          {item.packSize && (
            <Text style={currentStyles.packSize}>
              Pack Size: {item.packSize}
            </Text>
          )}
          <Text style={currentStyles.price}>{item.price}</Text>
        </View>

        <View style={currentStyles.actionsContainer}>
          <TouchableOpacity
            onPress={() => handleRemoveFromFavorites(item.id)}
            style={currentStyles.removeFromFavoritesButton}
          >
            <Icon name="heart" size={isTablet ? 28 : 20} color="#FF6B6B" />
          </TouchableOpacity>

          <View style={currentStyles.buttonContainer}>
            <View
              style={[
                currentStyles.counterContainer,
                quantity > 0 && currentStyles.counterContainerActive,
              ]}
            >
              {quantity === 0 ? (
                <>
                  <View style={{ width: isTablet ? 40 : 30 }} />
                  <Text
                    style={{ width: isTablet ? 30 : 20, textAlign: 'center' }}
                  />
                  <TouchableOpacity
                    onPress={() => handleAddToCart(item)}
                    style={currentStyles.singleAddButton}
                  >
                    <PlusIcon
                      width={isTablet ? 30 :15}
                      height={isTablet ? 30 :15}
                    />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  {quantity === 1 ? (
                    <TouchableOpacity
                      onPress={() => handleDeleteFromCart(item.id)}
                      style={currentStyles.deleteButton}
                    >
                      <Delete
                        width={isTablet ? 30 : 20}
                        height={isTablet ? 30 : 20}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => handleDecrease(item.id)}
                      style={currentStyles.decreaseButton}
                    >
                      <Minusicon
                        width={isTablet ? 30 : 15}
                        height={isTablet ? 30 : 15}
                      />
                    </TouchableOpacity>
                  )}
                  <Text style={currentStyles.counterText}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleIncrease(item.id)}
                    style={currentStyles.singleAddButton}
                  >
                    <PlusIcon
                      width={isTablet ? 30 :15}
                      height={isTablet ? 30 :15}
                    />
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
    <View style={currentStyles.emptyContainer}>
      <Icon
        name="heart-outline"
        size={isTablet ? 120 : 80}
        color="#ccc"
        style={currentStyles.emptyIcon}
      />
      <Text style={currentStyles.emptyTitle}>Your Favourites is Empty</Text>
      <Text style={currentStyles.emptyMessage}>
        Add some delicious items to your favourites to get started!
      </Text>
      <TouchableOpacity
        style={currentStyles.browseButton}
        onPress={() => navigation.navigate('Browse')}
      >
        <Text style={currentStyles.browseButtonText}>Start Browsing</Text>
      </TouchableOpacity>
    </View>
  );

  // Render items in rows for landscape
  const renderContent = () => {
    if (favorites.length === 0) {
      return <EmptyFavorites />;
    }

    // For tablet landscape: 2 items per row
    if (isTablet && isLandscape) {
      const rows = [];
      for (let i = 0; i < favorites.length; i += 2) {
        const item1 = favorites[i];
        const item2 = favorites[i + 1];
        
        rows.push(
          <View key={`row-${i}`} style={currentStyles.favoriteItemRow}>
            {renderFavoriteItem({ item: item1, isInRow: true })}
            {item2 && renderFavoriteItem({ item: item2, isInRow: true })}
          </View>
        );
      }
      return (
        <FlatList
          data={rows}
          renderItem={({ item }) => item}
          keyExtractor={(item, index) => `row-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={currentStyles.listContainer}
        />
      );
    }

    // For mobile and tablet portrait: 1 item per row
    return (
      <FlatList
        data={favorites}
        renderItem={({ item }) => renderFavoriteItem({ item, isInRow: false })}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={currentStyles.listContainer}
      />
    );
  };

  return (
    <SafeAreaView style={currentStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={currentStyles.header}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={currentStyles.backButton}
        >
          <Icon name="arrow-back" size={isTablet ? 32 : 24} color="#333" />
        </TouchableOpacity>
        <Text style={currentStyles.headerTitle}>
          Favourites {favorites.length > 0 && `(${favorites.length})`}
        </Text>
        <View style={currentStyles.headerRight} />
      </View>

      {renderContent()}
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
    paddingLeft: 12,
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
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 25,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    textAlign: 'center',
    marginRight: 45,
  },
  headerRight: {
    width: 45,
  },
  listContainer: {
    paddingVertical: 25,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  // NEW: Row container for landscape mode
  favoriteItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
    marginBottom: 20,
  },
  itemCard: {
    width: '100%',
    maxWidth: 700,
    height: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 140,
    height: 130,
    marginRight: 20,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    paddingRight: 15,
    justifyContent: 'space-between',
    height: 130,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  tag: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  tagText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  packSize: {
    fontSize: 18,
    color: '#666666',
    fontWeight: '400',
    marginBottom: 0,
  },
  price: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000000',
  },
  actionsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    height: 130,
    width: 130,
  },
  removeFromFavoritesButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
  },
  counterContainerActive: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 2,
    borderRadius: 6,
    paddingVertical: 2,
  },
  singleAddButton: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#A7C257',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  decreaseButton: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#A7C257',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  counterText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    minWidth: 30,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  emptyIcon: {
    marginBottom: 30,
  },
  emptyTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  emptyMessage: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 40,
  },
  browseButton: {
    backgroundColor: '#A7C257',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 12,
  },
  browseButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Favorite;