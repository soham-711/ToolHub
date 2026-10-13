export const percentOf = (pct: number, value: number) => (pct / 100) * value;

export const whatPercent = (part: number, whole: number) =>
  whole === 0 ? NaN : (part / whole) * 100;

export const percentChange = (from: number, to: number) =>
  from === 0 ? NaN : ((to - from) / Math.abs(from)) * 100;

export const fmt = (n: number) =>
  Number.isFinite(n)
    ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 4 }).format(n)
    : "-";
