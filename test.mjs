import { test } from "node:test";
import { strict as assert } from "node:assert";

test("should pass");
test("should fail", () => {
	assert.fail();
});
