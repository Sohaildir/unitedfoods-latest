import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Alert
} from 'react-native';

const Logout = () => {
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
              // Add your logout logic here
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
              // Add your remote logout logic here
              console.log(`Logging out ${deviceName}`);
            }
          }
        ]
      );
    }
  };

  const renderSessionItem = (session) => (
    <View key={session.id} style={styles.sessionItem}>
      <View style={styles.sessionHeader}>
        <View style={styles.deviceInfo}>
          <Text style={styles.deviceName}>{session.deviceName}</Text>
          {session.isCurrent && (
            <View style={styles.currentSessionBadge}>
              <Text style={styles.currentSessionText}>Current Session</Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.sessionDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Location: </Text>
          <Text style={styles.detailValue}>{session.location}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Last Active: </Text>
          <Text style={styles.detailValue}>{session.lastActive}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Status: </Text>
          <Text style={[styles.detailValue, styles.statusActive]}>{session.status}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.logOutButton}
        onPress={() => handleLogOut(session.deviceName, session.isCurrent)}
      >
        <Text style={styles.logOutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.title}>Active Sessions</Text>
        <Text style={styles.description}>
          Manage your account activity. Review devices currently signed in and log out of any you don't recognize.
        </Text>
      </View>

      {/* Sessions List */}
      <View style={styles.sessionsContainer}>
        {sessionsData.map(renderSessionItem)}
      </View>
    </ScrollView>
  );
};

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
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  sessionsContainer: {
    paddingHorizontal: 20,
  },
  sessionItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
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
    marginBottom: 16,
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
  },
  currentSessionBadge: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  currentSessionText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  sessionDetails: {
    marginBottom: 20,
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
    color: '#28a745',
    fontWeight: '600',
  },
  logOutButton: {
    backgroundColor: '#8B4513',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  logOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Logout;