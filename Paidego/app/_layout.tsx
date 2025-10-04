import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(drawer)" />

        <Stack.Screen
          name="modals/createNewTeam"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: "fitToContents",

          }}
        />

        <Stack.Screen
          name="modals/choosePayment_method"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: "fitToContents",
            contentStyle: { backgroundColor: "transparent" },
          }} />
        <Stack.Screen
          name="modals/Payment_Modal"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: "fitToContents",
            contentStyle: { backgroundColor: "transparent" },
          }} />
      </Stack>
    </>
  );
}
