'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {
        name: 'Books',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Electronics',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Furniture',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Tutoring',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Other',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  }
};
