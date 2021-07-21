# TSOR

[![codecov](https://codecov.io/gh/sinnaj-r/TSOR/branch/master/graph/badge.svg?token=HUVNKP25Q7)](https://codecov.io/gh/sinnaj-r/TSOR)

**T**ype**S**cript + **O**Data + **R**edux.

TSOR combines TypeScript, Redux, mongo-esque json queries & the SAP Cloud SDK for JS in one powerful library.

## Install

Install from the NPM repository using yarn or npm:

```shell
yarn add tsor
```

```shell
npm install tsor
```

## Usage

```ts
import { TSORSlice, TSORStore } from 'TSOR';
const businessPartnerSlice = new TSORSlice(BusinessPartner);

const productSlice = new TSORSlice(Product);

const { get: productGet } = productSlice.getActions();
const { selectAll: productSelectAll } = productSlice.getSelectors();

const settingsSlice = new TSORSettingsSlice({
  headers: { Authorization: 'TOKEN' },
  url: 'https://example.com',
});

const store = new TSORStore({
  businessPartner: businessPartnerSlice,
  product: productSlice,
  settings: settingsSlice,
});

// Load Products from Backend
store.dispatch(productGet());

// Select All Products
const products = productSelectAll(store.getState());
```

_You can find more usage examples in the tests._
