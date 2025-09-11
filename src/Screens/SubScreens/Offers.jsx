
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   StatusBar,
//   FlatList,
// } from 'react-native';

// // ✅ Import your SVG icons
// import FilterLogo from '../../Assets/Images/FilterLogo.svg';
// import RowLogo from '../../Assets/Images/RowLogo.svg';
// import RectLogo from '../../Assets/Images/RectLogo.svg';
// import PlusIcon from '../../Assets/Images/PlusIcon.svg';
// import productImage from '../../Assets/Images/product.png';

// const { width } = Dimensions.get('window');

// const Offers = () => {
//   const [viewMode, setViewMode] = useState('grid');

//   const products = [
//     {
//       id: 1,
//       name: 'Tandoori Masala',
//       category: 'Spice Bazaar',
//       region: 'East End',
//       packSize: '48 x 4.5"',
//       originalPrice: '£10.99',
//       currentPrice: '£9.49',
//       image: productImage,
//       offerEnds: '12h',
//     },
//     {
//       id: 2,
//       name: 'Garam Masala',
//       category: 'Spice Bazaar',
//       region: 'East End',
//       packSize: '24 x 4.5"',
//       originalPrice: '£11.49',
//       currentPrice: '£9.99',
//       image: productImage,
//       offerEnds: '10h',
//     },
//     {
//       id: 3,
//       name: 'Curry Powder',
//       category: 'Spice Bazaar',
//       region: 'North Mills',
//       packSize: '36 x 3.5"',
//       originalPrice: '£12.99',
//       currentPrice: '£10.99',
//       image: productImage,
//       offerEnds: '8h',
//     },
//     {
//       id: 4,
//       name: 'Turmeric Powder',
//       category: 'Spice Bazaar',
//       region: 'East End',
//       packSize: '48 x 4.5"',
//       originalPrice: '£9.99',
//       currentPrice: '£8.49',
//       image: productImage,
//       offerEnds: '14h',
//     },
//     {
//       id: 5,
//       name: 'Chili Powder',
//       category: 'Spice Bazaar',
//       region: 'South Valley',
//       packSize: '40 x 5"',
//       originalPrice: '£13.49',
//       currentPrice: '£11.99',
//       image: productImage,
//       offerEnds: '6h',
//     },
//     {
//       id: 6,
//       name: 'Cumin Seeds',
//       category: 'Spice Bazaar',
//       region: 'North Mills',
//       packSize: '50 x 5"',
//       originalPrice: '£8.99',
//       currentPrice: '£7.49',
//       image: productImage,
//       offerEnds: '9h',
//     },
//   ];

//   // 🔥 Grid View Card
//   const renderGridItem = ({ item }) => (
//     <View style={styles.productCard}>
//       <View style={styles.offerBanner}>
//         <Text style={styles.offerText}>Offer Ends in {item.offerEnds}</Text>
//       </View>
//       <View style={styles.imageContainer}>
//         <Image
//           source={item.image}
//           style={styles.productImage}
//           resizeMode="contain"
//         />
//       </View>
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <View style={styles.categoryContainer}>
//           <View style={styles.categoryBadge}>
//             <Text style={styles.categoryText}>{item.category}</Text>
//           </View>
//           <View style={styles.regionBadge}>
//             <Text style={styles.regionText}>{item.region}</Text>
//           </View>
//         </View>
//         <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.originalPrice}>Was: {item.originalPrice}</Text>
//           <View style={styles.currentPriceRow}>
//             <Text style={styles.nowText}>Now: </Text>
//             <Text style={styles.currentPrice}>{item.currentPrice}</Text>
//           </View>
//         </View>
//       </View>

//       {/* 🔥 Grid Button */}
//       <TouchableOpacity style={styles.addButtonGrid}>
//         <PlusIcon />
//       </TouchableOpacity>
//     </View>
//   );

