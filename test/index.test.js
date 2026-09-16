import { test } from "node:test";
import assert from "node:assert/strict";
import { formatVerdictLine } from "../index.js";

test("formats a VERIFIED line", () => {
  assert.equal(formatVerdictLine("VERIFIED", "review", 6, 6), "VERIFIED · review · 6/6");
});

test("formats a PARTIAL line", () => {
  assert.equal(formatVerdictLine("PARTIAL", "review", 4, 6), "PARTIAL · review · 4/6");
});

test("rejects passed > total", () => {
  assert.throws(() => formatVerdictLine("VERIFIED", "review", 7, 6), RangeError);
});

test("rejects non-integer input", () => {
  assert.throws(() => formatVerdictLine("VERIFIED", "review", 1.5, 6), RangeError);
});
