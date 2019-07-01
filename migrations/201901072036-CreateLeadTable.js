'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.CreateTable('Leads', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};