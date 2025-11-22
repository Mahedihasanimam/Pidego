import { filtericon } from '@/assets/icons/Icon';
import tw from '@/assets/lib/tailwind';
import PlayerEventCard from '@/components/PlayerEventCard';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SvgXml } from 'react-native-svg';




// Bottom Navigation Bar Component


// --- Main Screen ---
const HomeScreen: React.FC = () => {
  const events = [
    {
      title: 'Dhaka Football League',
      sport: 'Football',
      prize: '$500',
      date: 'Aug 30, 2025',
      format: '5-a-side',
      type: 'Team',
      entryFee: '$10 Entry',
      spotsLeft: '6/15',
      imageUrl: 'https://placehold.co/400x223/064145/FFFFFF?text=Cricket',
    },
    {
      title: 'Dhaka Cricket League',
      sport: 'Cricket',
      prize: '$500',
      date: 'Aug 30, 2025',
      format: '5-a-side',
      type: 'Single',
      entryFee: '$10 Entry',
      spotsLeft: '6/15',
      imageUrl: 'https://placehold.co/400x223/064145/FFFFFF?text=Cricket',
    },
    {
      title: 'Dhaka Hockey League',
      sport: 'Hockey',
      prize: '$500',
      date: 'Aug 30, 2025',
      format: '5-a-side',
      type: 'Team',
      entryFee: '$10 Entry',
      spotsLeft: '6/15',
      imageUrl: 'https://placehold.co/400x223/6A3838/FFFFFF?text=Hockey',
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={tw`pb-4 px-5`}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`mt-8 mb-4`}>
          <View style={tw`flex-row items-center mb-1`}>
            <Ionicons name="location-outline" size={18} color="#1D0303" />
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] ml-1`}>
              Dhaka, Bangladesh
            </Text>
          </View>
          <Text style={tw`text-3xl font-RoboBold text-[#1D0303]`}>
            Find Your Game
          </Text>
          <Text style={tw`text-sm font-RoboNormal text-[#1D0303] mt-1`}>
            Friday, August 22, 2025
          </Text>
        </View>

        {/* Search and Filter */}
        <View style={tw`flex-row mb-6`}>
          <View
            style={tw`flex-1 flex-row items-center border border-[#6A3838] rounded-xl h-10 px-3`}>
            <Ionicons name="search-outline" size={20} color="#6A3838" />
            <TextInput
              style={tw`flex-1 ml-2 text-base`}
              placeholder="Search..."
              placeholderTextColor="#1D030380"
            />
          </View>
          <TouchableOpacity
            style={tw`  justify-center items-center ml-3`}>
            <SvgXml xml={filtericon} />
          </TouchableOpacity>



        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex-row mb-4  `}>
          <TouchableOpacity
            style={tw`  justify-center items-center ml-3 bg-[#1D0303] rounded-lg px-4 py-2`}>
            <Text style={tw`text-sm font-RoboMedium text-white`}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`  justify-center items-center ml-3 bg-transparent border rounded-lg px-4 py-2`}>
            <Text style={tw`text-sm font-RoboMedium text-[#1D0303] font-semibold`}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`  justify-center items-center ml-3 bg-transparent border rounded-lg px-4 py-2`}>
            <Text style={tw`text-sm font-RoboMedium text-[#1D0303] font-semibold`}>Tommorow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`  justify-center items-center ml-3 bg-transparent border rounded-lg px-4 py-2`}>
            <Text style={tw`text-sm font-RoboMedium text-[#1D0303] font-semibold`}>Weekend</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Event List */}
        {events.map((event, index) => (
          <PlayerEventCard key={index} event={event} />
        ))}
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
