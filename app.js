// Require the Bolt package (github.com/slackapi/bolt)
const { App, LogLevel, subtype, ReceiverMultipleAckError } = require("@slack/bolt");

//Load config from config.json
const appConfig = require("./config/config.json");

//Load modules
const commands = require("./commands/");
const messages = require("./messages/");

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
// app.message(async ({message, say}) => {
//      console.log(message);
//      say("I hear all!");
// });

//Respond to mentions
app.event("app_mention", async ({event, say}) => {
    console.log(event);
    say("You summoned me?")
    //TODO: Does this respond to any mention, or just to bot mentions?
});

//Respond to private DMs
// TODO

//app.command(commandName, fn);
//TODO: move internals into ./commands/helpme.js
app.command("/helpme", async ({command, ack, say}) => {
    await ack();
    console.log(command);
    //say("What is your command?");
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