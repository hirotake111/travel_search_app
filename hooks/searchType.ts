import { updatePlace, updateSearchType } from "../redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { SearchType } from "../types";
import { getData } from "../utils/api";

export const useSearchType = () => {
  const dispatch = useAppDispatch();
  const { searchType, bounds } = useAppSelector((s) => s.search);

  const setSearchType = (type: SearchType) => {
    // update search type
    dispatch(updateSearchType(type));
    // also fetch data with new type from API
    if (bounds && bounds.ne.lat) {
      // clear places data
      dispatch(updatePlace([]));
      getData(type, bounds).then((places) => {
        dispatch(updatePlace(places));
      });
    }
  };

  return { searchType, setSearchType };
};
