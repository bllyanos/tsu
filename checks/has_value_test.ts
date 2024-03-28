import { assertEquals } from "@std/assert";
import { hasValue } from "./has_value.ts";

Deno.test("hasValue", async (t: Deno.TestContext) => {
  const testCases = [
    [null, false],
    [undefined, false],
    ["", true],
    [0, true],
    ["hello", true],
    [{}, true],
    [[], true],
  ];

  for (const [input, expected] of testCases) {
    await t.step(`hasValue(${input}) should return ${expected}`, () => {
      const actual = hasValue(input);
      assertEquals(actual, expected);
    });
  }
});
