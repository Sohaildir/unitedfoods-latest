import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

// Screens
import Home from '../Screens/Home';
import Browse from '../Screens/Browse';
import Cart from '../Screens/Cart';
import Favorite from '../Screens/Favorite';
import Menu from '../Screens/Menu';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderColor: 'black',
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: 8,
          paddingBottom: 8,
          height: 70,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarActiveTintColor: '#8BC34A',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          // Set icon names for each tab
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Browse':
              iconName = 'grid-outline';
              break;
            case 'Cart':
              iconName = 'cart-outline';
              break;
            case 'Favourite':
              iconName = 'bookmark-outline';
              break;
            case 'Menu':
              iconName = 'menu-outline';
              break;
            default:
              iconName = 'home';
          }

          // Debug log to check if focused is working
          console.log(`${route.name} is focused: ${focused}`);

          return (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <Icon
                name={iconName}
                size={focused ? 24 : 24}
                color={focused ? 'white' : '#999'}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'HOME' }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{ tabBarLabel: 'BROWSE' }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ tabBarLabel: 'CART' }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favorite}
        options={{ tabBarLabel: 'FAVORITES' }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{ tabBarLabel: 'MENU' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#648F00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginTop: 10,
    marginHorizontal: 5, // Adds 5px margin left and right
    marginBottom: 30, // Adds 5px margin at bottom
  },
  inactiveTab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
  },
});

export default BottomTabs;
