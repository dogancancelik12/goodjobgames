import { createApp } from './app';

const chalk = require('chalk');

/**
 * Start Express server.
 */

const server = createApp().then(app =>
  app.listen(app.get('port'), () => {
    console.log(
      `\n ${chalk.gray('App is running at')} ${chalk.cyan('http://%s:%d')} ${chalk.gray('in')} ${chalk.blue(
        '%s'
      )} ${chalk.green('mode')}`,
      app.get('host'),
      app.get('port'),
      app.get('env')
    );
    console.log(` ${chalk.gray('Press')} ${chalk.red('CTRL-C')} ${chalk.gray('to stop.\n')}`);
  })
);

export default server;
