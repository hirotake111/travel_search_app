import { updateGoogleMapsLoaded } from "../redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const useGoogleMaps = () => {
  const dispatch = useAppDispatch();
  const { googleMapsLoaded } = useAppSelector((s) => s.search);

  const setGoogleMapsLoadedStatus = () => {
    dispatch(updateGoogleMapsLoaded());
  };

  return { setGoogleMapsLoadedStatus, googleMapsLoaded };
};
