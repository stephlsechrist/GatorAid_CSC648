'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
        username: 'gator_aid_admin',
        email: 'gator_aid_admin@gmail.com',
        password: '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=',
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
