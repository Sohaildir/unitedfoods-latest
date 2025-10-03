


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
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useCart } from '../Context/CartContext'; // Import the cart hook
// import { useFavorites } from '../Context/FavoritesContext'; // Import the favorites hook
// import PlusIcon from '../Assets/Images/PlusIcon.svg';
// import Delete from '../Assets/Images/Delete.svg';
// import Minusicon from '../Assets/Images/minusicon.svg';
// import Shoppingcart from '../Assets/Images/shoppingcart.svg';

// const { width, height } = Dimensions.get('window');

// const SingleProduct = ({ route, navigation }) => {
//   // Get cart functions from context
//   const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  
//   // Get favorites functions from context
//   const { toggleFavorite, isFavorite } = useFavorites();
  
//   // Fixed: Proper fallback data structure
//   const { product } = route.params || {};
  
//   // Default product data if none provided - Updated with category, subcategory, origin
//   const defaultProduct = {
//     id: '1',
//     name: 'Buns Seeded',
//     category: 'Cooking Ingredients',
//     subcategory: 'Balish',
//     brand: 'United Foods',
//     origin: 'Pakistan',
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
//     <ScrollView style={styles.scrollContainer}>
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" backgroundColor="white" />

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
//             <Icon name="close" size={24} color="#666" />
//           </TouchableOpacity>

//           <View style={styles.content}>
//             {/* Product Name */}
//             <Text style={styles.productName}>{currentProduct.name}</Text>

//             {/* Short Description */}
//             {currentProduct.description && (
//               <Text style={styles.shortDescription}>
//                 {currentProduct.description}
//               </Text>
//             )}

//             {/* Product Tags - Category, Subcategory, Origin */}
//             {/* <View style={styles.productTags}>
//               {currentProduct.category && (
//                 <Text style={styles.productTag}>{currentProduct.category}</Text>
//               )}
//               {currentProduct.subcategory && (
//                 <Text style={styles.productTag}>{currentProduct.subcategory}</Text>
//               )}
//               {currentProduct.origin && (
//                 <Text style={styles.productTag}>{currentProduct.origin}</Text>
//               )}
//             </View> */}

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

//             {/* Price */}
//             <Text style={styles.price}>{currentProduct.price}</Text>

//             {/* Add to Cart Button with Counter */}
//             {currentQuantity === 0 ? (
//               // Show "Add to Cart" button when quantity is 0
//               <TouchableOpacity onPress={handleAddToCart} style={{ marginBottom: 12 }}>
//                 <LinearGradient
//                   colors={['#455625', '#97BC51']}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 0 }}
//                   style={styles.addToCartButton}
//                 >
//                   <Text style={styles.addToCartText}>Add to Cart</Text>
//                   <Shoppingcart/>
//                 </LinearGradient>
//               </TouchableOpacity>
//             ) : (
//               // Show counter when quantity > 0
//               <View style={styles.counterContainer}>
//                 <TouchableOpacity 
//                   onPress={handleDecrement}
//                   style={currentQuantity === 1 ? styles.counterButtonDelete : styles.counterButton}
//                 >
//                   {currentQuantity === 1 ? (
//                     <Delete/>
//                   ) : (
//                     <Text style={styles.counterButtonText}>
//                      <Minusicon/> 
//                       </Text>
//                   )}
//                 </TouchableOpacity>
                
//                 <Text style={styles.counterText}>{currentQuantity}</Text>
                
