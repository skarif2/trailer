# trailers [![Build Status](https://travis-ci.org/skarif2/trailer.svg?branch=master)](https://travis-ci.org/skarif2/trailer) [![Dependency Status](https://david-dm.org/skarif2/trailer.svg)](https://david-dm.org/skarif2/trailer) [![devDependency Status](https://david-dm.org/skarif2/trailer/dev-status.svg)](https://david-dm.org/skarif2/trailer#info=devDependencies)


### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the client and server unit tests with karma and mocha.

Use `gulp test:server` to only run server tests.

Use `gulp test:client` to only run client tests.
