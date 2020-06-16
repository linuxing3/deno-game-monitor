import { cron, daily, monthly, weekly } from "../../deps.ts";

daily(() => {
  // backupDatabase();
});

weekly(() => {
  // sendNewsLetter();
});

// Runs the Job on 5th day of every month
monthly(() => {
  // sendUsageReport();
}, 5);

// Run Job in every 30 minutes
cron("1 */30 * * * *", () => {
  // checkStock();
});
