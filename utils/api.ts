import axios from "axios";
import { Bounds } from "google-map-react";
import { Place, SearchType } from "../types";

const API_URL = "/api/search";

export const getData = async (
  type: SearchType,
  bounds: Bounds
): Promise<Place[]> => {
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
