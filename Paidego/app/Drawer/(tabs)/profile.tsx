import { menuicon } from '@/assets/icons/Icon';
import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

// --- Reusable Sub-Components ---

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <View style={tw`items-center`}>
    <Text style={tw`text-2xl font-RoboBold text-[#1D0303]`}>{value}</Text>
    <Text style={tw`text-xs font-RoboNormal text-gray-600 mt-1`}>{label}</Text>
  </View>
);

const InfoCard = ({ title, children, buttonText, onButtonPress }: { title: string, children: React.ReactNode, buttonText?: string, onButtonPress?: () => void }) => (
    <View style={tw`bg-[#E8E7E7]/20  rounded-2xl p-4 w-full mb-5`}>
        <View style={tw`flex-row justify-between items-center mb-2`}>
            <Text style={tw`text-base font-RoboMedium text-[#1D0303]`}>{title}</Text>
            {buttonText && (
                <TouchableOpacity onPress={onButtonPress} style={tw`bg-[#1D0303] rounded-md px-3 py-1`}>
                    <Text style={tw`text-white text-xs font-RoboMedium`}>{buttonText}</Text>
                </TouchableOpacity>
            )}
        </View>
        {children}
    </View>
);

const ListItem = ({ icon, iconBg, title, subtitle, actionText }: { icon: any, iconBg: string, title: string, subtitle?: string, actionText?: string }) => (
    <>
        <View style={tw`flex-row items-center justify-between py-2`}>
            <View style={tw`flex-row items-center`}>
                <View style={tw`w-8 h-8 rounded-full justify-center items-center mr-3 ${iconBg}`}>
                    <Ionicons name={icon} size={16} color="#03AA00" />
                </View>
                <View>
                    <Text style={tw`text-sm font-RoboNormal text-black`}>{title}</Text>
                    {subtitle && <Text style={tw`text-[10px] text-gray-500`}>{subtitle}</Text>}
                </View>
            </View>
            {actionText && (
                <TouchableOpacity style={tw`border border-[#1D0303] rounded-lg px-3 py-1`}>
                    <Text style={tw`text-[11px] font-RoboMedium text-[#1D0303]`}>{actionText}</Text>
                </TouchableOpacity>
            )}
        </View>
        <View style={tw`h-px bg-gray-200 my-1`} />
    </>
);




// --- Main Screen ---
const ProfileScreen: React.FC = () => {
    const router = useRouter();
    const navigation = useNavigation();



  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
       <View style={tw`p-4 items-center mt-6 flex-row justify-between`}>

         <TouchableOpacity onPress={() => (navigation as any).openDrawer()}>
            <SvgXml xml={menuicon}/>
        </TouchableOpacity>
        <Text style={tw`text-3xl font-RoboBold text-[#1D0303]`}>My Profile</Text>
      </View>
      
      <ScrollView contentContainerStyle={tw`pb-4 items-center px-5`}>
        {/* Profile Info */}
        <View style={tw`items-center mt-4`}>
            <Image source={require('@/assets/images/carton.png')} style={tw`w-32 h-32 rounded-full mb-4`} />
            <Text style={tw`text-2xl font-RoboBold text-[#1D0303]`}>Ittishaf Bashar</Text>
            <Text style={tw`text-base text-gray-500`}>@ab_69bashar</Text>
            <TouchableOpacity style={tw`bg-[#DD2A7B] rounded-full px-8 py-3 mt-4`}>
                <Text style={tw`text-white font-RoboBold`}>Follow Me</Text>
            </TouchableOpacity>
        </View>

        {/* Followers/Following */}
        <View style={tw`bg-white shadow-lg rounded-lg flex-row justify-around p-4 my-6 w-full max-w-xs`}>
            <View style={tw`items-center`}>
                <Text style={tw`text-xl font-RoboMedium`}>1.2k</Text>
                <Text style={tw`text-sm text-gray-500`}>Following</Text>
            </View>
            <View style={tw`h-full w-px bg-gray-200`} />
            <View style={tw`items-center`}>
                <Text style={tw`text-xl font-RoboMedium`}>2.2k</Text>
                <Text style={tw`text-sm text-gray-500`}>Followers</Text>
            </View>
        </View>

        {/* Player Stats */}
        <InfoCard  title="Player Stats">
            <View style={tw`flex-row justify-around pt-2`}>
                <StatItem value="12" label="Events Joined" />
                <StatItem value="$850" label="Total Winnings" />
                <StatItem value="#3" label="Top Rank" />
            </View>
        </InfoCard>

        {/* My Events */}
        <InfoCard title="My Events">
            <ListItem icon="trophy-outline" iconBg="bg-green-100" title="Gulshan Padel" actionText="Share" />
            <ListItem icon="trophy-outline" iconBg="bg-green-100" title="Dhaka Football" actionText="Share" />
        </InfoCard>

        {/* My Teams */}
        <InfoCard onButtonPress={()=>router.push('/modals/createNewTeam')} title="My Teams" buttonText="Create New Team">
            <ListItem icon="people-outline" iconBg="bg-blue-100" title="Dhaka Dudes" subtitle="4 members" actionText="View" />
             <ListItem icon="people-outline" iconBg="bg-blue-100" title="Padel Pros" subtitle="6 members" actionText="View" />
        </InfoCard>

      </ScrollView>

    
    </SafeAreaView>
  );
};

export default ProfileScreen;
