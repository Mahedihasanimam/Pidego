import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// --- Reusable Sub-Components ---

const PlayerListItem = ({ player }: { player: any }) => (
  <View>
    <View style={tw`flex-row items-center py-3`}>
      <View
        style={tw`w-11 h-11 rounded-full justify-center items-center mr-4 bg-[${player.avatarBg}]`}>
        <Text style={tw`text-[${player.avatarColor}] text-base font-RoboBold`}>
          {player.initials}
        </Text>
      </View>
      <View>
        <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>
          {player.name}
        </Text>
        <Text style={tw`text-xs font-RoboNormal text-gray-600 mt-1`}>
          Joined: {player.joined}
        </Text>
      </View>
    </View>
    <View style={tw`h-px bg-gray-200`} />
  </View>
);

const WinnerListItem = ({ winner }: { winner: any }) => (
  <View>
    <View style={tw`flex-row items-center justify-between py-3`}>
      <View style={tw`flex-row items-cente  flex-1`}>
        <View
          style={tw`w-11 h-11 rounded-full justify-center items-center mr-4 bg-[${winner.avatarBg}]`}>
          <Text style={tw`text-[${winner.avatarColor}] text-base font-RoboBold`}>
            {winner.rank}
          </Text>
        </View>
        <View style={tw`max-w-md mx-auto`}>
          <TouchableOpacity onPress={() => router.push("/modals/winner_selection")} style={tw`text-sm font-RoboMedium bg-[#1D0303]  rounded-md `}>
            <Text style={tw`text-white font-RoboMedium px-6  py-2`}>Select Winner</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={tw`text-sm font-RoboBold text-[#1D0303]`}>
        {winner.prize}
      </Text>
    </View>
    <View style={tw`h-px bg-gray-200`} />
  </View>
);

const StatCard = ({ icon, value, label }: { icon: any, value: string, label: string }) => (
  <View style={tw`bg-white rounded-lg p-4 items-center justify-center shadow-md w-[31%]`}>
    <Ionicons name={icon} size={28} color="#1D0303" />
    <Text style={tw`text-lg font-RoboBold text-[#1D0303] mt-2`}>{value}</Text>
    <Text style={tw`text-xs font-RoboNormal text-gray-600 text-center mt-1`}>{label}</Text>
  </View>
);


// --- Main Screen ---
const EventOverview: React.FC = () => {
  const router = useRouter();

  const players = [
    { name: 'Alice Smith', joined: 'Jun 5, 2023', initials: 'AS', avatarBg: '#B1FAB0', avatarColor: '#03AA00' },
    { name: 'John Doe', joined: 'Jun 6, 2023', initials: 'JD', avatarBg: '#B0E0FA', avatarColor: '#007BFF' },
    { name: 'Emily Jones', joined: 'Jun 7, 2023', initials: 'EJ', avatarBg: '#FAB0B0', avatarColor: '#FF0000' },
    { name: 'Michael Brown', joined: 'Jun 8, 2023', initials: 'MB', avatarBg: '#FFFAB0', avatarColor: '#E4D00A' },
  ];

  const winners = [
    { rank: 1, name: 'Alice Smith', wins: 12, points: 38, prize: '$140', avatarBg: '#FAF4B0', avatarColor: '#F0DC00' },
    { rank: 2, name: 'John Doe', wins: 9, points: 32, prize: '$84', avatarBg: '#E8E8E8', avatarColor: '#8C8C8C' },
    { rank: 3, name: 'Emily Jones', wins: 7, points: 28, prize: '$56', avatarBg: '#FFD8B5', avatarColor: '#FF8000' },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={tw`flex-row items-center p-4`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`pb-10 px-5`}>
        {/* Event Title Card */}
        <View style={tw`bg-[#E8E7E7]/20 border border-[#E8E7E7] shadow-xl  shadow-[#FFFFFF] rounded-xl p-4 mb-6`}>
          <Text style={tw`text-xl font-RoboBold text-[#1D0303] mb-3 text-center font-semibold`}>Dhaka Football League</Text>

          <View style={tw`flex-row flex-wrap justify-between`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Ionicons name="calendar-outline" size={16} color="#1D0303" style={tw`mr-2`} />
              <Text style={tw`text-xs font-RoboNormal text-gray-700`}>Aug 30, 2025 • 2:00 PM</Text>
            </View>
            <View style={tw`flex-row items-center mb-2`}>
              <Ionicons name="location-outline" size={16} color="#1D0303" style={tw`mr-2`} />
              <Text style={tw`text-xs font-RoboNormal text-gray-700`}>Dhaka</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="trophy-outline" size={16} color="#1D0303" style={tw`mr-2`} />
              <Text style={tw`text-xs font-RoboNormal text-gray-700`}>$500 Prize Pool</Text>
            </View>
          </View>
        </View>

        {/* Joined Players Card */}
        <View style={tw`bg-[#E8E7E7]/20 border border-[#E8E7E7] shadow-xl  shadow-[#FFFFFF] rounded-xl  p-4 mb-6`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <Text style={tw`text-base font-RoboMedium text-[#1D0303]`}>Joined Players</Text>
            <Text style={tw`text-xs font-RoboNormal text-gray-600`}>6/15</Text>
          </View>
          <View style={tw`h-px bg-gray-200 mb-2`} />
          {players.map((player, index) => (
            <PlayerListItem key={index} player={player} />
          ))}
        </View>

        {/* Winners Card */}
        <View style={tw`bbg-[#E8E7E7]/20 border border-[#E8E7E7] shadow-xl  shadow-[#FFFFFF] rounded-xl  p-4 mb-6`}>
          <Text style={tw`text-base font-RoboMedium text-[#1D0303] mb-2`}>Top 3 Winners</Text>
          <View style={tw`h-px bg-gray-200 mb-2`} />
          {winners.map((winner) => (
            <WinnerListItem key={winner.rank} winner={winner} />
          ))}
        </View>

        {/* Event Status Section */}
        <View style={tw`bbg-[#E8E7E7]/20 border border-[#E8E7E7] shadow-xl  shadow-[#FFFFFF] rounded-xl  p-4`}>
          <Text style={tw`text-base font-RoboMedium text-[#1D0303] mb-2`}>Event Status</Text>
          <View style={tw`h-px bg-gray-200 mb-4`} />
          <View style={tw`flex-row justify-between`}>
            <StatCard icon="people" value="6/15" label="Players Registered" />
            <StatCard icon="cash" value="$500" label="Prize Pool" />
            <StatCard icon="eye" value="124" label="Views" />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default EventOverview;
