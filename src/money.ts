/** Formats an amount in cents as euros with two decimals: 1234 → "12.34 €", -5 → "-0.05 €". */
export function formatEuros(cents: number): string {
  if (!Number.isSafeInteger(cents)) {
    throw new RangeError('cents must be a safe integer');
  }
  const sign = cents < 0 ? '-' : '';
  const abs = Math.abs(cents);
  const euros = Math.floor(abs / 100);
  const rest = String(abs % 100).padStart(2, '0');
  return `${sign}${euros}.${rest} €`;
}
