/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable max-lines */
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { schema } from 'normalizr';

const GLAccountLineItem = new schema.Entity('GLAccountLineItem');
const NewsItem = new schema.Entity('NewsItem');
const ExampleItem1 = new schema.Entity('ExampleItem1');
const ExampleItem2 = new schema.Entity('ExampleItem2');
const WorkforcePerson = new schema.Entity('WorkforcePerson');
const Customer = new schema.Entity('Customer');
const CustomerBillingBlockingReasonCodes = new schema.Entity(
  'CustomerBillingBlockingReasonCodes',
);
const CustomerDeliveryBlockingReasonCodes = new schema.Entity(
  'CustomerDeliveryBlockingReasonCodes',
);
const CustomerOpportunity = new schema.Entity('CustomerOpportunity');
const CustomerOrder = new schema.Entity('CustomerOrder');
const CustomerOrderBlockingReasonCodes = new schema.Entity(
  'CustomerOrderBlockingReasonCodes',
);
const CustomerOrderItemTypeCodes = new schema.Entity(
  'CustomerOrderItemTypeCodes',
);
const CustomerOrderReasonCodes = new schema.Entity('CustomerOrderReasonCodes');
const CustomerOrderTypeCodes = new schema.Entity('CustomerOrderTypeCodes');
const CustomerQuote = new schema.Entity('CustomerQuote');
const CustomerQuoteTypeCodes = new schema.Entity('CustomerQuoteTypeCodes');
const CustomerSalesArrangementGroupCodes = new schema.Entity(
  'CustomerSalesArrangementGroupCodes',
);
const CustomerSalesArrangementPriceGroupCodes = new schema.Entity(
  'CustomerSalesArrangementPriceGroupCodes',
);
const CustomerTaxClassificationCodes = new schema.Entity(
  'CustomerTaxClassificationCodes',
);
const SalesCancellationReasonCodes = new schema.Entity(
  'SalesCancellationReasonCodes',
);
const SalesCancellationStatusCodes = new schema.Entity(
  'SalesCancellationStatusCodes',
);
const SalesPartnerRoleCodes = new schema.Entity('SalesPartnerRoleCodes');
const SalesProcessingStatusCodes = new schema.Entity(
  'SalesProcessingStatusCodes',
);
const SalesTextTypeCodes = new schema.Entity('SalesTextTypeCodes');
const BrandCodes = new schema.Entity('BrandCodes');
const Product = new schema.Entity('Product');
const ProductCategoryCodes = new schema.Entity('ProductCategoryCodes');
const ProductGroup = new schema.Entity('ProductGroup');
const ProductPlantStatusCodes = new schema.Entity('ProductPlantStatusCodes');
const ProductTypeCodes = new schema.Entity('ProductTypeCodes');
const ProductTypeGroupCodes = new schema.Entity('ProductTypeGroupCodes');
const QuantityTypeCodes = new schema.Entity('QuantityTypeCodes');
const SerialNumberProfileCodes = new schema.Entity('SerialNumberProfileCodes');
const PurchaseOrder = new schema.Entity('PurchaseOrder');
const Supplier = new schema.Entity('Supplier');
const SupplierAccountingInvoiceSortingOrderCodes = new schema.Entity(
  'SupplierAccountingInvoiceSortingOrderCodes',
);
const SupplierAccountingWithholdingTaxExemptionReasonCodes = new schema.Entity(
  'SupplierAccountingWithholdingTaxExemptionReasonCodes',
);
const SupplierAccountingWithholdingTaxSubTypeCodes = new schema.Entity(
  'SupplierAccountingWithholdingTaxSubTypeCodes',
);
const SupplierAccountingWithholdingTaxTypeCodes = new schema.Entity(
  'SupplierAccountingWithholdingTaxTypeCodes',
);
const SupplierPaymentBlockingReasonCodes = new schema.Entity(
  'SupplierPaymentBlockingReasonCodes',
);
const SupplierPostingBlockingReasonCodes = new schema.Entity(
  'SupplierPostingBlockingReasonCodes',
);
const SupplierPurchasingArrangementCalculationSchemaCodes = new schema.Entity(
  'SupplierPurchasingArrangementCalculationSchemaCodes',
);
const SupplierPurchasingArrangementClassificationCodes = new schema.Entity(
  'SupplierPurchasingArrangementClassificationCodes',
);
const SupplierPurchasingArrangementFunctionCodes = new schema.Entity(
  'SupplierPurchasingArrangementFunctionCodes',
);
const SupplierPurchasingBlockingReasonCodes = new schema.Entity(
  'SupplierPurchasingBlockingReasonCodes',
);
const GoodsMovementCodes = new schema.Entity('GoodsMovementCodes');
const GoodsMovementReasonCodes = new schema.Entity('GoodsMovementReasonCodes');
const GoodsMovementRefDocTypeCodes = new schema.Entity(
  'GoodsMovementRefDocTypeCodes',
);
const GoodsMovementTypeCodes = new schema.Entity('GoodsMovementTypeCodes');
const InventoryTransactionTypeCodes = new schema.Entity(
  'InventoryTransactionTypeCodes',
);
const InventoryValuationCategoryCodes = new schema.Entity(
  'InventoryValuationCategoryCodes',
);
const InventoryValuationTypeCodes = new schema.Entity(
  'InventoryValuationTypeCodes',
);
const MaterialDocument = new schema.Entity('MaterialDocument');
const SpecialStockIndicatorCodes = new schema.Entity(
  'SpecialStockIndicatorCodes',
);
const StockDeterminationGroupCodes = new schema.Entity(
  'StockDeterminationGroupCodes',
);
const StockTypeCodes = new schema.Entity('StockTypeCodes');
const AddressDataUsageCodes = new schema.Entity('AddressDataUsageCodes');
const BusinessPartner = new schema.Entity('BusinessPartner');
const BusinessPartnerGroupTypeCodes = new schema.Entity(
  'BusinessPartnerGroupTypeCodes',
);
const BusinessPartnerRelationship = new schema.Entity(
  'BusinessPartnerRelationship',
);
const BusinessPartnerRoleCodes = new schema.Entity('BusinessPartnerRoleCodes');
const CommunicationMethodCodes = new schema.Entity('CommunicationMethodCodes');
const CompanyLegalFormCodes = new schema.Entity('CompanyLegalFormCodes');
const ContactPersonRelationship = new schema.Entity(
  'ContactPersonRelationship',
);
const IdentificationTypeCodes = new schema.Entity('IdentificationTypeCodes');
const IndustrySectorCodes = new schema.Entity('IndustrySectorCodes');
const IndustrySystemTypeCodes = new schema.Entity('IndustrySystemTypeCodes');
const LifecycleStatusCodes = new schema.Entity('LifecycleStatusCodes');
const RelationshipStatusCodes = new schema.Entity('RelationshipStatusCodes');
const TaxNumberTypeCodes = new schema.Entity('TaxNumberTypeCodes');
const WorkforcePerson_workAssignments = new schema.Entity(
  'WorkforcePerson_workAssignments',
);
const WorkforcePerson_workAssignments_alternateCostAssignment =
  new schema.Entity('WorkforcePerson_workAssignments_alternateCostAssignment');
const WorkforcePerson_workAssignments_alternateCostAssignment_items =
  new schema.Entity(
    'WorkforcePerson_workAssignments_alternateCostAssignment_items',
  );
const WorkforcePerson_workAssignments_enterpriseStructureDetail =
  new schema.Entity(
    'WorkforcePerson_workAssignments_enterpriseStructureDetail',
  );
const FormOfAddressCodes = new schema.Entity('FormOfAddressCodes');
const CountrySubdivisionCodes = new schema.Entity('CountrySubdivisionCodes');
const AcademicTitleCodes = new schema.Entity('AcademicTitleCodes');
const FamilyNameSuffixCodes = new schema.Entity('FamilyNameSuffixCodes');
const FamilyNamePrefixCodes = new schema.Entity('FamilyNamePrefixCodes');
const StreetCodes = new schema.Entity('StreetCodes');
const SecondaryRegionCodes = new schema.Entity('SecondaryRegionCodes');
const TertiaryRegionCodes = new schema.Entity('TertiaryRegionCodes');
const TownCodes = new schema.Entity('TownCodes');
const DistrictCodes = new schema.Entity('DistrictCodes');
const CountryCodes = new schema.Entity('CountryCodes');
const CurrencyCodes = new schema.Entity('CurrencyCodes');
const ScriptCodes = new schema.Entity('ScriptCodes');
const TimeZoneCodes = new schema.Entity('TimeZoneCodes');
const LanguageCodes = new schema.Entity('LanguageCodes');
const Purpose = new schema.Entity('Purpose');
const CostCenter = new schema.Entity('CostCenter');
const InternalOrder = new schema.Entity('InternalOrder');
const NetworkActivity = new schema.Entity('NetworkActivity');
const ProjectControllingObject = new schema.Entity('ProjectControllingObject');
const SalesOrderItem = new schema.Entity('SalesOrderItem');
const BudgetPeriod = new schema.Entity('BudgetPeriod');
const FunctionalArea = new schema.Entity('FunctionalArea');
const Fund = new schema.Entity('Fund');
const FundsCenter = new schema.Entity('FundsCenter');
const Grant = new schema.Entity('Grant');
const CompanyCode = new schema.Entity('CompanyCode');
const Plant = new schema.Entity('Plant');
const StorageLocation = new schema.Entity('StorageLocation');
const PurchasingOrganization = new schema.Entity('PurchasingOrganization');
const EmailUsageCodes = new schema.Entity('EmailUsageCodes');
const JobDetailStatusCodes = new schema.Entity('JobDetailStatusCodes');
const EventCodes = new schema.Entity('EventCodes');
const EventReasonCodes = new schema.Entity('EventReasonCodes');
const EmployeeClassCodes = new schema.Entity('EmployeeClassCodes');
const PaymentTypeCodes = new schema.Entity('PaymentTypeCodes');
const PaymentMethodCodes = new schema.Entity('PaymentMethodCodes');
const BankAccountTypeCodes = new schema.Entity('BankAccountTypeCodes');
const BankControlKeyCodes = new schema.Entity('BankControlKeyCodes');
const PhoneUsageCodes = new schema.Entity('PhoneUsageCodes');
const WorkforcePersonPhotoTypeCodes = new schema.Entity(
  'WorkforcePersonPhotoTypeCodes',
);
const AddressUsageCodes = new schema.Entity('AddressUsageCodes');
const JobClassification = new schema.Entity('JobClassification');
const OrganizationalUnit = new schema.Entity('OrganizationalUnit');
const BusinessPartner_addressData = new schema.Entity(
  'BusinessPartner_addressData',
);
const BusinessPartner_addressData_emailAddresses = new schema.Entity(
  'BusinessPartner_addressData_emailAddresses',
);
const BusinessPartner_addressData_faxNumbers = new schema.Entity(
  'BusinessPartner_addressData_faxNumbers',
);
const BusinessPartner_addressData_organizationPostalAddress = new schema.Entity(
  'BusinessPartner_addressData_organizationPostalAddress',
);
const BusinessPartner_addressData_organizationPostalAddress_scriptVariants =
  new schema.Entity(
    'BusinessPartner_addressData_organizationPostalAddress_scriptVariants',
  );
const BusinessPartner_addressData_personPostalAddress = new schema.Entity(
  'BusinessPartner_addressData_personPostalAddress',
);
const BusinessPartner_addressData_personPostalAddress_scriptVariants =
  new schema.Entity(
    'BusinessPartner_addressData_personPostalAddress_scriptVariants',
  );
const BusinessPartner_addressData_phoneNumbers = new schema.Entity(
  'BusinessPartner_addressData_phoneNumbers',
);
const BusinessPartner_addressData_usages = new schema.Entity(
  'BusinessPartner_addressData_usages',
);
const BusinessPartner_addressData_websites = new schema.Entity(
  'BusinessPartner_addressData_websites',
);
const BusinessPartner_bankAccounts = new schema.Entity(
  'BusinessPartner_bankAccounts',
);
const BusinessPartner_businessPartnerGroup = new schema.Entity(
  'BusinessPartner_businessPartnerGroup',
);
const BusinessPartner_businessPartnerGroup_primaryGroupName = new schema.Entity(
  'BusinessPartner_businessPartnerGroup_primaryGroupName',
);
const BusinessPartner_businessPartnerGroup_primaryGroupName_scriptVariants =
  new schema.Entity(
    'BusinessPartner_businessPartnerGroup_primaryGroupName_scriptVariants',
  );
