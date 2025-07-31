import { useReducer, useState } from "react";
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

interface TodoState {
  todos: Todo[];
}

interface TodoAction {
  type: "ADD" | "UPDATE" | "REMOVE";
  payload: Todo;
}

const initialState: TodoState = {
  todos: [],
};

function todoFuntional(state: TodoState, action: TodoAction) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "UPDATE":
      const item = action.payload;
      const foundIndex = state.todos.findIndex(
        (i) => i.id === action.payload.id
      );
      state.todos[foundIndex] = item;
      return {
        ...state,
        todos: [
          ...state.todos.slice(
            0,
            state.todos.findIndex((i) => i.id)
          ),
          ...state.todos.slice(
            state.todos.findIndex((i) => i.id === action.payload.id)
          ),
        ],
      };
    case "REMOVE":
      return {
        ...state,
        todos: [
          ...state.todos.slice(
            0,
            state.todos.findIndex((i) => i.id)
          ),
          ...state.todos.slice(
            state.todos.findIndex((i) => i.id === action.payload.id) + 1
          ),
        ],
      };

    default:
      return state;
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(todoFuntional, initialState);
  //const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddClick = (text: string) => {
    const todoItem: Todo = {
      id: new Date().getTime(),
      text: text,
      isComplete: false,
    };
    dispatch({ type: "ADD", payload: todoItem });
  };

  const handleUpdateClick = (todo: Todo) => {
    todo.isComplete = !todo.isComplete;
    dispatch({ type: "UPDATE", payload: todo });
  };

  const handleRemoveClick = (todo: Todo) => {
    dispatch({ type: "REMOVE", payload: todo });
  };

  return (
    <div>
      <InputTodo onAddCllick={(text) => handleAddClick(text)} />

      <ul>
        {state.todos.map((todo: Todo) => {
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
                onClick={() => handleRemoveClick(todo)}
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
