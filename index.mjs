export default async function * reporter(source) {
	for await (const event of source) {
		switch (event.type) {
			case 'test:pass':
				// TODO: add tty color support
				yield `✔ ${event.data.name}\n`;
				break;
			case 'test:fail':
				// TODO: add tty color support
				yield `✘ [fail] ${event.data.name}\n`;
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
