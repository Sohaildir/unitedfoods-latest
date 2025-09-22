
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Image,
//   Dimensions,
//   ScrollView,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useCart } from '../Context/CartContext'; // Import the cart hook
// import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook
// import cross from '../Assets/Images/cross.png';

// const { width, height } = Dimensions.get('window');

// const SingleProduct = ({ route, navigation }) => {
//   // Get cart functions from context
//   const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  
//   // Get favorites functions from context
//   const { toggleFavorite, isFavorite } = useFavorites();
  
//   // Fixed: Proper fallback data structure
//   const { product } = route.params || {};
  
//   // Default product data if none provided
//   const defaultProduct = {
//     id: '1',
//     name: 'Buns Seeded',
//     brand: 'Americana',
//     packSize: '48 x 4.5"',
//     price: '£9.49',
//     image: { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center' },
//     description: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds.',
//     extendedDescription: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.',
//   };

//   const currentProduct = product || defaultProduct;
  
//   // Check if current product is in favorites using context
//   const isProductFavorite = isFavorite(currentProduct.id);
  
//   // Get current quantity of this item in cart
//   const currentQuantity = getItemQuantity(currentProduct.id);

//   const handleAddToCart = () => {
//     try {
//       // Add the product to cart using context
//       addToCart(currentProduct);
//       console.log('Item added to cart:', currentProduct.name);
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//     }
//   };

//   const handleIncrement = () => {
//     try {
//       incrementItem(currentProduct.id);
//       console.log('Item incremented:', currentProduct.name);
//     } catch (error) {
//       console.error('Error incrementing item:', error);
//     }
//   };

//   const handleDecrement = () => {
//     try {
//       if (currentQuantity === 1) {
//         // Remove item completely when quantity is 1
//         removeItem(currentProduct.id);
//         console.log('Item removed from cart:', currentProduct.name);
//       } else {
//         // Decrease quantity
//         decrementItem(currentProduct.id);
//         console.log('Item decremented:', currentProduct.name);
//       }
//     } catch (error) {
//       console.error('Error decrementing item:', error);
//     }
//   };

//   const handleClose = () => {
//     if (navigation && navigation.goBack) {
//       navigation.goBack();
//     } else if (navigation && navigation.navigate) {
//       navigation.navigate('Browse');
//     }
//   };

//   const handleShare = () => {
//     console.log('Share pressed for:', currentProduct.name);
//     // Add your share logic here
//   };

//   const handleToggleFavorite = () => {
//     try {
//       // Toggle favorite using context
//       toggleFavorite(currentProduct);
//       const action = isProductFavorite ? 'removed from' : 'added to';
//       console.log(`${currentProduct.name} ${action} favorites`);
//     } catch (error) {
//       console.error('Error toggling favorite:', error);
//     }
//   };

//   // Fixed: Proper image source handling
//   const getImageSource = () => {
//     if (typeof currentProduct.image === 'string') {
//       return { uri: currentProduct.image };
//     }
//     return currentProduct.image;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="white" />

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Header Section with Image */}
//         <View style={styles.imageSection}>
//           {/* Header Icons */}
//           <View style={styles.headerIcons}>
//             <TouchableOpacity style={styles.iconButton} onPress={handleToggleFavorite}>
//               <Icon 
//                 name={isProductFavorite ? "heart" : "heart-outline"} 
//                 size={24} 
//                 color={isProductFavorite ? "#FF6B6B" : "#333"} 
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
//               <Icon name="share-social-outline" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>

//           {/* Product Image */}
//           <View style={styles.productImageContainer}>
//             <Image
//               source={getImageSource()}
//               style={styles.productImage}
//               resizeMode="contain"
//               onError={(error) => console.log('Image loading error:', error)}
//             />
//           </View>
//         </View>

//         {/* Product Details Modal */}
//         <View style={styles.detailsModal}>
//           {/* Close Button */}
//           <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
//             <Image source={cross} />
//           </TouchableOpacity>

