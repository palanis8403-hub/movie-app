const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const movies = require("./movies_metadata.json");

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((m) => String(m.id) === req.params.id);
  if (!movie) return res.status(404).json({ error: "Movie not found" });
  res.json(movie);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
