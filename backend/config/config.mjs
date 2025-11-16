import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Necesario para rutas absolutas en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Ejemplo: conectar a modelos
import "../Models/db.mjs";

// Ejemplo: servir vistas al crear la carpeta "views"
app.get("/", (req, res) => {
  res.send("Backend funcionando desde config.mjs 🚀");
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "Error404.html"));
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto localhost:${PORT}`);
});
