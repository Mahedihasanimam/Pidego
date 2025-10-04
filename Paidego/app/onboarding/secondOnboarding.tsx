import { settingicon } from '@/assets/icons/Icon';
import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons for the back arrow
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const SecondOnboarding: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />

      {/* Header with Back Button */}
      <View style={tw`absolute top-12 left-5 z-10`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-2`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
      </View>

      {/* Main container to space content evenly */}
      <View style={tw`flex-1 justify-around items-center px-7`}>

        <View style={tw`items-center mt-10`}>
        <View style={tw`my-12`}>
         <SvgXml xml={settingicon}/>
        </View>
          <Text
            style={tw`text-center text-[#1D0303] text-3xl font-RoboBold leading-tight`}>
            Host & Manage Event
          </Text>
          <Text
            style={tw`text-center text-[#1D0303] text-lg font-RoboNormal mt-4`}>
            For organizers, Paidego provides powerful tools to create, manage,
            and promote your events to a dedicated community of athletes.
          </Text>
        </View>

        {/* Pagination and Button Section */}
        <View style={tw`w-full`}>
          {/* Page Indicators */}
          <View style={tw`flex-row justify-center items-center my-8`}>
            <View style={tw`w-3 h-3 bg-gray-300 rounded-full mx-2`} />
            <View style={tw`w-3 h-3 bg-[#1D0303] rounded-full mx-2`} />
            <View style={tw`w-3 h-3 bg-gray-300 rounded-full mx-2`} />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={tw`bg-white rounded-xl border border-[#1D0303] py-3.5 items-center`}
            onPress={() => {
              // Navigate to the next screen, e.g., '/home' or '/onboarding-3'
              router.push('/onboarding/firstOnboarding');
            }}>
            <Text style={tw`text-[#1D0303] text-base font-RoboMedium`}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondOnboarding;
