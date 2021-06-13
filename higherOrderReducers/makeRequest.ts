import axios, { AxiosRequestConfig } from 'axios';
import buildQuery, { QueryOptions } from 'odata-query';
import { RouteKeyType, ROUTES } from '../ROUTES';

import type { RootState } from '../store';

export class RequestError extends Error {
  errorCode: number | undefined;

  errorCodeName: string | undefined;

  constructor(errorBody: string, errorCode?: number, errorCodeName?: string) {
    super(`${errorBody} (${errorCode})`);
    this.errorCode = errorCode;
    this.errorCodeName = errorCodeName;
  }
}

/**
 * Execute a HTTP Request. Directly returns the result data.
 * @template T
 * @param {AxiosRequestConfig['method']} method The HTTP Method
 * @param {RouteKeyType} route The Route (see the ROUTES-Object)
 * @param {Partial<QueryOptions<T>>} query An Query-Object in the format of the 'odata-query' package
 * @param {*} [data]
 * @returns
 */
export const makeRequest = async <T>(
  method: AxiosRequestConfig['method'],
  route: RouteKeyType,
  query: Partial<QueryOptions<T>>,
  settings: RootState['settings'],
  data?: any,
) => {
  const { graphUrl, graphLandscape, authToken } = settings;
  const urlArgs = buildQuery(query);
  const delimiter = !urlArgs || urlArgs.match(/^[?(]/i) ? '' : '/';

  const headers: { [key: string]: string } = {
    Landscape: graphLandscape,
    'x-requested-with': 'XMLHttpRequest',
  };
  if (authToken) {
    headers.Authorization = authToken;
  }

  try {
    const result = await axios.request({
      method,
      url: `${graphUrl}/${ROUTES[route]}${delimiter}${urlArgs}`,
      data,
      headers,
    });

    let value: T[] = result.data?.value ?? [result.data];
    // This is a workaround to normalize the id attributes of entities,
    // as in some cases the id attribute is uppercased.

    value = value.map((item: any) => {
      if (item.ID && !item.id) {
        const { ID, ...newItem } = item;
        return { ...newItem, id: ID };
      }

      return item;
    });

    return value;
  } catch (err) {
    throw new RequestError(
      typeof err.response.data === 'string'
        ? err.response.data
        : err.response.statusText,
      err.response.status,
      err.response.statusText,
    );
  }
};
