import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StockCheckList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState(new Set());

  const products = [
    {
      id: '1',
      name: 'Willow Butter Case',
      tags: ['Spice Bazaar', 'East End'],
      price: '£9.49',
    },
    {
      id: '2',
      name: 'Cheese 70 30 Majestic Single',
      tags: ['Spice Bazaar', 'East End'],
      price: '£9.49',
    },
    {
      id: '3',
      name: 'Custard Kerrymaid',
      tags: ['Spice Bazaar', 'East End'],
      price: '£9.49',
    },
    {
      id: '4',
      name: 'Ice Cream Angelito Case',
      tags: ['Spice Bazaar', 'East End'],
      price: '£9.49',
    },
    {
      id: '5',
      name: 'Milk',
      tags: ['Frozen Foods', 'Ecofraat'],
      price: '£9.49',
    },
    {
      id: '6',
      name: 'Burger Majestic Black Case',
      tags: ['Frozen Foods', 'Ecofraat'],
      price: '£9.49',
    },
    {
      id: '7',
      name: 'Cheese Cheddar',
      tags: ['Category', 'Brand'],
      price: '£9.49',
    },
    {
      id: '8',
      name: 'Sticks Cheese Mozzarella LW',
      tags: ['Category', 'Brand'],
      price: '£9.49',
    },
    {
      id: '9',
      name: 'Donner Turka Sliced',
      tags: ['Category', 'Brand'],
      price: '£9.49',
    },
    {
      id: '10',
      name: 'MVF Fillet Battered Chicken',
      tags: ['Category', 'Brand'],
      price: '£9.49',
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const toggleSelection = itemId => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(itemId)) {
      newSelection.delete(itemId);
    } else {
      newSelection.add(itemId);
    }
    setSelectedItems(newSelection);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => toggleSelection(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.productLeft}>
        <View style={styles.checkbox}>
          {selectedItems.has(item.id) ? (
            <View style={styles.checkboxSelected}>
              <Ionicons name="checkmark" size={12} color="#fff" />
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
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

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
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* View Cart Button */}
      <View style={styles.cartButtonContainer}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 0,
  },
  productList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  productLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    marginRight: 14,
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#d0d0d0',
    borderWidth: 2,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#d0d0d0',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tagText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '400',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 16,
  },
  cartButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  cartButton: {
    backgroundColor: '#6B8E23',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default StockCheckList;
