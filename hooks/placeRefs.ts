import { createRef, RefObject, useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";

export const usePlaceRefs = () => {
  const { places, selectedPlace } = useAppSelector((s) => s.search);
  const [refs, setRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    setRefs(places.map(() => createRef<HTMLDivElement>()));
  }, [places]);

  useEffect(() => {
    if (!selectedPlace) return;
    // using RegObject scroll and hight item
    const idx = places.map((p) => p.name).indexOf(selectedPlace);
    refs[idx]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedPlace]);

  return { refs };
};
