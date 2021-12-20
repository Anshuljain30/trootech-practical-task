const categoryController = require("../controllers/category");
const { checkSchema } = require("express-validator");

var express = require("express");
var router = express.Router();

// List Categories
router.get("/:id", categoryController.getCategory); //Method = GET, Param = 'ID'
router.get("/", categoryController.getAllCategories); //Method = GET

//Create Category
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
  }),
  categoryController.createCategory
);

//Update Category
//Method = PUT
//Body check with CheckSchema
router.put(
  "/:id",
  checkSchema({
    name: {
      errorMessage: "Please Enter a Valid Name",
      isLength: {
        options: { min: 1 },
      },
      trim: true,
    },
  }),
  categoryController.updateCategory
);

//Delete Category
//Method = DELETE
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
