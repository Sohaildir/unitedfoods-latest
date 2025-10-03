


// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const Orderdetails = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
  
//   // Get the order data passed from Recent screen
//   const { orderData } = route.params || {};

//   // Fallback data in case no data is passed
//   const defaultOrderData = {
//     orderNumber: '#UF1023',
//     statusLabel: 'Completed',
//     statusColor: '#648F00',
//     orderItems: [
//       {
//         id: 1,
//         name: 'Basmati Rice 20kg',
//         quantity: 2,
//         price: '£54.00',
//         image: { uri: 'https://via.placeholder.com/50x60/FFA500/FFFFFF?text=Rice' }
//       }
//     ],
//     total: '£54.00',
//     orderDateTime: '18th August 2025, 2:15 PM',
//     paymentMethod: 'Saved Card (Visa •••• 4567)',
//     paymentStatus: 'Paid'
//   };

//   // Use passed data or fallback
//   const order = orderData || defaultOrderData;

//   const handleDownloadInvoice = () => {
//     // Handle invoice download logic here
//     console.log('Downloading invoice for:', order.orderNumber);
//   };

//   const handleOrderAgain = () => {
//     // Handle order again logic here
//     console.log('Ordering again:', order.orderNumber);
//   };

//   const renderOrderItem = (item) => (
//     <View key={item.id} style={styles.orderItem}>
//       <View style={styles.itemImageContainer}>
//         <Image 
//           source={item.image} 
//           style={styles.itemImage}
//           resizeMode="cover"
//         />
//       </View>
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//       </View>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.orderId}>Order ID: {order.orderNumber}</Text>
//         <Text></Text>
//         <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
//           <Text style={styles.statusText}>{order.statusLabel}</Text>
//         </View>
//       </View>

//       {/* Order Items */}
//       <View style={styles.itemsContainer}>
//         {order.orderItems.map(renderOrderItem)}
//       </View>

//       {/* Total Section */}
//       <View style={styles.totalContainer}>
//         <Text style={styles.totalLabel}>Total:</Text>
//         <Text style={styles.totalAmount}>{order.total}</Text>
//       </View>

//       {/* Order Info */}
//       <View style={styles.orderInfo}>
//         <Text style={styles.infoText}>
//           <Text style={styles.labelText}>Order Date: </Text>
//           {order.orderDateTime}
//         </Text>
//         <Text style={styles.infoText}>
//           <Text style={styles.labelText}>Payment Method: </Text>
//           {order.paymentMethod}
//         </Text>
//         <Text style={styles.infoText}>
//           <Text style={styles.labelText}>Payment Status: </Text>
//           {order.paymentStatus}
//         </Text>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.buttonContainer}>
//         {/* Only show Download Invoice button if order is not cancelled */}
//         {order.status !== 'cancelled' && (
//           <TouchableOpacity
//             onPress={handleDownloadInvoice}
//             style={{ borderRadius: 8 }}
//             activeOpacity={0.8}
//           >
//             <LinearGradient
//               colors={['#455625', '#97BC51']}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 0 }}
//               style={styles.downloadButton}
//             >
//               <Text style={styles.downloadButtonText}>Download Invoice</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         )}
        
//         {/* Show different text based on order status */}
//         <TouchableOpacity 
//           style={styles.orderAgainButton}
//           onPress={handleOrderAgain}
//         >
//           <Text style={styles.orderAgainButtonText}>
//             {order.status === 'cancelled' ? 'Order Again' : 'Order Again'}
//           </Text>
//         </TouchableOpacity>

