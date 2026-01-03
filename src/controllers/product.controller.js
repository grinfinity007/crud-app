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

export {getAllProducts}