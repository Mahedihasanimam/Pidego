
import { DiscoverActiveIcon, Discovericon, LeaderboardActiveIcon, LeaderboardIcon, NearMeActiveIcon, NearMeIcon, ProfileActiveIcon, ProfileIcon, TransactionActiveIcon, TransactionIcon } from "@/assets/icons/Icon";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc"; // 1. Import twrnc


// Define your tabs with proper typing
const playertabs = [
    { name: "/Drawer", label: "Discover", activeicon: <SvgXml xml={DiscoverActiveIcon}/> ,inactiveicon : <SvgXml xml={Discovericon}/> },
    { name: "/Drawer/nearme", label: "Near Me", activeicon: <SvgXml xml={NearMeActiveIcon}/> ,inactiveicon : <SvgXml xml={NearMeIcon}/> },
    { name: "/Drawer/transaction", label: "Transaction", activeicon: <SvgXml xml={TransactionActiveIcon}/> ,inactiveicon : <SvgXml xml={TransactionIcon}/> },
    { name: "/Drawer/leaderboard", label: "Leaderboard", activeicon: <SvgXml xml={LeaderboardActiveIcon}/> ,inactiveicon : <SvgXml xml={LeaderboardIcon}/> },
    { name: "/Drawer/profile", label: "Profile", activeicon: <SvgXml xml={ProfileActiveIcon}/> ,inactiveicon : <SvgXml xml={ProfileIcon}/> },
] as const;


export default function PlayerCustomTabBar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        // 2. Apply twrnc styles to the main container
        // Note: `bg-primary` assumes 'primary' is a custom color in your tailwind.config.js
        <View
            style={tw`flex-row bg-white border-t border-t-gray-300 py-[18px] justify-around items-center`}
        >
            {playertabs.map((tab) => {
                const isActive = pathname === tab.name;

                return (
                    <TouchableOpacity
                        key={tab.name}
                        onPress={() => router.push(tab.name as any)}
                        // 3. Apply twrnc styles to each tab item
                        style={tw`items-center justify-center`}
                    >
                        {isActive ? tab.activeicon : tab.inactiveicon}
                        {isActive && (
                            // 4. Apply twrnc styles to the active tab's text
                            <Text style={tw`text-xs text-[#1D0303] mt-0.5 font-bold`}>
                                {tab.label}
                            </Text>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}