//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingVertical: 8,
//   },
//   orderId: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: 'black',
//   },
//   statusBadge: {
//     paddingHorizontal: 12,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   statusText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   itemsContainer: {
//     marginBottom: 3 ,
//   },
//   orderItem: {
//     backgroundColor: "#FFFFFF",
//     marginBottom: 8,
//     borderRadius: 8,
//     padding: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000',
//     elevation: 2,
//   },
//   itemImageContainer: {
//     width: 50,
//     height: 45,
//     marginRight: 12,
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   itemImage: {
//     width: '100%',
//     height: '100%',
//   },
//   itemDetails: {
//     flex: 1,
//     paddingRight: 8,
//   },
//   itemName: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: 4,
//   },
//   itemQuantity: {
//     fontSize: 12,
//     color: '#666',
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: 'black',
//   },
//   totalContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//   },
//   totalLabel: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'black',
//   },
//   totalAmount: {
//     fontSize: 18,
//     fontWeight: '900',
//     color: 'black',
//   },
//   orderInfo: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginBottom: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   infoText: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 8,
//     lineHeight: 18,
//   },
//   labelText: {
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   buttonContainer: {
//     gap: 10,
  
//   },
//   downloadButton: {
//     paddingVertical: 8,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 1,
//   },
//   downloadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   orderAgainButton: {
//     backgroundColor: '#fff',
//     paddingVertical:8,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#455625',
//   },
//   orderAgainButtonText: {
//     color: '#455625',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   cancelButton: {
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#FF3737',
//   },
// });

// export default Orderdetails;

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  Dimensions 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';

const Orderdetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);
  
  // Get the order data passed from Recent screen
  const { orderData } = route.params || {};

  // Fallback data in case no data is passed
  const defaultOrderData = {
    orderNumber: '#UF1023',
    statusLabel: 'Completed',
    statusColor: '#648F00',
    orderItems: [
      {
        id: 1,
        name: 'Basmati Rice 20kg',
        quantity: 2,
        price: '£54.00',
        image: { uri: 'https://via.placeholder.com/50x60/FFA500/FFFFFF?text=Rice' }
      }
    ],
    total: '£54.00',
    orderDateTime: '18th August 2025, 2:15 PM',
    paymentMethod: 'Saved Card (Visa •••• 4567)',
    paymentStatus: 'Paid'
  };

  // Use passed data or fallback
  const order = orderData || defaultOrderData;

  const handleDownloadInvoice = () => {
    console.log('Downloading invoice for:', order.orderNumber);
  };

  const handleOrderAgain = () => {
    console.log('Ordering again:', order.orderNumber);
  };

  const currentStyles = isTablet ? tabletStyles : styles;

  const renderOrderItem = (item) => (
    <View key={item.id} style={currentStyles.orderItem}>
      <View style={currentStyles.itemImageContainer}>
        <Image 
          source={item.image} 
          style={currentStyles.itemImage}
          resizeMode="cover"
        />
      </View>
      <View style={currentStyles.itemDetails}>
        <Text style={currentStyles.itemName}>{item.name}</Text>
        <Text style={currentStyles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
      <Text style={currentStyles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={currentStyles.container}>
      {/* Header */}
      <View style={currentStyles.header}>
        <Text style={currentStyles.orderId}>Order ID: {order.orderNumber}</Text>
        <Text></Text>
        <View style={[currentStyles.statusBadge, { backgroundColor: order.statusColor }]}>
          <Text style={currentStyles.statusText}>{order.statusLabel}</Text>
        </View>
      </View>

      {/* Order Items */}
      <View style={currentStyles.itemsContainer}>
        {order.orderItems.map(renderOrderItem)}
      </View>

      {/* Total Section */}
      <View style={currentStyles.totalContainer}>
        <Text style={currentStyles.totalLabel}>Total:</Text>
        <Text style={currentStyles.totalAmount}>{order.total}</Text>
      </View>

      {/* Order Info */}
      <View style={currentStyles.orderInfo}>
        <Text style={currentStyles.infoText}>
          <Text style={currentStyles.labelText}>Order Date: </Text>
          {order.orderDateTime}
        </Text>
        <Text style={currentStyles.infoText}>
          <Text style={currentStyles.labelText}>Payment Method: </Text>
          {order.paymentMethod}
        </Text>
        <Text style={currentStyles.infoText}>
          <Text style={currentStyles.labelText}>Payment Status: </Text>
          {order.paymentStatus}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={currentStyles.buttonContainer}>
        {order.status !== 'cancelled' && (
          <TouchableOpacity
            onPress={handleDownloadInvoice}
            style={{ borderRadius: 8 }}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#455625', '#97BC51']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={currentStyles.downloadButton}
            >
              <Text style={currentStyles.downloadButtonText}>Download Invoice</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={currentStyles.orderAgainButton}
          onPress={handleOrderAgain}
        >
          <Text style={currentStyles.orderAgainButtonText}>
            {order.status === 'cancelled' ? 'Order Again' : 'Order Again'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
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
    color: 'black',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  itemsContainer: {
    marginBottom: 3,
  },
  orderItem: {
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 2,
  },
  itemImageContainer: {
    width: 50,
    height: 45,
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
    fontWeight: '700',
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
  orderInfo: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
    lineHeight: 18,
  },
  labelText: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    gap: 10,
  },
  downloadButton: {
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 1,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orderAgainButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#455625',
  },
  orderAgainButtonText: {
    color: '#455625',
    fontSize: 16,
    fontWeight: '500',
  },
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 12,
  },
  orderId: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  statusBadge: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 14,
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  itemsContainer: {
    marginBottom: 20,
  },
  orderItem: {
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImageContainer: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemDetails: {
    flex: 1,
    paddingRight: 12,
  },
  itemName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  itemQuantity: {
    fontSize: 16,
    color: '#666',
  },
  itemPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  totalLabel: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
  },
  totalAmount: {
    fontSize: 28,
    fontWeight: '900',
    color: 'black',
  },
  orderInfo: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  infoText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 12,
    lineHeight: 26,
  },
  labelText: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    gap: 16,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  downloadButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 2,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  orderAgainButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#455625',
  },
  orderAgainButtonText: {
    color: '#455625',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Orderdetails;