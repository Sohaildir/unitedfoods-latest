// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   Image,
//   FlatList,
//   Dimensions,
//   Platform,
// } from 'react-native';

// import { SafeAreaView } from 'react-native-safe-area-context';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// import productImage from '../Assets/Images/product.png';
// import RowLogo from '../Assets/Images/RowLogo.svg';
// import FilterLogo from '../Assets/Images/FilterLogo.svg';
// import RectLogo from '../Assets/Images/RectLogo.svg';
// import DeleteLogo from '../Assets/Images/Delete.svg';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const { width } = Dimensions.get('window');

// const ProductListingScreen = () => {
//   const [searchText, setSearchText] = useState('');
//   const [viewMode, setViewMode] = useState('grid');
//   const [quantities, setQuantities] = useState({});
//   const navigation = useNavigation();

//   const products = [
//     {
//       id: '1',
//       name: 'Sandoori Masala',
//       description: 'Pure natural honey harvested from organic farms.',
//       packSize: '48 x 4.5"',
//       price: '£9.49',
//       brand: 'United Foods',
//       origin: 'India',
//       image: productImage,
//     },
//     {
//       id: '2',
//       name: 'Mandoori Masala',
//       packSize: '48 x 4.5"',
//       description: 'Pure natural honey harvested from organic farms.',
//       price: '£9.49',
//       brand: 'United Foods',
//       origin: 'Pak',
//       image: productImage,
//     },
//     {
//       id: '3',
//       name: 'Sandoori Masala',
//       description: 'Pure natural honey harvested from organic farms.',

//       packSize: '48 x 4.5"',
//       price: '£9.49',
//       brand: 'United Foods',
//       origin: 'India',
//       image: productImage,
//     },
//     {
//       id: '4',
//       name: 'Kandoori Masala',
//       description: 'Pure natural honey harvested from organic farms.',

//       packSize: '48 x 4.5"',
//       price: '£9.49',
//       brand: 'United Foods',
//       origin: 'India',
//       image: productImage,
//     },
//   ];

//   // Filter by search
//   const filteredProducts = products.filter(p =>
//     p.name.toLowerCase().includes(searchText.toLowerCase()),
//   );

//   // Quantity handlers
//   const increaseQuantity = id => {
//     setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
//   };

//   const decreaseQuantity = id => {
//     setQuantities(prev => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 0) - 1, 0),
//     }));
//   };

//   // Grid card
//   const renderGridProduct = ({ item }) => {
//     const quantity = quantities[item.id] || 0;
//     return (
//       <View style={styles.gridCard}>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('SingleProduct', { product: item })
//           }
//         >
//           <Image source={item.image} style={styles.productImage} />
//         </TouchableOpacity>
//         <Text style={styles.productName}>{item.name}</Text>

//         {/* Attributes row */}
//         <View style={styles.attributesRow}>
//           <Text style={styles.attributeTag}>{item.brand}</Text>
//           <Text style={styles.attributeTag}>{item.origin}</Text>
//         </View>

//         <Text style={styles.packSize}>
//           Pack Size: <Text style={{ fontWeight: 'bold' }}>{item.packSize}</Text>
//         </Text>

//         {/* Price + Add/Quantity row */}
//         <View style={styles.priceRow}>
//           <Text style={styles.productPrice}>{item.price}</Text>
//           {quantity === 0 ? (
//             <TouchableOpacity
//               style={styles.addButton}
//               onPress={() => increaseQuantity(item.id)}
//             >
//               <Text style={styles.addButtonText}>+</Text>
//             </TouchableOpacity>
//           ) : (
//             <View style={styles.quantityContainer}>
//               {quantity === 1 ? (
//                 <TouchableOpacity
//                   style={[
//                     styles.quantityButton,
//                     { backgroundColor: '#D9D9D9' },
//                   ]}
//                   onPress={() =>
//                     setQuantities(prev => ({ ...prev, [item.id]: 0 }))
//                   }
//                 >
//                   <DeleteLogo width={24} height={24} />
//                 </TouchableOpacity>
//               ) : (
//                 <TouchableOpacity
//                   style={styles.quantityButton}
//                   onPress={() => decreaseQuantity(item.id)}
//                 >
//                   <Text style={styles.quantityButtonText}>-</Text>
//                 </TouchableOpacity>
//               )}
//               <Text style={styles.quantityText}>{quantity}</Text>
//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={() => increaseQuantity(item.id)}
//               >
//                 <Text style={styles.quantityButtonText}>+</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//     );
//   };

