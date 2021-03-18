const { alias, configPaths } = require('react-app-rewire-alias');
const { override, addBabelPlugin } = require('customize-cra');

module.exports = override((config, env) => {
  let isDev = env === 'development';

  alias({
    ...configPaths('tsconfig.base.json'),
  })(config);

  // It work only dev
  if (isDev) {
    addBabelPlugin([
      'babel-plugin-styled-components',
      {
        displayName: true,
      },
    ])(config);
  }

  return config;
});
