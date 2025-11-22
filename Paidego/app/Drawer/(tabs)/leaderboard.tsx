import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// --- Reusable Sub-Components ---

const PodiumItem = ({ player, rank }: { player: any; rank: number }) => {
  const isFirst = rank === 1;
  const rankStyles = {
    1: {
      container: 'bottom-6',
      avatarSize: 'w-16 h-16',
      border: 'border-yellow-400',
      icon: 'trophy',
      iconColor: '#F0DC00',
      textColor: 'text-yellow-600',
    },
    2: {
      container: 'top-0',
      avatarSize: 'w-12 h-12',
      border: 'border-gray-400',
      icon: 'trophy-outline',
      iconColor: '#8C8C8C',
      textColor: 'text-gray-500',
    },
    3: {
      container: 'top-0',
      avatarSize: 'w-12 h-12',
      border: 'border-orange-400',
      icon: 'trophy-outline',
      iconColor: '#FF8000',
      textColor: 'text-orange-600',
    },
  };

  const style = rankStyles[rank as keyof typeof rankStyles];

  return (
    <View style={tw`items-center relative ${style.container} mx-4`}>
      {isFirst && <Ionicons name={style.icon as any} size={32} color={style.iconColor} style={tw`mb-2`} />}
      <Image
        source={require('@/assets/images/avater.png')}
        style={tw`${style.avatarSize} rounded-full border-4 ${style.border}`}
      />
      <Text style={tw`text-sm font-RoboBold text-[#1D0303] mt-2`}>
        {player.name}
      </Text>
      <Text style={tw`text-xs font-RoboMedium ${style.textColor}`}>
        {player.earnings}
      </Text>
    </View>
  );
};

