import { useCallback, useMemo, useReducer, useState } from "react";
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
    case "UPDATE": {
      const updatedItem = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === updatedItem.id ? updatedItem : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    }

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
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleAddClick = (text: string) => {
    const todoItem: Todo = {
      id: new Date().getTime(),
      text: text,
      isComplete: false,
    };
    dispatch({ type: "ADD", payload: todoItem });
  };

  const handleUpdateClick = useCallback((todo: Todo) => {
    todo.isComplete = !todo.isComplete;
    dispatch({ type: "UPDATE", payload: todo });
  }, []);

  const handleRemoveClick = (todo: Todo) => {
    dispatch({ type: "REMOVE", payload: todo });
  };

  const filterTodo = useMemo(() => {
    switch (filter) {
      case "all":
        return state.todos;
      case "active":
        return state.todos.filter((i) => !i.isComplete);
      case "completed":
        return state.todos.filter((i) => i.isComplete);
      default:
        return state.todos;
        break;
    }
  }, [filter, state.todos]);

  return (
    <div>
      <InputTodo onAddCllick={(text) => handleAddClick(text)} />
      <br></br>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Complete</button>
      <ul>
        {filterTodo.map((todo: Todo) => {
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
