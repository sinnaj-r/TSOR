import axios, { AxiosRequestConfig } from 'axios';
import buildQuery, { QueryOptions } from 'odata-query';
import { IDObject } from '../../types/IDObject';
import { SettingsState } from '../../types/SettingsState';

export class RequestError extends Error {
  errorCode: number | undefined;

  constructor(errorBody: string, errorCode?: number) {
    super(`${errorBody} (${errorCode})`);
    this.errorCode = errorCode;
  }
}

export type ODataResponse<T> =
  | string
  | {
      value: T[];
    }
  | T;

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
export const makeRequest = async <K, T extends IDObject, S>(
  method: AxiosRequestConfig['method'],
  apiPrefix: string,
  query: Partial<QueryOptions<T>>,
  settings: SettingsState,
  data?: any,
) => {
  // TODO Types
  const { url, headers: additionalHeaders } = settings;
  const urlArgs = buildQuery(query);
  const delimiter = /^[?(]/.test(urlArgs) ? '' : '/';

  const headers: { [key: string]: string } = {
    'x-requested-with': 'XMLHttpRequest',
    ...additionalHeaders,
  };

  const requestUrl = `${url}/${apiPrefix}${delimiter}${urlArgs}`;
  try {
    const result = await axios.request<ODataResponse<T>>({
      method,
      url: requestUrl,
      data,
      headers,
    });

    if (typeof result.data === 'string') {
      throw new RequestError(result.data, result.status);
    }
    if (!('value' in result.data)) {
      return [result.data];
    }
    return result.data.value;
  } catch (err) {
    console.error(err);
    throw new RequestError(
      typeof err.response.data === 'string'
        ? err.response.data
        : err.response.statusText,
      err.response.status,
    );
  }
};
