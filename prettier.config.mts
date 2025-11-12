import type { Config } from 'prettier';

const config: Config = {
  bracketSameLine: true,
  vueIndentScriptAndStyle: true,
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  singleAttributePerLine: true,
};

export default config;