//           <View style={styles.content}>
//             {/* Product Name */}
//             <Text style={styles.productName} numberOfLines={2}>
//               {currentProduct.name}
//             </Text>

//             {/* Favorite Status Indicator */}
//             {isProductFavorite && (
//               <View style={styles.favoriteIndicator}>
//                 {/* <Icon name="heart" size={16} color="#FF6B6B" /> */}
//                 {/* <Text style={styles.favoriteText}>Added to Favorites</Text> */}
//               </View>
//             )}

//             {/* Short Description */}
//             {currentProduct.description && (
//               <Text style={styles.shortDescription}>
//                 {currentProduct.description}
//               </Text>
//             )}

//             {/* Product Details */}
//             <View style={styles.detailsContainer}>
//               {currentProduct.brand && (
//                 <View style={styles.detailRow}>
//                   <Text style={styles.detailLabel}>Brand Name:</Text>
//                   <Text style={styles.detailValue}>{currentProduct.brand}</Text>
//                 </View>
//               )}

//               {currentProduct.packSize && (
//                 <View style={styles.detailRow}>
//                   <Text style={styles.detailLabel}>Pack Size:</Text>
//                   <Text style={[styles.detailValue,{marginHorizontal:-30}]}>{currentProduct.packSize}</Text>
//                 </View>
//               )}
//             </View>

//             {/* Price */}
//             <Text style={styles.price}>{currentProduct.price}</Text>

//             {/* Add to Cart Button with Counter */}
//             {currentQuantity === 0 ? (
//               // Show "Add to Cart" button when quantity is 0
//               <TouchableOpacity onPress={handleAddToCart} style={styles.buttonContainer}>
//                 <LinearGradient
//                   colors={['#455625', '#97BC51']}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={styles.addToCartButton}
//                 >
//                   <Text style={styles.addToCartText}>Add to Cart</Text>
//                   <Icon name="cart-outline" size={25} color="white" />
//                 </LinearGradient>
//               </TouchableOpacity>
//             ) : (
//               // Show counter when quantity > 0
//               <View style={styles.counterContainer}>
//                 <TouchableOpacity 
//                   onPress={handleDecrement}
//                   style={styles.counterButton}
//                 >
//                   {currentQuantity === 1 ? (
//                     <Icon name="trash-outline" size={18} color="#666" />
//                   ) : (
//                     <Text style={styles.counterButtonText}>-</Text>
//                   )}
//                 </TouchableOpacity>
                
//                 <Text style={styles.counterText}>{currentQuantity}</Text>
                
