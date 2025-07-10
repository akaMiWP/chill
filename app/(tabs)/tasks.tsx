import AnimatedInputBar from "@/components/AnimatedInputBar";
import RadioButton from "@/components/RadioButton";
import { loadTodos, saveTodos } from "@/storage/todoStorage";
import Todo from "@/types/Todo";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import uuid from "react-native-uuid";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <View className="flex-row items-center py-2">
      <Text className="font-normal flex-1">{todo.name}</Text>
      <RadioButton
        className="ml-auto"
        finished={todo.finished}
        onPressed={(enabled: boolean) => {
          console.log("<<<", enabled);
        }}
      />
    </View>
  );
};

const Tasks = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        keyExtractor={(item, _) => `${item.id}`}
        className="p-4"
      ></FlatList>

      <AnimatedInputBar
        onDone={(taskText: string) => {
          let newTodo: Todo = {
            id: uuid.v4(),
            name: taskText,
            createdAt: new Date(),
            finished: false,
          };
          setTodos([...todos, newTodo]);
          saveTodos([...todos, newTodo]);
        }}
      />
    </View>
  );
};

export default Tasks;
