import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  // Handler for the submit button press
  const handleSubmit = () => {
    console.log('Password reset requested for:', email);
    // Add your password reset logic here
    // For now, let's navigate to a confirmation screen or back to sign-in
    router.push('/auth/otpVerify');
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
            Forgot Password
          </Text>

          {/* Email Input */}
          <View style={tw`w-full`}>
            <Text style={tw`text-base font-RoboNormal text-[#131516] mb-2`}>
              Email
            </Text>
            <TextInput
              style={tw`border border-[#C5B2B2] rounded-xl h-12 px-4 text-base`}
              placeholder="Enter your email"
              placeholderTextColor="#B6B6B6"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={tw`self-end mt-2`}>
            <Text style={tw`text-sm font-RoboNormal text-[#131516]`}>
              Resend
            </Text>
          </TouchableOpacity>

          {/* Enter Button */}
          <TouchableOpacity
            style={tw`bg-[#1D0303] rounded-xl py-3.5 items-center mt-8`}
            onPress={handleSubmit}>
            <Text style={tw`text-white text-base font-RoboMedium`}>Enter</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
