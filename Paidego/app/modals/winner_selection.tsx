
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import tw from 'twrnc';

// --- TypeScript Interface for a Participant ---
interface Participant {
    id: number;
    name: string;
    initials: string;
    joined: string;
    color: string;
    textColor: string;
}

// --- Mock Data for Participants ---
const participants: Participant[] = [
    { id: 1, name: 'Alice Smith', initials: 'AS', joined: 'Jun 5, 2023', color: '#D1FAE5', textColor: '#065F46' },
    { id: 2, name: 'Bob Johnson', initials: 'BJ', joined: 'Jul 12, 2023', color: '#DBEAFE', textColor: '#1E40AF' },
    { id: 3, name: 'Charlie Brown', initials: 'CB', joined: 'Aug 21, 2023', color: '#FEF3C7', textColor: '#92400E' },
    { id: 4, name: 'Diana Prince', initials: 'DP', joined: 'Sep 1, 2023', color: '#FEE2E2', textColor: '#991B1B' },
    { id: 5, name: 'Ethan Hunt', initials: 'EH', joined: 'Oct 15, 2023', color: '#E5E7EB', textColor: '#5B21B6' },

];

interface ParticipantRowProps {
    participant: Participant;
    isSelected: boolean;
    onSelect: (id: number) => void;
}

// --- Reusable Participant Item Component ---
const ParticipantRow: React.FC<ParticipantRowProps> = ({ participant, isSelected, onSelect }) => (
    <View>
        <View style={tw`flex-row items-center justify-between py-4`}>
            {/* Avatar and Name */}
            <View style={tw`flex-row items-center`}>
                <View style={[tw`h-11 w-11 items-center justify-center rounded-full`, { backgroundColor: participant.color }]}>
                    <Text style={[tw`text-base font-bold`, { color: participant.textColor }]}>{participant.initials}</Text>
                </View>
                <View style={tw`ml-4`}>
                    <Text style={tw`text-sm font-semibold text-gray-800`}>{participant.name}</Text>
                    <Text style={tw`mt-1 text-xs text-gray-500`}>Joined: {participant.joined}</Text>
                </View>
            </View>

            {/* Checkbox */}
            <TouchableOpacity
                onPress={() => onSelect(participant.id)}
                style={[
                    tw`h-5 w-5 items-center justify-center rounded-full border-2 border-gray-400`,
                    isSelected && tw`border-black bg-black`
                ]}
            >
                {isSelected && <Text style={tw`text-xs font-bold text-white`}>✓</Text>}
            </TouchableOpacity>
        </View>
        <View style={tw`h-px bg-gray-200`} />
    </View>
);

// --- Main Screen Component ---
const Winner_selection: React.FC = () => {
    const [selectedWinners, setSelectedWinners] = useState<number[]>([]);

    const handleSelectWinner = (id: number) => {
        setSelectedWinners(prev =>
            prev.includes(id)
                ? prev.filter(winnerId => winnerId !== id)
                : [...prev, id]
        );
    };

    const isButtonDisabled = selectedWinners.length === 0;

    return (
        <SafeAreaView style={tw` items-center justify-center `}>

            <View style={tw`w-full rounded-2xl bg-white shadow-lg`}>
                <View style={tw`h-5px bg-gray-300 rounded-full w-[80px] self-center mt-2`} />
                {/* Header */}
                <View style={tw`flex-row items-center justify-between border-b border-gray-200 p-5`}>
                    <Text style={tw`text-lg font-semibold text-gray-900`}>Select Winners</Text>
                    <Text style={tw`text-sm font-medium text-gray-600`}>{selectedWinners.length}/{participants.length}</Text>
                </View>

                {/* Participant List */}
                <FlatList
                    data={participants}
                    renderItem={({ item }) => (
                        <ParticipantRow
                            participant={item}
                            isSelected={selectedWinners.includes(item.id)}
                            onSelect={handleSelectWinner}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={tw`px-5`}
                />

                {/* Footer Button */}
                <View style={tw`border-t border-gray-200 p-5`}>
                    <TouchableOpacity
                        style={[
                            tw`w-full items-center justify-center rounded-lg bg-black py-3`,
                            isButtonDisabled && tw`opacity-50`
                        ]}
                        disabled={isButtonDisabled}
                    >
                        <Text style={tw`font-bold text-white`}>
                            {selectedWinners.length > 0
                                ? `Select ${selectedWinners.length} Winner${selectedWinners.length > 1 ? 's' : ''}`
                                : 'Select a Winner'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Winner_selection;