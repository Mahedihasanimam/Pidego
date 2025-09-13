import { CreateActiveIcon, CreateIcon, HomeActiveIcon, Homeicon, PerformenceActiveIcon, PerformenceIcon, ProfileActiveIcon, ProfileIcon, TransactionActiveIcon, TransactionIcon } from "@/assets/icons/Icon";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";

const organizationtabs = [
    { name: "/Drawer/home", label: "Home", activeicon: <SvgXml xml={HomeActiveIcon}/> ,inactiveicon : <SvgXml xml={Homeicon}/> },
    { name: "/Drawer/createevent", label: "Create", activeicon: <SvgXml xml={CreateActiveIcon}/> ,inactiveicon : <SvgXml xml={CreateIcon}/> },
    { name: "/Drawer/transaction", label: "Transaction", activeicon: <SvgXml xml={TransactionActiveIcon}/> ,inactiveicon : <SvgXml xml={TransactionIcon}/> },
    { name: "/Drawer/performence", label: "Performance", activeicon: <SvgXml xml={PerformenceActiveIcon}/> ,inactiveicon : <SvgXml xml={PerformenceIcon}/> },
    { name: "/Drawer/profile", label: "Profile", activeicon: <SvgXml xml={ProfileActiveIcon}/> ,inactiveicon : <SvgXml xml={ProfileIcon}/> },
] as const;

export default function CustomTabBar() {
    const router = useRouter();
    const pathname = usePathname();
useEffect(() => {
    if (pathname === "/Drawer" || pathname === "/") {
      router.replace("/Drawer/home");
    }
  }, [pathname, router]);
    return (
        <View
            style={tw`flex-row bg-white border-t border-t-gray-300 py-[18px] justify-around items-center`}
        >
            {organizationtabs.map((tab) => {
                // এখানে default active `/Drawer/home` set করলাম
                const isActive = pathname === tab.name || 
                                 (pathname === "/" && tab.name === "/Drawer/home");

                return (
                    <TouchableOpacity
                        key={tab.name}
                        onPress={() => router.push(tab.name as any)}
                        style={tw`items-center justify-center`}
                    >
                        {isActive ? tab.activeicon : tab.inactiveicon}
                        {isActive && (
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
