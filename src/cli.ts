import { CLI } from '@ideascol/cli-maker';

import CommandGreet from './commands/greetCommand';
import commandBye from './commands/byeCommand';

const cli = new CLI('@company/awesome-cli', 'This is a simple CLI !', {
    interactive: true,
});

cli.command(CommandGreet);
cli.command(commandBye);

cli.parse(process.argv);
