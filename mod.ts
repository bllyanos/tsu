/**
 * This module contains small utility functions.
 * @module
 */

/** Check if a value is not null or undefined. */
export function hasValue<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
