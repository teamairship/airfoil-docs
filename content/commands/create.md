`airfoil [create | c]`

Creates a file and places it in the correct directory. Currently supported options:

- component
- hook

## Usage

From the root directory of the project, the `create` command can be used in the following ways:

```bash
airfoil create # guides you through a quick wizard
airfoil create component [ComponentName] [-f folderName]
airfoil create hook [useHookName] [-f folderName]
```

## Options

| Flag | Explanation                                                                              |
| ---- | ---------------------------------------------------------------------------------------- |
| -f   | Folder name. Places the newly created file in a subfolder of the file type's main folder |

## Examples

### Components

Creating a shared component:

```bash
airfoil create component Button
```

Results in:

```
.
└── components/
    └── common/
        └── Button/
            └── Button.tsx
```

Creating a component for a specific screen:

```bash
airfoil create component Avatar -f profile
```

Results in:

```
.
└── components/
    ├── auth/
    │   └── Avatar/
    │       └── Avatar.tsx
    └── common
```

### Hooks

Creating a shared hook:

```bash
airfoil create hook useWind
```

Results in:

```
.
└── hooks/
    └── useWind.ts
```
