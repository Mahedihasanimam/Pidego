import tw from '@/assets/lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// --- Reusable Form Components ---

const FormInput: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?:any;
  multiline?: boolean;
  numberOfLines?: number;
}> = ({ label, placeholder, value, onChangeText, keyboardType = 'default', multiline = false, numberOfLines = 1 }) => (
  <View style={tw`mb-5`}>
    <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>{label}</Text>
    <TextInput
      style={tw.style(
        `border border-[#6A3838] rounded-xl px-4 text-base`,
        multiline ? 'h-24 pt-3' : 'h-12'
      )}
      placeholder={placeholder}
      placeholderTextColor="#1D0303b3"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType as any}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical={multiline ? 'top' : 'center'}
    />
  </View>
);

const PickerInput = ({ label, placeholder, value, onTapped }: { label: string; placeholder: string; value: string; onTapped: any }) => (
    <View style={tw`mb-5`}>
        <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>{label}</Text>
        <TouchableOpacity onPress={onTapped} style={tw`border border-[#6A3838] rounded-xl h-12 px-4 flex-row justify-between items-center`}>
            <Text style={tw.style(value ? 'text-[#1D0303]' : 'text-[#1D0303b3]', 'text-sm')}>{value || placeholder}</Text>
            <Ionicons name="chevron-down-outline" size={20} color="#1D0303" />
        </TouchableOpacity>
    </View>
);

const PrizeInput = ({ place, percentage, setPercentage, calculatedAmount }: { place: string; percentage: string; setPercentage: any; calculatedAmount: number }) => (
    <View style={tw`flex-row items-center justify-between mb-2`}>
        <Text style={tw`text-sm text-[#1D0303]`}>{place}</Text>
        <View style={tw`flex-row items-center border border-[#6A3838] rounded-lg h-9 w-30`}>
             <TextInput
                style={tw`flex-1 px-3 py-2 text-sm text-center`}
                value={percentage}
                onChangeText={setPercentage}
                keyboardType="number-pad"
             />
             <Text style={tw`text-lg text-gray-500 pr-3`}>%</Text>
        </View>
        <Text style={tw`text-sm font-RoboMedium text-[#1D0303]`}>${calculatedAmount.toFixed(2)}</Text>
    </View>
);

