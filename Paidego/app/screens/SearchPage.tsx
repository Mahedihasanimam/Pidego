import { router } from 'expo-router';
import { ArrowLeft, Search } from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

// Make sure to install dependencies:
// npm install twrnc lucide-react-native react-native-svg

const SearchPage = () => {
    // Mock data to replicate the repeated user list in the design
    const [query, setQuery] = useState('');
    const users = Array.from({ length: 20 }).map((_, i) => ({
        handle: `@user${90 + i}`,
        name: `User ${i + 1}`,
        avatar: 'https://placehold.co/80x80'
    }));

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return users;
        return users.filter(u => (u.handle + ' ' + u.name).toLowerCase().includes(q));
    }, [query, users]);

    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <StatusBar barStyle="dark-content" />

            {/* Header Section */}
            <View style={tw`px-4 pt-3 pb-3`}>
                <View style={tw`flex-row items-center space-x-3 pt-14`}>
                    {/* Back Button */}
                    <TouchableOpacity onPress={() => router.back()} style={tw`p-2`}>
                        <ArrowLeft color="#1D0303" size={22} />
                    </TouchableOpacity>

                    {/* Search Bar (TextInput) */}
                    <View style={tw`flex-1 flex-row items-center bg-gray-100 rounded-2xl h-10 px-3`}>
                        <Search color="#6B6B6B" size={18} style={tw`mr-2`} />
                        <TextInput
                            value={query}
                            onChangeText={setQuery}
                            placeholder="Search by @username or name"
                            placeholderTextColor="#9CA3AF"
                            returnKeyType="search"
                            style={tw`flex-1 text-base py-0`}
                        />
                    </View>
                </View>
            </View>

            {/* Scrollable List Content */}
            <ScrollView
                style={tw`flex-1`}
                contentContainerStyle={tw`pb-6`}
                showsVerticalScrollIndicator={false}
            >
                {results.map((user, index) => (
                    <TouchableOpacity key={index} style={tw`flex-row items-center justify-between px-4 py-3`}>
                        <View style={tw`flex-row items-center space-x-3`}>
                            {/* Avatar */}
                            <Image
                                source={{ uri: user.avatar }}
                                style={tw`w-12 h-12 rounded-full bg-gray-200`}
                            />
                            {/* Text Info */}
                            <View>
                                <Text style={tw`text-[#1D0303] text-sm font-bold`}>
                                    {user.handle}
                                </Text>
                                <Text style={tw`text-[#6B6B6B] text-sm`}>
                                    {user.name}
                                </Text>
                            </View>
                        </View>

                        {/* Action Button */}
                        <TouchableOpacity style={tw`px-3 py-1 rounded-full border border-[#1D0303]`}>
                            <Text style={tw`text-sm text-[#1D0303]`}>Add</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}

                {results.length === 0 && (
                    <View style={tw`px-4 py-6 items-center`}>
                        <Text style={tw`text-sm text-gray-500`}>No results found</Text>
                    </View>
                )}
            </ScrollView>

        </SafeAreaView>
    );
}

export default SearchPage;