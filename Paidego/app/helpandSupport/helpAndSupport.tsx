import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// --- Reusable Sub-Components ---

const SupportOption = ({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: any;
  title: string;
  subtitle: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={tw`flex-row items-center bg-gray-100 p-4 rounded-xl mb-4`}>
    <Ionicons name={icon} size={24} color="#1D0303" style={tw`mr-4`} />
    <View style={tw`flex-1`}>
      <Text style={tw`text-base font-RoboMedium text-[#1D0303]`}>{title}</Text>
      <Text style={tw`text-sm text-gray-500`}>{subtitle}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={20} color="#1D0303" />
  </TouchableOpacity>
);

// --- Main Screen ---
const HelpAndSupportScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white mt-8`}>
      {/* Header */}
      <View style={tw`p-4 flex-row items-center border-b border-gray-200`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
        <Text
          style={tw`text-2xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>
          Help & Support
        </Text>
      </View>

      <ScrollView contentContainerStyle={tw`p-5`}>
        <Text style={tw`text-lg font-RoboBold text-[#1D0303] mb-2`}>
          Contact Us
        </Text>
        <Text style={tw`text-sm text-gray-600 mb-5`}>
          Have a question? We re here to help. Reach out to us through any of
          the channels below.
        </Text>

        <SupportOption
          icon="mail-outline"
          title="Email Support"
          subtitle="Get a response within 24 hours"
          onPress={() => console.log('Navigate to Email')}
        />

        <SupportOption
          icon="call-outline"
          title="Phone Support"
          subtitle="Available Mon-Fri, 9am-5pm"
          onPress={() => console.log('Initiate Call')}
        />

        <SupportOption
          icon="chatbubble-ellipses-outline"
          title="Live Chat"
          subtitle="Chat with a support agent now"
          onPress={() => console.log('Open Live Chat')}
        />

        <View style={tw`h-px bg-gray-200 my-6`} />

        <Text style={tw`text-lg font-RoboBold text-[#1D0303] mb-2`}>
          Frequently Asked Questions
        </Text>
        <Text style={tw`text-sm text-gray-600 mb-5`}>
          Find answers to common questions about events, payments, and your
          account.
        </Text>

        <SupportOption
          icon="help-circle-outline"
          title="Visit our FAQ page"
          subtitle="Browse topics and find answers"
         
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpAndSupportScreen;
