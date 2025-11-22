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

// 1. Mock Data for the list
const MOCK_DATA = [
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
        id: '5',
        name: 'Eva Davis',
        username: '@evadavis',
        avatarUrl: 'https://picsum.photos/seed/5/100',
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

export default function FollowerList() {
    // 2. Manage the list of users in state
    const [users, setUsers] = useState(MOCK_DATA);

    // 3. Handle the follow/unfollow toggle
    const handleFollowToggle = (userId) => {
        setUsers((currentUsers) =>
            currentUsers.map((user) =>
                user.id === userId
                    ? { ...user, isFollowing: !user.isFollowing }
                    : user
            )
        );
    };

    // 4. Define how each list item looks
    const renderUserItem = ({ item }) => {
        const isFollowing = item.isFollowing;

        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.username}>{item.username}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleFollowToggle(item.id)}
                    style={[
                        styles.buttonBase,
                        isFollowing ? styles.unfollowButton : styles.followButton,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonTextBase,
                            isFollowing
                                ? styles.unfollowButtonText
                                : styles.followButtonText,
                        ]}
                    >
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    // 5. Render the FlatList
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
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
    buttonBase: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
    },
    followButton: {
        backgroundColor: '#007AFF', // Blue
    },
    unfollowButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonTextBase: {
        fontSize: 14,
        fontWeight: '600',
    },
    followButtonText: {
        color: '#fff',
    },
    unfollowButtonText: {
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
        marginLeft: 78, // Aligns with the start of the text
    },
});