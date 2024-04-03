import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Meta = {
  page?: number
  limit?: number
  count?: number
}

export type Res<T, M = undefined> = {
  data: T
  status: number
  meta: Meta
  mapped?: M
}

const baseURL = import.meta.env.VITE_BASE_URL

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: [],
  // * it's okay to disable eslint here, because the warning is unnecessary. Each endpoint will be injected from an api slice.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
})
