/** Router */
import mainRoutes from './router/routes';
import buildingRoutes from './router/buildings';
import userRoutes from './router/users';
import roomRoutes from './router/rooms';

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
app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);

app.get('*', (req, res) =>
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
);

app.listen(port, () => {
  console.log(`${serverName} is running on port ${port}`);
});