import { assertEquals } from "@std/assert";
import { groupBySelector } from "./group_by_selector.ts";

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
