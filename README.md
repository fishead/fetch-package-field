# fetch-package-field

print field value of current package.json to stdout.

## Install

```shell
yarn add @fishead/fetch-package-field
```

## Usage

```shell
fetch-package-field name
```

use short alias

```shell
fpf version
```

nested object

```shell
fpf bin fetch-package-field
```

array item

```shell
fpf files 0
```

without trailing newline (like `echo -n`)

```shell
fpf -n name
```
