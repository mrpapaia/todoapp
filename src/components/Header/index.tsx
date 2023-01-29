import { Image, View } from "react-native";
import logoPNG from "../../assets/logo.png";
import { styles } from "./styles";
export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logoPNG} />
    </View>
  );
};
