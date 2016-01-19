'use strict';
import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import App from '../containers/App';
import configureStore from '../store/configureStore';

var app = express()

app.get('/', (req, res) => {
  handleRender(req, res)
})

function handleRender(req, res) {
  const store = configureStore();
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  res.send(renderFullPage(html, store.getState()))
}

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux TodoMVC example</title>
        <link href="/index.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <div class="todoapp" id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="../bundle.js"></script>
      </body>
    </html>
  `
}

app.use(express.static(__dirname + '/../../public'));

var port = 3002

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌏 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
