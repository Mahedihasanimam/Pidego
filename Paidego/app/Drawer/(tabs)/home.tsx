import { filtericon } from '@/assets/icons/Icon';
import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

// --- Reusable Sub-Components ---

const InfoTag = ({ icon, text }: { icon: any; text: string }) => (
  <View
    style={tw`bg-white opacity-80 rounded-md px-2 py-1 flex-row items-center shadow-sm`}>
    <Ionicons name={icon} size={14} color="#1D0303" style={tw`mr-1.5`} />
    <Text style={tw`text-[#1D0303] text-[11px] font-RoboNormal`}>{text}</Text>
  </View>
);

const CancelConfirmationModal = ({
  visible,
  onClose,
  eventName,
}: {
  visible: boolean;
  onClose: () => void;
  eventName: string;
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}>
    <View style={tw`flex-1 justify-center items-center bg-black/50`}>
      <View style={tw`bg-white rounded-2xl p-6 items-center w-4/5`}>
        <Ionicons name="checkmark-circle" size={56} color="green" />
        <Text style={tw`text-lg font-RoboBold text-center mt-4`}>
          Event Cancelled!
        </Text>
        <Text style={tw`text-sm text-gray-600 text-center mt-2`}>
          The event {eventName} has been successfully cancelled.
        </Text>
        <TouchableOpacity
          onPress={onClose}
          style={tw`bg-[#1D0303] rounded-lg px-8 py-3 mt-6`}>
          <Text style={tw`text-white font-RoboMedium`}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const OrganizerEventCard = ({
  event,
  isMenuOpen,
  onMenuPress,
  onEdit,
  onCancel,
}: {
  event: any;
  isMenuOpen: boolean;
  onMenuPress: () => void;
  onEdit: () => void;
  onCancel: () => void;
}) => {
  const router = useRouter();
  const progress = (event.registeredPlayers / event.totalPlayers) * 100;

  const statusStyles = {
    Active: { bg: 'bg-blue-600', text: 'Active' },
    Upcoming: { bg: 'bg-yellow-500', text: 'Upcoming' },
    Completed: { bg: 'bg-green-600', text: 'Completed' },
    pending: { bg: 'bg-red-600', text: 'Pending' },
  };

  const statusStyle = statusStyles[event.status as keyof typeof statusStyles];

  return (
    <TouchableOpacity onPress={() => router.push(`/eventDetails/OrganizationEventDetails?status=${event.status}`)}>
      <ImageBackground
        source={require('@/assets/images/event2.png')}
        style={tw`w-full h-56 rounded-2xl overflow-hidden mb-6`}
        resizeMode="cover">
        <View style={tw`flex-1 justify-between p-3 bg-black/30`}>
          {/* Top Section: Title & Options */}
          <View style={tw`flex-row justify-between items-start`}>
            <Text style={tw`text-white text-lg font-RoboBold w-4/5`}>
              {event.title}
            </Text>
            <View>
              <TouchableOpacity onPress={onMenuPress} style={tw`p-1`}>
                <Ionicons name="ellipsis-vertical" size={20} color="white" />
              </TouchableOpacity>
              {isMenuOpen && (
                <View
                  style={tw`absolute top-8 right-0 bg-white rounded-lg shadow-xl z-10 w-36`}>
                  <TouchableOpacity
                    onPress={onEdit}
                    style={tw`p-3 flex-row items-center border-b border-gray-200`}>
                    <Ionicons
                      name="create-outline"
                      size={16}
                      color="black"
                      style={tw`mr-2`}
                    />
                    <Text>Edit Event</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={onCancel}
                    style={tw`p-3 flex-row items-center`}>
                    <Ionicons
                      name="trash-outline"
                      size={16}
                      color="red"
                      style={tw`mr-2`}
                    />
                    <Text style={tw`text-red-500`}>Cancel Event</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          {/* Middle Section: Info Tags */}
          <View>
            <View style={tw`flex-row flex-wrap gap-2`}>
              <InfoTag icon="calendar-outline" text={event.date} />
              <InfoTag icon="location-outline" text={event.location} />
              <InfoTag icon="people-outline" text={event.type} />
            </View>
            <View style={tw`mt-2`}>
              <InfoTag
                icon="time-outline"
                text={`Sat, Aug 30, 2025 ${event.time}`}
              />
            </View>
          </View>

          {/* Bottom Section: Progress & Status */}
          <View>
            <Text style={tw`text-white text-xs mb-1`}>
              {event.registeredPlayers}/{event.totalPlayers} players registered
            </Text>
            <View style={tw`w-full bg-gray-300 rounded-full h-1.5`}>
              <View
                style={tw.style(`bg-red-500 h-1.5 rounded-full`, {
                  width: `${progress}%`,
                })}
              />
            </View>
            <View style={tw`flex-row justify-between items-center mt-2`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-white text-sm font-RoboMedium`}>
                  {event.entryFee} entry
                </Text>
                <View style={tw`w-1 h-1 bg-white rounded-full mx-2`} />
                <Text style={tw`text-white text-sm font-RoboMedium`}>
                  {event.prize} prize
                </Text>
              </View>
              <View style={tw`px-3 py-1.5 rounded-full ${statusStyle.bg}`}>
                <Text style={tw`text-white text-xs font-RoboBold`}>
                  {statusStyle.text}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};



// --- Main Screen ---
const OrganizerHomeScreen: React.FC = () => {
  const router = useRouter();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const [cancelledEventTitle, setCancelledEventTitle] = useState('');

  const events = [
    {
      id: '0',
      title: 'Dhaka Football League',
      imageUrl: 'https://placehold.co/400x223/DA0000/FFFFFF?text=Active',
      date: 'Aug 30, 2025',
      time: '2:00 pm',
      location: 'Motijheel, Dhaka',
      type: 'Single',
      entryFee: '$20',
      prize: '$250',
      registeredPlayers: 8,
      totalPlayers: 14,
      status: 'pending',
    },
    {
      id: '3',
      title: 'Gulshan Padel Tournament',
      imageUrl: 'https://placehold.co/400x223/028400/FFFFFF?text=Completed',
      date: 'Aug 1, 2025',
      time: '9:00 am',
      location: 'Gulshan Club',
      type: 'Single',
      entryFee: '$30',
      prize: '$500',
      registeredPlayers: 16,
      totalPlayers: 16,
      status: 'Completed',
    },
    {
      id: '1',
      title: 'Dhaka Football League',
      imageUrl: 'https://placehold.co/400x223/DA0000/FFFFFF?text=Active',
      date: 'Aug 30, 2025',
      time: '2:00 pm',
      location: 'Motijheel, Dhaka',
      type: 'Single',
      entryFee: '$20',
      prize: '$250',
      registeredPlayers: 8,
      totalPlayers: 14,
      status: 'Active',
    },
    {
      id: '2',
      title: 'Dhaka Cricket Challenge',
      imageUrl: 'https://placehold.co/400x223/DAC800/FFFFFF?text=Upcoming',
      date: 'Sep 15, 2025',
      time: '10:00 am',
      location: 'Mirpur Stadium',
      type: 'Team',
      entryFee: '$50',
      prize: '$1000',
      registeredPlayers: 5,
      totalPlayers: 12,
      status: 'Upcoming',
    },

  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>

      <CancelConfirmationModal
        visible={isCancelModalVisible}
        onClose={() => setCancelModalVisible(false)}
        eventName={cancelledEventTitle}
      />
      <View style={tw`p-4 items-center mt-6`}>
        <Text style={tw`text-3xl font-RoboBold text-[#1D0303]`}>My Events</Text>
      </View>
      <View style={tw`flex-row mb-6 px-4`}>
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
      <ScrollView contentContainerStyle={tw`pb-4  mb-8 px-5`}>
        {events.map(event => (
          <OrganizerEventCard
            key={event.id}
            event={event}
            isMenuOpen={openMenuId === event.id}
            onMenuPress={() => setOpenMenuId(openMenuId === event.id ? null : event.id)}
            onEdit={() => {
              setOpenMenuId(null);
              router.push(`/eventDetails/editEvent`);
            }}
            onCancel={() => {
              setOpenMenuId(null);
              setCancelledEventTitle(event.title);
              setCancelModalVisible(true);
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrganizerHomeScreen;

