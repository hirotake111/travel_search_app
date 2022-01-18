import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string) => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    // if value exists in local storage, set it
    if (get()) {
      setValue(get());
    }
  }, []);

  const update = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    const current = get();
    console.log("setting value ", current);
    setValue(current);
  };

  const get = () => {
    return JSON.parse(window.localStorage.getItem(key) || "null") as T;
  };

  return [value, update] as const;
};
