import {
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
} from '../../cloud-sdk-js/packages/core/dist';
import {
  Entity,
  RequestBuilder,
} from '../../cloud-sdk-js/packages/core/dist/odata-common';

export interface RequestBuilderInstance<T extends Entity>
  extends RequestBuilder<T> {
  /**
   * Returns a request builder for retrieving one `NewsItem` entity based on its keys.
   * @param id Key property. See [[NewsItem.id]].
   * @returns A request builder for creating requests to retrieve one `NewsItem` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<T>;

  /**
   * Returns a request builder for querying all `NewsItem` entities.
   * @returns A request builder for creating requests to retrieve all `NewsItem` entities.
   */
  getAll(): GetAllRequestBuilder<T>;
}
