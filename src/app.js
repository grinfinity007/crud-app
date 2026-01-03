import express from "express";

const app = express();

app.use(express.json());

import productRouter from "./routes/product.routes.js"

app.use("/api/v1/products", productRouter)

app.use("/api/v1/health", (req, res) => {
  res.status(200).json({status: "OK"})
})

export default app;