//   // List card
//   const renderListProduct = ({ item }) => {
//     const quantity = quantities[item.id] || 0;
//     return (
//       <View style={styles.listCard}>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate('SingleProduct', { product: item })
//           }
//         >
//           <Image source={item.image} style={styles.listImage} />
//         </TouchableOpacity>
//         <View style={{ flex: 1 }}>
//           <Text style={styles.productName}>{item.name}</Text>

//           {/* Attributes row */}
//           <View style={styles.attributesRow}>
//             <Text style={styles.attributeTag}>{item.brand}</Text>
//             <Text style={styles.attributeTag}>{item.origin}</Text>
//           </View>

//           <Text style={styles.packSize}>
//             Pack Size: <Text style={{ fontWeight: 600 }}>{item.packSize}</Text>
//           </Text>

//           {/* Price + Add/Quantity row */}
//           <View style={styles.priceRow}>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             {quantity === 0 ? (
//               <TouchableOpacity
//                 style={styles.addButton}
//                 onPress={() => increaseQuantity(item.id)}
//               >
//                 <Text style={styles.addButtonText}>+</Text>
//               </TouchableOpacity>
//             ) : (
//               <View style={styles.quantityContainer}>
//                 {quantity === 1 ? (
//                   <TouchableOpacity
//                     style={[
//                       styles.quantityButton,
//                       { backgroundColor: '#D9D9D9' },
//                     ]}
//                     onPress={() =>
//                       setQuantities(prev => ({ ...prev, [item.id]: 0 }))
//                     }
//                   >
//                     <DeleteLogo width={24} height={24} />
//                   </TouchableOpacity>
//                 ) : (
//                   <TouchableOpacity
//                     style={styles.quantityButton}
//                     onPress={() => decreaseQuantity(item.id)}
//                   >
//                     <Text style={styles.quantityButtonText}>-</Text>
//                   </TouchableOpacity>
//                 )}
//                 <Text style={styles.quantityText}>{quantity}</Text>
//                 <TouchableOpacity
//                   style={styles.quantityButton}
//                   onPress={() => increaseQuantity(item.id)}
//                 >
//                   <Text style={styles.quantityButtonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />

//       {/* Header with Search */}
//       <LinearGradient
//         colors={['#455625', '#97BC51']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         style={styles.header1}
//       >
//         <View style={styles.searchBar}>
//           <TextInput
//             onPress={() => navigation.navigate('Search')}
//             placeholder="Search"
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={setSearchText}
//             placeholderTextColor="#999"
//           />
//           <Ionicons name="search-outline" size={20} color="#666" />
//         </View>
//       </LinearGradient>

//       {/* View toggle row */}
//       <View style={styles.viewToggleRow}>
//         <TouchableOpacity
//           style={[styles.viewButton, styles.filterButton]}
//           onPress={() => console.log('Filter pressed')}
//         >
//           <FilterLogo />
//           <Text style={styles.filterText}>Filter</Text>
//         </TouchableOpacity>

//         {/* Right: List & Grid Icons */}
//         <View style={styles.toggleGroup}>
//           <TouchableOpacity
//             style={styles.viewButton}
//             onPress={() => setViewMode('list')}
//           >
//             <RowLogo />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.viewButton}
//             onPress={() => setViewMode('grid')}
//           >
//             <RectLogo />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Products */}
//       {filteredProducts.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Text style={styles.emptyText}>No products found</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={filteredProducts}
//           renderItem={
//             viewMode === 'grid' ? renderGridProduct : renderListProduct
//           }
//           keyExtractor={item => item.id}
//           numColumns={viewMode === 'grid' ? 2 : 1}
//           key={viewMode}
//           contentContainerStyle={styles.productsContainer}
//           columnWrapperStyle={viewMode === 'grid' ? styles.rowWrap : null}
//           showsVerticalScrollIndicator={false}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5F5F5' },

