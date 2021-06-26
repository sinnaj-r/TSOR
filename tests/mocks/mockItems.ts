import { ExampleItem1Type } from './ExampleItem1/ExampleItem1';
import { ExampleItem2Type } from './ExampleItem2/ExampleItem2';

const Ex2WithParent: ExampleItem2Type = {
  id: '3',
  description: '15',
  num1: 500000000000,
  num2: 600000000000,
  extraField: 'Extra Text 3',
  parent: {
    id: '3',
    description: 'Test 3',
    num1: 5,
    num2: 6,
  } as ExampleItem1Type,
};

export const ExampleItem1Data: ExampleItem1Type[] = [
  {
    id: '1',
    description: 'Test 1',
    num1: 1,
    num2: 2,
    items: [
      {
        id: '1',
        description: '12',
        num1: 100000000000,
        num2: 200000000000,
        extraField: 'Extra Text 1',
      } as ExampleItem2Type,
      Ex2WithParent,
    ],
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
    description: '5',
    num1: 100000000000,
    num2: 200000000000,
    extraField: 'Extra Text 1',
  },
  {
    id: '2',
    description: '10',
    num1: 300000000000,
    num2: 400000000000,
    extraField: 'Extra Text 2',
    parent: ExampleItem1Data[1],
  },
  Ex2WithParent,
];
