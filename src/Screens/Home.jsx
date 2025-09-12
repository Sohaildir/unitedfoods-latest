
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Image,
//   FlatList,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import UnitedFoodLogo from '../Assets/Images/unitedFoodLogo1.svg';
// import image1 from '../Assets/Images/image1.png';
// import browse1 from '../Assets/Images/browse1.png';
// import Offer from '../Assets/Images/Offer.png';
// import RecentOffer from '../Assets/Images/RecentOffer.png';
// import Stock from '../Assets/Images/Stock.png';
// import arrow from '../Assets/Images/arrow.png';
// import notificationIcon from '../Assets/Images/notificationIcon.png';
// import Bag from '../Assets/Images/Bag.png';
// import bottle from '../Assets/Images/bottle.png';
// const Home = ({ navigation }) => {
//   const newArrivalProducts = [
//     {
//       id: '1',
//       name: 'Colour Bright Red',
//       category: 'Cooking Ingredients',
//       subcategory: 'Balish',
//       packSize: '400g',
//       price: '£20.20',
//       image:
//       bottle
//     },
//     {
//       id: '2',
//       name: 'Bay Leaves',
//       category: 'Spice Bazaar',
//       subcategory: 'Balish',
//       packSize: '1kg',
//       price: '£9.49',
//       image:
//       Bag,
//     },
//   ];

//   const categories = [
//     { id: '1', title: 'BROWSE & CATEGORIES', img: browse1, screen: 'Browse' },
//     { id: '2', title: 'OFFER & PROMOTION', img: Offer, screen: 'Offers' },
//     { id: '3', title: 'STOCK CHECKLIST', img: Stock, screen: 'Stock' },
//     { id: '4', title: 'RECENT\nORDERS', img: RecentOffer, screen: 'Recent' },
//   ];

//   // Product Categories data
//   const productCategories = [
//     {
//       id: '1',
//       name: 'Appetizers & Sides',
//       products: 62,
//       image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=300&fit=crop',
//     },
//     {
//       id: '2',
//       name: 'Beverages',
//       products: 30,
//       image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
//     },
//     {
//       id: '3',
//       name: 'Dairy & Eggs',
//       products: 14,
//       image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
//     },
//     {
//       id: '4',
//       name: 'Desserts',
//       products: 21,
//       image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
//     },
//   ];

//   // Live Offers data
//   const liveOffers = [
//     {
//       id: '1',
//       name: 'Colour Bright Red',
//       category: 'Cooking Ingredients',
//       subcategory: 'Balish',
//       packSize: '400g',
//       originalPrice: '£22.99',
//       currentPrice: '£20.20',
//       offerText: 'Offer Ends in 1 Day',
//       image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center',
//     },
//     {
//       id: '2',
//       name: 'Bay Leaves',
//       category: 'Spice Bazaar',
//       subcategory: 'Balish',
//       packSize: '1kg',
//       originalPrice: '£10.99',
//       currentPrice: '£9.49',
//       offerText: 'Offer Ends in 1 Day',
//       image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center',
//     },
//   ];

//   const renderProduct = ({ item }) => (
//     <View style={styles.productCard}>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('SingleProduct', { product: item })}
//       >
//         <View style={styles.productImageContainer}>
//           <Image
//             source={item.image}
//             style={styles.productImage}
//             resizeMode="cover"
//           />
//         </View>
//       </TouchableOpacity>
//       <Text style={styles.productName}>{item.name}</Text>
//       <View style={styles.productTags}>
//         <Text style={styles.productTag}>{item.category}</Text>
//         <Text style={styles.productTag}>{item.subcategory}</Text>
//       </View>
//       <Text style={styles.packSize}>
//         Pack Size: <Text style={styles.packSizeValue}>{item.packSize}</Text>
//       </Text>
//       <View style={styles.productFooter}>
//         <Text style={styles.productPrice}>{item.price}</Text>
//         <TouchableOpacity style={styles.addButton}>
//           <Icon name="add" size={20} color="#455625" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   const renderCategory = ({ item }) => (
//     <TouchableOpacity
//       style={styles.categoryCardContainer}
//       onPress={() => navigation.navigate(item.screen)}
//     >
//       <Image source={item.img} style={styles.categoryImage} />
//       <View style={styles.categoryCard}>
//         <Text style={styles.categoryText}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Render Product Category Item
//   const renderProductCategory = ({ item }) => (
//     <TouchableOpacity style={styles.productCategoryItem}>
//       <View style={styles.productCategoryImageContainer}>
//         <Image source={{ uri: item.image }} style={styles.productCategoryImage} />
//       </View>
//       <Text style={styles.productCategoryName}>{item.name}</Text>
//       <Text style={styles.productCategoryCount}>{item.products} Products</Text>
//     </TouchableOpacity>
//   );

