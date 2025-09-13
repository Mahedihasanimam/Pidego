import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// --- Reusable Sub-Components ---

const DrawerItem = ({
  icon,
  label,
  onPress,
}: {
  icon: any;
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={tw`flex-row items-center py-4`}
    onPress={onPress}>
    <Ionicons name={icon} size={20} color="#1D0303" style={tw`w-8`} />
    <Text style={tw`text-base font-RoboNormal text-[#1D0303]`}>{label}</Text>
  </TouchableOpacity>
);

// --- Main Component ---
const CustomDrawerContent: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    {
      label: 'Edit Profile',
      icon: 'person-outline',
      route: '/profile/editprofile',
    },
    // {
    //   label: 'Payment Method',
    //   icon: 'card-outline',
    //   route: '/payment-methods',
    // },
    {
      label: 'Notifications',
      icon: 'notifications-outline',
      route: '/notification/notification',
    },
    {
      label: 'Help & Support',
      icon: 'help-circle-outline',
      route: '/helpandSupport/helpAndSupport',
    },
    {
      label: 'Logout',
      icon: 'log-out-outline',
      route: '/auth/signIn',
    },
  ];

  const handleNavigation = (route: string) => {
    if (route === '/signIn') {
      console.log('Logging out...');
    }
    router.push(route as any); 
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`p-5`}>
        {/* Header */}
        <View style={tw`flex-row justify-between items-center mb-10`}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={tw`w-40 h-16`}
            resizeMode="contain"
          />

        </View>

        {/* Menu Items */}
        <View>
          {menuItems.map(item => (
            <DrawerItem
              key={item.label}
              icon={item.icon as any}
              label={item.label}
              onPress={() => handleNavigation(item.route)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
