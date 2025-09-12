// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const Favorite = () => {
//   const navigation = useNavigation();

//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1505253213348-cd54c92b37be?w=200&h=200&fit=crop',
//       quantity: 2,
//     },
//     {
//       id: 3,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
//       quantity: 1,
//     },
//     {
//       id: 4,
//       name: 'Tandoori Masala',
//       brand: 'Spice Bazaar',
//       category: 'East End',
//       packSize: '48 x 4.5"',
//       price: 9.49,
//       image:
//         'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop',
//       quantity: 0,
//     },
//   ]);

//   const handleIncrease = itemId => {
//     setCartItems(
//       cartItems.map(item =>
//         item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
//       ),
//     );
//   };

//   const handleDecrease = itemId => {
//     setCartItems(
//       cartItems.map(item =>
//         item.id === itemId && item.quantity > 0
//           ? { ...item, quantity: item.quantity - 1 }
//           : item,
//       ),
//     );
//   };

//   const handleDelete = itemId => {
//     setCartItems(
//       cartItems.map(item =>
//         item.id === itemId ? { ...item, quantity: 0 } : item,
//       ),
//     );
//   };

//   const handleGoBack = () => {
//     if (navigation.canGoBack()) {
//       navigation.navigate('Menu');
//     }
//   };

//   const renderCartItem = ({ item }) => (
//     <View style={styles.itemCard}>
//       <Image source={{ uri: item.image }} style={styles.productImage} />

//       <View style={styles.productInfo}>
//         <Text style={styles.productName}>{item.name}</Text>

//         <View style={styles.tagsContainer}>
//           <View style={styles.tag}>
//             <Text style={styles.tagText}>{item.brand}</Text>
//           </View>
//           <View style={styles.tag}>
//             <Text style={styles.tagText}>{item.category}</Text>
//           </View>
//         </View>

//         <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//         <Text style={styles.price}>£{item.price.toFixed(2)}</Text>
//       </View>

//       {item.quantity === 0 ? (
//         <TouchableOpacity
//           style={styles.singleAddButton}
//           onPress={() => handleIncrease(item.id)}
//         >
//           <Text style={styles.addButtonText}>+</Text>
//         </TouchableOpacity>
//       ) : (
//         <View style={styles.counterContainer}>
//           {item.quantity === 1 ? (
//             <TouchableOpacity onPress={() => handleDelete(item.id)}>
//               <Icon name="trash-outline" size={24} color="#FF3B30" />
//             </TouchableOpacity>
//           ) : (
//             <TouchableOpacity onPress={() => handleDecrease(item.id)}>
//               <Icon name="remove-circle-outline" size={28} color="#333" />
//             </TouchableOpacity>
//           )}
//           <Text style={styles.counterText}>{item.quantity}</Text>
//           <TouchableOpacity onPress={() => handleIncrease(item.id)}>
//             <Icon name="add-circle-outline" size={28} color="#4CAF50" />
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );

//   const EmptyCart = () => (
//     <View style={styles.emptyContainer}>
//       <Text style={styles.emptyIcon}>🛒</Text>
//       <Text style={styles.emptyTitle}>Your Cart is Empty</Text>
//       <Text style={styles.emptyMessage}>
//         Add some delicious items to your cart to get started!
//       </Text>
//     </View>
//   );

//   const displayItems = cartItems.filter(item => item.quantity > 0 || true);

//   return (
//     <View style={styles.container}>
//       {/* 🔙 Go Back Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Favourites</Text>
//       </View>

//       {displayItems.length === 0 ? (
//         <EmptyCart />
//       ) : (
//         <FlatList
//           data={displayItems}
//           renderItem={renderCartItem}
//           keyExtractor={item => item.id.toString()}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 3,
//   },
//   backButton: {
//     marginRight: 12,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//   },
//   listContainer: {
//     paddingVertical: 16,
//   },
//   itemCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     marginBottom: 10,
//     borderRadius: 12,
//     marginTop: 10,
    
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   productInfo: {
//     flex: 1,
//     marginLeft: 16,
//     marginRight: 12,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   tag: {
//     backgroundColor: '#e8f4e8',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//     marginRight: 8,
//   },
//   tagText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   packSize: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//   },
//   singleAddButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 8,
//     backgroundColor: '#8BC34A',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   counterText: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginHorizontal: 10,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   emptyIcon: {
//     fontSize: 64,
//     marginBottom: 16,
//   },
//   emptyTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   emptyMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
// });

// export default Favorite;
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Favorite = () => {
  const navigation = useNavigation();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tandoori Masala',
      brand: 'Spice Bazaar',
      category: 'East End',
      packSize: '48 x 4.5"',
      price: 9.49,
      image:
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Tandoori Masala',
      brand: 'Spice Bazaar',
      category: 'East End',
      packSize: '48 x 4.5"',
      price: 9.49,
      image:
        'https://images.unsplash.com/photo-1505253213348-cd54c92b37be?w=200&h=200&fit=crop',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Tandoori Masala',
      brand: 'Spice Bazaar',
      category: 'East End',
      packSize: '48 x 4.5"',
      price: 9.49,
      image:
        'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Tandoori Masala',
      brand: 'Spice Bazaar',
      category: 'East End',
      packSize: '48 x 4.5"',
      price: 9.49,
      image:
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop',
      quantity: 0,
    },
  ]);

  const handleIncrease = itemId => {
    setCartItems(
      cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = itemId => {
    setCartItems(
      cartItems.map(item =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleDelete = itemId => {
    setCartItems(
      cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: 0 } : item,
      ),
    );
  };

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.navigate('Menu');
    }
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>

        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.brand}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.category}</Text>
          </View>
        </View>

        <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
        <Text style={styles.price}>£{item.price.toFixed(2)}</Text>
      </View>

      {item.quantity === 0 ? (
        <TouchableOpacity
          style={styles.singleAddButton}
          onPress={() => handleIncrease(item.id)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterContainer}>
          {item.quantity === 1 ? (
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
              <Icon name="trash-outline" size={18} color="#666" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleDecrease(item.id)} style={styles.decreaseButton}>
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.counterText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncrease(item.id)} style={styles.singleAddButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  const EmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>Your Favourites is Empty</Text>
      <Text style={styles.emptyMessage}>
        Add some delicious items to your favourites to get started!
      </Text>
    </View>
  );

  const displayItems = cartItems.filter(item => item.quantity > 0 || true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favourites</Text>
        <View style={styles.headerRight} />
      </View>

      {displayItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <FlatList
          data={displayItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  headerRight: {
    width: 32,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  itemCard: {
    width: 366,
    height: 114,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
  productImage: {
    width: 98,
    height: 98,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    paddingRight: 8,
    justifyContent: 'space-between',
    height: 98,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    lineHeight: Math.round(16 * 1.1),
    marginBottom: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#E8F4E8',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    marginRight: 6,
  },
  tagText: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '500',
  },
  packSize: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '400',
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    lineHeight: Math.round(20 * 1.1),
  },
  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: 8,
    height: 98,
  },
  singleAddButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#A7C257',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
  },
  addButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  decreaseButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  counterButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    minWidth: 20,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Favorite;
