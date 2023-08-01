/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const buildType = isProduction ? "prod" : "dev";
const port = isProduction ? "0000" : "4444";
const rootPath = path.join(__dirname, "..");
const staticPath = path.join(rootPath, buildType);

module.exports = { isProduction, staticPath, port };
