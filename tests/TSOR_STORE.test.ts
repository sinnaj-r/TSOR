/* eslint-disable max-lines */
import { expect } from 'chai';
import { combineReducers } from 'redux';
import { createSettingsSlice } from '../src/redux/settings';
import { TSOR_SLICE } from '../src/TSOR_SLICE';
import { resetStoreAction, TSOR_STORE } from '../src/TSOR_STORE';
import { createApplySelector } from './helper';
import { mock } from './hooks';
import { ExampleCompositions } from './mockItems';
import {
  ExampleItem1Type,
  ExampleItem2Type,
  SLICE1_TYPE,
  SLICE2_TYPE,
  STATE_TYPE,
  STORE_TYPE,
} from './TestTypes';

describe('TSOR Store', () => {
  let slice1: SLICE1_TYPE;
  let slice2: SLICE2_TYPE;
  let store: STORE_TYPE;
  let applySelector: ReturnType<typeof createApplySelector>;

  beforeEach(() => {
    const routeKey1 = 'exampleItem1' as const;
    slice1 = new TSOR_SLICE<typeof routeKey1, ExampleItem1Type, STATE_TYPE>(
      routeKey1,
      'ExampleItem1',
      ExampleCompositions,
    );

    const routeKey2 = 'exampleItem2' as const;
    slice2 = new TSOR_SLICE<typeof routeKey2, ExampleItem2Type, STATE_TYPE>(
      routeKey2,
      'ExampleItem2',
      ExampleCompositions,
    );

    const reducer = combineReducers({
      [routeKey1]: slice1.reducer,
      [routeKey2]: slice2.reducer,
      settings: createSettingsSlice({ headers: {}, url: 'http://localhost' })
        .reducer,
    });
    store = new TSOR_STORE(reducer);
    applySelector = createApplySelector(store, slice1, slice2);
  });

  const expectNoError = () => {
    expect(store.getState().exampleItem1.error).to.be.undefined;
    expect(store.getState().exampleItem1.loading).to.equal('idle');
  };

  const checkForError = (errMsg: string) => {
    expect(store.getState().exampleItem1.error?.message).to.equal(errMsg);
    expect(store.getState().exampleItem1.loading).to.equal('rejected');
  };

  it('can create an store', () => {
    expect(store).to.be.instanceOf(TSOR_STORE);
  });
  it('can use the selectors on an empty set', () => {
    expect(applySelector('selectAll')).to.be.empty;
    expect(applySelector('selectEntities')).to.be.empty;
    expect(applySelector('selectIds')).to.be.empty;
    expect(applySelector('selectTotal')).to.be.equal(0);
    expect(applySelector('selectById', 'test')).to.be.undefined;
  });
  it('can get items & add them to the store', async () => {
    await store.dispatch(slice1.getActions().get());
    expectNoError();
    const item = slice1.selectors.selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 'Test 1');
  });
  it('can get a single item & add it to the store', async () => {
    await store.dispatch(slice1.getActions().getById('1'));
    expectNoError();
    const item = slice1.selectors.selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 'Test 1');
  });

  it('sets correct error', async () => {
    await store.dispatch(slice1.getActions().getById('42'));
    checkForError('Not Found (404)');
  });
  it('can dismiss error', async () => {
    await store.dispatch(slice1.getActions().getById('42'));
    checkForError('Not Found (404)');

    await store.dispatch(slice1.getActions().dismissError());
    expectNoError();
  });
  it('sets pending correct');
  it('can set filter', async () => {
    await store.dispatch(
      slice1.getActions().setFilter({
        filter: {
          description: 'Test',
        },
      }),
    );
    await store.dispatch(slice1.getActions().get());

    mock.history.get[mock.history.get.length - 1].url?.includes(
      "$filter=description eq 'Test'",
    );
  });
  it('can clear', async () => {
    await store.dispatch(slice1.getActions().get());
    await store.dispatch(slice2.getActions().get());

    expect(applySelector('selectTotal')).to.be.equal(2);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(2);
    await store.dispatch(slice1.getActions().clear());
    expect(applySelector('selectTotal')).to.be.equal(0);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(2);
  });

  it('can reset store', async () => {
    await store.dispatch(slice1.getActions().get());
    await store.dispatch(slice2.getActions().get());

    expect(applySelector('selectTotal')).to.be.equal(2);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(2);
    await store.dispatch(resetStoreAction());
    expect(applySelector('selectTotal')).to.be.equal(0);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(0);
  });
  it('can setAll', async () => {
    await store.dispatch(slice1.getActions().get());
    expectNoError();
    const item1Before = slice1.selectors.selectById(store.getState(), '1')!;
    const item2Before = slice1.selectors.selectById(store.getState(), '2')!;
    expect(item1Before).to.haveOwnProperty('description', 'Test 1');
    expect(item2Before).to.haveOwnProperty('description', 'Test 2');

    await store.dispatch(
      slice1.getActions().setAll([{ ...item2Before, id: '1' }]),
    );

    const item1After = slice1.selectors.selectById(store.getState(), '1')!;
    const item2After = slice1.selectors.selectById(store.getState(), '2')!;
    expect(item2After).to.be.undefined;
    expect(item1Before.description).to.not.equal(item1After.description);
  });
  it('can use all http methods');
  it('can resolve compositions - with empty store', async () => {
    await store.dispatch(slice1.getActions().get());
    const item = slice2.selectors.selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 12);
  });
  it('can resolve compositions - with full store', async () => {
    await store.dispatch(slice2.getActions().get());
    await store.dispatch(slice1.getActions().get());
    const item = slice2.selectors.selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 12);
  });
  it('can resolve compositions - with 1:1 composition', async () => {
    await store.dispatch(slice2.getActions().get());
    const item = slice1.selectors.selectById(store.getState(), '2');
    expect(item).to.haveOwnProperty('description', 'Test 2');
  });
  it('can interact with settings');
  // To Implement
  it('caches only IDs for a filter');
  it('invalidates the cache (by being smart)');
});
