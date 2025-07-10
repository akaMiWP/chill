import { loadTodos, saveTodos } from "@/storage/todoStorage";
import Todo from "@/types/Todo";
import { useEffect, useState } from "react";

const STORAGE_KEY = "todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const loaded = await loadTodos();
      setTodos(
        loaded.map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))
      );
      setIsLoading(false);
    })();
  }, []);

  const save = async (nextTodos: Todo[]) => {
    await saveTodos(nextTodos);
    setTodos(nextTodos);
  };

  const addTodo = (todo: Todo) => {
    save([todo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, finished: !todo.finished } : todo
    );

    const sorted = updated.sort((a, b) => {
      if (a.finished === b.finished) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return a.finished ? 1 : -1; // unfinished first
    });

    save(sorted);
  };

  const removeTodo = (id: string) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    save(filtered);
  };

  return {
    todos,
    isLoading,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
