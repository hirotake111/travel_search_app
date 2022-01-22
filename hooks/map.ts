import { useEffect, useState } from "react";
import { Coords, Bounds } from "google-map-react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  updateBounds,
  updateCoordinates,
  updatePlace,
  updateZoom,
} from "../redux/slices/searchSlice";
import { Place } from "../types";
import { getData } from "../utils/api";

export const useCoordinates = (getCrrentPosition: boolean) => {
  // const [coordinates, setCoordinates] = useLocalStorage<Coords>("coords");
  // const [coordinates, setCoordinates] = useState<Coords>();
  // const [boundaries, setBoundaries] = useState<Bounds>(defaultBounds);
  // const [zoom, setZoom] = useState(11);
  const dispatch = useAppDispatch();
  const { coordinates, bounds, zoom, places } = useAppSelector(
    (state) => state.search
  );

  useEffect(() => {
    // if getCrrentLocation is true, then ask user to get current position
    if (getCrrentPosition) {
      console.log("will ask geolocation");
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          console.log("got geolocation data");
          setCoordinates({ lat: latitude, lng: longitude });
        }
      );
    }
  }, []);

  // when bounds gets updated, then get new places data
  useEffect(() => {
    if (bounds) {
      getData("hotels", bounds).then((places) => {
        // console.log("places:", places[0]);
        dispatch(updatePlace(places));
        // dispatch(updatePlace([places[0]]));
      });
    }
  }, [bounds]);

  const setCoordinates = (coordinates: Coords) => {
    dispatch(updateCoordinates(coordinates));
  };

  const setBoundaries = (bounds: Bounds) => {
    dispatch(updateBounds(bounds));
  };

  const setZoom = (zoomLevel: number) => {
    dispatch(updateZoom(zoomLevel));
  };

  const setPlaces = (places: Place[]) => {
    dispatch(updatePlace(places));
  };

  return {
    coordinates,
    setCoordinates,
    bounds,
    setBoundaries,
    zoom,
    setZoom,
    places,
    setPlaces,
  };
};
