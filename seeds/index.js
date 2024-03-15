const sequelize = require("../config/connection");

const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log("\n----- Users Seeded -----\n");

  await seedPost();
  console.log("\n----- Posts Seeded -----\n");

  await seedComments();
  console.log("\n----- Comments Seeded -----\n");

  process.exit(0);
};

seedAll();
