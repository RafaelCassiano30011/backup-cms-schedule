import nodeSchedule from "node-schedule";

nodeSchedule.scheduleJob("*/1 * * * *", () => {
  console.log(new Date());
});
