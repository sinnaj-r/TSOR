/* eslint-disable no-underscore-dangle */
import { createRequest, QueryOptions } from 'cloud-sdk-json-query';
import { Constructable } from '@sap-cloud-sdk/core/dist';
import { Entity } from '@sap-cloud-sdk/core/dist/odata-v4';
import { SettingsState } from '../types/SettingsState';
/**
 * A Custom Error Class, to be used if a Request Fails.
 *
 * @export
 * @class RequestError
 * @extends {Error}
 */
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
 * Execute a HTTP Request via the SAP Cloud SDK
 *
 * @template K not used & deprecated
 * @template T Type of the Entity
 * @template S Type of the full State
 * @param {Constructable<T>} constructable The SDK Entity
 * @param {QueryOptions<T>} query The JSON-Query
 * @param {SettingsState} settings The Settings used for the request
 * @returns {Promise<T[]>} the resulting data as array (even if there's only one result)
 */
// eslint-disable-next-line unused-imports/no-unused-vars
export const makeRequest = async <K, T extends Entity, S>(
  constructable: Constructable<T>,
  query: QueryOptions<T>,
  settings: SettingsState,
): Promise<T[]> => {
  const { url, headers: additionalHeaders } = settings;
  try {
    let result = await createRequest<T>(constructable, query)
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

    // A Somewhat hacky way, to remove all remaining complex types from response
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
      axiosErr.response?.statusText,
    );
  }
};
