`airfoil version [major | minor | patch]`

Bumps the app version.

Updates the version in `package.json` as well as `ios/` and `android/` directories.

### Usage

```bash
airfoil version patch # patch release (0.0.1 -> 0.0.2)
airfoil version minor # minor release (0.0.2 -> 0.1.0)
airfoil version major # major release (0.1.0 -> 1.0.0)
airfoil version -u 4.5.6 # update exact version
```

### Options

| Flag        | Alias  | Explanation                     |
| ----------- | ------ | ------------------------------- |
| `--update`  | [`-u`] | provide an exact version number |
| `--verbose` | [`-v`] | print more detailed logs        |

### Rationale

One of the more tedious and error prone parts of ReactNative app development is bumping the version number
when it's time to release a new build.
