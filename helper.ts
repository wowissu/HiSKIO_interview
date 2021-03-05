export function capitalize (s: string) {
  if (typeof s !== 'string') { return ''; };
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const priceFormatter = new Intl.NumberFormat();

export function price (val: number, formatter = priceFormatter) {
  return formatter.format(val);
}
