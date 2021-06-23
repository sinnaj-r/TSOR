import { createRequest } from '../../src/JSONQuery/createRequest';
import { QueryOptions } from '../../src/JSONQuery/types';
import { ExampleItem1 } from '../ExampleItem1/ExampleItem1';

export const getQueryForRequest = (query: QueryOptions<ExampleItem1>) =>
  decodeURIComponent(
    createRequest<ExampleItem1>(ExampleItem1, query).build().query(),
  );
