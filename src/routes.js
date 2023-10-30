const { Router } = require("express");
const UrlControllers = require("./controllers/url_controllers");

const route = Router();

route.get('/', UrlControllers.Index);
route.post('/criar-url', UrlControllers.CriaUrl);

module.exports = route;