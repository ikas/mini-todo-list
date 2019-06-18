# Mini Todo List ☑️

A minimalistic todo list with an easy-to-use UI.

[**Check the demo here**](https://mini-todo-list.now.sh)

## Features

- **Todo list automatically saved to local storage** (your todos are kept persisted when you use the app in the same browser)
- **Works offline** (no authentication and barely no Internet required)
- **Quickly jot down your todos** (no loading times, just you and your todo list)
- **Awesome hotkeys** (manage your todo list without using a mouse!)

## Hotkeys

- `up` - move selected todo up
- `down` - move selected todo down
- `enter` - toggle selected todo done status
- `command+backspace` - delete selected todo

## Code features

- Full React & Redux (also a great boilerplate for other projects!)
- Styled using styled-components
- End-to-end testing using [Cypress](https://www.cypress.io/)

## File Tree

```bash
├── public                # Folder with HTML template & favicon
│   ├── favicon.png       # Example favicon
│   └── index.html        # HTML template
├── src                   # Main folder with index.js & components
│   ├── components        # Subfolder with components
│   │   ├── button.js     # Example component 1
│   │   └── container.js  # Example component 2
│   │   └── counter.js    # Example component 3
│   │   └── header.js     # Example component 4
│   └── app.js            # Main page file
│   └── index.js          # React DOM rendering options
├── .npmrc                # npm config
├── .stylelintrc          # stylelint config
├── .travis.yml           # Travis CI config
├── package.json          # Package config with scripts, list of dependencies etc.
├── webpack.config.js     # Webpack config
├── babel.config.js       # Babel config
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
