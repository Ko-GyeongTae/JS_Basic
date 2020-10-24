const fs = require('fs');
const data = fs.readFileSync("./user.json", { encoding: "utf-8" });
console.log(data);
console.log(typeof data);