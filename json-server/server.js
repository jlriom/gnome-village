process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const path = require('path');
const config = require("config");
const jsonServer = require("json-server");
const pause = require("connect-pause");

const dbDataFolder = config.get("dbDataFolder");
const dbDataFile = config.get("dbDataFile");

const dbData =  path.join(dbDataFolder,dbDataFile);

console.log(dbData);

var requestDelay = 0;

if (config.has("delay")) {
	requestDelay = config.get("delay");
}

const server = jsonServer.create();
const router = jsonServer.router(dbData);
const middlewares = jsonServer.defaults();
if (requestDelay > 0) {
	server.use(pause(requestDelay));
}
server.use(middlewares);
server.use(router);

server.listen(5000, () => {
	console.log("JSON Server is running");
});
