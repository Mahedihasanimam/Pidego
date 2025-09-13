import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// --- Reusable Sub-Components ---

const MemberListItem = ({
  member,
  onRemove,
}: {
  member: any;
  onRemove: () => void;
}) => (
  <View style={tw`flex-row items-center justify-between bg-white p-2 rounded-lg mb-2`}>
    <View style={tw`flex-row items-center`}>
      <Image source={{ uri: member.avatar }} style={tw`w-10 h-10 rounded-full`} />
      <View style={tw`ml-3`}>
        <Text style={tw`font-RoboMedium text-sm`}>{member.name}</Text>
        <Text style={tw`font-RoboNormal text-xs text-gray-500`}>
          {member.username}
        </Text>
      </View>
    </View>
    <TouchableOpacity onPress={onRemove} style={tw`p-2`}>
      <Ionicons name="close-circle" size={22} color="red" />
    </TouchableOpacity>
  </View>
);


// --- Main Screen ---
const CreateNewTeamScreen: React.FC = () => {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [teamTagline, setTeamTagline] = useState('');
  const [teamAvatar, setTeamAvatar] = useState<string | null>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreateTeam = () => {
    if (!teamName) {
      Alert.alert('Error', 'Please enter a team name.');
      return;
    }
    console.log('Creating team with:', {
      teamName,
      teamTagline,
      teamAvatar,
      members,
    });
    // Add team creation logic here
    router.back();
  };
  
  // Mock function to add a member
  const handleAddMember = () => {
      if (!searchQuery) return;
      const newMember = {
          id: Date.now().toString(),
          name: searchQuery,
          username: `@${searchQuery.toLowerCase().replace(' ', '')}`,
          avatar: `https://placehold.co/40x40/E8E8E8/000000?text=${searchQuery.charAt(0)}`
      };
      setMembers([...members, newMember]);
      setSearchQuery('');
  }

  const handleRemoveMember = (id: string) => {
      setMembers(members.filter(member => member.id !== id));
  }

  return (
    <View style={tw`flex-1 bg-white`}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw``}>
    

        <ScrollView contentContainerStyle={tw`p-5`}>
        

          {/* Team Name Input */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>Team Name</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-lg h-12 px-4 text-base`}
              placeholder="Enter team name"
              value={teamName}
              onChangeText={setTeamName}
            />
          </View>

          {/* Team Tagline Input */}
          <View style={tw`mb-6`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>Team Tagline (Optional)</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-lg h-12 px-4 text-base`}
              placeholder="Enter a short, catchy tagline"
              value={teamTagline}
              onChangeText={setTeamTagline}
            />
          </View>
          
          {/* Add Members */}
          <View style={tw`bg-gray-100 p-4 rounded-lg`}>
              <Text style={tw`text-base font-RoboMedium text-[#1D0303] mb-3`}>Add Members</Text>
              <View style={tw`flex-row items-center mb-4`}>
                  <TextInput
                    style={tw`flex-1 border border-gray-300 bg-white rounded-lg h-12 px-4 text-base`}
                    placeholder="Search by username..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                  />
                  <TouchableOpacity onPress={handleAddMember} style={tw`bg-[#1D0303] rounded-lg ml-2 px-4 py-3`}>
                    <Text style={tw`text-white font-RoboMedium`}>Add</Text>
                  </TouchableOpacity>
              </View>

              {/* Members List */}
              {members.length > 0 ? (
                  members.map(member => <MemberListItem key={member.id} member={member} onRemove={() => handleRemoveMember(member.id)} />)
              ) : (
                  <Text style={tw`text-center text-gray-500 text-sm`}>No members added yet.</Text>
              )}
          </View>

        </ScrollView>
        {/* Create Team Button */}
        <View style={tw`p-5`}>
            <TouchableOpacity onPress={handleCreateTeam} style={tw`bg-[#1D0303] rounded-xl py-4 items-center`}>
                <Text style={tw`text-white text-base font-RoboBold`}>Create Team</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateNewTeamScreen;
