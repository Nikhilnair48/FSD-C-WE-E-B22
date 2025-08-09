import { useState } from "react";

/**
 * Super small Tailwind v4 demo:
 * - Shows spacing, flex/grid, borders, rounded, shadows, hover/focus, ring
 * - No dark mode, no custom utilities, no @apply (just utilities in JSX)
 */
export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(["Try Tailwind", "Love utilities"]);
  const [text, setText] = useState("");

  const add = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setItems((prev) => [t, ...prev]);
    setText("");
  };
  const remove = (i) => setItems((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div className="mx-auto max-w-2xl p-6">
      {/* Header */}
      <header className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 shadow"></div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Tailwind v4 Demo</h1>
          <p className="text-xs text-slate-600">npm setup</p>
        </div>
      </header>

      {/* Two simple cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Counter */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">Counter</h2>

          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-3xl font-semibold tabular-nums">{count}</div>

            <div className="flex gap-2">
              <button
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => setCount((c) => c - 1)}
              >
                −1
              </button>
              <button
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
              <button
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => setCount((c) => c + 1)}
              >
                +1
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            Utilities demoed: <code>rounded</code>, <code>border</code>, <code>shadow</code>,{" "}
            <code>hover:</code>, <code>focus:ring</code>, <code>flex</code>, <code>gap</code>, <code>bg</code>, <code>p</code>.
          </p>
        </section>

        {/* Mini List */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow">
          <h2 className="mb-3 text-sm font-semibold text-slate-700">Mini List</h2>

          <form onSubmit={add} className="mb-3 flex gap-2">
            <input
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Add an item…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
            <button
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Add
            </button>
          </form>

          <ul className="grid gap-2">
            {items.map((t, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
              >
                <span className="text-sm">{t}</span>
                <button
                  onClick={() => remove(i)}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-xs text-slate-600">
            Utilities demoed: <code>grid</code>, <code>gap</code>, <code>rounded</code>, <code>shadow-sm</code>,{" "}
            <code>focus:ring</code>, <code>hover:bg</code>.
          </p>
        </section>
      </div>
    </div>
  );
}