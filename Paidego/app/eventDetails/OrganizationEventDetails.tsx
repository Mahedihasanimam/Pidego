import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// --- Reusable Sub-Components ---

const InfoRow = ({ icon, text }: { icon: any; text: string }) => (
  <View style={tw`flex-row items-center`}>
    <Ionicons name={icon} size={14} color="#1D0303" style={tw`w-5`} />
    <Text style={tw`text-xs font-RoboNormal text-black ml-1`}>{text}</Text>
  </View>
);

// --- Main Screen ---
const OrganizationEventDetails: React.FC = () => {


  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>


      {/* Custom Header */}
      <View style={tw`p-4 mt-4 flex-row items-center border-b border-gray-200`}>
        <TouchableOpacity onPress={()=>router.back()} style={tw` p-2 mr-2 `}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
        <Text
          style={tw`text-2xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>
          Dhaka Football League
        </Text>
      </View>

      <ScrollView contentContainerStyle={tw`pb-4 mb-12 px-5`}>
        {/* Event Image */}
        <Image
          source={require('@/assets/images/event2.png')}
          style={tw`w-full h-40 rounded-xl my-4`}
        />

        {/* Event Details Grid */}
        <View style={tw`flex-row flex-wrap justify-between gap-y-2`}>
          <View style={tw`w-[48%]`}>
            <InfoRow icon="football-outline" text="Football" />
          </View>
          <View style={tw`w-[48%]`}>
            <InfoRow icon="location-outline" text="Motijheel, Dhaka" />
          </View>
          <View style={tw`w-full`}>
            <InfoRow icon="calendar-outline" text="Sat, Aug 30, 2025 2:00 pm" />
          </View>
          <View style={tw`w-[48%]`}>
            <InfoRow icon="people-outline" text="8/14 players" />
          </View>
          <View style={tw`w-[48%]`}>
            <InfoRow icon="cash-outline" text="$20 entry fee" />
          </View>
          <View style={tw`w-[48%]`}>
            <InfoRow icon="trophy-outline" text="$250 prize" />
          </View>
        </View>

        <View style={tw`h-px bg-gray-200 my-5`} />
        
        {/* Event Status */}
        <View style={tw`flex-row`}>
            <View style={tw`px-3 py-1.5 rounded-full bg-blue-600`}>
                <Text style={tw`text-white text-xs font-RoboBold`}>Upcoming</Text>
            </View>
        </View>

        {/* Description */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-lg font-RoboBold text-[#1D0303]`}>Description</Text>
          <Text style={tw`text-sm font-RoboNormal text-black mt-2 leading-5`}>
            Join us for a weekend of competitive soccer matches. Teams will be
            formed based on player skills to ensure fair play. The tournament
            will follow a round-robin format with knockout stages.
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
              5. The referees decision is final in all matters.
            </Text>
          </View>
        </View>
       {/* Action Buttons Footer */}
      <View style={tw`px-5 py-3 mt-6 flex-row justify-end`}>
        <TouchableOpacity style={tw`border border-[#1D0303] rounded-lg px-6 py-3 mr-3`}>
            <Text style={tw`text-xs font-RoboBold text-[#1D0303]`}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/eventDetails/eventOverview")} style={tw`bg-[#1D0303] rounded-lg px-6 py-3 mr-3`}>
            <Text style={tw`text-white text-xs font-RoboBold`}>View Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-[#1D0303] rounded-lg px-6 py-3`}>
            <Text style={tw`text-white text-xs font-RoboBold`}>Edit Event</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default OrganizationEventDetails;
