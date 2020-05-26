# factory

On load this page show 10 fields marked as A, B, C, D .... with value 3. After page load every 2 seconds all field values change randomly. Change is randomly calculated as a number between 1 and 2, with a random sign (-, +). When adding the change to the previous value an arrow point up or down, depending on the change sign (arrow down is for -, arrow up is for +). Under each field there is a toggle button to disable/enable the change on that field. Statistic page show change statistics for all 10 fields. Chart show value changes in time. When going from '/' to '/statistics' all the changing is paused, and on returning back it is resumed.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
