import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,css}'],
    exclude: ['node_modules', '.git', '.next/**/*'],
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    require('@windicss/plugin-animations')({
      settings: {},
    }),
  ],
  attributify: true,
  shortcuts: {
    btn: 'rounded-lg border border-gray-300 text-gray-100 bg-blue-500 px-4 py-2 m-2 inline-block hover:shadow',
  },
});
