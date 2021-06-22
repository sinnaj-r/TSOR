import { IDObject } from '../../types/IDObject';
import { SettingsState } from '../../types/SettingsState';
import { createRequest } from '../JSONQuery/createRequest';
import { QueryOptions } from '../JSONQuery/types';

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
  constructable: T,
  query: QueryOptions<T>,
  settings: SettingsState,
): Promise<T[]> => {
  // TODO Types
  const { url, headers: additionalHeaders } = settings;
  // TODO Dynamic Path
  try {
    const result = await createRequest<InstanceType<T>>(constructable, query)
      .setCustomServicePath('/bp2020.news/')
      .addCustomHeaders({
        ...additionalHeaders,
      })
      .execute({ url });
    if (typeof result === 'number') {
      throw new RequestError('Count is not implemented yet!');
    }
    if (!Array.isArray(result)) {
      return [result];
    }
    return result;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw new RequestError(
      typeof err.response.data === 'string'
        ? err.response.data
        : err.response.statusText,
      err.response.status,
    );
  }
};
