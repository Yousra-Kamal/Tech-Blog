const sequelize = require("../config/connection");
const seedUserData = require("./userData");

 

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await seedUserData();

  process.exit(0);
};

seedDatabase();
