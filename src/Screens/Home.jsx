import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
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

const Home = ({ navigation }) => {
  // Sample product data
  const newArrivalProducts = [
    {
      id: '1',
      name: 'Colour Bright Red',
      category: 'Cooking Ingredients',
      subcategory: 'Balish',
      packSize: '400g',
      price: '£20.20',
      image:
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center',
    },
    {
      id: '2',
      name: 'Bay Leaves',
      category: 'Spice Bazaar',
      subcategory: 'Balish',
      packSize: '1kg',
      price: '£9.49',
      image:
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop&crop=center',
    },
  ];

  const categories = [
    { id: '1', title: 'BROWSE & CATEGORIES', img: browse1, screen: 'Browse' },
    { id: '2', title: 'OFFER & PROMOTION', img: Offer, screen: 'Offers' },
    { id: '3', title: 'STOCK CHECKLIST', img: Stock, screen: 'Stock' },
    { id: '4', title: 'RECENT\nORDERS', img: RecentOffer, screen: 'Recent' },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>
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
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
    style={styles.categoryCardContainer}
    onPress={() => navigation.navigate(item.screen)} // 👈 Navigate to screen
  >
    <Image source={item.img} style={styles.categoryImage} />
    <View style={styles.categoryCard}>
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  </TouchableOpacity>
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
        {/* Logo */}
        <View style={styles.logoContainer}>
          <UnitedFoodLogo />
        </View>

        {/* Search Bar & Notification Button */}
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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Image
              source={image1}
              style={styles.bannerImage}
              resizeMode="contain"
            />
          </View>

          {/* Banner Dots */}
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
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesGrid}
          />
        </View>

        {/* New Arrivals */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Arrival</Text>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => navigation.navigate('Browse')}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <Image
                source={arrow}
                style={{ marginRight:20, width: 10, height: 10 }}
              />
            </TouchableOpacity>
          </View>

          {/* Parent Container */}
          <View style={styles.productsWrapper}>
            <FlatList
              data={newArrivalProducts}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              style={{ width: '100%' }}
              columnWrapperStyle={{
                justifyContent: 'space-evenly', // Even spacing between cards
              }}
              contentContainerStyle={{
                paddingHorizontal: 8, // Same space at edges as between cards
                paddingBottom: 20,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
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
  logoContainer: { alignItems: 'center', marginBottom: 8, marginTop: 5 },
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
  searchPlaceholder: { fontSize: 15, color: '#999', marginLeft: 6 },
  notificationButton: { padding: 8, borderRadius: 20 },
  content: { flex: 1 },
  bannerContainer: { paddingHorizontal: 10, marginTop: -5 },
  banner: { borderRadius: 12, width: 366, height: 158, opacity: 1 },
  bannerImage: { width: '100%', height: 200, borderRadius: 8 },
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
  activeDot: { backgroundColor: '#A7C257', width: 20 },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    width: 400,
    height: 'auto',
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
  sectionContainer: { marginTop: 25 },
  sectionHeader: {
    marginLeft:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 20, fontWeight: '900', color: '#333' },
  viewAllText: { fontSize: 14, color: '#666', fontWeight: '400', },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
    width: 165, // slightly smaller to fit with space-between
    elevation: 5,
    marginBottom: 15,
  },

  productsWrapper: {
    width: '100%',
    alignItems: 'stretch',
  },
  productImageContainer: {
    paddingLeft: 30,
    paddingTop: 10,
    marginBottom: 10,
  },
  productImage: { width: 80, height: 80 },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productTags: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 },
  productTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 10,
    color: '#666',
    marginRight: 4,
    marginBottom: 2,
  },
  packSize: { fontSize: 12, color: '#666', marginBottom: 10 },
  packSizeValue: { fontWeight: 'bold', color: '#333' },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  addButton: {
    backgroundColor: '#A7C257',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
