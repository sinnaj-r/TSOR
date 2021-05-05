import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

export const mochaHooks = {
  beforeAll() {
    console.log("installing moxios");

    mock.onGet(/.*ExampleItem1.*/).reply(200, {
      value: [
        {
          id: "1",
          description: "Test 1",
          num1: 1,
          num2: 2,
        },
        {
          id: "2",
          description: "Test 2",
          num1: 3,
          num2: 4,
        },
      ],
    });
    mock.onGet(/.*ExampleItem2.*/).reply(200, {
      value: [
        {
          id: "1",
          description: 5,
          num1: 100000000000,
          num2: 200000000000,
          extraField: "Extra Text 1",
        },
        {
          id: "2",
          description: 10,
          num1: 300000000000,
          num2: 400000000000,
          extraField: "Extra Text 2",
        },
      ],
    });
  },
};
