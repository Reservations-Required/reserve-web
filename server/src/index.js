/** Properties */
const serverName = "Server API"
const port = process.env.PORT || 8080;

/** Libraries */
import express from 'express';
import cors from 'cors';
import path from 'path';

/** Configuration */
const app = express();
import routes from './routes.js';

app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve('..', 'client', 'build')));

app.use("/api", routes);

app.get('*', (req, res) =>
  res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
);

app.listen(port, () => {
  console.log(`${serverName} is running on port ${port}`);
});