//                 <TouchableOpacity 
//                   onPress={handleIncrement}
//                   style={styles.counterButtonAdd}
//                 >
//                   <Text style={styles.counterButtonTextAdd}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* Description Section - Added under Add to Cart */}
//             <View style={styles.descriptionSection}>
//               <Text style={styles.descriptionTitle}>Description</Text>
//               <Text style={styles.descriptionText}>
//                 {currentProduct.extendedDescription || currentProduct.description || ' A fully baked , fully sliced white  burn '}
//               </Text>
//             </View>
//           </View>
//         </View>
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
//   imageSection: {
//     height: height * 0.4,
//     backgroundColor: '#F5F5F5',
//     position: 'relative',
//   },
//   headerIcons: {
//     position: 'absolute',
//     top: 20,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     zIndex: 2,
//   },
//   iconButton: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   productImageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 80, // Space for header icons
//   },
//   productImage: {
//     width: width * 0.8,
//     height: height * 0.25,
//     maxWidth: 300,
//     maxHeight: 200,
//   },
//   detailsModal: {
//     backgroundColor: '#FFFFFF',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     marginTop: -20,
//     position: 'relative',
//     paddingHorizontal: 5,
//     paddingVertical:10,
//     minHeight: height * 0.6,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 15,
//     width: 36,
//     height: 36,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//     marginTop: 5,
//     lineHeight: 28,
//   },
//   favoriteIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingHorizontal: 2,
//   },
//   favoriteText: {
//     fontSize: 14,
//     color: '#FF6B6B',
//     fontWeight: '500',
//     marginLeft: 6,
//   },
//   shortDescription: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//     marginBottom: 16,
//   },
//   detailsContainer: {
//     marginBottom: 16,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     marginBottom: 8,
//     alignItems: 'flex-start',
//   },
//   detailLabel: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     width: 120,
//     flexShrink: 0,
//   },
//   detailValue: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//     flexWrap: 'wrap',
//     marginTop:4,
//     marginHorizontal:-10
//   },
//   price: {
//     fontSize: 23,
//     fontWeight: '900',
//     color: '#000',
//     marginBottom: 10,
//     marginTop: -15,
//   },
//   buttonContainer: {
//     marginBottom: 20, // Increased margin for description space
//     alignSelf: 'flex-start',
//   },
//   addToCartButton: {
//     flexDirection: 'row',
//     justifyContent:"space-evenly",
//     paddingVertical: 8,
//     paddingHorizontal: 13,
//     borderRadius: 15,
//     minWidth: 150,
//     width:170,
//     height:42,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   addToCartText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 4,
//     flexShrink: 1,
//   },
//   // Counter styles
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     paddingHorizontal: 4,
//     paddingVertical: 2,
//     marginBottom: 20, // Increased margin for description space
//   },
//   counterButton: {
//     backgroundColor: '#fff',
//     width: 32,
//     height: 32,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   counterButtonAdd: {
//     backgroundColor: '#A7C257',
//     width: 32,
//     height: 32,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterButtonText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   counterButtonTextAdd: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#455625',
//   },
//   counterText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginHorizontal: 16,
//     minWidth: 20,
//     textAlign: 'center',
//   },
//   quantityText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//     marginLeft: 6,
//   },
//   descriptionSection: {
//     paddingTop: 0, // Removed border and padding from top
//     flex: 1,
//   },
//   descriptionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   descriptionText: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 22,
//   },
// });

// export default SingleProduct;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Image,
//   Dimensions,
//   ScrollView,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useCart } from '../Context/CartContext'; // Import the cart hook
// import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook
// import cross from '../Assets/Images/cross.png';

// const { width, height } = Dimensions.get('window');

// const SingleProduct = ({ route, navigation }) => {
//   // Get cart functions from context
//   const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  
//   // Get favorites functions from context
//   const { toggleFavorite, isFavorite } = useFavorites();
  
//   // Fixed: Proper fallback data structure
//   const { product } = route.params || {};
  
//   // Default product data if none provided
//   const defaultProduct = {
//     id: '1',
//     name: 'Buns Seeded',
//     brand: 'Americana',
//     packSize: '48 x 4.5"',
//     price: '£9.49',
//     image: { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center' },
//     description: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds.',
//     extendedDescription: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.',
//   };

//   const currentProduct = product || defaultProduct;
  
//   // Check if current product is in favorites using context
//   const isProductFavorite = isFavorite(currentProduct.id);
  
//   // Get current quantity of this item in cart
//   const currentQuantity = getItemQuantity(currentProduct.id);

//   const handleAddToCart = () => {
//     try {
//       // Add the product to cart using context
//       addToCart(currentProduct);
//       console.log('Item added to cart:', currentProduct.name);
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//     }
//   };

//   const handleIncrement = () => {
//     try {
//       incrementItem(currentProduct.id);
//       console.log('Item incremented:', currentProduct.name);
//     } catch (error) {
//       console.error('Error incrementing item:', error);
//     }
//   };

//   const handleDecrement = () => {
//     try {
//       if (currentQuantity === 1) {
//         // Remove item completely when quantity is 1
//         removeItem(currentProduct.id);
//         console.log('Item removed from cart:', currentProduct.name);
//       } else {
//         // Decrease quantity
//         decrementItem(currentProduct.id);
//         console.log('Item decremented:', currentProduct.name);
//       }
//     } catch (error) {
//       console.error('Error decrementing item:', error);
//     }
//   };

