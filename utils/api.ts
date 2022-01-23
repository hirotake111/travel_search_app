import axios from "axios";
import { Bounds } from "google-map-react";
import { Place, SearchType } from "../types";

const API_URL = "/api/search";

export const getData = async (
  type: SearchType,
  bounds: Bounds
): Promise<Place[]> => {
  //http://localhost:3000/api/search/hotels?bl_latitude=11.847676&bl_longitude=108.473209&tr_longitude=109.149359&tr_latitude=12.838442
  const { data } = await axios.get(`${API_URL}/${type}`, {
    params: {
      tr_latitude: bounds.ne.lat,
      tr_longitude: bounds.ne.lng,
      bl_latitude: bounds.sw.lat,
      bl_longitude: bounds.sw.lng,
    },
  });

  // console.log("data:", data.result);
  return data.result as Place[];
};
