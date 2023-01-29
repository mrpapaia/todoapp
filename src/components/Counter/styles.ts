import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  titlePrimary: {
    fontFamily: theme.FONTS.BOLD,
    fontSize: theme.SIZE.MD,
    color: theme.COLORS.BLUE,
  },
  titleSecondary: {
    fontFamily: theme.FONTS.BOLD,
    fontSize: theme.SIZE.SM,
    color: theme.COLORS.PURPLE,
  },

  counter: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.GRAY_400,
    height: 19,
    width: 25,
    borderRadius: 999,
  },
  counter_text: {
    fontFamily: theme.FONTS.BOLD,
    fontSize: theme.SIZE.XS,
    color: theme.COLORS.GRAY_200,
  },
});
