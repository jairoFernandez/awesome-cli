import { CLI } from '@ideascol/cli-maker';

import CommandGreet from './commands/greetCommand';

const cli = new CLI('@company/awesome-cli', 'This is a simple CLI !');

cli.command(CommandGreet);

cli.parse(process.argv);
