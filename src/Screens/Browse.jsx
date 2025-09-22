


import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../Context/CartContext'; // Import the cart hook

import productImage from '../Assets/Images/product.png';
import RowLogo from '../Assets/Images/RowLogo.svg';
import Rowbold from '../Assets/Images/rowbold.svg';
import FilterLogo from '../Assets/Images/FilterLogo.svg';
import RectLogo from '../Assets/Images/RectLogo.svg';
import Bgrid from '../Assets/Images/bgrid.svg';
import DeleteLogo from '../Assets/Images/Delete.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const BrowseScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const itemsPerPage = 20; // Updated to 20 items per page
  const navigation = useNavigation();
  
  // Use Cart Context instead of local state
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();

  // Product Categories Data (more items for horizontal scroll)
  const productCategories = [
    { id: '1', name: 'Appetizers & Sides', productCount: 62, icon: '🍽️' },
    { id: '2', name: 'Beverages', productCount: 62, icon: '🥤' },
    { id: '3', name: 'Spices & Masalas', productCount: 45, icon: '🌶️' },
    { id: '4', name: 'Rice & Grains', productCount: 38, icon: '🍚' },
    { id: '5', name: 'Snacks', productCount: 52, icon: '🍿' },
    { id: '6', name: 'Dairy Products', productCount: 29, icon: '🥛' },
    { id: '7', name: 'Frozen Foods', productCount: 34, icon: '🧊' },
    { id: '8', name: 'Sweets & Desserts', productCount: 41, icon: '🍰' },
  ];

  // Popular Brands Data (more items for horizontal scroll)
  const popularBrands = [
    { id: '1', name: 'Heera', productCount: 62, logo: 'H', color: '#6366F1' },
    { id: '2', name: 'East End', productCount: 38, logo: 'EE', color: '#0EA5E9' },
    { id: '3', name: 'Balah', productCount: 25, logo: 'B', color: '#F59E0B' },
    { id: '4', name: 'Naymat', productCount: 42, logo: 'N', color: '#EF4444' },
    { id: '5', name: 'Shan', productCount: 33, logo: 'S', color: '#10B981' },
    { id: '6', name: 'National', productCount: 41, logo: 'N', color: '#8B5CF6' },
    { id: '7', name: 'United Foods', productCount: 55, logo: 'UF', color: '#F97316' },
    { id: '8', name: 'Laziza', productCount: 28, logo: 'L', color: '#EC4899' },
  ];

  // Extended products array for pagination demo
  const products = [
    {
      id: '1',
      name: 'Sandoori Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '2',
      name: 'Mandoori Masala',
      packSize: '48 x 4.5"',
      description: 'Pure natural honey harvested from organic farms.',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'Pak',
      image: productImage,
    },
    {
      id: '3',
      name: 'Tandoori Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '4',
      name: 'Kandoori Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '5',
      name: 'Garam Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£8.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '6',
      name: 'Biryani Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£7.49',
      brand: 'United Foods',
      origin: 'Pakistan',
      image: productImage,
    },
    {
      id: '7',
      name: 'Chicken Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£10.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '8',
      name: 'Fish Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£11.49',
      brand: 'United Foods',
      origin: 'Bangladesh',
      image: productImage,
    },
    {
      id: '9',
      name: 'Curry Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£6.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '10',
      name: 'Turmeric Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£5.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '11',
      name: 'Coriander Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£4.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '12',
      name: 'Cumin Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£5.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '13',
      name: 'Red Chili Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£7.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '14',
      name: 'Black Pepper',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£12.99',
      brand: 'United Foods',
      origin: 'Kerala',
      image: productImage,
    },
    {
      id: '15',
      name: 'Cardamom Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£15.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '16',
      name: 'Cinnamon Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£8.49',
      brand: 'United Foods',
      origin: 'Sri Lanka',
      image: productImage,
    },
    {
      id: '17',
      name: 'Clove Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.99',
      brand: 'United Foods',
      origin: 'pak',
      image: productImage,
    },
    {
      id: '18',
      name: 'Nutmeg Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£13.99',
      brand: 'United Foods',
      origin: 'pak',
      image: productImage,
    },
    // Added more products to demonstrate 20 items per page
    {
      id: '19',
      name: 'Fennel Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£6.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '20',
      name: 'Fenugreek Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£5.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '21',
      name: 'Star Anise Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£11.99',
      brand: 'United Foods',
      origin: 'China',
      image: productImage,
    },
    {
      id: '22',
      name: 'Bay Leaf Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£7.99',
      brand: 'United Foods',
      origin: 'Turkey',
      image: productImage,
    },
  ];

  // Filter by search
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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

  // Filter handlers
  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  // Generate page numbers to display
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          visiblePages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          visiblePages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          visiblePages.push(i);
        }
      }
    }
    
    return visiblePages;
  };

  // Render Product Category Item (horizontal)
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.horizontalCategoryItem}>
      <View style={styles.categoryIcon}>
        <Text style={styles.categoryEmoji}>{item.icon}</Text>
      </View>
      <View>
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
      <Text style={styles.horizontalBrandName}>{item.name}</Text>
      <Text style={styles.horizontalBrandCount}>{item.productCount} Products</Text>
    </TouchableOpacity>
  );

  // Grid card - Updated to use Cart Context
  const renderGridProduct = ({ item }) => {
    const quantity = getItemQuantity(item.id);
    return (
      <View style={styles.gridCard}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SingleProduct', { product: item })
          }
        >
          <Image source={item.image} style={styles.productImage} />
        </TouchableOpacity>
        <Text style={styles.productName}>{item.name}</Text>

        {/* Attributes row */}
        <View style={styles.attributesRow}>
          <Text style={styles.attributeTag}>{item.brand}</Text>
          <Text style={styles.attributeTag}>{item.origin}</Text>
        </View>

        <Text style={styles.packSize}>
          Pack Size: <Text style={{ fontWeight: 'bold' }}>{item.packSize}</Text>
        </Text>

        {/* Price + Add/Quantity row */}
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{item.price}</Text>
          {quantity === 0 ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              {quantity === 1 ? (
                <TouchableOpacity
                  style={[
                    styles.quantityButton,
                    { backgroundColor: '#D9D9D9' },
                  ]}
                  onPress={() => handleRemove(item.id)}
                >
                  <DeleteLogo width={24} height={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleDecrement(item.id)}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleIncrement(item.id)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  // List card - Updated to use Cart Context
  const renderListProduct = ({ item }) => {
    const quantity = getItemQuantity(item.id);
    return (
      <View style={styles.listCard}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SingleProduct', { product: item })
          }
        >
          <Image source={item.image} style={styles.listImage} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.productName}>{item.name}</Text>

          {/* Attributes row */}
          <View style={styles.attributesRow}>
            <Text style={styles.attributeTag}>{item.brand}</Text>
            <Text style={styles.attributeTag}>{item.origin}</Text>
          </View>

          <Text style={styles.packSize}>
            Pack Size: <Text style={{ fontWeight: 600 }}>{item.packSize}</Text>
          </Text>

          {/* Price + Add/Quantity row */}
          <View style={styles.priceRow}>
            <Text style={styles.productPrice}>{item.price}</Text>
            {quantity === 0 ? (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddToCart(item)}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.quantityContainer}>
                {quantity === 1 ? (
                  <TouchableOpacity
                    style={[
                      styles.quantityButton,
                      { backgroundColor: '#D9D9D9' },
                    ]}
                    onPress={() => handleRemove(item.id)}
                  >
                    <DeleteLogo width={24} height={24} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleDecrement(item.id)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleIncrement(item.id)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  // Pagination Component
  const PaginationComponent = () => {
    if (totalPages <= 1) return null;

    const visiblePages = getVisiblePages();

    return (
      <View style={styles.paginationContainer}>
        {/* Previous button */}
        <TouchableOpacity
          style={[styles.paginationButton, currentPage === 1 && styles.disabledButton]}
          onPress={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <Text style={[styles.paginationText, currentPage === 1 && styles.disabledText]}>
            ‹
          </Text>
        </TouchableOpacity>

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <TouchableOpacity
            key={page}
            style={[
              styles.paginationButton,
              currentPage === page && styles.activePage
            ]}
            onPress={() => goToPage(page)}
          >
            <Text
              style={[
                styles.paginationText,
                currentPage === page && styles.activePageText
              ]}
            >
              {page}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Next button */}
        <TouchableOpacity
          style={[styles.paginationButton, currentPage === totalPages && styles.disabledButton]}
          onPress={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <Text style={[styles.paginationText, currentPage === totalPages && styles.disabledText]}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Last page button */}
        <TouchableOpacity
          style={[styles.paginationButton, currentPage === totalPages && styles.disabledButton]}
          onPress={goToLastPage}
          disabled={currentPage === totalPages}
        >
          <Text style={[styles.paginationText, currentPage === totalPages && styles.disabledText]}>
            ››
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header with Search */}
      <LinearGradient
        colors={['#455625', '#97BC51']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header1}
      >
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              setCurrentPage(1); // Reset to first page when searching
            }}
            placeholderTextColor="#999"
          />
          <Ionicons name="search-outline" size={20} color="#666" />
        </View>
      </LinearGradient>

      {/* View toggle row */}
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

        {/* Right: List & Grid Icons */}
        <View style={styles.toggleGroup}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('list')}
          >
            <RowLogo />
            
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('grid')}
          >
            {/* <RectLogo /> */}
            <Bgrid/>

           
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
              data={productCategories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              contentContainerStyle={styles.horizontalListContainer}
            />
          </View>

          <View style={styles.filterSection}>
            <View style={styles.filterSectionHeader}>
              <Text style={styles.filterSectionTitle}>Popular Brand</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Brands')}>
                <Text style={styles.viewAllText}>View All →</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={productCategories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              contentContainerStyle={styles.horizontalListContainer}
            />
          </View>
        </View>
      )}

      {/* Products with Pagination at Bottom */}
      <ScrollView 
        style={styles.mainScrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollContent}
      >
        <View style={styles.contentContainer}>
          {currentProducts.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No products found</Text>
            </View>
          ) : (
            <FlatList
              data={currentProducts}
              renderItem={
                viewMode === 'grid' ? renderGridProduct : renderListProduct
              }
              keyExtractor={item => item.id}
              numColumns={viewMode === 'grid' ? 2 : 1}
              key={viewMode}
              contentContainerStyle={styles.productsContainer}
              columnWrapperStyle={viewMode === 'grid' ? styles.rowWrap : null}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            />
          )}
        </View>

        {/* Pagination at the bottom */}
        <PaginationComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

// Updated styles with pagination at bottom
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },

  header1: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333' },

  viewToggleRow: {
    marginTop: -4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  closeIcon: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginRight: 6,
  },

  toggleGroup: { flexDirection: 'row', alignItems: 'center' },

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
    flexDirection:"row",
    height:"auto",
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  categoryEmoji: {
    fontSize: 18,
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
    flexDirection:"row",
    height:"auto",
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandLogoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  horizontalBrandName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    paddingTop:12,
    paddingLeft:10,
    marginBottom: 2,
  },
  horizontalBrandCount: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    paddingTop:30,
  },

  // Main scroll view for pagination at bottom
  mainScrollView: {
    flex: 1,
  },
  mainScrollContent: {
    flexGrow: 1,
  },

  contentContainer: { flex: 1 },
  productsContainer: { padding: 10, paddingBottom: 20 },

  // Grid styles
  gridCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    margin: 6,
    borderWidth: 0.2,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    minWidth: (width - 40) / 2,
  },
  productImage: {
    width: '80%',
    height: 170,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },

  // List styles
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    elevation: 2,
  },
  listImage: { width: 123, height: 120, borderRadius: 8, marginRight: 12 },

  productName: { fontSize: 16, fontWeight: '600', color: '#222' },

  attributesRow: { flexDirection: 'row', marginTop: 4, marginBottom: 4 },
  attributeTag: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 6,
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },

  packSize: { fontSize: 13, color: 'black', marginBottom: 4, fontWeight: '400' },
  productPrice: { fontSize: 20, fontWeight: '600', color: '#000' },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },

  addButton: {
    backgroundColor: '#A7C257',
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -7,
  },
  addButtonText: { color: '#455625', fontWeight: '300', fontSize: 20 },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 2,
    borderRadius: 8,
    marginRight: -10,
  },
  quantityButton: {
    backgroundColor: '#A7C257',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  quantityButtonText: { color: '#455625', fontSize: 20, fontWeight: '300' },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '400',
    color: '#918888ff',
  },

  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#777', fontSize: 14 },

  // Pagination styles - positioned at bottom
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    marginBottom: 35,
    marginTop: 10,
  },
  paginationButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  activePage: {
    backgroundColor: '#A7C257',
  },
  disabledButton: {
    backgroundColor: '#f0f0f0',
  },
  paginationText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  activePageText: {
    color: '#fff',
    fontWeight: '600',
  },
  disabledText: {
    color: '#ccc',
  },
});

export default BrowseScreen;