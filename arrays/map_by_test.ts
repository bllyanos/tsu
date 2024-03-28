import { assertEquals } from "@std/assert";
import { mapBy } from "./map_by.ts";

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
