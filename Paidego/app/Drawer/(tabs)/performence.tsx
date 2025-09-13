import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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

const InsightRow = ({
  icon,
  iconBg,
  iconColor,
  title,
  subtitle,
  value,
}: {
  icon: any;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  value: string;
}) => (
  <>
    <View style={tw`flex-row items-center justify-between py-3`}>
      <View style={tw`flex-row items-center`}>
        <View
          style={tw`w-12 h-12 rounded-full justify-center items-center mr-4 ${iconBg}`}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
        <View>
          <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>
            {title}
          </Text>
          <Text style={tw`text-xs font-RoboNormal text-gray-500 mt-1`}>
            {subtitle}
          </Text>
        </View>
      </View>
      <Text style={tw`text-sm font-RoboBold text-gray-600`}>{value}</Text>
    </View>
    <View style={tw`h-px bg-gray-200`} />
  </>
);


// --- Main Screen ---
const PerformanceScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white mt-8`}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={tw`p-4 flex-row items-center`}>
        <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
          <Ionicons name="arrow-back" size={24} color="#1D0303" />
        </TouchableOpacity>
        <Text
          style={tw`text-3xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>
          Performance
        </Text>
      </View>

      <ScrollView contentContainerStyle={tw`pb-4 px-5 mt-4`}>
        {/* Account Insights Card */}
        <View style={tw`bg-gray-100 rounded-2xl p-4 mb-6`}>
          <Text style={tw`text-base font-RoboBold text-[#1D0303] mb-2`}>
            Account Insights
          </Text>
          <InsightRow
            icon="eye-outline"
            iconBg="bg-green-100"
            iconColor="#03AA00"
            title="Account Reach"
            subtitle="Last 30 days"
            value="1.2k"
          />
          <InsightRow
            icon="share-social-outline"
            iconBg="bg-blue-100"
            iconColor="#54A7F5"
            title="Social Shares"
            subtitle="Last 30 days"
            value="63"
          />
        </View>

        {/* Events Overview Card */}
        <View style={tw`bg-gray-100 rounded-2xl p-4`}>
          <Text style={tw`text-base font-RoboBold text-[#1D0303] mb-2`}>
            Events Overview
          </Text>
          <InsightRow
            icon="people-outline"
            iconBg="bg-green-100"
            iconColor="#03AA00"
            title="Total Participants"
            subtitle="Last 30 days"
            value="142"
          />
          <InsightRow
            icon="play-circle-outline"
            iconBg="bg-blue-100"
            iconColor="#54A7F5"
            title="Active Participants"
            subtitle="Last 30 days"
            value="87"
          />
          <InsightRow
            icon="checkmark-done-outline"
            iconBg="bg-blue-100"
            iconColor="#54A7F5"
            title="Completed Events"
            subtitle="All time"
            value="52"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerformanceScreen;
