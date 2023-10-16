import { red, green, gray, dim } from "kleur/colors";

export default async function * reporter(source) {
	for await (const event of source) {
		const { type, data: { name, details } } = event;

		switch (type) {
			case 'test:pass':
				// TODO: format duration to seconds/ms
				yield `  ${green(`✔`)} ${name} ${dim(gray(`(${details.duration_ms.toFixed(3)}ms)`))}\n`;
				break;
			case 'test:fail':
				// TODO: format duration to seconds/ms
				yield `  ${red(`✘ [fail]`)} ${name} ${dim(gray(`(${details.duration_ms.toFixed(3)}ms)`))}\n`;
				break;
			case 'test:plan':
				// TODO: implement test plan output
				break;
			case 'test:diagnostic':
				// TODO: implement diagnostic message output
				break;
			case 'test:coverage': {
				// TODO: implement coverage output
				break;
			}
		}
	}
}
