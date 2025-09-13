import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const NotificationItem = ({ item }: { item: any }) => (
  <View style={tw`bg-gray-100 rounded-2xl p-4 mb-4`}>
    <View style={tw`flex-row justify-between items-start`}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={tw`w-24 h-9 rounded`}
        resizeMode="cover"
      />
      <Text style={tw`text-xs text-gray-500`}>{item.time}</Text>
    </View>
    <Text style={tw`text-base text-[#1D0303] mt-3`}>{item.text}</Text>
  </View>
);



// --- Main Screen ---
const NotificationScreen: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const notifications = [
    {
      id: '1',
      text: 'Andrew just joined weekend soccer tournament.',
      time: 'Now',
      imageUrl: 'https://placehold.co/91x35/1D0303/FFFFFF?text=Event',
    },
    {
      id: '2',
      text: 'Robert completed the challenge',
      time: '2 mins ago',
      imageUrl: 'https://placehold.co/91x35/064145/FFFFFF?text=Challenge',
    },
    {
      id: '3',
      text: 'Your team "Dhaka Dudes" has a new match scheduled.',
      time: '1 hour ago',
      imageUrl: 'https://placehold.co/91x35/6A3838/FFFFFF?text=Match',
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1 mt-6 bg-white`}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={tw`p-4 flex-row items-center`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
        <Text
          style={tw`text-3xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>
          Notifications
        </Text>
      </View>

      <ScrollView contentContainerStyle={tw`pb-24 px-5`}>
        {/* Notification Toggle */}
        <View
          style={tw`bg-gray-100 rounded-2xl p-4 flex-row justify-between items-center mb-6`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#1D0303"
            />
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] ml-3`}>
              Notification
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#03AA00' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Notification List */}
        {notifications.map(item => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </ScrollView>

    </SafeAreaView>
  );
};

export default NotificationScreen;
