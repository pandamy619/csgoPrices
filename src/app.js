require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./config/swagger');
const skinsRouter = require('./routes/skins.route');

const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cors({
  origin: '*', // URL вашего фронта
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Swagger middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/v1/skins', skinsRouter);
// ... остальной код app.js

// Пример документации для существующего эндпоинта
/**
 * @openapi
 * /health:
 *   get:
 *     summary: Check server status
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           application/json:
 *             example: { status: "OK" }
 */
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;