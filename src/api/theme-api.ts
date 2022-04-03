import {Request, Response} from 'express'
import {themeService as ThemeService} from "../server-db/services/ThemeService"

export class ThemeAPI {
  public static update = async (req: Request, res: Response) => {
    console.log('updatin theme', req)
    try {
      await ThemeService.update(req)
      res.json({
        message: 'Theme successfully saved'
      })
    } catch(e) {
      console.log('gettin theme error', e)
      res.status(400)
      res.json({error: e.message})
    }
  }

  public static get = async (req: Request, res: Response) => {
    try {
      console.log('gettin theme ownerId', req.ownerId)
      const {theme} = await ThemeService.request(Number(req.ownerId))
      res.json({theme: theme})
    } catch(e) {
      console.log('gettin theme error', e)
      res.status(400)
      res.json({error: e.message})
    }
  }
}
