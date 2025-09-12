import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Settings = ({navigation}) => {
  const [notifications, setNotifications] = useState({
    pushNotification: true,
    emailNotification: true,
    smsNotification: true,
    orderUpdates: true,
    paymentAlerts: true,
    offersPromotions: true,
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', notifications);
    // Handle save logic here
  };

  const handleLanguagePress = () => {
    console.log('Language selection pressed');
    // Navigate to language selection screen
  };



  const handleLoginSessions = () => {
    console.log('Login Sessions pressed');
    // Navigate to login sessions screen
  };

  const NotificationItem = ({ icon, title, value, onToggle }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationLeft}>
        <Icon name={icon} size={20} color="#8BC34A" style={styles.notificationIcon} />
        <Text style={styles.notificationText}>{title}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#E8E8E8', true: '#A7C257' }}
        thumbColor={value ? '#FFFFFF' : '#FFFFFF'}
        ios_backgroundColor="#E8E8E8"
        style={styles.switch}
      />
    </View>
  );

  const MenuItemWithArrow = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <Icon name={icon} size={20} color="#8BC34A" style={styles.menuIcon} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#C4C4C4" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.sectionContent}>
            <NotificationItem
              icon="notifications-outline"
              title="Push Notification"
              value={notifications.pushNotification}
              onToggle={() => toggleNotification('pushNotification')}
            />
            <NotificationItem
              icon="mail-outline"
              title="Email Notification"
              value={notifications.emailNotification}
              onToggle={() => toggleNotification('emailNotification')}
            />
            <NotificationItem
              icon="chatbubble-outline"
              title="SMS Notification"
              value={notifications.smsNotification}
              onToggle={() => toggleNotification('smsNotification')}
            />
            <NotificationItem
              icon="receipt-outline"
              title="Order Updates"
              value={notifications.orderUpdates}
              onToggle={() => toggleNotification('orderUpdates')}
            />
            <NotificationItem
              icon="card-outline"
              title="Payment Alerts"
              value={notifications.paymentAlerts}
              onToggle={() => toggleNotification('paymentAlerts')}
            />
            <NotificationItem
              icon="pricetag-outline"
              title="Offers & Promotions"
              value={notifications.offersPromotions}
              onToggle={() => toggleNotification('offersPromotions')}
            />
          </View>
        </View>

        {/* Language Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language</Text>
          <View style={styles.sectionContent}>
            <MenuItemWithArrow
              icon="globe-outline"
              title="English (UK)"
              onPress={handleLanguagePress}
            />
          </View>
        </View>

        {/* Privacy & Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>
          <View style={styles.sectionContent}>
           <TouchableOpacity >
            <MenuItemWithArrow
              icon="shield-checkmark-outline"
              title="2-Factor Authentication"
              
              onPress={()=>navigation.navigate("Authentication")}/>
              </TouchableOpacity>

              <TouchableOpacity >
            <MenuItemWithArrow
              icon="phone-portrait-outline"
              title="Login Sessions"
              onPress={()=>navigation.navigate("Authentication")}
              />
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Save Changes Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity onPress={handleSaveChanges} activeOpacity={0.8} style={{ borderRadius: 8 }}>
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
  scrollView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
    marginLeft: 16,
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 4,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F5F5F5',
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  notificationIcon: {
    marginRight: 12,
    width: 20,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
    flex: 1,
  },
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F5F5F5',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: 12,
    width: 20,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
    flex: 1,
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 32,
  },
  saveButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Settings;