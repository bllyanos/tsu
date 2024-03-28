/** Groups an array of objects by a key. */
export function groupBy<T, K extends keyof T>(
  array: T[],
  key: K,
): Map<T[K], T[]> {
  const map = new Map<T[K], T[]>();
  for (const element of array) {
    const keyValue = element[key];
    const group = map.get(keyValue) ?? [];
    group.push(element);
    map.set(keyValue, group);
  }
  return map;
}
