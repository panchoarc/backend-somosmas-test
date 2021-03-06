require("dotenv").config();
const app = require("./app");
const db = require("./models");

const { PORT } = require("./config/environments");

async function start() {
  try {
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
start();
