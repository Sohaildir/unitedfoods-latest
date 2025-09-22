


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'; // Add this import
import { useCart } from '../../Context/CartContext';

const StockCheckList = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState(new Set());
  
  // Use Cart Context instead of local state for quantities
  const { addToCart, incrementItem, decrementItem, removeItem, getItemQuantity } = useCart();

  const products = [
    {
      id: '1',
      name: 'Willow Butter Case',
      tags: ['Spice Bazaar', 'East End'],
      price: '£9.49',
      packSize: '48 x 4.5"',
      image: 'https://images.unsplash.com/photo-1589985269047-0dbf5a7da5d2?w=100&h=100&fit=crop',
    },
    {
      id: '2',
      name: 'Cheese 70 30 Majestic Single',
      tags: ['Spice Bazaar', 'East End'],
      price: '£9.49',
      packSize: '48 x 4.5"',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop',
    },
    {
      id: '3',
      name: 'Premium Organic Honey',
      tags: ['Natural Foods', 'Organic'],
      price: '£12.99',
      packSize: '24 x 8oz',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=100&h=100&fit=crop',
    },
    {
      id: '4',
      name: 'Artisan Sourdough Bread',
      tags: ['Bakery', 'Fresh'],
      price: '£4.99',
      packSize: '12 loaves',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop',
    },
    {
      id: '5',
      name: 'Sea Salt Crackers',
      tags: ['Snacks', 'Premium'],
      price: '£3.49',
      packSize: '36 x 150g',
      image: 'https://images.unsplash.com/photo-1595475038665-8a6d7efea2cd?w=100&h=100&fit=crop',
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase()),
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

  const toggleSelection = itemId => {
    const newSelection = new Set(selectedItems);
    const currentQuantity = getItemQuantity(itemId);
    
    if (newSelection.has(itemId)) {
      newSelection.delete(itemId);
      // Remove from cart if it was selected
      if (currentQuantity > 0) {
        handleRemove(itemId);
      }
    } else {
      newSelection.add(itemId);
      // Add to cart if not already there
      if (currentQuantity === 0) {
        const product = products.find(p => p.id === itemId);
        handleAddToCart(product);
      }
    }
    setSelectedItems(newSelection);
  };

  const updateQuantity = (itemId, change) => {
    const currentQuantity = getItemQuantity(itemId);
    const newQuantity = currentQuantity + change;
    
    if (newQuantity <= 0) {
      // Remove from selection and cart
      const newSelection = new Set(selectedItems);
      newSelection.delete(itemId);
      setSelectedItems(newSelection);
      handleRemove(itemId);
    } else if (change > 0) {
      handleIncrement(itemId);
    } else {
      handleDecrement(itemId);
    }
  };

  const renderProductItem = ({ item }) => {
    const isSelected = selectedItems.has(item.id);
    const quantity = getItemQuantity(item.id);

    return (
      <View style={styles.productItem}>
        {/* Main Product Row */}
        <TouchableOpacity
          style={styles.mainRow}
          onPress={() => toggleSelection(item.id)}
          activeOpacity={0.7}
        >
          <View style={styles.productLeft}>
            <View style={styles.checkbox}>
              {isSelected ? (
                <View style={styles.checkboxSelected}>
                  <Ionicons name="checkmark" size={15} color="#fff" />
                </View>
              ) : (
                <View style={styles.checkboxUnselected} />
              )}
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.tagsContainer}>
                {item.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Expanded Section */}
        {isSelected && (
          <View style={styles.expandedSection}>
            <View style={styles.expandedContent}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SingleProduct', { product: item })}
              >
                <Image source={{ uri: item.image }} style={styles.productImage} />
              </TouchableOpacity>
              <View style={styles.expandedInfo}>
                <Text style={styles.packSizeText}>Pack Size: {item.packSize}</Text>
                <Text style={styles.expandedPrice}>{item.price}</Text>
              </View>
              <View style={styles.counterContainer}>
                {quantity === 1 ? (
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Ionicons name="trash-outline" size={16} color="#666" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.counterText}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.counterButtonAdd}
                  onPress={() => updateQuantity(item.id, 1)}
                >
                  <Text style={styles.counterButtonTextAdd}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Brand"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
          <Ionicons name="search-outline" size={20} color="#999" />
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        style={styles.productList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 12 }}
      />

      {/* View Cart Button with LinearGradient */}
      <View style={styles.cartButtonContainer}>
        <TouchableOpacity 
          onPress={() => {
            console.log('Navigating to Cart...');
            navigation.navigate('BottomTabs', { screen: 'Cart' });
          }}
          activeOpacity={0.8}
          style={{ borderRadius: 8 }}
        >
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.cartButton}
          >
            <Text style={styles.cartButtonText}>View Cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchContainer: {
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333', paddingVertical: 0 },
  productList: { flex: 1, backgroundColor: '#fff' },
  productItem: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  productLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  checkbox: { marginRight: 14 },
  checkboxSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#A7C257',
    borderWidth: 2,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxUnselected: {
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#C3C3C3',
    borderWidth: 2,
    borderColor: '#d0d0d0',
  },
  productInfo: { flex: 1 },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
    lineHeight: 20,
  },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  tagText: { fontSize: 10, color: 'black', fontWeight: '500' },
  expandedSection: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 12,
  },
  expandedContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  expandedInfo: { flex: 1, marginHorizontal: 12 },
  packSizeText: { fontSize: 12, color: '#666', fontWeight: '400', marginBottom: 2 },
  expandedPrice: { fontSize: 18, fontWeight: '600', color: '#000' },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  counterButton: {
    backgroundColor: '#fff',
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  deleteButton: {
    backgroundColor: '#fff',
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  counterButtonText: { fontSize: 16, fontWeight: '600', color: '#333' },
  counterButtonAdd: {
    backgroundColor: '#A7C257',
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonTextAdd: { fontSize: 16, fontWeight: '600', color: '#fff' },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },
  cartButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 22,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  cartButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartButtonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});

export default StockCheckList;