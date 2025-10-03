




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const { width } = Dimensions.get('window');

// const Search = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [recentSearches, setRecentSearches] = useState([
//     'Toyota Parts',
//     'Mango Chutney',
//     'Cinnamon Sticks'
//   ]);
//   const [showResults, setShowResults] = useState(false);
//   const [isSearching, setIsSearching] = useState(false);

//   // Sample product data for search
//   const allProducts = [
//     {
//       id: '1',
//       name: 'Toyota Parts Premium',
//       brand: 'Toyota',
//       category: 'Auto Parts',
//       price: '£45.99',
//       image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7c5?w=300&h=200&fit=crop',
//       description: 'High quality Toyota replacement parts'
//     },
//     {
//       id: '2',
//       name: 'Mango Chutney Organic',
//       brand: 'Heinrich',
//       category: 'Condiments',
//       price: '£8.99',
//       image: 'https://images.unsplash.com/photo-1506806732259-39c52d1d3365?w=300&h=200&fit=crop',
//       description: 'Organic mango chutney with natural ingredients'
//     },
//     {
//       id: '3',
//       name: 'Cinnamon Sticks Premium',
//       brand: 'Haorra',
//       category: 'Spices',
//       price: '£12.49',
//       image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=300&h=200&fit=crop',
//       description: 'Premium quality Ceylon cinnamon sticks'
//     },
//     {
//       id: '4',
//       name: 'Pure Butter Ghee',
//       brand: 'Brand',
//       category: 'Dairy',
//       price: '£15.99',
//       image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=200&fit=crop',
//       description: 'Pure clarified butter ghee for cooking'
//     },
//     {
//       id: '5',
//       name: 'Chia Peas Organic',
//       brand: 'NewBrand',
//       category: 'Health Foods',
//       price: '£9.99',
//       image: 'https://images.unsplash.com/photo-1586201375761-83865001e8c3?w=300&h=200&fit=crop',
//       description: 'Organic chia seeds rich in omega-3'
//     },
//     {
//       id: '6',
//       name: 'Crisp 99 Snacks',
//       brand: 'Heinrich',
//       category: 'Snacks',
//       price: '£3.99',
//       image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=200&fit=crop',
//       description: 'Crispy snacks with 99% less oil'
//     },
//     {
//       id: '7',
//       name: 'Curry Powder Blend',
//       brand: 'Haorra',
//       category: 'Spices',
//       price: '£7.49',
//       image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop',
//       description: 'Authentic curry powder blend with 12 spices'
//     },
//     {
//       id: '8',
//       name: 'Buns Seeded',
//       brand: 'Americana',
//       category: 'Bakery',
//       price: '£9.49',
//       image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
//       description: 'Fresh seeded burger buns, pack of 48'
//     }
//   ];

//   // Sample data for categories
//   const categories = [
//     {
//       id: '1',
//       name: 'Appetizers & Sides',
//       icon: '🍽️',
//       productCount: 40,
//       color: '#FF6B35'
//     },
//     {
//       id: '2',
//       name: 'Beverages',
//       icon: '🥤',
//       productCount: 30,
//       color: '#FFA500'
//     },
//     {
//       id: '3',
//       name: 'Dairy & Eggs',
//       icon: '🥛',
//       productCount: 25,
//       color: '#4CAF50'
//     },
//     {
//       id: '4',
//       name: 'Desserts',
//       icon: '🍰',
//       productCount: 35,
//       color: '#E91E63'
//     }
//   ];

//   // Sample data for brands
//   const brands = [
//     {
//       id: '1',
//       name: 'Heinrich',
//       logo: 'H',
//       productCount: 20,
//       color: '#E31837'
//     },
//     {
//       id: '2',
//       name: 'Haorra',
//       logo: 'H',
//       productCount: 15,
//       color: '#1B365D'
//     },
//     {
//       id: '3',
//       name: 'Brand',
//       logo: '—',
//       productCount: 25,
//       color: '#4A90E2'
//     },
//     {
//       id: '4',
//       name: 'NewBrand',
//       logo: 'N',
//       productCount: 18,
//       color: '#9C27B0'
//     }
//   ];

