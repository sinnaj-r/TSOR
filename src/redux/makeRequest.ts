import axios, { AxiosRequestConfig } from 'axios';
import buildQuery, { QueryOptions } from 'odata-query';
import { SettingsState } from '../../types/SettingsState';

class RequestError extends Error {
  errorCode: number | undefined;

  constructor(errorBody: string, errorCode?: number) {
    super(`${errorBody} (${errorCode})`);
    this.errorCode = errorCode;
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
// eslint-disable-next-line unused-imports/no-unused-vars
export const makeRequest = async <K, T, S>(
  method: AxiosRequestConfig['method'],
  apiPrefix: string,
  query: Partial<QueryOptions<T>>,
  settings: SettingsState,
  data?: any,
) => {
  // TODO Types
  const { graphUrl, graphLandscape, authToken } = settings;
  const urlArgs = buildQuery(query);
  const delimiter = urlArgs.startsWith('?') ? '' : '/';

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
      url: `${graphUrl}/${apiPrefix}${delimiter}${urlArgs}`,
      data,
      headers,
    });

    return result.data.value as T[];
  } catch (err) {
    throw new RequestError(
      typeof err.response.data === 'string'
        ? err.response.data
        : err.response.statusText,
      err.response.status,
    );
  }
};
