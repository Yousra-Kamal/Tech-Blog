const sequelize = require("../config/connection");
const seedUserData = require("./userData");
const seedBlogPost = require("./blogData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();
  await seedBlogPost();

  process.exit(0);
};

seedDatabase();