const BusinessPartner_businessPartnerGroup_secondaryGroupName =
  new schema.Entity('BusinessPartner_businessPartnerGroup_secondaryGroupName');
const BusinessPartner_businessPartnerGroup_secondaryGroupName_scriptVariants =
  new schema.Entity(
    'BusinessPartner_businessPartnerGroup_secondaryGroupName_scriptVariants',
  );
const BusinessPartner_customerInformation = new schema.Entity(
  'BusinessPartner_customerInformation',
);
const BusinessPartner_customerInformation_salesArrangements = new schema.Entity(
  'BusinessPartner_customerInformation_salesArrangements',
);
const BusinessPartner_customerInformation_salesArrangements_functions =
  new schema.Entity(
    'BusinessPartner_customerInformation_salesArrangements_functions',
  );
const BusinessPartner_customerInformation_taxClassifications =
  new schema.Entity('BusinessPartner_customerInformation_taxClassifications');
const BusinessPartner_identifications = new schema.Entity(
  'BusinessPartner_identifications',
);
const BusinessPartner_organization = new schema.Entity(
  'BusinessPartner_organization',
);
const BusinessPartner_organization_industries = new schema.Entity(
  'BusinessPartner_organization_industries',
);
const BusinessPartner_organization_nameDetails = new schema.Entity(
  'BusinessPartner_organization_nameDetails',
);
const BusinessPartner_organization_nameDetails_scriptVariants =
  new schema.Entity('BusinessPartner_organization_nameDetails_scriptVariants');
const BusinessPartner_person = new schema.Entity('BusinessPartner_person');
const BusinessPartner_person_nameDetails = new schema.Entity(
  'BusinessPartner_person_nameDetails',
);
const BusinessPartner_person_nameDetails_scriptVariants = new schema.Entity(
  'BusinessPartner_person_nameDetails_scriptVariants',
);
const BusinessPartner_roles = new schema.Entity('BusinessPartner_roles');
const BusinessPartner_taxNumbers = new schema.Entity(
  'BusinessPartner_taxNumbers',
);
const CustomerOpportunityItemPricing = new schema.Entity(
  'CustomerOpportunityItemPricing',
);
const CustomerOpportunity_items = new schema.Entity(
  'CustomerOpportunity_items',
);
const CustomerOrder_items = new schema.Entity('CustomerOrder_items');
const CustomerOrder_items_notes = new schema.Entity(
  'CustomerOrder_items_notes',
);
const CustomerOrder_items_partners = new schema.Entity(
  'CustomerOrder_items_partners',
);
const CustomerOrder_items_priceComponents = new schema.Entity(
  'CustomerOrder_items_priceComponents',
);
const CustomerOrder_items_salesAspect = new schema.Entity(
  'CustomerOrder_items_salesAspect',
);
const CustomerOrder_items_salesAspect_scheduleLines = new schema.Entity(
  'CustomerOrder_items_salesAspect_scheduleLines',
);
const CustomerOrder_items_serviceAspect = new schema.Entity(
  'CustomerOrder_items_serviceAspect',
);
const CustomerOrder_items_serviceAspect_referenceObjects = new schema.Entity(
  'CustomerOrder_items_serviceAspect_referenceObjects',
);
const CustomerOrder_notes = new schema.Entity('CustomerOrder_notes');
const CustomerOrder_partners = new schema.Entity('CustomerOrder_partners');
const CustomerOrder_priceComponents = new schema.Entity(
  'CustomerOrder_priceComponents',
);
const CustomerOrder_salesAspect = new schema.Entity(
  'CustomerOrder_salesAspect',
);
const CustomerOrder_serviceAspect = new schema.Entity(
  'CustomerOrder_serviceAspect',
);
const CustomerOrder_serviceAspect_referenceObjects = new schema.Entity(
  'CustomerOrder_serviceAspect_referenceObjects',
);
const CustomerQuoteTypeCodes_texts = new schema.Entity(
  'CustomerQuoteTypeCodes_texts',
);
const CustomerQuote_comments = new schema.Entity('CustomerQuote_comments');
const CustomerQuote_items = new schema.Entity('CustomerQuote_items');
const CustomerQuote_items_SalesQuotePriceItem = new schema.Entity(
  'CustomerQuote_items_SalesQuotePriceItem',
);
const CustomerQuote_items_comments = new schema.Entity(
  'CustomerQuote_items_comments',
);
const CustomerQuote_partners = new schema.Entity('CustomerQuote_partners');
const Equipment = new schema.Entity('Equipment');
const MaritalStatusCodes = new schema.Entity('MaritalStatusCodes');
const IncotermsClassificationCodes = new schema.Entity(
  'IncotermsClassificationCodes',
);
const GenderCodes = new schema.Entity('GenderCodes');
const UnitOfMeasureCodes = new schema.Entity('UnitOfMeasureCodes');
const PaymentTerms = new schema.Entity('PaymentTerms');
const TaxCategoryCodes = new schema.Entity('TaxCategoryCodes');
const ShippingPoint = new schema.Entity('ShippingPoint');
const SalesArea = new schema.Entity('SalesArea');
const SalesOffice = new schema.Entity('SalesOffice');
const SalesGroup = new schema.Entity('SalesGroup');
const SalesOrganization = new schema.Entity('SalesOrganization');
const DistributionChannelCodes = new schema.Entity('DistributionChannelCodes');
const DivisionCodes = new schema.Entity('DivisionCodes');
const ConditionTypeCodes = new schema.Entity('ConditionTypeCodes');
const PricingProcedureCodes = new schema.Entity('PricingProcedureCodes');
const CustomerClassificationCodes = new schema.Entity(
  'CustomerClassificationCodes',
);
const CustomerAccountGroupCodes = new schema.Entity(
  'CustomerAccountGroupCodes',
);
const NielsenRegionCodes = new schema.Entity('NielsenRegionCodes');
const DataMediumExchangeIndicatorCodes = new schema.Entity(
  'DataMediumExchangeIndicatorCodes',
);
const DataExchangeInstructionCodes = new schema.Entity(
  'DataExchangeInstructionCodes',
);
const CustomerConditionGroupCodes = new schema.Entity(
  'CustomerConditionGroupCodes',
);
const CfopCategoryCodes = new schema.Entity('CfopCategoryCodes');
const IndustryCodes = new schema.Entity('IndustryCodes');
const AccountTaxTypeCodes = new schema.Entity('AccountTaxTypeCodes');
const PartialDeliveryControlCodes = new schema.Entity(
  'PartialDeliveryControlCodes',
);
const ServiceOrganization = new schema.Entity('ServiceOrganization');
const ServiceOrderPriorityCodes = new schema.Entity(
  'ServiceOrderPriorityCodes',
);
const DeliveryPriorityCodes = new schema.Entity('DeliveryPriorityCodes');
const ShippingConditionCodes = new schema.Entity('ShippingConditionCodes');
const Product_classificationAspects = new schema.Entity(
  'Product_classificationAspects',
);
const Product_classificationAspects_characteristicValuations =
  new schema.Entity('Product_classificationAspects_characteristicValuations');
const Product_classificationAspects_classAssignments = new schema.Entity(
  'Product_classificationAspects_classAssignments',
);
const Product_configurationAspect = new schema.Entity(
  'Product_configurationAspect',
);
const Product_configurationAspect_configurationCharacteristicValuations =
  new schema.Entity(
    'Product_configurationAspect_configurationCharacteristicValuations',
  );
const Product_configurationAspect_plantSpecificConfigurations =
  new schema.Entity('Product_configurationAspect_plantSpecificConfigurations');
const Product_configurationAspect_plantSpecificConfigurations_configurationCharacteristicValuations =
  new schema.Entity(
    'Product_configurationAspect_plantSpecificConfigurations_configurationCharacteristicValuations',
  );
const Product_digitalAssetsAspect = new schema.Entity(
  'Product_digitalAssetsAspect',
);
const Product_digitalAssetsAspect_attachments = new schema.Entity(
  'Product_digitalAssetsAspect_attachments',
);
const Product_financialAspect = new schema.Entity('Product_financialAspect');
const Product_financialAspect_costingPlantData = new schema.Entity(
  'Product_financialAspect_costingPlantData',
);
const Product_financialAspect_inventoryValuationData = new schema.Entity(
  'Product_financialAspect_inventoryValuationData',
);
const Product_financialAspect_inventoryValuationData_ledgerPeriodData =
  new schema.Entity(
    'Product_financialAspect_inventoryValuationData_ledgerPeriodData',
  );
const Product_financialAspect_inventoryValuationData_ledgerPeriodData_currencyValuationTypeData =
  new schema.Entity(
    'Product_financialAspect_inventoryValuationData_ledgerPeriodData_currencyValuationTypeData',
  );
const Product_internationalTradeAspect = new schema.Entity(
  'Product_internationalTradeAspect',
);
const Product_internationalTradeAspect_internationalTradePlants =
  new schema.Entity(
    'Product_internationalTradeAspect_internationalTradePlants',
  );
const Product_plants = new schema.Entity('Product_plants');
const Product_procurementAspect = new schema.Entity(
  'Product_procurementAspect',
);
const Product_procurementAspect_procurementPlants = new schema.Entity(
  'Product_procurementAspect_procurementPlants',
);
const Product_procurementAspect_procurementTaxes = new schema.Entity(
  'Product_procurementAspect_procurementTaxes',
);
const Product_procurementAspect_texts = new schema.Entity(
  'Product_procurementAspect_texts',
);
const Product_productionAspect = new schema.Entity('Product_productionAspect');
const Product_productionAspect_productMovementPlants = new schema.Entity(
  'Product_productionAspect_productMovementPlants',
);
const Product_productionAspect_productMovementPlants_productMovementMRPAreas =
  new schema.Entity(
    'Product_productionAspect_productMovementPlants_productMovementMRPAreas',
  );
const Product_productionAspect_productPlanningPlants = new schema.Entity(
  'Product_productionAspect_productPlanningPlants',
);
const Product_productionAspect_productPlanningPlants_plantStorageLocation =
  new schema.Entity(
    'Product_productionAspect_productPlanningPlants_plantStorageLocation',
  );
const Product_productionAspect_productPlanningPlants_productPlanningMRPAreas =
  new schema.Entity(
    'Product_productionAspect_productPlanningPlants_productPlanningMRPAreas',
  );
const Product_productionAspect_productSCMPlants = new schema.Entity(
  'Product_productionAspect_productSCMPlants',
);
const Product_productionAspect_productSCMPlants_productSCMMRPAreas =
  new schema.Entity(
    'Product_productionAspect_productSCMPlants_productSCMMRPAreas',
  );
