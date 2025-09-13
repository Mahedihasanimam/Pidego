import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
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

const SignUp: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handler for the register button press
  const handleRegister = () => {
    if (!termsAccepted) {
      alert('Please accept the Terms & Conditions.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    console.log('Registration attempt with:', {
      fullName,
      userName,
      email,
      password,
      termsAccepted,
    });
    // Add your registration logic here
    // router.replace('/home');
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

        <ScrollView contentContainerStyle={tw`flex-grow justify-center px-8`}>
          <Text style={tw`text-3xl font-RoboBold text-[#1D0303] text-center mb-8`}>
            Create Account
          </Text>

          {/* Form Fields */}
          <View style={tw`w-full mb-4`}>
            <Text style={tw`input-label`}>Full Name</Text>
            <TextInput
              style={tw`input rounded-xl border border-[#C5B2B2] px-4 h-12`}
              placeholder="Enter your full name"
              placeholderTextColor="#B6B6B6"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={tw`w-full mb-4`}>
            <Text style={tw`input-label`}>User Name</Text>
            <TextInput
              style={tw`input rounded-xl border border-[#C5B2B2] px-4 h-12`}
              placeholder="Enter your user name"
              placeholderTextColor="#B6B6B6"
              value={userName}
              onChangeText={setUserName}
              autoCapitalize="none"
            />
          </View>

          <View style={tw`w-full mb-4`}>
            <Text style={tw`input-label`}>Email</Text>
            <TextInput
              style={tw`input rounded-xl border border-[#C5B2B2] px-4 h-12`}
              placeholder="Enter your email"
              placeholderTextColor="#B6B6B6"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={tw`w-full mb-4`}>
            <Text style={tw`input-label`}>Password</Text>
            <TextInput
              style={tw`input rounded-xl border border-[#C5B2B2] px-4 h-12`}
              placeholder="Enter your password"
              placeholderTextColor="#B6B6B6"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={tw`w-full mb-4`}>
            <Text style={tw`input-label`}>Confirm Password</Text>
            <TextInput
              style={tw`input rounded-xl border border-[#C5B2B2] px-4 h-12`}
              placeholder="Confirm your password"
              placeholderTextColor="#B6B6B6"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Terms & Conditions */}
          <TouchableOpacity
            style={tw`flex-row items-center my-4`}
            onPress={() => setTermsAccepted(!termsAccepted)}>
            <Ionicons
              name={termsAccepted ? 'checkbox' : 'checkbox-outline'}
              size={24}
              color="#1D0303"
            />
            <Text style={tw`ml-2 text-sm text-[#1D0303]`}>
              I accept the Terms & Conditions
            </Text>
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity
           style={tw` border border-[#C5B2B2] rounded-xl py-3.5 items-center mt-6`}
            onPress={handleRegister}>
            <Text style={tw`text-[#1D0303] text-base font-bold font-RoboMedium`}>Register</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={tw`flex-row justify-center mt-6`}>
            <Text style={tw`text-sm font-RoboNormal text-[#1D0303]`}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.push('/auth/signIn')}>
              <Text style={tw`text-sm font-RoboBold text-[#1D0303]`}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