//   // Render Live Offer Item
//   const renderLiveOffer = ({ item }) => (
//     <View style={styles.liveOfferCard}>
//       <View style={styles.offerBadge}>
//         <Text style={styles.offerBadgeText}>{item.offerText}</Text>
//       </View>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('SingleProduct', { product: item })}
//       >
//         <View style={styles.liveOfferImageContainer}>
//           <Image
//             source={{ uri: item.image }}
//             style={styles.liveOfferImage}
//             resizeMode="cover"
//           />
//         </View>
//       </TouchableOpacity>
//       <Text style={styles.liveOfferName}>{item.name}</Text>
//       <View style={styles.liveOfferTags}>
//         <Text style={styles.liveOfferTag}>{item.category}</Text>
//         <Text style={styles.liveOfferTag}>{item.subcategory}</Text>
//       </View>
//       <Text style={styles.liveOfferPackSize}>Pack Size: {item.packSize}</Text>
//       <View style={styles.priceContainer}>
//         <View style={styles.originalPriceRow}>
//           <Text style={styles.wasText}>Was: </Text>
//           <Text style={styles.originalPrice}>{item.originalPrice}</Text>
//         </View>
//         <View style={styles.currentPriceRow}>
//           <Text style={styles.nowText}>Now: </Text>
//           <Text style={styles.currentPrice}>{item.currentPrice}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   // List header containing Banner + Categories
//   const ListHeader = () => (
//     <>
//       {/* Banner */}
//       <View style={styles.bannerContainer}>
//         <View style={styles.banner}>
//           <Image source={image1} style={styles.bannerImage} resizeMode="contain" />
//         </View>
//         <View style={styles.bannerDots}>
//           <View style={[styles.dot, styles.activeDot]} />
//           <View style={styles.dot} />
//           <View style={styles.dot} />
//         </View>
//       </View>

//       {/* Categories */}
//       <View style={styles.categoriesContainer}>
//         <FlatList
//           data={categories}
//           renderItem={renderCategory}
//           keyExtractor={(item) => item.id}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.categoriesGrid}
//         />
//       </View>

//       {/* Section Header */}
//       <View style={styles.sectionHeader}>
//         <Text style={styles.sectionTitle}>New Arrival</Text>
//         <TouchableOpacity
//           style={{ flexDirection: 'row', alignItems: 'center' }}
//           onPress={() => navigation.navigate('Browse')}
//         >
//           <Text style={styles.viewAllText}>View All</Text>
//           <Image
//             source={arrow}
//             style={{ marginRight: 10, width: 10, height: 10 }}
//           />
//         </TouchableOpacity>
//       </View>
//     </>
//   );

//   // List footer containing new sections
//   const ListFooter = () => (
//     <>
//       {/* Product Categories Section */}
//       <View style={styles.newSection}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Product Categories</Text>
//           <TouchableOpacity>
//             <Text style={styles.viewAllText}>View All →</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={productCategories}
//           renderItem={renderProductCategory}
//           keyExtractor={(item) => item.id}
//           numColumns={2}
//           scrollEnabled={false}
//           columnWrapperStyle={styles.productCategoryRow}
//           contentContainerStyle={styles.productCategoryGrid}
//         />
//       </View>

//       {/* Live Offers Section */}
//       <View style={styles.newSection}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Live Offers</Text>
//           <TouchableOpacity>
//             <Text style={styles.viewAllText}>View All →</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={liveOffers}
//           renderItem={renderLiveOffer}
//           keyExtractor={(item) => item.id}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.liveOffersGrid}
//         />
//       </View>
//     </>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />

//       {/* Header */}
//       <LinearGradient
//         colors={['#455625', '#97BC51']}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 0.5, y: 1 }}
//         style={styles.header}
//       >
//         <View style={styles.logoContainer}>
//           <UnitedFoodLogo />
//         </View>

//         <View style={styles.searchContainer}>
//           <TouchableOpacity
//             style={styles.searchBar}
//             onPress={() => navigation.navigate('Search')}
//             activeOpacity={0.7}
//           >
//             <Text style={styles.searchPlaceholder}>Search</Text>
//             <Icon name="search-outline" size={18} color="#999" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.notificationButton}>
//             <Image source={notificationIcon} />
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>

