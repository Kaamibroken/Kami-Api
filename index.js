const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// --- IMPORT ALL PANELS ---
const np = require("./api/np");
const np1 = require("./api/np1");
const np2 = require("./api/np2");
const np3 = require("./api/np3");  // <-- NEW

// --- ROUTES ---
app.use("/api/np", np);
app.use("/api/np1", np1);
app.use("/api/np2", np2);
app.use("/api/np3", np3); // <-- NEW

// --- HEALTH CHECK ---
app.get("/", (req,res)=> res.send("API RUNNING ✅"));

// --- START SERVER ---
app.listen(PORT, "0.0.0.0", ()=>console.log(`🚀 Server running on port ${PORT}`));
