import { assertEquals } from "@std/assert";
import { arrays, checks } from "./mod.ts";

Deno.test("checks module exported correctly", async (t: Deno.TestContext) => {
  await t.step("hasValue should be exported", () => {
    assertEquals(typeof checks.hasValue, "function");
  });
});

Deno.test("arrays module exported correctly", async (t: Deno.TestContext) => {
  await t.step("arrays.mapBy should be exported", () => {
    assertEquals(typeof arrays.mapBy, "function");
  });

  await t.step("arrays.mapBySelector should be exported", () => {
    assertEquals(typeof arrays.mapBySelector, "function");
  });

  await t.step("arrays.groupBy should be exported", () => {
    assertEquals(typeof arrays.groupBy, "function");
  });

  await t.step("arrays.groupBySelector should be exported", () => {
    assertEquals(typeof arrays.groupBySelector, "function");
  });
});
