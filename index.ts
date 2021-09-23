import express from "express";
import redis from "redis";

const app = express();

const client = redis.createClient();

client.set("visits", "0");

app.get("/", (_, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visitis is " + visits);
    client.set("visits", (parseInt(visits as string) + 1).toString());
  });
});

app.listen(3001, () => {
  console.log("listing port 3001");
});
