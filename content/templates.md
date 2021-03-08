---
title: 'Templates'
metaTitle: 'Airfoil ✈︎ Schematics'
metaDescription: 'Airfoil Schematics'
---

# Airfoil Schematics

The secret power behind Airfoil CLI is [Airfoil Schematics](https://github.com/teamairship/airfoil-schematics),
a collection of opinionated templates that come in a few different flavors.

### [BLIMP](https://github.com/teamairship/airfoil-schematics/tree/main/templates/blimp)

A minimalist app built on Axios and the Context API.

### [PROPELLER](https://github.com/teamairship/airfoil-schematics/tree/main/templates/propeller)

_COMING SOON_ - A bare-bones implementation of Redux and REST.

### [JET](https://github.com/teamairship/airfoil-schematics/tree/main/templates/jet)

A turbocharged starter-kit using Apollo Client and GraphQL.

# Common Built-In Features

All templates have some common libraries baked into them such as [React Navigation](https://reactnavigation.org/) and [React Native Config](https://github.com/luggit/react-native-config).

- Sane Prettier Defaults
- Typescript enabled by default
- Opinionated Directory Structure
  ```
  .
  └── app/
      ├── components/
      ├── hooks/
      ├── navigation/
      ├── screens/
      ├── services/
      ├── utils/
      ├── App.tsx
      ├── constants.ts
      └── global.d.ts
  ```
- [ErrorBoundary](react-native-error-boundary) already set up
- First [React Navigation](https://reactnavigation.org/) route already set up
- [React Native Config](https://github.com/luggit/react-native-config) hooked up to load `.env` vars into `app/constants.ts`
