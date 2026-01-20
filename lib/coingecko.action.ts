"use server";

import qs from "query-string";

const COINGECKO_BASE_URL = process.env.COINGECKO_BASE_URL;
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;

if (!COINGECKO_BASE_URL) throw new Error("Could not get base url");
if (!COINGECKO_API_KEY) throw new Error("Could not get API key");

export async function fetcher<T>(
  endpoint: string,
  params?: QueryParams,
  revalidate = 60
): Promise<T> {
  const url = qs.stringifyUrl(
    {
      url: `${COINGECKO_BASE_URL}${endpoint}`,
      query: params,
    },
    { skipEmptyString: true, skipNull: true }
  );

  const response = await fetch(url, {
    headers: {
      "x-cg-demo-api-key": COINGECKO_API_KEY,
      "Content-Type": "application/json",
    } as Record<string, string>,
    next: { revalidate },
  });

  if (!response.ok) {
    const errorBody: CoinGeckoErrorBody = await response
      .json()
      .catch(() => ({}));

    console.log(response);

    throw new Error(
      `API Error: ${response.status}: ${errorBody.error || response.statusText}`
    );
  }
  return response.json();
}
