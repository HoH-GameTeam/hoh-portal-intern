import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/graphql/schema.json',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/graphql/graphql-typescript/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};
export default config;
