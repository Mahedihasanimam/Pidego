import tw from "@/assets/lib/tailwind";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

// --- Icon Placeholders ---
// In a real application, you would replace these with actual SVG components 
// or icons from a library like 'react-native-vector-icons'.

const MastercardIcon = () => <View style={tw`w-6 h-4 bg-red-500 rounded-sm`} />;
const VisaIcon = () => <View style={tw`w-6 h-4 bg-blue-700 rounded-sm`} />;
const DiscoverIcon = () => <View style={tw`w-6 h-4 bg-orange-500 rounded-sm`} />;
const AmexIcon = () => <View style={tw`w-6 h-4 bg-blue-400 rounded-sm`} />;
const CvcHelpIcon = () => <View style={tw`w-6 h-6 bg-gray-300 rounded-full`} />;

// A simple checkbox component
const Checkbox = ({ checked }: { checked: boolean }) => (
    <View style={tw`w-5 h-5 border-2 rounded-sm justify-center items-center border-[#1D0303]`}>
        {checked && <View style={tw`w-3 h-3 bg-[#1D0303]`} />}
    </View>
);

// --- Main Screen ---
const Payment_Modal: React.FC = () => {
    // Note: This component assumes the 'Poppins' font family is configured globally in your project.
    return (
        <View style={tw`bg-white p-6 rounded-t-3xl`}>
            {/* Modal Handle */}
            <View style={tw`self-center w-20 h-[5px] bg-gray-200 rounded-full mb-4`} />

            <Text style={tw`text-[#1D0303] text-[19px] font-normal leading-[26.6px] mb-6`}>
                Payment Procedure
            </Text>

            <Text style={tw`text-[#1D0303] text-base font-semibold leading-[22.4px] mb-3`}>
                Add Card
            </Text>



            {/* Card Info Container */}
            <View style={tw`h-[84px] rounded-[14px] border border-[#C5B2B2]/50`}>
                {/* Top Section: Card Number & Icons */}
                <View style={tw`flex-row items-center px-3.5 flex-1 p-2`}>
                    <TextInput
                        placeholder="Card Number"
                        placeholderTextColor="#B5B5B5"
                        style={tw`flex-1 text-[#1D0303] text-[13px] p-0`}
                        keyboardType="number-pad"
                    />
                    <View style={tw`flex-row gap-1 p-2`}>
                        <MastercardIcon />
                        <VisaIcon />
                        <AmexIcon />
                        <DiscoverIcon />
                    </View>
                </View>

                <View style={tw`h-[1px] bg-[#B6B6B6]/20`} />

                {/* Bottom Section: MM/YY & CVC */}
                <View style={tw`flex-row items-center flex-1 p-2`}>
                    <TextInput
                        placeholder="MM/YY"
                        placeholderTextColor="#B5B5B5"
                        style={tw`flex-1 text-[#1D0303] text-[13px] px-3.5 p-0`}
                        keyboardType="number-pad"
                    />
                    <View style={tw`w-[1px] h-full bg-[#B6B6B6]/20`} />
                    <View style={tw`flex-1 flex-row items-center px-3.5`}>
                        <TextInput
                            placeholder="CVC"
                            placeholderTextColor="#B5B5B5"
                            style={tw`flex-1 text-[#1D0303] text-[13px] p-0`}
                            keyboardType="number-pad"
                            secureTextEntry
                        />
                        <CvcHelpIcon />
                    </View>
                </View>

                {/* Billing Address  */}
            </View>


            {/* Save Card Checkbox */}
            <View style={tw`flex-row items-center mt-4`}>
                <Checkbox checked={true} />
                <Text style={tw`text-[#1D0303] text-[11px] font-normal leading-[15.4px] ml-2`}>
                    Save this card for future payment
                </Text>
            </View>

            {/* A payment button is required on a payment screen */}
            <TouchableOpacity style={tw`bg-black rounded-xl p-4 mt-8`}>
                <Text style={tw`text-white text-center font-bold text-base`}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Payment_Modal;