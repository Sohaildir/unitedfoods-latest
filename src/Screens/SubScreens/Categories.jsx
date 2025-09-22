
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Categories = () => {
//   const categoriesData = [
//     {
//       id: 1,
//       name: 'Appetizers & Sides',
//       products: 62,
//       image:
//         'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=300&fit=crop',
//     },
//     {
//       id: 2,
//       name: 'Beverages',
//       products: 36,
//       image:
//         'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
//     },
//     {
//       id: 3,
//       name: 'Dairy & Eggs',
//       products: 14,
//       image:
//         'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
//     },
//     {
//       id: 4,
//       name: 'Cooking Ingredients',
//       products: 21,
//       image:
//         'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop',
//     },
//     {
//       id: 5,
//       name: 'Oil & Ghee',
//       products: 21,
//       image:
//         'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
//     },
//     {
//       id: 6,
//       name: 'Flour & Breading',
//       products: 21,
//       image:
//         'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
//     },
//     {
//       id: 7,
//       name: 'Tinned Foods',
//       products: 21,
//       image:
//         'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop',
//     },
//     {
//       id: 8,
//       name: 'Frozen Foods',
//       products: 21,
//       image:
//         'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
//     },
//   ];

//   const renderCategoryItem = ({ item }) => (
//     <TouchableOpacity style={styles.categoryItem}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.categoryImage} />
//       </View>
//       <Text style={styles.categoryName}>{item.name}</Text>
//       <Text style={styles.productCount}>{item.products} Products</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search Category"
//           placeholderTextColor="#999"
//         />
//         <Ionicons
//           name="search"
//           size={20}
//           color="#999"
//           style={styles.searchIcon}
//         />
//       </View>

//       {/* Categories Grid */}
//       <FlatList
//         data={categoriesData}
//         renderItem={renderCategoryItem}
//         keyExtractor={item => item.id.toString()}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.gridContainer}
//         columnWrapperStyle={styles.row}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16 },

//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     paddingHorizontal: 6,
//     marginVertical: 12,
//     elevation: 2,
    
//     marginHorizontal:25,
//     height: 25,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 12,
//     color: '#333',
//     paddingVertical: 0,
//     textAlignVertical: 'center',
//   },

//   searchIcon: { fontSize: 16,
//      marginLeft: 10 },
//   gridContainer: { paddingBottom: 20 },

//   row: { justifyContent: 'space-between' },

//   categoryItem: {
//     // backgroundColor: '#fff',
//     borderRadius: 12,
  
//     padding: 16,
//     marginBottom: 3,
//     marginTop:-13,
    
//     width: '48%',
//     alignItems: 'center', // ✅ Left-align content
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
   
//   },

//   imageContainer: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     overflow: 'hidden',
//     marginBottom: 12,
//     elevation:6,
//     borderColor:"#D9D9D9",
//     borderWidth:5,
//   },
//   categoryImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },

//   categoryName: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'black',
//     textAlign: 'left', // ✅ Left align text
//     marginBottom: 4,
//     lineHeight: 20,
//   },
//   productCount: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'left', // ✅ Left align text
//     lineHeight: 12,
//   },
// });

// export default Categories;
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesData = [
    {
      id: 1,
      name: 'Appetizers & Sides',
      products: 62,
      image:
        'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Beverages',
      products: 36,
      image:
        'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Dairy & Eggs',
      products: 14,
      image:
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Cooking Ingredients',
      products: 21,
      image:
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Oil & Ghee',
      products: 21,
      image:
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'Flour & Breading',
      products: 21,
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop',
    },
    {
      id: 7,
      name: 'Tinned Foods',
      products: 21,
      image:
        'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop',
    },
    {
      id: 8,
      name: 'Frozen Foods',
      products: 21,
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
    },
  ];

  // Filter and sort categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      // If no search query, return all categories sorted alphabetically
      return [...categoriesData].sort((a, b) => 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    }

    const query = searchQuery.toLowerCase().trim();
    
    // Filter categories that match the search query
    const matchedCategories = categoriesData.filter(category =>
      category.name.toLowerCase().includes(query)
    );

    // Sort matched categories: exact matches first, then alphabetical
    return matchedCategories.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      
      // Prioritize categories that start with the search query
      const aStartsWith = aName.startsWith(query);
      const bStartsWith = bName.startsWith(query);
      
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      
      // Then sort alphabetically
      return aName.localeCompare(bName);
    });
  }, [searchQuery]);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
      <Text style={styles.productCount}>{item.products} Products</Text>
    </TouchableOpacity>
  );

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Category"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearchChange}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {searchQuery ? (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Ionicons name="close" size={16} color="#999" />
          </TouchableOpacity>
        ) : (
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
        )}
      </View>

      {/* Results Count */}
      {searchQuery && (
        <Text style={styles.resultsText}>
          {filteredCategories.length} category{filteredCategories.length !== 1 ? 'ies' : 'y'} found
        </Text>
      )}

      {/* Categories Grid */}
      <FlatList
        data={filteredCategories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={filteredCategories.length > 1 ? styles.row : null}
        key={filteredCategories.length}
        extraData={searchQuery}
      />

      {/* No Results */}
      {searchQuery && filteredCategories.length === 0 && (
        <View style={styles.noResultsContainer}>
          <Ionicons name="search-outline" size={48} color="#ccc" />
          <Text style={styles.noResultsText}>No categories found</Text>
          <Text style={styles.noResultsSubtext}>Try searching with different keywords</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16 },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 6,
    marginVertical: 12,
    elevation: 2,
    marginHorizontal: 25,
    height: 25,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    paddingVertical: 0,
    textAlignVertical: 'center',
  },
  searchIcon: { 
    fontSize: 16,
    marginLeft: 10 
  },
  clearButton: {
    padding: 4,
    marginLeft: 6,
  },

  resultsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '500',
  },

  gridContainer: { paddingBottom: 20 },
  row: { justifyContent: 'space-between' },

  categoryItem: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 3,
    marginTop: -13,
    width: '48%',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 12,
    elevation: 6,
    borderColor: "#D9D9D9",
    borderWidth: 5,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textAlign: 'left',
    marginBottom: 4,
    lineHeight: 20,
  },
  productCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
    lineHeight: 12,
  },

  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default Categories;
