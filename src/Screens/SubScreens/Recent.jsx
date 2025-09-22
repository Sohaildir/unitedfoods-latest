
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// const Recent = () => {
//   const navigation = useNavigation();

//   const recentOrders = [
//     {
//       id: 1,
//       orderNumber: '#UF1023',
//       productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
//       price: '£64.99',
//       date: '18 Aug 2025',
//       status: 'pending',
//       statusLabel: 'Pending',
//       statusColor: '#0285FF',
//       image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' },
//       showQuantity: true,
//       quantity: '+1',
//       actionText: 'Cancel Order',
//     },
//     {
//       id: 2,
//       orderNumber: '#UF1022',
//       productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
//       price: '£27.50',
//       date: '16 Aug 2025',
//       status: 'completed',
//       statusLabel: 'Completed',
//       statusColor: '#648F00',
//       image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' },
//       showQuantity: true,
//       quantity: '+4',
//       actionText: 'View Order Details',
//     },
//     {
//       id: 3,
//       orderNumber: '#UF1021',
//       productName: 'Pepsi Case (24) x1, Chicken Breast 5kg x1',
//       price: '£42.00',
//       date: '14 Aug 2025',
//       status: 'cancelled',
//       statusLabel: 'Cancelled',
//       statusColor: '#FF3737',
//       image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' },
//       showQuantity: true,
//       quantity: '+2',
//       actionText: 'View Order Details',
//     },
//   ];

//   const renderOrderItem = (order) => (
//     <View key={order.id} style={styles.orderCard}>
//       {/* Product Row */}
//       <View style={styles.productRow}>
//         <View style={styles.imageContainer}>
//           <Image 
//             source={order.image} 
//             style={styles.productImage}
//             resizeMode="cover"
//           />
//           {order.showQuantity && (
//             <View style={styles.centerQuantity}>
//               <Text style={styles.quantityText}>{order.quantity}</Text>
//             </View>
//           )}
//         </View>

//         <View style={styles.productInfo}>
//           {/* Order number + status */}
//           <View style={styles.orderHeaderRow}>
//             <Text style={styles.orderNumber}>{order.orderNumber}</Text>
//             <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
//               <Text style={styles.statusText}>{order.statusLabel}</Text>
//             </View>
//           </View>

//           <Text style={styles.productName}>{order.productName}</Text>

//           {/* Price and Date in one row */}
//           <View style={styles.priceDateRow}>
//             <Text style={styles.price}>{order.price}</Text>
//             <Text style={styles.date}>{order.date}</Text>
//           </View>
//         </View>
//       </View>

//       {/* Buttons */}
//       {order.status !== 'cancelled' && (
//         <TouchableOpacity 
//           onPress={() => navigation.navigate('Orderdetails')}
//           style={{ borderRadius: 8 }}
//           activeOpacity={0.8}
//         >
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.downloadButton}
//           >
//             <Text style={styles.downloadButtonText}>Download Invoice</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       )}

//       <TouchableOpacity style={styles.secondaryButton}>
//         <Text style={styles.secondaryButtonText}>{order.actionText}</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
//       <ScrollView 
//         style={styles.scrollView}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {recentOrders.map(renderOrderItem)}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//   },
//   orderCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginBottom: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   productRow: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   imageContainer: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     marginRight: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   productImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 6,
//   },
//   centerQuantity: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)', // optional overlay
//     borderRadius: 8,
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   productInfo: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   orderHeaderRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   orderNumber: {
//     fontSize: 12,
//     fontWeight: '400',
//     fontFamily: 'General Sans',
//     color: '#333333',
//     marginRight: 8,
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 8,
//     height: 17,
//   },
//   statusText: {
//     fontSize: 9,
//     fontWeight: '500',
//     color: '#FFFFFF',
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333333',
//     lineHeight: 18,
//     marginBottom: 8,
//   },
//   priceDateRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   date: {
//     fontSize: 12,
//     fontWeight: '400',
//     color: '#616161',
//   },
//   downloadButton: {
//     paddingVertical: 10,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   downloadButtonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     paddingVertical: 8,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#455625',
//   },
//   secondaryButtonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#666666',
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
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Recent = () => {
  const navigation = useNavigation();

  const recentOrders = [
    {
      id: 1,
      orderNumber: '#UF1023',
      productName: '20kg Basmati Rice x2, Sunflower Oil 10L x1',
      price: '£64.99',
      date: '18 Aug 2025',
      status: 'pending',
      statusLabel: 'Pending',
      statusColor: '#0285FF',
      image: { uri: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800' },
      showQuantity: true,
      quantity: '+1',
      actionText: 'Cancel Order',
    },
    {
      id: 2,
      orderNumber: '#UF1022',
      productName: 'Tandoori Masala 1kg x3, Frozen Paratha x2',
      price: '£27.50',
      date: '16 Aug 2025',
      status: 'completed',
      statusLabel: 'Completed',
      statusColor: '#648F00',
      image: { uri: 'https://images.unsplash.com/photo-1621619857142-0d1d86f1d9a2?w=800' },
      showQuantity: true,
      quantity: '+4',
      actionText: 'View Order Details',
    },
    {
      id: 3,
      orderNumber: '#UF1021',
      productName: 'Pepsi Case (24) x1, Chicken Breast 5kg x1',
      price: '£42.00',
      date: '14 Aug 2025',
      status: 'cancelled',
      statusLabel: 'Cancelled',
      statusColor: '#FF3737',
      image: { uri: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800' },
      showQuantity: true,
      quantity: '+2',
      actionText: 'View Order Details',
    },
  ];

  // Handler for navigating to order details
  const navigateToOrderDetails = () => {
    navigation.navigate('Orderdetails');
  };

  const renderOrderItem = (order) => (
    <View key={order.id} style={styles.orderCard}>
      {/* Product Row */}
      <View style={styles.productRow}>
        <View style={styles.imageContainer}>
          <Image 
            source={order.image} 
            style={styles.productImage}
            resizeMode="cover"
          />
          {order.showQuantity && (
            <View style={styles.centerQuantity}>
              <Text style={styles.quantityText}>{order.quantity}</Text>
            </View>
          )}
        </View>

        <View style={styles.productInfo}>
          {/* Order number + status */}
          <View style={styles.orderHeaderRow}>
            <Text style={styles.orderNumber}>{order.orderNumber}</Text>
            <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
              <Text style={styles.statusText}>{order.statusLabel}</Text>
            </View>
          </View>

          <Text style={styles.productName}>{order.productName}</Text>

          {/* Price and Date in one row */}
          <View style={styles.priceDateRow}>
            <Text style={styles.price}>{order.price}</Text>
            <Text style={styles.date}>{order.date}</Text>
          </View>
        </View>
      </View>

      {/* Buttons - Both navigate to order details */}
      {order.status !== 'cancelled' && (
        <TouchableOpacity 
          onPress={navigateToOrderDetails}
          style={{ borderRadius: 8 }}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.downloadButton}
          >
            <Text style={styles.downloadButtonText}>Download Invoice</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={navigateToOrderDetails}
        activeOpacity={0.8}
      >
        <Text style={styles.secondaryButtonText}>{order.actionText}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {recentOrders.map(renderOrderItem)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  centerQuantity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // optional overlay
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  orderNumber: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'General Sans',
    color: '#333333',
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    height: 17,
  },
  statusText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    lineHeight: 18,
    marginBottom: 8,
  },
  priceDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#616161',
  },
  downloadButton: {
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#455625',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
});

export default Recent;
