import {Request, Response} from 'express'
import {ThemeService} from "../server-db/services/ThemeService"

export class ThemeAPI {
  public static update = async (req: Request, res: Response) => {
    const {body} = req
    try {
      res.json({
        message: 'Theme successfully saved'
      })
    } catch(e) {
      res.status(400)
      res.json({error: e.message})
    }
  }

  public static get = async (req: Request, res: Response) => {
    const {query} = req;
    try {
      const {ownerId} = query
      const {theme} = await ThemeService.request(Number(ownerId))

      res.json({theme: theme})
    } catch(e) {
      res.status(400)
      res.json({error: e.message})
    }
  }
}
