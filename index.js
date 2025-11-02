// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Inventarios Inteligentes — backend activo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server corriendo en http://localhost:${PORT}`));
