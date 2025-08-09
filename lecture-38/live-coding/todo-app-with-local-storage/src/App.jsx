import { useState } from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";

export default function App() {
  const [todos, setTodos] = useLocalStorageState("todos-demo", []);
  const [text, setText] = useState("");

  const add = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setTodos((prev) => [{ id: crypto.randomUUID(), text: t, done: false }, ...prev]);
    setText("");
  };

  const toggle = (id) => setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <div style={{ maxWidth: 560, margin: "24px auto", fontFamily: "system-ui, sans-serif" }}>
      <h1>Todo — useLocalStorageState</h1>

      <form onSubmit={add} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb" }}
        />
        <button style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#2563eb", color: "#fff" }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
        {todos.map((t) => (
          <li key={t.id} style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: 8, alignItems: "center",
                                   padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 8, background: "#fff" }}>
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
            <span style={{ textDecoration: t.done ? "line-through" : "none", color: t.done ? "#6b7280" : "inherit" }}>
              {t.text}
            </span>
            <button onClick={() => remove(t.id)} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #e5e7eb" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}