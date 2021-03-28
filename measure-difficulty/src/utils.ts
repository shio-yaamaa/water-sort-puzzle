export const pickRandomly = <T>(items: T[]): T | null => {
  const itemCount = items.length;
  if (itemCount === 0) return null;
  const pickedIndex = Math.floor(Math.random() * itemCount);
  return items[pickedIndex];
};