const LeaderboardListItem = ({ player }: { player: any }) => (
  <View>
    <View style={tw`flex-row items-center justify-between py-3`}>
      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-base font-RoboMedium text-gray-500 w-8`}>
          #{player.rank}
        </Text>
        <Image
          source={require('@/assets/images/avater.png')}
          style={tw`w-10 h-10 rounded-full mr-3`}
        />
        <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>
          {player.name}
        </Text>
      </View>
      <Text style={tw`text-sm font-RoboBold text-green-600`}>
        {player.earnings}
      </Text>
    </View>
    <View style={tw`h-px bg-gray-200`} />
  </View>
);


// --- Main Screen ---
const LeaderboardScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('earnings');
  const [selectedGame, setSelectedGame] = useState('All Games');
  const [openGameDropdown, setOpenGameDropdown] = useState(false);
  const gameOptions = ['All Games', 'Padel', 'Badminton', 'Cricket'];
  const [friendQuery, setFriendQuery] = useState('');

  const podiumPlayers = [
    { rank: 2, name: '@winner98', earnings: '$1200', avatar: 'https://placehold.co/60x60/E8E8E8/8C8C8C' },
    { rank: 1, name: '@winner99', earnings: '$1500', avatar: 'https://placehold.co/80x80/FAF4B0/F0DC00' },
    { rank: 3, name: '@winner97', earnings: '$1000', avatar: 'https://placehold.co/60x60/FFD8B5/FF8000' },
  ];

  const otherPlayers = [
    { rank: 4, name: '@winner96', earnings: '$950', avatar: 'https://placehold.co/40x40' },
    { rank: 5, name: '@winner95', earnings: '$900', avatar: 'https://placehold.co/40x40' },
    { rank: 6, name: '@winner94', earnings: '$850', avatar: 'https://placehold.co/40x40' },
    { rank: 7, name: '@winner93', earnings: '$800', avatar: 'https://placehold.co/40x40' },
    { rank: 8, name: '@winner92', earnings: '$750', avatar: 'https://placehold.co/40x40' },
    { rank: 9, name: '@winner91', earnings: '$700', avatar: 'https://placehold.co/40x40' },
    { rank: 10, name: '@winner90', earnings: '$650', avatar: 'https://placehold.co/40x40' },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`p-4 items-center flex-row mt-6 bg-gray-200 rounded-lg mx-2 mb-4`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
        <Text style={tw`text-3xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>Leaderboard</Text>
      </View>

      <ScrollView contentContainerStyle={tw`pb-4`}>
        <View style={tw`px-5 mb-4`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-2xl font-RoboBold text-[#1D0303]`}>Lists</Text>

            <View>
              <TouchableOpacity
                onPress={() => setOpenGameDropdown(!openGameDropdown)}
                style={tw`self-start w-44 flex-row justify-between items-center p-3 bg-white rounded-lg border border-gray-200`}>
                <Text style={tw`text-sm font-RoboMedium text-gray-700`}>{selectedGame}</Text>
                <Ionicons name={openGameDropdown ? 'chevron-up' : 'chevron-down'} size={18} color="#1D0303" />
              </TouchableOpacity>
              {openGameDropdown && (
                <View style={tw`self-start w-44 bg-white rounded-lg mt-2 z-10 absolute top-10 border border-gray-200 overflow-hidden`}>
                  {gameOptions.map((g) => (
                    <TouchableOpacity
                      key={g}
                      onPress={() => {
                        setSelectedGame(g);
                        setOpenGameDropdown(false);
                      }}
                      style={tw`px-4 py-3 border-b border-gray-100`}>
                      <Text style={tw`text-sm font-RoboNormal text-gray-700`}>{g}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
          {/* Friends search input below list section */}
          <View style={tw` mt-4 `}>
            <Text style={tw`text-sm font-RoboMedium text-gray-600 mb-2`}>Search Friends</Text>
            <View style={tw`flex-row items-center bg-white rounded-lg border border-gray-200 px-3 py-2`}>
              <Ionicons name="search" size={18} color="#9CA3AF" />
              <TextInput
                value={friendQuery}
                onChangeText={setFriendQuery}
                onFocus={() => router.push('/screens/SearchPage')}
                placeholder="Search by @username or name"
                placeholderTextColor="#9CA3AF"
                style={tw`ml-3 flex-1 text-sm`}
              />
              {friendQuery.length > 0 && (
                <TouchableOpacity onPress={() => setFriendQuery('')} style={tw`p-1`}>
                  <Ionicons name="close" size={18} color="#9CA3AF" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <View style={tw`bg-white shadow rounded-2xl p-4  mx-5`}>
          {/* Tabs */}
          <View style={tw`flex-row mb-8`}>
            <TouchableOpacity onPress={() => setActiveTab('earnings')} style={tw`py-2 px-4 rounded-lg ${activeTab === 'earnings' ? 'bg-gray-200' : ''}`}>
              <Text style={tw`font-RoboMedium text-xs ${activeTab === 'earnings' ? 'text-[#1D0303]' : 'text-gray-500'}`}>By Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('events')} style={tw`py-2 px-4 rounded-lg ml-2 ${activeTab === 'events' ? 'bg-gray-200' : ''}`}>
              <Text style={tw`font-RoboMedium text-xs ${activeTab === 'events' ? 'text-[#1D0303]' : 'text-gray-500'}`}>By Events Joined</Text>
            </TouchableOpacity>
          </View>

          {/* Podium */}
          <View style={tw`flex-row justify-center items-end h-48 `}>
            {podiumPlayers.map(player => (
              <PodiumItem key={player.rank} player={player} rank={player.rank} />
            ))}
          </View>

          {/* Leaderboard List */}
          <View style={tw`mt-4`}>
            {otherPlayers.map(player => (
              <LeaderboardListItem key={player.rank} player={player} />
            ))}
          </View>

        </View>

        <TouchableOpacity style={tw`mt-6 items-center self-center bg-[#1D0303] rounded-lg px-4 py-2`}>
          <Text style={tw`text-sm font-RoboMedium text-white`}>Load More</Text>
        </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
