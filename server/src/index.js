/** Properties */
const serverName = "Server API"
const port = process.env.PORT || 8080;

/** Libraries */
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

/** Configuration */
const app = express();

app.listen(port, () => {
  console.log(`${serverName} is running on port ${port}`);
});

function createServer() {
  const mainRoutes = require("./router/routes")();
  const buildingRoutes = require("./router/buildings")();

  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.resolve('..', 'client', 'build')));

  app.use("/api", mainRoutes);
  app.use("/api/buildings", buildingRoutes)

  app.get('*', (req, res) =>
    res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
  );
}

/** Initialization */
createServer();