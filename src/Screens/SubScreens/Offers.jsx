import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';

const { width } = Dimensions.get('window');

const Offers = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [timeLeft, setTimeLeft] = useState('12h');

  const products = [
    {
      id: 1,
      name: 'Tandoori Masala',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '48 x 4.5"',
      originalPrice: '£10.99',
      currentPrice: '£9.49',
      image: { uri: 'https://images.unsplash.com/photo-1601050690591-23b3d1d5e962?w=800' },
      offerEnds: '12h',
    },
    {
      id: 2,
      name: 'Garam Masala',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '24 x 4.5"',
      originalPrice: '£11.49',
      currentPrice: '£9.99',
      image: { uri: 'https://images.unsplash.com/photo-1617196034735-53e5f35ac29c?w=800' },
      offerEnds: '10h',
    },
    {
      id: 3,
      name: 'Curry Powder',
      category: 'Spice Bazaar',
      region: 'North Mills',
      packSize: '36 x 3.5"',
      originalPrice: '£12.99',
      currentPrice: '£10.99',
      image: { uri: 'https://images.unsplash.com/photo-1617196034705-95e5e4c3c1a2?w=800' },
      offerEnds: '8h',
    },
    {
      id: 4,
      name: 'Turmeric Powder',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '48 x 4.5"',
      originalPrice: '£9.99',
      currentPrice: '£8.49',
      image: { uri: 'https://images.unsplash.com/photo-1617196034663-2f47c54cb0b7?w=800' },
      offerEnds: '14h',
    },
    {
      id: 5,
      name: 'Chili Powder',
      category: 'Spice Bazaar',
      region: 'South Valley',
      packSize: '40 x 5"',
      originalPrice: '£13.49',
      currentPrice: '£11.99',
      image: { uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800' },
      offerEnds: '6h',
    },
    {
      id: 6,
      name: 'Cumin Seeds',
      category: 'Spice Bazaar',
      region: 'North Mills',
      packSize: '50 x 5"',
      originalPrice: '£8.99',
      currentPrice: '£7.49',
      image: { uri: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800' },
      offerEnds: '9h',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Future countdown logic
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderGridItem = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.offerBanner}>
        <Text style={styles.offerText}>Offer Ends in {item.offerEnds}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </View>
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
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderListItem = ({ item }) => (
    <View style={styles.listCard}>
      <Image source={item.image} style={styles.listImage} resizeMode="contain" />
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
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>☰</Text>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <View style={styles.viewOptions}>
          <TouchableOpacity
            style={[styles.listViewButton, viewMode === 'list' && styles.activeView]}
            onPress={() => setViewMode('list')}
          >
            <Text style={styles.viewIcon}>☰</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.gridViewButton, viewMode === 'grid' && styles.activeView]}
            onPress={() => setViewMode('grid')}
          >
            <Text style={styles.viewIcon}>⊞</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Products */}
      <FlatList
        data={products}
        renderItem={viewMode === 'grid' ? renderGridItem : renderListItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={viewMode === 'grid' ? { justifyContent: 'space-between' } : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  filterIcon: {
    fontSize: 14,
    marginRight: 6,
    color: '#666',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  viewOptions: {
    flexDirection: 'row',
  },
  listViewButton: {
    padding: 8,
    marginRight: 4,
  },
  gridViewButton: {
    padding: 8,
  },
  activeView: {
    backgroundColor: '#e3f2fd',
    borderRadius: 4,
  },
  viewIcon: {
    fontSize: 16,
    color: '#666',
  },
  scrollContent: {
    padding: 8,
  },
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
    top: 8,
    left: 8,
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  offerText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  productImage: {
    width: 80,
    height: 100,
  },
  productDetails: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  categoryBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
  },
  categoryText: {
    fontSize: 10,
    color: '#2e7d2e',
  },
  regionBadge: {
    backgroundColor: '#fff3e0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  regionText: {
    fontSize: 10,
    color: '#f57c00',
  },
  packSize: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 12,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  currentPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nowText: {
    fontSize: 14,
    color: '#333',
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d2e',
  },
  addButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 32,
    height: 32,
    backgroundColor: '#8bc34a',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // List View Styles
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
  },
  listImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 12,
  },
  listInfo: {
    flex: 1,
  },
});

export default Offers;
