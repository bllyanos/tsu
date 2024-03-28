/**
 * This module contains small utility functions.
 * @module
 */

/** Check if a value is not null or undefined. */
export function hasValue<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/** Returns a map from an array of objects, using a key from each object. */
export function mapBy<T, K extends keyof T>(array: T[], key: K): Map<T[K], T> {
  const map = new Map<T[K], T>();
  for (const element of array) {
    map.set(element[key], element);
  }
  return map;
}

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