//   header1: {
//     paddingHorizontal: 16,
//     paddingBottom: 20,
//     paddingTop: 10,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//   },

//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     height: 40,
//   },
//   searchInput: { flex: 1, fontSize: 14, color: '#333' },

//   viewToggleRow: {
//     marginTop:-5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },

//   viewButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 40,
//     paddingHorizontal: 3,
//     borderRadius: 8,
//     marginLeft: 8,
//   },

//   filterButton: {  marginLeft: 12,
//     borderRadius: 5,
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 24,
//     width: 70,

//    },
//   filterText: {
//     marginLeft: 6,
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },

//   toggleGroup: { flexDirection: 'row', alignItems: 'center' },

//   productsContainer: { padding: 10 },

//   // Grid styles
//   gridCard: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     margin: 6,
//     borderWidth: 0.2,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//     minWidth: (width - 40) / 2,
//   },
//   productImage: {
//     width: '80%',
//     height: 170,
//     borderRadius: 8,
//     marginBottom: 8,
//     alignSelf: 'center',
//   },

//   // List styles
//   listCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     marginVertical: 6,
//     elevation: 2,
//   },
//   listImage: { width: 123, height: 120, borderRadius: 8, marginRight: 12 },

//   productName: { fontSize: 16, fontWeight: '600', color: '#222' },

//   attributesRow: { flexDirection: 'row', marginTop: 4, marginBottom: 4 },
//   attributeTag: {
//     backgroundColor: 'white',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 6,
//     borderWidth: 1,
//     marginRight: 6,
//     fontSize: 12,
//     color: '#455625',
//     fontWeight: '500',
//   },

//   packSize: { fontSize: 14, color: '#666', marginBottom: 4, fontWeight: '400' },
//   productPrice: { fontSize: 20, fontWeight: '700', color: '#000' },

//   priceRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 6,
//   },

//   addButton: {
//     backgroundColor: '#A7C257',
//     borderRadius: 8,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: -10,
//   },
//   addButtonText: { color: '#fff', fontWeight: '300', fontSize: 20 },

//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//     paddingHorizontal: 2,
//     borderRadius: 8,
//     marginRight: -10,
//   },
//   quantityButton: {
//     backgroundColor: '#A7C257',
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   quantityButtonText: { color: '#fff', fontSize: 20, fontWeight: '300' },
//   quantityText: {
//     marginHorizontal: 12,
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#918888ff',
//   },

//   emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   emptyText: { color: '#777', fontSize: 14 },
// });