//       {/* Main FlatList */}
//       <FlatList
//         data={newArrivalProducts}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         ListHeaderComponent={<ListHeader />}
//         ListFooterComponent={<ListFooter />}
//         showsVerticalScrollIndicator={false}
//         columnWrapperStyle={{ justifyContent: 'space-evenly' }}
//         contentContainerStyle={{
//           paddingHorizontal: 8,
//           paddingBottom: 20,
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5' },
//   header: {
//     width: '100%',
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     height: 100,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   logoContainer: { alignItems: 'center', marginBottom: 8, marginTop: 5 },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   searchBar: {
//     flex: 1,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 25,
//     paddingHorizontal: 10,
//     height: 30,
//     marginRight: 10,
//     margin: 10,
//   },
//   searchPlaceholder: { fontSize: 15, color: '#999', marginLeft: 6 },
//   notificationButton: { padding: 8, borderRadius: 20 },
//   bannerContainer: { paddingHorizontal: 10, marginTop: -5 },
//   banner: { borderRadius: 12, width: 366, height: 158, opacity: 1 },
//   bannerImage: { width: '100%', height: 200, borderRadius: 8 },
//   bannerDots: {
//     paddingTop: 28,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dot: {
//     width: 40,
//     height: 3,
//     backgroundColor: '#D9D9D9',
//     marginHorizontal: 4,
//   },
//   activeDot: { backgroundColor: '#A7C257', width: 20 },
//   categoriesContainer: {
//     paddingHorizontal: 20,
//     marginTop: 20,
//     width: 400,
//   },
//   categoryCardContainer: {
//     marginTop: 8,
//     alignItems: 'center',
//     marginRight: 4,
//     width: 86,
//     height: 72,
//     paddingTop: 20,
//   },
//   categoryCard: {
//     backgroundColor: '#CDDF96',
//     borderTopRightRadius: 27,
//     borderTopLeftRadius: 27,
//     borderBottomLeftRadius: 8,
//     borderBottomRightRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 86,
//     height: 47,
//     position: 'relative',
//   },
//   categoryImage: {
//     width: 50,
//     height: 50,
//     position: 'absolute',
//     top: -15,
//     zIndex: 1,
//   },
//   categoryText: {
//     fontSize: 10,
//     fontWeight: '800',
//     textAlign: 'center',
//     color: '#000000',
//     marginTop: 5,
//   },
//   sectionHeader: {
//     marginLeft: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: { fontSize: 20, fontWeight: '900', color: '#333' },
//   viewAllText: { fontSize: 14, color: '#666', fontWeight: '400' },
//   productCard: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 7,
//     width: 185,
//     marginBottom: 15,
//     borderWidth:0.1,
//     marginHorizontal:3,

//   },
//   productsWrapper: { width: '100%', alignItems: 'stretch' },
//   productImageContainer: {
//     marginHorizontal:"auto"
//   },
//   productImage: { width: 110, height: 140 },
//   productName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,

//   },
//   productTags: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 },
//   productTag: {
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 10,
//     fontSize: 10,
//     color: '#666',
//     marginRight: 4,
//     marginBottom: 2,
//     borderWidth:1,
//     borderRadius:5,
//     color:"#000"

//   },
//   packSize: { fontSize: 12, color: '#000', marginBottom: 10 ,fontWeight:400},
//   packSizeValue: { fontWeight: 'bold', color: '#333' },
//   productFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
    
//   },
//   productPrice: { fontSize: 18, fontWeight:"", color: '#333' },
//   addButton: {
//     backgroundColor: '#A7C257',
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   // New sections styles
//   newSection: {
//     marginTop: 10,
//     paddingHorizontal: 8,
//   },

//   // Product Categories styles
//   productCategoryGrid: {
//     paddingHorizontal: 12,
   
//   },
//   productCategoryRow: {
//     justifyContent: 'space-between',
    
//   },
//   productCategoryItem: {
//     alignItems: 'center',
//     width: '48%',
//     marginBottom: 20,
//   },
//   productCategoryImageContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     overflow: 'hidden',
//     marginBottom: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
    
//   },
//   productCategoryImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
    
//   },
//   productCategoryName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   productCategoryCount: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
  
//   },

//   // Live Offers styles
//   liveOffersGrid: {
  
//     paddingHorizontal: 16,
//     paddingLeft: 5,
//     paddingRight: 10,
   
//   },
//   liveOfferCard: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 12,
//     width: 173,
//     marginRight: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     position: 'relative',
//   },
//   offerBadge: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     backgroundColor: '#FF4444',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 4,
//     zIndex: 1,
//   },
//   offerBadgeText: {
//     color: 'white',
//     fontSize: 8,
//     fontWeight: 'bold',
//   },
//   liveOfferImageContainer: {
//     alignItems: 'center',
//     marginBottom: 8,
//     marginTop: 16,
//   },
//   liveOfferImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//   },
//   liveOfferName: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   liveOfferTags: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 6,
//   },
//   liveOfferTag: {
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 4,
//     paddingVertical: 1,
//     borderRadius: 8,
//     fontSize: 8,
//     color: '#666',
//     marginRight: 4,
//     marginBottom: 2,
//   },
//   liveOfferPackSize: {
//     fontSize: 10,
//     color: '#666',
//     marginBottom: 8,
//   },
//   priceContainer: {
//     marginBottom: 8,
//   },
//   originalPriceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 2,
//   },
//   wasText: {
//     fontSize: 10,
//     color: '#999',
//   },
//   originalPrice: {
//     fontSize: 10,
//     color: '#999',
//     textDecorationLine: 'line-through',
//   },
//   currentPriceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   nowText: {
//     fontSize: 10,
//     color: '#333',
//   },
//   currentPrice: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default Home;
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
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
  const newArrivalProducts = [
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
  ];

  const categories = [
    { id: '1', title: 'BROWSE & CATEGORIES', img: browse1, screen: 'Browse' },
    { id: '2', title: 'OFFER & PROMOTION', img: Offer, screen: 'Offers' },
    { id: '3', title: 'STOCK CHECKLIST', img: Stock, screen: 'Stock' },
    { id: '4', title: 'RECENT\nORDERS', img: RecentOffer, screen: 'Recent' },
  ];

  // Product Categories data
  const productCategories = [
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
  ];

  // Live Offers data
  const liveOffers = [
    {
      id: '1',
      name: 'Colour Bright Red',
      category: 'Cooking Ingredients',
      subcategory: 'Balish',
      packSize: '400g',
      originalPrice: '£22.99',
      currentPrice: '£20.20',
      offerText: 'Offer Ends in 1 Day',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center',
    },
    {
      id: '2',
      name: 'Bay Leaves',
      category: 'Spice Bazaar',
      subcategory: 'Balish',
      packSize: '1kg',
      originalPrice: '£10.99',
      currentPrice: '£9.49',
      offerText: 'Offer Ends in 1 Day',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center',
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCardContainer}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={item.img} style={styles.categoryImage} />
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  // Render Live Offer Item
  const renderLiveOffer = ({ item }) => (
    <View style={styles.liveOfferCard}>
      <View style={styles.offerBadge}>
        <Text style={styles.offerBadgeText}>{item.offerText}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
      >
        <View style={styles.liveOfferImageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.liveOfferImage}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.liveOfferName}>{item.name}</Text>
      <View style={styles.liveOfferTags}>
        <Text style={styles.liveOfferTag}>{item.category}</Text>
        <Text style={styles.liveOfferTag}>{item.subcategory}</Text>
      </View>
      <Text style={styles.liveOfferPackSize}>Pack Size: {item.packSize}</Text>
      {/* <View style={styles.priceContainer}>
        <View style={styles.originalPriceRow}>
          <Text style={styles.wasText}>Was: </Text>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        </View>
        <View style={styles.currentPriceRow}>
          <Text style={styles.nowText}>Now: </Text>
        </View>
        <Text style={styles.currentPrice}>{item.currentPrice}</Text>
      </View> */}
      <View style={styles.priceContainer}>
  <View style={styles.originalPriceRow}>
    <Text style={styles.wasText}>Was: </Text>
    <Text style={styles.originalPrice}>{item.originalPrice}</Text>
  </View>

  <View style={styles.currentPriceRow}>
    <View style={styles.priceAndButton}>
      <Text style={styles.nowText}>Now: </Text>
      <Text style={styles.currentPrice}>{item.currentPrice}</Text>
      <TouchableOpacity style={styles.lastaddButton}>
        <Icon name="add" size={20} color="#455625" />
      </TouchableOpacity>
    </View>
  </View>
</View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

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
          <TouchableOpacity style={styles.notificationButton}>
            <Image source={notificationIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main ScrollView */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Image source={image1} style={styles.bannerImage} resizeMode="contain" />
          </View>
          <View style={styles.bannerDots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
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
          />
        </View>

        {/* New Arrival Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrival</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('Browse')}
          >
            <Text style={styles.viewAllText}>View All</Text>
            <Image
              source={arrow}
              style={{ marginRight: 10, width: 10, height: 10 }}
            />
          </TouchableOpacity>
        </View>

        {/* New Arrival Products Grid */}
        <View style={styles.productsGrid}>
          {newArrivalProducts.map((item) => (
            <View key={item.id} style={styles.productCard}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleProduct', { product: item })}
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
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="add" size={20} color="#455625" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Product Categories Section */}
        <View style={styles.newSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Categories</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCategoryGrid}>
            {productCategories.map((item) => (
              <TouchableOpacity key={item.id} style={styles.productCategoryItem}>
                <View style={styles.productCategoryImageContainer}>
                  <Image source={{ uri: item.image }} style={styles.productCategoryImage} />
                </View>
                <Text style={styles.productCategoryName}>{item.name}</Text>
                <Text style={styles.productCategoryCount}>{item.products} Products</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Live Offers Section */}
        <View style={styles.newSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Live Offers</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={liveOffers}
            renderItem={renderLiveOffer}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.liveOffersGrid}
          />
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
    height: 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: { 
    alignItems: 'center', 
    marginBottom: 8, 
    marginTop: 5 
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
  
  // ScrollView styles
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingBottom: 120, // Extra padding at bottom to ensure last items are visible
  },
  
  bannerContainer: { 
    paddingHorizontal: 10, 
    marginTop: -5 
  },
  banner: { 
    borderRadius: 12, 
    width: 366, 
    height: 158, 
    opacity: 1 
  },
  bannerImage: { 
    width: '100%', 
    height: 200, 
    borderRadius: 8 
  },
  bannerDots: {
    paddingTop: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 40,
    height: 3,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 4,
  },
  activeDot: { 
    backgroundColor: '#A7C257', 
    width: 20 
  },
  
  categoriesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    width: 400,
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
    fontWeight: '800',
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
    fontWeight: '900', 
    color: '#333' 
  },
  viewAllText: { 
    fontSize: 14, 
    color: '#666', 
    fontWeight: '400' 
  },
  
  // Products Grid styles
  productsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
   marginLeft:-1
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    width: 185,
    marginBottom: 15,
    borderWidth: 0.1,
    marginHorizontal: 3,
  },
  productImageContainer: {
    marginHorizontal: 'auto'
  },
  productImage: { 
    width: 110, 
    height: 140 
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productTags: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginBottom: 8 
  },
  productTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 10,
    color: '#666',
    marginRight: 4,
    marginBottom: 2,
    borderWidth: 1,
    borderRadius: 5,
    color: '#000'
  },
  packSize: { 
    fontSize: 12, 
    color: '#000', 
    marginBottom: 10, 
    fontWeight: 400 
  },
  packSizeValue: { 
    fontWeight: 'bold', 
    color: '#333' 
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: { 
    fontSize: 18, 
    fontWeight: '', 
    color: '#333' 
  },
  addButton: {
    backgroundColor: '#A7C257',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // New sections styles
  newSection: {
    marginTop: 20,
    paddingHorizontal: 8,
  },

  // Product Categories styles
  productCategoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  productCategoryItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
  },
  productCategoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  productCategoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productCategoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  productCategoryCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },

  // Live Offers styles
  liveOffersGrid: {
    paddingHorizontal: 16,
    paddingLeft: 1,
    paddingRight: 10,
  },
  liveOfferCard: {
    backgroundColor: 'white',
    borderWidth:0.1,
    borderRadius: 10,
    padding: 12,
    width: 174,
    height:270,
    marginRight: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    position: 'relative',
  },
  offerBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1,
  },
  offerBadgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  liveOfferImageContainer: {
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
  liveOfferImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  liveOfferName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  liveOfferTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  liveOfferTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 8,
    fontSize: 8,
    color: '#666',
    marginRight: 4,
    marginBottom: 2,
  },
  liveOfferPackSize: {
    fontSize: 10,
    color: 'black',
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 8,
  },
  originalPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  wasText: {
    fontSize: 10,
    color: 'black',
  },
  originalPrice: {
    fontSize: 10,
    color: 'black',
    textDecorationLine: 'line-through',
  },
  currentPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nowText: {
    fontSize: 10,
    color: 'black',
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  lastaddButton:{
    backgroundColor: '#A7C257',
    borderRadius: 6,
    marginTop:-30,
   height:25,
   width:25,
   marginLeft:128,
   padding:2,
  
 

   
    


  }

});

export default Home;
