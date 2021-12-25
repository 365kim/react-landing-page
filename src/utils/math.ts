export const toFixed = (value: number, fractionDigit = 3) => {
  return Number(value.toFixed(fractionDigit));
};

export const getMid = (range: [number, number], ratio: number, fractionDigit = 3) => {
  const [start, end] = range;

  return toFixed(start + (end - start) * ratio, fractionDigit);
};
