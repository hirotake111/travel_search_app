import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string) => {
  const [value, setValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    // if value exists in local storage, set it
    if (get()) {
      setValue(get());
    }
  }, []);

  const update = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  const get = () => {
    return JSON.parse(window.localStorage.getItem(key) || "null") as T;
  };

  return [value, update] as const;
};
