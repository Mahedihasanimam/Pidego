import tw from "@/assets/lib/tailwind";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


// --- Main Screen ---
const CreateNewTeamScreen: React.FC = () => {



    return (
        <View style={tw`bg-white text-white p-4 rounded-t-2xl`}>
            <View style={tw`flex-row justify-between items-center bg-gray-200 rounded-full self-center h-[5px] w-[80px]`} />
            <View style={tw`py-4`}>

                <Text style={tw`text-2xl font-medium text-[#1D0303]`}>Choose Payment Method </Text>
                <Text style={tw`text-sm  text-[#1D0303] mt-2`}>Select how you'd like to pay the $25 entry fee for "Dhaka Football League ".</Text>

                <View style={tw`mt-4 flex flex-row items-center gap-4 w-full`}>
                    <TouchableOpacity onPress={() => router.push("/modals/Payment_Modal")} style={tw`bg-[#1D0303] border-2 w-full max-w-[180px] border-black rounded-lg p-3 mt-4`}>
                        <Text style={tw`text-white text-md font-RoboBold`}>Pay Online (Secure Slot)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push("/screens/paywithCash")} style={tw`bg-transparent border-2 border-black  rounded-lg p-3 w-full max-w-[150px] mt-4`}>
                        <Text style={tw`text-black text-center text-md font-RoboBold`}>Pay with Cash</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </View>
    );
};

export default CreateNewTeamScreen;
