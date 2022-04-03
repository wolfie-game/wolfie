import {Request, Response} from 'express'
import {themeService as ThemeService} from "../services/ThemeService"

export class ThemeAPI {
  public static update = async (req: Request, res: Response) => {
    try {
      await ThemeService.update(req)
      res.json({
        message: 'Theme successfully saved'
      })
    } catch(e) {
      res.status(400)
      res.json({error: e.message})
    }
  }

  public static get = async (req: Request, res: Response) => {
    try {
      const {theme} = await ThemeService.request(Number(req.ownerId))
      res.json({theme: theme})
    } catch(e) {
      res.status(400)
      res.json({error: e.message})
    }
  }
}