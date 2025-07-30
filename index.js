 const express = require("express");
const cors = require("cors");
const app = express();

const WebDevProject = require("./models/webDevProject.model");
const TechStack = require("./models/techstack.model");
const Contact = require("./models/contact.model");

const { initializeDatabase } = require("./db/db.connect");

initializeDatabase().catch(err => {
  console.error("Database initialization failed:", err.message);
  process.exit(1);
});

// app.use(cors({
//   origin: 'http://localhost:5173' // Use 'https://post-folio-frontend.vercel.app/' for production
// }));
// app.use(express.json());

app.use(cors({
  origin: 'https://post-folio-frontend.vercel.app/' // Use 'https://post-folio-frontend.vercel.app/' for production
}));
app.use(express.json());



// ---------------------- Portfolio Routes (Public) ----------------------

app.get("/projects", async (req, res) => {
  try {
    const projects = await WebDevProject.find();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    res.status(500).json({ error: "Server error fetching projects", details: error.message });
  }
});

app.get("/techstacks", async (req, res) => {
  try {
    const techStacks = await TechStack.find();
    res.json(techStacks);
  } catch (error) {
    console.error("Error fetching tech stacks:", error.message);
    res.status(500).json({ error: "Server error fetching tech stacks", details: error.message });
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contact messages:", error.message);
    res.status(500).json({ error: "Server error fetching contacts", details: error.message });
  }
});

// --------------------------------------------
// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});