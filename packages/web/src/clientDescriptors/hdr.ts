import { mediaQueryMatcher } from '../utils/utils';

export function isHDR(): boolean | null {
  const matchForDynamicRange = mediaQueryMatcher('dynamic-range') as (value: string) => boolean;

  if (matchForDynamicRange('high')) {
    return true;
  }

  if (matchForDynamicRange('standard')) {
    return false;
  }

  return null;
}
