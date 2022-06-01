"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      // Users tên table trong database
      "Users",
      [
        {
          email: "luuquangtri@gmail.com",
          username: "luu quang tri",
          password: "123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "luuquangtri@gmail.com",
          username: "luu quang tri1",
          password: "123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "luuquangtri@gmail.com",
          username: "luu quang tri3",
          password: "123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
