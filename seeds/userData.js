const { User } = require("../models");

const userData = [
  {
    name: "Suzan",
    email: "auzan@hotmail.com",
    password: "password12345",
  },
  {
    name: "Yousra",
    email: "yousra@gmail.com",
    password: "password12345",
  },
  {
    name: "Kimo",
    email: "kimo@gmail.com",
    password: "password12345",
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
