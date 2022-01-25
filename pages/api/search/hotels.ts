// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from "axios";
import { GetMockResponse } from "../../../utils/mockDdata";

type Data = {
  result: any;
};

export default async function getHotel(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var options: AxiosRequestConfig = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary",
    params: { ...req.query },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPIKEY || "",
    },
  };
  try {
    // perform network call to RapiAPI
    const { data } = await axios.request(options);
    // const { data } = await GetMockResponse(); // mock data
    res.status(200).json({ result: data.data || [] });
  } catch (e) {
    res.status(500).send({ result: e });
  }
}
