
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import Thanksmark from '../../Assets/Images/thanksmark'
// import { useNavigation } from '@react-navigation/native';

// const Thanks = () => {
//   const navigation = useNavigation();
  
//   const handleBackToHome = () => {
//     navigation.reset({
//       index: 0,
//       routes: [
//         {
//           name: 'BottomTabs',
//           state: {
//             routes: [{ name: 'Home' }],
//           },
//         },
//       ],
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Centered content */}
//       <View style={styles.centeredContent}>
//         <View style={styles.card}>
//           <View style={styles.iconContainer}>
//             {/* <Icon name="checkmark" size={48} color="#fff" /> */}
//             <Thanksmark size={48} color="#fff" />
//           </View>

//           <Text style={styles.title}>Thank You!</Text>
//           <Text style={styles.subtitle}>Your order has been received</Text>
//           <Text style={styles.description}>You can collect your order after 11AM</Text>
//         </View>
//       </View>

//       {/* Bottom button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={handleBackToHome} style={styles.buttonWrapper}>
//           <LinearGradient
//             colors={['#455625', '#97BC51']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.gradientButton}
//           >
//             <Text style={styles.gradientButtonText}>Back to Home</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   centeredContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
   
//     elevation: 5,
//     width: '100%',
//     maxWidth: 400,
//   },
//   iconContainer: {
//     width: 70,
//     height: 70,
//     borderRadius: 40,
//     backgroundColor: '#648F00',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderWidth:7,
//     borderColor:"#A7C257"
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 14,
//     color: 'black',
//   },
//   buttonContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 30,
//     paddingTop: 10,
//   },
//   buttonWrapper: {
//     width: '100%',
//     maxWidth: 400,
//     alignSelf: 'center',
//   },
//   gradientButton: {
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   gradientButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// })

// export default Thanks

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Thanksmark from '../../Assets/Images/thanksmark';
import { useNavigation } from '@react-navigation/native';

const Thanks = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);
  
  const handleBackToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'BottomTabs',
          state: {
            routes: [{ name: 'Home' }],
          },
        },
      ],
    });
  };

  const currentStyles = isTablet ? tabletStyles : styles;

  return (
    <View style={currentStyles.container}>
      {/* Centered content */}
      <View style={currentStyles.centeredContent}>
        <View style={currentStyles.card}>
          <View style={currentStyles.iconContainer}>
            {/* <Icon name="checkmark" size={isTablet ? 64 : 48} color="#fff" /> */}
            <Thanksmark size={isTablet ? 64 : 48} color="#fff" />
          </View>

          <Text style={currentStyles.title}>Thank You!</Text>
          <Text style={currentStyles.subtitle}>Your order has been received</Text>
          <Text style={currentStyles.description}>You can collect your order after 11AM</Text>
        </View>
      </View>

      {/* Bottom button */}
      <View style={currentStyles.buttonContainer}>
        <TouchableOpacity onPress={handleBackToHome} style={currentStyles.buttonWrapper}>
          <LinearGradient
            colors={['#455625', '#97BC51']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={currentStyles.gradientButton}
          >
            <Text style={currentStyles.gradientButtonText}>Back to Home</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ==========================================
// MOBILE STYLES (Original - Unchanged)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#648F00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 7,
    borderColor: '#A7C257',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  gradientButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gradientButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

// ==========================================
// TABLET STYLES (Separate - New)
// ==========================================
const tabletStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 48,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: '100%',
    maxWidth: 600,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#648F00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 10,
    borderColor: '#A7C257',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    color: 'black',
    marginBottom: 12,
    fontWeight: '500',
  },
  description: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    paddingHorizontal: 40,
    paddingBottom: 50,
    paddingTop: 20,
  },
  buttonWrapper: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  gradientButton: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  gradientButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default Thanks;