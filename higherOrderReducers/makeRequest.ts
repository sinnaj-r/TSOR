import axios, { AxiosRequestConfig } from 'axios';
import buildQuery, { QueryOptions } from 'odata-query';
import { ROUTES } from '../ROUTES';
import type { RootState } from '../store';

class RequestError extends Error {
  errorBody: { message: string };

  errorCode: number | undefined;

  constructor(errorBody: { message: string }, errorCode?: number) {
    super(`${errorBody.message} (${errorCode})`);
    this.errorBody = errorBody;
    this.errorCode = errorCode;
  }
}

const ENABLE_CORS_PROXY = true;

const URL_PREFIX: string = ENABLE_CORS_PROXY
  ? 'https://corsproxy.cfapps.eu10.hana.ondemand.com/'
  : '';

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
  settings: RootState['settings'],
  data?: any,
) => {
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
      url: `${URL_PREFIX}${graphUrl}/${ROUTES[route]}${delimiter}${urlArgs}`,
      data,
      headers,
    });

    return result.data.value as T[];
  } catch (err) {
    throw new RequestError(err.response.data, err.response.status);
  }
};
