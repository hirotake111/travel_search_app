// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from "axios";

type Data = {
  result: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var options: AxiosRequestConfig = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary",
    params: {
      bl_latitude: "11.847676",
      bl_longitude: "108.473209",
      tr_longitude: "109.149359",
      tr_latitude: "12.838442",
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPIKEY || "",
    },
  };
  // perform network call to RapiAPI
  const response = await axios.request(options);
  res.status(200).json({
    result: response.data,
  });
  // res.status(200).send({ result: req.query });
}
