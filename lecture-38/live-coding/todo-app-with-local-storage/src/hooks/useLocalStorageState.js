import { useEffect, useRef, useState } from "react";

/**
 * useLocalStorageState
 * - Mirrors useState: const [value, setValue] = useLocalStorageState(key, initial)
 * - Handles JSON (objects/arrays) transparently
 * - Supports functional updates: setValue(prev => next)
 * - Optional: cross-tab sync via the 'storage' event
 */
export default function useLocalStorageState(
  key,
  initialValue,
  { serialize = JSON.stringify, deserialize = JSON.parse, syncAcrossTabs = false } = {}
) {
  const keyRef = useRef(key);
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) return deserialize(raw);
    } catch(error) {
        console.error("useLocalStorageState", error);
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  // Persist whenever state or key changes
  useEffect(() => {
    // handle key change (rare)
    if (keyRef.current !== key) {
      try {
        localStorage.removeItem(keyRef.current);
      } catch(error) {
        console.error("useLocalStorageState", error);
    }
      keyRef.current = key;
    }
    try {
      localStorage.setItem(key, serialize(state));
    } catch(error) {
        console.error("useLocalStorageState", error);
    }
  }, [key, state, serialize]);

  // Optional: keep state in sync if another tab updates the same key
  useEffect(() => {
    if (!syncAcrossTabs) return;
    const onStorage = (e) => {
      if (e.key === key) {
        try {
          setState(e.newValue == null ? (typeof initialValue === "function" ? initialValue() : initialValue) : deserialize(e.newValue));
        } catch(error) {
        console.error("useLocalStorageState", error);
    }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, deserialize, initialValue, syncAcrossTabs]);

  // Same setter contract as useState (supports function updaters)
  const set = (updater) => {
    setState((prev) => (typeof updater === "function" ? updater(prev) : updater));
  };

  return [state, set];
}