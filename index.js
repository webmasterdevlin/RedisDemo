const redis = require("redis");
const client = redis.createClient();

client.on("error", err => console.log("Error: ", err));

client.set("testKey", "testValue", redis.print);
client.get("testKey", (error, result) => {
  if (error) throw error;
  console.log("Result of GET: ", result);
});
