import React from 'react'
import path from 'path'
import {renderToString} from 'react-dom/server'
import {Request, Response} from 'express'
import Client from './Client'
import App from './components/App/App'
import {StaticRouter} from 'react-router-dom/server'
import {configureStore} from './utils/redux/store'
import {Provider as ReduxProvider} from 'react-redux'
import {sagaMiddleware} from './utils/redux/store'
import watchFetchLeaders from './utils/redux/reducers/leaderboard'
import {ChunkExtractor} from '@loadable/server'
import Helmet, {HelmetData} from 'react-helmet'

export default (req: Request, res: Response) => {
    const location = req.url
    const store = configureStore()

    sagaMiddleware.run(watchFetchLeaders)
    const statsFile = path.resolve('./build/loadable-stats.json')
    const chunkExtractor = new ChunkExtractor({ statsFile })
    const jsx = chunkExtractor.collectChunks(
        <ReduxProvider store={store}>
            <StaticRouter location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    )
    const reactHtml = renderToString(jsx)
    const reduxState = store.getState()

    res.send(getHtml(reactHtml, reduxState, chunkExtractor))
}

function getHtml(reactHtml: string, reduxState = {}, chunkExtractor: ChunkExtractor) {
    const scriptTags = chunkExtractor.getScriptTags();
    const linkTags = chunkExtractor.getLinkTags();
    const styleTags = chunkExtractor.getStyleTags();
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Wolfie</title>
            ${linkTags}
            ${styleTags}
        </head>
        <body>
            <div id="wolfie">${reactHtml}</div>
        </body>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        ${scriptTags}
    </html>
    `;
}
