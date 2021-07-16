import { expect } from 'chai';
import { TSORSlice } from '../../src/TSORSlice';
import { ExampleItem1 } from '../mocks/ExampleItem1/ExampleItem1';

describe('TSOR Store', () => {
  it('can create an slice', () => {
    const slice = new TSORSlice<ExampleItem1, any>(ExampleItem1);
    expect(slice.routeName).to.equal('ExampleItem1');
    expect(slice.getSelectors().selectAll).to.be.a('function');
    expect(slice.getReducer()).to.be.a('function');
  });
});
