import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const InfoRow = ({ icon, text }: { icon: any; text: string }) => (
  <View style={tw`flex-row items-center`}>
    <Ionicons name={icon} size={14} color="#1D0303" style={tw`w-5`} />
    <Text style={tw`text-xs font-RoboNormal text-black ml-1`}>{text}</Text>
  </View>
);

// --- Main Screen ---
const PlayerEventDetails: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>

      {/* Custom Header */}
      <View style={tw`px-5 pt-4 pb-3 border-b border-gray-200 mt-4`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`absolute top-4 left-5 z-10 p-1`}>
            <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
        <Text style={tw`text-center text-2xl font-RoboBold text-[#1D0303]`}>
          Dhaka Football League
        </Text>
      </View>
      
      <ScrollView contentContainerStyle={tw`pb-24 px-5`}>
        {/* Organizer Info */}
        <View style={tw`mt-4`}>
          <Text style={tw`text-base font-RoboNormal text-[#1D0303]`}>Event Organizer:</Text>
          <View style={tw`flex-row items-center justify-between mt-2`}>
            <View style={tw`flex-row items-center`}>
              <Image source={require('@/assets/images/avater.png')} style={tw`w-7 h-7 rounded-full`} />
              <Text style={tw`text-sm font-RoboNormal text-[#1D0303] ml-2`}>@dhakasport</Text>
            </View>
            <TouchableOpacity style={tw`bg-[#DD2A7B] rounded-lg px-4 py-2`}>
              <Text style={tw`text-white text-xs font-RoboBold`}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Event Image */}
        <Image source={require('@/assets/images/event2.png')} style={tw`w-full h-40 rounded-xl my-4`} />
        
        {/* Event Details Grid */}
        <View style={tw`flex-row flex-wrap justify-between gap-y-2`}>
            <View style={tw`w-[48%]`}>
                <InfoRow icon="football-outline" text="Football" />
            </View>
            <View style={tw`w-[48%]`}>
                <InfoRow icon="location-outline" text="Motijheel, Dhaka" />
            </View>
            <View style={tw`w-full`}>
                <InfoRow icon="calendar-outline" text="Sat, Aug 30, 2:00 pm to Fri, Sep 05, 2:00 pm" />
            </View>
            <View style={tw`w-[48%]`}>
                <InfoRow icon="people-outline" text="8/14 players" />
            </View>
             <View style={tw`w-[48%]`}>
                <InfoRow icon="cash-outline" text="$20 entry fee" />
            </View>
            <View style={tw`w-[48%]`}>
                <InfoRow icon="trophy-outline" text="$500 prize" />
            </View>
        </View>
        
        <View style={tw`h-px bg-gray-200 my-5`} />

        {/* Description */}
        <View>
          <Text style={tw`text-lg font-RoboBold text-[#1D0303]`}>Description</Text>
          <Text style={tw`text-sm font-RoboNormal text-black mt-2 leading-5`}>
            Join us for a weekend of competitive soccer matches. Teams will be formed based on player skills to ensure fair play. The tournament will follow a round-robin format with knockout stages.
          </Text>
        </View>

        {/* Rules & Guidelines */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-lg font-RoboBold text-[#1D0303]`}>Rules & Guidelines</Text>
          <View style={tw`bg-gray-100 rounded-lg p-3 mt-2`}>
            <Text style={tw`text-xs text-black leading-5`}>
              1. Each match will be 30 minutes with two 15-minute halves.{'\n'}
              2. Standard FIFA rules apply with no offsides.{'\n'}
              3. Teams will be randomly assigned to ensure fairness.{'\n'}
              4. Shin guards are mandatory for all players.{'\n'}
              5. The referee s decision is final in all matters.
            </Text>
          </View>
        </View>

        {/* Team Selection */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-lg font-RoboBold text-[#1D0303]`}>Select Your Team</Text>
          <TouchableOpacity style={tw`bg-gray-100 rounded-lg h-12 px-3 flex-row justify-between items-center mt-2`}>
            <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>-- Choose a team --</Text>
            <Ionicons name="chevron-down-outline" size={20} color="#1D0303" />
          </TouchableOpacity>
        </View>

        <View style={tw`h-px bg-gray-200 my-5`} />

        {/* Payment Info & Actions */}
        <View>
          <Text style={tw`text-xs text-gray-500`}>
            The entry fee of $10 will be deducted from your wallet and held in escrow by Paidego.
          </Text>
          <View style={tw`flex-row justify-end items-center mt-4`}>
            <TouchableOpacity style={tw`border border-[#1D0303] rounded-lg px-6 py-3 mr-3`}>
              <Text style={tw`text-xs font-RoboBold text-[#1D0303]`}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.push('/eventDetails/eventOverview')} style={tw`bg-[#1D0303] rounded-lg px-6 py-3`}>
              <Text style={tw`text-white text-xs font-RoboBold`}>Pay $10 & Join</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayerEventDetails;
