import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import theme from "../../theme";
type Props = {
  task: Task;
  onCheck?: () => void;
  onDelete?: () => void;
};
export const TaskCard = ({ task, onCheck, onDelete }: Props) => {
  const { title, completed } = task;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        <MaterialIcons
          name={completed ? "check-circle" : "radio-button-unchecked"}
          size={24}
          color={completed ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE}
        />
      </TouchableOpacity>
      <Text style={[styles.text, completed ? styles.text_completed : null]}>
        {title}
      </Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Feather name="trash-2" size={14} color={theme.COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  );
};
