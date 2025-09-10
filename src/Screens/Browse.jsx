import React, { useState } from 'react';
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
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import productImage from '../Assets/Images/product.png';
import RowLogo from '../Assets/Images/RowLogo.svg';
import FilterLogo from '../Assets/Images/FilterLogo.svg';
import RectLogo from '../Assets/Images/RectLogo.svg';
import DeleteLogo from '../Assets/Images/Delete.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const ProductListingScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [quantities, setQuantities] = useState({});
  const navigation = useNavigation();

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
      name: 'Sandoori Masala',
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
  ];

  // Filter by search
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Quantity handlers
  const increaseQuantity = id => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQuantity = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  // Grid card
  const renderGridProduct = ({ item }) => {
    const quantity = quantities[item.id] || 0;
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
              onPress={() => increaseQuantity(item.id)}
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
                  onPress={() =>
                    setQuantities(prev => ({ ...prev, [item.id]: 0 }))
                  }
                >
                  <DeleteLogo width={24} height={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  // List card
  const renderListProduct = ({ item }) => {
    const quantity = quantities[item.id] || 0;
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
                onPress={() => increaseQuantity(item.id)}
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
                    onPress={() =>
                      setQuantities(prev => ({ ...prev, [item.id]: 0 }))
                    }
                  >
                    <DeleteLogo width={24} height={24} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => decreaseQuantity(item.id)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => increaseQuantity(item.id)}
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
            onPress={() => navigation.navigate('Search')}
            placeholder="Search"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
          <Ionicons name="search-outline" size={20} color="#666" />
        </View>
      </LinearGradient>

      {/* View toggle row */}
      <View style={styles.viewToggleRow}>
        {/* Left: Filter Icon + Text */}
        <TouchableOpacity
          style={[styles.viewButton, styles.filterButton]}
          onPress={() => console.log('Filter pressed')}
        >
          <FilterLogo />
          <Text style={styles.filterText}>Filter</Text>
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
            <RectLogo />
          </TouchableOpacity>
        </View>
      </View>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={
            viewMode === 'grid' ? renderGridProduct : renderListProduct
          }
          keyExtractor={item => item.id}
          numColumns={viewMode === 'grid' ? 2 : 1}
          key={viewMode}
          contentContainerStyle={styles.productsContainer}
          columnWrapperStyle={viewMode === 'grid' ? styles.rowWrap : null}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

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
    backgroundColor: '#fff',
    marginLeft: 8,
  },

  filterButton: { marginLeft: 0 },
  filterText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  toggleGroup: { flexDirection: 'row', alignItems: 'center' },

  productsContainer: { padding: 10 },

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
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 6,
    fontSize: 12,
    color: '#455625',
    fontWeight: '500',
  },

  packSize: { fontSize: 14, color: '#666', marginBottom: 4, fontWeight: '400' },
  productPrice: { fontSize: 20, fontWeight: '700', color: '#000' },

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
    marginRight: -10,
  },
  addButtonText: { color: '#fff', fontWeight: '300', fontSize: 20 },

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
  quantityButtonText: { color: '#fff', fontSize: 20, fontWeight: '300' },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '400',
    color: '#918888ff',
  },

  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#777', fontSize: 14 },
});

export default ProductListingScreen;
