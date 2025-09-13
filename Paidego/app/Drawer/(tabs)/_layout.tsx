
import CustomTabBar from "@/components/CustomTabBar";
import PlayerCustomTabBar from "@/components/ui/PlayerCustomTabBar";
import { Tabs, useLocalSearchParams } from "expo-router";



export default function TabLayout() {
    const { role } = useLocalSearchParams<{ role?: string }>();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: "none" },
            }}
            tabBar={() => role === 'player' ? <PlayerCustomTabBar /> : <CustomTabBar/>}
        >
            <Tabs.Screen name="index" />
            
          
        </Tabs>
    );
}