const SelectionModal = ({ visible, options, onSelect, onClose }: { visible: boolean; options: string[]; onSelect: (option: string) => void; onClose: () => void; }) => (
    <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
        <TouchableOpacity style={tw`flex-1 justify-center items-center bg-black/50`} onPress={onClose}>
            <View style={tw`bg-white rounded-xl w-4/5`}>
                {options.map((option, index) => (
                    <TouchableOpacity key={index} style={tw`p-4 border-b border-gray-200`} onPress={() => onSelect(option)}>
                        <Text style={tw`text-center`}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </TouchableOpacity>
    </Modal>
);

// --- Main Screen ---
const EditEvent: React.FC = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
      title: '', description: '', sportType: '', memberEntryType: '',
      startingDate: new Date(), endingDate: new Date(), time: new Date(), location: '',
      requiredPlayers: '', entryFee: '', prizeAmount: '',
      rules: '', eventImage: null as string | null,
      prize1st: '50', prize2nd: '30', prize3rd: '20'
  });
  
  const [prizeCalculations, setPrizeCalculations] = useState({ first: 0, second: 0, third: 0 });
  const [showDatePicker, setShowDatePicker] = useState({ start: false, end: false, time: false });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptions, setModalOptions] = useState({ type: '', options: [] as string[] });

  useEffect(() => {
      const prizeTotal = parseFloat(formState.prizeAmount) || 0;
      const p1 = parseFloat(formState.prize1st) || 0;
      const p2 = parseFloat(formState.prize2nd) || 0;
      const p3 = parseFloat(formState.prize3rd) || 0;
      setPrizeCalculations({
          first: prizeTotal * (p1 / 100),
          second: prizeTotal * (p2 / 100),
          third: prizeTotal * (p3 / 100),
      });
  }, [formState.prizeAmount, formState.prize1st, formState.prize2nd, formState.prize3rd]);

  const handleInputChange = (field: string, value: any) => {
    setFormState(prevState => ({ ...prevState, [field]: value }));
  };

  const onDateChange = (event: any, selectedDate: Date | undefined, field: 'start' | 'end' | 'time') => {
      const currentDate = selectedDate || (field === 'time' ? formState.time : formState.startingDate);
      setShowDatePicker({ start: false, end: false, time: false });
      if (field === 'start') handleInputChange('startingDate', currentDate);
      if (field === 'end') handleInputChange('endingDate', currentDate);
      if (field === 'time') handleInputChange('time', currentDate);
  };
  
  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission Denied", "You've refused to allow this app to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      handleInputChange('eventImage', result.assets[0].uri);
    }
  };

  const openPickerModal = (type: 'sportType' | 'memberEntryType') => {
      const options = type === 'sportType' 
          ? ['Football', 'Cricket', 'Padel', 'Badminton', 'Hockey']
          : ['Single', 'Team'];
      setModalOptions({ type, options });
      setModalVisible(true);
  };

  const handleCreateEvent = () => {
    console.log("Event Data:", {
      ...formState,
      startingDate: formState.startingDate.toLocaleDateString(),
      endingDate: formState.endingDate.toLocaleDateString(),
      time: formState.time.toLocaleTimeString(),
    });
    Alert.alert("Event Created", "Your event has been successfully created.", [
        { text: "OK", onPress: () => router.push('/Drawer/home') }
    ]);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}>
        <View style={tw`p-4 flex-row items-center`}>
          <TouchableOpacity onPress={() => router.back()} style={tw`p-1`}>
            <Ionicons name="arrow-back" size={24} color="#1D0303" />
          </TouchableOpacity>
          <Text style={tw`text-2xl font-RoboBold text-[#1D0303] text-center flex-1 -ml-8`}>
            Edit Your Event
          </Text>
        </View>

        <ScrollView contentContainerStyle={tw`p-5`}>
          <FormInput label="Event Title" placeholder="Enter event title" value={formState.title} onChangeText={(val) => handleInputChange('title', val)} />
          <FormInput label="Description" placeholder="Describe your event" value={formState.description} onChangeText={(val) => handleInputChange('description', val)} multiline numberOfLines={4} />
          
          <PickerInput label="Sport Type" placeholder="Select a sport" value={formState.sportType} onTapped={() => openPickerModal('sportType')}/>
          <PickerInput label="Member Entry Type" placeholder="Select member entry type" value={formState.memberEntryType} onTapped={() => openPickerModal('memberEntryType')}/>
          
          <PickerInput label="Starting Date" placeholder="mm/dd/yyyy" value={formState.startingDate.toLocaleDateString()} onTapped={() => setShowDatePicker({...showDatePicker, start: true})}/>
          <PickerInput label="Ending Date" placeholder="mm/dd/yyyy" value={formState.endingDate.toLocaleDateString()} onTapped={() => setShowDatePicker({...showDatePicker, end: true})}/>
          <PickerInput label="Time" placeholder="--:-- --" value={formState.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} onTapped={() => setShowDatePicker({...showDatePicker, time: true})}/>

          <FormInput label="Location" placeholder="Enter event location" value={formState.location} onChangeText={(val) => handleInputChange('location', val)} />
          <FormInput label="Number of players Required" placeholder="e.g., 14" value={formState.requiredPlayers} onChangeText={(val) => handleInputChange('requiredPlayers', val)} keyboardType="number-pad" />
          <FormInput label="Entry Fee ($)" placeholder="0.00" value={formState.entryFee} onChangeText={(val) => handleInputChange('entryFee', val)} keyboardType="decimal-pad" />
          <FormInput label="Prize Amount ($)" placeholder="0.00" value={formState.prizeAmount} onChangeText={(val) => handleInputChange('prizeAmount', val)} keyboardType="decimal-pad" />
          
            <View style={tw`mb-5`}>
                <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-1`}>Prize Distribution</Text>
                <Text style={tw`text-xs text-gray-500 mb-3`}>Set the percentage of the prize money for the top 3 participants.</Text>
                <PrizeInput place="1st Place" percentage={formState.prize1st} setPercentage={(val: string) => handleInputChange('prize1st', val)} calculatedAmount={prizeCalculations.first} />
                <PrizeInput place="2nd Place" percentage={formState.prize2nd} setPercentage={(val: string) => handleInputChange('prize2nd', val)} calculatedAmount={prizeCalculations.second} />
                <PrizeInput place="3rd Place" percentage={formState.prize3rd} setPercentage={(val: string) => handleInputChange('prize3rd', val)} calculatedAmount={prizeCalculations.third} />
            </View>
          
          <FormInput label="Rules & Guidelines" placeholder="List the rules for your event" value={formState.rules} onChangeText={(val) => handleInputChange('rules', val)} multiline numberOfLines={5} />
          
          <View style={tw`mb-8`}>
            <Text style={tw`text-base font-RoboNormal text-[#1D0303] mb-2`}>Upload Event Image</Text>
            <TouchableOpacity onPress={handleImageUpload} style={tw`border border-[#6A3838] rounded-xl h-12 px-4 flex-row items-center`}>
                <View style={tw`bg-gray-200 px-3 py-1 rounded-md`}>
                    <Text style={tw`text-sm`}>Choose file</Text>
                </View>
                <Text style={tw`ml-3 text-gray-600`}>{formState.eventImage ? 'Image Selected' : 'No file chosen'}</Text>
            </TouchableOpacity>
            {formState.eventImage && <Image source={{uri: formState.eventImage}} style={tw`w-full h-48 rounded-lg mt-4`} />}
          </View>

          <TouchableOpacity onPress={handleCreateEvent} style={tw`bg-[#1D0303] rounded-xl py-4 items-center`}>
            <Text style={tw`text-white text-base font-RoboBold`}>Create Event</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      
      {showDatePicker.start && <DateTimePicker value={formState.startingDate} mode="date" display="default" onChange={(e,d) => onDateChange(e,d,'start')} />}
      {showDatePicker.end && <DateTimePicker value={formState.endingDate} mode="date" display="default" onChange={(e,d) => onDateChange(e,d,'end')} />}
      {showDatePicker.time && <DateTimePicker value={formState.time} mode="time" display="default" onChange={(e,d) => onDateChange(e,d,'time')} />}
      <SelectionModal visible={modalVisible} options={modalOptions.options} onClose={() => setModalVisible(false)} onSelect={(val) => { handleInputChange(modalOptions.type, val); setModalVisible(false); }} />
    </SafeAreaView>
  );
};

export default EditEvent;

