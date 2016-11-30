import promisify from "es6-promisify";
import fs from "fs";
const writeFile = promisify(fs.writeFile);

import getSiteState from "../../state";

getSiteState().then(state => fs.writeFile("assets/state.json", JSON.stringify(state, null, 2), "utf8"))
              .then(() => console.log("Fetched"))
              .catch(console.error);