// export default ProductListingScreen;
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import productImage from '../Assets/Images/product.png';
import RowLogo from '../Assets/Images/RowLogo.svg';
import FilterLogo from '../Assets/Images/FilterLogo.svg';
import RectLogo from '../Assets/Images/RectLogo.svg';
import DeleteLogo from '../Assets/Images/Delete.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const BrowseScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page
  const navigation = useNavigation();

  // Extended products array for pagination demo
  const products = [
    {
      id: '1',
      name: 'Sandoori Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '2',
      name: 'Mandoori Masala',
      packSize: '48 x 4.5"',
      description: 'Pure natural honey harvested from organic farms.',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'Pak',
      image: productImage,
    },
    {
      id: '3',
      name: 'Tandoori Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '4',
      name: 'Kandoori Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '5',
      name: 'Garam Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£8.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '6',
      name: 'Biryani Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£7.49',
      brand: 'United Foods',
      origin: 'Pakistan',
      image: productImage,
    },
    {
      id: '7',
      name: 'Chicken Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£10.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '8',
      name: 'Fish Masala',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£11.49',
      brand: 'United Foods',
      origin: 'Bangladesh',
      image: productImage,
    },
    {
      id: '9',
      name: 'Curry Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£6.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '10',
      name: 'Turmeric Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£5.49',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '11',
      name: 'Coriander Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£4.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '12',
      name: 'Cumin Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£5.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '13',
      name: 'Red Chili Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£7.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '14',
      name: 'Black Pepper',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£12.99',
      brand: 'United Foods',
      origin: 'Kerala',
      image: productImage,
    },
    {
      id: '15',
      name: 'Cardamom Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£15.99',
      brand: 'United Foods',
      origin: 'India',
      image: productImage,
    },
    {
      id: '16',
      name: 'Cinnamon Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£8.49',
      brand: 'United Foods',
      origin: 'Sri Lanka',
      image: productImage,
    },
    {
      id: '17',
      name: 'Clove Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£9.99',
      brand: 'United Foods',
      origin: 'Madagascar',
      image: productImage,
    },
    {
      id: '18',
      name: 'Nutmeg Powder',
      description: 'Pure natural honey harvested from organic farms.',
      packSize: '48 x 4.5"',
      price: '£13.99',
      brand: 'United Foods',
      origin: 'Indonesia',
      image: productImage,
    }
  ];

  // Filter by search
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Quantity handlers
  const increaseQuantity = id => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQuantity = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  // Generate page numbers to display
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          visiblePages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          visiblePages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          visiblePages.push(i);
        }
      }
    }
    
    return visiblePages;
  };

  // Grid card
  const renderGridProduct = ({ item }) => {
    const quantity = quantities[item.id] || 0;
    return (
      <View style={styles.gridCard}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SingleProduct', { product: item })
          }
        >
          <Image source={item.image} style={styles.productImage} />
        </TouchableOpacity>
        <Text style={styles.productName}>{item.name}</Text>

        {/* Attributes row */}
        <View style={styles.attributesRow}>
          <Text style={styles.attributeTag}>{item.brand}</Text>
          <Text style={styles.attributeTag}>{item.origin}</Text>
        </View>

        <Text style={styles.packSize}>
          Pack Size: <Text style={{ fontWeight: 'bold' }}>{item.packSize}</Text>
        </Text>

        {/* Price + Add/Quantity row */}
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{item.price}</Text>
          {quantity === 0 ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => increaseQuantity(item.id)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              {quantity === 1 ? (
                <TouchableOpacity
                  style={[
                    styles.quantityButton,
                    { backgroundColor: '#D9D9D9' },
                  ]}
                  onPress={() =>
                    setQuantities(prev => ({ ...prev, [item.id]: 0 }))
                  }
                >
                  <DeleteLogo width={24} height={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  // List card
  const renderListProduct = ({ item }) => {
    const quantity = quantities[item.id] || 0;
    return (
      <View style={styles.listCard}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SingleProduct', { product: item })
          }
        >
          <Image source={item.image} style={styles.listImage} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.productName}>{item.name}</Text>

          {/* Attributes row */}
          <View style={styles.attributesRow}>
            <Text style={styles.attributeTag}>{item.brand}</Text>
            <Text style={styles.attributeTag}>{item.origin}</Text>
          </View>

          <Text style={styles.packSize}>
            Pack Size: <Text style={{ fontWeight: 600 }}>{item.packSize}</Text>
          </Text>

          {/* Price + Add/Quantity row */}
          <View style={styles.priceRow}>
            <Text style={styles.productPrice}>{item.price}</Text>
            {quantity === 0 ? (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.quantityContainer}>
                {quantity === 1 ? (
                  <TouchableOpacity
                    style={[
                      styles.quantityButton,
                      { backgroundColor: '#D9D9D9' },
                    ]}
                    onPress={() =>
                      setQuantities(prev => ({ ...prev, [item.id]: 0 }))
                    }
                  >
                    <DeleteLogo width={24} height={24} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => decreaseQuantity(item.id)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  // Pagination Component
  const PaginationComponent = () => {
    if (totalPages <= 1) return null;

    const visiblePages = getVisiblePages();

    return (
      <View style={styles.paginationContainer}>
        {/* Previous button */}
        <TouchableOpacity
          style={[styles.paginationButton, currentPage === 1 && styles.disabledButton]}
          onPress={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <Text style={[styles.paginationText, currentPage === 1 && styles.disabledText]}>
            ‹
          </Text>
        </TouchableOpacity>

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <TouchableOpacity
            key={page}
            style={[
              styles.paginationButton,
              currentPage === page && styles.activePage
            ]}
            onPress={() => goToPage(page)}
          >
            <Text
              style={[
                styles.paginationText,
                currentPage === page && styles.activePageText
              ]}
            >
              {page}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Next button */}
        <TouchableOpacity
          style={[styles.paginationButton, currentPage === totalPages && styles.disabledButton]}
          onPress={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <Text style={[styles.paginationText, currentPage === totalPages && styles.disabledText]}>
            ›
          </Text>
        </TouchableOpacity>

        {/* Last page button */}
        <TouchableOpacity
          style={[styles.paginationButton, currentPage === totalPages && styles.disabledButton]}
          onPress={goToLastPage}
          disabled={currentPage === totalPages}
        >
          <Text style={[styles.paginationText, currentPage === totalPages && styles.disabledText]}>
            ››
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header with Search */}
      <LinearGradient
        colors={['#455625', '#97BC51']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header1}
      >
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              setCurrentPage(1); // Reset to first page when searching
            }}
            placeholderTextColor="#999"
          />
          <Ionicons name="search-outline" size={20} color="#666" />
        </View>
      </LinearGradient>

      {/* View toggle row */}
      <View style={styles.viewToggleRow}>
        <TouchableOpacity
          style={[styles.viewButton, styles.filterButton]}
          onPress={() => console.log('Filter pressed')}
        >
          <FilterLogo />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>

        {/* Right: List & Grid Icons */}
        <View style={styles.toggleGroup}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('list')}
          >
            <RowLogo />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('grid')}
          >
            <RectLogo />
          </TouchableOpacity>
        </View>
      </View>

      {/* Products */}
      <View style={styles.contentContainer}>
        {currentProducts.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        ) : (
          <FlatList
            data={currentProducts}
            renderItem={
              viewMode === 'grid' ? renderGridProduct : renderListProduct
            }
            keyExtractor={item => item.id}
            numColumns={viewMode === 'grid' ? 2 : 1}
            key={viewMode}
            contentContainerStyle={styles.productsContainer}
            columnWrapperStyle={viewMode === 'grid' ? styles.rowWrap : null}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {/* Pagination */}
      <PaginationComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },

  header1: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333' },

  viewToggleRow: {
    marginTop: -5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 3,
    borderRadius: 8,
    marginLeft: 8,
  },

  filterButton: {
    marginLeft: 12,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    height: 24,
    width: 70,
  },
  filterText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  toggleGroup: { flexDirection: 'row', alignItems: 'center' },

  contentContainer: { flex: 1 },
  productsContainer: { padding: 10, paddingBottom: 20 },

  // Grid styles
  gridCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    margin: 6,
    borderWidth: 0.2,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    minWidth: (width - 40) / 2,
  },
  productImage: {
    width: '80%',
    height: 170,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },

  // List styles
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    elevation: 2,
  },
  listImage: { width: 123, height: 120, borderRadius: 8, marginRight: 12 },

  productName: { fontSize: 16, fontWeight: '600', color: '#222' },

  attributesRow: { flexDirection: 'row', marginTop: 4, marginBottom: 4 },
  attributeTag: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 6,
    fontSize: 12,
    color: '#455625',
    fontWeight: '500',
  },

  packSize: { fontSize: 14, color: '#666', marginBottom: 4, fontWeight: '400' },
  productPrice: { fontSize: 20, fontWeight: '700', color: '#000' },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },

  addButton: {
    backgroundColor: '#A7C257',
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -10,
  },
  addButtonText: { color: '#fff', fontWeight: '300', fontSize: 20 },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 2,
    borderRadius: 8,
    marginRight: -10,
  },
  quantityButton: {
    backgroundColor: '#A7C257',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  quantityButtonText: { color: '#fff', fontSize: 20, fontWeight: '300' },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '400',
    color: '#918888ff',
  },

  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#777', fontSize: 14 },

  // Pagination styles
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    marginBottom:35
  },
  paginationButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  activePage: {
    backgroundColor: '#A7C257',
  },
  disabledButton: {
    backgroundColor: '#f0f0f0',
  },
  paginationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  activePageText: {
    color: '#fff',
    fontWeight: '600',
  },
  disabledText: {
    color: '#ccc',
  },
});

export default BrowseScreen;
