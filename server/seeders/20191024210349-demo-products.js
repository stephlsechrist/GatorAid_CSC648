<<<<<<< HEAD
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      product_id: "5d8671ca-78f7-434a-ba18-4c0a9db0489f",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "iClicker",
      description: "quizzes",
      price: 20,
      category: "Electronics",
      confirmation: false,
      createdAt: "2019-10-24T20:35:37.247Z",
      updatedAt: "2019-10-24T20:35:37.247Z"
    },
    {
      product_id: "97c439e5-1ecf-4aa3-a113-a784bce248f1",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "Java for Dummies",
      description: "learn java",
      price: 35,
      category: "Books",
      confirmation: false,
      createdAt: "2019-10-24T20:37:29.337Z",
      updatedAt: "2019-10-24T20:37:29.337Z"
    },
    {
      product_id: "f8436a5c-fe42-4ab7-8cb6-cdc7ebe4eb54",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "Sofa",
      description: "brand new sofa",
      price: 70,
      category: "Furniture",
      confirmation: false,
      createdAt: "2019-10-24T20:39:32.480Z",
      updatedAt: "2019-10-24T20:39:32.480Z"

    },
    {
      product_id: "e713c436-451d-4a27-9d9d-7355946e00a2",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "Nintendo Switch",
      description: "brand new never opened nintendo switch",
      price: 300,
      category: "Electronics",
      confirmation: false,
      createdAt: "2019-10-24T20:40:10.019Z",
      updatedAt: "2019-10-24T20:40:10.019Z"    
      
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
=======
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      product_id: "5d8671ca-78f7-434a-ba18-4c0a9db0489f",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "iClicker",
      description: "quizzes",
      price: 20,
      category: "Electronics",
      confirmation: false,
      createdAt: "2019-10-24T20:35:37.247Z",
      updatedAt: "2019-10-24T20:35:37.247Z"
    },
    {
      product_id: "97c439e5-1ecf-4aa3-a113-a784bce248f1",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "Java for Dummies",
      description: "learn java",
      price: 35,
      category: "Books",
      confirmation: false,
      createdAt: "2019-10-24T20:37:29.337Z",
      updatedAt: "2019-10-24T20:37:29.337Z"
    },
    {
      product_id: "f8436a5c-fe42-4ab7-8cb6-cdc7ebe4eb54",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "Sofa",
      description: "brand new sofa",
      price: 70,
      category: "Furniture",
      confirmation: false,
      createdAt: "2019-10-24T20:39:32.480Z",
      updatedAt: "2019-10-24T20:39:32.480Z"

    },
    {
      product_id: "e713c436-451d-4a27-9d9d-7355946e00a2",
      user_id: "1960da83-5253-4219-9d3a-95f611a19f54",
      name: "Nintendo Switch",
      description: "brand new never opened nintendo switch",
      price: 300,
      category: "Electronics",
      confirmation: false,
      createdAt: "2019-10-24T20:40:10.019Z",
      updatedAt: "2019-10-24T20:40:10.019Z"    
      
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
>>>>>>> c0ac8fe9f73d027a2ee04dd6eb4522bbb45a486d
