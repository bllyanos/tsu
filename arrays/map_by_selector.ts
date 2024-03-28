/** Returns a map from an array of objects, using a selector function. */
export function mapBySelector<T, K>(
  array: T[],
  selector: (element: T) => K,
): Map<K, T> {
  const map = new Map<K, T>();
  for (const element of array) {
    map.set(selector(element), element);
  }
  return map;
}
