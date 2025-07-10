import AnimatedInputBar from "@/components/AnimatedInputBar";
import RadioButton from "@/components/RadioButton";
import { useTodos } from "@/hooks/useTodos";
import Todo from "@/types/Todo";
import React from "react";
import { FlatList, Text, View } from "react-native";
import uuid from "react-native-uuid";

const TodoItem = ({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: (id: string) => void;
}) => {
  return (
    <View className="flex-row items-center py-2">
      <Text className="font-normal flex-1">{todo.name}</Text>
      <RadioButton
        className="ml-auto"
        finished={todo.finished}
        onPressed={(enabled: boolean) => {
          toggleTodo(todo.id);
        }}
      />
    </View>
  );
};

const Tasks = () => {
  const { todos, addTodo, toggleTodo, removeTodo, isLoading } = useTodos();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} />
        )}
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
          addTodo(newTodo);
        }}
      />
    </View>
  );
};

export default Tasks;
