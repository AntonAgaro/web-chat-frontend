// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'
export default withNuxt(
  // Your custom configs here
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            'indent': ['error', 2],
            '@stylistic/indent': ['error', 2],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single'],
        }
    }
)
