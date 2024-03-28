/** Returns a map from an array of objects, using a key from each object. */
export function mapBy<T, K extends keyof T>(array: T[], key: K): Map<T[K], T> {
  const map = new Map<T[K], T>();
  for (const element of array) {
    map.set(element[key], element);
  }
  return map;
}