const Product_qualityInspectionAspect = new schema.Entity(
  'Product_qualityInspectionAspect',
);
const Product_qualityInspectionAspect_plants = new schema.Entity(
  'Product_qualityInspectionAspect_plants',
);
const Product_qualityInspectionAspect_texts = new schema.Entity(
  'Product_qualityInspectionAspect_texts',
);
const Product_salesAspect = new schema.Entity('Product_salesAspect');
const Product_salesAspect_salesDistributionChains = new schema.Entity(
  'Product_salesAspect_salesDistributionChains',
);
const Product_salesAspect_salesDistributionChains_ratePlans = new schema.Entity(
  'Product_salesAspect_salesDistributionChains_ratePlans',
);
const Product_salesAspect_salesDistributionChains_texts = new schema.Entity(
  'Product_salesAspect_salesDistributionChains_texts',
);
const Product_salesAspect_salesPlant = new schema.Entity(
  'Product_salesAspect_salesPlant',
);
const Product_salesAspect_salesTaxes = new schema.Entity(
  'Product_salesAspect_salesTaxes',
);
const Product_servicePartsManagementAspect = new schema.Entity(
  'Product_servicePartsManagementAspect',
);
const Product_texts = new schema.Entity('Product_texts');
const Product_unitOfMeasureConversions = new schema.Entity(
  'Product_unitOfMeasureConversions',
);
const Product_unitOfMeasures = new schema.Entity('Product_unitOfMeasures');
const Product_unitOfMeasures_gtins = new schema.Entity(
  'Product_unitOfMeasures_gtins',
);
const Product_unitOfMeasures_gtins_supplierGTINs = new schema.Entity(
  'Product_unitOfMeasures_gtins_supplierGTINs',
);
const Product_unitOfMeasures_productDimensions = new schema.Entity(
  'Product_unitOfMeasures_productDimensions',
);
const ClassTypeCodes = new schema.Entity('ClassTypeCodes');
const IntervalTypeCodes = new schema.Entity('IntervalTypeCodes');
const Characteristic = new schema.Entity('Characteristic');
const ClassificationStatusCodes = new schema.Entity(
  'ClassificationStatusCodes',
);
const Class = new schema.Entity('Class');
const VariantConfigurationStatusCodes = new schema.Entity(
  'VariantConfigurationStatusCodes',
);
const ProfitCenter = new schema.Entity('ProfitCenter');
const LedgerCodes = new schema.Entity('LedgerCodes');
const ExternalCurrencyValuationTypeCodes = new schema.Entity(
  'ExternalCurrencyValuationTypeCodes',
);
const TaxCodes = new schema.Entity('TaxCodes');
const PurchasingGroup = new schema.Entity('PurchasingGroup');
const AttachmentUrlUsageCodes = new schema.Entity('AttachmentUrlUsageCodes');
const ProductValuationClassCodes = new schema.Entity(
  'ProductValuationClassCodes',
);
const ProductPriceDeterminationControlCodes = new schema.Entity(
  'ProductPriceDeterminationControlCodes',
);
const FiscalPeriodTypeCodes = new schema.Entity('FiscalPeriodTypeCodes');
const VarianceKeyCodes = new schema.Entity('VarianceKeyCodes');
const TaskListTypeCodes = new schema.Entity('TaskListTypeCodes');
const ProductBomUsageCodes = new schema.Entity('ProductBomUsageCodes');
const ProductCasNumberCodes = new schema.Entity('ProductCasNumberCodes');
const InternationalTradeClassificationCodes = new schema.Entity(
  'InternationalTradeClassificationCodes',
);
const ProductCfopCategoryCodes = new schema.Entity('ProductCfopCategoryCodes');
const ExportAndImportProductGroupCodes = new schema.Entity(
  'ExportAndImportProductGroupCodes',
);
const ConsumptionTaxControlCodes = new schema.Entity(
  'ConsumptionTaxControlCodes',
);
const PurchasingTaxCodes = new schema.Entity('PurchasingTaxCodes');
const PurchasingAcknowledgmentProfileCodes = new schema.Entity(
  'PurchasingAcknowledgmentProfileCodes',
);
const ManufacturerPartProfileCodes = new schema.Entity(
  'ManufacturerPartProfileCodes',
);
const VariablePurchaseOrderUnitStatusCodes = new schema.Entity(
  'VariablePurchaseOrderUnitStatusCodes',
);
const ProcurementSubTypeCodes = new schema.Entity('ProcurementSubTypeCodes');
const ComponentBackFlushIndicatorCodes = new schema.Entity(
  'ComponentBackFlushIndicatorCodes',
);
const MRPTypeCodes = new schema.Entity('MRPTypeCodes');
const CrossProjectIndicatorCodes = new schema.Entity(
  'CrossProjectIndicatorCodes',
);
const AbcIndicatorCodes = new schema.Entity('AbcIndicatorCodes');
const DependentRequirementsTypeCodes = new schema.Entity(
  'DependentRequirementsTypeCodes',
);
const ProcurementTypeCodes = new schema.Entity('ProcurementTypeCodes');
const ConsumptionModeCodes = new schema.Entity('ConsumptionModeCodes');
const RoundingProfileCodes = new schema.Entity('RoundingProfileCodes');
const CoverageProfileRangeCodes = new schema.Entity(
  'CoverageProfileRangeCodes',
);
const SafetyTimeIndicatorCodes = new schema.Entity('SafetyTimeIndicatorCodes');
const RetainFixedPeggingCodes = new schema.Entity('RetainFixedPeggingCodes');
const ProductAlertRelevanceCodes = new schema.Entity(
  'ProductAlertRelevanceCodes',
);
const PPCHeuristicCodes = new schema.Entity('PPCHeuristicCodes');
const InteractiveSourcingProfileCodes = new schema.Entity(
  'InteractiveSourcingProfileCodes',
);
const DynamicPeggingStrategyCodes = new schema.Entity(
  'DynamicPeggingStrategyCodes',
);
const ConversionRuleCodes = new schema.Entity('ConversionRuleCodes');
const RequirementStrategyCodes = new schema.Entity('RequirementStrategyCodes');
const BillOfMaterialExplosionIndicatorCodes = new schema.Entity(
  'BillOfMaterialExplosionIndicatorCodes',
);
const StorageConditionCodes = new schema.Entity('StorageConditionCodes');
const TemperatureConditionIndicatorCodes = new schema.Entity(
  'TemperatureConditionIndicatorCodes',
);
const LabelTypeCodes = new schema.Entity('LabelTypeCodes');
const LabelFormCodes = new schema.Entity('LabelFormCodes');
const ShelfLifeExpirationDatePeriodCodes = new schema.Entity(
  'ShelfLifeExpirationDatePeriodCodes',
);
const ContainerRequirementCodes = new schema.Entity(
  'ContainerRequirementCodes',
);
const ShelfLifeExpirationDateRoundingRuleCodes = new schema.Entity(
  'ShelfLifeExpirationDateRoundingRuleCodes',
);
const SchedulingMarginKeyCodes = new schema.Entity('SchedulingMarginKeyCodes');
const IsProductToBeDiscontinuedCodes = new schema.Entity(
  'IsProductToBeDiscontinuedCodes',
);
const StorageCostsPercentageCodes = new schema.Entity(
  'StorageCostsPercentageCodes',
);
const PlanAndOrderDayDeterminationCodes = new schema.Entity(
  'PlanAndOrderDayDeterminationCodes',
);
const MrpPlanningCalendarCodes = new schema.Entity('MrpPlanningCalendarCodes');
const OrderChangeManagementProfileCodes = new schema.Entity(
  'OrderChangeManagementProfileCodes',
);
const FiscalYearVariantCodes = new schema.Entity('FiscalYearVariantCodes');
const PeriodTypeCodes = new schema.Entity('PeriodTypeCodes');
const PutAwayAndStockRemovalStrategyCodes = new schema.Entity(
  'PutAwayAndStockRemovalStrategyCodes',
);
const RangeOfCoverageProfileCodes = new schema.Entity(
  'RangeOfCoverageProfileCodes',
);
const ProvisioningServiceLevelCodes = new schema.Entity(
  'ProvisioningServiceLevelCodes',
);
const ProductionSchedulingProfileCodes = new schema.Entity(
  'ProductionSchedulingProfileCodes',
);
const RepetitiveManufacturingProfileCodes = new schema.Entity(
  'RepetitiveManufacturingProfileCodes',
);
const PeriodProfileForSafetyTimeCodes = new schema.Entity(
  'PeriodProfileForSafetyTimeCodes',
);
const IsSafetyTimeCodes = new schema.Entity('IsSafetyTimeCodes');
const PlanningStrategyGroupCodes = new schema.Entity(
  'PlanningStrategyGroupCodes',
);
const InventoryForCyclicCountingCodes = new schema.Entity(
  'InventoryForCyclicCountingCodes',
);
const ForecastRequirementsSplitIndicatorCodes = new schema.Entity(
  'ForecastRequirementsSplitIndicatorCodes',
);
const MrpGroupCodes = new schema.Entity('MrpGroupCodes');
const LotSizeProcedureCodes = new schema.Entity('LotSizeProcedureCodes');
const MRPDependentRequirementCodes = new schema.Entity(
  'MRPDependentRequirementCodes',
);
const QualityCatalogProfileCodes = new schema.Entity(
  'QualityCatalogProfileCodes',
);
const QualityAuthorizationGroupCodes = new schema.Entity(
  'QualityAuthorizationGroupCodes',
);
const SupplierQualityManagementSystemCodes = new schema.Entity(
  'SupplierQualityManagementSystemCodes',
);
const QualityCertificateTypeCodes = new schema.Entity(
  'QualityCertificateTypeCodes',
);
const QualityManagementControlKeyCodes = new schema.Entity(
  'QualityManagementControlKeyCodes',
);
const DangerousGoodsIndicatorProfileCodes = new schema.Entity(
  'DangerousGoodsIndicatorProfileCodes',
);
const SerialNumberExplicitnessLevelCodes = new schema.Entity(
  'SerialNumberExplicitnessLevelCodes',
);
const ProductDiscountInKindCodes = new schema.Entity(
  'ProductDiscountInKindCodes',
);
const BasicProductCodes = new schema.Entity('BasicProductCodes');
const PackagingProductGroupCodes = new schema.Entity(
  'PackagingProductGroupCodes',
);
const SerialIdentifierAssignmentProfileCodes = new schema.Entity(
  'SerialIdentifierAssignmentProfileCodes',
);
const ANPCodes = new schema.Entity('ANPCodes');
const AvailabilityCheckTypeCodes = new schema.Entity(
  'AvailabilityCheckTypeCodes',
);
const DistributionProfileCodes = new schema.Entity('DistributionProfileCodes');
const ProductLogisticsHandlingGroupCodes = new schema.Entity(
  'ProductLogisticsHandlingGroupCodes',
);
const HandlingIndicatorCodes = new schema.Entity('HandlingIndicatorCodes');
const AdjustmentProfileCodes = new schema.Entity('AdjustmentProfileCodes');
const HandlingUnitTypeCodes = new schema.Entity('HandlingUnitTypeCodes');
const SmartFormCodes = new schema.Entity('SmartFormCodes');
const WarehouseStorageConditionCodes = new schema.Entity(
  'WarehouseStorageConditionCodes',
);
const WarehouseProductGroupCodes = new schema.Entity(
  'WarehouseProductGroupCodes',
);
const QualityInspectionGroupCodes = new schema.Entity(
  'QualityInspectionGroupCodes',
);
const BillingCycleCodes = new schema.Entity('BillingCycleCodes');
const BillingCycleRuleCodes = new schema.Entity('BillingCycleRuleCodes');
const ContractAutoRenewalTypeCodes = new schema.Entity(
  'ContractAutoRenewalTypeCodes',
);
const DurationUnitCodes = new schema.Entity('DurationUnitCodes');
const ProductSalesStatusCodes = new schema.Entity('ProductSalesStatusCodes');
const ItemCategoryGroupCodes = new schema.Entity('ItemCategoryGroupCodes');
const ProductHierarchyCodes = new schema.Entity('ProductHierarchyCodes');
const ProductTaxClassificationCodes = new schema.Entity(
  'ProductTaxClassificationCodes',
);
const TransportationGroupCodes = new schema.Entity('TransportationGroupCodes');
const PackagingProductTypeCodes = new schema.Entity(
  'PackagingProductTypeCodes',
);
const ProductFreightGroupCodes = new schema.Entity('ProductFreightGroupCodes');
const VolumeRebateGroupCodes = new schema.Entity('VolumeRebateGroupCodes');
const ProductAccountAssignmentGroupCodes = new schema.Entity(
  'ProductAccountAssignmentGroupCodes',
);
const ProductUnitGroupCodes = new schema.Entity('ProductUnitGroupCodes');
const FirstProductPricingGroupCodes = new schema.Entity(
  'FirstProductPricingGroupCodes',
);
const SecondProductPricingGroupCodes = new schema.Entity(
  'SecondProductPricingGroupCodes',
);
const ThirdProductPricingGroupCodes = new schema.Entity(
  'ThirdProductPricingGroupCodes',
);
const FourthProductPricingGroupCodes = new schema.Entity(
  'FourthProductPricingGroupCodes',
);
const FifthProductPricingGroupCodes = new schema.Entity(
  'FifthProductPricingGroupCodes',
);
const ProductCommissionGroupCodes = new schema.Entity(
  'ProductCommissionGroupCodes',
);
const LogisticsStatisticsGroupCodes = new schema.Entity(
  'LogisticsStatisticsGroupCodes',
);
const PriceSpecificationProductGroupCodes = new schema.Entity(
  'PriceSpecificationProductGroupCodes',
);
const ReplacementPartTypeCodes = new schema.Entity('ReplacementPartTypeCodes');
const LoadingGroupCodes = new schema.Entity('LoadingGroupCodes');
const ProductionSupervisorCodes = new schema.Entity(
  'ProductionSupervisorCodes',
);
const ProductionOrderBatchEntryCodes = new schema.Entity(
  'ProductionOrderBatchEntryCodes',
);
const MRPArea = new schema.Entity('MRPArea');
const MRPController = new schema.Entity('MRPController');
const PlanningGroupCodes = new schema.Entity('PlanningGroupCodes');
const PlanningProcedureCodes = new schema.Entity('PlanningProcedureCodes');
const PlanningCalendarCodes = new schema.Entity('PlanningCalendarCodes');
const RatePlan = new schema.Entity('RatePlan');
const BusinessPartner_supplierInformation = new schema.Entity(
  'BusinessPartner_supplierInformation',
);
const BusinessPartner_supplierInformation_accountingInformation =
  new schema.Entity(
    'BusinessPartner_supplierInformation_accountingInformation',
  );
