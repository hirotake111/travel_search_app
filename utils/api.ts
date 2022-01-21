import axios from "axios";
import { Bounds } from "google-map-react";
import { Place } from "../types";
import { GetMockResponse } from "./mockDdata";

const API_URL = "/api/search?city=new%20york";

export const getData = async (bounds: Bounds): Promise<Place[]> => {
  const { data } = await axios.get(API_URL, {
    params: { param1: 1 },
  });

  // console.log("result:", result.result.data);
  console.log("data:", data.result);
  return data.result as Place[];
};
