import { TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import theme from "../../theme";
import { styles } from "./styles";

type Props = {
  taskName: string;
  onChangeText: (value: string) => void;
  onPress: () => void;
};
export const NewTask = ({ taskName, onChangeText, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskName}
        placeholder={"Adicione uma nova tarefa"}
        placeholderTextColor={theme.COLORS.GRAY_300}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Feather name="plus-circle" size={16} color={theme.COLORS.GRAY_100} />
      </TouchableOpacity>
    </View>
  );
};
