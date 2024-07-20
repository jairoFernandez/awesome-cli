# @company/awesome-cli

This is a simple CLI !

## Installation
```
npm install -g @company/awesome-cli
```

## Usage as cli
```bash

# npm link, to test the cli locally

awesome-cli greet --name=John
```

## Usage as library

```ts
import { Greet } from '@company/awesome-cli';

Greet('John'); // should print 'Hello, John!'

```

