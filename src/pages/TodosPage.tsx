import { useReducer, useRef } from "react";
import { ITodo, todoReducer } from "../reducers/todoReducer";

const TodosPage = () => {
  // to read the  value from the input field -- let's use useRef
  const todoInput = useRef<HTMLInputElement>(null);

  const [todoState, todoDispatch] = useReducer(todoReducer, []);
  // in the above line todoState is defaultState
  // todoDispatch is the one using which you can call the reducer

  const handleAddTodo = () => {
    console.log(todoInput.current?.value);
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 10000000),
      title: todoInput.current!.value,
      status: false,
    };

    todoDispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  return (
    <div className="row">
      <h1>Todos</h1>

      <div className="col-md-6 offset-md-3">
        <p>Listing Todos</p>
        <div className="input-group mb-3">
          {/* Let's try uncontrolled component */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            ref={todoInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            ADD
          </button>
        </div>

        <ul className="list-group">
          {todoState.map((todo: ITodo) => (
            <li className="list-group-item" key={todo.id}>
              <span>{todo.title}</span>
              <span className="text-end ms-2">
                <button className="btn btn-sm btn-dark">Edit</button>{" "}
                <button className="btn btn-sm btn-dark">Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;
