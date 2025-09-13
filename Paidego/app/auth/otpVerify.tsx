import tw from '@/assets/lib/tailwind';

import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const OtpVerify: React.FC = () => {
  const router = useRouter();
  const [code, setCode] = useState('');
  const codeDigits = 6; // Number of digits in the OTP

  // Ref to focus the hidden text input
  const textInputRef = useRef<TextInput>(null);

  const handlePress = () => {
    textInputRef.current?.focus();
  };

  // Handler for the submit button press
  const handleSubmit = () => {
    console.log('Verification code submitted:', code);
    // Add your OTP verification logic here
    // For now, let's navigate to a 'reset-password' screen
    router.push('/auth/CreateNewPassword');
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
            style={tw`text-3xl font-RoboBold text-[#1D0303] text-center mb-4`}>
            Verification Code
          </Text>
          <Text
            style={tw`text-sm font-RoboNormal text-[#1D0303] text-center mb-12`}>
            We sent a reset link to contact@dscode.com enter 6 digit code that
            is mentioned in the email
          </Text>

          {/* OTP Input Section */}
          <Pressable onPress={handlePress} style={tw`w-full`}>
            <View
              style={tw`flex-row justify-between items-center w-full`}
              pointerEvents="none">
              {Array.from({ length: codeDigits }).map((_, index) => {
                const digit = code[index] || '';
                const isFocused = index === code.length;

                return (
                  <View
                    key={index}
                    style={tw.style(
                      `w-12 h-12 border border-[#C5B2B2] rounded-lg justify-center items-center`,
                      isFocused && `border-[#1D0303] border-2`
                    )}>
                    <Text style={tw`text-xl text-center text-[#1D0303]`}>
                      {digit}
                    </Text>
                  </View>
                );
              })}
            </View>
            <TextInput
              ref={textInputRef}
              style={tw`absolute w-px h-px -top-full opacity-0`} // Hide the input
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={codeDigits}
              autoFocus={true}
            />
          </Pressable>

          {/* Enter Button */}
          <TouchableOpacity
            style={tw`bg-[#1D0303] rounded-xl py-3.5 items-center mt-12`}
            onPress={handleSubmit}>
            <Text style={tw`text-white text-base font-RoboMedium`}>Enter</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpVerify;
