"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Realme",
        price: "299",
        description: "Value for Money Mobile.",
        categoryId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Redmi",
        price: "299",
        description: "Best in Features.",
        categoryId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Motorola",
        price: "499",
        description: "Clean Android Experience.",
        categoryId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "iPhone",
        price: "999",
        description: "It's an iPhone.",
        categoryId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jeans",
        price: "49",
        description: "Faded Jeans.",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "T-Shirt",
        price: "29",
        description: "Cool T-Shirt.",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sweater",
        price: "79",
        description: "Keeps you Warm.",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Microwave Oven",
        price: "599",
        description: "Cook Food.",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rrefrigerator",
        price: "699",
        description: "Have some Chill.",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mopping Tool",
        price: "179",
        description: "Cleans your Room.",
        categoryId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iron",
        price: "59",
        description: "Avoid Wrinkles.",
        categoryId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chair",
        price: "99",
        description: "Please Sit.",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Table",
        price: "199",
        description: "Do your work.",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bed",
        price: "399",
        description: "Comfy Sleep.",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
