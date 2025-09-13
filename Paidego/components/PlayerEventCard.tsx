import tw from '@/assets/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import Infotag from './ui/Infotag'

const PlayerEventCard = ({ event }: { event: any }) => {
  return (
    
  <ImageBackground
    source={require('@/assets/images/event2.png')}
    style={tw`w-full h-56 rounded-2xl overflow-hidden mb-6`}
    resizeMode="cover">
    <View style={tw`flex-1 justify-between p-3 bg-black/20`}>

      <View style={tw`flex-row justify-between items-start`}>
        <Text style={tw`text-white text-lg font-RoboBold w-3/4`}>
          {event.title}
        </Text>
        <Text
          style={tw`bg-[#1D0303] text-white text-[10px] font-RoboMedium rounded-lg px-2 py-1`}>
          {event.sport}
        </Text>
      </View>

      <View style={tw`self-center bg-white/40 rounded-xl p-2 w-5/6`}>
        <Text style={tw`text-center text-xs font-RoboNormal text-[#1D0303]`}>
          Guaranteed Prize
        </Text>
        <Text style={tw`text-center text-lg font-RoboBold text-[#450606]`}>
          {event.prize}
        </Text>
      </View>

      <View>
        <View style={tw`flex-row flex-wrap gap-2 mb-2`}>
          <Infotag icon="calendar-outline" text={event.date} />
          <Infotag icon="people-outline" text={event.format} />
          <Infotag icon="person-outline" text={event.type} />
          <Infotag icon="cash-outline" text={event.entryFee} />
          <Infotag icon="shield-checkmark-outline" text="Refund Protected" />
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white text-sm font-RoboBold`}>
            {event.spotsLeft} spots left
          </Text>
          <TouchableOpacity
          onPress={()=>router.push('/eventDetails/PlayerEventDetails')}
            style={tw`bg-white rounded-lg px-4 py-2 border border-white`}>
            <Text style={tw`text-[#1D0303] text-xs font-RoboBold`}>
              Join Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ImageBackground>


  )
}

export default PlayerEventCard