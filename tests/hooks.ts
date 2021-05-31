import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ExampleItem1Data, ExampleItem2Data } from './mockItems';

// This sets the mock adapter on the default instance
export const mock = new MockAdapter(axios);

export const mochaHooks = {
  beforeAll() {
    console.log('installing moxios');

    mock.onGet(/.*ExampleItem1\/.*/).reply(200, {
      value: ExampleItem1Data,
    });

    mock.onGet(/.*ExampleItem2\/.*/).reply(200, {
      value: ExampleItem2Data,
    });

    mock.onGet(/.*ExampleItem1\('1'\).*/).reply(200, ExampleItem1Data[0]);

    mock.onGet(/.*ExampleItem1\('42'\).*/).reply(404, 'Not Found');
  },
};
