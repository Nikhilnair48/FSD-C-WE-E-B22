// Using normalized state + an order array so edits are O(1) and render order is stable/newest-first.

export const initialState = {
  schemaVersion: 1,
  todos: {},        // id -> { id, text, completed, createdAt, updatedAt }
  order: [],        // id[]
  filter: "all",    // 'all' | 'active' | 'completed'
};

let _id = 0;
const nextId = () => String(++_id);

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const text = action.payload.text.trim();
      if (!text) return state;
      const id = nextId();
      const now = Date.now();
      const todo = { id, text, completed: false, createdAt: now, updatedAt: now };
      return {
        ...state,
        todos: { ...state.todos, [id]: todo },
        order: [id, ...state.order],
      };
    }

    case "TOGGLE_TODO": {
      const id = action.payload.id;
      const prev = state.todos[id];
      if (!prev) return state;
      const next = { ...prev, completed: !prev.completed, updatedAt: Date.now() };
      return {
        ...state,
        todos: { ...state.todos, [id]: next },
      };
    }

    case "EDIT_TODO": {
      const { id, text } = action.payload;
      const prev = state.todos[id];
      if (!prev) return state;
      const next = { ...prev, text: text.trim(), updatedAt: Date.now() };
      // move edited todo to front for "recent activity" feel
      const order = [id, ...state.order.filter((x) => x !== id)];
      return { ...state, todos: { ...state.todos, [id]: next }, order };
    }

    case "DELETE_TODO": {
      const id = action.payload.id;
      if (!state.todos[id]) return state;
      const { [id]: _, ...rest } = state.todos;
      return { ...state, todos: rest, order: state.order.filter((x) => x !== id) };
    }

    case "CLEAR_COMPLETED": {
      const remainingIds = state.order.filter((id) => !state.todos[id].completed);
      const remainingTodos = {};
      remainingIds.forEach((id) => (remainingTodos[id] = state.todos[id]));
      return { ...state, todos: remainingTodos, order: remainingIds };
    }

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}