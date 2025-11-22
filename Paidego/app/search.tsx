import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const initialQuery = (params?.q as string) || '';

    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <StatusBar barStyle="dark-content" />
            <View style={tw`flex-row items-center p-4 bg-gray-100`}>
                <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
                    <Ionicons name="arrow-back" size={24} color="#1D0303" />
                </TouchableOpacity>
                <Text style={tw`text-xl font-RoboBold text-[#1D0303] ml-2`}>Search</Text>
            </View>

            <View style={tw`p-4`}>
                <View style={tw`flex-row items-center bg-white rounded-lg border border-gray-200 px-3 py-2`}>
                    <Ionicons name="search" size={18} color="#9CA3AF" />
                    <TextInput
                        autoFocus
                        defaultValue={initialQuery}
                        placeholder="Search by @username or name"
                        placeholderTextColor="#9CA3AF"
                        style={tw`ml-3 flex-1 text-sm`}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;
