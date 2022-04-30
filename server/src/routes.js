module.exports = () => {
	const express = require("express");
	const router = express.Router();

	router.get("/", (req, res) => {
		res.send({ message: "Hello from server!" });
	  });
	  
	  // STAFF ROUTES
	  router.post("/register/buildings", (req, res) => {
		res.send({ message: "Created a building!" });
	  })
	  
	  router.get("/register/buildings/1", (req, res) => {
		res.send({ message: "Returned info about building 1!" })
	  })
	  
	  router.put("/updateBuilding/buildings/1", (req, res) => {
		res.send({ message: "Added and Updated Building" })
	  })
	  
	  router.put("/updateBuilding/buildings/1/room/1", (req, res) => {
		res.send({ message: "Created New rooms!" })
	  })
	  
	  // USER ROUTES
	  router.post("/book/buildings", (req, res) => {
		res.send({ message: "Book a specific room" })
	  })
	  
	  router.get("/search/buildings/1", (req, res) => {
		res.send({ message: "Returned info about the rooms available for the building" })
	  })

	  return router;
}