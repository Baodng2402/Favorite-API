const Product = require("../model/product");

const productController = {
  
  //Get All
  getAllProducts: async (req, res) => {
    try {
      const product = await Product.find();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
