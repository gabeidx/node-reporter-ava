import { red, green } from "kleur/colors";

export default async function * reporter(source) {
	for await (const event of source) {
		switch (event.type) {
			case 'test:pass':
				yield `${green(`✔`)} ${event.data.name}\n`;
				break;
			case 'test:fail':
				yield `${red(`✘ [fail]`)} ${event.data.name}\n`;
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
