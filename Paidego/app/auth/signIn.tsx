import { googleicon } from '@/assets/icons/Icon';
import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useLocalSearchParams, useRouter } from 'expo-router';
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
import { SvgXml } from 'react-native-svg';

// A simple component to recreate the Google icon


const SignIn: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const { role } = useLocalSearchParams<{ role?: string }>();

  // Handler for the login button press
  const handleLogin = () => {
    console.log('Login attempt with:', { email, password });
    router.replace(`/Drawer/(tabs)?role=${role}`);
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
          <Text style={tw`text-3xl font-RoboBold text-[#1D0303] text-center mb-10`}>
            Welcome Back
          </Text>

          {/* Email Input */}
          <View style={tw`w-full mb-4`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
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

          {/* Password Input */}
          <View style={tw`w-full`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>
              Password
            </Text>
            <TextInput
              style={tw`border border-[#C5B2B2] rounded-xl h-12 px-4 text-base`}
              placeholder="Enter your password"
              placeholderTextColor="#B6B6B6"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={() => router.push('/auth/forgotPasswrod')} style={tw`self-end mt-2`}>
            <Text style={tw`text-sm font-RoboNormal text-[#1D0303]`}>
              Forget Password?
            </Text>
          </TouchableOpacity>

          {/* Log in Button */}
          <TouchableOpacity
            style={tw` border border-[#C5B2B2] rounded-xl py-3.5 items-center mt-6`}
            onPress={handleLogin}>
            <Text style={tw`text-[#1D0303] text-base font-bold font-RoboMedium`}>Log in</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={tw`flex-row items-center my-6`}>
            <View style={tw`flex-1 h-px bg-gray-200`} />
            <Text style={tw`mx-4 text-sm font-RoboNormal text-[#1D0303]`}>OR</Text>
            <View style={tw`flex-1 h-px bg-gray-200`} />
          </View>

          {/* Google Button */}
          <TouchableOpacity
            style={tw`bg-white rounded-xl border border-[#C5B2B2] py-3 flex-row items-center justify-center`}>
            <SvgXml xml={googleicon}/>
            <Text style={tw`text-[#1D0303] text-base font-semibold font-RoboMedium ml-3`}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={tw`flex-row justify-center mt-6`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303]`}>
              You don’t have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.push('/auth/signUp')}>
              <Text style={tw`text-base font-semibold font-RoboBold text-[#1D0303]`}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
