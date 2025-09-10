import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Orderdetails = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.orderId}>Order ID: #UF1023</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
      </View>

      {/* Order Items */}
      <View style={styles.itemsContainer}>
        {/* Basmati Rice Item */}
        <View style={styles.orderItem}>
          <View style={styles.itemImageContainer}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/50x60/FFA500/FFFFFF?text=Rice' }} 
              style={styles.itemImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Basmati Rice 20kg</Text>
            <Text style={styles.itemQuantity}>Quantity: 2</Text>
          </View>
          <Text style={styles.itemPrice}>£54.00</Text>
        </View>

        {/* Sunflower Oil Item */}
        <View style={styles.orderItem}>
          <View style={styles.itemImageContainer}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/50x60/FFD700/000000?text=Oil' }} 
              style={styles.itemImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Sunflower Oil 5L</Text>
            <Text style={styles.itemQuantity}>Quantity: 1</Text>
          </View>
          <Text style={styles.itemPrice}>£8.99</Text>
        </View>
      </View>

      {/* Total Section */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>£62.99</Text>
      </View>

      {/* Order Info */}
      <View style={styles.orderInfo}>
        <Text style={styles.infoText}>Order Date: 18th August 2025, 2:15 PM</Text>
        <Text style={styles.infoText}>Payment Method: Saved Card (Visa •••• 4567)</Text>
        <Text style={styles.infoText}>Payment Status: Paid</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Invoice</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.orderAgainButton}>
          <Text style={styles.orderAgainButtonText}>Order Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 8,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  itemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemImageContainer: {
    width: 50,
    height: 60,
    marginRight: 12,
    borderRadius: 4,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemDetails: {
    flex: 1,
    paddingRight: 8,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderInfo: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
    lineHeight: 18,
  },
  buttonContainer: {
    gap: 12,
  },
  downloadButton: {
    backgroundColor: '#6B8E23',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  orderAgainButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  orderAgainButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
})

export default Orderdetails