



import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../Context/CartContext';

// Import your SVG icons
import FilterLogo from '../../Assets/Images/FilterLogo.svg';
import RowLogo from '../../Assets/Images/RowLogo.svg';
import RectLogo from '../../Assets/Images/RectLogo.svg';
import PlusIcon from '../../Assets/Images/PlusIcon.svg';
import productImage from '../../Assets/Images/product.png';

const { width } = Dimensions.get('window');

const Offers = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilter, setShowFilter] = useState(false);
  const navigation = useNavigation();
  
  // Use Cart Context instead of local state
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();

  // Sample data for categories
  const categories = [
    {
      id: '1',
      name: 'Appetizers & Sides',
      icon: '🍽️',
      productCount: 40,
      color: '#FF6B35'
    },
    {
      id: '2',
      name: 'Beverages',
      icon: '🥤',
      productCount: 30,
      color: '#FFA500'
    },
    {
      id: '3',
      name: 'Dairy & Eggs',
      icon: '🥛',
      productCount: 25,
      color: '#4CAF50'
    },
    {
      id: '4',
      name: 'Desserts',
      icon: '🍰',
      productCount: 35,
      color: '#E91E63'
    }
  ];

  // Sample data for brands
  const brands = [
    {
      id: '1',
      name: 'Heinrich',
      logo: 'H',
      productCount: 20,
      color: '#E31837'
    },
    {
      id: '2',
      name: 'Haorra',
      logo: 'H',
      productCount: 15,
      color: '#1B365D'
    },
    {
      id: '3',
      name: 'Brand',
      logo: '—',
      productCount: 25,
      color: '#4A90E2'
    },
    {
      id: '4',
      name: 'NewBrand',
      logo: 'N',
      productCount: 18,
      color: '#9C27B0'
    }
  ];

  const products = [
    {
      id: '1',
      name: 'Tandoori Masala',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '48 x 4.5"',
      originalPrice: '£10.99',
      currentPrice: '£9.49',
      price: '£9.49',
      image: productImage,
      offerEnds: '12h',
    },
    {
      id: '2',
      name: 'Garam Masala',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '24 x 4.5"',
      originalPrice: '£11.49',
      currentPrice: '£9.99',
      price: '£9.99',
      image: productImage,
      offerEnds: '10h',
    },
    {
      id: '3',
      name: 'Curry Powder',
      category: 'Spice Bazaar',
      region: 'North Mills',
      packSize: '36 x 3.5"',
      originalPrice: '£12.99',
      currentPrice: '£10.99',
      price: '£10.99',
      image: productImage,
      offerEnds: '8h',
    },
    {
      id: '4',
      name: 'Turmeric Powder',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '48 x 4.5"',
      originalPrice: '£9.99',
      currentPrice: '£8.49',
      price: '£8.49',
      image: productImage,
      offerEnds: '14h',
    },
    {
      id: '5',
      name: 'Chili Powder',
      category: 'Spice Bazaar',
      region: 'South Valley',
      packSize: '40 x 5"',
      originalPrice: '£13.49',
      currentPrice: '£11.99',
      price: '£11.99',
      image: productImage,
      offerEnds: '6h',
    },
    {
      id: '6',
      name: 'Cumin Seeds',
      category: 'Spice Bazaar',
      region: 'North Mills',
      packSize: '50 x 5"',
      originalPrice: '£8.99',
      currentPrice: '£7.49',
      price: '£7.49',
      image: productImage,
      offerEnds: '9h',
    },
  ];

  // Filter handlers
  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  // Render Category Item (horizontal)
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.horizontalCategoryItem}>
      <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
        <Text style={styles.categoryEmoji}>{item.icon}</Text>
      </View>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.horizontalCategoryName}>{item.name}</Text>
        <Text style={styles.horizontalCategoryCount}>{item.productCount} Products</Text>
      </View>
    </TouchableOpacity>
  );

  // Render Popular Brand Item (horizontal)
  const renderBrandItem = ({ item }) => (
    <TouchableOpacity style={styles.horizontalBrandItem}>
      <View style={[styles.brandLogo, { backgroundColor: item.color }]}>
        <Text style={styles.brandLogoText}>{item.logo}</Text>
      </View>
      <View style={styles.brandTextContainer}>
        <Text style={styles.horizontalBrandName}>{item.name}</Text>
        <Text style={styles.horizontalBrandCount}>{item.productCount} Products</Text>
      </View>
    </TouchableOpacity>
  );

  // Updated handlers to use Cart Context
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleIncrement = (productId) => {
    incrementItem(productId);
  };

  const handleDecrement = (productId) => {
    decrementItem(productId);
  };

  const handleRemove = (productId) => {
    removeItem(productId);
  };

  // Render counter button based on quantity
  const renderCounterButton = (product, isGrid = true) => {
    const quantity = getItemQuantity(product.id);
    const buttonStyle = isGrid ? styles.addButtonGrid : styles.addButtonList;

    if (quantity === 0) {
      return (
        <TouchableOpacity 
          style={buttonStyle}
          onPress={() => handleAddToCart(product)}
        >
          <PlusIcon />
        </TouchableOpacity>
      );
    } else if (quantity === 1) {
      return (
        <View style={[styles.quantityContainer, isGrid ? styles.quantityContainerGrid : styles.quantityContainerList]}>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleRemove(product.id)}
          >
            <Icon name="trash-outline" size={12} color="#666" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity 
            style={styles.incrementButton}
            onPress={() => handleIncrement(product.id)}
          >
            <Icon name="add" size={12} color="#fff" />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={[styles.quantityContainer, isGrid ? styles.quantityContainerGrid : styles.quantityContainerList]}>
          <TouchableOpacity 
            style={styles.decrementButton}
            onPress={() => handleDecrement(product.id)}
          >
            <Icon name="remove" size={12} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity 
            style={styles.incrementButton}
            onPress={() => handleIncrement(product.id)}
          >
            <Icon name="add" size={12} color="#fff" />
          </TouchableOpacity>
        </View>
      );
    }
  };

  // Grid view item
  const renderGridItem = ({ item }) => (
    <View style={styles.productCard}>
      {/* Offer Banner */}
      <View style={styles.offerBanner}>
        <Text style={styles.offerText}>Offer Ends in {item.offerEnds}</Text>
      </View>

      {/* Product Image */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
      >
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </TouchableOpacity>

      {/* Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <View style={styles.regionBadge}>
            <Text style={styles.regionText}>{item.region}</Text>
          </View>
        </View>
        <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>Was: {item.originalPrice}</Text>
          <View style={styles.currentPriceRow}>
            <Text style={styles.nowText}>Now: </Text>
            <Text style={styles.currentPrice}>{item.currentPrice}</Text>
          </View>
        </View>

        {/* Add/Counter Button (Grid) */}
        {renderCounterButton(item, true)}
      </View>
    </View>
  );

  // List view item
  const renderListItem = ({ item }) => (
    <View style={styles.listCard}>
      {/* Offer Banner */}
      <View style={styles.offerBannerList}>
        <Text style={styles.offerText}>Offer Ends in {item.offerEnds}</Text>
      </View>

      {/* Product Image */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
      >
        <Image source={item.image} style={styles.listImage} resizeMode="contain" />
      </TouchableOpacity>

      {/* Details */}
      <View style={styles.listInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <View style={styles.regionBadge}>
            <Text style={styles.regionText}>{item.region}</Text>
          </View>
        </View>
        <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>Was: {item.originalPrice}</Text>
          <View style={styles.currentPriceRow}>
            <Text style={styles.nowText}>Now: </Text>
            <Text style={styles.currentPrice}>{item.currentPrice}</Text>
          </View>
        </View>
      </View>

      {/* Add/Counter Button (List) */}
      {renderCounterButton(item, false)}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Filter + Toggle Row */}
      <View style={styles.viewToggleRow}>
        <TouchableOpacity
          style={[styles.viewButton, styles.filterButton]}
          onPress={handleFilterToggle}
        >
          {showFilter ? (
            <>
              <Text style={styles.closeIcon}>✕</Text>
              <Text style={styles.filterText}>Close</Text>
            </>
          ) : (
            <>
              <FilterLogo />
              <Text style={styles.filterText}>Filter</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={styles.toggleGroup}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('list')}
          >
            <RowLogo width={22} height={22} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('grid')}
          >
            <RectLogo width={17} height={17} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Content - shows horizontally when filter is active */}
      {showFilter && (
        <View style={styles.filterContent}>
          {/* Product Categories Section */}
          <View style={styles.filterSection}>
            <View style={styles.filterSectionHeader}>
              <Text style={styles.filterSectionTitle}>Product Categories</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <Text style={styles.viewAllText}>View All →</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              contentContainerStyle={styles.horizontalListContainer}
            />
          </View>

          {/* Popular Brands Section */}
          <View style={styles.filterSection}>
            <View style={styles.filterSectionHeader}>
              <Text style={styles.filterSectionTitle}>Popular Brands</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Brands')}>
                <Text style={styles.viewAllText}>View All →</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={brands}
              renderItem={renderBrandItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              contentContainerStyle={styles.horizontalListContainer}
            />
          </View>
        </View>
      )}

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={viewMode === 'grid' ? renderGridItem : renderListItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={
          viewMode === 'grid' ? { justifyContent: 'space-between' } : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 8, paddingBottom: 100 },

  // Header row
  viewToggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: -5,
    backgroundColor: '#f5f5f5',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 3,
    borderRadius: 8,
    marginLeft: 8,
  },
  filterButton: {
    marginLeft: 12,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    height: 24,
    width: 70,
  },
  filterText: {
    marginLeft: 6,
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  closeIcon: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginRight: 6,
  },
  toggleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },

  // Filter Content Styles
  filterContent: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  viewAllText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },

  // Horizontal List Styles
  horizontalListContainer: {
    paddingHorizontal: 5,
  },

  // Horizontal Category Item
  horizontalCategoryItem: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 6,
    width: 175,
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoryEmoji: {
    fontSize: 18,
  },
  categoryTextContainer: {
    flex: 1,
  },
  horizontalCategoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  horizontalCategoryCount: {
    fontSize: 10,
    color: '#666',
  },

  // Horizontal Brand Item
  horizontalBrandItem: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 6,
    width: 175,
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  brandLogoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  brandTextContainer: {
    flex: 1,
  },
  horizontalBrandName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  horizontalBrandCount: {
    fontSize: 10,
    color: '#666',
  },

  // Grid card
  productCard: {
    width: (width - 24) / 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'relative',
  },
  offerBanner: {
    position: 'absolute',
    top: 3,
    right: 2,
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
    zIndex: 1,
  },
  offerBannerList: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#FF2E09',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
    zIndex: 1,
  },
  offerText: { color: '#fff', fontSize: 10, fontWeight: '500' },
  imageContainer: {
    height: 140,
    width: 164,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  productImage: { marginTop: 15, width: 180, height: 200 },
  productDetails: { padding: 12 },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 6,
  },
  categoryContainer: { flexDirection: 'row', marginBottom: 3 },
  categoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 4,
    borderWidth: 1,
  },
  categoryText: { fontSize: 10, color: 'black' },
  regionBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    borderWidth: 1,
  },
  regionText: { fontSize: 10, color: 'black' },
  packSize: { fontSize: 12, color: 'black', marginBottom: 8 },
  priceContainer: { marginBottom: -3 },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  currentPriceRow: { flexDirection: 'row', alignItems: 'center' },
  nowText: { fontSize: 14, color: '#333' },
  currentPrice: { fontSize: 18, fontWeight: 'bold', color: 'black' },

  // Add buttons
  addButtonGrid: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 32,
    height: 32,
    backgroundColor: '#A7C257',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonList: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 32,
    height: 32,
    backgroundColor: '#A7C257',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Counter styles
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  quantityContainerGrid: {
    position: 'absolute',
    right: 6,
    bottom: 6,
  },
  quantityContainerList: {
    position: 'absolute',
    right: 6,
    bottom: 6,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 6,
    minWidth: 15,
    textAlign: 'center',
  },
  incrementButton: {
    backgroundColor: '#A7C257',
    width: 20,
    height: 20,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementButton: {
    backgroundColor: '#A7C257',
    width: 20,
    height: 20,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#D9D9D9',
    width: 20,
    height: 20,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // List view card
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'relative',
  },
  listImage: { width: 80, height: 80, borderRadius: 6, marginRight: 12 },
  listInfo: { flex: 1 },
});

export default Offers;