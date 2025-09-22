import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Notifications = ({ navigation }) => {
  const notifications = {
    latest: [
      {
        id: 1,
        title: 'Order #10245 Confirmed',
        description: 'Your order has been placed successfully.',
        time: '2 min ago',
      },
      {
        id: 2,
        title: 'Order #10245 Ready for Collection',
        description: 'Your order is now ready for pickup.',
        time: '15 min ago',
      },
      {
        id: 3,
        title: 'Order #10246 Partially Fulfilled',
        description: 'Some items were unavailable. Please check order details.',
        time: '1 hour ago',
      },
    ],
    earlier: [
      {
        id: 4,
        title: 'Payment Successful',
        description: 'Your payment of £560.25 has been processed.',
        time: '2 hours ago',
      },
      {
        id: 5,
        title: 'Exclusive Offer!',
        description: 'Get 10% off Frozen Foods this week.',
        time: '3 hours ago',
      },
      {
        id: 6,
        title: 'New Arrival Alert',
        description: 'Fresh fruits and vegetables are now in stock.',
        time: '1 day ago',
      },
      {
        id: 7,
        title: 'Limited Time Deal',
        description: 'Buy 2 cases of Coca-Cola, get 1 free!',
        time: '1 day ago',
      },
      {
        id: 8,
        title: 'Price Drop',
        description: 'Prices reduced on Dairy Essentials.',
        time: '2 days ago',
      },
      {
        id: 9,
        title: 'Restock Reminder',
        description: 'Your last order included basmati rice. Need to reorder?',
        time: '2 days ago',
      },
      {
        id: 10,
        title: 'New Arrival Alert',
        description: 'Fresh fruits and vegetables are now in stock.',
        time: '3 days ago',
      },
      {
        id: 11,
        title: 'Limited Time Deal',
        description: 'Buy 2 cases of Coca-Cola, get 1 free!',
        time: '3 days ago',
      },
    ],
  };

  const handleGoBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    }
  };

  const renderNotificationItem = (item) => (
    <TouchableOpacity key={item.id} style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  const renderSection = (title, items) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>
        {items.map(item => renderNotificationItem(item))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
   

      {/* Content */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderSection('Latest', notifications.latest)}
        {renderSection('Earlier', notifications.earlier)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  headerRight: {
    width: 32,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    marginHorizontal: 20,
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal:3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  notificationContent: {
    flex: 1,
    marginRight: 12,
    
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
    lineHeight: 18,
  },
  notificationDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666',
    lineHeight: 16,
  },
  notificationTime: {
    fontSize: 11,
    fontWeight: '400',
    color: '#999',
    marginTop: 2,
  },
});

export default Notifications;