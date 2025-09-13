import { findsearchicon } from "@/assets/icons/Icon";
import tw from "@/assets/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const FirstOnboarding: React.FC = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Main container to space content evenly */}
      <View style={tw`flex-1 justify-around items-end px-7`}>
        {/* Logo Section */}

        {/* Text Section */}
        <View style={tw`items-center mt-10`}>
          <View style={tw``}>
            <SvgXml xml={findsearchicon} />
          </View>
          <Text
            style={tw`text-center text-[#1D0303] text-3xl font-RoboBold leading-tight`}
          >
            Find Your Next Challenge
          </Text>
          <Text
            style={tw`text-center text-[#1D0303] text-lg font-RoboNormal mt-4`}
          >
            Discover and join paid or free competitions, tournaments, and
            challenges for your favorite sports, all in one place.
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

          {/* Next Button */}
          <TouchableOpacity
            style={tw`bg-white rounded-xl border border-[#1D0303] py-3.5 items-center`}
            onPress={() => {
              router.push("/onboarding/secondOnboarding");
            }}
          >
            <Text style={tw`text-[#1D0303] text-base font-RoboMedium`}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstOnboarding;
