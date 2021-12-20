const { validationResult } = require("express-validator");

const db = require("../models");
const Category = db.Category;

// Get Category Details by ID
exports.getCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    const category = await Category.findOne({
      attributes: ["id", "name"],
      where: {
        id: id,
      },
    });
    category
      ? res.json(category)
      : res.status(404).json({ message: "Category " + id + " not found." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Get All Categories
exports.getAllCategories = async (req, res, next) => {
  const id = req.params.id;
  try {
    const categories = await Category.findAll({
      attributes: ["id", "name"],
    });
    categories
      ? res.json(categories)
      : res.status(404).json({ message: "No Categories Found." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Create Category
exports.createCategory = async (req, res, next) => {
  const errors = validationResult(req); //Check for Validation Errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const name = req.body.name;
  try {
    const isExists = await Category.findOne({
      //Check if Category already exists
      where: {
        name: updatedName,
      },
    });
    if (isExists) {
      res.status(409).json({
        message: "Category already exists, Only unique category name accepted.",
      });
    } else {
      const category = await Category.create({
        name: name,
      });
      res.status(201).json({ id: category.id, message: "Category Created." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Update Category
exports.updateCategory = async (req, res, next) => {
  const errors = validationResult(req); //Check for Validation Errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = req.params.id;
  const updatedName = req.body.name;
  try {
    const isExists = await Category.findOne({
      //Check if Category already exists
      where: {
        name: updatedName,
      },
    });
    if (isExists) {
      res.status(409).json({
        message: "Category already exists, Only unique category name accepted.",
      });
    } else {
      await Category.update(
        { name: updatedName },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({ id: id, message: "Category Updated." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

// Delete Category
exports.deleteCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    const isDeleted = await Category.destroy({
      where: {
        id: id,
      },
    });
    isDeleted //Check if deleted or not
      ? res.json({ message: "Category Deleted." })
      : res.status(404).json({ message: "ID not found." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};
