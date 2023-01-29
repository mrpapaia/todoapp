import { FlatList, Image, StyleSheet, View } from "react-native";
import theme from "../../theme";
import { Counter } from "../Counter";

import { Emptylist } from "../EmptyList";
import { TaskCard } from "../TaskCard";
import { useEffect, useState } from "react";
import { styles } from "./styles";

type Props = {
  tasks: Task[];
  numberCreated: number;
  numberCompleted: number;
  handleCheckButton: (id: string) => void;
  handleDeleteButton: (id: string) => void;
};

export const TaskContainer = ({
  tasks,
  numberCreated,
  numberCompleted,
  handleCheckButton,
  handleDeleteButton,
}: Props) => {
  const renderItem = ({ item }: { item: Task }) => {
    return (
      <TaskCard
        task={item}
        onCheck={() => handleCheckButton(item.id)}
        onDelete={() => handleDeleteButton(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Counter primary title="Criadas" count={numberCreated} />
        <Counter title="Concluídas" count={numberCompleted} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => <Emptylist />}
      />
    </View>
  );
};
