`airfoil add [env | appcenter]`

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
