import { createApiSlice } from '../higherOrderReducers/HOOdataReducer';
import { CustomerOpportunity } from './opportunity';

type BuPaCountry = {
  name: string;
  descr?: string;
  changeType: string;
  code: string;
  currency?: any;
};
type BuPaTelephoneNumber = {
  id: string;
  isDefault: boolean;
  country: BuPaCountry;
  number: string;
  numberExtension?: null;
  isMobile: boolean;
};
type BuPaWebsite = {
  id: string;
  isDefault: boolean;
  url: string;
};
type BuPaEmailAddress = {
  id: string;
  isDefault: boolean;
  address: string;
};
type BuPaAddressData = {
  id: string;
  validFrom: string;
  validTo: string;
  usages: any;
  postalAddressType: 'organizationPostalAddress';
  organizationPostalAddress: any;
  emailAddresses: BuPaEmailAddress[];
  phoneNumbers: BuPaTelephoneNumber[];
  faxNumbers: BuPaTelephoneNumber[];
  websites: BuPaWebsite;
  communicationPreferences: any;
};
type BuPaIndustry = {
  industrySector: {
    name: string;
    descr?: string;
    code: '91';
  };
  industrySystemType: {
    code: '0001';
  };
  isStandardIndustry: boolean;
};
type BuPaCustomerInformation = {
  isOrderBlocked?: boolean;
  orderBlockedReason?: number;
  isDeliveryBlocked?: boolean;
  deliveryBlockedReason?: number;
  isBillingBlocked?: boolean;
  billingBlockedReason?: number;
  salesOpportunities?: CustomerOpportunity[];
};
export type BuPa = {
  id: string;
  businessPartnerType: 'organization' | 'person';
  addressData: BuPaAddressData[];
  organization?: {
    nameDetails?: {
      formattedOrgNameLine1?: string;
      formattedOrgNameLine2?: string;
      formattedOrgNameLine3?: string;
      formattedOrgNameLine4?: string;
    };
    legalForm?: {
      name: string;
      descr: null;
      code: '01';
    };
    industries?: BuPaIndustry[];
  };
  customerInformation?: BuPaCustomerInformation;
};

const {
  slice: buPasSlice,
  actions: buPaActions,
  adapter,
} = createApiSlice<BuPa>('buPa');

export const {
  get: buPaGet,
  getById: buPaGetById,
  post: buPaPost,
  patch: buPaPatch,
  deleteById: buPaDeleteById,
} = buPaActions;

export const {
  selectIds: buPaSelectIds,
  selectEntities: buPaSelectEntities,
  selectAll: buPaSelectAll,
  selectTotal: buPaSelectTotal,
  selectById: buPaSelectById,
} = adapter.getSelectors(
  (state: { buPa: ReturnType<typeof buPasSlice['reducer']> }) => state.buPa,
);

export const {
  setFilter: buPaSetFilter,
  dismissError: buPaDismissError,
  clear: buPaClear,
  setAll: buPaSetAll,
} = buPasSlice.actions;

export const buPasReducer = buPasSlice.reducer;
