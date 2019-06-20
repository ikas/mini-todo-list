# Mini Todo List

✅ Minimalistic todo list with a friendly UI

✅ Data automatically saved to local storage: todos are persisted when you use the app in the same browser

✅ Works offline and 🔥**blazing fast** 🔥- no accounts, no authentication, no loading times, just you and your todo list

✅ Awesome hotkeys - manage todos without using the mouse!

[**Check the demo here**](https://mini-todo-list.now.sh)

## Hotkeys

- `up` - move selected todo up
- `down` - move selected todo down
- `enter` - toggle selected todo done status
- `command+backspace` - delete selected todo
- `command+down` - focus new todo input == add new todo

## Code features

- Full React & Redux (also a great boilerplate for other projects!)
- Styled using styled-components
- End-to-end testing using [Cypress](https://www.cypress.io/)

## File Tree

```bash
├── public                           # Folder with HTML template & favicon
│   ├── favicon.png                  # Example favicon
│   └── index.html                   # HTML template
├── src                              # Main folder with index.js & components
│   ├── components                   # Subfolder with components
│   │   ├── component                # Example component structure:
│   │     ├── index.js               # Exports the component entry point
│   │     ├── component-redux.js     # Connects component to Redux state store
│   │     ├── component-container.js # Component interactions and HOCs
│   │     └── component-view.js      # Component (dumb) view
│   ├── state                        # App state
│   │   ├── actions                  # Actions to trigger changes to the app state
│   │   ├── reducers                 # Reducers of the app
│   │   ├── create-store.js          # App state store creator
│   │   └── types.js                 # Possible action types
│   └── app.js                       # Main page file
│   └── index.js                     # React DOM rendering options
│   └── utils.js                     # Constants and helpers use app-wide
├── .npmrc                           # npm config
├── .stylelintrc                     # stylelint config
├── .travis.yml                      # Travis CI config
├── package.json                     # Package config with scripts, list of dependencies etc.
├── webpack.config.js                # Webpack config
├── babel.config.js                  # Babel config
```

## Usage

```bash
# Install dependencies
$ yarn install

# Start webpack-dev-server at port 8080
$ yarn start

# Open Cypress UI
$ yarn cypress:open

# Build app for production (gets output in the 'dist' directory)
$ yarn run build
```

## Deploying

Ready to deploy with either [Zeit Now](https://now.sh) or [Netlify](https://netlify.com).

## License

MIT
