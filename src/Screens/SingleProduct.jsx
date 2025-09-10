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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import cross from '../Assets/Images/cross.png'
const { width, height } = Dimensions.get('window');

const SingleProduct = ({ route, navigation }) => {
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
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    console.log('Add to cart pressed for:', currentProduct.name);
    // Add your cart logic here
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

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log('Favorite toggled:', !isFavorite);
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
            <TouchableOpacity style={styles.iconButton} onPress={toggleFavorite}>
              <Icon 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={24} 
                color={isFavorite ? "#FF6B6B" : "#333"} 
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
                  <Text style={[styles.detailValue,{marginHorizontal:-30}]}>{currentProduct.packSize}</Text>
                </View>
              )}
            </View>

            {/* Price */}
            <Text style={styles.price}>{currentProduct.price}</Text>

            {/* Add to Cart Button with Gradient */}
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

            {/* Description Section */}
            {currentProduct.extendedDescription && (
              <View style={styles.descriptionSection}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>
                  {currentProduct.extendedDescription}
                </Text>
              </View>
            )}
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
    marginTop:4,
    marginHorizontal:-10
  },
  price: {
    fontSize: 23,
    fontWeight: '900',
    color: '#000',
    marginBottom: 10,
    marginTop: -15,
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
    fontSize: 18,
    fontWeight: '600',
    marginRight: 4,
  },
  descriptionSection: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 20,
    flex: 1,
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