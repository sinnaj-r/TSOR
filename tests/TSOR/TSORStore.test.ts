/* eslint-disable no-return-await */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable max-lines */
import { expect } from 'chai';
import { selectSettingByPath } from '../../src/redux/settings';
import { TSORSettingsSlice } from '../../src/TSORSettingsSlice';
import { TSORSlice } from '../../src/TSORSlice';
import { resetStoreAction, TSORStore } from '../../src/TSORStore';
import { ExampleItem1 } from '../mocks/ExampleItem1/ExampleItem1';
import { ExampleItem2 } from '../mocks/ExampleItem2/ExampleItem2';
import { createApplySelector, expectRequestedUrlToInclude } from '../helper';
import {
  SETTINGSSLICE_TYPE,
  SLICE1_TYPE,
  SLICE2_TYPE,
  STATE_TYPE,
  STORE_TYPE,
} from '../TestTypes';

describe('TSOR Store', function () {
  let slice1: SLICE1_TYPE;
  let slice2: SLICE2_TYPE;
  let settingsSlice: SETTINGSSLICE_TYPE;
  let store: STORE_TYPE;
  let applySelector: ReturnType<typeof createApplySelector>;

  beforeEach(function () {
    slice1 = new TSORSlice<ExampleItem1, STATE_TYPE>(ExampleItem1);

    slice2 = new TSORSlice<ExampleItem2, STATE_TYPE>(ExampleItem2);

    settingsSlice = new TSORSettingsSlice({
      headers: {},
      url: 'http://localhost:80',
    });

    const reducer = {
      // eslint-disable-next-line no-underscore-dangle
      [ExampleItem1._entityName]: slice1,
      // eslint-disable-next-line no-underscore-dangle
      [ExampleItem2._entityName]: slice2,
      settings: settingsSlice,
    };
    store = new TSORStore(reducer);
    applySelector = createApplySelector(store, slice1, slice2);
  });

  const expectNoError = function () {
    expect(slice1.getSelectors().selectError(store.getState())).to.be.undefined;
    expect(slice1.getSelectors().selectIsIdling(store.getState())).to.be.true;
  };

  const checkForError = (errMsg: string) => {
    expect(
      slice1.getSelectors().selectError(store.getState())?.message,
    ).to.equal(errMsg);
    expect(slice1.getSelectors().selectIsRejected(store.getState())).to.be.true;
  };

  it('can create an store', function () {
    expect(store).to.be.instanceOf(TSORStore);
  });
  it('can use the selectors on an empty set', function () {
    expect(applySelector('selectAll')).to.be.empty;
    expect(applySelector('selectEntities')).to.be.empty;
    expect(applySelector('selectIds')).to.be.empty;
    expect(applySelector('selectTotal')).to.be.equal(0);
    expect(applySelector('selectById', 'test')).to.be.undefined;
  });
  it('can get items & add them to the store', async function () {
    await store.dispatch(slice1.getActions().get());
    expectNoError();
    const item = slice1.getSelectors().selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 'Test 1');
  });
  it('can get a single item & add it to the store', async function () {
    await store.dispatch(slice1.getActions().getWithFilter({ key: '1' }));
    expectNoError();
    const item = slice1.getSelectors().selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', 'Test 1');
  });
  it('sets correct error', async function () {
    await store.dispatch(slice1.getActions().getWithFilter({ key: '42' }));
    checkForError('Not Found (404)');
  });
  it('can dismiss error', async function () {
    await store.dispatch(slice1.getActions().getWithFilter({ key: '42' }));
    checkForError('Not Found (404)');

    await store.dispatch(slice1.getActions().dismissError());
    expectNoError();
  });
  it('can set filter', async function () {
    await store.dispatch(
      slice1.getActions().setFilter({
        filter: {
          description: 'Test',
        },
      }),
    );
    const result = expectRequestedUrlToInclude(
      this.get1Req,
      "$filter=(description eq 'Test')",
    );
    await store.dispatch(slice1.getActions().get());
    expect(await result).to.be.true;
  });
  it('can use getWithFilter', async function () {
    const result = expectRequestedUrlToInclude(
      this.get1Req,
      "$filter=(description eq 'A Description')",
    );
    await store.dispatch(
      slice1.getActions().getWithFilter({
        filter: {
          description: 'A Description',
        },
      }),
    );
    expect(await result).to.be.true;
  });
  it('can use getWithFilter with merged filter', async function () {
    await store.dispatch(
      slice1.getActions().setFilter({
        filter: {
          num1: 5,
        },
      }),
    );
    const result = expectRequestedUrlToInclude(
      this.get1Req,
      "$filter=(num1 eq 5 and description eq 'A Description')",
    );

    await store.dispatch(
      slice1.getActions().getWithFilter({
        filter: {
          description: 'A Description',
        },
      }),
    );
    expect(await result).to.be.true;
  });
  it('can clear', async function () {
    await store.dispatch(slice1.getActions().get());
    await store.dispatch(slice2.getActions().get());

    expect(applySelector('selectTotal')).to.be.equal(3);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(3);
    await store.dispatch(slice1.getActions().clear());
    expect(applySelector('selectTotal')).to.be.equal(0);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(3);
  });

  it('can reset store', async function () {
    await store.dispatch(slice1.getActions().get());
    await store.dispatch(slice2.getActions().get());

    expect(applySelector('selectTotal')).to.be.equal(3);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(3);
    await store.dispatch(resetStoreAction());
    expect(applySelector('selectTotal')).to.be.equal(0);
    expect(applySelector('selectTotal', undefined, 2)).to.be.equal(0);
  });
  it('can setAll', async function () {
    await store.dispatch(slice1.getActions().get());
    expectNoError();
    const item1Before = slice1
      .getSelectors()
      .selectById(store.getState(), '1')!;
    const item2Before = slice1
      .getSelectors()
      .selectById(store.getState(), '2')!;
    expect(item1Before).to.haveOwnProperty('description', 'Test 1');
    expect(item2Before).to.haveOwnProperty('description', 'Test 2');

    await store.dispatch(
      // TODO Types
      slice1.getActions().setAll([{ ...item2Before, id: '1' } as any]),
    );

    const item1After = slice1.getSelectors().selectById(store.getState(), '1')!;
    const item2After = slice1.getSelectors().selectById(store.getState(), '2')!;
    expect(item2Before).to.deep.equal(item2After);
    expect(item1After.description).to.equal(item2Before.description);
    expect(item1After.num1).to.not.equal(item1Before.num1);
  });

  it('can resolve compositions - with empty store', async function () {
    await store.dispatch(slice1.getActions().get());
    const item = slice2.getSelectors().selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', '12');
  });
  it('can resolve compositions - with full store', async function () {
    await store.dispatch(slice2.getActions().get());
    await store.dispatch(slice1.getActions().get());
    const item = slice2.getSelectors().selectById(store.getState(), '1');
    expect(item).to.haveOwnProperty('description', '12');
  });
  it('can resolve compositions - with 1:1 composition', async function () {
    await store.dispatch(slice2.getActions().get());
    const item = slice1.getSelectors().selectById(store.getState(), '2');
    expect(item).to.haveOwnProperty('description', 'Test 2');
  });
  it('can set settings', async function () {
    const selectURL = selectSettingByPath('url');
    const oldUrl = selectURL(store.getState());
    const value = 'NOT_A_URL';
    await store.dispatch(
      settingsSlice.getActions().set({ path: 'url', value }),
    );
    const newUrl = selectURL(store.getState());
    expect(newUrl).to.equal(value);
    expect(newUrl).to.not.equal(oldUrl);
  });
  it('can set multiple settings', async function () {
    const oldState = store.getState().settings;
    const value = { url: 'NOT_A_URL', headers: { test: 1 } };
    await store.dispatch(settingsSlice.getActions().setMultiple(value));
    const newState = store.getState().settings;
    expect(newState).to.deep.equal(value);
    expect(newState).to.not.deep.equal(oldState);
  });
  it('sets pending correct', async function () {
    const req = store.dispatch(slice1.getActions().getWithFilter({ key: '2' }));
    expect(slice1.getSelectors().selectIsPending(store.getState())).to.be.true;
    await req;
  });
  it('throws errors on writing http methods', async function () {
    expect(
      store.dispatch(slice2.getActions().patch({ id: '1' })),
    ).to.be.rejectedWith('Not Implemented!');
    expect(
      store.dispatch(slice2.getActions().post({} as any)),
    ).to.be.rejectedWith('Not Implemented!');
    expect(
      store.dispatch(slice2.getActions().deleteById('1')),
    ).to.be.rejectedWith('Not Implemented!');
  });

  it('throws when using count', async function () {
    expect(
      store.dispatch(
        slice1.getActions().getWithFilter({
          count: true,
        }),
      ),
    ).to.be.rejectedWith('Count is not implemented yet!');
  });

  // TODO: Not Tested yet
  it('uses the authentication magic of the Cloud SDK');
  // TODO: Not Implemented yet
  it('saves a $count result somewhere in the state (thereby supporting count)');
  it('caches only IDs for a filter');
  it('invalidates the cache (by being smart)');
  it("doesn't create errors when using uppercase properties");
  it('generates const _entityName s');
  it('can generate documentation for the API');

  // TODO General Stuff
  // - Create "getX" functions on TSOR Slice for everything else as well
  // - Move Normalizr Config to Store
  // - Make Settings Slice Nice
  // - Konzept für react-redux überlegen; Exportieren wir den `Provider` ?
  // - Automatisches composen des States (möglich u.A. über die Entity Name)
  // - moment & big number deaktivierbar machen!

  // - SEHR WICHTIG: Selectoren bereitstellen, die denormalisieren! (Uff)
  // - SEHR WICHTIG - Override des Entity Names erlauben (zumindest für den State-Namen)
  // - SEHR WICHTIG: _defaultServicePath mit dem richtigen Pfad füllen!
  // - loading, ... als Enum Verpacken

  // DONE
  // - SEHR WICHTIG: `| null` von den Typen entfernen!
  // - SEHR WICHTIG: Normalizr nur für typen im State! (Idee: Generierung der Config in den TSOR Store verschieben!)
  // - Loading Selektoren
});
