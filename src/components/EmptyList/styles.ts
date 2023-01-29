import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: theme.COLORS.GRAY_400,
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: { marginBottom: 16, marginTop: 48 },
  text: {
    fontFamily: theme.FONTS.REGULAR,
    fontSize: theme.SIZE.SM,

    color: theme.COLORS.GRAY_300,
  },
  textBold: {
    fontFamily: theme.FONTS.BOLD,
  },
});
