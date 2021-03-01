import convict from 'convict';

convict.addFormats(require('convict-format-with-validator'));
convict.addFormats(require('convict-format-with-moment'));

const config = convict({
  environment: {
    doc: 'The application environment.',
    format: ['production', 'staging', 'development'],
    default: 'production',
    env: 'NODE_ENV',
  },
  host: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '0.0.0.0',
    env: 'HOST',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 9090,
    env: 'PORT',
  },
});

export default config;
