# Product CRUD API

This is a simple **CRUD REST API** built using **Node.js, Express, PostgreSQL, and Docker**.  
The main goal of this project is to **learn Docker, Docker Compose**, and how a backend service communicates with a database inside containers.

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose

---

## What This Project Does

- Create products
- Read all products or a single product
- Update products (supports partial updates)
- Delete products
- Automatically initializes the database using SQL when Docker starts

---

## Prerequisites

You only need:

- Docker
- Docker Compose

You **do NOT** need to install Node.js or PostgreSQL locally.

---

## Environment Setup

Create a `.env` file in the project root.

You can use `.env.example` as a reference.

---

## How to Run the Project

From the project root, run:

`docker compose up --build`

This will:
- Build the Node.js container
- Start PostgreSQL
- Run `init.sql` to create tables and seed data
- Start the API server

---

## Test the API

### Health Check
`GET http://localhost:3000/api/v1/health`

### Get All Products

`GET http://localhost:3000/api/v1/products`

### Get Product by id

`GET http://localhost:3000/api/v1/products/:id`

### Add a Product

`POST http://localhost:3000/api/v1/products`

**Request Body**
```json
{
  "name": "Laptop",
  "price": 75000,
  "quantity": 5
}
```

### Update a Product (Partial updates allowed)

`PATCH http://localhost:3000/api/v1/products/:id`

**Request Body**

```json
{
  "name": "xyz",
  "price": 1000,
  "quantity": 10
}
```
### Delete a Product

`DELETE http://localhost:3000/api/v1/products/:id`

---

## Conclusion

This project demonstrates how to build and run a complete backend application using **Node.js, PostgreSQL, and Docker**.  
It is intended for **learning and practice**, especially for understanding containerized backend development.

Feel free to clone the repository, run the project locally, and experiment with the API.





