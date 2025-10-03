// import React from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ScrollView,
//   Alert
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Logout = () => {
//   const sessionsData = [
//     {
//       id: 1,
//       deviceName: 'iPhone 14 Pro',
//       location: 'Bradford, UK',
//       lastActive: 'Just now',
//       status: 'Active',
//       isCurrent: true
//     },
//     {
//       id: 2,
//       deviceName: 'Samsung Galaxy S23',
//       location: 'Leeds, UK',
//       lastActive: 'Yesterday, 8:15 PM',
//       status: 'Active',
//       isCurrent: false
//     }
//   ];

//   const handleLogOut = (deviceName, isCurrent) => {
//     if (isCurrent) {
//       Alert.alert(
//         "Log Out",
//         "Are you sure you want to log out from this device?",
//         [
//           {
//             text: "Cancel",
//             style: "cancel"
//           },
//           {
//             text: "Log Out",
//             style: "destructive",
//             onPress: () => {
//               // Add your logout logic here
//               console.log('Logging out from current device');
//             }
//           }
//         ]
//       );
//     } else {
//       Alert.alert(
//         "Log Out Device",
//         `Are you sure you want to log out ${deviceName}?`,
//         [
//           {
//             text: "Cancel",
//             style: "cancel"
//           },
//           {
//             text: "Log Out",
//             style: "destructive",
//             onPress: () => {
//               // Add your remote logout logic here
//               console.log(`Logging out ${deviceName}`);
//             }
//           }
//         ]
//       );
//     }
//   };

//   const renderSessionItem = (session) => (
//     <View key={session.id} style={styles.sessionItem}>
//       <View style={styles.sessionHeader}>
//         <View style={styles.deviceInfo}>
//           <Text style={styles.deviceName}>{session.deviceName}</Text>
//           {session.isCurrent && (
//             <View style={styles.currentSessionBadge}>
//               <Text style={styles.currentSessionText}>Current Session</Text>
//             </View>
//           )}
//         </View>
//       </View>
      
//       <View style={styles.sessionDetails}>
//         <View style={styles.detailRow}>
//           <Text style={styles.detailLabel}>Location: </Text>
//           <Text style={styles.detailValue}>{session.location}</Text>
//         </View>
        
//         <View style={styles.detailRow}>
//           <Text style={styles.detailLabel}>Last Active: </Text>
//           <Text style={styles.detailValue}>{session.lastActive}</Text>
//         </View>
        
//         <View style={styles.detailRow}>
//           <Text style={styles.detailLabel}>Status: </Text>
//           <Text style={[styles.detailValue, styles.statusActive]}>{session.status}</Text>
//         </View>
//       </View>

//       <TouchableOpacity 
//   onPress={() => handleLogOut(session.deviceName, session.isCurrent)}
//   style={{ borderRadius: 8 }} // keep the rounded edges
//   activeOpacity={0.8}
// >
//   <LinearGradient
//     colors={['#455625', '#97BC51']}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 0 }}
//     style={styles.logOutButton}
//   >
//     <Text style={styles.logOutButtonText}>Log Out</Text>
//   </LinearGradient>
// </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* Header Section */}
//       <View style={styles.headerSection}>
//         <Text style={styles.title}>Active Sessions</Text>
//         <Text style={styles.description}>
//           Manage your account activity. Review devices currently signed in and log out of any you don't
//            recognize.
//         </Text>
//       </View>

//       {/* Sessions List */}
//       <View style={styles.sessionsContainer}>
//         {sessionsData.map(renderSessionItem)}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   headerSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 24,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: 'black',
//     marginBottom: 8,
//   },
//   description: {
//     width: 342,
//     height: 63,
//     opacity: 1,
//     fontSize: 14,
//     color: 'black',
//     lineHeight: 20,
    
//   },
//   sessionsContainer: {
//     paddingHorizontal: 20,
//   },
//   sessionItem: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
      
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   sessionHeader: {
//     marginBottom: 2,
//   },
//   deviceInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   deviceName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginRight: 12,
//    marginTop:-9,
//   },
//   currentSessionBadge: {
//     backgroundColor: '#0285FF33',
//     paddingHorizontal: 8,
//     marginHorizontal:42,
//     paddingVertical: 3,
//     borderRadius: 12,
//   },
//   currentSessionText: {
//     fontSize: 12,
//     color: '#0285FF',
//     fontWeight: '500',
//   },
//   // sessionDetails: {
//   //   marginBottom: 1,
//   // },
//   detailRow: {
//     flexDirection: 'row',
//     marginBottom: 8,
//     alignItems: 'flex-start',
//   },
//   detailLabel: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '500',
//     minWidth: 100,
//   },
//   detailValue: {
//     fontSize: 16,
//     color: '#666',
//     flex: 1,
//   },
//   statusActive: {
//     color: '#648F00',
//     fontWeight: '400',
//     fontSize:14,
//   },
//   logOutButton: {
//     borderRadius: 8,
//     paddingVertical: 4,  // smaller padding so text fits
//     paddingHorizontal: 16,
//     alignSelf: 'flex-start',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minWidth: 92,        // instead of hard width
//     minHeight: 27,       // instead of hard height
//   },
//   logOutButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// export default Logout;

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Logout = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const { width: screenWidth } = dimensions;
  const isTablet = screenWidth >= 768;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const sessionsData = [
    {
      id: 1,
      deviceName: 'iPhone 14 Pro',
      location: 'Bradford, UK',
      lastActive: 'Just now',
      status: 'Active',
      isCurrent: true
    },
    {
      id: 2,
      deviceName: 'Samsung Galaxy S23',
      location: 'Leeds, UK',
      lastActive: 'Yesterday, 8:15 PM',
      status: 'Active',
      isCurrent: false
    }
  ];

  const handleLogOut = (deviceName, isCurrent) => {
    if (isCurrent) {
      Alert.alert(
        "Log Out",
        "Are you sure you want to log out from this device?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Log Out",
            style: "destructive",
            onPress: () => {
              console.log('Logging out from current device');
            }
          }
        ]
      );
    } else {
      Alert.alert(
        "Log Out Device",
        `Are you sure you want to log out ${deviceName}?`,
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Log Out",
            style: "destructive",
            onPress: () => {
              console.log(`Logging out ${deviceName}`);
            }
          }
        ]
      );
    }
  };

  const currentStyles = isTablet ? tabletStyles : styles;

  const renderSessionItem = (session) => (
    <View key={session.id} style={currentStyles.sessionItem}>
      <View style={currentStyles.sessionHeader}>
        <View style={currentStyles.deviceInfo}>
          <Text style={currentStyles.deviceName}>{session.deviceName}</Text>
          {session.isCurrent && (
            <View style={currentStyles.currentSessionBadge}>
              <Text style={currentStyles.currentSessionText}>Current Session</Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={currentStyles.sessionDetails}>
        <View style={currentStyles.detailRow}>
          <Text style={currentStyles.detailLabel}>Location: </Text>
          <Text style={currentStyles.detailValue}>{session.location}</Text>
        </View>
        
        <View style={currentStyles.detailRow}>
          <Text style={currentStyles.detailLabel}>Last Active: </Text>
          <Text style={currentStyles.detailValue}>{session.lastActive}</Text>
        </View>
        
        <View style={currentStyles.detailRow}>
          <Text style={currentStyles.detailLabel}>Status: </Text>
          <Text style={[currentStyles.detailValue, currentStyles.statusActive]}>{session.status}</Text>
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => handleLogOut(session.deviceName, session.isCurrent)}
        style={{ borderRadius: 8 }}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#455625', '#97BC51']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={currentStyles.logOutButton}
        >
          <Text style={currentStyles.logOutButtonText}>Log Out</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={currentStyles.container} showsVerticalScrollIndicator={false}>
      <View style={currentStyles.headerSection}>
        <Text style={currentStyles.title}>Active Sessions</Text>
        <Text style={currentStyles.description}>
          Manage your account activity. Review devices currently signed in and log out of any you don't
           recognize.
        </Text>
      </View>

      <View style={currentStyles.sessionsContainer}>
        {sessionsData.map(renderSessionItem)}
      </View>
    </ScrollView>
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
  headerSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 8,
  },
  description: {
    width: 342,
    height: 63,
    opacity: 1,
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
  },
  sessionsContainer: {
    paddingHorizontal: 20,
  },
  sessionItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sessionHeader: {
    marginBottom: 2,
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginRight: 12,
    marginTop: -9,
  },
  currentSessionBadge: {
    backgroundColor: '#0285FF33',
    paddingHorizontal: 8,
    marginHorizontal: 42,
    paddingVertical: 3,
    borderRadius: 12,
  },
  currentSessionText: {
    fontSize: 12,
    color: '#0285FF',
    fontWeight: '500',
  },
  sessionDetails: {
    marginBottom: 1,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    minWidth: 100,
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  statusActive: {
    color: '#648F00',
    fontWeight: '400',
    fontSize: 14,
  },
  logOutButton: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 92,
    minHeight: 27,
  },
  logOutButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
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
  headerSection: {
    paddingHorizontal: 40,
    paddingVertical: 36,
    backgroundColor: '#f5f5f5',
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
    marginBottom: 12,
  },
  description: {
    width: '100%',
    maxWidth: 800,
    opacity: 1,
    fontSize: 18,
    color: 'black',
    lineHeight: 28,
  },
  sessionsContainer: {
    paddingHorizontal: 40,
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  sessionItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
  },
  sessionHeader: {
    marginBottom: 16,
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  deviceName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginRight: 16,
    marginTop: 0,
  },
  currentSessionBadge: {
    backgroundColor: '#0285FF33',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginHorizontal: 0,
    marginLeft: 16,
  },
  currentSessionText: {
    fontSize: 16,
    color: '#0285FF',
    fontWeight: '600',
  },
  sessionDetails: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
    minWidth: 140,
  },
  detailValue: {
    fontSize: 20,
    color: '#666',
    flex: 1,
  },
  statusActive: {
    color: '#648F00',
    fontWeight: '500',
    fontSize: 20,
  },
  logOutButton: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 140,
    minHeight: 48,
  },
  logOutButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Logout;