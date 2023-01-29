import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  input: {
    flex: 1,

    height: 54,
    backgroundColor: theme.COLORS.GRAY_500,
    color: theme.COLORS.GRAY_100,
    padding: 16,
    borderRadius: 6,
  },
  button: {
    marginLeft: 4,
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.BLUE_DARK,
    borderRadius: 6,
  },
});
