// Require the Bolt package (github.com/slackapi/bolt)
const { App, LogLevel, subtype, ReceiverMultipleAckError } = require("@slack/bolt");

//Load config from config.json
const appConfig = require("./config/config.json");

//Load modules
const commands = require("./commands/");

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
    logLevel: LogLevel.INFO, // Will be overridden by config.json when app is initialized.
});

function initLogging(app, appConfig) {
    console.log("appConfig.loglevel: %s", appConfig.loglevel);
    if ( appConfig.loglevel == "" || appConfig.loglevel === undefined) {
        console.log("No log level setting was found in config.json. Using default.");
    } else {
        app.logger.setLevel(appConfig.loglevel.toLowerCase());
        console.log("App log level set to %s", app.logger.getLevel());
    }
}

// STUB for reference purposes.
// Respond to all messages
/**
app.message(async ({message, say}) => {
      console.log(message);
      say("I hear all!");
});
*/

//Respond to bot mentions
app.event("app_mention", async ({event, say}) => {
    console.log(event);
    say("You summoned me?")
});

//Respond to private IMs
app.message(async ({message, say}) => {
    console.log(message);
    if (message.channel_type == "im" || message.channel_type == "app_home") {
        say("Responding to an IM!");
    }
});

//app.command(commandName, fn);
app.command("/helpme", async ({command, ack, say}) => {
    await ack();
    console.log(command);
    commands.HelpMe(command, say);
});

// General case error handler.
app.error(async (error) => {
    console.error(error);
});

// ===== Start the Bot. =====
(async () => {
    // Init
    initLogging(app, appConfig);
    // Start app
    await app.start(appConfig.listenport || process.env.SLACK_BOT_PORT);
    app.logger.info(`SlackBasicBot is listening on port ${appConfig.listenport}!`);
})();