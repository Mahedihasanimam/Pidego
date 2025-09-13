import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const CreateNewPassword: React.FC = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handler for the update password button press
  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    if (!newPassword) {
      Alert.alert('Error', 'Password cannot be empty.');
      return;
    }
    console.log('Password updated successfully:', newPassword);
    // Add your password update logic here
    // Navigate to the sign-in screen after successful update
    router.replace('/auth/signIn');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}>
        {/* Header with Back Button */}
        <View style={tw`absolute top-12 left-5 z-10`}>
          <TouchableOpacity onPress={() => router.back()} style={tw`p-2`}>
            <Ionicons name="arrow-back" size={24} color="#1D0303" />
          </TouchableOpacity>
        </View>

        {/* Main container */}
        <View style={tw`flex-1 justify-center px-8`}>
          <Text
            style={tw`text-3xl font-RoboBold text-[#1D0303] text-center mb-12`}>
            Create New Password
          </Text>

          {/* New Password Input */}
          <View style={tw`w-full mb-6`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
              New Password
            </Text>
            <TextInput
              style={tw`border border-[#C5B2B2] rounded-xl h-12 px-4 text-base`}
              placeholder="Enter new password"
              placeholderTextColor="#B6B6B6"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
          </View>

          {/* Confirm Password Input */}
          <View style={tw`w-full`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
              Confirm Password
            </Text>
            <TextInput
              style={tw`border border-[#C5B2B2] rounded-xl h-12 px-4 text-base`}
              placeholder="Confirm new password"
              placeholderTextColor="#B6B6B6"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Update Password Button */}
          <TouchableOpacity
            style={tw`bg-[#1D0303] rounded-xl py-3.5 items-center mt-12`}
            onPress={handleUpdatePassword}>
            <Text style={tw`text-white text-base font-RoboMedium`}>
              Update Password
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateNewPassword;