const BusinessPartner_supplierInformation_accountingInformation_alternativePayees =
  new schema.Entity(
    'BusinessPartner_supplierInformation_accountingInformation_alternativePayees',
  );
const BusinessPartner_supplierInformation_accountingInformation_paymentMethods =
  new schema.Entity(
    'BusinessPartner_supplierInformation_accountingInformation_paymentMethods',
  );
const BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes =
  new schema.Entity(
    'BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes',
  );
const BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes_exemption =
  new schema.Entity(
    'BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes_exemption',
  );
const BusinessPartner_supplierInformation_purchasingArrangements =
  new schema.Entity(
    'BusinessPartner_supplierInformation_purchasingArrangements',
  );
const BusinessPartner_supplierInformation_purchasingArrangements_functions =
  new schema.Entity(
    'BusinessPartner_supplierInformation_purchasingArrangements_functions',
  );
const GeneralLedgerAccount = new schema.Entity('GeneralLedgerAccount');
const TaxGroupCodes = new schema.Entity('TaxGroupCodes');
const MinorityIndicatorsCodes = new schema.Entity('MinorityIndicatorsCodes');
const VendorRecipientTypeCodes = new schema.Entity('VendorRecipientTypeCodes');
const MaterialDocument_items = new schema.Entity('MaterialDocument_items');
const Batch = new schema.Entity('Batch');
const ProductionOrder = new schema.Entity('ProductionOrder');
const ContactPersonRelationship_contactInformation = new schema.Entity(
  'ContactPersonRelationship_contactInformation',
);
const ContactPersonRelationship_contactInformation_addressData =
  new schema.Entity('ContactPersonRelationship_contactInformation_addressData');
const ContactPersonRelationship_contactInformation_addressData_emailAddresses =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_emailAddresses',
  );
const ContactPersonRelationship_contactInformation_addressData_faxNumbers =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_faxNumbers',
  );
const ContactPersonRelationship_contactInformation_addressData_phoneNumbers =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_phoneNumbers',
  );
const ContactPersonRelationship_contactInformation_addressData_websites =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_websites',
  );
const ContactPersonRelationship_contactInformation_addressData_workplaceAddress =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_workplaceAddress',
  );
const ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details',
  );
const ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details_scriptVariants =
  new schema.Entity(
    'ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details_scriptVariants',
  );
