import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliceApi = createApi({
  reducerPath: "sliceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/ru",
  }),
  endpoints: (build) => ({
    getListSuras: build.query({
      query: () => "/index.json",
    }),
    getOneSura: build.query({
      query: (id) => `/${id}.json`,
    }),
  }),
});

export const { useGetListSurasQuery, useGetOneSuraQuery } = sliceApi;
