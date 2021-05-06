import { expect } from 'chai';
import { AnyAction, combineReducers } from 'redux';
import { createSettingsSlice } from '../src/redux/settings';
import { TSOR_SLICE } from '../src/TSOR_SLICE';
import { TSOR_STORE } from '../src/TSOR_STORE';
import { GenericSliceState } from '../types/GenericSliceState';
import { SettingsState } from '../types/SettingsState';
import { ExampleItem1Type, ExampleItem2Type } from './TestTypes';

describe('TSOR Store', () => {
  type STATE_TYPE = {
    exampleItem1: GenericSliceState<ExampleItem1Type>;
    exampleItem2: GenericSliceState<ExampleItem2Type>;
    settings: SettingsState;
  };
  let store: TSOR_STORE<STATE_TYPE, AnyAction>;
  let slice1: TSOR_SLICE<'exampleItem1', ExampleItem1Type, STATE_TYPE>;
  let slice2: TSOR_SLICE<'exampleItem2', ExampleItem2Type, STATE_TYPE>;

  const applySelector = (
    selectorName: keyof typeof slice1['selectors'],
    id?: string,
  ) => {
    const selector = slice1.selectors[selectorName];
    const state = store.getState();
    return selector(state, id!);
  };

  beforeEach(() => {
    const routeKey1 = 'exampleItem1' as const;
    slice1 = new TSOR_SLICE<typeof routeKey1, ExampleItem1Type, STATE_TYPE>(
      routeKey1,
      'ExampleItem1',
    );

    const routeKey2 = 'exampleItem2' as const;
    slice2 = new TSOR_SLICE<typeof routeKey2, ExampleItem2Type, STATE_TYPE>(
      routeKey2,
      'ExampleItem2',
    );

    const reducer = combineReducers({
      [routeKey1]: slice1.reducer,
      [routeKey2]: slice2.reducer,
      settings: createSettingsSlice().reducer,
    });
    store = new TSOR_STORE(reducer);
  });
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
  it('can add an item', async () => {
    await store.dispatch(slice1.getActions().get());
    expect(store.getState().exampleItem1.error).to.be.undefined;
    const item = slice1.selectors.selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 'Test 1');
  });
  it('sets correct error');
  it('can dismiss error');
  it('sets pending correct');
  it('can set filter');
  it('can clear');
  it('can setAll');
  it('can reset store');
  it('can use all http methods');
  it('can resolve compositions');
  it('can interact with settings');
  // To Implement
  it('caches only IDs for a filter');
  it('invalidates the cache (by being smart)');
});
