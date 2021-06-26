import { expect } from 'chai';
import { TSOR_SLICE } from '../../src/TSOR_SLICE';
import { ExampleItem1 } from '../mocks/ExampleItem1/ExampleItem1';

describe('TSOR Store', () => {
  it('can create an slice', () => {
    const slice = new TSOR_SLICE<ExampleItem1, any>(ExampleItem1);
    expect(slice.routeKey).to.equal('ExampleItem1');
    expect(slice.getSelectors().selectAll).to.be.a('function');
    expect(slice.getReducer()).to.be.a('function');
  });
});
