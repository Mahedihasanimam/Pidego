import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EditProfileScreen: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('Ittishaf Bashar');
  const [userName, setUserName] = useState('@ab_69bashar');
  const [email, setEmail] = useState('ittishaf.bashar@example.com');
  const [password, setPassword] = useState('');

  const handleSaveChanges = () => {
    console.log('Saving changes:', { fullName, userName, email, password });
    router.back();
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}>
        {/* Header */}
        <View style={tw`p-4 flex-row items-center`}>
          <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
            <Ionicons name="arrow-back" size={24} color="#1D0303" />
          </TouchableOpacity>
          <Text
            style={tw`text-2xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>
            Edit Profile
          </Text>
        </View>

        <ScrollView contentContainerStyle={tw`pb-24`}>
          {/* Profile Picture Section */}
          <View style={tw`items-center mt-4 mb-8`}>
            <View>
              <Image
                source={require('@/assets/images/carton.png')}
                style={tw`w-32 h-32 rounded-full`}
              />
              <TouchableOpacity
                style={tw`absolute bottom-0 right-0 bg-[#1D0303] w-8 h-8 rounded-full justify-center items-center`}>
                <Ionicons name="camera-outline" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={tw`text-2xl font-RoboBold text-[#1D0303] mt-4`}>
              {fullName}
            </Text>
            <Text style={tw`text-base text-gray-500`}>{userName}</Text>
          </View>

          {/* Form Fields */}
          <View style={tw`px-5`}>
            <View style={tw`mb-4`}>
              <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
                Full Name
              </Text>
              <TextInput
                style={tw`border border-gray-300 rounded-lg h-12 px-4 text-base`}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
            <View style={tw`mb-4`}>
              <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
                User Name
              </Text>
              <TextInput
                style={tw`border border-gray-300 rounded-lg h-12 px-4 text-base`}
                placeholder="Enter your user name"
                value={userName}
                onChangeText={setUserName}
              />
            </View>
            <View style={tw`mb-4`}>
              <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
                Email
              </Text>
              <TextInput
                style={tw`border border-gray-300 rounded-lg h-12 px-4 text-base`}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={tw`mb-6`}>
              <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
                Password
              </Text>
              <TextInput
                style={tw`border border-gray-300 rounded-lg h-12 px-4 text-base`}
                placeholder="Enter new password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>

           {/* Save Changes Button */}
            <View style={tw`px-5`}>
                <TouchableOpacity
                    onPress={handleSaveChanges}
                    style={tw`bg-[#1D0303] rounded-xl py-4 items-center`}>
                    <Text style={tw`text-white text-base font-RoboBold`}>
                    Save Changes
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
