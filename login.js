const fs = require("fs");
const login = require("fca-unofficial");

login({email: "điền uid fb vào đây", password: "mk facebook "}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});