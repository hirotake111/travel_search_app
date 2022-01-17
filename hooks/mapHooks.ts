import { useState } from "react";
import { Coords } from "google-map-react";

const defaultValue = {
  lat: 51.5072, // default -> London
  lng: 0.1276,
};

export const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coords>(defaultValue);
  const [boundaries, setBoundaries] = useState<Boundaries>({
    ne: { ...defaultValue },
    sw: { ...defaultValue },
  });
  const [zoom, setZoom] = useState(11);

  return { coordinates, setCoordinates, setBoundaries, zoom };
};
