import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import clipboardPNG from "../../assets/clipboard.png";

export const Emptylist = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={clipboardPNG} />

      <Text style={[styles.text, styles.textBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[styles.text]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
