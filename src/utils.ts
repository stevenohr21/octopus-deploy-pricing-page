// https://stackoverflow.com/a/31581206
export const formatCcy = (num: number, fraction: number = 2): string => {
  return (
    '$' + num.toLocaleString(undefined, { minimumFractionDigits: fraction })
  );
};

export const handleInvalidValue = (sliderVal: number): number => {
  if (isNaN(sliderVal) || sliderVal < 1) {
    sliderVal = 1;
  } else if (sliderVal > 9999) {
    sliderVal = 9999;
  }
  return sliderVal;
};

export const isCharged = (
  value: number | string,
  freeValue: number | string
): boolean => value > freeValue;

export const calcCharged = (value: any, free: any) => {
  if (isCharged(value, free)) {
    return value - free;
  } else {
    return 0;
  }
};

export const isEligibleUnlimited = (val: any, target: any) => val >= target;
