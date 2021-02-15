/* eslint-disable */
const path = require('path');

const jsWorkerCommonOptions = {
  workers: 2,
  workerParallelJobs: 50,
  poolParallelJobs: 50,
};

const babelWorkerOptions = {
  ...jsWorkerCommonOptions,
  name: 'babel-pool',
};

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          include: [
            path.resolve(
              __dirname,
              '../node_modules/react-native-vector-icons',
            ),
          ],
          use: [
            { loader: 'cache-loader' },
            { loader: 'thread-loader', options: babelWorkerOptions },
            {
              loader: 'babel-loader?cacheDirectory?true',
              options: {
                presets: [
                  'module:metro-react-native-babel-preset',
                  '@babel/preset-flow',
                ],
              },
            },
          ],
        },
      ],
    },
  });
};
