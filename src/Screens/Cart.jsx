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
import LinearGradient from 'react-native-linear-gradient';

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tandoori Masala',
      packSize: '48 x 4.5"',
      price: 9.49,
      quantity: 1,
      image: require('../Assets/Images/product.png'),
    },
    {
      id: 2,
      name: 'Tandoori Masala',
      packSize: '48 x 4.5"',
      price: 9.49,
      quantity: 3,
      image: require('../Assets/Images/product.png'),
    },
    {
      id: 3,
      name: 'Tandoori Masala',
      packSize: '48 x 4.5"',
      price: 9.49,
      quantity: 2,
      image: require('../Assets/Images/product.png'),
    },
    {
      id: 4,
      name: 'Tandoori Masala',
      packSize: '48 x 4.5"',
      price: 9.49,
      quantity: 1,
      image: require('../Assets/Images/product.png'),
    },
    {
      id: 5,
      name: 'Tandoori Masala',
      packSize: '48 x 4.5"',
      price: 9.49,
      quantity: 0,
      image: require('../Assets/Images/product.png'),
    },
  ]);

  const [orderNotes, setOrderNotes] = useState('');

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item,
      ),
    );
  };

  const removeItem = id => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: 0 } : item)),
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const renderCartItem = item => (
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
              <Icon name="trash-outline" size={14} color="#666" />
            </TouchableOpacity>
          ) : null}

          {/* Quantity Display */}
          {item.quantity > 0 && (
            <View style={styles.quantityDisplay}>
              <Text style={styles.quantityText}>{item.quantity}</Text>
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

      {/* Page Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      {/* Collection Slot */}
      <View style={styles.collectionSlot}>
        {/* <Text style={styles.collectionLabel}>Collection Slot</Text> */}
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeSlotText}>
            {' '}
            Collection Slot <Text style={{backgroundColor:"#D2D2D2", borderRadius:20}}>11:00AM - 12:00PM</Text>
          </Text>
          <Icon name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Cart Items */}
        <View style={styles.cartItemsContainer}>
          {cartItems
            .filter(item => item.quantity > 0) // Only show items with quantity > 0
            .map(item => renderCartItem(item))}
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
          <Text style={styles.grandTotalAmount}>
            £{calculateTotal().toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
  onPress={() => navigation.navigate('Checkout')}
  activeOpacity={0.8}
  style={{ borderRadius: 12 }}
>
  <LinearGradient
    colors={['#455625', '#97BC51']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.checkoutButton}
  >
    <Text style={styles.checkoutButtonText}>Checkout</Text>
    <Icon name="chevron-forward" size={20} color="#FFFFFF" />
  </LinearGradient>
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
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  titleContainer: {
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
    width: 300,
    height: 23,
    opacity: 1,
    padding: 4,

    paddingleft: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  cartItemsContainer: {
    gap: 12,
  },
  cartItem: {
    width: 366,
    height: 89,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  productImage: {
    width: 45,
    height: 55,
    resizeMode: 'contain',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    paddingRight: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  packSize: {
    fontSize: 11,
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
    backgroundColor:"#D9D9D9"
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#A7C257',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityDisplay: {
    minWidth: 30,
    height: 20,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  orderNotesContainer: {
    backgroundColor: '#FFFFFF',
    margin: 7,
    marginTop: 20,
    borderRadius: 8,
    padding: 12,
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
    minHeight: 60,
    padding: 0,
  },
  bottomSection: {
    // backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    marginBottom:50,
    paddingTop: 16,
    paddingBottom: 40,
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
    borderRadius: 12,
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
