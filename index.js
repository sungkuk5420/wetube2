import "@babel/polyfill";
import dotenv from "dotenv";
import "./src/db";
import app from "./src/app";

dotenv.config();

import "./src/models/Video";
import "./src/models/Comment";
import "./src/models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
