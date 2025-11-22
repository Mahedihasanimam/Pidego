import React, { useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// This is your mock master list of all users
const ALL_USERS_DATA = [
    {
        id: '1',
        name: 'Alice Smith',
        username: '@alicesmith',
        avatarUrl: 'https://picsum.photos/seed/1/100',
        isFollowing: true,
    },
    {
        id: '2',
        name: 'Bob Johnson',
        username: '@bobjohnson',
        avatarUrl: 'https://picsum.photos/seed/2/100',
        isFollowing: false,
    },
    {
        id: '3',
        name: 'Catherine Williams',
        username: '@catwilliams',
        avatarUrl: 'https://picsum.photos/seed/3/100',
        isFollowing: true,
    },
    {
        id: '4',
        name: 'David Brown',
        username: '@davidbrown',
        avatarUrl: 'https://picsum.photos/seed/4/100',
        isFollowing: false,
    },
    {
        id: '6',
        name: 'Frank Miller',
        username: '@frankmiller',
        avatarUrl: 'https://picsum.photos/seed/6/100',
        isFollowing: true,
    },
];

// 1. Filter the data to get *only* the users you are following
const initialFollowingList = ALL_USERS_DATA.filter(
    (user) => user.isFollowing
);

export default function FollowingList() {
    // 2. Manage the list of users you are following in state
    const [following, setFollowing] = useState(initialFollowingList);

    // 3. Handle the unfollow action
    const handleUnfollow = (userId) => {
        // This will filter the user out of the list, removing them
        setFollowing((currentFollowing) =>
            currentFollowing.filter((user) => user.id !== userId)
        );

        // In a real app, you would also send this update to your server
        // e.g., api.unfollowUser(userId);
    };

    // 4. Define how each list item looks
    const renderUserItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>{item.username}</Text>
            </View>

            {/* This button will only say "Following" and will unfollow on press */}
            <TouchableOpacity
                onPress={() => handleUnfollow(item.id)}
                style={styles.followingButton}
            >
                <Text style={styles.followingButtonText}>Unfollow</Text>
            </TouchableOpacity>
        </View>
    );

    // 5. Render the list
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Following ({following.length})</Text>
            <FlatList
                data={following}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    );
}

// 6. Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 46,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1, // Takes up remaining space
        marginLeft: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    username: {
        fontSize: 14,
        color: '#666',
    },
    followingButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ccc',
        minWidth: 100,
        alignItems: 'center',
    },
    followingButtonText: {
        color: '#333',
        fontSize: 14,
        fontWeight: '600',
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
        marginLeft: 78, // Aligns with the start of the text
    },
});