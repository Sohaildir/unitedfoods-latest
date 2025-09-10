import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder=""
          placeholderTextColor="#999"
        />
      </View>

      {/* Trending Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Products</Text>
        <View style={styles.trendingGrid}>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Toyota Parts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Mango Chutney</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Cinnamon Sticks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Pure Butter Ghee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Chia Peas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Crisp 99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingItem}>
            <Text style={styles.trendingText}>Curry Powder</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <View
                style={[
                  styles.categoryImagePlaceholder,
                  { backgroundColor: '#FF6B35' },
                ]}
              >
                {/* Appetizers & Sides icon placeholder */}
                <Text style={styles.categoryEmoji}>🍽️</Text>
              </View>
            </View>
            <Text style={styles.categoryTitle}>Appetizers & Sides</Text>
            <Text style={styles.categoryCount}>40 Products</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <View
                style={[
                  styles.categoryImagePlaceholder,
                  { backgroundColor: '#FFA500' },
                ]}
              >
                {/* Beverages icon placeholder */}
                <Text style={styles.categoryEmoji}>🥤</Text>
              </View>
            </View>
            <Text style={styles.categoryTitle}>Beverages</Text>
            <Text style={styles.categoryCount}>30 Products</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Brands Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Brands</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.brandsRow}>
          <TouchableOpacity style={styles.brandItem}>
            <View style={[styles.brandLogo, { backgroundColor: '#E31837' }]}>
              <Text style={styles.brandText}>H</Text>
            </View>
            <Text style={styles.brandName}>Heinrich</Text>
            <Text style={styles.brandCount}>20 Products</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.brandItem}>
            <View style={[styles.brandLogo, { backgroundColor: '#1B365D' }]}>
              <Text style={styles.brandText}>H</Text>
            </View>
            <Text style={styles.brandName}>Haorra</Text>
            <Text style={styles.brandCount}>15 Products</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.brandItem}>
            <View style={[styles.brandLogo, { backgroundColor: '#4A90E2' }]}>
              <Text style={styles.brandText}>—</Text>
            </View>
            <Text style={styles.brandName}>Brand</Text>
            <Text style={styles.brandCount}>25 Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  viewAllText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  trendingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  trendingItem: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  trendingText: {
    fontSize: 14,
    color: '#333',
  },
  categoriesRow: {
    flexDirection: 'row',
    gap: 16,
  },
  categoryItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  categoryIcon: {
    marginBottom: 12,
  },
  categoryImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
  },
  brandsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  brandItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  brandName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  brandCount: {
    fontSize: 12,
    color: '#666',
  },
});

export default Search;
