import axios from "axios";
import { ORD_URL } from "./constants";

type TickerData = {
  inscription: {
    address: string;
  };
};

export const fetchTicker = async (ticker: string): Promise<TickerData> => {
  const response = await axios.get(`${ORD_URL}/tick/${ticker}?json=true`, {
    headers: {
      Accept: "application/json",
    },
  });

  return response.data;
};
