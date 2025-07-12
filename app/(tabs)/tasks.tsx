import AnimatedInputBar from "@/components/AnimatedInputBar";
import RadioButton from "@/components/RadioButton";
import { useTodos } from "@/hooks/useTodos";
import Todo from "@/types/Todo";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import uuid from "react-native-uuid";

const TodoItem = ({
  todo,
  toggleTodo,
  onEdit,
}: {
  todo: Todo;
  toggleTodo: (id: string) => void;
  onEdit: (id: string, name: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.name);

  return (
    <View className="flex-row items-center py-2 bg-white px-4">
      <TouchableOpacity
        className="flex-1"
        activeOpacity={0.8}
        onPress={() => setIsEditing(true)}
      >
        {isEditing ? (
          <TextInput
            className={`font-normal flex-1 px-2 bg-[#F5F0E5] ${
              todo.finished ? "line-through text-[#9E8047]" : ""
            }`}
            value={value}
            autoFocus
            onChangeText={setValue}
            onSubmitEditing={() => {
              onEdit(todo.id, value);
              setIsEditing(false);
            }}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <Text
            className={`font-normal flex-1 px-2 text-base ${
              todo.finished ? "line-through text-[#9E8047]" : ""
            }`}
          >
            {todo.name}
          </Text>
        )}
      </TouchableOpacity>
      <RadioButton
        className="ml-auto"
        finished={todo.finished}
        onPressed={() => toggleTodo(todo.id)}
      />
    </View>
  );
};

const Tasks = () => {
  const { todos, isLoading, addTodo, toggleTodo, editTodo, removeTodo } =
    useTodos();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View className="flex-1 bg-white">
      <SwipeListView
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} toggleTodo={toggleTodo} onEdit={editTodo} />
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
