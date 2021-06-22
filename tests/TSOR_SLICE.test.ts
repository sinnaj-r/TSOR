import { expect } from 'chai';
import { TSOR_SLICE } from '../src/TSOR_SLICE';
import { ExampleItem1 } from './ExampleItem1/ExampleItem1';

describe('TSOR Store', () => {
  it('can create an slice', () => {
    const routeKey = 'exampleItem' as const;
    const slice = new TSOR_SLICE<typeof routeKey, typeof ExampleItem1, any>(
      ExampleItem1,
    );
    expect(slice.routeKey).to.equal(routeKey);
    expect(slice.selectors.selectAll).to.be.a('function');
    expect(slice.reducer).to.be.a('function');
  });
});
