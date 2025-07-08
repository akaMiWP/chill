import AnimatedInputBar from "@/components/AnimatedInputBar";
import RadioButton from "@/components/RadioButton";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

interface Todo {
  name: string;
  finished: boolean;
}

let mockTodos: Todo[] = [
  { name: "Grocery Shopping", finished: false },
  { name: "Book Appointment", finished: false },
  { name: "Pay Bills", finished: false },
  { name: "Workout", finished: false },
  { name: "Read a Book", finished: false },
];

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <View className="flex-row items-center py-2">
      <Text className="font-normal">{todo.name}</Text>
      <RadioButton
        className="ml-auto"
        onPressed={(enabled: boolean) => {
          console.log("<<<", enabled);
        }}
      />
    </View>
  );
};

const Tasks = () => {
  const [todos, setTodos] = useState(mockTodos);

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        className="p-4"
      ></FlatList>

      <AnimatedInputBar
        onDone={(taskText: string) => {
          let newTodo: Todo = {
            name: taskText,
            finished: false,
          };
          setTodos([...todos, newTodo]);
        }}
      />
    </View>
  );
};

export default Tasks;
