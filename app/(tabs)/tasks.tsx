import RadioButton from "@/components/RadioButton";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Todo {
  name: string;
  finished: boolean;
}

const mockTodos: Todo[] = [
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
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={mockTodos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        className="p-4"
      ></FlatList>

      <View className="p-4">
        <TouchableOpacity className="ml-auto rounded-[28px] bg-[#FABF4F] w-[64px] h-[56px] justify-center">
          <Text className="pl-4 text-4xl font-light">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tasks;