//   // Search functionality
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     setIsSearching(true);

//     if (query.trim() === '') {
//       setSearchResults([]);
//       setShowResults(false);
//       setIsSearching(false);
//       return;
//     }

//     // Simulate API delay
//     setTimeout(() => {
//       const filteredResults = allProducts.filter(product =>
//         product.name.toLowerCase().includes(query.toLowerCase()) ||
//         product.brand.toLowerCase().includes(query.toLowerCase()) ||
//         product.category.toLowerCase().includes(query.toLowerCase()) ||
//         product.description.toLowerCase().includes(query.toLowerCase())
//       );

//       setSearchResults(filteredResults);
//       setShowResults(true);
//       setIsSearching(false);
//     }, 300);
//   };

//   // Handle search submission
//   const handleSearchSubmit = () => {
//     if (searchQuery.trim() !== '') {
//       // Add to recent searches if not already there
//       if (!recentSearches.includes(searchQuery.trim())) {
//         setRecentSearches(prev => [searchQuery.trim(), ...prev.slice(0, 4)]);
//       }
//     }
//   };

//   // Handle recent search tap
//   const handleRecentSearchTap = (searchTerm) => {
//     setSearchQuery(searchTerm);
//     handleSearch(searchTerm);
//   };

//   // Handle trending item tap
//   const handleTrendingTap = (searchTerm) => {
//     setSearchQuery(searchTerm);
//     handleSearch(searchTerm);
//   };

//   // Clear search
//   const clearSearch = () => {
//     setSearchQuery('');
//     setSearchResults([]);
//     setShowResults(false);
//   };

//   // Navigate to product details
//   const navigateToProduct = (product) => {
//     if (navigation) {
//       navigation.navigate('SingleProduct', { product });
//     }
//   };

//   // Render search result item
//   const renderSearchResult = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.searchResultItem}
//       onPress={() => navigateToProduct(item)}
//     >
//       <Image source={{ uri: item.image }} style={styles.resultImage} />
//       <View style={styles.resultInfo}>
//         <Text style={styles.resultName} numberOfLines={1}>{item.name}</Text>
//         <Text style={styles.resultBrand}>{item.brand}</Text>
//         <Text style={styles.resultDescription} numberOfLines={2}>{item.description}</Text>
//         <Text style={styles.resultPrice}>{item.price}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Render Category Item (horizontal)
//   const renderCategoryItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.horizontalCategoryItem}
//       onPress={() => {
//         setSearchQuery(item.name);
//         handleSearch(item.name);
//       }}
//     >
//       <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
//         <Text style={styles.categoryEmoji}>{item.icon}</Text>
//       </View>
//       <View style={styles.categoryTextContainer}>
//         <Text style={styles.horizontalCategoryName}>{item.name}</Text>
//         <Text style={styles.horizontalCategoryCount}>{item.productCount} Products</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Render Popular Brand Item (horizontal)
//   const renderBrandItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.horizontalBrandItem}
//       onPress={() => {
//         setSearchQuery(item.name);
//         handleSearch(item.name);
//       }}
//     >
//       <View style={[styles.brandLogo, { backgroundColor: item.color }]}>
//         <Text style={styles.brandLogoText}>{item.logo}</Text>
//       </View>
//       <View style={styles.brandTextContainer}>
//         <Text style={styles.horizontalBrandName}>{item.name}</Text>
//         <Text style={styles.horizontalBrandCount}>{item.productCount} Products</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <View style={styles.searchInputContainer}>
//           {/* <Icon name="search-outline" size={20} color="#666" style={styles.searchIcon} /> */}
//           <TextInput
//             style={styles.searchInput}
//             placeholder=""
//             placeholderTextColor="#999"
//             value={searchQuery}
//             onChangeText={handleSearch}
//             onSubmitEditing={handleSearchSubmit}
//             returnKeyType="search"
//             autoCapitalize="none"
//             autoCorrect={false}
//           />
//           {searchQuery.length > 0 && (
//             <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
//               <Icon name="close-circle" size={20} color="#666" />
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>