//   // 🔥 List View Card
//   const renderListItem = ({ item }) => (
//     <View style={styles.listCard}>
//       <Image
//         source={item.image}
//         style={styles.listImage}
//         resizeMode="contain"
//       />
//       <View style={styles.listInfo}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <View style={styles.categoryContainer}>
//           <View style={styles.categoryBadge}>
//             <Text style={styles.categoryText}>{item.category}</Text>
//           </View>
//           <View style={styles.regionBadge}>
//             <Text style={styles.regionText}>{item.region}</Text>
//           </View>
//         </View>
//         <Text style={styles.packSize}>Pack Size: {item.packSize}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.originalPrice}>Was: {item.originalPrice}</Text>
//           <View style={styles.currentPriceRow}>
//             <Text style={styles.nowText}>Now: </Text>
//             <Text style={styles.currentPrice}>{item.currentPrice}</Text>
//           </View>
//         </View>
//       </View>

//       {/* 🔥 List Button */}
//       <TouchableOpacity style={styles.addButtonList}>
//         <PlusIcon />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

//       {/* 🔥 Filter + View Toggle */}
//       <View style={styles.viewToggleRow}>
//         <TouchableOpacity
//           style={[styles.viewButton, styles.filterButton]}
//           onPress={() => console.log('Filter pressed')}
//         >
//           <FilterLogo />
//           <Text style={styles.filterText}>Filter</Text>
//         </TouchableOpacity>

//         <View style={styles.toggleGroup}>
//           <TouchableOpacity
//             style={styles.viewButton}
//             onPress={() => setViewMode('list')}
//           >
//             <RowLogo width={22} height={22} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.viewButton}
//             onPress={() => setViewMode('grid')}
//           >
//             <RectLogo width={17} height={17} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* 🔥 Product List */}
//       <FlatList
//         data={products}
//         renderItem={viewMode === 'grid' ? renderGridItem : renderListItem}
//         keyExtractor={item => item.id.toString()}
//         numColumns={viewMode === 'grid' ? 2 : 1}
//         key={viewMode}
//         contentContainerStyle={styles.scrollContent}
//         columnWrapperStyle={
//           viewMode === 'grid' ? { justifyContent: 'space-between' } : null
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5' },
//   scrollContent: { padding: 8 },

//   // 🔥 Toggle Row
//   viewToggleRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     marginTop: -5,
//     backgroundColor: '#f5f5f5',
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
//   filterButton: {
//     marginLeft: 12,
//     borderRadius: 5,
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 24,
//     width: 70,
//   },
//   filterText: {
//     marginLeft: 6,
//     fontSize: 12,
//     color: 'black',
//     fontWeight: '400',
//   },
//   toggleGroup: { flexDirection: 'row', alignItems: 'center', marginRight: 5 },

//   // 🔥 Grid Styles
//   productCard: {
//     width: (width - 24) / 2,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginBottom: 12,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     position: 'relative',
//   },
//   offerBanner: {
//     position: 'absolute',
//     top: 3,
//     right: 2,
//     backgroundColor: '#ff4444',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 15,
//     zIndex: 1,
//   },
//   offerText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
//   imageContainer: {
//     height: 140,
//     width: 164,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 16,
//   },
//   productImage: { marginTop: 15, width: 180, height: 200 },
//   productDetails: { padding: 12 },
//   productName: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'black',
//     marginBottom: 6,
//   },
//   categoryContainer: { flexDirection: 'row', marginBottom: 3 },
//   categoryBadge: {
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 5,
//     marginRight: 4,
//     borderWidth: 1,
//   },
//   categoryText: { fontSize: 10, color: 'black' },
//   regionBadge: {
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 5,
//     borderWidth: 1,
//   },
//   regionText: { fontSize: 10, color: 'black' },
//   packSize: { fontSize: 12, color: 'black', marginBottom: 4 },
//   priceContainer: { marginBottom: -3 },
//   originalPrice: {
//     fontSize: 12,

//     color: '#999',
//     textDecorationLine: 'line-through',
//     marginBottom: 5,
//   },
//   currentPriceRow: { flexDirection: 'row', alignItems: 'center' },
//   nowText: { fontSize: 12, color: '#333' },
//   currentPrice: { fontSize: 18, fontWeight: 'bold', color: '#2e7d2e' },

//   // 🔥 Buttons
//   addButtonGrid: {
//     position: 'absolute',
//     right: 6,
//     bottom: 6,
//     width: 32,
//     height: 32,
//     backgroundColor: '#A7C257',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   addButtonList: {
   
