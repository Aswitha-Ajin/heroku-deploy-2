const { MongoClient } = require("mongodb");

module.exports = {
  selectedDb: {},
  async connect() {
    try {
      const client = await MongoClient.connect(`mongodb+srv://guviuser:guviusername@cluster0.gpzojhx.mongodb.net/?retryWrites=true&w=majority`);
      this.selectedDb = client.db("guvi");
      console.log(this.selectedDb);
    } catch (err) {
      console.log(err);
    }
  },
};

