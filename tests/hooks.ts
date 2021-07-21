import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { GetAllRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ExampleItem1Data, ExampleItem2Data } from './mocks/mockItems';
import { ExampleItem1 } from './mocks/ExampleItem1/ExampleItem1';
import { ExampleItem2 } from './mocks/ExampleItem2/ExampleItem2';
import { mockCountRequest, mockGetRequest } from './RequestMocker';

chai.use(chaiAsPromised);

const destination = {
  name: 'Testination',
  url: '',
};

export const mochaHooks = {
  beforeAll() {
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

    this.countReq = mockCountRequest(
      destination,
      5,
      new GetAllRequestBuilderV4(ExampleItem1 as any) as any,
    );

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
    console.log("I've just added the hooks");
  },
};
// http://localhost/tsor.example/ExampleItem1(id=%2742%27)?$format=json
// http://localhost:80/tsor.example/ExampleItem1(id=%2742%27)