//                 <TouchableOpacity 
//                   onPress={handleIncrement}
//                   style={styles.counterButtonAdd}
//                 >
//                   <Text style={styles.counterButtonTextAdd}>
//                   <PlusIcon/>
//                     </Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* Description Section */}
//             <View style={styles.descriptionSection}>
//               <Text style={styles.descriptionTitle}>Description</Text>
//               <Text style={styles.descriptionText}>
//                 {currentProduct.extendedDescription || 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.'}
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   imageSection: {
//     height: height * 0.35,
//     backgroundColor: '#F5F5F5',
//     position: 'relative',
//   },
//   headerIcons: {
//     position: 'absolute',
//     top: 40,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     zIndex: 2,
//   },
//   iconButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
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
//     paddingHorizontal: 40,
//   },
//   productImage: {
//     width: width * 0.7,
//     height: height * 0.23,
//   },
//   detailsModal: {
//     flex: 1,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     marginTop: -20,
//     position: 'relative',
//     paddingTop: 15,
//     minHeight: height * 0.65,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 12,
//     right: 20,
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#F5F5F5',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 5,
//     paddingBottom: 20,
//   },
//   productName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//     marginTop: 8,
//   },
//   shortDescription: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//     marginBottom: 12,
//   },
//   // Product Tags Styles (matching Home and Browse pages)
//   productTags: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 16,
//   },
//   productTag: {
//     paddingHorizontal: 8,
//     borderRadius: 6,
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#333',
//     marginRight: 6,
//     marginBottom: 4,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     backgroundColor: 'white',
//   },
//   detailsContainer: {
//     marginBottom: 12,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     marginBottom: 6,
//     alignItems: 'flex-start',
//   },
//   detailLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     width: 90,
//   },
//   detailValue: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//   },
//   price: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 16,
//     marginTop: 4,
//   },
//   addToCartButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     borderRadius: 15,
//     width: 160,
//   },
//   addToCartText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//     marginRight: 8,
//   },
//   // Counter styles - keeping from original functionality
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'flex-start',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     paddingHorizontal: 4,
//     paddingVertical: 2,
//     marginBottom: 16,
//   },
//   counterButton: {
//     backgroundColor: '#A7C257',
//     width: 32,
//     height: 32,
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   counterButtonDelete: {
//     backgroundColor: '#D9D9D9',
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
//   descriptionSection: {
//     borderTopWidth: 1,
//     borderTopColor: '#F0F0F0',
//     paddingTop: 16,
//     flex: 1,
//   },
//   descriptionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   descriptionText: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//   },
// });

// export default SingleProduct;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from '../Context/CartContext';
import { useFavorites } from '../Context/FavoritesContext';
import PlusIcon from '../Assets/Images/PlusIcon.svg';
import Delete from '../Assets/Images/Delete.svg';
import Minusicon from '../Assets/Images/minusicon.svg';
import Shoppingcart from '../Assets/Images/shoppingcart.svg';

const SingleProduct = ({ route, navigation }) => {
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth, height: screenHeight } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const { product } = route.params || {};
  
  const defaultProduct = {
    id: '1',
    name: 'Buns Seeded',
    category: 'Cooking Ingredients',
    subcategory: 'Balish',
    brand: 'United Foods',
    origin: 'Pakistan',
    packSize: '48 x 4.5"',
    price: '£9.49',
    image: { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center' },
    description: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds.',
    extendedDescription: 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.',
  };

  const currentProduct = product || defaultProduct;
  const isProductFavorite = isFavorite(currentProduct.id);
  const currentQuantity = getItemQuantity(currentProduct.id);

  const handleAddToCart = () => {
    try {
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
        removeItem(currentProduct.id);
        console.log('Item removed from cart:', currentProduct.name);
      } else {
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
  };

  const handleToggleFavorite = () => {
    try {
      toggleFavorite(currentProduct);
      const action = isProductFavorite ? 'removed from' : 'added to';
      console.log(`${currentProduct.name} ${action} favorites`);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const getImageSource = () => {
    if (typeof currentProduct.image === 'string') {
      return { uri: currentProduct.image };
    }
    return currentProduct.image;
  };

  const currentStyles = isTablet ? tabletStyles : styles;
  const iconSize = isTablet ? 32 : 24;
  const svgSize = isTablet ? 28 : 20;

  return (
    <ScrollView style={currentStyles.scrollContainer}>
      <View style={currentStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        <View style={currentStyles.imageSection}>
          <View style={currentStyles.headerIcons}>
            <TouchableOpacity style={currentStyles.iconButton} onPress={handleToggleFavorite}>
              <Icon 
                name={isProductFavorite ? "heart" : "heart-outline"} 
                size={iconSize} 
                color={isProductFavorite ? "#FF6B6B" : "#333"} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={currentStyles.iconButton} onPress={handleShare}>
              <Icon name="share-social-outline" size={iconSize} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={currentStyles.productImageContainer}>
            <Image
              source={getImageSource()}
              style={currentStyles.productImage}
              resizeMode="contain"
              onError={(error) => console.log('Image loading error:', error)}
            />
          </View>
        </View>

        <View style={currentStyles.detailsModal}>
          <TouchableOpacity style={currentStyles.closeButton} onPress={handleClose}>
            <Icon name="close" size={iconSize} color="#666" />
          </TouchableOpacity>

          <View style={currentStyles.content}>
            <Text style={currentStyles.productName}>{currentProduct.name}</Text>

            {currentProduct.description && (
              <Text style={currentStyles.shortDescription}>
                {currentProduct.description}
              </Text>
            )}

            <View style={currentStyles.detailsContainer}>
              {currentProduct.brand && (
                <View style={currentStyles.detailRow}>
                  <Text style={currentStyles.detailLabel}>Brand Name:</Text>
                  <Text style={currentStyles.detailValue}>{currentProduct.brand}</Text>
                </View>
              )}

              {currentProduct.packSize && (
                <View style={currentStyles.detailRow}>
                  <Text style={currentStyles.detailLabel}>Pack Size:</Text>
                  <Text style={currentStyles.detailValue}>{currentProduct.packSize}</Text>
                </View>
              )}
            </View>

            <Text style={currentStyles.price}>{currentProduct.price}</Text>

            {currentQuantity === 0 ? (
              <TouchableOpacity onPress={handleAddToCart} style={{ marginBottom: 12 }}>
                <LinearGradient
                  colors={['#455625', '#97BC51']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={currentStyles.addToCartButton}
                >
                  <Text style={currentStyles.addToCartText}>Add to Cart</Text>
                  <Shoppingcart width={svgSize} height={svgSize} />
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <View style={currentStyles.counterContainer}>
                <TouchableOpacity 
                  onPress={handleDecrement}
                  style={currentQuantity === 1 ? currentStyles.counterButtonDelete : currentStyles.counterButton}
                >
                  {currentQuantity === 1 ? (
                    <Delete width={svgSize} height={svgSize} />
                  ) : (
                    <Minusicon width={svgSize} height={svgSize} />
                  )}
                </TouchableOpacity>
                
                <Text style={currentStyles.counterText}>{currentQuantity}</Text>
                
                <TouchableOpacity 
                  onPress={handleIncrement}
                  style={currentStyles.counterButtonAdd}
                >
                  <PlusIcon width={svgSize} height={svgSize} />
                </TouchableOpacity>
              </View>
            )}

            <View style={currentStyles.descriptionSection}>
              <Text style={currentStyles.descriptionTitle}>Description</Text>
              <Text style={currentStyles.descriptionText}>
                {currentProduct.extendedDescription || 'A fully baked, fully sliced white burger bun, approximately 5 inches in diameter, topped with sesame seeds. 48 buns per box. The perfect fast food bun for quick serve restaurants, fast food outlets, takeaway, and burger vans.'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imageSection: {
    height: Dimensions.get('window').height * 0.35,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  headerIcons: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 2,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
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
    paddingHorizontal: 40,
  },
  productImage: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.23,
  },
  detailsModal: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    position: 'relative',
    paddingTop: 15,
    minHeight: Dimensions.get('window').height * 0.65,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 8,
  },
  shortDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  productTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  productTag: {
    paddingHorizontal: 8,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    marginRight: 6,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  detailsContainer: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    width: 90,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 4,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    width: 160,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginBottom: 16,
  },
  counterButton: {
    backgroundColor: '#A7C257',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  counterButtonDelete: {
    backgroundColor: '#D9D9D9',
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
  descriptionSection: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 16,
    flex: 1,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  imageSection: {
    height: 400,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  headerIcons: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    zIndex: 2,
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  productImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  productImage: {
    width: 550,
    height: 350,
  },
  detailsModal: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop:60,
    position: 'relative',
    paddingTop: 24,
    minHeight: 600,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 40,
    width: 70,
    height: 70,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 40,
  },
  productName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    marginTop: 12,
  },
  shortDescription: {
    fontSize: 20,
    color: '#666',
    lineHeight: 28,
    marginBottom: 20,
  },
  productTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  productTag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    width: 140,
  },
  detailValue: {
    fontSize: 20,
    color: '#333',
    flex: 1,
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    marginTop: 8,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 18,
    width: 240,
  },
  addToCartText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginRight: 12,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 24,
  },
  counterButton: {
    backgroundColor: '#A7C257',
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  counterButtonDelete: {
    backgroundColor: '#D9D9D9',
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  counterButtonAdd: {
    backgroundColor: '#A7C257',
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  counterButtonTextAdd: {
    fontSize: 26,
    fontWeight: '600',
    color: '#455625',
  },
  counterText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginHorizontal: 24,
    minWidth: 30,
    textAlign: 'center',
  },
  descriptionSection: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 24,
    flex: 1,
  },
  descriptionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 22,
    color: '#666',
    lineHeight: 28,
  },
});

export default SingleProduct;