import React from 'react';
// Stack Navigation dependencies Import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../Navigation/BottomNavigation.jsx';
// All Screens Import from Screen Folder
import RegsiterScreen from '../Screens/RegsiterScreen';
import SplashScreen from '../Screens/SplashScreen';
import SignIn from '../Screens/SignIn';
import SingleProduct from '../Screens/SingleProduct.jsx';
// subscreens import


import Categories from '../Screens/SubScreens/Categories.jsx';
import Brands from '../Screens/SubScreens/Brands.jsx';
import Offers from '../Screens/SubScreens/Offers.jsx';

import Account from '../Screens/SubScreens/Account.jsx';
import Recent from '../Screens/SubScreens/Recent.jsx';
import Stock from '../Screens/SubScreens/StockCheckList.jsx';

import Support from '../Screens/SubScreens/Support.jsx';
import Logout from '../Screens/SubScreens/Logout.jsx';
import Orderdetails from '../Screens/SubScreens/Orderdetails.jsx';
import Search from '../Screens/SubScreens/Search.jsx';
// import Checkout from '../Screens/SubScreens/Checkout.jsx';
import Checkout from '../Screens/SubScreens/Checkout.jsx'
import Verify from '../Screens/SubScreens/Verify'
import Settings from '../Screens/SubScreens/Settings'
import Authentication from '../Screens/SubScreens/Authentication.jsx'
import Notifications from '../Screens/SubScreens/Notifications.jsx'
import Changepassword from '../Screens/SubScreens/Changepassword.jsx';
import Resetpassword from '../Screens/SubScreens/Resetpassword.jsx';
// import StockCheckList from '../Screens/SubScreens/StockCheckList.jsx';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Register" component={RegsiterScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: true,
            title: 'Product Categories',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Brands"
          component={Brands}
          options={{ title: ' Brands', headerShown: true }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: true,
            title: 'Account',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: true,
            title: 'Search',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Support"
          component={Support}
          options={{
            headerShown: true,
            title: 'Help & Support',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: true,
            title: 'Login Sessions',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Stock"
          component={Stock}
          options={{
            headerShown: true,
            title: 'Stock CheckList',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Offers"
          component={Offers}
          options={{
            headerShown: true,
            title: 'Offers & Promotions',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Recent"
          component={Recent}
          options={{
            headerShown: true,
            title: 'Recent Orders',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Orderdetails"
          component={Orderdetails}
          options={{
            headerShown: true,
            title: 'Order Details',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
 <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: true,
            title: 'Notifications',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
         <Stack.Screen
          name="Changepassword"
          component={Changepassword}
          options={{
            headerShown: true,
            title: 'Change Password',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />
            <Stack.Screen
          name="Resetpassword"
          component={Resetpassword}
          options={{
            headerShown: true,
            title: 'Rest Password',
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen name="BottomTabs" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
