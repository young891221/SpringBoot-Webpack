/**
 * Created by KimYJ on 2016-12-07.
 */
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions": {
        "sourceType": "module"
    }
};