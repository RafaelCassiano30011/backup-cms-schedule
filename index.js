import { scheduleJob } from "node-schedule";

const data = new Date(2022, 7, 21, 21, 11);

const job = scheduleJob("*/1 * * * *", () => {
  console.log("teste");
});
console.log(job);
