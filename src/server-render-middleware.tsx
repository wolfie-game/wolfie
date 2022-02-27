import React from 'react'
import {renderToString} from 'react-dom/server'
import {Request, Response} from 'express'
import Client from './Client'

export default (req: Request, res: Response) => {
    const jsx = (<Client />)
    const reactHtml = renderToString(jsx)

    res.send(getHtml(reactHtml))
}

function getHtml(reactHtml: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Wolfie</title>
        </head>
        <body>
            <div id="wolfie">${reactHtml}</div>
        </body>
        <script src="/main.js"></script>
    </html>
    `;
}
