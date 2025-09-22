


import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useCart } from '../Context/CartContext';

import UnitedFoodLogo from '../Assets/Images/unitedFoodLogo1.svg';
import image1 from '../Assets/Images/image1.png';
import browse1 from '../Assets/Images/browse1.png';
import Offer from '../Assets/Images/Offer.png';
import RecentOffer from '../Assets/Images/RecentOffer.png';
import Stock from '../Assets/Images/Stock.png';
import arrow from '../Assets/Images/arrow.png';
import notificationIcon from '../Assets/Images/notificationIcon.png';
import Bag from '../Assets/Images/Bag.png';
import bottle from '../Assets/Images/bottle.png';

const Home = ({ navigation }) => {
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  // Banner images array
  const bannerImages = useMemo(() => [
    { id: '1', image: image1 },
    { id: '2', image: image1 },
    { id: '3', image: image1 },
    { id: '4', image: image1 },
  ], []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = (prevSlide + 1) % bannerImages.length;
        sliderRef.current?.scrollToIndex({
          index: nextSlide,
          animated: true,
        });
        return nextSlide;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Handle manual slide change
  const onSlideChange = useCallback((event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / (screenWidth - 32));
    setCurrentSlide(slideIndex);
  }, [screenWidth]);

  // Render banner item
  const renderBannerItem = useCallback(({ item }) => (
    <View style={[styles.bannerSlide, { width: screenWidth - 32 }]}>
      <Image 
        source={item.image} 
        style={styles.bannerImage} 
        resizeMode="contain"
      />
    </View>
  ), [screenWidth]);

  // Memoize static data to prevent unnecessary re-renders
  const newArrivalProducts = useMemo(() => [
    {
      id: '1',
      name: 'Colour Bright Red',
      category: 'Cooking Ingredients',
      subcategory: 'Balish',
      packSize: '400g',
      price: '£20.20',
      image: bottle
    },
    {
      id: '2',
      name: 'Bay Leaves',
      category: 'Spice Bazaar',
      subcategory: 'Balish',
      packSize: '1kg',
      price: '£9.49',
      image: Bag,
    },
    {
      id: '3',
      name: 'Organic Honey',
      category: 'Natural Foods',
      subcategory: 'Sweeteners',
      packSize: '500g',
      price: '£15.99',
      image: bottle
    },
    {
      id: '4',
      name: 'Garam Masala',
      category: 'Spice Bazaar',
      subcategory: 'Spices',
      packSize: '100g',
      price: '£8.49',
      image: Bag,
    },
  ], []);

  const categories = useMemo(() => [
    { id: '1', title: 'BROWSE & CATEGORIES', img: browse1, screen: 'Browse' },
    { id: '2', title: 'OFFER & PROMOTION', img: Offer, screen: 'Offers' },
    { id: '3', title: 'STOCK CHECKLIST', img: Stock, screen: 'Stock' },
    { id: '4', title: 'RECENT\nORDERS', img: RecentOffer, screen: 'Recent' },
  ], []);

  const productCategories = useMemo(() => [
    {
      id: '1',
      name: 'Appetizers & Sides',
      products: 62,
      image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=300&fit=crop',
    },
    {
      id: '2',
      name: 'Beverages',
      products: 30,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      name: 'Dairy & Eggs',
      products: 14,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
    },
    {
      id: '4',
      name: 'Desserts',
      products: 21,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
    },
  ], []);

  // Updated liveOffers to use the same images from newArrivalProducts with more items
  const liveOffers = useMemo(() => [
    {
      id: '3',
      name: 'Colour Bright Red',
      category: 'Cooking Ingredients',
      subcategory: 'Balish',
      packSize: '400g',
      originalPrice: '£22.99',
      currentPrice: '£20.20',
      price: '£20.20',
      offerText: 'Offer Ends in 1 Day',
      image: bottle, // Using same image as New Arrival
    },
    {
      id: '4',
      name: 'Bay Leaves',
      category: 'Spice Bazaar',
      subcategory: 'Balish',
      packSize: '1kg',
      originalPrice: '£10.99',
      currentPrice: '£9.49',
      price: '£9.49',
      offerText: 'Offer Ends in 1 Day',
      image: Bag, // Using same image as New Arrival
    },
    {
      id: '5',
      name: 'Organic Honey',
      category: 'Natural Foods',
      subcategory: 'Sweeteners',
      packSize: '500g',
      originalPrice: '£18.99',
      currentPrice: '£15.99',
      price: '£15.99',
      offerText: 'Offer Ends in 2 Days',
      image: bottle, // Repeating bottle image
    },
    {
      id: '6',
      name: 'Garam Masala',
      category: 'Spice Bazaar',
      subcategory: 'Spices',
      packSize: '100g',
      originalPrice: '£10.49',
      currentPrice: '£8.49',
      price: '£8.49',
      offerText: 'Offer Ends in 3 Days',
      image: Bag, // Repeating Bag image
    },
    {
      id: '7',
      name: 'Premium Olive Oil',
      category: 'Cooking Ingredients',
      subcategory: 'Oils',
      packSize: '750ml',
      originalPrice: '£25.99',
      currentPrice: '£22.99',
      price: '£22.99',
      offerText: 'Offer Ends in 1 Day',
      image: bottle, // Repeating bottle image
    },
    {
      id: '8',
      name: 'Black Pepper',
      category: 'Spice Bazaar',
      subcategory: 'Spices',
      packSize: '200g',
      originalPrice: '£12.99',
      currentPrice: '£10.99',
      price: '£10.99',
      offerText: 'Offer Ends in 2 Days',
      image: Bag, // Repeating Bag image
    },
  ], []);

  // Memoize callback functions to prevent unnecessary re-renders
  const handleAddToCart = useCallback((product) => {
    addToCart(product);
  }, [addToCart]);

  const handleIncrement = useCallback((productId) => {
    incrementItem(productId);
  }, [incrementItem]);

  const handleDecrement = useCallback((productId) => {
    decrementItem(productId);
  }, [decrementItem]);

  const handleRemove = useCallback((productId) => {
    removeItem(productId);
  }, [removeItem]);

  // Memoized counter button component
  const renderCounterButton = useCallback((product) => {
    const count = getItemQuantity(product.id);

    if (count === 0) {
      return (
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => handleAddToCart(product)}
          activeOpacity={0.7}
        >
          <Icon name="add" size={20} color="#455625" />
        </TouchableOpacity>
      );
    } else if (count === 1) {
      return (
        <View style={styles.counterContainer}>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleRemove(product.id)}
            activeOpacity={0.7}
          >
            <Icon name="trash-outline" size={16} color="#455625" />
          </TouchableOpacity>
          <Text style={styles.counterText}>{count}</Text>
          <TouchableOpacity 
            style={styles.incrementButton}
            onPress={() => handleIncrement(product.id)}
            activeOpacity={0.7}
          >
            <Icon name="add" size={16} color="#455625" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.counterContainer}>
          <TouchableOpacity 
            style={styles.decrementButton}
            onPress={() => handleDecrement(product.id)}
            activeOpacity={0.7}
          >
            <Icon name="remove" size={16} color="#455625" />
          </TouchableOpacity>
          <Text style={styles.counterText}>{count}</Text>
          <TouchableOpacity 
            style={styles.incrementButton}
            onPress={() => handleIncrement(product.id)}
            activeOpacity={0.7}
          >
            <Icon name="add" size={16} color="#455625" />
          </TouchableOpacity>
        </View>
      );
    }
  }, [getItemQuantity, handleAddToCart, handleIncrement, handleDecrement, handleRemove]);

  const renderCategory = useCallback(({ item }) => (
    <TouchableOpacity
      style={styles.categoryCardContainer}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.8}
    >
      <Image source={item.img} style={styles.categoryImage} />
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  ), [navigation]);

  // New render function for New Arrival products with horizontal scroll
  const renderNewArrivalProduct = useCallback(({ item }) => (
    <View style={styles.newArrivalProductCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
        activeOpacity={0.8}
      >
        <View style={styles.productImageContainer}>
          <Image
            source={item.image}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.productTags}>
        <Text style={styles.productTag}>{item.category}</Text>
        <Text style={styles.productTag}>{item.subcategory}</Text>
      </View>
      <Text style={styles.packSize}>
        Pack Size: <Text style={styles.packSizeValue}>{item.packSize}</Text>
      </Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{item.price}</Text>
        {renderCounterButton(item)}
      </View>
    </View>
  ), [navigation, renderCounterButton]);

  const renderLiveOffer = useCallback(({ item }) => (
    <View style={styles.liveOfferProductCard}>
      <View style={styles.offerBadge}>
        <Text style={styles.offerBadgeText}>{item.offerText}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
        activeOpacity={0.8}
      >
        <View style={styles.productImageContainer}>
          <Image
            source={item.image} // Now using the same images as New Arrival
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.productTags}>
        <Text style={styles.productTag}>{item.category}</Text>
        <Text style={styles.productTag}>{item.subcategory}</Text>
      </View>
      <Text style={styles.packSize}>
        Pack Size: <Text style={styles.packSizeValue}>{item.packSize}</Text>
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.wasText}>Was: <Text style={styles.originalPrice}>{item.originalPrice}</Text></Text>
        <Text style={styles.nowText}>Now:</Text>
      </View>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{item.currentPrice}</Text>
        {renderCounterButton(item)}
      </View>
    </View>
  ), [navigation, renderCounterButton]);

  const renderProductCategory = useCallback(({ item }) => (
    <TouchableOpacity 
      key={item.id} 
      style={styles.productCategoryItem}
      activeOpacity={0.8}
    >
      <View style={styles.productCategoryImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productCategoryImage} />
      </View>
      <Text style={styles.productCategoryName}>{item.name}</Text>
      <Text style={styles.productCategoryCount}>{item.products} Products</Text>
    </TouchableOpacity>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
        backgroundColor={Platform.OS === 'android' ? '#455625' : 'transparent'}
        translucent={Platform.OS === 'android'}
      />

      {/* Header */}
      <LinearGradient
        colors={['#455625', '#97BC51']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.header}
      >
        <View style={styles.logoContainer}>
          <UnitedFoodLogo />
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => navigation.navigate('Search')}
            activeOpacity={0.7}
          >
            <Text style={styles.searchPlaceholder}>Search</Text>
            <Icon name="search-outline" size={18} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Notifications')} style={styles.notificationButton} activeOpacity={0.7}>
            <Image source={notificationIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main ScrollView with optimizations */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        overScrollMode="auto"
        scrollEventThrottle={16}
        removeClippedSubviews={Platform.OS === 'android'}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        {/* Banner Slider */}
        <View style={styles.bannerContainer}>
          <FlatList
            ref={sliderRef}
            data={bannerImages}
            renderItem={renderBannerItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onSlideChange}
          />
          <View style={styles.bannerDots}>
            {bannerImages.map((item, index) => (
              <View 
                key={`banner-dot-${item.id}-${index}`}
                style={[
                  styles.dot, 
                  currentSlide === index && styles.activeDot
                ]} 
              />
            ))}
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesGrid}
            removeClippedSubviews={Platform.OS === 'android'}
            maxToRenderPerBatch={4}
            windowSize={5}
            initialNumToRender={4}
            getItemLayout={(data, index) => (
              {length: 86, offset: 86 * index, index}
            )}
          />
        </View>

        {/* New Arrival Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrival</Text>
          <TouchableOpacity
            style={styles.viewAllContainer}
            onPress={() => navigation.navigate('Browse')}
            activeOpacity={0.7}
          >
            <Text style={styles.viewAllText}>View All</Text>
            <Image
              source={arrow}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
        </View>

        {/* New Arrival Products with Horizontal Scroll */}
        <View style={styles.newArrivalContainer}>
          <FlatList
            data={newArrivalProducts}
            renderItem={renderNewArrivalProduct}
            keyExtractor={(item) => `new-arrival-${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.newArrivalScrollContent}
            removeClippedSubviews={Platform.OS === 'android'}
            maxToRenderPerBatch={4}
            windowSize={5}
            initialNumToRender={4}
          />
        </View>

        {/* Product Categories Section */}
        <View style={styles.newSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Categories</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate("Categories")}
              activeOpacity={0.7}
            >
              <Text style={styles.viewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCategoryGrid}>
            {productCategories.map((item) => (
              <TouchableOpacity 
                key={`product-category-${item.id}`} 
                style={styles.productCategoryItem}
                activeOpacity={0.8}
              >
                <View style={styles.productCategoryImageContainer}>
                  <Image 
                    source={{ uri: item.image }} 
                    style={styles.productCategoryImage}
                    loadingIndicatorSource={{ uri: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }}
                  />
                </View>
                <Text style={styles.productCategoryName}>{item.name}</Text>
                <Text style={styles.productCategoryCount}>{item.products} Products</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Live Offers Section with Horizontal Scroll */}
        <View style={styles.newSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Live Offers</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate("Offers")}
              activeOpacity={0.7}
            >
              <Text style={styles.viewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>
          {/* Updated Live Offers with Horizontal Scroll */}
          <View style={styles.liveOffersContainer}>
            <FlatList
              data={liveOffers}
              renderItem={renderLiveOffer}
              keyExtractor={(item) => `live-offer-${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.liveOffersScrollContent}
              removeClippedSubviews={Platform.OS === 'android'}
              maxToRenderPerBatch={4}
              windowSize={5}
              initialNumToRender={4}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
    height: Platform.OS === 'ios' ? 110 : 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: { 
    alignItems: 'center', 
    marginBottom: 8, 
    marginTop: Platform.OS === 'ios' ? 0 : 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 30,
    marginRight: 10,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchPlaceholder: { 
    fontSize: 15, 
    color: '#999', 
    marginLeft: 6 
  },
  notificationButton: { 
    padding: 8, 
    borderRadius: 20 
  },
  
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: Platform.OS === 'ios' ? 130 : 120,
  },
  
  bannerContainer: { 
    marginTop:5,
    marginBottom: 10,
  },
  bannerSlide: {
    borderRadius: 12,
    height: 198,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    
  },
  bannerImage: { 
    width: 366,
    height: 158,
    borderRadius: 12,
    opacity: 1,

  },
  bannerDots: {
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    marginTop: -18,
    width: 40,
    height: 3,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 4,
    

  },
  activeDot: { 
    backgroundColor: '#A7C257', 
    width: 40 ,
  },
  
  categoriesContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
    maxWidth: 400,
  },
  categoriesGrid: {
    paddingRight: 10,
  },
  categoryCardContainer: {
    marginTop: 8,
    alignItems: 'center',
    marginRight: 4,
    width: 86,
    height: 72,
    paddingTop: 20,
  },
  categoryCard: {
    backgroundColor: '#CDDF96',
    borderTopRightRadius: 27,
    borderTopLeftRadius: 27,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 86,
    height: 47,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  categoryImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -15,
    zIndex: 1,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
    textAlign: 'center',
    color: '#000000',
    marginTop: 5,
  },
  
  sectionHeader: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: 'black' 
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: { 
    fontSize: 14, 
    color: '#666', 
    fontWeight: '400' 
  },
  arrowImage: {
    marginRight: 10,
    marginLeft: 5,
    width: 10,
    height: 10,
  },
  
  // New Arrival Container with Horizontal Scroll
  newArrivalContainer: {
    marginBottom: 15,
  },
  newArrivalScrollContent: {
    paddingLeft: 1,
    paddingRight: 3,
  },
  
  // Live Offers styles for horizontal scroll - completely separate
  liveOffersContainer: {
    marginBottom: 15,
  },
  liveOffersScrollContent: {
   
    paddingRight: 3,
  },
  
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    width: 183,
    marginBottom: 15,
    borderWidth: Platform.OS === 'ios' ? 0 : 0.1,
    marginHorizontal: 3,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  // Separate New Arrival Product Card
  newArrivalProductCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    width: 183,
    marginBottom: 15,
    borderWidth: Platform.OS === 'ios' ? 0 : 0.1,
    marginHorizontal: 3,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  // Separate Live Offer Product Card
  liveOfferProductCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    marginLeft:1,
    width: 176,
    marginBottom: 15,
    borderWidth: Platform.OS === 'ios' ? 0 : 0.1,
    marginHorizontal: 5,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  productImageContainer: {
    alignItems: 'center',
  },
  productImage: { 
    width: 110, 
    height: 140 
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
  },
  productTags: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginBottom: 8 
  },
  productTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 10,
    fontWeight: '500',
    color: 'black',
    marginRight: 4,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  packSize: { 
    fontSize: 12, 
    color: '#000', 
    marginBottom: 10, 
    fontWeight: '400' 
  },
  packSizeValue: { 
    fontSize: 12, 
    fontWeight: '500',
    color: 'black' 
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: 'black',
  },
  addButton: {
    backgroundColor: '#A7C257',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  counterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 8,
    minWidth: 20,
    textAlign: 'center',
  },
  incrementButton: {
    backgroundColor: '#A7C257',
    width: 24,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementButton: {
    backgroundColor: '#A7C257',
    width: 24,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#D9D9D9',
    width: 24,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  offerBadge: {
    position: 'absolute',
    top: 3,
    right: 4,
    backgroundColor: '#FF2E09',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    zIndex: 1,
  },
  offerBadgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: '400',
  },
  priceContainer: {
    marginBottom: 8,
  },
  wasText: {
    fontSize: 12,
    color: 'black',
    marginBottom: 2,
  },
  originalPrice: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
    textDecorationLine: 'line-through',
  },
  nowText: {
    fontSize: 12,
    color: 'black',
    marginBottom: 1,
  },

  newSection: {
    marginTop: 20,
    paddingHorizontal: 8,
  },

  productCategoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  productCategoryItem: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 20,
  },
  productCategoryImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 12,
    borderColor: "#D9D9D9",
    borderWidth: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  productCategoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productCategoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
  },
  productCategoryCount: {
    fontSize: 12,
    color: '#454545',
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default Home;