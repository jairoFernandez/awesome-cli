import { Command, ParamType } from '@ideascol/cli-maker';
import { Bye } from '../lib';

let commandBye: Command = {
  name: 'bye',
  description: 'Say goodbye to the user',
  params: [
    {
      name: 'name',
      description: 'The name of the user to say goodbye',
      required: true,
      type: ParamType.Text
    },
    {
        name: 'website',
        description: 'The website of the user',
        required: true,
        type: ParamType.Url
    }
],
  action: (args) => {
    const {name, website} = args;
    Bye(name, website);
  }
}

export default commandBye;