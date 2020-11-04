# BasicBot

Slack Bot Template using slack-api/bolt-js

## Helpful Links:
- Slack App Getting Started: https://api.slack.com/start/building/bolt
- Slack Bolt Framework: https://github.com/slackapi/bolt-js
- Slack Events API: https://api.slack.com/events

## App Scopes/Permissions Required in Workspace App Config
Info: https://api.slack.com/scopes
Legacy: https://api.slack.com/legacy/oauth-scopes

Configure app scopes at: https://api.slack.com/apps/

app_mentions:read
channels:history
chat:write
commands
im:history
im:write

Subscribe bot to the following Events:
app_mention
message.channels
message.im

## TO RUN:
SLACK_BOT_TOKEN={bot-oauth-token}
SLACK_SIGNING_SECRET={bot-signing-secret}
nodejs ...