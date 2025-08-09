import { useCallback, useMemo, useState } from "react";
import { useLocalStorageReducer } from "./hooks/useLocalStorageReducer.js";
import { todoReducer, initialState } from "./reducers/todoReducer.js";

export default function AppWithReducer() {
  // bind the reducer to localStorage — everything else is normal React
  const [state, dispatch] = useLocalStorageReducer("todoDemo", todoReducer, initialState);

  // derived values — I keep these memoized so renders stay cheap on large lists
  const todos = useMemo(() => state.order.map((id) => state.todos[id]).filter(Boolean), [state]);
  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  const filtered = useMemo(() => {
    switch (state.filter) {
      case "active": return todos.filter((t) => !t.completed);
      case "completed": return todos.filter((t) => t.completed);
      default: return todos;
    }
  }, [todos, state.filter]);

  // stable handlers to avoid re-renders in child items
  const add = useCallback((text) => dispatch({ type: "ADD_TODO", payload: { text } }), [dispatch]);
  const toggle = useCallback((id) => dispatch({ type: "TOGGLE_TODO", payload: { id } }), [dispatch]);
  const edit = useCallback((id, text) => dispatch({ type: "EDIT_TODO", payload: { id, text } }), [dispatch]);
  const remove = useCallback((id) => dispatch({ type: "DELETE_TODO", payload: { id } }), [dispatch]);
  const clearCompleted = useCallback(() => dispatch({ type: "CLEAR_COMPLETED" }), [dispatch]);
  const setFilter = useCallback((f) => dispatch({ type: "SET_FILTER", payload: f }), [dispatch]);

  return (
    <div className="container">
      <h1>Todo — useLocalStorageReducer</h1>

      <div className="panel">
        <AddTodo onAdd={add} />

        <div className="todo-list">
          {filtered.map((t) => (
            <TodoItem key={t.id} todo={t} onToggle={toggle} onEdit={edit} onDelete={remove} />
          ))}
        </div>

        <Footer
          activeCount={activeCount}
          filter={state.filter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

/* components kept in this file to keep the demo tiny */

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };
  return (
    <form onSubmit={submit} className="row" style={{ marginBottom: 12 }}>
      <input
        className="input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button className="btn primary" type="submit">Add</button>
    </form>
  );
}

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const save = (e) => {
    e.preventDefault();
    onEdit(todo.id, text);
    setEditing(false);
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label="toggle"
      />

      {!editing ? (
        <div className="text" onDoubleClick={() => setEditing(true)}>{todo.text}</div>
      ) : (
        <form onSubmit={save}>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={save}
          />
        </form>
      )}

      <div className="actions">
        <button className="btn small" onClick={() => setEditing((v) => !v)}>
          {editing ? "Cancel" : "Edit"}
        </button>
        <button className="btn small" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

function Footer({ activeCount, filter, setFilter, onClearCompleted }) {
  return (
    <div className="footer">
      <span>{activeCount} item{activeCount !== 1 ? "s" : ""} left</span>

      <div className="filters">
        <button className={`filter ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
        <button className={`filter ${filter === "active" ? "active" : ""}`} onClick={() => setFilter("active")}>Active</button>
        <button className={`filter ${filter === "completed" ? "active" : ""}`} onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <button className="btn small" onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}