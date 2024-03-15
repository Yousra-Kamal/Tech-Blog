const { User } = require("../models");

const userdata = [
  {
    username: "Yousra",
    password: "password123",
  },
  {
    username: "Suzan",
    password: "password1234",
  },
  {
    username: "Kimo",
    password: "password12345",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
