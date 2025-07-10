import AnimatedInputBar from "@/components/AnimatedInputBar";
import RadioButton from "@/components/RadioButton";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import uuid from "react-native-uuid";

interface Todo {
  id: string;
  name: string;
  createdAt: Date;
  finished: boolean;
}

let mockTodos: Todo[] = [
  {
    id: uuid.v4(),
    name: "Grocery Shopping",
    createdAt: new Date(),
    finished: false,
  },
  {
    id: uuid.v4(),
    name: "Book Appointment",
    createdAt: new Date(),
    finished: false,
  },
  {
    id: uuid.v4(),
    name: "Pay Bills",
    createdAt: new Date(),
    finished: false,
  },
  {
    id: uuid.v4(),
    name: "Workout",
    createdAt: new Date(),
    finished: false,
  },
  {
    id: uuid.v4(),
    name: "Read a Book",
    createdAt: new Date(),
    finished: false,
  },
];

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
  const [todos, setTodos] = useState(mockTodos);

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
        }}
      />
    </View>
  );
};

export default Tasks;
