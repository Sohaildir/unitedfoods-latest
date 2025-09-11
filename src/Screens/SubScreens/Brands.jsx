// src/components/subcomponents/Categories.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Brandarrow from '../../Assets/Images/Brandarrow.png';

const Brands = () => {
  const brandsData = [
    {
      id: 1,
      name: 'Naymat',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Heera',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'East End',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'Balah',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Pasco',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=100&h=100&fit=crop',
    },
    {
      id: 6,
      name: 'Majestic',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop',
    },
    {
      id: 7,
      name: 'Zafco',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100&h=100&fit=crop',
    },
    {
      id: 8,
      name: 'Satco',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1544736150-6e4c999de2a5?w=100&h=100&fit=crop',
    },
    {
      id: 9,
      name: 'Heinz',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=100&h=100&fit=crop',
    },
    {
      id: 10,
      name: 'KTC',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100&h=100&fit=crop',
    },
    {
      id: 11,
      name: 'Sanders',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop',
    },
    {
      id: 12,
      name: 'Banana Leaf',
      products: 62,
      logo: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&h=100&fit=crop',
    },
  ];

  const renderBrandItem = ({ item }) => (
    <TouchableOpacity style={styles.brandItem}>
      <View style={styles.brandContent}>
        <Image source={{ uri: item.logo }} style={styles.brandLogo} />
        <View style={styles.brandInfo}>
          <Text style={styles.brandName}>{item.name}</Text>
          <Text style={styles.productCount}>{item.products} Products</Text>
        </View>
      </View>
      <Text style={styles.arrow}>
        <Image source={Brandarrow} style={{ width:7,height:13}}/>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Brand"
          placeholderTextColor="#999"
        />
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
      </View>

      {/* Brands List */}
      <FlatList
        data={brandsData}
        renderItem={renderBrandItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 4,
  },
  backArrow: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 6,
    marginVertical: 12,
    elevation: 2,
    
    marginHorizontal:30,
    height: 30,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    paddingVertical: 0,
    textAlignVertical: 'center',
  },

  searchIcon: { fontSize: 16,
     marginLeft: 10 },
  listContainer: {
    paddingHorizontal: 16,
  },
  brandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  brandContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
  },
  brandInfo: {
    flex: 1,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
   
  },
  productCount: {
    fontSize: 12,
    color: '#666',
  
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
  },
});

export default Brands;
