import axios from "axios";
import { Bounds } from "google-map-react";
import { GetMockResponse } from "./mockDdata";

const API_URL = "/api/search?city=new%20york";

export const getData = async () => {
  const response = await axios.get(API_URL, {
    params: { param1: 1 },
  });
  // const response = await GetMockResponse();
  const {
    data: {
      result: { data },
    },
  } = response;
  return data;
};
