/** Groups an array of objects by a selector function. */
export function groupBySelector<T, K>(
  array: T[],
  selector: (element: T) => K,
): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const element of array) {
    const keyValue = selector(element);
    const group = map.get(keyValue) ?? [];
    group.push(element);
    map.set(keyValue, group);
  }
  return map;
}
