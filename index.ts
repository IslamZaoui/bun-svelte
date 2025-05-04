import indexPage from "./client/index.html";

const server = Bun.serve({
	port: 3000,
	routes: {
		"/": indexPage,
	},
});

console.log(`Server is running on ${server.url.href}`);
