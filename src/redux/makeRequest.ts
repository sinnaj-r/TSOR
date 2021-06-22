import { IDObject } from '../../types/IDObject';
import { SettingsState } from '../../types/SettingsState';
import { QueryOptions } from '../JSONQuery/createRequest';

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
  query: QueryOptions<T>,
  settings: SettingsState,
) => {
  // TODO Types
  const { url, headers: additionalHeaders } = settings;
};
