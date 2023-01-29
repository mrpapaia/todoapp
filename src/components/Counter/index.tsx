import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  primary?: boolean;
  count?: number;
};
export const Counter = ({ title, primary = false, count = 0 }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={primary ? styles.titlePrimary : styles.titleSecondary}>
        {title}
      </Text>
      <View style={styles.counter}>
        <Text style={styles.counter_text}>{count}</Text>
      </View>
    </View>
  );
};
