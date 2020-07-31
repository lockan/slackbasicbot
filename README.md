# BasicBot

Slack Bot Template using slack-api/bolt-js

## Helpful Links:
- Slack App Getting Started: https://api.slack.com/start/building/bolt
- Slack Bolt Framework: https://github.com/slackapi/bolt-js
- Slack Events API: https://api.slack.com/events

## Dev Work-In-Progress - Next Steps:

- Verify that bot is only responding to direct messages to the bot, else fix.
- Get messages from direct chat working (channel is the bot channel)

## App Scopes/Permissions Required in Workspace App Config
Info: https://api.slack.com/scopes
Legacy: https://api.slack.com/legacy/oauth-scopes

app_mentions:read
channels:history
chat:write
commands

## TO RUN:
SLACK_BOT_TOKEN={bot-oauth-token}
SLACK_SIGNING_SECRET={bot-signing-secret}
nodejs ...