import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const { localStorage: storage } = window;
  const [value, setValue] = useState<any>(null);

  useEffect(() => {
    // if value exists in local storage, set it
    if (get()) {
      setValue(get());
    }
  }, []);

  const update = (data: object) => {
    storage.setItem(key, JSON.stringify(data));
    setValue(get());
  };

  const get = () => {
    return JSON.parse(storage.getItem(key) || "null");
  };

  return { value, setValue: update };
};
