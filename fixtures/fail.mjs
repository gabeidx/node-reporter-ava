import { strict as assert } from "node:assert";
import { describe, test } from "node:test";

test("should fail", () => {
	assert.fail();
});

describe("describe block", () => {
	test("nested test, should fail", () => {
		assert.fail();
	});
});