//     position: 'absolute',
//     right: 6,
//     bottom: 6,
//     width: 32,
//     height: 32,
//     backgroundColor: '#A7C257',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   // 🔥 List Styles
//   listCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginBottom: 12,
//     padding: 12,
//     alignItems: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   listImage: { width: 80, height: 80, borderRadius: 6, marginRight: 12 },
//   listInfo: { flex: 1 },
// });

// export default Offers;
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';

// ✅ Import your SVG icons
import FilterLogo from '../../Assets/Images/FilterLogo.svg';
import RowLogo from '../../Assets/Images/RowLogo.svg';
import RectLogo from '../../Assets/Images/RectLogo.svg';
import PlusIcon from '../../Assets/Images/PlusIcon.svg';
import productImage from '../../Assets/Images/product.png';

const { width } = Dimensions.get('window');

const Offers = () => {
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: 'Tandoori Masala',
      category: 'Spice Bazaar',
      region: 'East End',
      packSize: '48 x 4.5"',
      originalPrice: '£10.99',
      currentPrice: '£9.49',
      image: productImage,
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
      image: productImage,
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
      image: productImage,
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
      image: productImage,
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
      image: productImage,
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
      image: productImage,
      offerEnds: '9h',
    },
  ];

  // 🔥 Grid view item
  const renderGridItem = ({ item }) => (
    <View style={styles.productCard}>
      {/* Offer Banner */}
      <View style={styles.offerBanner}>
        <Text style={styles.offerText}>Offer Ends in {item.offerEnds}</Text>
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </View>

      {/* Details */}
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

        {/* Add Button (Grid) */}
        <TouchableOpacity style={styles.addButtonGrid}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </View>
  );

  // 🔥 List view item
  const renderListItem = ({ item }) => (
    <View style={styles.listCard}>
      {/* Offer Banner */}
      <View style={styles.offerBannerList}>
        <Text style={styles.offerText}>Offer Ends in {item.offerEnds}</Text>
      </View>

      {/* Product Image */}
      <Image source={item.image} style={styles.listImage} resizeMode="contain" />

      {/* Details */}
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

      {/* Add Button (List) */}
      <TouchableOpacity style={styles.addButtonList}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* 🔥 Filter + Toggle Row */}
      <View style={styles.viewToggleRow}>
        <TouchableOpacity
          style={[styles.viewButton, styles.filterButton]}
          onPress={() => console.log('Filter pressed')}
        >
          <FilterLogo />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>

        <View style={styles.toggleGroup}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('list')}
          >
            <RowLogo width={22} height={22} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => setViewMode('grid')}
          >
            <RectLogo width={17} height={17} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔥 Product List */}
      <FlatList
        data={products}
        renderItem={viewMode === 'grid' ? renderGridItem : renderListItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={
          viewMode === 'grid' ? { justifyContent: 'space-between' } : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 8 },

  // Header row
  viewToggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: -5,
    backgroundColor: '#f5f5f5',
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
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  toggleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },

  // Grid card
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
    top: 3,
    right: 2,
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
    zIndex: 1,
  },
  offerBannerList: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#FF2E09',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
    zIndex: 1,
  },
  offerText: { color: '#fff', fontSize: 10, fontWeight: '500' },
  imageContainer: {
    height: 140,
    width: 164,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  productImage: { marginTop: 15, width: 180, height: 200 },
  productDetails: { padding: 12 },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 6,
  },
  categoryContainer: { flexDirection: 'row', marginBottom: 3 },
  categoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 4,
    borderWidth: 1,
  },
  categoryText: { fontSize: 10, color: 'black' },
  regionBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    borderWidth: 1,
  },
  regionText: { fontSize: 10, color: 'black' },
  packSize: { fontSize: 12, color: 'black', marginBottom: 8 },
  priceContainer: { marginBottom: -3 },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  currentPriceRow: { flexDirection: 'row', alignItems: 'center' },
  nowText: { fontSize: 14, color: '#333' },
  currentPrice: { fontSize: 18, fontWeight: 'bold', color: 'black' },

  // 🔥 Separate add buttons
  addButtonGrid: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 32,
    height: 32,
    backgroundColor: '#A7C257',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonList: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 32,
    height: 32,
    backgroundColor: '#A7C257',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // List view card
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
    position: 'relative',
  },
  listImage: { width: 80, height: 80, borderRadius: 6, marginRight: 12 },
  listInfo: { flex: 1 },
});

export default Offers;

