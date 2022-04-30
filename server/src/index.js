const appName = "Server API"; 
const port = process.env.PORT || 8080;
const serverInit = require("./server");
const server = serverInit();

server.listen(port, () => {
    console.log(`${appName} running on port ${port}!`)
});

// const express = require("express");

// const PORT = process.env.PORT || 8080;

// const app = express();
// //const cors = require('cors');
// //app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });



// // app.get("/", (req, res) => {
// //   res.json({ message: "Hello from server!" });
// // });

// // // STAFF ROUTES
// // app.post("/register/buildings", (req, res) => {
// //   res.json({ message: "Created a building!" });
// })

// app.get("/register/buildings/1", (req, res) => {
//   res.json({ message: "Returned info about building 1!" })
// })

// app.put("/updateBuilding/buildings/1", (req, res) => {
//   res.json({ message: "Added and Updated Building" })
// })

// app.put("/updateBuilding/buildings/1/room/1", (req, res) => {
//   res.json({ message: "Created New rooms!" })
// })

// // USER ROUTES
// app.post("/book/buildings", (req, res) => {
//   res.json({ message: "Book a specific room" })
// })

// app.get("/search/buildings/1", (req, res) => {
//   res.json({ message: "Returned info about the rooms available for the building" })
// })

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });