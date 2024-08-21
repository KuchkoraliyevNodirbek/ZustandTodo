// store/todoStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "todo-storage", // unique name for the storage
    }
  )
);

export default useTodoStore;
