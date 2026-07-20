require("dotenv").config();

const uri = process.env.MONGODB_URI;
console.log("First 20 chars:", uri ? uri.slice(0, 20) : "UNDEFINED - not loaded");
console.log("Total length:", uri ? uri.length : 0);
console.log("Contains newline:", uri ? uri.includes("\n") : false);