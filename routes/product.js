const { checkSchema } = require("express-validator");
const productController = require("../controllers/product");

var express = require("express");
var router = express.Router();

//List Products.
router.get("/:id", productController.getProduct); //Method = GET, Param = 'ID'
router.get("/", productController.getAllProducts); //Method = GET

//Create Product
//Method = POST
//Body check with CheckSchema
router.post(
  "/",
  checkSchema({
    name: {
      errorMessage: "Please Enter a Valid Name",
      isLength: {
        options: { min: 1 },
      },
      trim: true,
    },
    price: {
      errorMessage: "Please enter a Valid Price",
      isLength: {
        options: { min: 1 },
      },
      isNumeric: {
        errorMessage: "The Price must be Number",
      },
      trim: true,
    },
    description: {
      errorMessage: "Please enter a Valid Description",
      isLength: {
        options: { min: 1, max: 250 },
      },
      trim: true,
    },
    categoryId: {
      errorMessage: "Enter a valid Category ID",
      isLength: {
        options: { min: 1 },
      },
      isNumeric: {
        errorMessage: "The Category ID must be a Number",
      },
      trim: true,
    },
  }),
  productController.createProduct
);

//Update Product
//Method = PUT
//Body check with CheckSchema
router.put(
  "/:id",
  checkSchema({
    updatedName: {
      errorMessage: "Please Enter a Valid Name",
      isLength: {
        options: { min: 1 },
      },
      trim: true,
    },
    updatedPrice: {
      errorMessage: "Please enter a Valid Price",
      isLength: {
        options: { min: 1 },
      },
      isNumeric: {
        errorMessage: "The Price must be a Number",
      },
      trim: true,
    },
    updatedDescription: {
      errorMessage: "Please enter a Valid Description",
      isLength: {
        options: { min: 1, max: 250 },
      },
      trim: true,
    },
    updatedCategoryId: {
      errorMessage: "Enter a valid Category ID",
      isLength: {
        options: { min: 1 },
      },
      isNumeric: {
        errorMessage: "The Category ID must be a Number",
      },
      trim: true,
    },
  }),
  productController.updateProduct
);

//Delete Product
//Method = DELETE
router.delete("/:id", productController.deleteProduct);

module.exports = router;
