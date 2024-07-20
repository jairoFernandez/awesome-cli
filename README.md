# @ideascoladmin/awesome-cli

This is a simple CLI !

## Installation
```
npm install -g @ideascoladmin/awesome-cli
```

## Usage as cli
```bash

# npm link, to test the cli locally

awesome-cli greet --name=John
```

## Usage as library

```ts
import { Greet } from '@ideascoladmin/awesome-cli';

Greet('John'); // should print 'Hello, John!'

```

