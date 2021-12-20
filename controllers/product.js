const { validationResult } = require("express-validator");

const db = require("../models");
const Product = db.Product;
const Category = db.Category;

// Get Product by ID
exports.getProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({
      attributes: ["id", "name", "price", "description"],
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
      where: {
        id: id,
      },
    });
    product
      ? res.json(product)
      : res.status(404).json({ message: "Product " + id + " not found." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Get All Products
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "price", "description"],
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });
    products
      ? res.json(products)
      : res.status(404).json({ message: "No Products Found." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Create New Product
exports.createProduct = async (req, res, next) => {
  const errors = validationResult(req); //Check for Validation Errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const categoryId = req.body.categoryId;
  try {
    const isCategoryExists = await Category.findOne({
      //Check if Category is Valid
      where: {
        id: categoryId,
      },
    });
    if (isCategoryExists) {
      const product = await Product.create({
        name: name,
        price: price,
        description: description,
        categoryId: categoryId,
      });
      res.status(201).json({ id: product.id, message: "Product Created." });
    } else {
      res.status(400).json({ message: "Invalid Category ID." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Update Product
exports.updateProduct = async (req, res, next) => {
  const errors = validationResult(req); //Check for Validation Errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = req.params.id;
  const updatedName = req.body.updatedName;
  const updatedPrice = req.body.updatedPrice;
  const updatedDescription = req.body.updatedDescription;
  const updatedCategoryId = req.body.updatedCategoryId;
  try {
    const isCategoryExists = await Category.findOne({
      //Check if Category is Valid
      where: {
        id: updatedCategoryId,
      },
    });
    if (isCategoryExists) {
      let isValid;
      const isExists = await Product.findOne({
        //Check if Product with this name already exists
        where: {
          name: updatedName,
        },
      });
      if (isExists) {
        if (isExists.id === +id) {
          isValid = true;
        } else {
          isValid = false;
        }
      } else {
        isValid = true;
      }
      if (!isValid) {
        res.status(409).json({
          message:
            "Product with this name already exists, Only unique product name accepted.",
        });
      } else {
        const product = await Product.update(
          {
            name: updatedName,
            price: updatedPrice,
            description: updatedDescription,
            categoryId: updatedCategoryId,
          },
          {
            where: {
              id: id,
            },
          }
        );
        product[0]
          ? res.json({ id: id, message: "Product Updated." })
          : res.status(400).json({ message: "Invalid Product ID." });
      }
    } else {
      res.status(400).json({ message: "Invalid Category ID." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Delete Product
exports.deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const isDeleted = await Product.destroy({
      where: {
        id: id,
      },
    });
    isDeleted
      ? res.json({ message: "Product Deleted." })
      : res.status(404).json({ message: "ID not found." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};
