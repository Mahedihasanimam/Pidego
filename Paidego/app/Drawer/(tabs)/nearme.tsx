import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapEventCard = ({ event }: { event: any }) => (
  <TouchableOpacity
      onPress={() =>router.push('/eventDetails/PlayerEventDetails')}
    style={tw`bg-white rounded-lg shadow-lg w-48 mr-4 overflow-hidden`}>
    <Image source={require('@/assets/images/event.png')} style={tw`w-full h-24`} />
    <View style={tw`p-3`}>
      <Text style={tw`font-RoboMedium text-sm text-[#1D0303]`}>
        {event.title}
      </Text>
      <Text style={tw`font-RoboNormal text-xs text-gray-500 mt-1`}>
        {event.distance}
      </Text>
    </View>
  </TouchableOpacity>
);


// --- Main Screen ---
const NearMeScreen: React.FC = () => {
  const dummyEvents = [
    {
      id: '1',
      title: 'Dhaka Football League',
      distance: '2.5 km away',
      imageUrl: 'https://placehold.co/192x96/1D0303/FFFFFF?text=Football',
      coordinate: { latitude: 23.7539, longitude: 90.3784 },
    },
    {
      id: '2',
      title: 'Gulshan Padel Tournament',
      distance: '3.1 km away',
      imageUrl: 'https://placehold.co/192x96/064145/FFFFFF?text=Padel',
      coordinate: { latitude: 23.7925, longitude: 90.4078 },
    },
    {
      id: '3',
      title: 'Mirpur Cricket Match',
      distance: '5.8 km away',
      imageUrl: 'https://placehold.co/192x96/6A3838/FFFFFF?text=Cricket',
      coordinate: { latitude: 23.8223, longitude: 90.3653 },
    },
  ];

  // Initial region set to Dhaka, Bangladesh
  const initialRegion = {
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`flex-1`}>
        {/* Functional MapView */}
        <MapView style={StyleSheet.absoluteFill} initialRegion={initialRegion}>
          {dummyEvents.map(event => (
            <Marker key={event.id} coordinate={event.coordinate} title={event.title}>
               <Ionicons name="location-sharp" size={32} color="#1D0303" />
            </Marker>
          ))}
        </MapView>

        {/* Search Bar */}
        <View style={tw`absolute top-4 left-5 right-5 z-10`}>
          <View
            style={tw`bg-white rounded-full h-12 px-4 flex-row items-center shadow-xl`}>
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              placeholder="Search by sport, location or prize"
              style={tw`flex-1 ml-2 text-base`}
            />
          </View>
        </View>

        {/* Events Overlay */}
        <View style={tw`absolute bottom-0 left-0 right-0 pb-4`}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`px-5`}>
            {dummyEvents.map(event => (
              <MapEventCard key={event.id} event={event} />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NearMeScreen;

