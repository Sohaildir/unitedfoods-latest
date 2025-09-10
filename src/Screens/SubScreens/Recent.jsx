// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';

// const { width } = Dimensions.get('window');

// const Recent = () => {
//   // Sample orders data - replace with your actual data
//   const recentOrders = [
//     {
//       id: 1,
//       orderNumber: '#UF1023',
//       productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
//       price: '£64.99',
//       date: '10 Aug 2025',
//       status: 'delivered',
//       statusLabel: 'Delivered',
//       statusColor: '#2196F3',
//       image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' }, // Basmati rice
//       showQuantity: false,
//     },
//     {
//       id: 2,
//       orderNumber: '#UF1022',
//       productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
//       price: '£27.50',
//       date: '16 Aug 2025',
//       status: 'complete',
//       statusLabel: 'Complete',
//       statusColor: '#4CAF50',
//       image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' }, // Tandoori masala
//       showQuantity: true,
//       quantity: '+4',
//     },
//     {
//       id: 3,
//       orderNumber: '#UF1021',
//       productName: 'Pepsi Case (24) x1, Chicken Breast 5kg x1',
//       price: '£42.00',
//       date: '14 Aug 2025',
//       status: 'complete',
//       statusLabel: 'Complete',
//       statusColor: '#4CAF50',
//       image: { uri: 'https://images.unsplash.com/photo-1617196034735-53e5f35ac29c?w=800' }, // Pepsi case
//       showQuantity: false,
//     },
//     {
//       id: 4,
//       orderNumber: '#UF1022',
//       productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
//       price: '£27.50',
//       date: '16 Aug 2025',
//       status: 'delivered',
//       statusLabel: 'Delivered',
//       statusColor: '#FF5722',
//       image: { uri: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800' }, // Another masala
//       showQuantity: false,
//     },
//   ];
  

//   const renderOrderItem = (order) => (
//     <View key={order.id} style={styles.orderCard}>
//       {/* Order Header */}
//       <View style={styles.orderHeader}>
//         <Text style={styles.orderNumber}>{order.orderNumber}</Text>
//         <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
//           <Text style={styles.statusText}>{order.statusLabel}</Text>
//         </View>
//       </View>

//       {/* Order Content */}
//       <View style={styles.orderContent}>
//         {/* Product Image */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={order.image} 
//             style={styles.productImage}
//             resizeMode="contain"
//           />
//           {order.showQuantity && (
//             <View style={styles.quantityBadge}>
//               <Text style={styles.quantityText}>{order.quantity}</Text>
//             </View>
//           )}
//         </View>

//         {/* Product Details */}
//         <View style={styles.productDetails}>
//           <Text style={styles.productName}>{order.productName}</Text>
//           <Text style={styles.orderPrice}>{order.price}</Text>
//           <Text style={styles.orderDate}>{order.date}</Text>
//         </View>
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actionButtons}>
//         <TouchableOpacity style={styles.downloadButton}>
//           <Text style={styles.downloadButtonText}>Download Invoice</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.secondaryButton}>
//           <Text style={styles.secondaryButtonText}>
//             {order.status === 'delivered' ? 'Cancel Order' : 'View Order Details'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {recentOrders.map(renderOrderItem)}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     padding: 16,
//   },
//   orderCard: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginBottom: 16,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   orderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 8,
//   },
//   orderNumber: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   statusText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   orderContent: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//   },
//   imageContainer: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 12,
//     position: 'relative',
//   },
//   productImage: {
//     width: 60,
//     height: 60,
//   },
//   quantityBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5722',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   quantityText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   productDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 14,
//     color: '#333',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   orderPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   orderDate: {
//     fontSize: 12,
//     color: '#666',
//   },
//   actionButtons: {
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//     gap: 8,
//   },
//   downloadButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   downloadButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   secondaryButtonText: {
//     color: '#666',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// export default Recent;



import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ✅ Import navigation hook

const { width } = Dimensions.get('window');

const Recent = () => {
  const navigation = useNavigation(); // ✅ Access navigation

  const recentOrders = [
    {
      id: 1,
      orderNumber: '#UF1023',
      productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
      price: '£64.99',
      date: '10 Aug 2025',
      status: 'delivered',
      statusLabel: 'Delivered',
      statusColor: '#2196F3',
      image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' },
      showQuantity: false,
    },
    {
      id: 2,
      orderNumber: '#UF1022',
      productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
      price: '£27.50',
      date: '16 Aug 2025',
      status: 'complete',
      statusLabel: 'Complete',
      statusColor: '#4CAF50',
      image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' },
      showQuantity: true,
      quantity: '+4',
    },
  ];

  const handleDownload = (order) => {
    // ✅ Navigate to Invoice screen & pass order details
    navigation.navigate('InvoiceScreen', { order });
  };

  const renderOrderItem = (order) => (
    <View key={order.id} style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderNumber}>{order.orderNumber}</Text>
        <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
          <Text style={styles.statusText}>{order.statusLabel}</Text>
        </View>
      </View>

      <View style={styles.orderContent}>
        <View style={styles.imageContainer}>
          <Image 
            source={order.image} 
            style={styles.productImage}
            resizeMode="contain"
          />
          {order.showQuantity && (
            <View style={styles.quantityBadge}>
              <Text style={styles.quantityText}>{order.quantity}</Text>
            </View>
          )}
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.productName}>{order.productName}</Text>
          <Text style={styles.orderPrice}>{order.price}</Text>
          <Text style={styles.orderDate}>{order.date}</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => navigation.navigate('Orderdetails')}>
          <Text style={styles.downloadButtonText}>Download Invoice</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>
            {order.status === 'delivered' ? 'Cancel Order' : 'View Order Details'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {recentOrders.map(renderOrderItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollView: { flex: 1 },
  scrollContent: { padding: 16 },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  orderNumber: { fontSize: 14, fontWeight: '600', color: '#333' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  statusText: { color: '#fff', fontSize: 12, fontWeight: '500' },
  orderContent: { flexDirection: 'row', paddingHorizontal: 16, paddingBottom: 16 },
  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
  },
  productImage: { width: 60, height: 60 },
  quantityBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF5722',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  productDetails: { flex: 1, justifyContent: 'space-between' },
  productName: { fontSize: 14, color: '#333', lineHeight: 20, marginBottom: 4 },
  orderPrice: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  orderDate: { fontSize: 12, color: '#666' },
  actionButtons: { paddingHorizontal: 16, paddingBottom: 16, gap: 8 },
  downloadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  downloadButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  secondaryButtonText: { color: '#666', fontSize: 14, fontWeight: '500' },
});

export default Recent;
