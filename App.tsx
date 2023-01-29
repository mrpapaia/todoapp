import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import theme from "./src/theme";

import { Home } from "./src/screens/Home";
export default function App() {
  const [fontsLoaded] = useFonts({ Inter_700Bold, Inter_400Regular });
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});
