import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const Infotag = ({ icon, text }: { icon: any; text: string }) => {
  return (
 
      <View
        style={tw`bg-white opacity-80 rounded-md px-2 py-1 flex-row items-center shadow-md`}>
        <Ionicons name={icon} size={14} color="#1D0303" />
        <Text style={tw`text-[#1D0303] text-xs font-RoboNormal ml-1.5`}>
          {text}
        </Text>
      </View>

    
  )
}

export default Infotag