import { mockGetRequest } from '@sap-cloud-sdk/core/test/test-util/request-mocker';
import { ExampleItem1Data, ExampleItem2Data } from './mockItems';
import { ExampleItem1 } from './ExampleItem1/ExampleItem1';
import { ExampleItem2 } from './ExampleItem2/ExampleItem2';

const destination = {
  name: 'Testination',
  url: '',
};

export const mochaHooks = {
  beforeAll() {
    mockGetRequest(
      {
        responseBody: ExampleItem1Data[0],
        destination,
        path: 'ExampleItem1(id=%271%27)',
      },
      ExampleItem1 as any,
    );

    mockGetRequest(
      {
        responseBody: 'Not Found' as any,
        destination,
        path: 'ExampleItem1(id=%2742%27)',
        statusCode: 404,
      },
      ExampleItem1 as any,
    );
    mockGetRequest(
      {
        responseBody: { value: ExampleItem1Data },
        destination,
      },
      ExampleItem1 as any,
    );

    mockGetRequest(
      {
        responseBody: { value: ExampleItem2Data },
        destination,
      },
      ExampleItem2 as any,
    );
  },
};
// http://localhost/tsor.example/ExampleItem1(id=%2742%27)?$format=json
// http://localhost:80/tsor.example/ExampleItem1(id=%2742%27)
