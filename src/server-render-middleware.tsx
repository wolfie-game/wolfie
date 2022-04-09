import React from 'react'
import path from 'path'
import {renderToString} from 'react-dom/server'
import {Request, Response} from 'express'
import App from './components/App/App'
import {StaticRouter} from 'react-router-dom/server'
import {configureStore} from './utils/redux/store'
import {Provider as ReduxProvider} from 'react-redux'
// import {sagaMiddleware} from './utils/redux/store'
// import {watchFetchLeaders} from './utils/redux/reducers/leaderboard'
// import {rootSaga} from './utils/sagas'
import {ChunkExtractor} from '@loadable/server'
import Helmet, {HelmetData} from 'react-helmet'

const initialState = {
    user: { 
        auth: false, 
        value: null,
        theme: 'dark' 
    }, 
    leaderboard: [],
    theme: 'dark',
    topics: null
}

export default (req: Request, res: Response) => {
    const location = req.url
    const {store} = configureStore(initialState)

    function renderApp() {
        const statsFile = path.resolve('./build/loadable-stats.json');
        const chunkExtractor = new ChunkExtractor({ statsFile });
        const jsx = chunkExtractor.collectChunks(
            <ReduxProvider store={store}>
                <StaticRouter location={location}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactHtml = renderToString(jsx)
        const reduxState = store.getState()
        const helmetData = Helmet.renderStatic()

        res.send(getHtml(reactHtml, reduxState, chunkExtractor, helmetData))
    }

    // store
    //     .runSaga(rootSaga)
    //     .toPromise()
    //     .then(() => renderApp())
    //     .catch(err => {
    //         throw err
    //     });
    renderApp()
    
}

function getHtml(reactHtml: string, reduxState = {}, chunkExtractor: ChunkExtractor, helmetData: HelmetData) {
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
            <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
            <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
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
