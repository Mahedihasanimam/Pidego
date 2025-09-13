// app/Drawer/_layout.tsx

import CustomDrawerContent from '@/components/ui/CustomDrawerContent';
import { Drawer } from 'expo-router/drawer';



export default function DrawerLayout() {


    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#fff',
                    width: 240,
                },
            }}
            drawerContent={() => <CustomDrawerContent />}
        >
            <Drawer.Screen
                name="/tabs/chat"
                options={{ drawerLabel: 'Chat' }}
            />
            <Drawer.Screen
                name="/tabs/profile"
                options={{ drawerLabel: 'Profile' }}
            />

            

        </Drawer>
    );
}