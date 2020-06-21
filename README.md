# BasicBot

Slack Bot Template using slack-api/bolt-js

## Helpful Links:
- Slack App Getting Started: https://api.slack.com/start/building/bolt
- Slack Bolt Framework: https://github.com/slackapi/bolt-js
- Slack Events API: https://api.slack.com/events


## Dev Work-In-Progress - Next Steps:

- Get a basic hello-world / message response working.
- Set up a config folder with any static configs as json (url, port, etc)
- Set up the app to be able to load the config into an object
- Add a basic Dockerfile to build the app

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