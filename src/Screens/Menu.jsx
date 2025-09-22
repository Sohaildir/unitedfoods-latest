import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuLogo from '../Assets/Images/MenuLogo.png';
import Mbrandlogo from  '../Assets/Images/mbrandlogo.svg';
import Moffer from '../Assets/Images/moffer.svg'
import Maccount from '../Assets/Images/maccount.svg'
import Mfavourite from '../Assets/Images/mfavourite'
import Mrecent from '../Assets/Images/mrecent'
import Mstocklist from '../Assets/Images/mstocklist'
import Msetting from '../Assets/Images/msetting'
import Mlogout from '../Assets/Images/mlogout'
import Mhelp from '../Assets/Images/mhelp'
import Mcategories from '../Assets/Images/mcategories'

const Menu = ({ navigation }) => {
  const handleMenuItemPress = itemId => {
    console.log('Menu item pressed:', itemId);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="black" /> */}

      {/* Header */}
      <LinearGradient
        colors={['#455625', '#97BC51']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={MenuLogo}
                style={{
                  width: 73,
                  height: 73,
                  borderRadius: 50, // Half of width/height
                  backgroundColor: 'white', // Optional: helps see shape if image has transparency
                }}
                resizeMode="contain" // Shows full image without cropping
              />
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.storeName}>Spice & Grill</Text>
            <Text style={styles.storeEmail}>spicegrill@example.com</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Menu Content */}
      <View style={styles.content}>
        {/* SHOP BY Section */}
        <View style={styles.section}>
        {/* <Image source={mbrandlogo} style={{ width: 20, height: 20 }} /> */}
          <Text style={styles.sectionTitle}>SHOP BY</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Categories')}
          >
            {/* <Icon
              name="grid-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                    <Mcategories
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Brands')}
          >
           <Mbrandlogo
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Brands</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Offers')}
          >
            {/* <Icon
              name="pricetag-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
              <Moffer
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Offers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Browse')}
          >
            <Icon
              name="sparkles-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemText}>New Arrivals</Text>
          </TouchableOpacity>
        </View>

        {/* ACCOUNT Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Account')}
          >
            {/* <Icon
              name="person-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                         <Maccount
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Account Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Favourite')}
          >
            {/* <Icon
              name="bookmark-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                                <Mfavourite
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Recent')}
          >
            {/* <Icon
              name="time-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                              <Mrecent
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
     
            <Text style={styles.menuItemText}>Recent Orders</Text>
            <View style={styles.redDot} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Stock')}
          >
            {/* <Icon
              name="card-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                       <Mstocklist
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Stock CheckList</Text>
          </TouchableOpacity>
        </View>

        {/* HELP CENTRE Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HELP CENTRE</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Settings')}
          >
            {/* <Icon
              name="settings-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                             <Msetting
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Support')}
          >
            {/* <Icon
              name="help-circle-outline"
              size={18}
              color="#333"
              style={styles.menuIcon}
            /> */}
                                      <Mhelp
  width={20}
  height={20}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.menuItemText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Logout')}
          >
            {/* <Icon
              name="log-out-outline"
              size={18}
              color="#FF4444"
              style={styles.menuIcon}
            /> */}
                                    <Mlogout
  width={100}
  height={20}
  fill="#648F00"
  style={{ paddingRight:-1}}
/>
            {/* <Text style={styles.logoutText}>Log Out</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#8BC34A',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"black",
  },
  profileImageContainer: {
    marginRight: 15,
  },
  logoContainer: {
    alignItems: 'center',
  },

  profileInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  storeEmail: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    marginTop:10,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 25,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  sectionTitle: {
    color: '#648F00',
    fontweight: 700,
    fontsize: 12,
    lineheight: '100%',
    letterspacing: '0%',
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    width: '100%',
  },
  menuIcon: {
    marginRight: 15,
    color: '#000000',
    fontweight: 500,
  },
  menuItemText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    flex: 1,
  },

  logoutSection: {
    paddingHorizontal: 25,
    paddingTop: 8,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 90,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF4444',
    fontWeight: '400',
  },
});

export default Menu;
