import { assertEquals } from "@std/assert";
import {
  hasValue,
  mapBy,
  mapBySelector,
  groupBy,
  groupBySelector,
} from "./mod.ts";

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

Deno.test("mapBy", async (t: Deno.TestContext) => {
  await t.step("mapBy(objects, 'name') should return expected", () => {
    const objects = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Alice" },
    ];

    const expected = new Map([
      // first alice is overwritten by second alice
      ["Alice", objects[3]],
      ["Bob", objects[1]],
      ["Charlie", objects[2]],
    ]);
    const actual = mapBy(objects, "name");
    assertEquals(actual, expected);
  });
});

Deno.test("mapBySelector", async (t: Deno.TestContext) => {
  await t.step(
    "mapBySelector(objects, (o) => o.name) should return expected",
    () => {
      const objects = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Alice" },
      ];

      const expected = new Map([
        // first alice is overwritten by second alice
        ["Alice", objects[3]],
        ["Bob", objects[1]],
        ["Charlie", objects[2]],
      ]);
      const actual = mapBySelector(objects, (o) => o.name);
      assertEquals(actual, expected);
    },
  );
});

Deno.test("groupBy", async (t: Deno.TestContext) => {
  await t.step("groupBy(objects, 'name') should return expected", () => {
    const objects = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Alice" },
    ];

    const expected = new Map([
      ["Alice", [objects[0], objects[3]]],
      ["Bob", [objects[1]]],
      ["Charlie", [objects[2]]],
    ]);
    const actual = groupBy(objects, "name");
    assertEquals(actual, expected);
  });
});

Deno.test("groupBySelector", async (t: Deno.TestContext) => {
  await t.step(
    "groupBySelector(objects, (o) => o.name) should return expected",
    () => {
      const objects = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Alice" },
      ];

      const expected = new Map([
        ["Alice", [objects[0], objects[3]]],
        ["Bob", [objects[1]]],
        ["Charlie", [objects[2]]],
      ]);
      const actual = groupBySelector(objects, (o) => o.name);
      assertEquals(actual, expected);
    },
  );
});
