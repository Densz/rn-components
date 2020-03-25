# React-native-components

## Link the project

Symlink doesn't work with React Native Metro Bundler
An alternative is to copy all the modified files to your node_modules to have up-to-date components using `wml`

```
yarn add global wml
wml add ../rn-components ./node_modules/rn-components
wml start
```
