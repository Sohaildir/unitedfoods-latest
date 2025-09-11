import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Tandoori Masala', 
      packSize: '48 x 4.5"', 
      price: 9.49, 
      quantity: 1,
      image: require('../Assets/Images/product.png')
    },
    { 
      id: 2, 
      name: 'Tandoori Masala', 
      packSize: '48 x 4.5"', 
      price: 9.49, 
      quantity: 3,
      image: require('../Assets/Images/product.png')
    },
    { 
      id: 3, 
      name: 'Tandoori Masala', 
      packSize: '48 x 4.5"', 
      price: 9.49, 
      quantity: 2,
      image: require('../Assets/Images/product.png')
    },
    { 
      id: 4, 
      name: 'Tandoori Masala', 
      packSize: '48 x 4.5"', 
      price: 9.49, 
      quantity: 1,
      image: require('../Assets/Images/product.png')
    },
    { 
      id: 5, 
      name: 'Tandoori Masala', 
      packSize: '48 x 4.5"', 
      price: 9.49, 
      quantity: 0,
      image: require('../Assets/Images/product.png')
    },
  ]);

  const [orderNotes, setOrderNotes] = useState('');

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: 0 } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderCartItem = (item) => (
    <View key={item.id} style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
        <Text style={styles.itemPrice}>£{item.price.toFixed(2)}</Text>
      </View>

      <View style={styles.quantitySection}>
        <View style={styles.quantityControls}>
          {/* Left Button Logic */}
          {item.quantity > 1 ? (
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
          ) : item.quantity === 1 ? (
            <TouchableOpacity 
              style={[styles.quantityButton, styles.deleteButton]}
              onPress={() => removeItem(item.id)}
            >
              <Icon name="trash-outline" size={18} color="#fff" />
            </TouchableOpacity>
          ) : null}

          {/* Quantity Display */}
          {item.quantity > 0 && (
            <View style={[
              styles.quantityDisplay, 
              item.quantity > 0 ? styles.quantityActive : styles.quantityInactive
            ]}>
              <Text style={[
                styles.quantityText,
                item.quantity > 0 ? styles.quantityTextActive : styles.quantityTextInactive
              ]}>
                {item.quantity}
              </Text>
            </View>
          )}

          {/* Plus Button */}
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      {/* Collection Slot */}
      <View style={styles.collectionSlot}>
        <Text style={styles.collectionLabel}>Collection Slot</Text>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeSlotText}>11:00AM - 12:00PM</Text>
          <Icon name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Cart Items */}
        <View style={styles.cartItemsContainer}>
          {cartItems.map(item => renderCartItem(item))}
        </View>

        {/* Order Notes */}
        <View style={styles.orderNotesContainer}>
          <TextInput
            style={styles.orderNotesInput}
            placeholder="Order Notes..."
            placeholderTextColor="#999"
            value={orderNotes}
            onChangeText={setOrderNotes}
            multiline
            numberOfLines={3}
          />
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.totalSection}>
          <Text style={styles.grandTotalLabel}>Grand Total</Text>
          <Text style={styles.grandTotalAmount}>£{calculateTotal().toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate("Checkout")}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <Icon name="chevron-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  collectionSlot: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  collectionLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  timeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  cartItemsContainer: {
    backgroundColor: '#FFFFFF',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 60,
    resizeMode: 'contain',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    paddingRight: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  packSize: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  quantitySection: {
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8BC34A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF4444',
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityDisplay: {
    minWidth: 40,
    height: 24,
    marginHorizontal: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityActive: {
    backgroundColor: '#8BC34A',
  },
  quantityInactive: {
    backgroundColor: '#E0E0E0',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '500',
  },
  quantityTextActive: {
    color: '#FFFFFF',
  },
  quantityTextInactive: {
    color: '#666',
  },
  orderNotesContainer: {
    backgroundColor: '#FFFFFF',
    margin: 7,
    borderRadius: 8,
    padding: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  orderNotesInput: {
    fontSize: 14,
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 40,
    padding: 0,
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  grandTotalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#8BC34A',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Cart;
