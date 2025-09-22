import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Animated
} from 'react-native';
import  Hwhatsapp  from '../../Assets/Images/hwhatsapp.svg';
import  Termscondition from '../../Assets/Images/termscondition.svg';
const Support = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0); 

  const faqData = [
    {
      id: 0,
      question: 'How do I add a new payment method?',
      answer: `How to add a New Payment Method:
Go to Menu → Wallet → Add Payment Method
Select your preferred option: Credit/Debit Card, Google Pay, Apple Pay, or Bank Transfer
Enter your details and tap Save
You can also save a new payment option directly while checking out – just tick Save this payment method and it will be added to your Wallet.`
    },
    {
      id: 1,
      question: 'Can I use multiple payment methods?',
      answer: 'Yes, you can add and use multiple payment methods. You can switch between them during checkout or manage them in your Wallet settings.'
    },
    {
      id: 2,
      question: 'How do I update the app?',
      answer: 'To update the app, go to your device\'s app store (Google Play Store or Apple App Store), search for the app, and tap "Update" if available.'
    },
    {
      id: 3,
      question: 'What should I do if my payment fails?',
      answer: 'If your payment fails, please check your internet connection, verify your payment details, and ensure you have sufficient funds. Contact support if the issue persists.'
    },
    {
      id: 4,
      question: 'Is my data secure?',
      answer: 'Yes, we use industry-standard encryption and security measures to protect your personal and payment information. Your data is stored securely and never shared with unauthorized parties.'
    },
    {
      id: 5,
      question: 'How do I contact support?',
      answer: 'You can contact our support team through the Chat on WhatsApp option below, or email us directly. We\'re here to help 24/7.'
    },
    {
      id: 6,
      question: 'Can I use the app on multiple devices?',
      answer: 'Yes, you can use the same account on multiple devices. Just log in with your credentials on any device to access your account.'
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? -1 : id);
  };

  const renderFAQItem = (item) => (
    <View key={item.id} style={styles.faqItem}>
      <TouchableOpacity 
        style={styles.faqHeader}
        onPress={() => toggleFAQ(item.id)}
      >
        <Text style={styles.faqQuestion}>{item.question}</Text>
        <Text style={styles.expandIcon}>
          {expandedFAQ === item.id ? '×' : '+'}
        </Text>
      </TouchableOpacity>
      
      {expandedFAQ === item.id && (
        <View style={styles.faqAnswer}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* FAQs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
        <View style={styles.faqContainer}>
          {faqData.map(renderFAQItem)}
        </View>
      </View>

      {/* Customer Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer Support</Text>
        <TouchableOpacity style={styles.supportOption}>
          <View style={styles.supportContent}>
            
            <Hwhatsapp
  width={25}
  height={25}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.supportText}>Chat on WhatsApp</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Terms & Conditions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms & Conditions</Text>
        <TouchableOpacity style={styles.supportOption}>
          <View style={styles.supportContent}>
          
          <Termscondition
  width={25}
  height={25}
  fill="#648F00"
  style={{ marginRight:13 }}
/>
            <Text style={styles.supportText}>Terms & Conditions</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    width: '100%',
    Radius: 12,
    margin:'auto'
  },
  section: {
    marginBottom: 0,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  faqContainer: {
    paddingHorizontal: 20,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 20,
    marginBottom:-10,
  },
  faqQuestion: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 22,
  },
  expandIcon: {
    fontSize: 25,
    fontWeight: 300,
    color: '#000000',
    marginLeft: 12,
    marginTop:-10,
  },
  faqAnswer: {
    paddingHorizontal:16,
    paddingBottom:16,
    backgroundColor: '#EDF4D9',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  answerText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 20,
    textAlign:'left',
    fontWeight: 400,
  },
  supportOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  supportContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappIcon: {
    fontSize: 20,
    marginRight: 12,
    Color:'#648F00',
  },
  termsIcon: {
    fontSize: 20,
    marginRight: 12,
    
  },
  supportText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
  },
});

export default Support;