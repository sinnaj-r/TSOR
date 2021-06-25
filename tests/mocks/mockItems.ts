export const ExampleItem1Data = [
  {
    id: '1',
    description: 'Test 1',
    num1: 1,
    num2: 2,
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
  {
    id: '2',
    description: 'Test 2',
    num1: 3,
    num2: 4,
  },
];

export const ExampleItem2Data = [
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
    parent: ExampleItem1Data[1],
  },
];