//       {/* Search Results */}
//       {showResults && (
//         <View style={styles.searchResultsContainer}>
//           <View style={styles.resultsHeader}>
//             <Text style={styles.resultsCount}>
//               {searchResults.length} results for "{searchQuery}"
//             </Text>
//           </View>
//           <FlatList
//             data={searchResults}
//             renderItem={renderSearchResult}
//             keyExtractor={(item) => item.id}
//             showsVerticalScrollIndicator={false}
//             style={styles.resultsList}
//           />
//         </View>
//       )}

//       {/* Default Content - Show when not searching */}
//       {!showResults && (
//         <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
//           {/* Recent Searches */}
//           {recentSearches.length > 0 && (
//             <View style={styles.section}>
//               <View style={styles.sectionHeader}>
//                 <Text style={styles.sectionTitle}>Recent Searches</Text>
//                 <TouchableOpacity onPress={() => setRecentSearches([])}>
//                   <Text style={styles.clearAllText}>Clear All</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.recentSearchesContainer}>
//                 {recentSearches.map((search, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={styles.recentSearchItem}
//                     onPress={() => handleRecentSearchTap(search)}
//                   >
//                     <Icon name="time-outline" size={16} color="#666" />
//                     <Text style={styles.recentSearchText}>{search}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>
//           )}

//           {/* Trending Products Section */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Trending Products</Text>
//             <View style={styles.trendingGrid}>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Toyota Parts')}
//               >
//                 <Text style={styles.trendingText}>Toyota Parts</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Mango Chutney')}
//               >
//                 <Text style={styles.trendingText}>Mango Chutney</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Cinnamon Sticks')}
//               >
//                 <Text style={styles.trendingText}>Cinnamon Sticks</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Pure Butter Ghee')}
//               >
//                 <Text style={styles.trendingText}>Pure Butter Ghee</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Chia Peas')}
//               >
//                 <Text style={styles.trendingText}>Chia Peas</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Crisp 99')}
//               >
//                 <Text style={styles.trendingText}>Crisp 99</Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.trendingItem}
//                 onPress={() => handleTrendingTap('Curry Powder')}
//               >
//                 <Text style={styles.trendingText}>Curry Powder</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Categories Section - Horizontal Scroll */}
//           <View style={styles.section}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionTitle}>Categories</Text>
//               <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
//                 <Text style={styles.viewAllText}>View All</Text>
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={categories}
//               renderItem={renderCategoryItem}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.productsContainer}
//             />
//           </View>

//           {/* Brands Section - Horizontal Scroll */}
//           <View style={styles.section}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionTitle}>Brands</Text>
//               <TouchableOpacity onPress={() => navigation.navigate('Brands')} >
//                 <Text style={styles.viewAllText}>View All</Text>
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={brands}
//               renderItem={renderBrandItem}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.productsContainer}
//             />
//           </View>
//         </ScrollView>
//       )}

//       {/* Loading indicator */}
//       {isSearching && (
//         <View style={styles.loadingContainer}>
//           <Text style={styles.loadingText}>Searching...</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   searchContainer: {
//     paddingHorizontal: 16,
//     paddingTop: 20,
//     paddingBottom: 10,
//     backgroundColor: '#F5F5F5',
//   },
//   searchInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   // searchIcon: {
//   //   marginRight: 10,
//   // },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 8,
//     fontSize: 16,
//     color: '#333',
//   },
//   clearButton: {
//     padding: 4,
//   },
//   scrollContent: {
//     flex: 1,
//     paddingHorizontal: 16,
//   },
//   section: {
//     marginBottom: 10,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: 'black',
//     marginTop:2
//   },
//   viewAllText: {
//     color: '#7E7E7E',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   clearAllText: {
//     color: '#666',
//     fontSize: 14,
//     fontWeight: '500',
//   },

