import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(drawer)" />

        <Stack.Screen
          name="Modals/createNewTeam"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: "fitToContents",
        
          }}
        />
      </Stack>
    </>
  );
}
