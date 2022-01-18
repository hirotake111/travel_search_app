import { useEffect, useState } from "react";
import { Coords, Bounds } from "google-map-react";

const defaultCoords = {
  lat: 51.5072, // default -> London
  lng: 0.1276,
};

const defaultBounds = {
  // default -> London
  nw: {
    lat: 51.6610098726037,
    lng: -0.1268021606445302,
  },
  se: {
    lat: 51.35286914757705,
    lng: 0.3820021606445323,
  },
  sw: {
    lat: 51.35286914757705,
    lng: -0.1268021606445302,
  },
  ne: {
    lat: 51.6610098726037,
    lng: 0.3820021606445323,
  },
};

export const useCoordinates = (getCrrentPosition: boolean) => {
  const [coordinates, setCoordinates] = useState<Coords>(defaultCoords);
  const [boundaries, setBoundaries] = useState<Bounds>(defaultBounds);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    // if getCrrentLocation is true, then ask user to get current position
    if (getCrrentPosition) {
      console.log("will ask geolocation");
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          console.log("got location");
          setCoordinates({ lat: latitude, lng: longitude });
        }
      );
    }
  }, []);

  return { coordinates, setCoordinates, setBoundaries, zoom };
};
