export const toFixed = (value: number, fractionDigit = 3) => {
  return Number(value.toFixed(fractionDigit));
};

export const getMid = (range: [number, number], ratio: number, fractionDigit = 3) => {
  const [start, end] = range;
  let result;

  if (ratio < 0) {
    result = start;
  } else if (ratio > 1) {
    result = end;
  } else {
    result = start + (end - start) * ratio;
  }

  return toFixed(result, fractionDigit);
};
