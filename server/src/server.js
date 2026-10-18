import app from "./app.js";
import configDatabase from "#configs/database/database.config";

async function mainServer() {
    const port = process.env.PORT;
  try {
    await configDatabase(); 
    app.listen(port,() => {
        console.log(`Server is up and running successfully`)
    })
  } catch (error) {
    console.error(`Error, while setup server: ${error.message}`);
  }
}

mainServer(); 
