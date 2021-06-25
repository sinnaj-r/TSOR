import { mockGetRequest } from '@sap-cloud-sdk/core/test/test-util/request-mocker';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { ExampleItem1Data, ExampleItem2Data } from './mocks/mockItems';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';
import { ExampleItem2 } from './mocks/ExampleItem2/ExampleItem2';

chai.use(chaiAsPromised);

const destination = {
  name: 'Testination',
  url: '',
};

export const mochaHooks = {
  beforeAll() {
    console.log("I've just added the hooks");
    this.getByKeyReq = mockGetRequest(
      {
        responseBody: ExampleItem1Data[0],
        destination,
        path: 'ExampleItem1(id=%271%27)',
      },
      ExampleItem1 as any,
    ).persist();

    this.slowRequest = mockGetRequest(
      {
        responseBody: ExampleItem1Data[0],
        destination,
        path: 'ExampleItem1(id=%272%27)',
        delay: 200,
      },
      ExampleItem1 as any,
    ).persist();

    this.getByKeyErrReq = mockGetRequest(
      {
        responseBody: 'Not Found' as any,
        destination,
        path: 'ExampleItem1(id=%2742%27)',
        statusCode: 404,
      },
      ExampleItem1 as any,
    ).persist();

    this.get1Req = mockGetRequest(
      {
        responseBody: { value: ExampleItem1Data },
        destination,
        path: 'ExampleItem1',
      },
      ExampleItem1 as any,
    ).persist();

    this.get2Req = mockGetRequest(
      {
        responseBody: { value: ExampleItem2Data },
        destination,
      },
      ExampleItem2 as any,
    ).persist();
  },
};
// http://localhost/tsor.example/ExampleItem1(id=%2742%27)?$format=json
// http://localhost:80/tsor.example/ExampleItem1(id=%2742%27)
