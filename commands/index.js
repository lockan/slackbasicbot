// Command definitions and responses
function helpme(say) {
    say("I am helping!");
};

// Export commands
module.exports = {
    helpme : (say) => { helpme(say) }
};