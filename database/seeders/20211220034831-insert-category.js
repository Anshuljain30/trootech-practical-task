"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Mobile",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fashion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Electronics",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Appliances",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Furniture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
