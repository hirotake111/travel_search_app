import { useState } from "react";
import { updateCoordinates } from "../redux/slices/searchSlice";
import { useAppDispatch } from "../redux/store";

type Autocomplete = google.maps.places.Autocomplete;
export const useSearchbar = () => {
  const dispatch = useAppDispatch();

  const [autocomplete, setAutocomplete] = useState<Autocomplete | null>(null);

  const setCoordUsingAutocomplete = () => {
    const location = autocomplete?.getPlace().geometry?.location;
    if (location) {
      dispatch(
        updateCoordinates({
          lat: location.lat(),
          lng: location.lng(),
        })
      );
      return;
    }
    console.log("autocomplete is not loaded yet.");
  };

  return { autocomplete, setAutocomplete, setCoordUsingAutocomplete };
};
