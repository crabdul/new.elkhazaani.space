module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/no-danger': 'off',
        'jsx-a11y/anchor-is-valid': [ 'error',
            {
                components: [ 'Link' ],
                specialLink: [ 'hrefLeft', 'hrefRight', 'to' ],
                aspects: [ 'noHref', 'invalidHref', 'preferButton' ]
            }
        ],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        quotes: [2, 'single'],
    },
    settings: {
        'import/core-modules': []
    },
    env: {
        browser: true
    }
}
