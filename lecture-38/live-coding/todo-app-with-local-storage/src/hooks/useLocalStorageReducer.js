import { useEffect, useReducer } from "react";

/**
 * Keep serialization here so components don't need to manage localStorage mechanics.
 * - load: JSON.parse with fallback
 * - save: JSON.stringify
 * - migration hook: use schemaVersion if state evolve
 */
const loadState = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch(error) {
    console.error("Error saving state", error);
  }
};

export function useLocalStorageReducer(key, reducer, initialState) {
  // initialize from localStorage once (third arg is init function)
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(key, init));

  // persist on every change
  useEffect(() => {
    saveState(key, state);
  }, [key, state]);

  return [state, dispatch];
}