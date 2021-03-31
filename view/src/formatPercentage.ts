export const formatPercentage = (rate: number) => {
  const percentage = rate * 100;
  const roundedPercentage =
    percentage >= 1
      ? Number(percentage).toPrecision(3)
      : percentage >= 0.01
      ? Number(percentage).toPrecision(2)
      : Number(percentage).toPrecision(1);
  return `${roundedPercentage}%`;
};
