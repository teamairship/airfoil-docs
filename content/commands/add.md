---
title: 'Add'
metaTitle: 'Airfoil ✈︎ Add'
metaDescription: 'Airfoil command: add'
---

`airfoil add [env | appcenter | adr]`

# add env

Adds ENV vars to your React Native app. Updates the following files in one go:

- `.env`
- `.env.example`
- `app/constants.ts`
- `appcenter-pre-build.sh`

### Usage

```bash
airfoil add env MY_VAR=thingamajig
airfoil add env DEV=true # [true|false] infers boolean value in constants.ts
airfoil add env easyAs=abc123 # anyCase key converts to CONSTANT_CASE
airfoil add env # if args omitted -> prompts to get ENV key, value
```

## Options

| Flag        | Alias            | Explanation                                                       |
| ----------- | ---------------- | ----------------------------------------------------------------- |
| `--boolean` | [`--bool`, `-b`] | process as boolean ENV var                                        |
| `--comment` | [`-c`]           | add a comment for this ENV var                                    |
| `--dry`     | [`-d`]           | perform a dry test run (print Git diff without permanent changes) |
| `--verbose` | [`-v`]           | print more detailed logs                                          |
| `--debug`   | []               | print all stdout for debugging                                    |

### Rationale

Adding ENV vars is often a pain point for RN apps. In addition to updating the necessary `.env` file,
we would often forget to also update `appcenter-pre-build.sh`. This would lead to a loss of 30 min, which
definitely adds up.

This command makes it super easy to add new ENV vars to your RN app.

&nbsp;

<br/>

# add appcenter

Adds dependencies and some boilerplate needed to set up AppCenter.

The `add appcenter` command makes file changes and installs dependencies based on the [AppCenter Getting Started guide](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native).

### Usage

```bash
airfoil add appcenter # follow prompts
```

### Options

| Flag        | Alias  | Explanation                                                       |
| ----------- | ------ | ----------------------------------------------------------------- |
| `--dry`     | [`-d`] | perform a dry test run (print Git diff without permanent changes) |
| `--verbose` | [`-v`] | print more detailed logs                                          |
| `--debug`   | []     | print all stdout for debugging                                    |

### Rationale

We use AppCenter at Airship to streamline our React Native deployments. Setting up AppCenter for the
first time can be a little intimidating if developers haven't ever worked with
ObjectiveC or Java code before.

&nbsp;

<br/>

# add adr

Add an Architecture Design Record (ADR).

### Usage:

```bash
airfoil add adr # follow prompts
airfoil add adr "Choose Cognito for Auth" # specify ADR title as arg1
```
