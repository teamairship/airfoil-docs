`airfoil convert [svg]`

# convert svg

Converts `.svg` files to `.tsx` files for use in React Native.

Also installs `react-native-svg` if not already installed.

### Usage

- First, add your `.svg` files to the `app/assets/svg` directory.

```bash
airfoil convert svg
airfoil convert svg --cleanup # to remove app/assets/svg after successful conversion
```

### Args:

| Flag        | Alias  | Explanation                                 |
| ----------- | ------ | ------------------------------------------- |
| `--cleanup` | []     | remove source `.svg` files after conversion |
| `--verbose` | [`-v`] | print more detailed logs                    |
| `--debug`   | []     | print all stdout for debugging              |
