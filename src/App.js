import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const { data } = await axios("http://localhost:8000/todos");
    setIsLoading(false);
    setTodos(data);
  };

  const addTodo = async (obj) => {
    const { data } = await axios.post("http://localhost:8000/todos", obj);
    setTodos([...todos, data]);
  };

  const editTodo = async (obj, id) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    const editTodos = todos.map((todo) => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });
    setTodos(editTodos);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  };

  const switchStatus = async (id, obj) => {
    const { data } = await axios.patch(
      `http://localhost:8000/todos/${id}`,
      obj
    );
    const switchTodos = todos.map((todo) => {
      if (todo.id === data.id) {
        return data;
      }
      return todo;
    });
    setTodos(switchTodos);
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      {isLoading ? (
        <div class="lds-dual-ring"></div>
      ) : (
        <TodoList
          todos={todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          switchStatus={switchStatus}
        />
      )}
    </div>
  );
}

export default App;
