import Todo from "@/types/Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "todos";

export const saveTodos = async (todos: Todo[]) => {
  try {
    const json = JSON.stringify(todos);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.log("Error saving todos", error);
  }
};

export const loadTodos = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (!json) return [];
    const parsed = JSON.parse(json) as Todo[];
    return parsed;
  } catch (error) {
    console.log("Error loading todos", error);
  }
};
