import { useState } from "react";
import "./App.css";

type Props = {
  onAddCllick: (text: string) => void;
};

function InputTodo({ onAddCllick }: Props) {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    onAddCllick(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}> Add </button>
    </>
  );
}

interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddClick = (text: string) => {
    const todoItem: Todo = {
      id: new Date().getTime(),
      text: text,
      isComplete: false,
    };
    setTodos([...todos, todoItem]);
  };

  const handleUpdateClick = (todo: Todo) => {
    todo.isComplete = !todo.isComplete;
    const foundIndex = todos.findIndex((i) => i.id === todo.id);
    todos[foundIndex] = todo;
    setTodos([...todos]);
  };

  const handleDeleteClick = (todo: Todo) => {
    const foundIndex = todos.findIndex((i) => i.id === todo.id);
    todos[foundIndex] = todo;
    setTodos([...todos.slice(0, foundIndex), ...todos.slice(foundIndex + 1)]);
  };

  return (
    <div>
      <InputTodo onAddCllick={(text) => handleAddClick(text)} />

      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                cursor: "pointer",
                textDecoration: todo.isComplete ? "line-through" : "none",
              }}
            >
              <span style={{ marginRight: 20 }}>{todo.text}</span>
              <button
                style={{
                  border: "1px solid #eee",
                  margin: 5,
                  borderRadius: 5,
                }}
                onClick={() => handleUpdateClick(todo)}
              >
                {" "}
                ❤️{" "}
              </button>
              <button
                style={{
                  border: "1px solid #eee",
                  margin: 5,
                  borderRadius: 5,
                }}
                onClick={() => handleDeleteClick(todo)}
              >
                {" "}
                🗑️{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
