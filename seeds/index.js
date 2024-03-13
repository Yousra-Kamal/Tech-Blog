const sequelize = require("../config/connection");
const seedUserData = require("./userData");
const seedBlogPost = require("./blogData");
const seedComments = require("./commentData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- Database Synced -----\n");

  await seedUserData();
  console.log("\n----- User Seeded -----\n");


  await seedBlogPost();
  console.log("\n----- BlogPost Seeded -----\n");

  await seedComments();
  console.log("\n----- Comment Seeded -----\n");

  process.exit(0);
};

seedDatabase();
