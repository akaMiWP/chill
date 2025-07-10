import AnimatedInputBar from "@/components/AnimatedInputBar";
import RadioButton from "@/components/RadioButton";
import { useTodos } from "@/hooks/useTodos";
import Todo from "@/types/Todo";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import uuid from "react-native-uuid";

const TodoItem = ({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: (id: string) => void;
}) => {
  return (
    <View className="flex-row items-center py-2 bg-white px-4">
      <Text className="font-normal flex-1">{todo.name}</Text>
      <RadioButton
        className="ml-auto"
        finished={todo.finished}
        onPressed={() => toggleTodo(todo.id)}
      />
    </View>
  );
};

const Tasks = () => {
  const { todos, addTodo, toggleTodo, removeTodo, isLoading } = useTodos();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View className="flex-1 bg-white">
      <SwipeListView
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} />
        )}
        renderHiddenItem={({ item }) => (
          <View className="flex-row justify-end items-center h-full px-4 bg-red-500">
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Text className="text-white font-bold">Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={-75}
        disableRightSwipe
        keyExtractor={(item) => `${item.id}`}
      />

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
