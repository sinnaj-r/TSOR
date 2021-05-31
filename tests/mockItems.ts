import { CompositionMapType } from '../src/redux/compositions';
import { ExampleItem1Type, ExampleItem2Type } from './TestTypes';

export const ExampleItem1Data: ExampleItem1Type[] = [
  {
    id: '1',
    description: 'Test 1',
    num1: 1,
    num2: 2,
    body: {
      items: [
        {
          id: '1',
          description: 12,
          num1: 100000000000,
          num2: 200000000000,
          extraField: 'Extra Text 1',
        },
      ],
    },
  },
  {
    id: '2',
    description: 'Test 2',
    num1: 3,
    num2: 4,
  },
];

export const ExampleItem2Data: ExampleItem2Type[] = [
  {
    id: '1',
    description: 5,
    num1: 100000000000,
    num2: 200000000000,
    extraField: 'Extra Text 1',
  },
  {
    id: '2',
    description: 10,
    num1: 300000000000,
    num2: 400000000000,
    extraField: 'Extra Text 2',
    ref: ExampleItem1Data[1],
  },
];

export const ExampleCompositions: CompositionMapType = {
  compositions: {
    ExampleItem1: {
      body: {
        to: 'ExampleItem1Body',
        isCollection: false,
      },
    },
    ExampleItem1Body: {
      items: {
        to: 'ExampleItem2',
        isCollection: true,
      },
    },
    ExampleItem2: {
      ref: { to: 'ExampleItem1', isCollection: false },
    },
  },
  apiNames: {
    ExampleItem1: 'exampleItem1',
    ExampleItem2: 'exampleItem2',
  },
};
