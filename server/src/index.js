/** Router */
import mainRoutes from './router/routes.js';
import buildingRoutes from './router/buildings.js';

/** Libraries */
import express from 'express';
import cors from 'cors';
import path from 'path';

/** Properties */
const serverName = "Server API"
const port = process.env.PORT || 8080;

/** Configuration */
const app = express();

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve('..', 'client', 'build')));

app.use("/api", mainRoutes);
app.use("/api/buildings", buildingRoutes);

app.get('*', (req, res) =>
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
);

app.listen(port, () => {
  console.log(`${serverName} is running on port ${port}`);
});