"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      password: {
        type: Sequelize.STRING,
      },
      phone_no: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      role: {
        type: Sequelize.ENUM(
          "admin",
          "hr",
          "reviewer",
          "user",
          "editor",
          "guest"
        ),
        allowNull: false,
        defaultValue: "guest",
      },
      varification_code: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      varification: {
        type: Sequelize.ENUM("approved", "pending"),
        allowNull: true,
        defaultValue: "pending",
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE,
      },
      deletedBy: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
