export const COMPARISON_OPERATORS = [
  'eq',
  'ne',
  'gt',
  'ge',
  'lt',
  'le',
] as const;
export const LOGICAL_OPERATORS = ['and', 'or', 'not'] as const;
export const COLLECTION_OPERATORS = ['any', 'all'] as const;
export const SUPPORTED_EXPAND_PROPERTIES = [
  'expand',
  'select',
  'top',
  'count',
  'orderby',
  'filter',
] as const;
