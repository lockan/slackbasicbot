// Reminder: all supported commands must also be configured in Slack Bot Management console
const helpme = require("./helpme.js");

// Export commands as function bindings
module.exports = {
    HelpMe : (command, say) => helpme(command, say)
};