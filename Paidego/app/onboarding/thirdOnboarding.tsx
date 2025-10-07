import { dollericon } from '@/assets/icons/Icon';
import tw from '@/assets/lib/tailwind';
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

const ThirdOnboarding: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />


      {/* Main container to space content evenly */}
      <View style={tw`flex-1 justify-around items-center px-7`}>
        {/* Logo Section */}

        {/* Text Section */}
        <View style={tw`items-center mt-10`}>
          <View style={tw`my-12`}>
            <SvgXml xml={dollericon} />
          </View>
          <Text
            style={tw`text-center text-[#1D0303] text-3xl font-RoboBold leading-tight`}>
            Compete & Get Paid
          </Text>
          <Text
            style={tw`text-center text-[#1D0303] text-lg font-RoboNormal mt-4`}>
            Enjoy a transparent and secure payment system. Pay entry fees and
            receive your prize money directly through the app.
          </Text>
        </View>

        {/* Pagination and Button Section */}
        <View style={tw`w-full`}>
          {/* Page Indicators */}
          <View style={tw`flex-row justify-center items-center my-8`}>
            <View style={tw`w-3 h-3 bg-[#1D0303] rounded-full mx-2`} />
            <View style={tw`w-3 h-3 bg-gray-300 rounded-full mx-2`} />
            <View style={tw`w-3 h-3 bg-gray-300 rounded-full mx-2`} />
          </View>

          {/* Get Started Button */}
          <TouchableOpacity
            style={tw`bg-white rounded-xl border border-[#1D0303] py-3.5 items-center`}
            onPress={() => {
              // Navigate to the main app screen
              router.push('/onboarding/secondOnboarding'); // Using replace to prevent going back to onboarding
            }}>
            <Text style={tw`text-[#1D0303] text-base font-RoboMedium`}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdOnboarding;