//   const handleClose = () => {
//     if (navigation && navigation.goBack) {
//       navigation.goBack();
//     } else if (navigation && navigation.navigate) {
//       navigation.navigate('Browse');
//     }
//   };

//   const handleShare = () => {
//     console.log('Share pressed for:', currentProduct.name);
//     // Add your share logic here
//   };

//   const handleToggleFavorite = () => {
//     try {
//       // Toggle favorite using context
//       toggleFavorite(currentProduct);
//       const action = isProductFavorite ? 'removed from' : 'added to';
//       console.log(`${currentProduct.name} ${action} favorites`);
//     } catch (error) {
//       console.error('Error toggling favorite:', error);
//     }
//   };

//   // Fixed: Proper image source handling
//   const getImageSource = () => {
//     if (typeof currentProduct.image === 'string') {
//       return { uri: currentProduct.image };
//     }
//     return currentProduct.image;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="white" />

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Header Section with Image */}
//         <View style={styles.imageSection}>
//           {/* Header Icons */}
//           <View style={styles.headerIcons}>
//             <TouchableOpacity style={styles.iconButton} onPress={handleToggleFavorite}>
//               <Icon 
//                 name={isProductFavorite ? "heart" : "heart-outline"} 
//                 size={24} 
//                 color={isProductFavorite ? "#FF6B6B" : "#333"} 
//               />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
//               <Icon name="share-social-outline" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>

//           {/* Product Image */}
//           <View style={styles.productImageContainer}>
//             <Image
//               source={getImageSource()}
//               style={styles.productImage}
//               resizeMode="contain"
//               onError={(error) => console.log('Image loading error:', error)}
//             />
//           </View>
//         </View>

//         {/* Product Details Modal */}
//         <View style={styles.detailsModal}>
//           {/* Close Button */}
//           <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
//             <Image source={cross} />
//           </TouchableOpacity>

//           <View style={styles.content}>
//             {/* Product Name */}
//             <Text style={styles.productName} numberOfLines={2}>
//               {currentProduct.name}
//             </Text>

//             {/* Favorite Status Indicator */}
//             {isProductFavorite && (
//               <View style={styles.favoriteIndicator}>
//                 {/* <Icon name="heart" size={16} color="#FF6B6B" /> */}
//                 {/* <Text style={styles.favoriteText}>Added to Favorites</Text> */}
//               </View>
//             )}

//             {/* Short Description */}
//             {currentProduct.description && (
//               <Text style={styles.shortDescription}>
//                 {currentProduct.description}
//               </Text>
//             )}

//             {/* Product Details */}
//             <View style={styles.detailsContainer}>
//               {currentProduct.brand && (
//                 <View style={styles.detailRow}>
//                   <Text style={styles.detailLabel}>Brand Name:</Text>
//                   <Text style={styles.detailValue}>{currentProduct.brand}</Text>
//                 </View>
//               )}

//               {currentProduct.packSize && (
//                 <View style={styles.detailRow}>
//                   <Text style={styles.detailLabel}>Pack Size:</Text>
//                   <Text style={styles.detailValue}>{currentProduct.packSize}</Text>
//                 </View>
//               )}
//             </View>

//             {/* Price Section with Was/Now structure */}
//             <View style={styles.priceSection}>
//               <View style={styles.priceRow}>
//                 <Text style={styles.wasLabel}>Was:</Text>
//                 <Text style={styles.wasPrice}>£10.99</Text>
//               </View>
//               <View style={styles.priceRow}>
//                 <Text style={styles.nowLabel}>Now:</Text>
//                 <Text style={styles.currentPrice}>{currentProduct.price}</Text>
//               </View>
//             </View>

