import { assertEquals } from "@std/assert";
import { mapBySelector } from "./map_by_selector.ts";

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
