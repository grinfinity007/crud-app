import pool from "../db/db.js"

const getAllProducts = async (req, res) => {
  try{
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "failed to fetch products"});
  }
};

const getProductById = async (req, res) => {
  try{
    const { id } = req.params;
    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1", 
      [id]
    );
    if(result.rows.length == 0){
      return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json(result.rows[0]);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Failed to fetch product"});
  }
};

const addProduct = async (req, res) => {
  try{
    const {name, price, quantity} = req.body;
    if(!name || price == null || quantity == null){
      return res.status(400).json({message: "Name, price and quantity are required"});
    };
    const result = await pool.query(
      "INSERT INTO products (name, price, quantity) VALUES ($1, $2, $3) RETURNING *",
      [name, price, quantity]
    );
    res.status(201).json(result.rows[0]);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Failed to add product"});
  };
};

const deleteProduct = async (req, res) => {
  try{
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if(result.rows.length == 0){
      return res.status(404).json({message: "Product Not found"});
    };
    res.status(200).json({message: "Product deleted successfully"});
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Couldn't delete product"});
  };
}

const updateProduct = async (req, res) => {
  try{
    const { id } = req.params;
    const {name, price, quantity} = req.body;
    if(name == null && price == null && quantity == null){
      return res.status(400).json({message: "Please enter atleast one of name, price or quantity"});
    };
    const result = await pool.query(
      "UPDATE products SET name = COALESCE($1, name), price = COALESCE($2, price), quantity = COALESCE($3, quantity) WHERE id = $4 RETURNING *",
      [name, price, quantity, id]
    );
    if(result.rows.length == 0){
      return res.status(404).json({message: "Product not found"});
    };
    res.status(200).json(result.rows[0]);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Couldn't update product"})
  }
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct
}