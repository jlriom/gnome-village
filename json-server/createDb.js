/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
const request = require("request");

const filepath = path.join(__dirname, "db.json");

request(
	"https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
)
.on('error', function(err) {
    console.error(err);
})
.pipe(fs.createWriteStream(filepath));