//             {/* Add to Cart Button with Counter */}
//             {currentQuantity === 0 ? (
//               // Show "Add to Cart" button when quantity is 0
//               <TouchableOpacity onPress={handleAddToCart} style={styles.buttonContainer}>
//                 <LinearGradient
//                   colors={['#455625', '#97BC51']}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={styles.addToCartButton}
//                 >
//                   <Text style={styles.addToCartText}>Add to Cart</Text>
//                   <Icon name="cart-outline" size={25} color="white" />
//                 </LinearGradient>
//               </TouchableOpacity>
//             ) : (
//               // Show counter when quantity > 0
//               <View style={styles.counterContainer}>
//                 <TouchableOpacity 
//                   onPress={handleDecrement}
//                   style={styles.counterButton}
//                 >
//                   {currentQuantity === 1 ? (
//                     <Icon name="trash-outline" size={18} color="#666" />
//                   ) : (
//                     <Text style={styles.counterButtonText}>-</Text>
//                   )}
//                 </TouchableOpacity>
                
//                 <Text style={styles.counterText}>{currentQuantity}</Text>
                
//                 <TouchableOpacity 
//                   onPress={handleIncrement}
//                   style={styles.counterButtonAdd}
//                 >
//                   <Text style={styles.counterButtonTextAdd}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* Description Section - Moved directly under Add to Cart */}
//             {currentProduct.extendedDescription && (
//               <View style={styles.descriptionSection}>
//                 <Text style={styles.descriptionTitle}>Description</Text>
//                 <Text style={styles.descriptionText}>
//                   {currentProduct.extendedDescription}
//                 </Text>
//               </View>
//             )}
//           </View>
//         </View>
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
//   imageSection: {
//     height: height * 0.4,
//     backgroundColor: '#F5F5F5',
//     position: 'relative',
//   },
//   headerIcons: {
//     position: 'absolute',
//     top: 30,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     zIndex: 2,
//   },
//   iconButton: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   productImageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 80, // Space for header icons
//   },
//   productImage: {
//     width: width * 0.8,
//     height: height * 0.25,
//     maxWidth: 300,
//     maxHeight: 200,
//   },
//   detailsModal: {
//     backgroundColor: '#FFFFFF',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     marginTop: -20,
//     position: 'relative',
//     paddingHorizontal: 5,
//     paddingVertical:10,
//     minHeight: height * 0.6,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 15,
//     width: 36,
//     height: 36,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productName: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//     marginTop: 5,
//     lineHeight: 28,
//   },
//   favoriteIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingHorizontal: 2,
//   },
//   favoriteText: {
//     fontSize: 14,
//     color: '#FF6B6B',
//     fontWeight: '500',
//     marginLeft: 6,
//   },
//   shortDescription: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//     marginBottom: 16,
//   },
//   detailsContainer: {
//     marginBottom: 16,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     marginBottom: 8,
//     alignItems: 'flex-start',
//   },
//   detailLabel: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     width: 120,
//     flexShrink: 0,
//   },
//   detailValue: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//     flexWrap: 'wrap',
//     marginTop: 4,
//     marginHorizontal: -10
//   },
  
//   // Updated pricing styles to match the design
//   priceSection: {
//     marginBottom: 10,
  
//   },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   wasLabel: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#333',
//     width: 50,
//   },
//   wasPrice: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#333',
//     textDecorationLine: 'line-through',
//     marginLeft: 5,
//   },
//   nowLabel: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     width: 50,
//   },
//   currentPrice: {
//     fontSize: 24,
//     fontWeight: '900',
//     color: '#000',
//     marginLeft: 5,
//   },
//   buttonContainer: {
//     marginBottom: 20,
//     alignSelf: 'flex-start',
//   },
//   addToCartButton: {
//     flexDirection: 'row',
//     justifyContent:"space-evenly",
//     paddingVertical: 8,
//     paddingHorizontal: 13,
//     borderRadius: 15,
//     minWidth: 150,
//     width:170,
//     height:42,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   addToCartText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 4,
//     flexShrink: 1,
//   },
//   // Counter styles
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     paddingHorizontal: 4,
//     paddingVertical: 2,
//     marginBottom: 20,
//   },
//   counterButton: {
//     backgroundColor: '#fff',
//     width: 32,
//     height: 32,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   counterButtonAdd: {
//     backgroundColor: '#A7C257',
//     width: 32,
//     height: 32,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterButtonText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   counterButtonTextAdd: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#455625',
//   },
//   counterText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginHorizontal: 16,
//     minWidth: 20,
//     textAlign: 'center',
//   },
//   quantityText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//     marginLeft: 6,
//   },
//   // Updated description section styles
//   descriptionSection: {
//     marginTop: 5,
//   },
//   descriptionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   descriptionText: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 22,
//   },
// });

