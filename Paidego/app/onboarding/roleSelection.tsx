import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const RoleSelection: React.FC = () => {
  const router = useRouter();

  // Handler for selecting a role
  const handleSelectRole = (role: 'player' | 'organizer') => {
    // Navigate to the next step based on the selected role
    if (role === 'player') {
      router.push('/auth/signIn?role=player'); 
    } else {
      router.push('/auth/signIn?role=organizer'); 
    }
  }; 

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />

      {/* Header with Back Button */}
      <View style={tw`absolute top-12 left-5 z-10`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-2`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
      </View>

      {/* Main container */}
      <View style={tw`flex-1 justify-center items-center px-5`}>
        <Text style={tw`text-3xl font-RoboBold text-[#1D0303] mb-10`}>
          Select Your Role
        </Text>

        {/* Player Role Card */}
        <TouchableOpacity
          style={tw`bg-[#EAEBEB] rounded-2xl p-6 flex-row items-center w-full mb-6`}
          onPress={() => handleSelectRole('player')}>
          <View
            style={tw`w-14 h-14 bg-[#B6B6B6] rounded-full justify-center items-center mr-4`}>
            <Ionicons name="person" size={28} color="#1D0303" />
          </View>
          <View style={tw`flex-1`}>
            <Text style={tw`text-xl font-RoboMedium text-[#1D0303]`}>
              Player
            </Text>
            <Text style={tw`text-sm font-RoboNormal text-[#1D0303] mt-1`}>
              Join competitions, pay entry fees, view results, and receive
              winnings.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Organizer Role Card */}
        <TouchableOpacity
          style={tw`bg-[#EAEBEB] rounded-2xl p-6 flex-row items-center w-full`}
          onPress={() => handleSelectRole('organizer')}>
          <View
            style={tw`w-14 h-14 bg-[#B6B6B6] rounded-full justify-center items-center mr-4`}>
            <Ionicons name="briefcase" size={28} color="#1D0303" />
          </View>
          <View style={tw`flex-1`}>
            <Text style={tw`text-xl font-RoboMedium text-[#1D0303]`}>
              Organizer
            </Text>
            <Text style={tw`text-sm font-RoboNormal text-[#1D0303] mt-1`}>
              Create competitions, set entry fees & prizes, manage
              participants.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RoleSelection;
