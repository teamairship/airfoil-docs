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
