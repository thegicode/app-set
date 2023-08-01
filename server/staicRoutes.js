/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const setupStaticRoutes = (app, staticPath) => {
    const routes = ["first"];
    routes.forEach((route) => {
        app.get(`/${route}`, (req, res) => {
            const htmlPath = path.join(staticPath, `/html/${route}.html`);
            console.log("route", htmlPath);

            fs.readFile(htmlPath, "utf8", (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Failed to load HTML file");
                }
                res.send(data);
            });
        });
    });
};

module.exports = setupStaticRoutes;
