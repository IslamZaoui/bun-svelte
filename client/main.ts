import { mount, unmount } from "svelte";
import App from "./app.svelte";

declare global {
	var didMount: boolean | undefined;  
}

let app: Record<string, any> | undefined;

const root = document.getElementById("root")!;
if (!globalThis.didMount) {
	app = mount(App, { target: root });
}
globalThis.didMount = true;

if (import.meta.hot) {
	import.meta.hot.accept(async () => {
		if (!app) return;
		const prevApp = app;
		app = undefined;
		await unmount(prevApp, { outro: true });
		app = mount(App, { target: root });
	});
}
