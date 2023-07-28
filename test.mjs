import { strict as assert } from "node:assert";
import { spawnSync } from "node:child_process";
import { test } from "node:test";

test("pass", () => {
	const child = spawnSync(process.execPath, [
		"--test",
		"--test-reporter", "./index.mjs",
		"./fixtures/pass.mjs",
	], { env: {} });

	assert(child.stdout?.toString().split("\n")?.[0]?.startsWith("  "));
	assert.equal(child.status, 0);
});

test("fail", () => {
	const child = spawnSync(process.execPath, [
		"--test",
		"--test-reporter", "./index.mjs",
		"./fixtures/fail.mjs",
	], { env: {} });

	assert(child.stdout?.toString().split("\n")?.[0]?.startsWith("  "));
	assert.equal(child.status, 1);
});
