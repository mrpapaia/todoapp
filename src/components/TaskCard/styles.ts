import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 8,
    backgroundColor: theme.COLORS.GRAY_500,
    height: 64,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_400,
  },
  deleteButton: {
    width: 32,
    height: 32,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    fontFamily: theme.FONTS.REGULAR,
    fontSize: theme.SIZE.SM,
    color: theme.COLORS.GRAY_100,
  },
  text_completed: {
    textDecorationLine: "line-through",
    color: theme.COLORS.GRAY_300,
  },
});
