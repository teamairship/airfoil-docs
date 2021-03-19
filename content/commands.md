---
title: 'Commands'
metaTitle: 'Airfoil ✈︎ CLI Commands'
metaDescription: 'Airfoil CLI Commands'
---

A few turbocharged commands to get your app off the ground.

# add env

Adds ENV vars to your React Native app. Updates the following files in one go:

- `.env`
- `.env.example`
- `app/constants.ts`
- `appcenter-pre-build.sh`

#### Usage:

```bash
airfoil add env MY_VAR=thingamajig
airfoil add env DEV=true
airfoil add env easyAs=abc123 # auto-magically converts to CONSTANT_CASE from camelCase or dash-case
airfoil add env # prompts to get ENV values from you if args are omitted
```

_Backstory_

Adding ENV vars is often a pain point for RN apps. In addition to updating the necessary `.env` file,
we would often forget to also update `appcenter-pre-build.sh`. This would lead to a loss of 30 min, which
definitely adds up.

This command makes it super easy _(barely an inconvenience!)_ to add new ENV vars to your RN app.

_Bonus_: if your ENV value is "true" or "false", `constants.ts` automagically casts to a boolean value.
Pretty neat!

# add appcenter

Adds dependencies and some boilerplate needed to set up AppCenter.

We use AppCenter at Airship to streamline our React Native deployments. Setting up AppCenter for the
first time can be a little intimidating if developers haven't ever worked with
ObjectiveC or Java code before.

```bash
airfoil add appcenter # follow prompts
```

# create component

Creates a functional component, and files it away for you in the appropriate folder.

Kitchen sink example:

```bash
airfoil
```

# version

Bumps the app version.

One of the more tedious and error prone parts of ReactNative app development is bumping the version number
when it's time to release a new build.

This `version` command makes it super easy _(barely an inconvenience!)_ to bump the version in any manner
ye may thitherto desire.

```bash
airfoil version patch # patch release (0.0.1 -> 0.0.2)
airfoil version minor # minor release (0.0.2 -> 0.1.0)
airfoil version major # major release (0.1.0 -> 1.0.0)
airfoil version -u 4.5.6 # update exact version
```