// export default SingleProduct;

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from '../Context/CartContext'; // Import the cart hook
import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook
import cross from '../Assets/Images/cross.png';

const { width, height } = Dimensions.get('window');

const SingleProduct = ({ route, navigation }) => {
  // Get cart functions from context
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  
  // Get favorites functions from context
  const { toggleFavorite, isFavorite } = useFavorites();
  
  // Fixed: Proper fallback data structure
  const { product } = route.params || {};
  
  // Default product data if none provided
  const defaultProduct = {
    id: '1',
    name: 'Buns Seeded',
    brand: 'Americana',
    packSize: '48 x 4.5"',
    price: '£9.49',
    image: { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center' },
    description: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds.',
    extendedDescription: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.',
  };

  const currentProduct = product || defaultProduct;
  
  // Check if current product is in favorites using context
  const isProductFavorite = isFavorite(currentProduct.id);
  
  // Get current quantity of this item in cart
  const currentQuantity = getItemQuantity(currentProduct.id);

  const handleAddToCart = () => {
    try {
      // Add the product to cart using context
      addToCart(currentProduct);
      console.log('Item added to cart:', currentProduct.name);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleIncrement = () => {
    try {
      incrementItem(currentProduct.id);
      console.log('Item incremented:', currentProduct.name);
    } catch (error) {
      console.error('Error incrementing item:', error);
    }
  };

  const handleDecrement = () => {
    try {
      if (currentQuantity === 1) {
        // Remove item completely when quantity is 1
        removeItem(currentProduct.id);
        console.log('Item removed from cart:', currentProduct.name);
      } else {
        // Decrease quantity
        decrementItem(currentProduct.id);
        console.log('Item decremented:', currentProduct.name);
      }
    } catch (error) {
      console.error('Error decrementing item:', error);
    }
  };

  const handleClose = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else if (navigation && navigation.navigate) {
      navigation.navigate('Browse');
    }
  };

  const handleShare = () => {
    console.log('Share pressed for:', currentProduct.name);
    // Add your share logic here
  };

  const handleToggleFavorite = () => {
    try {
      // Toggle favorite using context
      toggleFavorite(currentProduct);
      const action = isProductFavorite ? 'removed from' : 'added to';
      console.log(`${currentProduct.name} ${action} favorites`);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  // Fixed: Proper image source handling
  const getImageSource = () => {
    if (typeof currentProduct.image === 'string') {
      return { uri: currentProduct.image };
    }
    return currentProduct.image;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section with Image */}
        <View style={styles.imageSection}>
          {/* Header Icons */}
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={handleToggleFavorite}>
              <Icon 
                name={isProductFavorite ? "heart" : "heart-outline"} 
                size={24} 
                color={isProductFavorite ? "#FF6B6B" : "#333"} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
              <Icon name="share-social-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Product Image */}
          <View style={styles.productImageContainer}>
            <Image
              source={getImageSource()}
              style={styles.productImage}
              resizeMode="contain"
              onError={(error) => console.log('Image loading error:', error)}
            />
          </View>
        </View>

        {/* Product Details Modal */}
        <View style={styles.detailsModal}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Image source={cross} />
          </TouchableOpacity>

          <View style={styles.content}>
            {/* Product Name */}
            <Text style={styles.productName} numberOfLines={2}>
              {currentProduct.name}
            </Text>

            {/* Short Description */}
            {currentProduct.description && (
              <Text style={styles.shortDescription}>
                {currentProduct.description}
              </Text>
            )}

            {/* Product Details */}
            <View style={styles.detailsContainer}>
              {currentProduct.brand && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Brand Name:</Text>
                  <Text style={styles.detailValue}>{currentProduct.brand}</Text>
                </View>
              )}

              {currentProduct.packSize && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Pack Size:</Text>
                  <Text style={styles.detailValue}>{currentProduct.packSize}</Text>
                </View>
              )}
            </View>

            {/* Price Section with Was/Now structure */}
            <View style={styles.priceSection}>
              <View style={styles.priceRow}>
                <Text style={styles.wasLabel}>Was:</Text>
                <Text style={styles.wasPrice}>£10.99</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.nowLabel}>Now:</Text>
                <Text style={styles.currentPrice}>{currentProduct.price}</Text>
              </View>
            </View>

            {/* Add to Cart Button with Counter */}
            {currentQuantity === 0 ? (
              // Show "Add to Cart" button when quantity is 0
              <TouchableOpacity onPress={handleAddToCart} style={styles.buttonContainer}>
                <LinearGradient
                  colors={['#455625', '#97BC51']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.addToCartButton}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                  <Icon name="cart-outline" size={25} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              // Show counter when quantity > 0
              <View style={styles.counterContainer}>
                <TouchableOpacity 
                  onPress={handleDecrement}
                  style={styles.counterButton}
                >
                  {currentQuantity === 1 ? (
                    <Icon name="trash-outline" size={18} color="#666" />
                  ) : (
                    <Text style={styles.counterButtonText}>-</Text>
                  )}
                </TouchableOpacity>
                
                <Text style={styles.counterText}>{currentQuantity}</Text>
                
                <TouchableOpacity 
                  onPress={handleIncrement}
                  style={styles.counterButtonAdd}
                >
                  <Text style={styles.counterButtonTextAdd}>+</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Description Section - Long description after Add to Cart */}
            <View style={styles.descriptionSection}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>
                {currentProduct.extendedDescription || 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  imageSection: {
    height: height * 0.4,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  headerIcons: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 2,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80, // Space for header icons
  },
  productImage: {
    width: width * 0.8,
    height: height * 0.25,
    maxWidth: 300,
    maxHeight: 200,
  },
  detailsModal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    position: 'relative',
    paddingHorizontal: 5,
    paddingVertical:10,
    minHeight: height * 0.6,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 5,
    lineHeight: 28,
  },
  favoriteIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  favoriteText: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '500',
    marginLeft: 6,
  },
  shortDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    width: 120,
    flexShrink: 0,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 4,
    marginHorizontal: -10
  },
  
  // Updated pricing styles to match the design
  priceSection: {
    marginBottom: 20,
    marginTop: -19,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  wasLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    width: 50,
  },
  wasPrice: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  nowLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    width: 50,
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000',
    marginLeft: 5,
  },
  buttonContainer: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  addToCartButton: {
    flexDirection: 'row',
    justifyContent:"space-evenly",
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 15,
    minWidth: 150,
    width:170,
    height:42,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
    flexShrink: 1,
  },
  // Counter styles
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginBottom: 20,
  },
  counterButton: {
    // backgroundColor: '#fff',
    backgroundColor: '#A7C257',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  counterButtonAdd: {
    backgroundColor: '#A7C257',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    
  },
  counterButtonTextAdd: {
    fontSize: 18,
    fontWeight: '600',
    color: '#455625',
    
  },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: 'center',
    
  },
  quantityText: {
    
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
    marginLeft: 6,
  },
  // Updated description section styles
  descriptionSection: {
    marginTop: 5,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
});

export default SingleProduct;