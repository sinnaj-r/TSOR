import { createRequest, QueryOptions } from '../../../cloud-sdk-json-query/src';
import { Constructable } from '../../../cloud-sdk-js/packages/core/dist';
import { Entity } from '../../../cloud-sdk-js/packages/core/dist/odata-v4';
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
export const makeRequest = async <K, T extends Entity, S>(
  constructable: Constructable<T>,
  query: QueryOptions<T>,
  settings: SettingsState,
): Promise<T[]> => {
  // TODO Types
  const { url, headers: additionalHeaders } = settings;
  // TODO Dynamic Path
  try {
    let result = await createRequest<T>(constructable, query)
      // eslint-disable-next-line no-underscore-dangle
      .setCustomServicePath(constructable._defaultServicePath || '/')
      .addCustomHeaders({
        ...additionalHeaders,
      })
      .execute({ url });
    if (typeof result === 'number') {
      throw new RequestError('Count is not implemented yet!');
    }
    if (!Array.isArray(result)) {
      result = [result];
    }

    // de-complex data for redux store
    return JSON.parse(JSON.stringify(result));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    const axiosErr = err.rootCause;
    throw new RequestError(
      (typeof axiosErr.response?.data === 'string'
        ? axiosErr.response?.data
        : axiosErr.response?.statusText) ?? 'Unknown Error',
      axiosErr.response?.status ?? 0,
    );
  }
};
