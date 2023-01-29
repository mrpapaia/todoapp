import { useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { TaskContainer } from "../../components/TaskContainer";

export const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTaks] = useState<Task[]>([]);
  const [numberCreatedTasks, setNumberCreatedTasks] = useState<number>(0);
  const [numberCompletedTasks, setNumberCompletedTasks] = useState<number>(0);

  const handleAddTask = () => {
    const task: Task = {
      id: tasks.length.toString(),
      title: newTask,
      completed: false,
    };
    setTaks((oldState) => [...oldState, task]);
    setNewTask("");
    setNumberCreatedTasks((oldState) => oldState + 1);
  };

  const handleCheckButton = (id: string) => {
    const listChange = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    const completedList = listChange.filter((task) => task.completed);
    const notCompletedList = listChange.filter((task) => !task.completed);
    setNumberCompletedTasks(completedList.length);
    setTaks([...notCompletedList, ...completedList]);
  };

  const handleDeleteButton = (id: string) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTaks(newList);
  };

  return (
    <>
      <Header />
      <NewTask
        taskName={newTask}
        onChangeText={setNewTask}
        onPress={handleAddTask}
      />
      <TaskContainer
        tasks={tasks}
        numberCreated={numberCreatedTasks}
        numberCompleted={numberCompletedTasks}
        handleCheckButton={handleCheckButton}
        handleDeleteButton={handleDeleteButton}
      />
    </>
  );
};