//   // Recent Searches Styles
//   recentSearchesContainer: {
//     gap: 8,
//   },
//   recentSearchItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   recentSearchText: {
//     marginLeft: 8,
//     fontSize: 14,
//     color: '#333',
//   },

//   // Search Results Styles
//   searchResultsContainer: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   resultsHeader: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//   },
//   resultsCount: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   resultsList: {
//     flex: 1,
//   },
//   searchResultItem: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     padding: 12,
//     marginHorizontal: 16,
//     marginVertical: 4,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   resultImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   resultInfo: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   resultName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 2,
//   },
//   resultBrand: {
//     fontSize: 12,
//     color: '#666',
//     marginBottom: 2,
//   },
//   resultDescription: {
//     fontSize: 12,
//     color: '#666',
//     lineHeight: 16,
//     marginBottom: 4,
//   },
//   resultPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },

//   // Loading Styles
//   loadingContainer: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   loadingText: {
//     fontSize: 14,
//     color: '#666',
//   },

//   // Existing styles for trending, categories, and brands
//   trendingGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//     marginTop:8
//   },
//   trendingItem: {
//     backgroundColor: 'white',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     marginRight: 1,
   
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   trendingText: {
//     fontSize: 14,
//     color: '#333',
//   },
  
//   // Horizontal Category Styles
//   horizontalCategoryItem: {
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     padding: 6,
//     width: 175,
//     flexDirection: 'row',
//     height: 'auto',
//     marginRight: 12,
//     alignItems: 'center',
//   },
//   categoryIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   categoryEmoji: {
//     fontSize: 18,
//   },
//   categoryTextContainer: {
//     flex: 1,
//   },
//   horizontalCategoryName: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 3,
//   },
//   horizontalCategoryCount: {
//     fontSize: 10,
//     color: '#666',
//   },

//   // Horizontal Brand Styles
//   horizontalBrandItem: {
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     padding: 6,
//     width: 175,
//     flexDirection: 'row',
//     height: 'auto',
//     marginRight: 12,
//     alignItems: 'center',
//   },
//   brandLogo: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   brandLogoText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '700',
//   },
//   brandTextContainer: {
//     flex: 1,
//   },
//   horizontalBrandName: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 3,
//   },
//   horizontalBrandCount: {
//     fontSize: 10,
//     color: '#666',
//   },

//   // FlatList container styles
//   contentContainer: { 
//     flex: 1 
//   },
//   productsContainer: { 
//     paddingLeft: 10, 
//     paddingRight: 10, 
//     paddingBottom: 20 
//   },
// });

// export default Search;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    'Toyota Parts',
    'Mango Chutney',
    'Cinnamon Sticks'
  ]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const allProducts = [
    {
      id: '1',
      name: 'Toyota Parts Premium',
      brand: 'Toyota',
      category: 'Auto Parts',
      price: '£45.99',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7c5?w=300&h=200&fit=crop',
      description: 'High quality Toyota replacement parts'
    },
    {
      id: '2',
      name: 'Mango Chutney Organic',
      brand: 'Heinrich',
      category: 'Condiments',
      price: '£8.99',
      image: 'https://images.unsplash.com/photo-1506806732259-39c52d1d3365?w=300&h=200&fit=crop',
      description: 'Organic mango chutney with natural ingredients'
    },
    {
      id: '3',
      name: 'Cinnamon Sticks Premium',
      brand: 'Haorra',
      category: 'Spices',
      price: '£12.49',
      image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=300&h=200&fit=crop',
      description: 'Premium quality Ceylon cinnamon sticks'
    },
    {
      id: '4',
      name: 'Pure Butter Ghee',
      brand: 'Brand',
      category: 'Dairy',
      price: '£15.99',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=200&fit=crop',
      description: 'Pure clarified butter ghee for cooking'
    },
    {
      id: '5',
      name: 'Chia Peas Organic',
      brand: 'NewBrand',
      category: 'Health Foods',
      price: '£9.99',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8c3?w=300&h=200&fit=crop',
      description: 'Organic chia seeds rich in omega-3'
    },
    {
      id: '6',
      name: 'Crisp 99 Snacks',
      brand: 'Heinrich',
      category: 'Snacks',
      price: '£3.99',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=200&fit=crop',
      description: 'Crispy snacks with 99% less oil'
    },
    {
      id: '7',
      name: 'Curry Powder Blend',
      brand: 'Haorra',
      category: 'Spices',
      price: '£7.49',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop',
      description: 'Authentic curry powder blend with 12 spices'
    },
    {
      id: '8',
      name: 'Buns Seeded',
      brand: 'Americana',
      category: 'Bakery',
      price: '£9.49',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
      description: 'Fresh seeded burger buns, pack of 48'
    }
  ];

  const categories = [
    {
      id: '1',
      name: 'Appetizers & Sides',
      icon: '🍽️',
      productCount: 40,
      color: '#FF6B35'
    },
    {
      id: '2',
      name: 'Beverages',
      icon: '🥤',
      productCount: 30,
      color: '#FFA500'
    },
    {
      id: '3',
      name: 'Dairy & Eggs',
      icon: '🥛',
      productCount: 25,
      color: '#4CAF50'
    },
    {
      id: '4',
      name: 'Desserts',
      icon: '🍰',
      productCount: 35,
      color: '#E91E63'
    }
  ];

  const brands = [
    {
      id: '1',
      name: 'Heinrich',
      logo: 'H',
      productCount: 20,
      color: '#E31837'
    },
    {
      id: '2',
      name: 'Haorra',
      logo: 'H',
      productCount: 15,
      color: '#1B365D'
    },
    {
      id: '3',
      name: 'Brand',
      logo: '—',
      productCount: 25,
      color: '#4A90E2'
    },
    {
      id: '4',
      name: 'NewBrand',
      logo: 'N',
      productCount: 18,
      color: '#9C27B0'
    }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);

    if (query.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      setIsSearching(false);
      return;
    }

    setTimeout(() => {
      const filteredResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredResults);
      setShowResults(true);
      setIsSearching(false);
    }, 300);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      if (!recentSearches.includes(searchQuery.trim())) {
        setRecentSearches(prev => [searchQuery.trim(), ...prev.slice(0, 4)]);
      }
    }
  };

  const handleRecentSearchTap = (searchTerm) => {
    setSearchQuery(searchTerm);
    handleSearch(searchTerm);
  };

  const handleTrendingTap = (searchTerm) => {
    setSearchQuery(searchTerm);
    handleSearch(searchTerm);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const navigateToProduct = (product) => {
    if (navigation) {
      navigation.navigate('SingleProduct', { product });
    }
  };

  const currentStyles = isTablet ? tabletStyles : styles;
  const iconSize = isTablet ? 24 : 20;

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity 
      style={currentStyles.searchResultItem}
      onPress={() => navigateToProduct(item)}
    >
      <Image source={{ uri: item.image }} style={currentStyles.resultImage} />
      <View style={currentStyles.resultInfo}>
        <Text style={currentStyles.resultName} numberOfLines={1}>{item.name}</Text>
        <Text style={currentStyles.resultBrand}>{item.brand}</Text>
        <Text style={currentStyles.resultDescription} numberOfLines={2}>{item.description}</Text>
        <Text style={currentStyles.resultPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={currentStyles.horizontalCategoryItem}
      onPress={() => {
        setSearchQuery(item.name);
        handleSearch(item.name);
      }}
    >
      <View style={[currentStyles.categoryIcon, { backgroundColor: item.color }]}>
        <Text style={currentStyles.categoryEmoji}>{item.icon}</Text>
      </View>
      <View style={currentStyles.categoryTextContainer}>
        <Text style={currentStyles.horizontalCategoryName}>{item.name}</Text>
        <Text style={currentStyles.horizontalCategoryCount}>{item.productCount} Products</Text>
      </View>
    </TouchableOpacity>
  );

  const renderBrandItem = ({ item }) => (
    <TouchableOpacity 
      style={currentStyles.horizontalBrandItem}
      onPress={() => {
        setSearchQuery(item.name);
        handleSearch(item.name);
      }}
    >
      <View style={[currentStyles.brandLogo, { backgroundColor: item.color }]}>
        <Text style={currentStyles.brandLogoText}>{item.logo}</Text>
      </View>
      <View style={currentStyles.brandTextContainer}>
        <Text style={currentStyles.horizontalBrandName}>{item.name}</Text>
        <Text style={currentStyles.horizontalBrandCount}>{item.productCount} Products</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.searchContainer}>
        <View style={currentStyles.searchInputContainer}>
          <TextInput
            style={currentStyles.searchInput}
            placeholder=""
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={handleSearch}
            onSubmitEditing={handleSearchSubmit}
            returnKeyType="search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={currentStyles.clearButton}>
              <Icon name="close-circle" size={iconSize} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {showResults && (
        <View style={currentStyles.searchResultsContainer}>
          <View style={currentStyles.resultsHeader}>
            <Text style={currentStyles.resultsCount}>
              {searchResults.length} results for "{searchQuery}"
            </Text>
          </View>
          <FlatList
            data={searchResults}
            renderItem={renderSearchResult}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            style={currentStyles.resultsList}
          />
        </View>
      )}

      {!showResults && (
        <ScrollView style={currentStyles.scrollContent} showsVerticalScrollIndicator={false}>
          {recentSearches.length > 0 && (
            <View style={currentStyles.section}>
              <View style={currentStyles.sectionHeader}>
                <Text style={currentStyles.sectionTitle}>Recent Searches</Text>
                <TouchableOpacity onPress={() => setRecentSearches([])}>
                  <Text style={currentStyles.clearAllText}>Clear All</Text>
                </TouchableOpacity>
              </View>
              <View style={currentStyles.recentSearchesContainer}>
                {recentSearches.map((search, index) => (
                  <TouchableOpacity
                    key={index}
                    style={currentStyles.recentSearchItem}
                    onPress={() => handleRecentSearchTap(search)}
                  >
                    <Icon name="time-outline" size={isTablet ? 20 : 16} color="#666" />
                    <Text style={currentStyles.recentSearchText}>{search}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          <View style={currentStyles.section}>
            <Text style={currentStyles.sectionTitle}>Trending Products</Text>
            <View style={currentStyles.trendingGrid}>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Toyota Parts')}
              >
                <Text style={currentStyles.trendingText}>Toyota Parts</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Mango Chutney')}
              >
                <Text style={currentStyles.trendingText}>Mango Chutney</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Cinnamon Sticks')}
              >
                <Text style={currentStyles.trendingText}>Cinnamon Sticks</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Pure Butter Ghee')}
              >
                <Text style={currentStyles.trendingText}>Pure Butter Ghee</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Chia Peas')}
              >
                <Text style={currentStyles.trendingText}>Chia Peas</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Crisp 99')}
              >
                <Text style={currentStyles.trendingText}>Crisp 99</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={currentStyles.trendingItem}
                onPress={() => handleTrendingTap('Curry Powder')}
              >
                <Text style={currentStyles.trendingText}>Curry Powder</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={currentStyles.section}>
            <View style={currentStyles.sectionHeader}>
              <Text style={currentStyles.sectionTitle}>Categories</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <Text style={currentStyles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={currentStyles.productsContainer}
            />
          </View>

          <View style={currentStyles.section}>
            <View style={currentStyles.sectionHeader}>
              <Text style={currentStyles.sectionTitle}>Brands</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Brands')} >
                <Text style={currentStyles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={brands}
              renderItem={renderBrandItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={currentStyles.productsContainer}
            />
          </View>
        </ScrollView>
      )}

      {isSearching && (
        <View style={currentStyles.loadingContainer}>
          <Text style={currentStyles.loadingText}>Searching...</Text>
        </View>
      )}
    </View>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F5F5F5',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 4,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginTop: 2
  },
  viewAllText: {
    color: '#7E7E7E',
    fontSize: 14,
    fontWeight: '500',
  },
  clearAllText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  recentSearchesContainer: {
    gap: 8,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  recentSearchText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  searchResultsContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  resultsHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  resultsCount: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  resultsList: {
    flex: 1,
  },
  searchResultItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  resultInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  resultBrand: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  resultDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 4,
  },
  resultPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 14,
    color: '#666',
  },
  trendingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8
  },
  trendingItem: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  trendingText: {
    fontSize: 14,
    color: '#333',
  },
  horizontalCategoryItem: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 6,
    width: 175,
    flexDirection: 'row',
    height: 'auto',
    marginRight: 12,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoryEmoji: {
    fontSize: 18,
  },
  categoryTextContainer: {
    flex: 1,
  },
  horizontalCategoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  horizontalCategoryCount: {
    fontSize: 10,
    color: '#666',
  },
  horizontalBrandItem: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 6,
    width: 175,
    flexDirection: 'row',
    height: 'auto',
    marginRight: 12,
    alignItems: 'center',
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  brandLogoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  brandTextContainer: {
    flex: 1,
  },
  horizontalBrandName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  horizontalBrandCount: {
    fontSize: 10,
    color: '#666',
  },
  contentContainer: { 
    flex: 1 
  },
  productsContainer: { 
    paddingLeft: 10, 
    paddingRight: 10, 
    paddingBottom: 20 
  },
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    paddingHorizontal: 40,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 20,
    color: '#333',
  },
  clearButton: {
    padding: 8,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 40,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginTop: 4
  },
  viewAllText: {
    color: '#7E7E7E',
    fontSize: 21,
    fontWeight: '600',
  },
  clearAllText: {
    color: '#666',
    fontSize: 20,
    fontWeight: '600',
  },
  recentSearchesContainer: {
    gap: 12,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  recentSearchText: {
    marginLeft: 12,
    fontSize: 20,
    color: '#333',
  },
  searchResultsContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  resultsHeader: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  resultsCount: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
  },
  resultsList: {
    flex: 1,
  },
  searchResultItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  resultImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 20,
  },
  resultInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resultName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  resultBrand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  resultDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 8,
  },
  resultPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  loadingContainer: {
    padding: 30,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  trendingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12
  },
  trendingItem: {
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  trendingText: {
    fontSize: 20,
    color: '#333',
  },
  horizontalCategoryItem: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 10,
    width: 250,
    flexDirection: 'row',
    height: 'auto',
    marginRight: 16,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  categoryEmoji: {
    fontSize: 28,
  },
  categoryTextContainer: {
    flex: 1,
  },
  horizontalCategoryName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  horizontalCategoryCount: {
    fontSize: 17,
    color: '#666',
  },
  horizontalBrandItem: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 10,
    width: 250,
    flexDirection: 'row',
    height: 'auto',
    marginRight: 16,
    alignItems: 'center',
  },
  brandLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  brandLogoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  brandTextContainer: {
    flex: 1,
  },
  horizontalBrandName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  horizontalBrandCount: {
    fontSize: 17,
    color: '#666',
  },
  contentContainer: { 
    flex: 1 
  },
  productsContainer: { 
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingBottom: 30 
  },
});

export default Search;