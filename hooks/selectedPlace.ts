import { updateSelectedPlace } from "../redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const useSelectedPlace = () => {
  const dispatch = useAppDispatch();
  const { selectedPlace } = useAppSelector((s) => s.search);

  const setSelectedPlace = (name: string) => {
    if (name !== selectedPlace) dispatch(updateSelectedPlace(name));
  };

  return { selectedPlace, setSelectedPlace };
};
