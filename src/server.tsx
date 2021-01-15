import express from 'express'
import path from 'path'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from './components/App'
import { Html } from './components/Html'

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('*', async (_, res) => {
  const scripts = ['vendor.js', 'main.js']

  const initialState = { initialText: 'rendered on the server!' }
  const appMarkup = renderToString(
    <App {...initialState} />
  )
  const html = renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} initialState={initialState} />
  )

  res.send(`<!DOCTYPE html> ${html}`)
})

app.listen(5000, () => console.log('Server runnin 5000'))
