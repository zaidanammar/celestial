/* eslint-disable @typescript-eslint/naming-convention */
import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const commitlintConfiguration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [RuleConfigSeverity.Error, 'always', 'kebab-case'],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        // general
        'components',
        'constants',
        'hooks',
        'layout',
        'models',
        'services',
        'pages',
      ],
    ],
  },
};

export default commitlintConfiguration;
