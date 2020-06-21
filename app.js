// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN
});

app.message(async ({message, say}) => {
  console.log(message);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 5555);
  console.log('Bolt app is running!');

})();