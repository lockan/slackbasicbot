// Require the Bolt package (github.com/slackapi/bolt)
const { App, subtype, ReceiverMultipleAckError } = require("@slack/bolt");

//Load config from config.json
const appConfig = require("./config/config.json");

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

//Respond to all messages
// app.message(async ({message, say}) => {
//     console.log(message);
//     say("Did you say something?");
// });

//Respond to mentions
app.event("app_mention", async ({event, say}) => {
    console.log(event);
    say("You summoned me?")
});

//app.command(commandName, fn);
app.command("/helpme", async ({command, ack, say}) => {
    await ack();
    console.log(command);
    say("What is your command?");
});

// General case error handler.
app.error(async (error) => {
    console.error(error);
});

// ===== Start the Bot. =====
(async () => {
    // Start your app
    await app.start(appConfig.listenport || process.env.SLACK_BOT_PORT);
    console.log('SlackBasicBot is listening on port %s!', appConfig.listenport);
})();