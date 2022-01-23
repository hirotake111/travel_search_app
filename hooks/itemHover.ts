import { updateHoveredPlace } from "../redux/slices/searchSlice";
import { useAppDispatch } from "../redux/store";

export const useItemHover = () => {
  const dispatch = useAppDispatch();

  const setHoveredPlace = (name: string) => {
    if (name) dispatch(updateHoveredPlace(name));
  };

  return { setHoveredPlace };
};
