import axios, { AxiosRequestConfig } from 'axios';
import buildQuery, { QueryOptions } from 'odata-query';
import { store } from '../store';

export const ROUTES = {
  product: 'sap.odm.product/Product',
};

/**
 * Execute a HTTP Request. Directly returns the result data.
 * @template T
 * @param {AxiosRequestConfig['method']} method The HTTP Method
 * @param {keyof typeof ROUTES} route The Route (see the ROUTES-Object)
 * @param {Partial<QueryOptions<T>>} query An Query-Object in the format of the 'odata-query' package
 * @param {*} [data]
 * @returns
 */
export const makeRequest = async <T>(
  method: AxiosRequestConfig['method'],
  route: keyof typeof ROUTES,
  query: Partial<QueryOptions<T>>,
  data?: any,
) => {
  const {
    settings: { graphUrl, graphLandscape, authToken },
  } = store.getState();
  const result = await axios.request({
    method,
    url: `${graphUrl}/${ROUTES[route]}/${buildQuery(query)}`,
    data,
    headers: {
      Authorization: authToken,
      Landscape: graphLandscape,
    },
  });
  return result.data.value as T[];
};
