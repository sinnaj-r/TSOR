import axios, { AxiosRequestConfig } from 'axios';
import buildQuery, { QueryOptions } from 'odata-query';

export const BASE_URL = 'https://sandbox.graph.sap/api/beta';

export const ROUTES = {
  product: 'sap.odm.product/Product',
};

export const HEADER = {
  Authorization:
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIiLCJ6aWQiOiJlMjYzMTNkZi0yNDgzLTRjNWItOTg5Yi03ZWQwOGJmMjk3YzMiLCJhdWQiOiJkZW1vLmFwaS5ncmFwaC5zYXAiLCJleHAiOjQ2ODg2MDkyMjEsImlhdCI6MTYwMzg3ODE0MiwiaXNzIjoiZGVtby5hcGkuZ3JhcGguc2FwIiwic3ViIjoiZGVtb0BncmFwaC5zYXAifQ.1nJljCX2HTUv9swW4a7HgYhxQGfH_DBTRqHrw66Xwv_oPC8bEFo5LpVqXCUrGCuCBLVr-1vrUhBKlfvZD9lg7D3z2Xc70PrmKcUEufa0m6my61QUprYuwMmN89yzsnQSUVwIikm4Po6Xo_cfWOXVDzr0WCjGaG_PAnikHMWFHhHbGpc3X1u-ATFw7Rq0oiulXWfavWBEKKB1zFxQ91dC1T103X4sYk3A2fk-dII8zL2XZ1CeOTi4_ntAYjJ5mm71jN0CwTrUWsLGOGe3aevcIw2QLqH44z96ZRy43LdOr8FzHaATwpd-i9FwQ7HlH8ZDqfHu-6FxBpiI29tT5CfwIQ',
  Landscape: 'Demo',
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
  const result = await axios.request({
    method,
    url: `${BASE_URL}/${ROUTES[route]}/${buildQuery(query)}`,
    data,
    headers: HEADER,
  });
  return result.data.value as T[];
};
