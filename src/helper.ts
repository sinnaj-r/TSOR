export const last = <T>(arr: T[]): T | null =>
  arr.length > 0 ? arr[arr.length - 1] : null;
