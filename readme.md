# Styled React Boilerplate ⚛️ 💅

> Minimal & Modern Boilerplate for building apps with React & styled-components

[![Build Status](https://travis-ci.org/xxczaki/styled-react-boilerplate.svg?branch=master)](https://travis-ci.org/xxczaki/styled-react-boilerplate) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[**Demo Site**](https://styled-react-boilerplate.now.sh)

---

![](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)

## Highlights
- Easier and less complex than [create-react-app](https://github.com/facebook/create-react-app)
- Features styled-components
- Uses React Hooks
- Includes optimized Webpack & Babel configuration
- Perfect Lighthouse score
- Non-blocking CSS & fonts loading
- Friendly errors & warnings
- Ensures clean code with xo & stylelint
- Normalizes default browser style with modern-normalize
- HTML template with social media meta tags
- Targets the latest browsers
- Works offline
- Preconfigured hot reloading using [react-hot-loader](https://github.com/gaearon/react-hot-loader)

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

 $ npm install
 
# Start webpack-dev-server at port 8080

 $ npm start
 
# Run linters

 $ npm test
 
# Build app for production (gets output in the 'dist' directory)

 $ npm run build
```

## Deploying

I recommend to use either [Zeit Now](https://now.sh) or [Netlify](https://netlify.com) for hosting your site.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xxczaki/styled-react-boilerplate)

## TODO

- [ ] Testing
- [x] PWA

## Related

- [static-webpack-boilerplate](https://github.com/xxczaki/static-webpack-boilerplate)

### License

MIT