ExampleItem1.define({ items: [ExampleItem2], items2: [ExampleItem2] });
ExampleItem2.define({ parent: ExampleItem1 });
WorkforcePerson.define({ workAssignments: [WorkforcePerson_workAssignments] });
Customer.define({
  person: BusinessPartner_person,
  organization: BusinessPartner_organization,
  businessPartnerGroup: BusinessPartner_businessPartnerGroup,
  lifecycleStatus: LifecycleStatusCodes,
  identifications: [BusinessPartner_identifications],
  bankAccounts: [BusinessPartner_bankAccounts],
  taxNumbers: [BusinessPartner_taxNumbers],
  addressData: [BusinessPartner_addressData],
  contactPersonRelationships: [ContactPersonRelationship],
  roles: [BusinessPartner_roles],
  customerInformation: BusinessPartner_customerInformation,
});
CustomerOpportunity.define({
  currency: CurrencyCodes,
  processingStatus: SalesProcessingStatusCodes,
  items: [CustomerOpportunity_items],
});
CustomerOrder.define({
  currency: CurrencyCodes,
  processingStatus: SalesProcessingStatusCodes,
  salesOrganization: SalesOrganization,
  distributionChannel: DistributionChannelCodes,
  division: DivisionCodes,
  salesOffice: SalesOffice,
  salesGroup: SalesGroup,
  type: CustomerOrderTypeCodes,
  orderReason: CustomerOrderReasonCodes,
  items: [CustomerOrder_items],
  partners: [CustomerOrder_partners],
  priceComponents: [CustomerOrder_priceComponents],
  cancellationStatus: SalesCancellationStatusCodes,
  notes: [CustomerOrder_notes],
  salesAspect: CustomerOrder_salesAspect,
  serviceAspect: CustomerOrder_serviceAspect,
});
CustomerQuote.define({
  currency: CurrencyCodes,
  processingStatus: SalesProcessingStatusCodes,
  salesOrganization: SalesOrganization,
  distributionChannel: DistributionChannelCodes,
  division: DivisionCodes,
  type: CustomerQuoteTypeCodes,
  items: [CustomerQuote_items],
  partners: [CustomerQuote_partners],
  cancellationReason: SalesCancellationReasonCodes,
  comments: [CustomerQuote_comments],
  pricingProcedure: PricingProcedureCodes,
});
CustomerQuoteTypeCodes.define({
  texts: [CustomerQuoteTypeCodes_texts],
  localized: CustomerQuoteTypeCodes_texts,
});
Product.define({
  dangerousGoodsIndicatorProfile: DangerousGoodsIndicatorProfileCodes,
  serialNumberExplicitnessLevel: SerialNumberExplicitnessLevelCodes,
  discountInKindEligibility: ProductDiscountInKindCodes,
  basicProduct: BasicProductCodes,
  packingReferenceProduct: Product,
  packagingProductGroup: PackagingProductGroupCodes,
  serialIdentifierAssignmentProfile: SerialIdentifierAssignmentProfileCodes,
  brazilianAnpCode: ANPCodes,
  competitor: Customer,
  brand: BrandCodes,
  type: ProductTypeCodes,
  productGroup: ProductGroup,
  baseUnitOfMeasure: UnitOfMeasureCodes,
  category: ProductCategoryCodes,
  manufacturer: Supplier,
  unitOfMeasures: [Product_unitOfMeasures],
  unitOfMeasureConversions: [Product_unitOfMeasureConversions],
  plants: [Product_plants],
  crossPlantProductStatus: ProductPlantStatusCodes,
  salesAspect: Product_salesAspect,
  procurementAspect: Product_procurementAspect,
  productionAspect: Product_productionAspect,
  internationalTradeAspect: Product_internationalTradeAspect,
  qualityInspectionAspect: Product_qualityInspectionAspect,
  financialAspect: Product_financialAspect,
  digitalAssetsAspect: Product_digitalAssetsAspect,
  classificationAspects: [Product_classificationAspects],
  configurationAspect: Product_configurationAspect,
  servicePartsManagementAspect: Product_servicePartsManagementAspect,
  texts: [Product_texts],
  localized: Product_texts,
});
Supplier.define({
  person: BusinessPartner_person,
  organization: BusinessPartner_organization,
  businessPartnerGroup: BusinessPartner_businessPartnerGroup,
  lifecycleStatus: LifecycleStatusCodes,
  identifications: [BusinessPartner_identifications],
  bankAccounts: [BusinessPartner_bankAccounts],
  taxNumbers: [BusinessPartner_taxNumbers],
  addressData: [BusinessPartner_addressData],
  contactPersonRelationships: [ContactPersonRelationship],
  roles: [BusinessPartner_roles],
  supplierInformation: BusinessPartner_supplierInformation,
});
MaterialDocument.define({
  transactionType: InventoryTransactionTypeCodes,
  goodsMovementCode: GoodsMovementCodes,
  items: [MaterialDocument_items],
});
BusinessPartner.define({
  person: BusinessPartner_person,
  organization: BusinessPartner_organization,
  businessPartnerGroup: BusinessPartner_businessPartnerGroup,
  lifecycleStatus: LifecycleStatusCodes,
  identifications: [BusinessPartner_identifications],
  bankAccounts: [BusinessPartner_bankAccounts],
  taxNumbers: [BusinessPartner_taxNumbers],
  addressData: [BusinessPartner_addressData],
  isRelationTargetIn: [BusinessPartnerRelationship],
  isRelationSourceIn: [BusinessPartnerRelationship],
  contactPersonRelationships: [ContactPersonRelationship],
  roles: [BusinessPartner_roles],
  customerInformation: BusinessPartner_customerInformation,
  supplierInformation: BusinessPartner_supplierInformation,
});
BusinessPartnerRelationship.define({
  relationshipSource: BusinessPartner,
  relationshipTarget: BusinessPartner,
});
ContactPersonRelationship.define({
  status: RelationshipStatusCodes,
  relationshipSource: BusinessPartner,
  relationshipTarget: BusinessPartner,
  contactInformation: ContactPersonRelationship_contactInformation,
});
WorkforcePerson_workAssignments.define({
  enterpriseStructureDetail:
    WorkforcePerson_workAssignments_enterpriseStructureDetail,
  alternateCostAssignment:
    WorkforcePerson_workAssignments_alternateCostAssignment,
});
WorkforcePerson_workAssignments_alternateCostAssignment.define({
  items: [WorkforcePerson_workAssignments_alternateCostAssignment_items],
});
WorkforcePerson_workAssignments_alternateCostAssignment_items.define({
  costCenter: CostCenter,
  internalOrder: InternalOrder,
  networkActivity: NetworkActivity,
  projectControllingObject: ProjectControllingObject,
  salesOrderItem: SalesOrderItem,
  budgetPeriod: BudgetPeriod,
  functionalArea: FunctionalArea,
  fund: Fund,
  fundsCenter: FundsCenter,
  grant: Grant,
});
WorkforcePerson_workAssignments_enterpriseStructureDetail.define({
  purchasingOrganization: PurchasingOrganization,
  plant: Plant,
  storageLocation: StorageLocation,
});
BusinessPartner_addressData.define({
  usages: [BusinessPartner_addressData_usages],
  personPostalAddress: BusinessPartner_addressData_personPostalAddress,
  organizationPostalAddress:
    BusinessPartner_addressData_organizationPostalAddress,
  emailAddresses: [BusinessPartner_addressData_emailAddresses],
  phoneNumbers: [BusinessPartner_addressData_phoneNumbers],
  faxNumbers: [BusinessPartner_addressData_faxNumbers],
  websites: [BusinessPartner_addressData_websites],
});
BusinessPartner_addressData_faxNumbers.define({ country: CountryCodes });
BusinessPartner_addressData_organizationPostalAddress.define({
  primaryRegion: CountrySubdivisionCodes,
  country: CountryCodes,
  timeZone: TimeZoneCodes,
  scriptVariants: [
    BusinessPartner_addressData_organizationPostalAddress_scriptVariants,
  ],
});
BusinessPartner_addressData_organizationPostalAddress_scriptVariants.define({
  primaryRegion: CountrySubdivisionCodes,
  country: CountryCodes,
  timeZone: TimeZoneCodes,
  scriptCode: ScriptCodes,
});
BusinessPartner_addressData_personPostalAddress.define({
  formOfAddress: FormOfAddressCodes,
  academicTitle: AcademicTitleCodes,
  additionalAcademicTitle: AcademicTitleCodes,
  namePrefix: FamilyNamePrefixCodes,
  additionalNamePrefix: FamilyNamePrefixCodes,
  nameSuffix: FamilyNameSuffixCodes,
  primaryRegion: CountrySubdivisionCodes,
  country: CountryCodes,
  timeZone: TimeZoneCodes,
  scriptVariants: [
    BusinessPartner_addressData_personPostalAddress_scriptVariants,
  ],
});
BusinessPartner_addressData_personPostalAddress_scriptVariants.define({
  formOfAddress: FormOfAddressCodes,
  academicTitle: AcademicTitleCodes,
  additionalAcademicTitle: AcademicTitleCodes,
  namePrefix: FamilyNamePrefixCodes,
  additionalNamePrefix: FamilyNamePrefixCodes,
  nameSuffix: FamilyNameSuffixCodes,
  primaryRegion: CountrySubdivisionCodes,
  country: CountryCodes,
  timeZone: TimeZoneCodes,
  scriptCode: ScriptCodes,
});
BusinessPartner_addressData_phoneNumbers.define({ country: CountryCodes });
BusinessPartner_addressData_usages.define({ usage: AddressDataUsageCodes });
BusinessPartner_bankAccounts.define({
  bankCountry: CountryCodes,
  bankAccountCurrency: CurrencyCodes,
});
BusinessPartner_businessPartnerGroup.define({
  primaryGroupName: BusinessPartner_businessPartnerGroup_primaryGroupName,
  secondaryGroupName: BusinessPartner_businessPartnerGroup_secondaryGroupName,
  groupType: BusinessPartnerGroupTypeCodes,
});
BusinessPartner_businessPartnerGroup_primaryGroupName.define({
  scriptVariants: [
    BusinessPartner_businessPartnerGroup_primaryGroupName_scriptVariants,
  ],
});
BusinessPartner_businessPartnerGroup_primaryGroupName_scriptVariants.define({
  scriptCode: ScriptCodes,
});
BusinessPartner_businessPartnerGroup_secondaryGroupName.define({
  scriptVariants: [
    BusinessPartner_businessPartnerGroup_secondaryGroupName_scriptVariants,
  ],
});
BusinessPartner_businessPartnerGroup_secondaryGroupName_scriptVariants.define({
  scriptCode: ScriptCodes,
});
BusinessPartner_customerInformation.define({
  orderBlockedReason: CustomerOrderBlockingReasonCodes,
  deliveryBlockedReason: CustomerDeliveryBlockingReasonCodes,
  billingBlockedReason: CustomerBillingBlockingReasonCodes,
  customerClassification: CustomerClassificationCodes,
  customerAccountGroup: CustomerAccountGroupCodes,
  nielsenRegion: NielsenRegionCodes,
  dataMediumExchangeIndicator: DataMediumExchangeIndicatorCodes,
  dataExchangeInstruction: DataExchangeInstructionCodes,
  customerConditionGroup1: CustomerConditionGroupCodes,
  customerConditionGroup2: CustomerConditionGroupCodes,
  customerConditionGroup3: CustomerConditionGroupCodes,
  customerConditionGroup4: CustomerConditionGroupCodes,
  customerConditionGroup5: CustomerConditionGroupCodes,
  cfopCategory: CfopCategoryCodes,
  industryCode1: IndustryCodes,
  industryCode2: IndustryCodes,
  industryCode3: IndustryCodes,
  industryCode4: IndustryCodes,
  industryCode5: IndustryCodes,
  accountTaxType: AccountTaxTypeCodes,
  salesArrangements: [BusinessPartner_customerInformation_salesArrangements],
  taxClassifications: [BusinessPartner_customerInformation_taxClassifications],
  salesOpportunities: [CustomerOpportunity],
});
BusinessPartner_customerInformation_salesArrangements.define({
  orderBlockedReason: CustomerOrderBlockingReasonCodes,
  deliveryBlockedReason: CustomerDeliveryBlockingReasonCodes,
  billingBlockedReason: CustomerBillingBlockingReasonCodes,
  incotermsClassification: IncotermsClassificationCodes,
  partialDeliveryControlCode: PartialDeliveryControlCodes,
  salesArea: SalesArea,
  salesOffice: SalesOffice,
  salesGroup: SalesGroup,
  deliveryPriority: DeliveryPriorityCodes,
  currency: CurrencyCodes,
  paymentTerms: PaymentTerms,
  salesArrangementGroup: CustomerSalesArrangementGroupCodes,
  salesArrangementPriceGroup: CustomerSalesArrangementPriceGroupCodes,
  functions: [BusinessPartner_customerInformation_salesArrangements_functions],
});
BusinessPartner_customerInformation_salesArrangements_functions.define({
  functionCode: SalesPartnerRoleCodes,
  functionPartnerCustomer: Customer,
  functionPartnerSupplier: Supplier,
  functionPartnerContactPerson: BusinessPartner,
  functionPartnerWorkforcePerson: WorkforcePerson,
});
BusinessPartner_customerInformation_taxClassifications.define({
  country: CountryCodes,
  taxCategory: TaxCategoryCodes,
  taxClassification: CustomerTaxClassificationCodes,
});
BusinessPartner_identifications.define({
  identificationType: IdentificationTypeCodes,
  country: CountryCodes,
  region: CountrySubdivisionCodes,
});
BusinessPartner_organization.define({
  nameDetails: BusinessPartner_organization_nameDetails,
  legalForm: CompanyLegalFormCodes,
  industries: [BusinessPartner_organization_industries],
});
BusinessPartner_organization_industries.define({
  industrySector: IndustrySectorCodes,
  industrySystemType: IndustrySystemTypeCodes,
});
BusinessPartner_organization_nameDetails.define({
  scriptVariants: [BusinessPartner_organization_nameDetails_scriptVariants],
});
BusinessPartner_organization_nameDetails_scriptVariants.define({
  scriptCode: ScriptCodes,
});
BusinessPartner_person.define({
  nameDetails: BusinessPartner_person_nameDetails,
  gender: GenderCodes,
  language: LanguageCodes,
  correspondenceLanguage: LanguageCodes,
  nationality: CountryCodes,
});
BusinessPartner_person_nameDetails.define({
  formOfAddress: FormOfAddressCodes,
  academicTitle: AcademicTitleCodes,
  additionalAcademicTitle: AcademicTitleCodes,
  namePrefix: FamilyNamePrefixCodes,
  additionalNamePrefix: FamilyNamePrefixCodes,
  nameSuffix: FamilyNameSuffixCodes,
  scriptVariants: [BusinessPartner_person_nameDetails_scriptVariants],
});
BusinessPartner_person_nameDetails_scriptVariants.define({
  formOfAddress: FormOfAddressCodes,
  academicTitle: AcademicTitleCodes,
  additionalAcademicTitle: AcademicTitleCodes,
  namePrefix: FamilyNamePrefixCodes,
  additionalNamePrefix: FamilyNamePrefixCodes,
  nameSuffix: FamilyNameSuffixCodes,
  maritalStatus: MaritalStatusCodes,
  nameCountry: CountryCodes,
  scriptCode: ScriptCodes,
});
BusinessPartner_roles.define({ role: BusinessPartnerRoleCodes });
BusinessPartner_taxNumbers.define({ taxNumberType: TaxNumberTypeCodes });
CustomerOpportunity_items.define({
  product: Product,
  quantityUnit: UnitOfMeasureCodes,
  pricing: CustomerOpportunityItemPricing,
});
CustomerOrder_items.define({
  product: Product,
  quantityUnit: UnitOfMeasureCodes,
  type: CustomerOrderItemTypeCodes,
  partners: [CustomerOrder_items_partners],
  priceComponents: [CustomerOrder_items_priceComponents],
  processingStatus: SalesProcessingStatusCodes,
  cancellationReason: SalesCancellationReasonCodes,
  notes: [CustomerOrder_items_notes],
  salesAspect: CustomerOrder_items_salesAspect,
  serviceAspect: CustomerOrder_items_serviceAspect,
});
CustomerOrder_items_notes.define({
  textType: SalesTextTypeCodes,
  language: LanguageCodes,
});
CustomerOrder_items_partners.define({
  role: SalesPartnerRoleCodes,
  businessPartner: BusinessPartner,
  plantPartner: Plant,
});
CustomerOrder_items_priceComponents.define({
  conditionType: ConditionTypeCodes,
  currency: CurrencyCodes,
  perQuantityUnit: UnitOfMeasureCodes,
});
CustomerOrder_items_salesAspect.define({
  incotermsClassification: IncotermsClassificationCodes,
  plant: Plant,
  shippingPoint: ShippingPoint,
  deliveryPriority: DeliveryPriorityCodes,
  scheduleLines: [CustomerOrder_items_salesAspect_scheduleLines],
  paymentTerms: PaymentTerms,
});
CustomerOrder_items_serviceAspect.define({
  referenceObjects: [CustomerOrder_items_serviceAspect_referenceObjects],
});
CustomerOrder_items_serviceAspect_referenceObjects.define({
  equipment: Equipment,
});
CustomerOrder_notes.define({
  textType: SalesTextTypeCodes,
  language: LanguageCodes,
});
CustomerOrder_partners.define({
  role: SalesPartnerRoleCodes,
  businessPartner: BusinessPartner,
  plantPartner: Plant,
});
CustomerOrder_priceComponents.define({
  conditionType: ConditionTypeCodes,
  currency: CurrencyCodes,
  perQuantityUnit: UnitOfMeasureCodes,
});
CustomerOrder_salesAspect.define({
  incotermsClassification: IncotermsClassificationCodes,
  shippingCondition: ShippingConditionCodes,
  paymentTerms: PaymentTerms,
});
CustomerOrder_serviceAspect.define({
  serviceOrganization: ServiceOrganization,
  priority: ServiceOrderPriorityCodes,
  referenceObjects: [CustomerOrder_serviceAspect_referenceObjects],
});
CustomerOrder_serviceAspect_referenceObjects.define({ equipment: Equipment });
CustomerQuote_comments.define({
  type: SalesTextTypeCodes,
  language: LanguageCodes,
});
CustomerQuote_items.define({
  product: Product,
  quantityUnit: UnitOfMeasureCodes,
  comments: [CustomerQuote_items_comments],
  salesQuotePriceItem: [CustomerQuote_items_SalesQuotePriceItem],
});
CustomerQuote_items_comments.define({
  type: SalesTextTypeCodes,
  language: LanguageCodes,
});
CustomerQuote_partners.define({
  role: SalesPartnerRoleCodes,
  partner: Customer,
});
Product_classificationAspects.define({
  classType: ClassTypeCodes,
  classAssignments: [Product_classificationAspects_classAssignments],
  characteristicValuations: [
    Product_classificationAspects_characteristicValuations,
  ],
});
Product_classificationAspects_characteristicValuations.define({
  intervalType: IntervalTypeCodes,
  characteristic: Characteristic,
});
Product_classificationAspects_classAssignments.define({
  status: ClassificationStatusCodes,
  class: Class,
});
Product_configurationAspect.define({
  statusCode: VariantConfigurationStatusCodes,
  configurableProduct: Product,
  configurationCharacteristicValuations: [
    Product_configurationAspect_configurationCharacteristicValuations,
  ],
  plantSpecificConfigurations: [
    Product_configurationAspect_plantSpecificConfigurations,
  ],
});
Product_configurationAspect_configurationCharacteristicValuations.define({
  characteristic: Characteristic,
});
Product_configurationAspect_plantSpecificConfigurations.define({
  plant: Plant,
  statusCode: VariantConfigurationStatusCodes,
  configurableProduct: Product,
  configurationCharacteristicValuations: [
    Product_configurationAspect_plantSpecificConfigurations_configurationCharacteristicValuations,
  ],
});
Product_configurationAspect_plantSpecificConfigurations_configurationCharacteristicValuations.define(
  { characteristic: Characteristic },
);
Product_digitalAssetsAspect.define({
  attachments: [Product_digitalAssetsAspect_attachments],
});
Product_digitalAssetsAspect_attachments.define({
  usage: AttachmentUrlUsageCodes,
});
Product_financialAspect.define({
  costingPlantData: [Product_financialAspect_costingPlantData],
  inventoryValuationData: [Product_financialAspect_inventoryValuationData],
});
Product_financialAspect_costingPlantData.define({
  plant: Plant,
  varianceKey: VarianceKeyCodes,
  taskListType: TaskListTypeCodes,
  costingSpecialProcurementType: ProcurementSubTypeCodes,
  productBomUsage: ProductBomUsageCodes,
});
Product_financialAspect_inventoryValuationData.define({
  plant: Plant,
  inventoryValuationType: InventoryValuationTypeCodes,
  inventoryValuationCategory: InventoryValuationCategoryCodes,
  ledgerPeriodData: [
    Product_financialAspect_inventoryValuationData_ledgerPeriodData,
  ],
});
Product_financialAspect_inventoryValuationData_ledgerPeriodData.define({
  ledger: LedgerCodes,
  valuationClass: ProductValuationClassCodes,
  priceDeterminationControl: ProductPriceDeterminationControlCodes,
  currencyValuationTypeData: [
    Product_financialAspect_inventoryValuationData_ledgerPeriodData_currencyValuationTypeData,
  ],
});
Product_financialAspect_inventoryValuationData_ledgerPeriodData_currencyValuationTypeData.define(
  { externalCurrencyValuationType: ExternalCurrencyValuationTypeCodes },
);
Product_internationalTradeAspect.define({
  internationalTradePlants: [
    Product_internationalTradeAspect_internationalTradePlants,
  ],
  countryOfOrigin: CountryCodes,
});
Product_internationalTradeAspect_internationalTradePlants.define({
  productCasNumber: ProductCasNumberCodes,
  productInternationalTradeClassification:
    InternationalTradeClassificationCodes,
  productCfopCategory: ProductCfopCategoryCodes,
  exportAndImportProductGroup: ExportAndImportProductGroupCodes,
  consumptionTaxControlCode: ConsumptionTaxControlCodes,
  plant: Plant,
  countryOfOrigin: CountryCodes,
  regionOfOrigin: CountrySubdivisionCodes,
});
Product_plants.define({
  availabilityCheckType: AvailabilityCheckTypeCodes,
  distributionProfile: DistributionProfileCodes,
  productLogisticsHandlingGroup: ProductLogisticsHandlingGroupCodes,
  plant: Plant,
  serialNumberProfile: SerialNumberProfileCodes,
  productStatus: ProductPlantStatusCodes,
  profitCenter: ProfitCenter,
});
Product_procurementAspect.define({
  purchasingAcknowledgeProfile: PurchasingAcknowledgmentProfileCodes,
  manufacturerPartProfile: ManufacturerPartProfileCodes,
  variablePurchaseOrderUnitStatus: VariablePurchaseOrderUnitStatusCodes,
  orderUnit: UnitOfMeasureCodes,
  procurementTaxes: [Product_procurementAspect_procurementTaxes],
  procurementPlants: [Product_procurementAspect_procurementPlants],
  texts: [Product_procurementAspect_texts],
  localized: Product_procurementAspect_texts,
});
Product_procurementAspect_procurementPlants.define({
  plant: Plant,
  purchasingGroup: PurchasingGroup,
});
Product_procurementAspect_procurementTaxes.define({
  departureCountry: CountryCodes,
  purchasingTaxCode: PurchasingTaxCodes,
});
Product_productionAspect.define({
  storageConditions: StorageConditionCodes,
  temperatureConditionIndicator: TemperatureConditionIndicatorCodes,
  labelType: LabelTypeCodes,
  labelForm: LabelFormCodes,
  shelfLifeExpirationDatePeriod: ShelfLifeExpirationDatePeriodCodes,
  containerRequirement: ContainerRequirementCodes,
  shelfLifeExpirationDateRoundingRule: ShelfLifeExpirationDateRoundingRuleCodes,
  productMovementPlants: [Product_productionAspect_productMovementPlants],
  productPlanningPlants: [Product_productionAspect_productPlanningPlants],
  productScmPlants: [Product_productionAspect_productSCMPlants],
});
Product_productionAspect_productMovementPlants.define({
  plant: Plant,
  productMovementMrpAreas: [
    Product_productionAspect_productMovementPlants_productMovementMRPAreas,
  ],
  unitOfIssue: UnitOfMeasureCodes,
  stockDeterminationGroup: StockDeterminationGroupCodes,
  productionSupervisor: ProductionSupervisorCodes,
  productionQuantityUnit: UnitOfMeasureCodes,
  productionOrderBatchEntry: ProductionOrderBatchEntryCodes,
  issueStorageLocation: StorageLocation,
  componentBackFlushIndicator: ComponentBackFlushIndicatorCodes,
});
Product_productionAspect_productMovementPlants_productMovementMRPAreas.define({
  mrpArea: MRPArea,
  issueStorageLocation: StorageLocation,
});
Product_productionAspect_productPlanningPlants.define({
  schedulingMarginKey: SchedulingMarginKeyCodes,
  isProductToBeDiscontinuedCode: IsProductToBeDiscontinuedCodes,
  storageCostsPercentageCode: StorageCostsPercentageCodes,
  planAndOrderDayDetermination: PlanAndOrderDayDeterminationCodes,
  defaultStorageLocationExternalProcurement: StorageLocation,
  maximumStoragePeriodUnit: UnitOfMeasureCodes,
  mrpPlanningCalendar: MrpPlanningCalendarCodes,
  followUpProduct: Product,
  orderChangeManagementProfile: OrderChangeManagementProfileCodes,
  fiscalYearVariant: FiscalYearVariantCodes,
  periodType: PeriodTypeCodes,
  roundingProfile: RoundingProfileCodes,
  putAwayAndStockRemovalStrategy: PutAwayAndStockRemovalStrategyCodes,
  rangeOfCoverageProfile: RangeOfCoverageProfileCodes,
  provisioningServiceLevel: ProvisioningServiceLevelCodes,
  productionSchedulingProfile: ProductionSchedulingProfileCodes,
  repetitiveManufacturingProfile: RepetitiveManufacturingProfileCodes,
  periodProfileForSafetyTime: PeriodProfileForSafetyTimeCodes,
  isSafetyTime: IsSafetyTimeCodes,
  planningStrategyGroup: PlanningStrategyGroupCodes,
  consumptionReferenceProduct: Product,
  consumptionReferencePlant: Plant,
  inventoryForCycleCountIndicator: InventoryForCyclicCountingCodes,
  forecastRequirementsSplitIndicator: ForecastRequirementsSplitIndicatorCodes,
  mrpGroup: MrpGroupCodes,
  lotSizingProcedure: LotSizeProcedureCodes,
  plantStorageLocation: [
    Product_productionAspect_productPlanningPlants_plantStorageLocation,
  ],
  plant: Plant,
  productPlanningMrpAreas: [
    Product_productionAspect_productPlanningPlants_productPlanningMRPAreas,
  ],
  mrpType: MRPTypeCodes,
  mrpController: MRPController,
  crossProjectIndicator: CrossProjectIndicatorCodes,
  abcIndicator: AbcIndicatorCodes,
  dependentRequirementsType: DependentRequirementsTypeCodes,
  procurementType: ProcurementTypeCodes,
  procurementSubType: ProcurementSubTypeCodes,
  consumptionMode: ConsumptionModeCodes,
});
Product_productionAspect_productPlanningPlants_productPlanningMRPAreas.define({
  isMrpDependentRequirement: MRPDependentRequirementCodes,
  mrpGroup: MrpGroupCodes,
  lotSizingProcedure: LotSizeProcedureCodes,
  mrpType: MRPTypeCodes,
  planAndOrderDayDetermination: PlanAndOrderDayDeterminationCodes,
  storageCostsPercentageCode: StorageCostsPercentageCodes,
  periodProfileForSafetyTime: PeriodProfileForSafetyTimeCodes,
  mrpArea: MRPArea,
  mrpController: MRPController,
  roundingProfile: RoundingProfileCodes,
  coverageProfileRange: CoverageProfileRangeCodes,
  safetyTimeIndicator: SafetyTimeIndicatorCodes,
  procurementType: ProcurementTypeCodes,
  procurementSubType: ProcurementSubTypeCodes,
});
Product_productionAspect_productSCMPlants.define({
  plant: Plant,
  productScmmrpAreas: [
    Product_productionAspect_productSCMPlants_productSCMMRPAreas,
  ],
  retainFixedPegging: RetainFixedPeggingCodes,
  alertRelevance: ProductAlertRelevanceCodes,
  heuristicsId: PPCHeuristicCodes,
  interactiveSourcingProfile: InteractiveSourcingProfileCodes,
  lotSizeUnitOfMeasure: UnitOfMeasureCodes,
  dynamicPeggingStrategy: DynamicPeggingStrategyCodes,
  conversionRule: ConversionRuleCodes,
  requirementStrategy: RequirementStrategyCodes,
  billOfMaterialExplosionIndicator: BillOfMaterialExplosionIndicatorCodes,
  planningGroup: PlanningGroupCodes,
  planningProcedure: PlanningProcedureCodes,
  lotSizingProcedurePlanningCalendar: PlanningCalendarCodes,
});
Product_productionAspect_productSCMPlants_productSCMMRPAreas.define({
  mrpArea: MRPArea,
  heuristicsId: PPCHeuristicCodes,
  lotSizeUnitOfMeasure: UnitOfMeasureCodes,
  planningGroup: PlanningGroupCodes,
  planningProcedure: PlanningProcedureCodes,
  periodicLotSizingPlanningCalendar: PlanningCalendarCodes,
});
Product_qualityInspectionAspect.define({
  catalogProfile: QualityCatalogProfileCodes,
  plants: [Product_qualityInspectionAspect_plants],
  texts: [Product_qualityInspectionAspect_texts],
  localized: Product_qualityInspectionAspect_texts,
});
Product_qualityInspectionAspect_plants.define({
  plant: Plant,
  authorizationGroup: QualityAuthorizationGroupCodes,
  managementSystem: SupplierQualityManagementSystemCodes,
  certificateType: QualityCertificateTypeCodes,
  controlKey: QualityManagementControlKeyCodes,
});
Product_salesAspect.define({
  contractAccountingBillingCycle: BillingCycleCodes,
  productBillingCycleDetermination: BillingCycleRuleCodes,
  contractAutoRenewalType: ContractAutoRenewalTypeCodes,
  minimumDurationUnit: DurationUnitCodes,
  termOfNoticeUnit: DurationUnitCodes,
  durationUnit: DurationUnitCodes,
  extensionDurationUnit: DurationUnitCodes,
  transportationGroup: TransportationGroupCodes,
  salesStatus: ProductSalesStatusCodes,
  itemCategoryGroup: ItemCategoryGroupCodes,
  packagingProductType: PackagingProductTypeCodes,
  productFreightGroup: ProductFreightGroupCodes,
  allowedPackagingVolumeQuantityUnit: UnitOfMeasureCodes,
  allowedPackagingWeightQuantityUnit: UnitOfMeasureCodes,
  salesPlant: [Product_salesAspect_salesPlant],
  salesDistributionChains: [Product_salesAspect_salesDistributionChains],
  salesTaxes: [Product_salesAspect_salesTaxes],
  division: DivisionCodes,
  productHierarchy: ProductHierarchyCodes,
});
Product_salesAspect_salesDistributionChains.define({
  durationUnit: DurationUnitCodes,
  extensionDurationUnit: DurationUnitCodes,
  volumeRebateGroup: VolumeRebateGroupCodes,
  productAccountAssignmentGroup: ProductAccountAssignmentGroupCodes,
  productUnitGroup: ProductUnitGroupCodes,
  firstSalesSpecificationProductGroup: FirstProductPricingGroupCodes,
  secondSalesSpecificationProductGroup: SecondProductPricingGroupCodes,
  thirdSalesSpecificationProductGroup: ThirdProductPricingGroupCodes,
  fourthSalesSpecificationProductGroup: FourthProductPricingGroupCodes,
  fifthSalesSpecificationProductGroup: FifthProductPricingGroupCodes,
  productCommissionGroup: ProductCommissionGroupCodes,
  roundingProfile: RoundingProfileCodes,
  logisticsStatisticsGroup: LogisticsStatisticsGroupCodes,
  priceSpecificationProductGroup: PriceSpecificationProductGroupCodes,
  distributionChannel: DistributionChannelCodes,
  salesOrganization: SalesOrganization,
  productHierarchy: ProductHierarchyCodes,
  itemCategoryGroup: ItemCategoryGroupCodes,
  deliveryQuantityUnit: UnitOfMeasureCodes,
  salesMeasureUnit: UnitOfMeasureCodes,
  salesStatus: ProductSalesStatusCodes,
  ratePlans: [Product_salesAspect_salesDistributionChains_ratePlans],
  texts: [Product_salesAspect_salesDistributionChains_texts],
  localized: Product_salesAspect_salesDistributionChains_texts,
});
Product_salesAspect_salesDistributionChains_ratePlans.define({
  division: DivisionCodes,
  ratePlan: RatePlan,
});
Product_salesAspect_salesPlant.define({
  plant: Plant,
  replacementPartType: ReplacementPartTypeCodes,
  loadingGroup: LoadingGroupCodes,
  productFreightGroup: ProductFreightGroupCodes,
});
Product_salesAspect_salesTaxes.define({
  country: CountryCodes,
  taxType: TaxCategoryCodes,
  taxRateType: ProductTaxClassificationCodes,
});
Product_servicePartsManagementAspect.define({
  handlingIndicator: HandlingIndicatorCodes,
  adjustmentProfile: AdjustmentProfileCodes,
  handlingUnitType: HandlingUnitTypeCodes,
  smartFormName: SmartFormCodes,
  warehouseStorageCondition: WarehouseStorageConditionCodes,
  warehouseProductGroup: WarehouseProductGroupCodes,
  standardHandlingUnitType: HandlingUnitTypeCodes,
  qualityInspectionGroup: QualityInspectionGroupCodes,
  timeUnitForQuarantinePeriod: UnitOfMeasureCodes,
});
Product_unitOfMeasureConversions.define({
  measurementUnit1: UnitOfMeasureCodes,
  measurementUnit2: UnitOfMeasureCodes,
});
Product_unitOfMeasures.define({
  measurementUnit: UnitOfMeasureCodes,
  productDimensions: [Product_unitOfMeasures_productDimensions],
  gtins: [Product_unitOfMeasures_gtins],
});
Product_unitOfMeasures_gtins.define({
  supplierGtiNs: [Product_unitOfMeasures_gtins_supplierGTINs],
});
Product_unitOfMeasures_gtins_supplierGTINs.define({ supplier: Supplier });
Product_unitOfMeasures_productDimensions.define({
  dimensionName: QuantityTypeCodes,
  measurementUnit: UnitOfMeasureCodes,
});
PurchasingTaxCodes.define({ country: CountryCodes });
ProductTaxClassificationCodes.define({
  country: CountryCodes,
  taxType: TaxCodes,
});
BusinessPartner_supplierInformation.define({
  purchasingBlockingReason: SupplierPurchasingBlockingReasonCodes,
  postingBlockingReason: SupplierPostingBlockingReasonCodes,
  paymentBlockingReason: SupplierPaymentBlockingReasonCodes,
  responsibleType: TaxGroupCodes,
  accountingInformation: [
    BusinessPartner_supplierInformation_accountingInformation,
  ],
  purchasingArrangements: [
    BusinessPartner_supplierInformation_purchasingArrangements,
  ],
});
BusinessPartner_supplierInformation_accountingInformation.define({
  postingBlockingReason: SupplierPostingBlockingReasonCodes,
  paymentBlockingReason: SupplierPaymentBlockingReasonCodes,
  minorityGroup: MinorityIndicatorsCodes,
  companyCode: CompanyCode,
  reconciliationAccount: GeneralLedgerAccount,
  paymentTerms: PaymentTerms,
  paymentMethods: [
    BusinessPartner_supplierInformation_accountingInformation_paymentMethods,
  ],
  invoiceSortingOrder: SupplierAccountingInvoiceSortingOrderCodes,
  alternativePayees: [
    BusinessPartner_supplierInformation_accountingInformation_alternativePayees,
  ],
  accountingClerk: BusinessPartner,
  withholdingTaxes: [
    BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes,
  ],
});
BusinessPartner_supplierInformation_accountingInformation_alternativePayees.define(
  {
    alternativePayeeBusinessPartner: BusinessPartner,
    alternativePayeeSupplier: Supplier,
  },
);
BusinessPartner_supplierInformation_accountingInformation_paymentMethods.define(
  { paymentMethod: PaymentMethodCodes },
);
BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes.define(
  {
    recipientType: VendorRecipientTypeCodes,
    type: SupplierAccountingWithholdingTaxTypeCodes,
    subType: SupplierAccountingWithholdingTaxSubTypeCodes,
    exemption:
      BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes_exemption,
  },
);
BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes_exemption.define(
  { reason: SupplierAccountingWithholdingTaxExemptionReasonCodes },
);
BusinessPartner_supplierInformation_purchasingArrangements.define({
  purchasingBlockingReason: SupplierPurchasingBlockingReasonCodes,
  purchasingOrganization: PurchasingOrganization,
  purchasingGroup: PurchasingGroup,
  currency: CurrencyCodes,
  paymentTerms: PaymentTerms,
  classification: SupplierPurchasingArrangementClassificationCodes,
  calculationSchema: SupplierPurchasingArrangementCalculationSchemaCodes,
  incotermsClassification: IncotermsClassificationCodes,
  functions: [
    BusinessPartner_supplierInformation_purchasingArrangements_functions,
  ],
});
BusinessPartner_supplierInformation_purchasingArrangements_functions.define({
  functionCode: SupplierPurchasingArrangementFunctionCodes,
  functionPartnerCustomer: Customer,
  functionPartnerSupplier: Supplier,
  functionPartnerContactPerson: BusinessPartner,
  functionPartnerWorkforcePerson: WorkforcePerson,
});
MaterialDocument_items.define({
  material: Product,
  batch: Batch,
  plant: Plant,
  storageLocation: StorageLocation,
  inventoryStockType: StockTypeCodes,
  inventorySpecialStockIndicator: SpecialStockIndicatorCodes,
  customer: Customer,
  supplier: Supplier,
  projectControllingObject: ProjectControllingObject,
  goodsMovementType: GoodsMovementTypeCodes,
  referenceDocumentType: GoodsMovementRefDocTypeCodes,
  issuingOrReceivingMaterial: Product,
  issuingOrReceivingBatch: Batch,
  issuingOrReceivingPlant: Plant,
  issuingOrReceivingStorageLocation: StorageLocation,
  issuingOrReceivingStockType: StockTypeCodes,
  issuingOrReceivingSpecialStockIndicator: SpecialStockIndicatorCodes,
  issuingOrReceivingValuationType: InventoryValuationTypeCodes,
  goodsMovementReason: GoodsMovementReasonCodes,
  inventoryValuationType: InventoryValuationTypeCodes,
  costCenter: CostCenter,
  profitCenter: ProfitCenter,
});
ContactPersonRelationship_contactInformation.define({
  addressData: [ContactPersonRelationship_contactInformation_addressData],
});
ContactPersonRelationship_contactInformation_addressData.define({
  workplaceAddress:
    ContactPersonRelationship_contactInformation_addressData_workplaceAddress,
  emailAddresses: [
    ContactPersonRelationship_contactInformation_addressData_emailAddresses,
  ],
  phoneNumbers: [
    ContactPersonRelationship_contactInformation_addressData_phoneNumbers,
  ],
  faxNumbers: [
    ContactPersonRelationship_contactInformation_addressData_faxNumbers,
  ],
  websites: [ContactPersonRelationship_contactInformation_addressData_websites],
});
ContactPersonRelationship_contactInformation_addressData_faxNumbers.define({
  country: CountryCodes,
});
ContactPersonRelationship_contactInformation_addressData_phoneNumbers.define({
  country: CountryCodes,
});
ContactPersonRelationship_contactInformation_addressData_workplaceAddress.define(
  {
    details:
      ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details,
  },
);
ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details.define(
  {
    scriptVariants: [
      ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details_scriptVariants,
    ],
  },
);
ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details_scriptVariants.define(
  { scriptCode: ScriptCodes },
);
export const normalizrEntities = {
  GLAccountLineItem,
  NewsItem,
  ExampleItem1,
  ExampleItem2,
  WorkforcePerson,
  Customer,
  CustomerBillingBlockingReasonCodes,
  CustomerDeliveryBlockingReasonCodes,
  CustomerOpportunity,
  CustomerOrder,
  CustomerOrderBlockingReasonCodes,
  CustomerOrderItemTypeCodes,
  CustomerOrderReasonCodes,
  CustomerOrderTypeCodes,
  CustomerQuote,
  CustomerQuoteTypeCodes,
  CustomerSalesArrangementGroupCodes,
  CustomerSalesArrangementPriceGroupCodes,
  CustomerTaxClassificationCodes,
  SalesCancellationReasonCodes,
  SalesCancellationStatusCodes,
  SalesPartnerRoleCodes,
  SalesProcessingStatusCodes,
  SalesTextTypeCodes,
  BrandCodes,
  Product,
  ProductCategoryCodes,
  ProductGroup,
  ProductPlantStatusCodes,
  ProductTypeCodes,
  ProductTypeGroupCodes,
  QuantityTypeCodes,
  SerialNumberProfileCodes,
  PurchaseOrder,
  Supplier,
  SupplierAccountingInvoiceSortingOrderCodes,
  SupplierAccountingWithholdingTaxExemptionReasonCodes,
  SupplierAccountingWithholdingTaxSubTypeCodes,
  SupplierAccountingWithholdingTaxTypeCodes,
  SupplierPaymentBlockingReasonCodes,
  SupplierPostingBlockingReasonCodes,
  SupplierPurchasingArrangementCalculationSchemaCodes,
  SupplierPurchasingArrangementClassificationCodes,
  SupplierPurchasingArrangementFunctionCodes,
  SupplierPurchasingBlockingReasonCodes,
  GoodsMovementCodes,
  GoodsMovementReasonCodes,
  GoodsMovementRefDocTypeCodes,
  GoodsMovementTypeCodes,
  InventoryTransactionTypeCodes,
  InventoryValuationCategoryCodes,
  InventoryValuationTypeCodes,
  MaterialDocument,
  SpecialStockIndicatorCodes,
  StockDeterminationGroupCodes,
  StockTypeCodes,
  AddressDataUsageCodes,
  BusinessPartner,
  BusinessPartnerGroupTypeCodes,
  BusinessPartnerRelationship,
  BusinessPartnerRoleCodes,
  CommunicationMethodCodes,
  CompanyLegalFormCodes,
  ContactPersonRelationship,
  IdentificationTypeCodes,
  IndustrySectorCodes,
  IndustrySystemTypeCodes,
  LifecycleStatusCodes,
  RelationshipStatusCodes,
  TaxNumberTypeCodes,
  WorkforcePerson_workAssignments,
  WorkforcePerson_workAssignments_alternateCostAssignment,
  WorkforcePerson_workAssignments_alternateCostAssignment_items,
  WorkforcePerson_workAssignments_enterpriseStructureDetail,
  FormOfAddressCodes,
  CountrySubdivisionCodes,
  AcademicTitleCodes,
  FamilyNameSuffixCodes,
  FamilyNamePrefixCodes,
  StreetCodes,
  SecondaryRegionCodes,
  TertiaryRegionCodes,
  TownCodes,
  DistrictCodes,
  CountryCodes,
  CurrencyCodes,
  ScriptCodes,
  TimeZoneCodes,
  LanguageCodes,
  Purpose,
  CostCenter,
  InternalOrder,
  NetworkActivity,
  ProjectControllingObject,
  SalesOrderItem,
  BudgetPeriod,
  FunctionalArea,
  Fund,
  FundsCenter,
  Grant,
  CompanyCode,
  Plant,
  StorageLocation,
  PurchasingOrganization,
  EmailUsageCodes,
  JobDetailStatusCodes,
  EventCodes,
  EventReasonCodes,
  EmployeeClassCodes,
  PaymentTypeCodes,
  PaymentMethodCodes,
  BankAccountTypeCodes,
  BankControlKeyCodes,
  PhoneUsageCodes,
  WorkforcePersonPhotoTypeCodes,
  AddressUsageCodes,
  JobClassification,
  OrganizationalUnit,
  BusinessPartner_addressData,
  BusinessPartner_addressData_emailAddresses,
  BusinessPartner_addressData_faxNumbers,
  BusinessPartner_addressData_organizationPostalAddress,
  BusinessPartner_addressData_organizationPostalAddress_scriptVariants,
  BusinessPartner_addressData_personPostalAddress,
  BusinessPartner_addressData_personPostalAddress_scriptVariants,
  BusinessPartner_addressData_phoneNumbers,
  BusinessPartner_addressData_usages,
  BusinessPartner_addressData_websites,
  BusinessPartner_bankAccounts,
  BusinessPartner_businessPartnerGroup,
  BusinessPartner_businessPartnerGroup_primaryGroupName,
  BusinessPartner_businessPartnerGroup_primaryGroupName_scriptVariants,
  BusinessPartner_businessPartnerGroup_secondaryGroupName,
  BusinessPartner_businessPartnerGroup_secondaryGroupName_scriptVariants,
  BusinessPartner_customerInformation,
  BusinessPartner_customerInformation_salesArrangements,
  BusinessPartner_customerInformation_salesArrangements_functions,
  BusinessPartner_customerInformation_taxClassifications,
  BusinessPartner_identifications,
  BusinessPartner_organization,
  BusinessPartner_organization_industries,
  BusinessPartner_organization_nameDetails,
  BusinessPartner_organization_nameDetails_scriptVariants,
  BusinessPartner_person,
  BusinessPartner_person_nameDetails,
  BusinessPartner_person_nameDetails_scriptVariants,
  BusinessPartner_roles,
  BusinessPartner_taxNumbers,
  CustomerOpportunityItemPricing,
  CustomerOpportunity_items,
  CustomerOrder_items,
  CustomerOrder_items_notes,
  CustomerOrder_items_partners,
  CustomerOrder_items_priceComponents,
  CustomerOrder_items_salesAspect,
  CustomerOrder_items_salesAspect_scheduleLines,
  CustomerOrder_items_serviceAspect,
  CustomerOrder_items_serviceAspect_referenceObjects,
  CustomerOrder_notes,
  CustomerOrder_partners,
  CustomerOrder_priceComponents,
  CustomerOrder_salesAspect,
  CustomerOrder_serviceAspect,
  CustomerOrder_serviceAspect_referenceObjects,
  CustomerQuoteTypeCodes_texts,
  CustomerQuote_comments,
  CustomerQuote_items,
  CustomerQuote_items_SalesQuotePriceItem,
  CustomerQuote_items_comments,
  CustomerQuote_partners,
  Equipment,
  MaritalStatusCodes,
  IncotermsClassificationCodes,
  GenderCodes,
  UnitOfMeasureCodes,
  PaymentTerms,
  TaxCategoryCodes,
  ShippingPoint,
  SalesArea,
  SalesOffice,
  SalesGroup,
  SalesOrganization,
  DistributionChannelCodes,
  DivisionCodes,
  ConditionTypeCodes,
  PricingProcedureCodes,
  CustomerClassificationCodes,
  CustomerAccountGroupCodes,
  NielsenRegionCodes,
  DataMediumExchangeIndicatorCodes,
  DataExchangeInstructionCodes,
  CustomerConditionGroupCodes,
  CfopCategoryCodes,
  IndustryCodes,
  AccountTaxTypeCodes,
  PartialDeliveryControlCodes,
  ServiceOrganization,
  ServiceOrderPriorityCodes,
  DeliveryPriorityCodes,
  ShippingConditionCodes,
  Product_classificationAspects,
  Product_classificationAspects_characteristicValuations,
  Product_classificationAspects_classAssignments,
  Product_configurationAspect,
  Product_configurationAspect_configurationCharacteristicValuations,
  Product_configurationAspect_plantSpecificConfigurations,
  Product_configurationAspect_plantSpecificConfigurations_configurationCharacteristicValuations,
  Product_digitalAssetsAspect,
  Product_digitalAssetsAspect_attachments,
  Product_financialAspect,
  Product_financialAspect_costingPlantData,
  Product_financialAspect_inventoryValuationData,
  Product_financialAspect_inventoryValuationData_ledgerPeriodData,
  Product_financialAspect_inventoryValuationData_ledgerPeriodData_currencyValuationTypeData,
  Product_internationalTradeAspect,
  Product_internationalTradeAspect_internationalTradePlants,
  Product_plants,
  Product_procurementAspect,
  Product_procurementAspect_procurementPlants,
  Product_procurementAspect_procurementTaxes,
  Product_procurementAspect_texts,
  Product_productionAspect,
  Product_productionAspect_productMovementPlants,
  Product_productionAspect_productMovementPlants_productMovementMRPAreas,
  Product_productionAspect_productPlanningPlants,
  Product_productionAspect_productPlanningPlants_plantStorageLocation,
  Product_productionAspect_productPlanningPlants_productPlanningMRPAreas,
  Product_productionAspect_productSCMPlants,
  Product_productionAspect_productSCMPlants_productSCMMRPAreas,
  Product_qualityInspectionAspect,
  Product_qualityInspectionAspect_plants,
  Product_qualityInspectionAspect_texts,
  Product_salesAspect,
  Product_salesAspect_salesDistributionChains,
  Product_salesAspect_salesDistributionChains_ratePlans,
  Product_salesAspect_salesDistributionChains_texts,
  Product_salesAspect_salesPlant,
  Product_salesAspect_salesTaxes,
  Product_servicePartsManagementAspect,
  Product_texts,
  Product_unitOfMeasureConversions,
  Product_unitOfMeasures,
  Product_unitOfMeasures_gtins,
  Product_unitOfMeasures_gtins_supplierGTINs,
  Product_unitOfMeasures_productDimensions,
  ClassTypeCodes,
  IntervalTypeCodes,
  Characteristic,
  ClassificationStatusCodes,
  Class,
  VariantConfigurationStatusCodes,
  ProfitCenter,
  LedgerCodes,
  ExternalCurrencyValuationTypeCodes,
  TaxCodes,
  PurchasingGroup,
  AttachmentUrlUsageCodes,
  ProductValuationClassCodes,
  ProductPriceDeterminationControlCodes,
  FiscalPeriodTypeCodes,
  VarianceKeyCodes,
  TaskListTypeCodes,
  ProductBomUsageCodes,
  ProductCasNumberCodes,
  InternationalTradeClassificationCodes,
  ProductCfopCategoryCodes,
  ExportAndImportProductGroupCodes,
  ConsumptionTaxControlCodes,
  PurchasingTaxCodes,
  PurchasingAcknowledgmentProfileCodes,
  ManufacturerPartProfileCodes,
  VariablePurchaseOrderUnitStatusCodes,
  ProcurementSubTypeCodes,
  ComponentBackFlushIndicatorCodes,
  MRPTypeCodes,
  CrossProjectIndicatorCodes,
  AbcIndicatorCodes,
  DependentRequirementsTypeCodes,
  ProcurementTypeCodes,
  ConsumptionModeCodes,
  RoundingProfileCodes,
  CoverageProfileRangeCodes,
  SafetyTimeIndicatorCodes,
  RetainFixedPeggingCodes,
  ProductAlertRelevanceCodes,
  PPCHeuristicCodes,
  InteractiveSourcingProfileCodes,
  DynamicPeggingStrategyCodes,
  ConversionRuleCodes,
  RequirementStrategyCodes,
  BillOfMaterialExplosionIndicatorCodes,
  StorageConditionCodes,
  TemperatureConditionIndicatorCodes,
  LabelTypeCodes,
  LabelFormCodes,
  ShelfLifeExpirationDatePeriodCodes,
  ContainerRequirementCodes,
  ShelfLifeExpirationDateRoundingRuleCodes,
  SchedulingMarginKeyCodes,
  IsProductToBeDiscontinuedCodes,
  StorageCostsPercentageCodes,
  PlanAndOrderDayDeterminationCodes,
  MrpPlanningCalendarCodes,
  OrderChangeManagementProfileCodes,
  FiscalYearVariantCodes,
  PeriodTypeCodes,
  PutAwayAndStockRemovalStrategyCodes,
  RangeOfCoverageProfileCodes,
  ProvisioningServiceLevelCodes,
  ProductionSchedulingProfileCodes,
  RepetitiveManufacturingProfileCodes,
  PeriodProfileForSafetyTimeCodes,
  IsSafetyTimeCodes,
  PlanningStrategyGroupCodes,
  InventoryForCyclicCountingCodes,
  ForecastRequirementsSplitIndicatorCodes,
  MrpGroupCodes,
  LotSizeProcedureCodes,
  MRPDependentRequirementCodes,
  QualityCatalogProfileCodes,
  QualityAuthorizationGroupCodes,
  SupplierQualityManagementSystemCodes,
  QualityCertificateTypeCodes,
  QualityManagementControlKeyCodes,
  DangerousGoodsIndicatorProfileCodes,
  SerialNumberExplicitnessLevelCodes,
  ProductDiscountInKindCodes,
  BasicProductCodes,
  PackagingProductGroupCodes,
  SerialIdentifierAssignmentProfileCodes,
  ANPCodes,
  AvailabilityCheckTypeCodes,
  DistributionProfileCodes,
  ProductLogisticsHandlingGroupCodes,
  HandlingIndicatorCodes,
  AdjustmentProfileCodes,
  HandlingUnitTypeCodes,
  SmartFormCodes,
  WarehouseStorageConditionCodes,
  WarehouseProductGroupCodes,
  QualityInspectionGroupCodes,
  BillingCycleCodes,
  BillingCycleRuleCodes,
  ContractAutoRenewalTypeCodes,
  DurationUnitCodes,
  ProductSalesStatusCodes,
  ItemCategoryGroupCodes,
  ProductHierarchyCodes,
  ProductTaxClassificationCodes,
  TransportationGroupCodes,
  PackagingProductTypeCodes,
  ProductFreightGroupCodes,
  VolumeRebateGroupCodes,
  ProductAccountAssignmentGroupCodes,
  ProductUnitGroupCodes,
  FirstProductPricingGroupCodes,
  SecondProductPricingGroupCodes,
  ThirdProductPricingGroupCodes,
  FourthProductPricingGroupCodes,
  FifthProductPricingGroupCodes,
  ProductCommissionGroupCodes,
  LogisticsStatisticsGroupCodes,
  PriceSpecificationProductGroupCodes,
  ReplacementPartTypeCodes,
  LoadingGroupCodes,
  ProductionSupervisorCodes,
  ProductionOrderBatchEntryCodes,
  MRPArea,
  MRPController,
  PlanningGroupCodes,
  PlanningProcedureCodes,
  PlanningCalendarCodes,
  RatePlan,
  BusinessPartner_supplierInformation,
  BusinessPartner_supplierInformation_accountingInformation,
  BusinessPartner_supplierInformation_accountingInformation_alternativePayees,
  BusinessPartner_supplierInformation_accountingInformation_paymentMethods,
  BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes,
  BusinessPartner_supplierInformation_accountingInformation_withholdingTaxes_exemption,
  BusinessPartner_supplierInformation_purchasingArrangements,
  BusinessPartner_supplierInformation_purchasingArrangements_functions,
  GeneralLedgerAccount,
  TaxGroupCodes,
  MinorityIndicatorsCodes,
  VendorRecipientTypeCodes,
  MaterialDocument_items,
  Batch,
  ProductionOrder,
  ContactPersonRelationship_contactInformation,
  ContactPersonRelationship_contactInformation_addressData,
  ContactPersonRelationship_contactInformation_addressData_emailAddresses,
  ContactPersonRelationship_contactInformation_addressData_faxNumbers,
  ContactPersonRelationship_contactInformation_addressData_phoneNumbers,
  ContactPersonRelationship_contactInformation_addressData_websites,
  ContactPersonRelationship_contactInformation_addressData_workplaceAddress,
  ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details,
  ContactPersonRelationship_contactInformation_addressData_workplaceAddress_details_scriptVariants,
};
